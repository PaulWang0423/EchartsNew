var color= ['#fb734e', '#e32f46','#94d96c', '#0bbcb7','#1a9bfc','#7049f0'];
var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 40,
        borderWidth: 10,
        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
    }
};
var placeHolderStyle = {
    normal: {
        color: '#393d50',
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: '#393d50'
    }
};
option = {
    backgroundColor: '#142058',
    title: {
        text: '匹配度',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 24,
            color: "#fff",
        }
    },
    tooltip: {
        trigger: 'item',
        show: true,
        formatter: "{b} : <br/>{d}%",
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
    },
    legend: {
        orient: 'vertical',
        // icon: 'circle',
        left: 'left',
        top: '20',
        itemGap:20,
        data: ['二级匹配度', '三级匹配度', '四级匹配度', '04', '05', '06'],
        textStyle: {
            color: '#fft'
        }
    },
    series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: [186, 200],
            center:['50%','50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            label:{
                borderRadius:'10',
            },
            data: [{
                    value: 54.6,
                    name: '四级匹配度',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color:color[0]
                            }, {
                                offset: 1,
                                color: color[1]
                            }])
                        }
                    }
                },
                {
                    value: 45.4,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: placeHolderStyle
                },
            ]
        },
        {
            name: 'Line 2',
            type: 'pie',
            clockWise: false,
            radius: [146, 160],
            center:['50%','50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            data: [{
                    value: 56.7,
                    name: '三级匹配度',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: color[2]
                            }, {
                                offset: 1,
                                color: color[3]
                            }])
                        }
                    }
                },
                {
                    value: 43.3,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: placeHolderStyle
                },
            ]
        },
        {
            name: 'Line 3',
            type: 'pie',
            clockWise: false,
            radius: [106, 120],
            center:['50%','50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            data: [{
                    value: 30,
                    name: '二级匹配度',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: color[4]
                            }, {
                                offset: 1,
                                color: color[5]
                            }]),
                        }
                    }
                },
                {
                    value: 0,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: placeHolderStyle
                },
            ]
        }
    ]
};