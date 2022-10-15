var xData2 = ["01", "02", "03", "04", "05", "06", "07"];
var data1 = [100, 60, 130, 170, 140, 100,140];
var path = 'path://M214,1079l8-6h16l8,6-8,6H222Z';
let colorList = {
    type: 'linear',
  x: 1,
  y: 0,
  x2: 0,
  y2: 0,
  colorStops: [{
        offset: 0,
        color: 'RGBA(43,102,139,0.6)',
    },
    {
        offset: .2,
        color: 'RGBA(43,102,139,0.9)'
    },
    {
        offset: .2,
        color: 'RGBA(56,153,190,0.8)'
    },
    {
        offset: .5,
        color: 'RGBA(56,153,190,0.9)'
    },
    {
        offset: .8,
        color: 'RGBA(56,153,190,0.8)'
    },
    {
        offset: .8,
        color: 'RGBA(43,102,139,0.9)'
    },
    {
        offset: 1,
        color: 'RGBA(43,102,139,0.6)'
    }],
    global: false // 缺省为 false
}
option = {
    backgroundColor: '#041524',
    grid: {
        left: 100,
        bottom: 100
    },
    xAxis: {
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 30
            },
            margin: 20,
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255, 255,255, .8)',
                width: 3,
            }
        },
        splitArea: {
            show: false,
        },
        axisTick: {
            show: false
        },
        data: xData2
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#fff',
                width: 3,
            }
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 30
            },
            margin: 20,
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    },
    series: [{
            name: "",
            type: "pictorialBar",
            symbol: path,
            symbolSize: [45.5, 25],
            symbolOffset: [0, 12],
            z: 1,
            itemStyle: {
                opacity: 1,
                color:colorList,
                shadowColor: 'rgba(115, 106, 28, .7)',
                shadowBlur: 3,
                shadowOffsetX: 0,
                shadowOffsetY: 2
            },
            data: [1, 1, 1, 1, 1, 1,1]
        },
        {
            name: '2020',
            type: 'bar',
            symbol: path,
            barWidth: 45,
            barGap: '-100%',
            z: 10,
            itemStyle: {
                color:colorList
            },
            data: data1
        },
        {
            name: "",
            type: "pictorialBar",
            symbol: path,
            symbolSize: [45, 25],
            symbolOffset: [0, -12],
            z: 12,
            itemStyle: {
                opacity: 1,
                color: '#69d8ff'
            },
            symbolPosition: "end",
            data: data1
        },
    ]
};