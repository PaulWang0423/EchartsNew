var markUrl = "/asset/get/s/data-1502962358603-HkJ6fkX_b.png";

var xDotCnt = 20;
var yDotCnt = 16;
var mineCnt = 50;
var markedCnt = 0;
var startTime = null;

var mines = [];
var isMarking = false;

var series = [{
    name: 'isNotOpen',
    type: 'scatter',
    symbol: 'rect',
    symbolSize: 23,
    data: [],
    itemStyle: {
        normal: {
            color: '#c0c0c0',
            shadowColor: '#747474',
            shadowOffsetX: 3,
            shadowOffsetY: 3
        }
    }
}, {
    name: 'mines',
    type: 'scatter',
    symbol: 'path://M1.04147922,4 C1.11795272,3.5441717 1.29721854,3.12319909 1.55462604,2.76173282 L0.818019485,2.02512627 L1.52512627,1.31801948 L2.26173282,2.05462604 C2.62319909,1.79721854 3.0441717,1.61795272 3.5,1.54147922 L3.5,0.5 L4.5,0.5 L4.5,1.54147922 C4.9558283,1.61795272 5.37680091,1.79721854 5.73826718,2.05462604 L6.47487373,1.31801948 L7.18198052,2.02512627 L6.44537396,2.76173282 C6.70278146,3.12319909 6.88204728,3.5441717 6.95852078,4 L8,4 L8,5 L6.95852078,5 C6.88204728,5.4558283 6.70278146,5.87680091 6.44537396,6.23826718 L7.18198052,6.97487373 L6.47487373,7.68198052 L5.73826718,6.94537396 C5.37680091,7.20278146 4.9558283,7.38204728 4.5,7.45852078 L4.5,8.5 L3.5,8.5 L3.5,7.45852078 C3.0441717,7.38204728 2.62319909,7.20278146 2.26173282,6.94537396 L1.52512627,7.68198052 L0.818019485,6.97487373 L1.55462604,6.23826718 C1.29721854,5.87680091 1.11795272,5.4558283 1.04147922,5 L0,5 L0,4 L1.04147922,4 Z M3,5 C3.55228475,5 4,4.55228475 4,4 C4,3.44771525 3.55228475,3 3,3 C2.44771525,3 2,3.44771525 2,4 C2,4.55228475 2.44771525,5 3,5 Z',
    symbolSize: [16, 16],
    data: [],
    itemStyle: {
        normal: {
            color: '#000'
        }
    },
    z: 10
}, {
    type: 'scatter',
    name: 'marker',
    data: [],
    symbol: 'image://' + markUrl,
    symbolSize: 20,
    z: 100
}];

var numColors = ['#0B02B7', '#147A14', '#B61A1D', '#0A0677',
    '#6A030C', '#187C79', '#000', '#7A7A7A'];
for (var i = -1; i < numColors.length; ++i) {
    series.push({
        name: 'isOpen-' + (i + 1),
        type: 'scatter',
        symbol: 'rect',
        symbolSize: 24,
        data: [],
        itemStyle: {
            normal: {
                color: '#ccc'
            }
        },
        label: {
            normal: {
                show: true,
                formatter: function (param) {
                    return param.data[2] || '';
                },
                textStyle: {
                    color: numColors[i]
                }
            }
        },
        z: 5
    });
}
series.push({
    type: 'scatter',
    name: '标记',
    data: []
});

option = {
    grid: {
        width: 500,
        height: 400,
        left: 130,
        backgroundColor: '#eee',
        borderColor: '#fefefe',
        show: true
    },
    xAxis: {
        min: -0.5,
        max: xDotCnt - 0.5,
        type: 'value',
        show: false
    },
    yAxis: {
        min: -0.5,
        max: yDotCnt - 0.5,
        type: 'value',
        inverse: true,
        show: false
    },
    series: series,
    title: [{
        text: '扫雷'
    }, {
        text: '剩余雷数：' + mineCnt,
        top: 480,
        left: 'center'
    }],
    animation: false,
    legend: {
        show: true,
        itemWidth: 25,
        itemHeight: 25,
        left: 330,
        data: [{
            name: '标记',
            icon: 'image://' + markUrl
        }],
        selected: {
            '标记': false
        }
    }
};

setTimeout(function() {
    mines = initMines();
    setOption();
}, 0);

var btn = document.createElement('button');
btn.style.position = 'absolute';
btn.style.top = '50px';
btn.style.marginLeft = '10px';
btn.setAttribute('onclick', 'restart()');
btn.innerHTML = '重新开始';
document.body.appendChild(btn);

myChart.on('click', function (param) {
    var x = param.data[0];
    var y = param.data[1];
    
    if (isMarking) {
        var s = series[2];
        var hasMarked = false;
        console.log(s.data);
        for (var i = 0, len = s.data.length; i < len; ++i) {
            if (s.data[i][0] === x && s.data[i][1] === y) {
                // Unmark
                s.data[i] = '-';
                hasMarked = true;
                mines[y][x].isMarked = false;
                --markedCnt;
                break;
            }
        }
        
        if (!hasMarked && !mines[y][x].isOpen) {
            // Mark
            s.data.push([x, y]);
            mines[y][x].isMarked = true;
            ++markedCnt;
        }
        
        myChart.setOption({
            series: s,
            title: [{
            }, {
                text: '剩余雷数：' + (mineCnt - markedCnt)
            }]
        });
    }
    else {
        var mine = mines[y][x];
        if (mine.isMarked) {
            // Do nothing when click on marked mine
            return;
        }
        if (mine.isMine) {
            gameOver(x, y);
        }
        else {
            clearSeries();
            open(x, y);
            setOption();
            checkWin();
        }
    }
});

myChart.on('legendselectchanged', function (e) {
    isMarking = e.selected['标记'];
});


function open(x, y) {
    if (!startTime) {
        startTime = new Date();
    }
    
    var mine = mines[y][x];
    if (!mine.isOpen) {
        mine.isOpen = true;
        
        if (mine.mineNeighbors === 0) {
            // Open neighbors
            if (x > 0) {
                open(x - 1, y);
                if (y > 0) {
                    open(x - 1, y - 1);
                }
                if (y < yDotCnt - 1) {
                    open(x - 1, y + 1);
                }
            }
            if (y > 0) {
                open(x, y - 1);
            }
            if (y < yDotCnt - 1) {
                open(x, y + 1);
            }
            if (x < xDotCnt - 1) {
                open(x + 1, y);
                if (y > 0) {
                    open(x + 1, y - 1);
                }
                if (y < yDotCnt - 1) {
                    open(x + 1, y + 1);
                }
            }
        }
    }
}

function gameOver(x, y) {
    // Show mines series
    var mineData = [];
    for (var j = 0; j < yDotCnt; ++j) {
        for (var i = 0; i < xDotCnt; ++i) {
            if (mines[j][i].isMine) {
                mineData.push([i, j]);
            }
        }
    }
    series[1].data = mineData;
    
    if (x !== null) {
        // Set backgroundColor of (x, y) to be red
        var data = getSeries(mines[y][x].mineNeighbors).data;
        data.push({
            value: [x, y],
            itemStyle: {
                normal: {
                    color: '#f00'
                }
            }
        });
    }
    
    myChart.setOption({
        series: series
    });
}

window.restart = function () {
    initMines();
    setOption();
    
    series[2].data = [];
    
    isMarking = false;
    markedCnt = 0;
    startTime = null;
    
    myChart.setOption({
        series: series,
        legend: {
            selected: {
                '标记': false
            }
        },
        title: [{
        }, {
            text: '剩余雷数：' + mineCnt
        }]
    })
};

function initMines() {
    mines = [];
    for (var y = 0; y < yDotCnt; ++y) {
        var line = [];
        for (var x = 0; x < xDotCnt; ++x) {
            line.push({
                isMine: false,
                isOpen: false,
                mineNeighbors: 0
            });
        }
        mines.push(line);
    }
    
    for (var i = 0; i < mineCnt; ++i) {
        var x = Math.ceil(Math.random() * xDotCnt) - 1;
        var y = Math.ceil(Math.random() * yDotCnt) - 1;
        if (mines[y][x].isMine) {
            // Reassign the same mine
            --i;
            continue;
        }
        
        mines[y][x].isMine = true;
        if (x > 0) {
            ++mines[y][x - 1].mineNeighbors;
            if (y > 0) {
                ++mines[y - 1][x - 1].mineNeighbors;
            }
            if (y < yDotCnt - 1) {
                ++mines[y + 1][x - 1].mineNeighbors;
            }
        }
        if (y > 0) {
            ++mines[y - 1][x].mineNeighbors;
        }
        if (y < yDotCnt - 1) {
            ++mines[y + 1][x].mineNeighbors;
        }
        if (x < xDotCnt - 1) {
            ++mines[y][x + 1].mineNeighbors;
            if (y > 0) {
                ++mines[y - 1][x + 1].mineNeighbors;
            }
            if (y < yDotCnt - 1) {
                ++mines[y + 1][x + 1].mineNeighbors;
            }
        }
    }
    return mines;
}


function setOption() {
    clearSeries();
    var notOpenData = series[0].data;
    
    for (var y = 0; y < yDotCnt; ++y) {
        for (var x = 0; x < xDotCnt; ++x) {
            var mine = mines[y][x];
            if (mine.isOpen) {
                var data = getSeries(mine.mineNeighbors).data;
                data.push([x, y, mine.mineNeighbors]);
            }
            else {
                notOpenData.push([x, y]);
            }
        }
    }
    
    myChart.setOption({
        series: series
    });
}

function clearSeries() {
    for (var i = 0; i < series.length; ++i) {
        if (i === 2) {
            continue;
        }
        series[i].data = [];
    }
}

function getSeries(neighbors) {
    return series[3 + neighbors];
}

function checkWin() {
    var isWin = true;
    for (var i = 0; i < xDotCnt && isWin; ++i) {
        for (var j = 0; j < yDotCnt; ++j) {
            var mine = mines[j][i];
            if (!mine.isMine && !mine.isOpen) {
                console.log(i, j, mine);
                isWin = false;
                break;
            }
        }
    }
    if (isWin) {
        var end = new Date();
        var sec = (end - startTime) / 1000;
        alert('赢啦！用时 ' + sec + '秒，很不错哦！');
        gameOver(null);
    }
}
