
var baseTop = 50;
var gridHeight = 50;

var data = {
    cpu: ['10','25','25','25','25','25','25'],
    memory:['10','25','25','25','25'],
    frame: ['10','25','25','25','250'],
};

function makeXAxis(gridIndex, opt) {
    return echarts.util.merge({
        type: 'category',
        gridIndex: gridIndex,
        axisLine: {onZero: false, lineStyle: {color: '#ddd'}},
        axisTick: {show: false},
        axisLabel: {show: false},
        splitLine: {show: false, lineStyle: {color: '#ddd'}},
        data:['2021-12-10', '2021-12-11', '2021-12-12', '2021-12-13', '2021-12-14', '2021-12-15', '2021-12-16'],
        axisPointer: {
            lineStyle: {color: 'transparent'}
        }
    }, opt || {}, true);
}

function makeYAxis(gridIndex, opt) {
    return echarts.util.merge({
        type: 'value',
        gridIndex: gridIndex,
        nameLocation: 'center',
        //  nameGap:50,
        nameRotate:0,
         boundaryGap: false,
        //  boundaryGap: true,
        nameTextStyle: {
            color: '#333'
        },
        axisTick: {show: false},
        axisLine: {lineStyle: {color: '#ccc'}},
        axisLabel: {show: false},
        splitLine: {show: false}
    }, opt || {}, true);
}

function makeGrid(top, opt) {
    return echarts.util.merge({
        top: top,
        height: gridHeight,
    }, opt || {}, true);
}

option = {
    tooltip: {
        trigger: 'axis',
    },
    title: {
        text: 'Profile',
        left: 'center'
    },
    axisPointer: {
        link: [{xAxisIndex: 'all'}],
        // snap: true
    },
    grid: [
        makeGrid(baseTop),
        makeGrid(baseTop + gridHeight),
        makeGrid(baseTop + gridHeight * 2),
        makeGrid(baseTop + gridHeight * 3 ),
        makeGrid(baseTop + gridHeight * 4 ),
        makeGrid(baseTop, {
            show: true,
            height: gridHeight * 5,
            borderColor: '#ccc',
            borderWidth: 1,
            z: 10,

        })
    ],
    xAxis: [
        makeXAxis(0,{ position: 'top',
                    axisLine: {show: true, onZero: true},
                    splitLine: {show: false},
                    axisLabel: {show: true, textStyle: {color: '#555'}},
                   }),
        makeXAxis(1),
        makeXAxis(2),
        makeXAxis(3),
        makeXAxis(4,)
    ],
    yAxis: [
        makeYAxis(0, {
            name: 'TCP????????????'
        }),
        makeYAxis(1, {
            name: 'TCP????????? '
        }),
        makeYAxis(2, {
            name: '??????/???????????? '
        }),
        makeYAxis(3, {
            name: '???????????????(dbm) '
        }),
        makeYAxis(4,{
             name: 'WLAN???????????????'
        })
    ],
    dataZoom: [{
        type: 'slider',
          "height": 15,
           bottom:'1%',
        // top: baseTop + gridHeight * 4 + 20,
        xAxisIndex: [0, 1, 2, 3, 4]
    }, {
        type: 'inside',
        xAxisIndex: [0, 1, 2, 3, 4]
    }],
    series: [{
        name: 'TCP???????????? ',
        type: 'line',
        symbol: 'circle',
        symbolSize: 2,
         xAxisIndex: 0,
        yAxisIndex: 0,
        itemStyle: {
            normal: {
                color: '#5193f2'
            }
        },
        data: data.cpu
    }, {
        name: 'memory',
        type: 'line',
        symbol: 'circle',
        symbolSize: 2,
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                color: '#75b228'
            }
        },
        data: data.memory
    }, {
        name: 'frame',
        type: 'line',
        symbol: 'circle',
        symbolSize: 2,
        xAxisIndex: 2,
        yAxisIndex: 2,
        itemStyle: {
            normal: {
                color: '#e29304'
            }
        },
        data: data.frame
    }, {
        name: 'frame',
        type: 'line',
        symbol: 'circle',
        symbolSize: 3,
        xAxisIndex: 3,
        yAxisIndex: 3,
        itemStyle: {
            normal: {
                color: '#e29304'
            }
        },
        data: data.frame
    }, {
        name: 'WLAN???????????????',
        type: 'line',
        symbol: 'circle',
        symbolSize:2,
        xAxisIndex: 4,
        yAxisIndex: 4,
        itemStyle: {
            normal: {
                color: '#333'
            }
        },
        data: data.frame
    }]
};
