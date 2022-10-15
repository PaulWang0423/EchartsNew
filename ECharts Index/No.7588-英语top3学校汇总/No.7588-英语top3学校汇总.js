var Name = ['北中', '北师大', '廉州中学'];
var color = ['#fb734e', '#e32f46', '#94d96c', '#0bbcb7', '#1a9bfc', '#7049f0'];
var data = {
    //['国家目标', '海南目标', '完成情况']
    "英语最高分": [144.5, 144.5, 141.5],
    "英语top30平均分": [142.75, 143.5, 142.51],
    "优秀学生人数": [44, 2, 44],
    "英语一本/二本/专科": [125, 72, 27],
};

var xAxisData = [];
var data1 = [],
    data2 = [],
    data3 = [];
for (var i in data) {
    xAxisData.push(i);
    data1.push(data[i][0])
    data2.push(data[i][1])
    data3.push(data[i][2])
}

var label = {
    normal: {
        show: false,
        position: 'right',
        distance: 10,
        formatter: function(param) {
            return param.value + '%';
        },
        textStyle: {
            color: '#ffffff',
            fontSize: '16',
        }
    }
};


var series = [];
for (var j = 1; j < 4; j++) {
    if (j == 1) {
        var symbolOffset = [-48, 0];
        var dataArr = data1
    } else if (j == 2) {
        var symbolOffset = [0, 0];
        var dataArr = data2
    } else if (j == 3) {
        var symbolOffset = [48, 0];
        var dataArr = data3
    }

    series.push({
        name: Name[j - 1],
        type: 'bar',
        stack: j,
        xAxisIndex: 0,
        data: dataArr,
        label: label,
        barWidth: 8,
        barGap: 5,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: color[j * 2 - 2]
                }, {
                    offset: 1,
                    color: color[j * 2 - 1]
                }]),
            }
        },
        z: 2
    }, {
        name: Name[j - 1],
        type: 'scatter',
        stack: j,
        xAxisIndex: 0,
        symbolOffset: symbolOffset, //相对于原本位置的偏移量
        data: [0, 0, 0, 0],
        label: {
            normal: {
                show: false,
            }
        },
        xAxisIndex: 2,
        symbolSize: 14,
        itemStyle: {
            normal: {
                borderColor: '#fff',
                borderWidth: 2,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: color[j * 2 - 2]
                }, {
                    offset: 1,
                    color: color[j * 2 - 1]
                }]),
                opacity: 1,
            }
        },
        z: 2
    }, {
        name: Name[j - 1],
        type: 'bar',
        xAxisIndex: 1,
        barGap: '140%',
        data: [dataArr[0] + 15, dataArr[1] + 15, dataArr[2] + 15, dataArr[3] + 15, ],
        barWidth: 20,
        itemStyle: {
            normal: {
                color: '#0e2147',
                barBorderRadius: 5,
            }
        },
        z: 1
    }, {
        name: Name[j - 1],
        type: 'bar',
        xAxisIndex: 2,
        data: [dataArr[0] + 15.5, dataArr[1] + 15.5, dataArr[2] + 15.5, dataArr[3] + 15.5, ],
        barWidth: 24,
        barGap: 1,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: color[j * 2 - 2]
                }, {
                    offset: 1,
                    color: color[j * 2 - 1]
                }]),
                barBorderRadius: 5,
            }
        },
        z: 0
    }, {
        name: Name[j - 1],
        type: 'scatter',
        hoverAnimation: false,
        data: [1.2, 1.2, 1.2, 1.2],
        xAxisIndex: 2,
        symbolOffset: symbolOffset, //相对于原本位置的偏移量
        symbolSize: 24,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: color[j * 2 - 2]
                }, {
                    offset: 1,
                    color: color[j * 2 - 1]
                }]),
                opacity: 1,
            }
        },
        z: 2
    })
}
var option = {
    backgroundColor: '#142058',
    title: {
        text: '各校数据',
        x: '10',
        y: '10',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 24,
            color: "#fff",
        }
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '10%',
        top: '10%',
        containLabel: true
    },
    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            shadowStyle: {
                color: 'rgba(112,112,112,0)',
            },
        },
        // formatter: '{b}<br />{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%',
        formatter: function(params) {
            var unit = params[0].name.substring(params[0].name.indexOf('(') + 1, params[0].name.indexOf(')'));
            return params[0].name + ' ：<br />' + params[0].seriesName + ' ：' + params[0].data + unit + '<br />' + params[1].seriesName + ' ：' + params[1].data + unit + '<br />' + params[2].seriesName + ' ：' + params[2].data + unit;
        },
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
    },
    legend: {
        top: 20,
        textStyle: {
            color: '#fff',
        },
        data: Name,
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#363e83',
            }
        },
        axisLabel: {
            inside: false,
            textStyle: {
                color: '#bac0c0',
                fontWeight: 'normal',
                fontSize: '12',
            },
        },
        data: xAxisData
    }, {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: xAxisData
    }, {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: xAxisData
    }],
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#32346c',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#32346c ',
            }
        },
        axisLabel: {
            textStyle: {
                color: '#bac0c0',
                fontWeight: 'normal',
                fontSize: '12',
            },
        },
    },
    series: series
    /* [
            {
                name: '国家目标',
                type: 'bar',
                stack: '1',
                xAxisIndex: 0,
                data: data1,
                label: label,
                barWidth: 8,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#e1694b'
                        }, {
                            offset: 1,
                            color: '#e12945'
                        }]),
                    }
                },
                z: 2
            },
            {
                name: '国家目标',
                type: 'scatter',
                stack: '1',
                xAxisIndex: 0,
                symbolOffset: [-48, 0], //相对于原本位置的偏移量
                data: [0, 0, 0, 0],
                label: {
                    normal: {
                        show: false,
                    }
                },
                xAxisIndex: 2,
                symbolSize: 14,
                itemStyle: {
                    normal: {
                        borderColor: '#fff',
                        borderWidth: 2,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#e1694b'
                        }, {
                            offset: 1,
                            color: '#e12945'
                        }]),
                        opacity: 1,
                    }
                },
                z: 2
            },
            {
                name: '国家目标',
                type: 'bar',
                xAxisIndex: 1,
                barGap: '140%',
                data: [data1[0] + 15, data1[1] + 15, data1[2] + 15, data1[3] + 15,],
                barWidth: 20,
                itemStyle: {
                    normal: {
                        color: '#0e2147',
                        barBorderRadius: 5,
                    }
                },
                z: 1
            },
            {
                name: '国家目标',
                type: 'bar',
                xAxisIndex: 2,
                data: [data1[0] + 15.5, data1[1] + 15.5, data1[2] + 15.5, data1[3] + 15.5,],
                barWidth: 24,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#e1694b'
                        }, {
                            offset: 1,
                            color: '#e12945'
                        }]),
                        barBorderRadius: 5,
                    }
                },
                z: 0
            },
            {
                name: '国家目标',
                type: 'scatter',
                hoverAnimation: false,
                data: [1.2, 1.2, 1.2, 1.2],
                xAxisIndex: 2,
                symbolOffset: [-48, 0], //相对于原本位置的偏移量
                symbolSize: 24,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#e1694b'
                        }, {
                            offset: 1,
                            color: '#e12945'
                        }]),
                        opacity: 1,
                    }
                },
                z: 2
            },

            {
                name: '海南目标',
                type: 'bar',
                stack: '2',
                xAxisIndex: 0,
                data: data2,
                label: label,
                barWidth: 8,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#99da69'
                        }, {
                            offset: 1,
                            color: '#01b7ba'
                        }]),
                    }
                },
                z: 2
            },
            {
                name: '海南目标',
                type: 'scatter',
                stack: '2',
                xAxisIndex: 0,
                symbolOffset: [0, 0], //相对于原本位置的偏移量
                data: [0, 0, 0, 0],
                label: {
                    normal: {
                        show: false,
                    }
                },
                xAxisIndex: 2,
                symbolSize: 14,
                itemStyle: {
                    normal: {
                        borderColor: '#fff',
                        borderWidth: 2,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#99da69'
                        }, {
                            offset: 1,
                            color: '#01b7ba'
                        }]),
                        opacity: 1,
                    }
                },
                z: 2
            },
            {
                name: '海南目标',
                type: 'bar',
                xAxisIndex: 1,
                barGap: '140%',
                data: [data2[0] + 15, data2[1] + 15, data2[2] + 15, data2[3] + 15,],
                barWidth: 20,
                itemStyle: {
                    normal: {
                        color: '#0e2147',
                        barBorderRadius: 5,
                    }
                },
                z: 1
            },
            {
                name: '海南目标',
                type: 'bar',
                xAxisIndex: 2,
                barGap: 1,
                data: [data2[0] + 15.5, data2[1] + 15.5, data2[2] + 15.5, data2[3] + 15.5,],
                barWidth: 24,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#99da69'
                        }, {
                            offset: 1,
                            color: '#01b7ba'
                        }]),
                        barBorderRadius: 5,
                    }
                },
                z: 0
            },
            {
                name: '海南目标',
                type: 'scatter',
                hoverAnimation: false,
                data: [1.2, 1.2, 1.2, 1.2],
                xAxisIndex: 2,
                symbolOffset: [0, 0], //相对于原本位置的偏移量
                symbolSize: 24,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#99da69'
                        }, {
                            offset: 1,
                            color: '#01b7ba'
                        }]),
                        opacity: 1,
                    }
                },
                z: 2
            },

            {
                name: '完成情况',
                type: 'bar',
                stack: '3',
                xAxisIndex: 0,
                data: data3,
                label: label,
                barGap: 5,
                barWidth: 8,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#1a9bfc'
                        }, {
                            offset: 1,
                            color: '#7049f0'
                        }]),
                    }
                },
                z: 2
            },
            {
                name: '完成情况',
                type: 'scatter',
                stack: '3',
                xAxisIndex: 0,
                symbolOffset: [48, 0], //相对于原本位置的偏移量
                data: [0, 0, 0, 0],
                label: {
                    normal: {
                        show: false,
                    }
                },
                xAxisIndex: 2,
                symbolSize: 14,
                itemStyle: {
                    normal: {
                        borderColor: '#fff',
                        borderWidth: 2,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#1a9bfc'
                        }, {
                            offset: 1,
                            color: '#7049f0'
                        }]),
                        opacity: 1,
                    }
                },
                z: 2
            },
            {
                name: '完成情况',
                type: 'bar',
                xAxisIndex: 1,
                barGap: '140%',
                data: [data3[0] + 15, data3[1] + 15, data3[2] + 15, data3[3] + 15,],
                barWidth: 20,
                itemStyle: {
                    normal: {
                        color: '#0e2147',
                        barBorderRadius: 5,
                    }
                },
                z: 1
            },
            {
                name: '完成情况',
                type: 'bar',
                xAxisIndex: 2,
                barGap: 1,
                data: [data3[0] + 15.5, data3[1] + 15.5, data3[2] + 15.5, data3[3] + 15.5,],
                barWidth: 24,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#1a9bfc'
                        }, {
                            offset: 1,
                            color: '#7049f0'
                        }]),
                        barBorderRadius: 5,
                    }
                },
                z: 0
            },
            {
                name: '完成情况',
                type: 'scatter',
                hoverAnimation: false,
                data: [1.2, 1.2, 1.2, 1.2],
                xAxisIndex: 2,
                symbolOffset: [48, 0], //相对于原本位置的偏移量
                symbolSize: 24,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#1a9bfc'
                        }, {
                            offset: 1,
                            color: '#7049f0'
                        }]),
                        opacity: 1,
                    }
                },
                z: 2
            }
        ]*/
};