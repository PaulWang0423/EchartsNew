option = {
        backgroundColor: '#1a4377',
        title: {
            text: 'Graph 简单示例'
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        color:['#83e0ff','#45f5ce','#b158ff'],
        legend: {
            show: true,
            data: [
                {name: '人',textStyle:{color:'#fff'} },
                {name: '物证',textStyle:{color:'#fff'}},
                {name: '不明物体',textStyle:{color:'#fff'}}
            ]
        },
        series: [
            {
                type: 'graph',
                layout: 'force',
                force:{
                    repulsion:1000,
                    edgeLength:50
                },
                symbolSize: 50,
                roam: true,
                label: {
                    normal: {
                        show: true
                    }
                },
                edgeSymbolSize: [4, 10],
                edgeLabel: {
                    normal: {
                        show:true,
                        textStyle: {
                            fontSize: 13
                        },
                        formatter: "{c}"
                    }
                },

                data: [
                    {
                        name: '毛发',

                        symbolSize: 100,
                        draggable: true,
                        category: 1,
                        itemStyle: {
                            normal: {
                                borderColor: '#04f2a7',
                                borderWidth: 6,
                                shadowBlur: 20,
                                shadowColor: '#04f2a7',
                                color: '#001c43',
                            }
                        }
                    },
                    {
                        name: '刀',
                        symbolSize: 70,
                        itemStyle: {
                            normal: {
                                borderColor: '#04f2a7',
                                borderWidth: 4,
                                shadowBlur: 10,
                                shadowColor: '#04f2a7',
                                color: '#001c43',
                            }
                        },
                        category: 1,

                    },
                    {
                        name: '指纹',
                        symbolSize: 70,
                        category: 1,
                        itemStyle: {
                            normal: {
                                borderColor: '#04f2a7',
                                borderWidth: 4,
                                shadowBlur: 10,
                                shadowColor: '#04f2a7',
                                color: '#001c43',
                            }
                        },

                    },
                    {
                        name: '张三',
                        symbolSize: 70,
                        category: 0,
                        itemStyle: {
                            normal: {
                                borderColor: '#82dffe',
                                borderWidth: 4,
                                shadowBlur: 10,
                                shadowColor: '#04f2a7',
                                color: '#001c43',
                            }
                        },

                    },
                    {
                        name: '李四',
                        symbolSize: 70,
                        category: 0,
                        itemStyle: {
                            normal: {
                                borderColor: '#82dffe',
                                borderWidth: 4,
                                shadowBlur: 10,
                                shadowColor: '#04f2a7',
                                color: '#001c43',
                            }
                        },

                    },
                    {
                        name: '张三2',
                        category: 0,
                        itemStyle: {
                            normal: {
                                borderColor: '#82dffe',
                                borderWidth: 4,
                                shadowBlur: 10,
                                shadowColor: '#04f2a7',
                                color: '#001c43',
                            }
                        },

                    },
                    {
                        name: '无名尸',
                        category: 2,
                        itemStyle: {
                            normal: {
                                borderColor: '#b457ff',
                                borderWidth: 4,
                                shadowBlur: 10,
                                shadowColor: '#b457ff',
                                color: '#001c43'
                            }
                        },

                    },
                    {
                        name: '赖子',
                        itemStyle: {
                            normal: {
                                borderColor: '#82dffe',
                                borderWidth: 4,
                                shadowBlur: 10,
                                shadowColor: '#04f2a7',
                                color: '#001c43'

                            }
                        },
                        category: 0,

                    },
                    {
                        name: '王五',
                        itemStyle: {
                            normal: {
                                borderColor: '#82dffe',
                                borderWidth: 4,
                                shadowBlur: 10,
                                shadowColor: '#04f2a7',
                                color: '#001c43'
                            }
                        },
                        category: 0,

                    },
                    {
                        name: '刘大',
                        category: 0,
                        itemStyle: {
                            normal: {
                                borderColor: '#82dffe',
                                borderWidth: 4,
                                shadowBlur: 10,
                                shadowColor: '#04f2a7',
                                color: '#001c43'
                            }
                        },

                    }],
                links: [
                    {
                        source: '毛发',
                        target: '刀',
                        value: '案件ID',
                        lineStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#e0f55a' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#639564' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                }
                            }
                        }

                    },
                    {
                        source: '毛发',
                        target: '指纹',
                        value: 'DNA',
                        lineStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#eda553' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#7c785b' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                }
                            }
                        },
                    },
                    {
                        source: '毛发',
                        target: '张三',
                        value: 'DNA',
                        lineStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#eda553' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#7c785b' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                }
                            }
                        },
                    },
                    {
                        source: '毛发',
                        target: '李四',
                        value: '案件ID',
                        lineStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#e0f55a' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#639564' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                }
                            }
                        }
                    },
                    {
                        source: '毛发',
                        target: '张三'
                    },
                    {
                        source: '刀',
                        target: '张三2',
                        value: '案件ID',
                        lineStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#e0f55a' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#639564' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                }
                            }
                        }
                    },
                    {
                        source: '刀',
                        target: '无名尸', value: '案件ID',
                        lineStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#e0f55a' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#639564' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                }
                            }
                        }

                    },
                    {
                        source: '李四',
                        target: '赖子',
                        value: '案件ID',
                        lineStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#e0f55a' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#639564' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                }
                            }
                        }
                    },
                    {
                        source: '李四',
                        target: '王五',
                        value: '身份证ID',
                        lineStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#df6f30' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#915034' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                }
                            }
                        },
                    },
                    {
                        source: '王五',
                        target: '刘大',
                        value: 'DNA',
                        lineStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#eda553' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#7c785b' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                }
                            }
                        },
                    }
                ],
                lineStyle: {
                    normal: {
                        opacity: 0.9,
                        width: 5,
                        curveness: 0
                    }
                },
                categories:[
                    {name: '人'},
                    {name: '物证'},
                    {name: '不明物体'}
                ]
            }
        ]
    }