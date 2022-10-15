//柱图
var _boyActual = [60, 30, 50, 32, 93, 34, 15, 23];
option = {
    title: {
        text: 'label的使用',
        top: '5%',
        left: 'center',
        textStyle: {
            color: '#FFF',
            align: 'center',
        }
    },
    backgroundColor: '#050f18',
    grid: {
        left: '9%',
        right: '10%',
        top: '20%',
        bottom: '15%',
        containLabel: true
    },
    tooltip: {
        show: false,
        trigger: 'item'
    },
    xAxis: [{
        type: 'category',
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#262b35'
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#262b35'
            }
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月']
    }],
    yAxis: [{
            type: 'value',
            name: '(人)',
            min: 0,
            max: 100,
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#fff'
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#262b35'
                }
            }
        },

    ],
    series: [{
            name: '',
            type: 'bar',
            barWidth: 6,
            silent: false,
            // yAxisIndex: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 15,
                    color: {
                        type: 'bar',
                        colorStops: [{
                            offset: 0,
                            color: '#0327410a' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#0327410a' // 100% 处的颜色
                        }],
                        globalCoord: false, // 缺省为 false
                    },
                    label: {
                        show: true,
                        position: 'insideTop',
                        formatter: '   ',
                        backgroundColor: 'rgb(255, 33, 0)',
                        distance: 0,
                        borderColor: 'rgba(255, 33, 0, 0.5)',
                        borderWidth: 15,
                        borderRadius: 10,
                        color: '#fff'
                    }
                }
            },
            data: _boyActual

        },
        {
            name: '',
            type: 'bar',
            barWidth: 6,
            silent: false,
            itemStyle: {
                normal: {
                    barBorderRadius: 15,
                    color: {
                        type: 'bar',
                        colorStops: [{
                            offset: 0,
                            color: '#0327410a' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#0327410a' // 100% 处的颜色
                        }],
                        globalCoord: false, // 缺省为 false
                    },

                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'insideTopRight',
                    // formatter: '{c}%',
                    distance: 0,
                    offset: [45, -6],
                    color: '#fff',
                    fontSize: 16,
                    padding: [8, 5, 5, 5],
                    backgroundColor: {
                        image: 'data:image/png;base64,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'
                           }
                }
            },
            data: _boyActual

        },
        {
            name: '外框',
            type: 'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: 'rgba(255, 255, 255, 0.14)' //rgba设置透明度0.14
                }
            },
            barGap: '-100%',
            z: 0,
            barWidth: 6,
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100]
        }


    ]
};