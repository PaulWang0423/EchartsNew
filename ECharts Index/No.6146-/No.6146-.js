var getxb1 = 650; //男生人数
var getxb2 = 350; //女生人数
var xbzb = [65, 35];

var rich = {
    name: {
        color: "#656565",
        fontSize: 13,
        padding: [6, 10],
        align: 'left'
    },
    percent: {
        color: "#656565",
        align: 'center',
        fontSize: 13,
        padding: [5, 10]
    },
    hr: {
        borderColor: '#C8C8C8',
        width: '100%',
        borderWidth: 0.5,
        height: 0,
    }
}

option = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}:{c}人'
    },
    series: [{
        name: '性别分布',
        type: "pie",
        radius: ['30%', '50%'],
        startAngle: 180,
        center: ['center', '55%'],
        roseType: "radius",
        labelLine: {
            normal: {
                length: 20,
                length2: 100,
                lineStyle: {
                    color: '#C8C8C8'
                }
            }
        },
        label: {
            normal: {
                formatter: params => {
                    return '{name|' + params.name + '}\n{hr|}\n{percent|' + params.value + '人}  {percent|' + xbzb[params.dataIndex] + '%} '
                },
                rich: rich,
                distanceToLabelLine: 0,
                padding: [-2, 0, 0, 0]
            }
        },
        data: [{
            value: getxb1,
            name: "男生",
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#4C8DFA'
                    }, {
                        offset: 1,
                        color: '#5CCFFF'
                    }], false),
                }
            }
        }, {
            value: 1000 - getxb1,
            name: "女生",
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FFD18B'
                    }, {
                        offset: 1,
                        color: '#FDAD59'
                    }], false),
                }
            }
        }, {
            value: 1000,
            name: '',
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderWidth: 0,
                    shadowBlur: 0,
                    borderColor: 'transparent',
                    shadowColor: 'transparent'
                }
            },
        }]
    }, {
        type: "pie",
        radius: ['30%', '55%'],
        startAngle: 180,
        hoverAnimation: false,
        center: ['center', '55%'],
        roseType: "radius",
        labelLine: {
            normal: {
                show: false,
            },
        },
        data: [{
            value: getxb1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(76,141,250,.3)'
                    }, {
                        offset: 1,
                        color: 'rgba(92,207,255,.3)'
                    }], false),
                }
            }
        }, {
            value: 1000 - getxb1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255,209,139,.3)'
                    }, {
                        offset: 1,
                        color: 'rgba(253,173,89,.3)'
                    }], false),
                }
            }
        }, {
            value: 1000,
            name: '',
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderWidth: 0,
                    shadowBlur: 0,
                    borderColor: 'transparent',
                    shadowColor: 'transparent'
                }
            },
        }],
        z: -1
    }]
};