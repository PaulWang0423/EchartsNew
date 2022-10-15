let value = 65.23;
let title = '数据';
let int = value.toFixed(2).split('.')[0];
let float = value.toFixed(2).split('.')[1];
let problemImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABH0lEQVQ4jaXTsSuFURgG8N/3dZNw2USyGq7hDjLoZpHJpJSyGU1KlPgDKAOD/8NqMAqDu5BJZLkD2VhQ7jV8362vzzkZPHU6p/M873Pe857zJp1ORwB1NDCKNlq4wl1ZmJQMprGBiZArbrCHx5DBMraQRoK7+MA2LooGszhE8kdw0WQVDyl6sBMIPsVcPm5LXG8eo4J5DAdO+cJbvv4O8HVMppiJpDkQWRfRSDH+D4OxVLzq1XxOMBTRJBU8oxYgazhCP/oiBi8pmhHyTPap1nAf0TRT2XO9B8juC7Qj/BOuKzl5jN2SYFF2/yqmSlwbB2gXv/ImViKpFtHBPk743UxLWJcVLoRXWTOddzfKBjCIhTztkfzEFi5lhf0sin8AbH9GzweR5ZMAAAAASUVORK5CYII=";
let gridImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAABgklEQVQ4jW3TTYuOYRQH8N9ze3oaw6NEbGZhwpaSxEYWohRlYUF527BB7O0sLKTwARRSapT4AorZTSw0UZKFYqNEZqYxzcyxuM/N5Xb/66rzdv3Py3WuXkTowACjGOI0JvEC6/C1HdxrkfRwAodxHvcwhmWcxbGUb2K2uVQVBH1cx5XMui8JmrhzmMARPMSGLpKL2J/ySxxsVb0Hn7KdMdzBypJkC46nvID32NYiqbAd08WdM/ydyQAj6VzOfof+x3ySDVJfxFxDMqGePLzCI9zoIHmGj7hc2C70s6/xVtmrsaaDZC2WWr5NlfpZSyxhRQdBk6C9WFWFOfwojKNp68Js+kt8aWayqsi+iF9pa2NBPfiRwjbTT2EzbhWBR/FYvYAlruIA9qb+FLebPXmDKfXA1mMrPqfenCHeYXfq83jAvxt7DW9T3oXnrSpeF0l+4hK+tUlm1J/uCQ6pd+J74b+fbU7jJD788URE1xmPiI0RsSMi7kbEqYioImJnRPTa8b8BhWWH2EiqE88AAAAASUVORK5CYII=";
option = {
    backgroundColor: '#02203d',
    title: {
        text: '{a|' + int + '}{b|.' + float + '}\n{c|' + title + '}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                a: {
                    fontSize: 28,
                    color: '#e4ff00',
                    fontWeight: '600',
                },
                b: {
                    fontSize: 20,
                    color: '#e4ff00',
                    padding: [0, 0, 14, 0]
                },
                c: {
                    fontSize: 20,
                    color: '#fff',
                    padding: [5, 0]
                }
            }
        }
    },
    graphic: {

        elements: [{
                type: "image",
                zlevel: 10,
                style: {
                    image: problemImg,
                    width: 17,
                    height: 16
                },
                left: '46%',
                top: '60%',
            },
            {
                type: "image",
                z: 4,
                style: {
                    image: gridImg,
                    width: 17,
                    height: 16
                },
                left: '52%',
                top: '60%',
                onclick:function(){
                    alert(1)
                }
            },
            {
                type: "image",
                z: 4,
                style: {
                    image: "data:image/png;base64,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",
                    width: 121,
                    height: 120
                },
                left: 'center',
                top: 'center',
                silent: true
            },
            {
                type: "text",
                z: 4,
                style: {
                    text: "查看详情",
                    fill:"#fff",
                },
                left: 'center',
                bottom: '11%',
                
            },
           
            {
                type: "rect",
                z: 4,
                style: {
                    fill:"rgba(6,131,227,0.5)",
                },
                shape:{
                    width:92.92,
                    height:28.96,
                    r:3
                },
                left: 'center',
                bottom: '10%',
                onclick:function(){
                    alert(1)
                }
            },
            {
                      type: "text",
                      z: 4,
                      style: {
                          text: "分子",
                          fill:"rgba(230,230,230,0.8)",
                          font: '15px "STHeiti", sans-serif'
                      },
                      silent:true,
                      left: 'center',
                      bottom: '17%',
                  },
                  {
                      type: "line",
                      z: 4,
                      style: {
                          fill:"#3b4559",
                          stroke:'#3b4559',
                          lineWidth:2
                      },
                      shape:{
                          x1:295,
                          y1:0,
                      },
                      left: 'center',
                      bottom: '15%',
                      silent:true,
                  },
                  {
                      type: "text",
                      z: 4,
                      style: {
                          text: "分母",
                          fill:"rgba(230,230,230,0.8)",
                          font: '15px "STHeiti", sans-serif'
                      },
                      silent:true,
                      left: 'center',
                      bottom: '5%',
                  },
        ]
    },
    series: [{
            type: 'gauge',
            radius: '60%',
            clockwise: false,
            startAngle: '90',
            endAngle: '-269.9999',
            splitNumber: 40,
            detail: {
                offsetCenter: [0, -20],
                formatter: ' '
            },
            pointer: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [0, '#173c5e'],
                        [36.7 / 100, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0, [{
                                    offset: 0,
                                    color: "#22beff",
                                }, {
                                    offset: 0.3,
                                    color: "#22baf8",
                                },
                                {
                                    offset: 1,
                                    color: "#173c5e",
                                }
                            ]
                        )],
                        [1, '#173c5e']
                    ],
                    width: 30,
                    shadowColor: 'rgba(33, 174, 234, 0)',
                    shadowBlur: 0,
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 30,
                lineStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 255, 255, 0)',
                    shadowOffsetY: '0',
                    color: '#020f18',
                    width: 3
                }
            },
            axisLabel: {
                show: false
            }
        },

        {
            type: 'pie',
            radius: ['44%', '48%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    color: '#0C355E'
                }
            },
            label: {
                show: false
            },
            data: _dashed()
        },

        // {
        //     type: 'pie',
        //     radius: [0, '40%'],
        //     hoverAnimation: false,
        //     clockWise: false,
        //     itemStyle: {
        //         normal: {
        //             shadowBlur: 0,
        //             shadowColor: '#000',
        //             color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
        //                 offset: 0,
        //                 color: '#1130dd',
        //             }, {
        //                 offset: 1,
        //                 color: '#0da6cd'
        //             }])
        //         }
        //     },
        //     label: {
        //         show: false
        //     },
        //     data: [0]
        // },
        {
            type: 'pie',
            radius: ['70%', '71.5%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 118, 239,1)',
                    color: '#0076EF'
                }
            },
            label: {
                show: false
            },
            data: [100]
        },
        {
            type: 'pie',
            radius: ['61%', '61.5%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    shadowBlur: 0,
                    shadowColor: 'rgba(0, 118, 239,0.5)',
                    color: '#0076ef'
                }
            },
            label: {
                show: false
            },
            data: [100]
        },
        {
            type: 'pie',
            radius: ['68%', '69.5%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
                normal: {
                    shadowBlur: 0,
                    shadowColor: 'rgba(0, 255, 255,1)',
                    color: 'rgba(2, 33, 64,.6)',
                }
            },
            label: {
                show: false
            },
            data: [100]
        },

    ]
};

function _dashed() {
    let dataArr = [];
    for (var i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 10,
                itemStyle: {
                    normal: {
                        color: 'rgb(0,118,239,0.5)',
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 50,
                itemStyle: {
                    normal: {
                        color: 'rgb(0,0,0,0)',
                        borderWidth: 1,
                        borderColor: "rgb(0,118,239,1)"
                    }
                }
            })
        }

    }
    return dataArr

}

function doing() {
    let option = myChart.getOption();
    option.series[1].startAngle = option.series[1].startAngle - 1;
    myChart.setOption(option);
}

function startTimer() {
    timer = setInterval(doing, 100);
}
setTimeout(startTimer, 0);