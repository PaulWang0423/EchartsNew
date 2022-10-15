var getDayTime = function() {
    var temp = [];
    for (var i = 0; i < 500; i++) {
        var hour = i;
        temp.push(hour);
    }
    return temp;
};

var getRandomData = function(val) {
    var temp = [];
    for (var i = 0; i < 500; i++) {
        var item = Math.random() * 100 - Math.random() * 50;
        temp.push(Math.abs(item).toFixed(0));
    }

    return temp;
};
option = {
    color: [
        '#66CCFF',
        '#CC6666',
        '#66CCCC',
        '#FF9999',
        '#26A69A',
        '#6200EA'
    ],
    title: {
        text: 'test',
        top: -5
    },
    grid: [{
            top: '9%',
            bottom: 0,
            left: '5%',
            right: '5%',
            height: '22%'
        },
        {
            top: '35.5%',
            bottom: 0,
            left: '5%',
            right: '5%',
            height: '22%'
        },
        {
            top: '62.5%',
            bottom: 0,
            left: '5%',
            right: '5%',
            height: '13%'
        },
        {
            top: '79.5%',
            bottom: 0,
            left: '5%',
            right: '5%',
            height: '12%'
        }
    ],

    axisPointer: {
        link: {
            xAxisIndex: 'all'
        }
    },
    legend: {
        data: ['左1', '右1', '左2', '右2', '右3', '右4']
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            if (params instanceof Array) {
                var idxMap = [{
                    text: '占比',
                    data: []
                }];
                var time = params[0].axisValue;
                for (var i = 0; i < params.length; i++) {
                    var seriesIdx = params[i].seriesId.split(
                        params[i].seriesId[0]
                    );
                    idxMap[seriesIdx[2]].data.push({
                        marker: params[i].marker,
                        seriesName: params[i].seriesName,
                        data: params[i].data
                    });
                }

                return (
                    '<div>' +
                    '<time>' +
                    time +
                    '</time>' +
                    '<br />' +
                    idxMap
                    .map(function(item) {
                        return (
                            '<span>' +
                            item.text +
                            '</span>' +
                            item.data
                            .map(function(i_item) {
                                return (
                                    '<p style="margin: 0;padding: 0;">' +
                                    i_item.marker +
                                    i_item.seriesName +
                                    ': ' +
                                    i_item.data +
                                    '</p>'
                                );
                            })
                            .join('')
                        );
                    })
                    .join('')
                ); +
                '</div>';
            }
        }
    },
    xAxis: [{
            type: 'category',
            gridIndex: 0,
            position: 'bottom',
            axisLabel: {
                interval: 0
            },
            data: getDayTime(),
            show: false,
            boundaryGap: true
        },
        {
            type: 'category',
            gridIndex: 1,
            position: 'bottom',
            data: getDayTime(),
            boundaryGap: true
        },
        {
            type: 'category',
            gridIndex: 2,
            position: 'bottom',
            axisLabel: {
                show: true
            },
            data: getDayTime(),
            show: false,
            boundaryGap: true
        },
        {
            type: 'category',
            gridIndex: 3,
            position: 'bottom',
            axisLabel: {
                show: true
            },
            data: getDayTime(),
            show: false,
            boundaryGap: true
        }
    ],
    yAxis: [{
            name: '左1',
            type: 'value',
            nameTextStyle: {
                fontSize: 14
            },
            min: 0,
            max: 100,
            gridIndex: 0,
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            position: 'left',
            nameLocation: 'center',
            nameGap: 30
        },
        {
            name: '左2',
            type: 'value',
            nameTextStyle: {
                fontSize: 14
            },
            min: 0,
            max: 1000,
            gridIndex: 1,
            inverse: false,
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            nameLocation: 'center',
            nameGap: 30
        },
        {
            name: '右2',
            type: 'value',
            nameTextStyle: {
                fontSize: 14
            },
            min: 0,
            max: 100,
            gridIndex: 1,
            inverse: false,
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            nameLocation: 'center',
            nameGap: 30,
            nameRotate: -90
        },
        {
            name: '右1',
            type: 'value',
            nameTextStyle: {
                fontSize: 14
            },
            min: 0,
            max: 100,
            gridIndex: 0,
            inverse: false,
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            nameLocation: 'center',
            nameGap: 30,
            nameRotate: -90
        },
        {
            name: '右3',
            type: 'value',
            nameTextStyle: {
                fontSize: 14
            },
            min: 0,
            max: 100,
            gridIndex: 2,
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            position: 'right',
            nameLocation: 'center',
            nameGap: 30,
            nameRotate: -90
        },
        {
            name: '右4',
            type: 'value',
            nameTextStyle: {
                fontSize: 14
            },
            gridIndex: 3,
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            position: 'right',
            nameLocation: 'center',
            nameGap: 30,
            nameRotate: -90
        }
    ],
    dataZoom: [{
            type: 'slider',
            show: true,
            xAxisIndex: [0, 1, 2, 3],
            start: 50,
            end: 100
        },
        {
            type: 'inside',
            xAxisIndex: [0, 1, 2, 3]
        }
    ],
    series: [{
            name: '左1',
            type: 'line',
            data: getRandomData(),
            yAxisIndex: 0,
            symbol: 'none',
            smooth: true
        },
        {
            name: '左2',
            type: 'line',
            xAxisIndex: 1,
            data: getRandomData(),
            yAxisIndex: 1,
            symbol: 'none',
            smooth: true
        },
        {
            name: '右1',
            type: 'line',
            xAxisIndex: 0,
            data: getRandomData(),
            yAxisIndex: 3,
            symbol: 'none',
            smooth: true
        },
        {
            name: '右2',
            type: 'line',
            xAxisIndex: 1,
            data: getRandomData(),
            yAxisIndex: 2,
            symbol: 'none',
            smooth: true
        },
        {
            name: '右3',
            type: 'line',
            xAxisIndex: 2,
            yAxisIndex: 4,
            data: getRandomData(),
            symbol: 'none',
            smooth: true
        },
        {
            name: '右4',
            type: 'bar',
            xAxisIndex: 3,
            yAxisIndex: 5,
            data: getRandomData(),
            symbol: 'none',
            smooth: true,
            barWidth: 2
        }
    ]
}