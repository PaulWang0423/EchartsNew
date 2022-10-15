var value = 0.65;
var data = [value, value, value, ];
var option = {
    title: [{
        text: 'Design elements✍',
        x: '50%',
        y: 30,
        textAlign: 'center',
        textStyle: {
            fontSize: '30',
            fontWeight: '100',
            color: '#333',
            textAlign: 'center',
        },
    }, {
        text: (value * 100).toFixed(0) + '%',
        left: '30%',
        top: '30%',
        textAlign: 'center',
        textStyle: {
            fontSize: '30',
            fontWeight: '400',
            color: '#61033f',
            textAlign: 'center',
            textBorderColor:'rgba(0, 0, 0, 0)',
            textShadowColor:'#fff',
            textShadowBlur:'0',
            textShadowOffsetX:0,
            textShadowOffsetY:1,
        },
    }, {
        text: (value * 100).toFixed(0) + '%',
        left: '70%',
        top: '30%',
        textAlign: 'center',
        textStyle: {
            fontSize: '30',
            fontWeight: '400',
            color: '#295008',
            textAlign: 'center',
            textBorderColor:'rgba(0, 0, 0, 0)',
            textShadowColor:'#fff',
            textShadowBlur:'0',
            textShadowOffsetX:0,
            textShadowOffsetY:1,
        },
    }, {
        text: (value * 100).toFixed(0) + '%',
        left: '30%',
        top: '70%',
        textAlign: 'center',
        textStyle: {
            fontSize: '30',
            fontWeight: '400',
            color: '#a06a0a',
            textAlign: 'center',
            textBorderColor:'rgba(0, 0, 0, 0)',
            textShadowColor:'#fff',
            textShadowBlur:'0',
            textShadowOffsetX:0,
            textShadowOffsetY:1,
        },
    }, {
        text: (value * 100).toFixed(0) + '%',
        left: '70%',
        top: '70%',
        textAlign: 'center',
        textStyle: {
            fontSize: '30',
            fontWeight: '400',
            color: '#02456d',
            textAlign: 'center',
            textBorderColor:'rgba(0, 0, 0, 0)',
            textShadowColor:'#fff',
            textShadowBlur:'0',
            textShadowOffsetX:0,
            textShadowOffsetY:1,
        },
    }, ],
    series: [
        {
            type: 'liquidFill',
            radius: '30%',
            z: 6,
            center: ['30%', '35%'],
            amplitude: 5, 
            color: {
             type: 'linear',
             x: 0,
             y: 0,
             x2: 0,
             y2: 1,
             colorStops: [{
                 offset: 1,
                 color: 'rgba(169, 14, 115, 1)'
             }, {
                 offset: 0.5,
                 color: 'rgba(205, 17, 141, .5)'
             }, {
                 offset: 0,
                 color: 'rgba(205, 17, 141, 0)'
             }],
             globalCoord: false
         },
            data: [0.6, 
            {value: 0.5,
                direction: 'left',
            }, 0.4, 0.3,],
            backgroundStyle: {
                borderWidth: 1,
                color: 'transparent',
            },
            label: {
             normal: {
                 formatter: '',
             }
         },
            outline: {
                show: true,
                itemStyle: {
                    borderWidth: 0,
                },
                borderDistance: 0,
            }
        },
        {
            name: '5',
            type: 'pie',
            z: 5,
            radius: ['30%', '0%'],
            center: ["30%", "35%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                value: 100,
                itemStyle: {
                    normal: {
                        color: '#e7e8ea',
                        shadowBlur: 15,
                        shadowColor: '#8c95a6',
                        shadowOffsetX: 0,
                        shadowOffsetY: 20,
                    }
                }
            }]
        },
        {
            name: '3',
            type: 'pie',
            z: 3,
            radius: ['0%', '34%'], 
            center: ["30%", "35%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#fefefe',
                            }, {
                                offset: .3,
                                color: '#e7e8ea'
                            }]),
                        }
                    }
                },
                {
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        }
                    }
                }
            ]
        },
        {
            name: '2',
            type: 'pie',
            z: 2,
            radius: ['0%', '31.5%'], 
            center: ["30%", "35%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#fefefe',
                            }, {
                                offset: .3,
                                color: '#e7e8ea'
                            }]),
                            shadowBlur: 10,
                            shadowColor: '#8c95a6',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                        }
                    }
                },
                {
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        }
                    }
                }
            ]
        },
        {
            name: '1',
            type: 'pie',
            z: 1,
            radius: ['0%', '40%'],
            center: ["30%", "35%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#f3f3f5',
                            }, {
                                offset: .3,
                                color: '#e0e1e5'
                            }]),

                        }
                    }
                },
                {
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        }
                    }
                }
            ]
        },
        {
            name: '0',
            type: 'pie',
            z: 0,
            radius: ['0%', '40.5%'],
            center: ["30%", "35%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#fff',
                            }, {
                                offset: 1,
                                color: '#e0e1e5'
                            }]),
                            shadowBlur: 3,
                            shadowColor: 'rgba(140, 149, 166, .6)',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                        }
                    }
                },
                {
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        }
                    }
                }
            ]
        },
        
        {
            type: 'liquidFill',
            radius: '30%',
            z: 6,
            center: ['70%', '35%'],
            amplitude: 20,
            color: {
             type: 'linear',
             x: 0,
             y: 0,
             x2: 0,
             y2: 1,
             colorStops: [{
                 offset: 1,
                 color: 'rgba(74, 134, 21, 1)'
             }, {
                 offset: 0.5,
                 color: 'rgba(119, 185, 63, .5)'
             }, {
                 offset: 0,
                 color: 'rgba(119, 185, 63, 0)'
             }],
             globalCoord: false
         },
            data: [0.6, 
            {value: 0.5,
                direction: 'left',
            }, 0.4, 0.3,],
            backgroundStyle: {
                borderWidth: 1,
                color: 'transparent',
            },
            label: {
             normal: {
                 formatter: '',
             }
         },
            outline: {
                show: true,
                itemStyle: {
                    borderWidth: 0,
                },
                borderDistance: 0,
            }
        },
        {
            name: '5',
            type: 'pie',
            z: 5,
            radius: ['30%', '0%'],
            center: ["70%", "35%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                value: 100,
                itemStyle: {
                    normal: {
                        color: '#e7e8ea',
                        shadowBlur: 15,
                        shadowColor: '#8c95a6',
                        shadowOffsetX: 0,
                        shadowOffsetY: 20,
                    }
                }
            }]
        },
        {
            name: '3',
            type: 'pie',
            z: 3,
            radius: ['0%', '34%'], 
            center: ["70%", "35%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#fefefe',
                            }, {
                                offset: .3,
                                color: '#e7e8ea'
                            }]),
                        }
                    }
                },
                {
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        }
                    }
                }
            ]
        },
        {
            name: '2',
            type: 'pie',
            z: 2,
            radius: ['0%', '31.5%'], 
            center: ["70%", "35%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#fefefe',
                            }, {
                                offset: 1,
                                color: '#e7e8ea'
                            }]),
                            shadowBlur: 10,
                            shadowColor: '#8c95a6',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                        }
                    }
                },
                {
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        }
                    }
                }
            ]
        },
        {
            name: '1',
            type: 'pie',
            z: 1,
            radius: ['0%', '40%'],
            center: ["70%", "35%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#f3f3f5',
                            }, {
                                offset: 1,
                                color: '#e0e1e5'
                            }]),

                        }
                    }
                },
                {
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        }
                    }
                }
            ]
        },
        {
            name: '0',
            type: 'pie',
            z: 0,
            radius: ['0%', '40.5%'],
            center: ["70%", "35%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#fff',
                            }, {
                                offset: 1,
                                color: '#e0e1e5'
                            }]),
                            shadowBlur: 3,
                            shadowColor: 'rgba(140, 149, 166, .6)',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                        }
                    }
                },
                {
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        }
                    }
                }
            ]
        },
        
        {
            type: 'liquidFill',
            radius: '30%',
            z: 6,
            center: ['30%', '78%'],
            // color: ['#f8eeb0', '#fddc75', '#fbad17'], 
            color: {
             type: 'linear',
             x: 0,
             y: 0,
             x2: 0,
             y2: 1,
             colorStops: [{
                 offset: 1,
                 color: 'rgba(189, 126, 12, 1)'
             }, {
                 offset: 0.5,
                 color: 'rgba(251, 173, 23, .5)'
             }, {
                 offset: 0,
                 color: 'rgba(251, 173, 23, 0)'
             }],
             globalCoord: false
         },
            data: [0.6, 
            {value: 0.5,
                direction: 'left',
            }, 0.4, 0.3,],
            backgroundStyle: {
                borderWidth: 1,
                color: 'transparent',
            },
            label: {
             normal: {
                 formatter: '',
             }
         },
            outline: {
                show: true,
                itemStyle: {
                    borderWidth: 0,
                },
                borderDistance: 0,
            }
        },
        {
            name: '5',
            type: 'pie',
            z: 5,
            radius: ['30%', '0%'],
            center: ["30%", "78%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                value: 100,
                itemStyle: {
                    normal: {
                        color: '#e7e8ea',
                        shadowBlur: 15,
                        shadowColor: '#8c95a6',
                        shadowOffsetX: 0,
                        shadowOffsetY: 20,
                    }
                }
            }]
        },
        {
            name: '3',
            type: 'pie',
            z: 3,
            radius: ['0%', '34%'], 
            center: ["30%", "78%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#fefefe',
                            }, {
                                offset: .3,
                                color: '#e7e8ea'
                            }]),
                        }
                    }
                },
                {
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        }
                    }
                }
            ]
        },
        {
            name: '2',
            type: 'pie',
            z: 2,
            radius: ['0%', '31.5%'], 
            center: ["30%", "78%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#fefefe',
                            }, {
                                offset: 1,
                                color: '#e7e8ea'
                            }]),
                            shadowBlur: 10,
                            shadowColor: '#8c95a6',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                        }
                    }
                },
                {
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        }
                    }
                }
            ]
        },
        {
            name: '1',
            type: 'pie',
            z: 1,
            radius: ['0%', '40%'],
            center: ["30%", "78%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#f3f3f5',
                            }, {
                                offset: 1,
                                color: '#e0e1e5'
                            }]),

                        }
                    }
                },
                {
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        }
                    }
                }
            ]
        },
        {
            name: '0',
            type: 'pie',
            z: 0,
            radius: ['0%', '40.5%'],
            center: ["30%", "78%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#fff',
                            }, {
                                offset: 1,
                                color: '#e0e1e5'
                            }]),
                            shadowBlur: 3,
                            shadowColor: 'rgba(140, 149, 166, .6)',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                        }
                    }
                },
                {
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        }
                    }
                }
            ]
        },
        
        {
            type: 'liquidFill',
            radius: '30%',
            z: 6,
            center: ['70%', '78%'],
            amplitude: 5, 
            color: {
             type: 'linear',
             x: 0,
             y: 0,
             x2: 0,
             y2: 1,
             colorStops: [{
                 offset: 1,
                 color: 'rgba(0, 108, 154, 1)'
             }, {
                 offset: 0.5,
                 color: 'rgba(0, 155, 219, .5)'
             }, {
                 offset: 0,
                 color: 'rgba(0, 155, 219, 0)'
             }],
             globalCoord: false
         },
            data: [0.6, 
            {value: 0.5,
                direction: 'left',
            }, 0.4, 0.3,],
            backgroundStyle: {
                borderWidth: 1,
                color: 'transparent',
            },
            label: {
             normal: {
                 formatter: '',
             }
         },
            outline: {
                show: true,
                itemStyle: {
                    borderWidth: 0,
                },
                borderDistance: 0,
            }
        },
        {
            name: '5',
            type: 'pie',
            z: 5,
            radius: ['30%', '0%'],
            center: ["70%", "78%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                value: 100,
                itemStyle: {
                    normal: {
                        color: '#e7e8ea',
                        shadowBlur: 15,
                        shadowColor: '#8c95a6',
                        shadowOffsetX: 0,
                        shadowOffsetY: 20,
                    }
                }
            }]
        },
        {
            name: '3',
            type: 'pie',
            z: 3,
            radius: ['0%', '34%'], 
            center: ["70%", "78%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#fefefe',
                            }, {
                                offset: .3,
                                color: '#e7e8ea'
                            }]),
                        }
                    }
                },
                {
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        }
                    }
                }
            ]
        },
        {
            name: '2',
            type: 'pie',
            z: 2,
            radius: ['0%', '31.5%'], 
            center: ["70%", "78%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#fefefe',
                            }, {
                                offset: 1,
                                color: '#e7e8ea'
                            }]),
                            shadowBlur: 10,
                            shadowColor: '#8c95a6',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                        }
                    }
                },
                {
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        }
                    }
                }
            ]
        },
        {
            name: '1',
            type: 'pie',
            z: 1,
            radius: ['0%', '40%'],
            center: ["70%", "78%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#f3f3f5',
                            }, {
                                offset: 1,
                                color: '#e0e1e5'
                            }]),

                        }
                    }
                },
                {
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        }
                    }
                }
            ]
        },
        {
            name: '0',
            type: 'pie',
            z: 0,
            radius: ['0%', '40.5%'],
            center: ["70%", "78%"],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#fff',
                            }, {
                                offset: 1,
                                color: '#e0e1e5'
                            }]),
                            shadowBlur: 3,
                            shadowColor: 'rgba(140, 149, 166, .6)',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                        }
                    }
                },
                {
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        }
                    }
                }
            ]
        },
    ]
}
const backImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAEECAIAAABBat1dAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTcxRURGQkNGRjA0MTFFQUE4MEJBNzBFN0ZBRUI3Q0QiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTcxRURGQkJGRjA0MTFFQUE4MEJBNzBFN0ZBRUI3Q0QiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIwMjAgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVENERFN0QwRkJFNjExRUE5MDBGQzgxQTNBMTVBQUY5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVENERFN0QxRkJFNjExRUE5MDBGQzgxQTNBMTVBQUY5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jVM/GQAAwNtJREFUeNqcvYuWI7lu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"
myChart._dom.style.backgroundImage = "url('" + backImg + "')";