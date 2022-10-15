var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: "rgba(0,0,0,0)",
        borderWidth: 0
    },
    emphasis: {
        color: "rgba(0,0,0,0)",
        borderWidth: 0
    }

};
    var green = ['#95e95a','#4f9b19'];
    var yellow = ['#f3b650','#b26f00'];
    var red = ['#d63e3e','#aa1c1c'];
    var data = [120,90,59,96];
    var col = colch(data);
    var dataW = fz(data);
    
    function colch(data){
        var c = [];
        if(data[0]>=100){
            c = c.concat(green);
        }else if(data[0]>=80){
            c = c.concat(yellow);
        }else{
            c = c.concat(red);
        };
        
        if(data[1]>=90){
            c = c.concat(green);
        }else if(data[1]>=70){
            c = c.concat(yellow);
        }else{
            c = c.concat(red);
        };
        if(data[2]>=80){
            c = c.concat(green);
        }else if(data[2]>=60){
            c = c.concat(yellow);
        }else{
            c = c.concat(red);
        };
        if(data[3]>=100){
            c = c.concat(green);
        }else if(data[3]>=80){
            c = c.concat(yellow);
        }else{
            c = c.concat(red);
        };
        
        return c;
    }
    function fz(data){
        var s = [];
        for(var i=0;i<4;i++){
            if(data[i]>=100){
                s[i] = 0;
            }else{
                var x = 100-data[i];
                s[i] = x;
            }
        }
        return s;
    }

  
var dataStyle = {
    normal: {
        formatter: '{c}%',
        position: 'center',
        show: true,
        textStyle: {
            fontSize: '12',
            fontWeight: 'normal',
            color: '#fff'
        }
    }
};


option = {
    backgroundColor: '#1b1b1b',
    title: [{
        text: '远程教育',
        left: '26%',
        top: '25%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '12',
            color: '#fff',
            textAlign: 'center',
        },
    }, {
        text: '党费缴纳',
        left: '73%',
        top: '25%',
        textAlign: 'center',
        textStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: '12',
            textAlign: 'center',
        },
    },{
        text: '发展党员',
        left: '26%',
        top: '75%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '12',
            color: '#fff',
            textAlign: 'center',
        },
    },{
        text: '社会服务',
        left: '73%',
        top: '70%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '12',
            color: '#fff',
            textAlign: 'center',
        },
    }],
    series: [{
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['25%', '34%'],
            center: ['27%', '25%'],
            startAngle: 180,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: data[0],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: col[0]
                            }, {
                                offset: 1,
                                color: col[1]
                            }]),
                        }
                    },
                    label: dataStyle,
                }, {
                    value: dataW[0],
                    itemStyle: placeHolderStyle,
                },

            ]
        },
        {
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['25%', '34%'],
            center: ['73%', '25%'],
            startAngle: 180,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: data[1],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: col[2]
                            }, {
                                offset: 1,
                                color: col[3]
                            }]),
                        }
                    },
                    label: dataStyle,
                }, {
                    value: dataW[1],
                    itemStyle: placeHolderStyle,
                },

            ]
        },
        {
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['25%', '34%'],
            center: ['27%', '75%'],
            startAngle: 180,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: data[2],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: col[4]
                            }, {
                                offset: 1,
                                color: col[5]
                            }]),
                        }
                    },
                    label: dataStyle,
                }, {
                    value: dataW[2],
                    itemStyle: placeHolderStyle,
                },

            ]
        },
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['25%', '34%'],
            center: ['73%', '70%'],
            startAngle: 180,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: data[3],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: col[6]
                            }, {
                                offset: 1,
                                color: col[7]
                            }]),
                        }
                    },
                    label: dataStyle,
                }, {
                    value: dataW[3],
                    itemStyle: placeHolderStyle,
                },

            ]
        },
        
        //外圈的边框
        {
            // name: '总人数',
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['35%', '36%'],
            center: ['27%', '25%'],
            startAngle: 180,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: col[1]
                            }, {
                                offset: 1,
                                color: col[0]
                            }]),
                        }
                    },
                }, {
                    value: 0,
                    itemStyle: placeHolderStyle,
                },

            ]
        },
        {
            // name: '总人数',
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['35%', '36%'],
            center: ['73%', '25%'],
            startAngle: 180,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: col[3]
                            }, {
                                offset: 1,
                                color: col[2]
                            }]),
                        }
                    },
                }, {
                    value: 0,
                    itemStyle: placeHolderStyle,
                },

            ]
        },
        {
            // name: '总人数',
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['35%', '36%'],
            center: ['27%', '75%'],
            startAngle: 180,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: col[5]
                            }, {
                                offset: 1,
                                color: col[4]
                            }]),
                        }
                    },
                }, {
                    value: 0,
                    itemStyle: placeHolderStyle,
                },

            ]
        },
        {
            type: 'pie',
            hoverAnimation: false,
            radius: ['35%', '36%'],
            center: ['73%', '70%'],
            startAngle: 180,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: col[7]
                            }, {
                                offset: 1,
                                color: col[6]
                            }]),
                        }
                    },
                }, {
                    value: 0,
                    itemStyle: placeHolderStyle,
                },

            ]
        },
    ]
};