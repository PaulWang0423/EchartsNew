var categoryData = [];
var errorData = [];
var barData = [];
var dataCount = 100;
for (var i = 0; i < dataCount; i++) {
  var val = Math.random() * 1000;
  categoryData.push('category' + i);
  errorData.push([
    i,
    echarts.number.round(Math.max(0, val - Math.random() * 100)),
    echarts.number.round(val + Math.random() * 80),
  ]);
  barData.push(echarts.number.round(val, 2));
}
option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  title: {
    text: 'Error bar chart',
  },
  legend: {
    data: ['bar', 'error'],
  },
  dataZoom: [
    {
      type: 'slider',
      start: 50,
      end: 70,
    },
    {
      type: 'inside',
      start: 50,
      end: 70,
    },
  ],
  xAxis: {
    data: categoryData,
  },
  yAxis: {},
  series: [
    // {
    //   type: 'bar',
    //   name: 'bar',
    //   data: barData,
    //   itemStyle: {
    //     color: '#77bef7'
    //   }
    // },
    {
      type: 'custom',
      name: 'error',
      itemStyle: {
        borderWidth: 1.5,
      },
      renderItem: function (params, api) {
        var xValue = api.value(0);
        var highPoint = api.coord([xValue, api.value(1)]);
        var lowPoint = api.coord([xValue, api.value(2)]);
        var halfWidth = api.size([1, 0])[0] * 0.1;
        var style = api.style({
          stroke: api.visual('color'),
          fill: api.visual('color'),
        });
        return {
          type: 'group',
          children: [
            {
              type: 'circle',
              transition: ['shape'],
              shape: {
                cx: highPoint[0],
                cy: highPoint[1],
                r: halfWidth,
              },
              style: {
                stroke: 'red',
                fill: 'red',
              },
            },
            {
              type: 'circle',
              transition: ['shape'],
              shape: {
                cx: lowPoint[0],
                cy: lowPoint[1],
                r: halfWidth,
              },
              style: {
                stroke: 'green',
                fill: 'green',
              },
            },
            {
              type: 'line',
              transition: ['shape'],
              shape: {
                x1: highPoint[0],
                y1: highPoint[1],
                x2: lowPoint[0],
                y2: lowPoint[1],
              },
              style: style,
            },
            
          ],
        };
      },
      encode: {
        x: 0,
        y: [1, 2],
      },
      data: errorData,
      z: 100,
    },
  ],
};
