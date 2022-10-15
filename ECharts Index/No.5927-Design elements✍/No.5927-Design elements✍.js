let imgSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE5QTg0ODVERjhCRDExRUE5QTY4OEE3Mjg0QjY2Q0UxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE5QTg0ODVFRjhCRDExRUE5QTY4OEE3Mjg0QjY2Q0UxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTlBODQ4NUJGOEJEMTFFQTlBNjg4QTcyODRCNjZDRTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTlBODQ4NUNGOEJEMTFFQTlBNjg4QTcyODRCNjZDRTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4S7LnAAAARy0lEQVR42uydB7QV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';
var num1 = 50;
var num2 = 45;
var num3 = 38;
var num4 = 65;
var num5 = 55;
option = {
    backgroundColor: '#e9eef1',
    graphic: {
        elements: [{
            type: "image",
            z: 6,
            style: {
                image: imgSrc,
                width: 40,
                height: 40
            },
            left: 'center',
            top: "42%",
            position: [100, 100]
        }]
    },
    title: [{
        text: 'Design elements✍',
        x: '50%',
        y: 30,
        textAlign: 'center',
        textStyle: {
            align: 'center',
            color: '#333',
            fontSize: 30,
            fontWeight: '100',
        },
    },{
        text: 'Lorem ipsum',
        left: '49.5%',
        top: '50%',
        textAlign: 'center',
        textStyle: {
            fontSize: '16',
            color: '#535353',
            textAlign: 'center',
            fontWeight: '400',
        },
    },],
    series: [
        {
            type: 'pie',
            radius: ['25%', '0%'],
            center: ['50%', '50%'],
            data: [{
                label: {
                    show: false
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0
                        }
                    }
                },
                value: 100 - num1,
                hoverAnimation: false,
                itemStyle: {
                    color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                        offset: 0,
                        color: '#fff',
                    }, {
                        offset: 1,
                        color: '#dadada'
                    }]),
                    shadowBlur: 5,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowOffsetX:'3',
                    shadowOffsetY:'3',
                },
            }]
        },
        {
            type: 'pie',
            radius: ['30%', '37%'],
            center: ['50%', '50%'],
            startAngle: -150,
            data: [{
                    hoverOffset: 1,
                    value: num1,
                    name: '',
                    itemStyle: {
                        color: '#d0276c',
                        borderColor:'#e9eef1',
                        borderWidth:'1',
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter: "{r|{c}%}",
                            rich: {
                                r: {
                                    color: 'rgba(255,255,255,1)',
                                    fontWeight: 'bold',
                                    fontSize: 18,
                                },
                            },
                            position: 'inside',
                            color: '#FFF',
                            textShadowBlur: 5,
                            textShadowOffsetX: 1,
                            textShadowOffsetY: 2,
                            textShadowColor: 'rgba(0,0,0,0.3)',
                        },

                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    hoverAnimation: false,
                },
                {
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    value: 100 - num1,
                    hoverAnimation: false,
                    itemStyle: {
                        color: 'rgba(0, 0, 0, 0)',
                    },
                }
            ]
        },
        {
            type: 'pie',
            radius: ['37%', '44%'],
            center: ['50%', '50%'],
            startAngle: 70,
            data: [{
                    hoverOffset: 1,
                    value: num2,
                    name: '',
                    itemStyle: {
                        color: '#7f2e94',
                        borderColor:'#e9eef1',
                        borderWidth:'1',
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter: "{r|{c}%}",
                            rich: {
                                r: {
                                    color: 'rgba(255,255,255,1)',
                                    fontWeight: 'bold',
                                    fontSize: 18,
                                },
                            },
                            position: 'inside',
                            color: '#FFF',
                            textShadowBlur: 5,
                            textShadowOffsetX: 1,
                            textShadowOffsetY: 2,
                            textShadowColor: 'rgba(0,0,0,0.3)',
                        },

                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    hoverAnimation: false,
                },
                {
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    value: 100 - num2,
                    hoverAnimation: false,
                    itemStyle: {
                        color: 'rgba(0, 0, 0, 0)',
                    },
                }
            ]
        },
        {
            type: 'pie',
            radius: ['44%', '51%'],
            center: ['50%', '50%'],
            startAngle: -70,
            data: [{
                    hoverOffset: 1,
                    value: num3,
                    name: '',
                    itemStyle: {
                        color: '#4e2e9b',
                        borderColor:'#e9eef1',
                        borderWidth:'1',
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter: "{r|{c}%}",
                            rich: {
                                r: {
                                    color: 'rgba(255,255,255,1)',
                                    fontWeight: 'bold',
                                    fontSize: 18,
                                },
                            },
                            position: 'inside',
                            color: '#FFF',
                            textShadowBlur: 5,
                            textShadowOffsetX: 1,
                            textShadowOffsetY: 2,
                            textShadowColor: 'rgba(0,0,0,0.3)',
                        },

                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    hoverAnimation: false,
                },
                {
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    value: 100 - num3,
                    hoverAnimation: false,
                    itemStyle: {
                        color: 'rgba(0, 0, 0, 0)',
                    },
                }
            ]
        },
        {
            type: 'pie',
            radius: ['51%', '58%'],
            center: ['50%', '50%'],
            startAngle: 80,
            data: [{
                    hoverOffset: 1,
                    value: num4,
                    name: '',
                    itemStyle: {
                        color: '#2661b8',
                        borderColor:'#e9eef1',
                        borderWidth:'1',
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter: "{r|{c}%}",
                            rich: {
                                r: {
                                    color: 'rgba(255,255,255,1)',
                                    fontWeight: 'bold',
                                    fontSize: 18,
                                },
                            },
                            position: 'inside',
                            color: '#FFF',
                            textShadowBlur: 5,
                            textShadowOffsetX: 1,
                            textShadowOffsetY: 2,
                            textShadowColor: 'rgba(0,0,0,0.3)',
                        },

                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    hoverAnimation: false,
                },
                {
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    value: 100 - num4,
                    hoverAnimation: false,
                    itemStyle: {
                        color: 'rgba(0, 0, 0, 0)',
                    },
                }
            ]
        },
        {
            type: 'pie',
            radius: ['58%', '65%'],
            center: ['50%', '50%'],
            startAngle: 50,
            data: [{
                    hoverOffset: 1,
                    value: num5,
                    name: '',
                    itemStyle: {
                        color: '#61c8f1',
                        borderColor:'#e9eef1',
                        borderWidth:'1',
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter: "{r|{c}%}",
                            rich: {
                                r: {
                                    color: 'rgba(255,255,255,1)',
                                    fontWeight: 'bold',
                                    fontSize: 18,
                                },
                            },
                            position: 'inside',
                            color: '#FFF',
                            textShadowBlur: 5,
                            textShadowOffsetX: 1,
                            textShadowOffsetY: 2,
                            textShadowColor: 'rgba(0,0,0,0.3)',
                        },

                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    hoverAnimation: false,
                },
                {
                    label: {
                        show: false
                    },
                    labelLine: {
                        normal: {
                            smooth: true,
                            lineStyle: {
                                width: 0
                            }
                        }
                    },
                    value: 100 - num4,
                    hoverAnimation: false,
                    itemStyle: {
                        color: 'rgba(0, 0, 0, 0)',
                    },
                }
            ]
        },
    ]
};