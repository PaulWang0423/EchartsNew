option = {
    backgroundColor: '#260765',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '30%',
        top: '20%',
        containLabel: true
    },
    xAxis: [
        {
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#0E2A43'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14,
                color: '#D5CBE8'
            }
        },
        axisTick: {
            show: false
        },
        data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
    }, {
        axisPointer: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#0E2A43'
            }
        },
        axisTick: {
            show: false
        },
        position: 'bottom',
        offset: 20
    }],
    yAxis: [{
        type: 'value',
        name: '单位（%）',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#0E2A43'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14,
                color: '#D5CBE8'
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#57617B'
            }
        }
    }],
    series: [{
        name: '移动',
        type: 'line',
        smooth: true,
        stack: '总量',
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        animationDelay: 2000,
        animationDuration: 1000,
        markPoint: {
            // symbol: 'image://url',
            data: [
                {type: 'max', name: '最大值'}
            ],
            animationDelay: 3000,
            animationDuration: 1000
        },
        lineStyle: {
            normal: {
                width: 1,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: 'red' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'grey' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                opacity: 0.9
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(137, 189, 27, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(137, 189, 27, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(137,189,27)',
                borderColor: 'rgba(137,189,2,0.27)',
                borderWidth: 12

            }
        },
        data: [220, 182, 191, 134, 250, 120, 110, 125, 145, 122, 165, 122]
    }, {
        name: '电信',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        stack: '总量',
        symbolSize: 5,
        animationDelay: 1000,
        animationDuration: 1000,
        markPoint: {
            data: [
                {type: 'max', name: '最大值'}
            ],
            animationDelay: 2000,
            animationDuration: 1000
        },
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: 'red' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'yellow' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                opacity: 0.9
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 236, 212, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 236, 212, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,136,212)',
                borderColor: 'rgba(0,136,212,0.2)',
                borderWidth: 12

            }
        },
        data: [120, 110, 125, 145, 122, 165, 122, 220, 282, 191, 134, 150]
    }, {
        name: '联通',
        type: 'line',
        stack: '总量',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        animationDelay: 0,
        animationDuration: 1000,
        markPoint: {
            data: [
                {type: 'max', name: '最大值'}
            ],
            animationDelay: 1000,
            animationDuration: 1000
        },
        lineStyle: {
            normal: {
                width: 1,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: 'red' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'yellowgreen' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                opacity: 0.9
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(219, 50, 51, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(219, 50, 51, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {

                color: 'rgb(219,50,51)',
                borderColor: 'rgba(219,50,51,0.2)',
                borderWidth: 12
            }
        },
        data: [220, 182, 325, 145, 122, 191, 134, 150, 120, 110, 165, 122]
    }, ]
};