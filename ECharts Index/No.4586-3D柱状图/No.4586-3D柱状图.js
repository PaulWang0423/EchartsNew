var data = {
    name: '高技能人才占比',
    value: 29.7
}; //百分比
var barWidth = 80;
var barCircleHeight = 22;
var img = 'data:image/png;base64,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'
option = option = {
    backgroundColor:'rgba(0,0,0,.5)',
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderColor: 'rgba(89,211,255,1)',
        borderWidth: 2,
        padding: 5,
        textStyle: {
            color: "rgba(89,211,255,1)",
            fontSize: 18,
            width: 300,
            height: 40,
        },
        formatter: '{c}' + '%',
        extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
    },
    grid: {
        top: '10%',
        left: 0,
        bottom: '10%',
        right: 0,
        containLabel: true
    },
    xAxis: {
        data: [data.name],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false,
            textStyle: {
                color: '#fff'
            },
            margin: 30, //刻度标签与轴线之间的距离。
        }
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [
        // 头
        {
            name: "",
            type: "pictorialBar",
            symbolSize: [barWidth, barCircleHeight],
            symbolOffset: [0, -barCircleHeight / 2],
            z: 12,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: "rgba(54,127,223,1)"
                            },
                            {
                                offset: 1,
                                color: "rgba(94,162,254,1)"
                            }
                        ],
                        false
                    ),
                }
            },
            data: [{
                name: "",
                value: 100,
                symbolPosition: "end",

            }]
        },
        //底部立体柱
        {
            name: "vvvv",
            stack: '1',
            type: 'bar',
            silent: true,
            barWidth: barWidth,
            barGap: '-100%', // Make series be overlap
            data: [{
                value: data.value
            }],
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        type: "linear",
                        global: false,
                        colorStops: [{ //第一节下面
                            offset: 0,
                            color: "rgba(0,255,245,0.5)"
                        }, {
                            offset: 1,
                            color: "#43bafe"
                        }]
                    }
                }
            },
            label: {
                show: true,
                position: 'insideTopRight',
                color: "#F08E33",
                fontSize: 30,
                offset: [barWidth + 20*2.5, -(30 + 20*2)/2],
                backgroundColor: {
                    image: img
                },
                padding: 20,
                width: 200,
                formatter: '{c}%'
            }

        },
        //三个最低下的圆片
        {
            name: "",
            type: "pictorialBar",
            symbolSize: [barWidth, barCircleHeight],
            symbolOffset: [0, barCircleHeight / 2],
            z: 12,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(89,211,255,1)"
                        },
                        {
                            offset: 1,
                            color: "rgba(23,237,194,1)"
                        }
                    ])
                }
            },
            data: [{
                name: "",
                value: "100",

            }]
        },
        // 中间圆片
        {
            name: "",
            type: "pictorialBar",
            symbolSize: [barWidth, barCircleHeight],
            symbolOffset: [0, -barCircleHeight / 2],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: "rgba(89,211,255,1)"
                            },
                            {
                                offset: 1,
                                color: "rgba(23,237,194,1)"
                            }
                        ],
                        false
                    ),
                }
            },
            z: 12,
            data: [{
                name: "",
                value: data.value,
                symbolPosition: "end",

            }]
        },
        //上部立体柱
        {
            //上部立体柱
            stack: '1',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: '#3E8BE6',
                    opacity: .7
                }
            },
            label: {
                show: false
            },
            silent: true,
            barWidth: barWidth,
            barGap: '-100%', // Make series be overlap
            data: [{
                name: "a",
                value: 100 - data.value
            }]
        }
    ]
};