option = {
    backgroundColor: '#252525',
    title: {

        textStyle: {
            color: '#cccccc',
            fontSize: 12
        }
    },
    legend: {
        top: 0,
        textStyle: {
            color: '#ccc',
        },
        // data: ['室外消火栓检测系统', '火灾自动报警系统', '设施离位报警系统','视频监控系统']
    },
    grid: {
        left: '5%',
        right: '2%',
        bottom: '10%',
        height: "70%",
        containLabel: true
    },

    tooltip: {
        show: "true",
        trigger: 'item',
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
        formatter: function(params) {
            if (params.seriesIndex == "4" || params.seriesIndex == "5" || params.seriesIndex == "6" || params.seriesIndex == "7") {
                return params.name + '<br>' + params.seriesName + ' ： ' + params.value + '台';
            }
            let value = vue.list.series_data[params.seriesIndex].data[params.dataIndex] || '0';
            let name = vue.list.series_data[params.seriesIndex].name;
            return params.name + '<br>' + name + ' ： ' + value + '台';

        }
    },
    yAxis: {
        type: 'value',
        name: '（台）',
        gridIndex: 0,
        nameLocation: 'start',
        nameTextStyle: {
            color: '#00b5ff',
            fontSize: 14,
            padding: [-21, 65, 0, 0]
        },
        axisTick: {
            show: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#00b5ff',
            }
        },
        splitLine: {
            // interval:1,
            show: true,
            lineStyle: {
                color: 'rgba(12, 156, 240, 0.2)',
                width: 1,
                type: 'solid'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#00b5ff',
                fontWeight: 'normal',
                fontSize: '14',
            },
        },
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#00b5ff',
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#00b5ff ',
            }
        },
        axisLabel: {
            inside: false,
            textStyle: {
                color: '#00b5ff',
                fontWeight: 'normal',
                fontSize: '12',
            },
            // formatter:function(val){
            //     return val.split("").join("\n")
            // },
        },
        data: ['192.168.56.*', '192.168.12.*', '192.168.19.*', '192.168.45.*'],
    }, {
        type: 'category',
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false,

        },
        axisLabel: {
            show: false
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#071f2a',
                width: 1,
                type: 'solid'
            }
        },
        data: ['192.168.56.*', '192.168.12.*', '192.168.19.*', '192.168.45.*'],

    }, ],
    series: [{
            type: 'bar',
            xAxisIndex: 1,
            zlevel: 1,
            itemStyle: {
                normal: {
                    color: 'rgba(28, 48, 91, 0.5)',
                    borderColor: 'rgba(28, 47, 91, 0.7)',
                    borderWidth: 1
                }
            },
            barWidth: '15',
            data: [30, 30, 30, 30]
        }, {
            type: 'bar',
            xAxisIndex: 1,
            barGap: '30%',
            data: [30, 30, 30, 30],
            zlevel: 1,
            barWidth: '15',
            itemStyle: {
                normal: {
                    color: 'rgba(28, 48, 91, 0.5)',
                    borderColor: 'rgba(28, 47, 91, 0.7)',
                    borderWidth: 1
                }
            },
        }, {
            type: 'bar',
            xAxisIndex: 1,
            barGap: '30%',
            data: [30, 30, 30, 30],
            zlevel: 1,
            barWidth: '15',
            itemStyle: {
                normal: {
                    color: 'rgba(28, 48, 91, 0.5)',
                    borderColor: 'rgba(28, 47, 91, 0.7)',
                    borderWidth: 1
                }
            },
        }, {
            type: 'bar',
            xAxisIndex: 1,
            barGap: '30%',
            data: [30, 30, 30, 30],
            zlevel: 1,
            barWidth: '15',
            itemStyle: {
                normal: {
                    color: 'rgba(28, 48, 91, 0.5)',
                    borderColor: 'rgba(28, 47, 91, 0.7)',
                    borderWidth: 1
                }
            },
        }, {
            name: 'WEB服务器',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(42,153,250,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(42,153,250,0.2)'
                    }]),
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barWidth: '15',
            data: [8, 15, 10, 14]
        }, {
            name: 'FTP服务器',
            type: 'bar',
            barWidth: '15',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0,232,219,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(0,232,219,0.2)'
                    }]),
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barGap: '30%',
            data: [8, 17, 26, 19]
        }, {
            name: 'DNS服务器',
            type: 'bar',
            barWidth: '15',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(239,188,67,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(239,188,67,0.2)'
                    }]),
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barGap: '30%',
            data: [8, 17, 26, 21]
        }, {
            name: 'NAT服务器',
            type: 'bar',
            barWidth: '15',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(139,47,232,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(139,47,232,0.2)'
                    }]),
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barGap: '30%',
            data: [8, 17, 26, 3]
        }

    ]
};