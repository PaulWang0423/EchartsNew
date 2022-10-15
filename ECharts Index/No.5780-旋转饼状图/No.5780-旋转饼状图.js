let num = 0;
let value = 60;
option = {
    backgroundColor: '#142468',
    title: {
        text: '{a|迟到人数}{c|\n}{c|' + value + '}',
        textStyle: {
            color: "#fff",
            fontSize: 40,
            fontWeight: '100',
            rich: {
                a: {
                    fontSize: 48,
                    color: '#29EEF3'
                },

                c: {
                    fontSize: 40,
                    lineHeight: 75,
                    color: '#ffffff',
                    // padding: [5,0]
                }
            }
        },
        x: "center",
        y: "center"
    },
    series: [{
            type: 'pie',
            zlevel: 1,
            silent: true,
            /*
            radius
            饼图的半径。可以为如下类型：
            number：直接指定外半径值。
            string：例如，'20%'，表示外半径为可视区尺寸（容器高宽中较小一项）的 20% 长度。
            Array.<number|string>：数组的第一项是内半径，第二项是外半径。每一项遵从上述 number string 的描述。
            */
            radius: ['97%', '98%'],
            hoverAnimation: false,
            //color: "rgba(88,142,197,0.5)",
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#9933FF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#00CCFF' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
            // animation:false,    //charts3 no
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [1]
        },
        {
            type: 'pie',
            zlevel: 2,
            silent: true,
            radius: ['90%', '91%'],
            startAngle: 90,
            hoverAnimation: false,
            // animation:false,    //charts3 no
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#9933FF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#00CCFF' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: _pie2()
        },
        {
            type: 'pie',
            zlevel: 3,
            silent: true,
            radius: ['83%', '84%'],
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: _pie3()
        },
        {
            type: 'pie',
            zlevel: 4,
            silent: true,
            radius: ['60%', '75%'],
            color: ["#fc8d89", "#46d3f3", "rgba(203,203,203,0.9)"],
            startAngle: 50,
            hoverAnimation: false,
            // animation:false,    //charts3 no
            label: {
                normal: {
                    show: false
                },
            },
            data: [1, 2, 3],

        },
        {
            name: "",
            type: 'custom',
            zlevel: 7,

            coordinateSystem: "none",
            renderItem: function(params, api) {
                return {
                    type: 'arc',
                    shape: {
                        cx: api.getWidth() / 2, // 图形元素的中心在父节点坐标系（以父节点左上角为原点）中的横坐标值。
                        cy: api.getHeight() / 2, // 图形元素的中心在父节点坐标系（以父节点左上角为原点）中的纵坐标值。
                        r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6, // 外半径。
                        startAngle: (0 + num) * Math.PI / 180, // 开始弧度。
                        endAngle: (1 + num) * Math.PI / 180, // 结束弧度。
                        clockwise: true, //是否顺时针。
                    },

                    style: {
                        // #00CEF3
                        stroke: "#fff",
                        fill: "transparent",
                        shadowBlur: 5, //阴影
                        shadowOffsetX: 15,
                        shadowOffsetY: 15,
                        shadowColor: '#000',
                        lineWidth: 15,

                    },
                    silent: true
                };
            },
            data: [0]
        },
    ]
};

function _pie1() {
    let dataArr = [];
    for (var i = 0; i < 8; i++) {

        dataArr.push({
            name: (i + 1).toString(),
            value: 20,
            itemStyle: {
                normal: {
                    color: "rgba(88,142,197,0.4)",
                    borderWidth: 0,
                    borderColor: "rgba(0,0,0,0)"
                }
            }
        })

    }
    return dataArr

}

function _pie2() {
    let dataArr = [];
    let _color = {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#9933FF' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#00CCFF' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    }
    for (var i = 0; i < 16; i++) {
        if (i % 4 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 50,
                itemStyle: {
                    normal: {
                        //color: "rgba(88,142,197,0.5)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        } else if (i % 4 === 1) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 2,
                itemStyle: {
                    normal: {
                        color: "rgba(88,142,197,0)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        } else if (i % 4 === 2) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 20,
                itemStyle: {
                    normal: {
                        //color: "rgba(88,142,197,0.2)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 2,
                itemStyle: {
                    normal: {
                        //color: "rgba(0,0,0,0)",
                        color: "rgba(88,142,197,0)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        }

    }
    return dataArr

}

function _pie3() {
    let dataArr = [];
    for (var i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 25,
                itemStyle: {
                    normal: {
                        color: "rgb(126,190,255)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 20,
                itemStyle: {
                    normal: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        }

    }
    return dataArr

}

function _pieData(data) {
    let _data = data;
    let dataArr = [];
    for (var i = 0; i < 5; i++) {
        if (i === 2) {
            let dt = (data[0].unit) ? 25 : (Number(data[0].value));
            dataArr.push({
                name: (i + 1).toString(),
                value: dt,
                itemStyle: {
                    normal: {

                        color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                            offset: 0,
                            color: 'rgb(147,187,216)'
                        }, {
                            offset: 1,
                            color: '#588ec5'
                        }]),
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0.4)"

                    }
                }
            })
        } else {
            let dta = (data[0].unit) ? 25 : (1 - Number(data[0].value)) / 4;
            dataArr.push({
                name: (i + 1).toString(),
                value: dta,
                itemStyle: {
                    normal: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        }

    }
    //console.log(dataArr)
    return dataArr
}


//鼠标事件：'click'，'dblclick'，'mousedown'，'mouseup'，'mouseover'，'mouseout'，'globalout'。

myChart.on('mouseover', function(params) {
    stopTimer();
});

myChart.on('mouseout', function(params) {
    startTimer();
});


var timer;

function doing() {
    let option = myChart.getOption();
    option.series[1].startAngle = option.series[1].startAngle - 1;
    //option.series[2].startAngle = option.series[2].startAngle - 1;
    //option.series[6].data[0].value = option.series[6].data[0].value + 1;
    myChart.setOption(option);

}

function startTimer() {

    timer = setInterval(doing, 100);

}

function stopTimer() {

    clearInterval(timer);

    xzTimer = null;

}

function numb() {
    num = num + 5
    // myChart.setOption(option, true)
}
setInterval(function() {
    numb()
}, 100);
setTimeout(startTimer, 500);
/*
window.onload = function() {
    setTimeout(startRotate, 500);
}
*/