
option = {
    series: []
};

/**
 * Given a set of points, lay them out in a phyllotaxis layout.
 * Mutates the `points` passed in by updating the x and y values.
 *
 * @param {Object[]} points The array of points to update. Will get `x` and `y` set.
 * @param {Number} pointWidth The size in pixels of the point's width. Should also include margin.
 * @param {Number} xOffset The x offset to apply to all points
 * @param {Number} yOffset The y offset to apply to all points
 *
 * @return {Object[]} points with modified x and y
 */
function phyllotaxisLayout(points, pointWidth, xOffset = 0, yOffset = 0, iOffset = 0) {
    // theta determines the spiral of the layout
    var theta = Math.PI * (3 - Math.sqrt(5));

    var pointRadius = pointWidth / 2;

    points.forEach((point, i) => {
        var index = (i + iOffset) % points.length;
        var phylloX = pointRadius * Math.sqrt(index) * Math.cos(index * theta);
        var phylloY = pointRadius * Math.sqrt(index) * Math.sin(index * theta);

        point.x = xOffset + phylloX - pointRadius;
        point.y = yOffset + phylloY - pointRadius;
    });

    return points;
}

/**
 * Given a set of points, lay them out in a grid.
 * Mutates the `points` passed in by updating the x and y values.
 *
 * @param {Object[]} points The array of points to update. Will get `x` and `y` set.
 * @param {Number} pointWidth The size in pixels of the point's width. Should also include margin.
 * @param {Number} gridWidth The width of the grid of points
 *
 * @return {Object[]} points with modified x and y
 */
function gridLayout(points, pointWidth, gridWidth) {
    var pointHeight = pointWidth;
    var pointsPerRow = Math.floor(gridWidth / pointWidth);
    var numRows = points.length / pointsPerRow;

    points.forEach((point, i) => {
        point.x = pointWidth * (i % pointsPerRow);
        point.y = pointHeight * Math.floor(i / pointsPerRow);
    });

    return points;
}

/**
 * Given a set of points, lay them out randomly.
 * Mutates the `points` passed in by updating the x and y values.
 *
 * @param {Object[]} points The array of points to update. Will get `x` and `y` set.
 * @param {Number} pointWidth The size in pixels of the point's width. Should also include margin.
 * @param {Number} width The width of the area to place them in
 * @param {Number} height The height of the area to place them in
 *
 * @return {Object[]} points with modified x and y
 */
function randomLayout(points, pointWidth, width, height) {
    points.forEach((point, i) => {
        point.x = Math.random() * (width - pointWidth);
        point.y = Math.random() * (height - pointWidth);
    });

    return points;
}

/**
 * Given a set of points, lay them out in a sine wave.
 * Mutates the `points` passed in by updating the x and y values.
 *
 * @param {Object[]} points The array of points to update. Will get `x` and `y` set.
 * @param {Number} pointWidth The size in pixels of the point's width. Should also include margin.
 * @param {Number} width The width of the area to place them in
 * @param {Number} height The height of the area to place them in
 *
 * @return {Object[]} points with modified x and y
 */
function sineLayout(points, pointWidth, width, height) {
    var amplitude = 0.3 * (height / 2);
    var yOffset = height / 2;
    var periods = 3;
    var yScale = d3.scaleLinear()
        .domain([0, points.length - 1])
        .range([0, periods * 2 * Math.PI]);

    points.forEach((point, i) => {
        point.x = (i / points.length) * (width - pointWidth);
        point.y = amplitude * Math.sin(yScale(i)) + yOffset;
    });

    return points;
}

/**
 * Given a set of points, lay them out in a spiral.
 * Mutates the `points` passed in by updating the x and y values.
 *
 * @param {Object[]} points The array of points to update. Will get `x` and `y` set.
 * @param {Number} pointWidth The size in pixels of the point's width. Should also include margin.
 * @param {Number} width The width of the area to place them in
 * @param {Number} height The height of the area to place them in
 *
 * @return {Object[]} points with modified x and y
 */
function spiralLayout(points, pointWidth, width, height) {
    var amplitude = 0.3 * (height / 2);
    var xOffset = width / 2;
    var yOffset = height / 2;
    var periods = 20;

    var rScale = d3.scaleLinear()
        .domain([0, points.length - 1])
        .range([0, Math.min(width / 2, height / 2) - pointWidth]);

    var thetaScale = d3.scaleLinear()
        .domain([0, points.length - 1])
        .range([0, periods * 2 * Math.PI]);

    points.forEach((point, i) => {
        point.x = rScale(i) * Math.cos(thetaScale(i)) + xOffset
        point.y = rScale(i) * Math.sin(thetaScale(i)) + yOffset;
    });

    return points;
}




/**
 * Generate an object array of `numPoints` length with unique IDs
 * and assigned colors
 */
function createPoints(numPoints, pointWidth, width, height) {
    var colorScale = d3.scaleSequential(d3.interpolateViridis)
        .domain([numPoints - 1, 0]);

    var points = d3.range(numPoints).map(id => ({
        id,
        color: colorScale(id),
    }));

    return randomLayout(points, pointWidth, width, height);
}

// canvas settings
var width = myChart.getZr().getWidth();
var height = myChart.getZr().getHeight();

// point settings
var numPoints = 7000;
var pointWidth = 3;
var pointMargin = 3;

// animation settings
var duration = 1500;
var ease = d3.easeCubic;
var timer;
var currLayout = 0;

// create set of points
var points = createPoints(numPoints, pointWidth, width, height);

// wrap layout helpers so they only take points as an argument
var toGrid = (points) => gridLayout(points,
    pointWidth + pointMargin, width);
var toSine = (points) => sineLayout(points,
    pointWidth + pointMargin, width, height);
var toSpiral = (points) => spiralLayout(points,
    pointWidth + pointMargin, width, height);
var toPhyllotaxis = (points) => phyllotaxisLayout(points,
    pointWidth + pointMargin, width / 2, height / 2);

// store the layouts in an array to sequence through
var layouts = [toSine, toPhyllotaxis, toSpiral, toPhyllotaxis, toGrid];

// animate the points to a given layout
function animate(rects, layout) {
    // store the source position
    points.forEach(point => {
        point.sx = point.x;
        point.sy = point.y;
    });

    // get destination x and y position on each point
    layout(points);

    // store the destination position
    points.forEach(point => {
        point.tx = point.x;
        point.ty = point.y;
    });

    timer = d3.timer((elapsed) => {
        // compute how far through the animation we are (0 to 1)
        var t = Math.min(1, ease(elapsed / duration));

        // update point positions (interpolate between source and target)
        points.forEach(point => {
            point.x = point.sx * (1 - t) + point.tx * t;
            point.y = point.sy * (1 - t) + point.ty * t;
        });

        // update what is drawn on screen
        rects.forEach(function(rect, idx) {
            rect.setShape('x', rect.__point__.x);
            rect.setShape('y', rect.__point__.y);
        });

        // if this animation is over
        if (t === 1) {
            // stop this timer for this layout and start a new one
            timer.stop();

            // update to use next layout
            currLayout = (currLayout + 1) % layouts.length;

            // start animation for next layout
            animate(rects, layouts[currLayout]);
        }
    });
}
myChart.getZr().clear();
var rects = points.map(function(pt) {
    var rect = new echarts.graphic.Rect({
        shape: {
            width: pointWidth,
            height: pointWidth
        },
        style: {
            fill: pt.color
        },
        silent: true,
        __point__: pt
    });
    myChart.getZr().add(rect);
    return rect;
});

// start off as a grid
toGrid(points);

rects.forEach(function(rect, idx) {
    rect.setShape('x', rect.__point__.x);
    rect.setShape('y', rect.__point__.y);
});

setTimeout(function () {
    // start the animation
    animate(rects, layouts[currLayout]);
}, 1000)
