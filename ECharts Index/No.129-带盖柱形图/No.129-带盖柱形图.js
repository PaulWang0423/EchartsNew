
option = {
    backgroundColor: 'rgba(39,46,74)',
   tooltip: {
        trigger: 'item',
        },
    grid: {
        left: '5%',
        top: '10%',
        right: '5%',
        bottom: '10%',
    },
    xAxis: [{
        data: ["监测中心站", "调查中心", "核与辐射安全中心", "宣传教育中心"],
        axisLabel: {
            textStyle: {
                color: 'rgba(122,173,212,1)',
                fontSize:14
            },
            margin: 30, //刻度标签与轴线之间的距离。
        },

        axisLine: {
            show: true, //不显示x轴
            lineStyle: {
                color: 'rgba(53,65,95,1)',
            }
        },
        axisTick: {
            show: false //不显示刻度
        },
        boundaryGap: true,
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(53,65,95,1)',
                type: 'dashed'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
               color: 'rgba(122,173,212,1)',
                fontSize:14
            },
        }
    }],
    series: [
        {//柱底圆片
            name: "",
            type: "pictorialBar",
            symbolSize: [43, 20],//调整截面形状
            symbolOffset: [0, 10],
            z: 12,
            itemStyle: {
                    "normal": {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgba(0,171,255,1)"
                            },
                            {
                                offset: 1,
                                color: "rgba(0,171,255,1)"
                            }
                        ],false)
                    }
                },
            data: ["50", "75", "105","130"]
        }, 
        
        //柱体
        {
            name: '',
            type: 'bar',
            barWidth: 43,
            itemStyle: {
                // shadowOffsetX: 200,
                // shadowOffsetY: 200,
                    "normal": {
                        "color": {
                            "x": 0,
                            "y": 0,
                            "x2": 0,
                            "y2": 1,
                            "type": "linear",
                            "global": false,
                            "colorStops": [{//第一节下面
                                "offset": 0,
                                "color": "rgba(0,213,255,1)"
                            }, {
                                "offset": 1,
                                "color": "rgba(0,171,255,1)"
                            }]
                        }
                    }
                },
            data: ["50", "75", "105","130"]
        }, 
        
        //柱顶圆片
        {
            name: "",
            type: "pictorialBar",
            symbolSize: [43, 21],//调整截面形状
            symbolOffset: [0, -10],
            z: 12,
            symbolPosition: "end",
                "itemStyle": {
                    "normal": {
                         color: new echarts.graphic.LinearGradient(0,0,0,1,
                            [{
                                    offset: 0,
                                    color: "rgba(0,143,223,1)"
                                },
                                {
                                    offset: 1,
                                    color: "rgba(0,143,223,1)"
                                }
                            ],
                            false
                        ),
                    }
                },
            data: ["50", "75", "105","130"]
        }
    ]
};