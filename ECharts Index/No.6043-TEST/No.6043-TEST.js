
option = {
    backgroundColor: "#1A1835",
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            console.log(params)
            var rValue =params[0].name+'<br>';
            params.forEach(function(v, i, a) {
                if (v.data !== 0 && v.data !== "-" && v.seriesType == "line") {
                    rValue+='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + v.color + '"></span>'+v.seriesName + ':' + v.data +'<br>';
                }
            })
            return rValue;
        }
    },
    grid: {
        borderWidth: 0,
        top: 140,
        bottom: 95,
        textStyle: {
            color: "#fff"
        }
    },
    legend: {
        x: '45%',
        top: '10%',
        itemWidth: 50,
        itemHeight: 50,
        textStyle: {
            color: '#90979c',
        },
        data: ['A', 'B']
    },
    xAxis: [{
        type: "category",
        axisLine: {
            lineStyle: {
                color: "rgba(204,187,225,0.5)",
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    }],
    yAxis: [{
        type: "value",
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "rgba(204,187,225,0.5)",
            }
        },
    }],
    series: [
        {
            name: "A",
            type: "effectScatter",
            symbolSize: [20, 20],
            rippleEffect: {
                period: 1,
                scale: 0,
                brushType: 'fill'
            },
            itemStyle: {
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: '#FAFF52'
                }, {
                    offset: 1,
                    color: '#1A1835'
                }])
            },
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
            data: [
                5, 7, 5, 6, 9, 3, 4, 5, 8, 9, 7, 6, 5, 
                5, 9, 5, 2, 8, 5, 7, 6, 1, 7, 5, 6, 8
            ],
        },
        {
            name: "B",
            type: "effectScatter",
            symbolSize: [20, 20],
            rippleEffect: {
                period: 1,
                scale: 0,
                brushType: 'fill'
            },
            itemStyle: {
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: '#C357F6'
                }, {
                    offset: 1,
                    color: '#1A1835'
                }])
            },
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
            data: [
                1, 3, 2, 3, 5, 4, 3, 8, 5, 3, 1, 3, 4, 
                3, 4, 3, 4, 9, 8, 3, 4, 3, 4, 2, 4, 2
            ]
        },
        {
            name: "A",
            type: "line",
            symbolSize: [0, 0],
            itemStyle: {
                color: '#FAFF52'
            },
            data: [
                5, 7, 5, 6, 9, 3, 4, 5, 8, 9, 7, 6, 5, 
                5, 9, 5, 2, 8, 5, 7, 6, 1, 7, 5, 6, 8
            ],
        },
        {
            name: "B",
            type: "line",
            symbolSize: [0, 0],
            itemStyle: {
                color: '#C357F6'
            },
            data: [
                1, 3, 2, 3, 5, 4, 3, 8, 5, 3, 1, 3, 4, 
                3, 4, 3, 4, 9, 8, 3, 4, 3, 4, 2, 4, 2
            ]
        },
    ]
}