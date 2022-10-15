const timeData = ["2020-06-21", "2020-06-22", "2020-06-23", "2020-06-24", "2020-06-25", "2020-06-26", "2020-06-27"] //this.$moment(data.times).format("HH-mm") ,
const valueData = [4, 7, 5, 4, 3, 5, 18] //data.values
option = {
    backgroundColor: 'rgba(1, 88, 118, 1)',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 255, 232,0.5)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 232,0.5)'
                    }],
                    global: false
                }
            },
        },
    },
    grid: {
        top: '15%',
        left: '10%',
        right: '5%',
        bottom: '15%',
        // containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: false,
            color: '#A582EA'
        },

        axisLabel: {
            color: '#fff',
            width: 100
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,
        data: timeData

    }],

    yAxis: [{
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 4,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#00BFF3',
                opacity: 0.23
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            margin: 20,
            textStyle: {
                color: '#fff',

            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
            name: '液压异常报警',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
                normal: {
                    color: "#A582EA",
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#fff',
                }
            },
            itemStyle: {
                color: "#A582EA",
                borderColor: "#A582EA",
                borderWidth: 2,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(43,193,145,0.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(43,193,145,0)'
                        }
                    ], false),
                }
            },
            data: valueData,
            markPoint: {
                label: {
                    normal: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                data: [{
                    type: 'max',
                    name: '最大值',

                }, {
                    type: 'min',
                    name: '最小值'
                }]
            },
        },
        // {
        //     name:'液位异常报警',
        //     type: 'line',
        //     showAllSymbol: true,
        //     symbol: 'circle',
        //     symbolSize: 10,
        //     lineStyle: {
        //         normal: {
        //             color: "#2CABE3",
        //         },
        //     },
        //     label: {
        //         show: true,
        //         position: 'top',
        //         textStyle: {
        //             color: '#2CABE3',
        //         }
        //     },
        //     itemStyle: {
        //         color: "#fff",
        //         borderColor: "#2CABE3",
        //         borderWidth: 2,
        //     },
        //     areaStyle: {
        //         normal: {
        //             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //                 {
        //                     offset: 0,
        //                     color: 'rgba(81,150,164,0.3)'
        //                 },
        //                 {
        //                     offset: 1,
        //                     color: 'rgba(81,150,164,0)'
        //                 }
        //             ], false),
        //         }
        //     },
        //     data: [3,5,4,2,1,7,6]//data.values
        // },
    ]
};