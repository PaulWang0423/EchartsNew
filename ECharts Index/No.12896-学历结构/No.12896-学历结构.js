var yAxisMonth =['1月', '1-2月', '1-3月', '1-4月', '1-5月', '1-6月', '1-7月', '1-8月', '1-9月', '1-10月'];
var barData = [181200,316700,467200,683850,894800,1122200,1363700,1572550,1794450,1993200];

var barDataTwo = [];
var coordData2 = [];
var coordData = [];
// let chartHeight;
for (var i = 0; i < barData.length; i++) {
    barDataTwo.push(Math.max.apply(Math, barData) + 5000);
    coordData.push({
        "coord": [Number(barData[i]) - 1, i]
    });
    coordData2.push({
        "coord": [Math.max.apply(Math, barData) + 5000, i]
    })
}
option = {
    backgroundColor:'#fff',
    title: {
        text: '',
        left: 'center',
        textStyle: {
            color: '#080808',
            fontSize: 22,
            fontWeight:500
        },
        top: '28%'
    },
    legend: null,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + "" + ': ' + params[0].value;
        }
    },
    grid: {
        containLabel: true,
        left: "20%",
        right: "25%",
        top: "35%",
        bottom:"18%",
    },
    yAxis: [{
        data: yAxisMonth,
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 8,
                color: '#f9f3ff',
            },
            formatter: function(value) {
                return '{Sunny|' + value + '}';
            },
            rich: {
                value: {
                    lineHeight: 30,
                },
                Sunny: {
                    //  width: 70,
                    height: 25,
                    padding: [0, 10, 0, 10],
                    align: 'center',
                    backgroundColor: {
                        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAjCAYAAADsZeb8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIxNzQ2ODFCQkVFNjExRTc4OEU3QzFEMjE5RjExOEZBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIxNzQ2ODFDQkVFNjExRTc4OEU3QzFEMjE5RjExOEZBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjE3NDY4MTlCRUU2MTFFNzg4RTdDMUQyMTlGMTE4RkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjE3NDY4MUFCRUU2MTFFNzg4RTdDMUQyMTlGMTE4RkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7fNMa8AAABg0lEQVR42uzaMUvDQBgG4O+7pJS0ghVBOkknK06dAh38E126uji4iogtzlFBcNTi4urin3CoOHWytpM41aJYxTa2Te4sWgpWA2lufV8I4ULuOB747m44VkrRdIydXoa8bpGZC8Qxm5Sk74fG76D2+Bv/+UdF6BNuDA47N1K/+wTMI7itiAPnPoVobL87JMwSfzxWRadeE+2bJn8+9wj5Pywq5gRv10uR7FdJDpJm/aws3hovEAqXCSLJYZV7rddYzTkBy2wRP2ug65DfT44AL0ASAdHYowwZ8ZLZOD8FR9Ry9twiu0+jTeQea2DkcmZREJ27Gih0EI24LVrXTVBobizstnEO1EVEgAhEICJABCIQgYgAEYhABCICRCACEYhIWERlLSVAoYPo929len0FFDqISl7J1FoOFDqIpnWp5pbzMrW6CI6IiP4hPYxK+sDLbm6BQ2Nj8Y+tMhnx7jBX3gCJzhFHxPIqkV4Y2Ef7cj6L0p4huJ+oLSgqjJuy+jdlvwQYAN1TdkgsoTftAAAAAElFTkSuQmCC'
                    }


                }
            }
        }
    },
        {
            data: yAxisMonth,
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
        },
    ],
    xAxis: [{
        type: "value",
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    }, {
        type: "value",
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    }],
    series: [{
        z: 10,
        xAxisIndex: 0,
        yAxisIndex: 0,
        name: '',
        type: 'pictorialBar',
        data: barData,
        barCategoryGap: '80%',
        label: {
            normal: {
                show: true,
                position: 'inside',
                textStyle: {
                    fontSize: 12,
                    color: '#fbfdff'
                }
            }
        },
        symbolRepeat: false,
        symbolSize: ['100%', 23],
        symbolOffset: [-16.5, 0],
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#3d28d3',
                },
                    {
                        offset: 0.5,
                        color: '#ab7bf2',
                        opacity: 0.7
                    }, {
                        offset: 1,
                        color: '#3d28d3',
                        opacity: 0.5
                    }
                ], false),
            }
        },
        symbolClip: true,
        symbolPosition: 'end',
        symbol: 'rect',
        // symbol: 'path://M0 0 L0 60 L225 60 L300 0 Z',
        markPoint: {
            data: coordData,
            symbolSize: [33, 23],
            symbolOffset: [-0.5, 0],
            z: 3,
            label: {
                normal: {
                    show: false
                }
            },
            symbolClip: true,
            symbol: 'path://M 300 100 L 100 100 L 100 300 z',

        }
    },
        {
            z: 6,
            xAxisIndex: 1,
            yAxisIndex: 1,
            animation: false,
            name: '',
            type: 'pictorialBar',
            data: barDataTwo,
            barCategoryGap: '80%',
            label: {
                normal: {
                    show: false,
                    position: 'inside',
                    textStyle: {
                        fontSize: 12,
                        color: '#00ffff'
                    }
                }
            },
            symbolRepeat: false,
            symbolSize: ['100%', 23],
            symbolOffset: [-16.5, 0],
            itemStyle: {
                normal: {
                    color: '#925cc5',
                    opacity: 0.2
                }
            },
            symbolClip: true,
            symbol: 'rect',
            markPoint: {
                data: coordData2,
                symbolSize: [33, 23],
                symbolOffset: [-0.5, 0],
                label: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#925cc5',
                        opacity: 0.2
                    }
                },
                symbolClip: true,
                symbol: 'path://M 300 100 L 100 100 L 100 300 z',
                // animationDelay:100
                // animationDuration:1200
                // animation:false
                // animationDurationUpdate :1000
            }
        },
    ]
};