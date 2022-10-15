const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const xAxisPoint = shape.xAxisPoint
        const c0 = [shape.x, shape.y]
        const c1 = [shape.x - 25, shape.y - 4]
        const c2 = [xAxisPoint[0] - 25, xAxisPoint[1] - 4]
        const c3 = [xAxisPoint[0], xAxisPoint[1]]
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
    }
})
const CubeRight = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const xAxisPoint = shape.xAxisPoint
        const c1 = [shape.x, shape.y]
        const c2 = [xAxisPoint[0], xAxisPoint[1]]
        const c3 = [xAxisPoint[0] + 10, xAxisPoint[1] - 4]
        const c4 = [shape.x + 10, shape.y - 4]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
})
const CubeTop = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        // 逆时针 角 y 负数向上  X 负数向左
        const c1 = [shape.x, shape.y + 0]
        const c2 = [shape.x + 10, shape.y - 4]
        const c3 = [shape.x - 14, shape.y - 8]
        const c4 = [shape.x - 25, shape.y - 4]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
})
echarts.graphic.registerShape('CubeLeft', CubeLeft)
echarts.graphic.registerShape('CubeRight', CubeRight)
echarts.graphic.registerShape('CubeTop', CubeTop)

option = {
    backgroundColor: '#031C5D',
    tooltip: {
        trigger: 'item',
        textStyle: {
            fontSize: 38
        },
        // formatter:'{b}'
    },
    legend: {
        show: false,
        itemWidth: 30,
        itemHeight: 20,
        textStyle: {
            color: '#fff',
            fontSize: 24
        }
    },
    grid: {
        show: false,
        left: '5%',
        right: '5%',
        bottom: '12%',
        top: '20%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['2017年', '2018年', '2019年'],
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
                width: 3
            }
        },
        offset: 10,
        axisTick: {
            show: false
        },
        axisLabel: {
            fontSize: 38,
            color: '#fff'
        }
    },
    yAxis: {
        name: '(%)',
        nameTextStyle: {
            fontSize: 38,
            color: '#fff'
        },
        nameGap: 30,
        show: true,
        type: 'value',
        axisLine: {
            show: false,
            lineStyle: {
                color: 'white',
                width: 3
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            fontSize: 38,
            color: '#fff'
        },
        boundaryGap: ['20%', '20%']
    },
    series: [{
        type: 'custom',
        name: '第一产业',
        renderItem: (params, api) => {
            const location = api.coord([api.value(0), api.value(1)])
            return {
                type: 'group',
                children: [{
                    type: 'CubeLeft',
                    position: [-50, 0],
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#736A0B'
                        }, {
                            offset: 1,
                            color: '#B7AA0D'
                        }])
                    }
                }, {
                    type: 'CubeRight',
                    position: [-50, 0],
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#322E07' // 顶部
                        }, {
                            offset: 1,
                            color: '#79700B' // 底部
                        }])
                    }
                }, {
                    type: 'CubeTop',
                    position: [-50, 0],
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#D3C71F'
                        }, {
                            offset: 1,
                            color: '#D3C71F'
                        }])
                    }
                }]
            }
        },
        data: [20, 30, 20]
    }, {
        type: 'custom',
        name: '第二产业',
        renderItem: (params, api) => {
            const location = api.coord([api.value(0), api.value(1)])
            return {
                type: 'group',
                children: [{
                    type: 'CubeLeft',
                    position: [0, 0],
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#0F9D0C'
                        }, {
                            offset: 1,
                            color: '#40FF33'
                        }])
                    }
                }, {
                    type: 'CubeRight',
                    position: [0, 0],
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#084408' // 顶部
                        }, {
                            offset: 1,
                            color: '#11B10C' // 底部
                        }])
                    }
                }, {
                    type: 'CubeTop',
                    position: [0, 0],
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#55FF52'
                        }, {
                            offset: 1,
                            color: '#55FF52'
                        }])
                    }
                }]
            }
        },
        data: [30, 40, 20]
    }, {
        type: 'custom',
        name: '第三产业',
        renderItem: (params, api) => {
            const location = api.coord([api.value(0), api.value(1)])

            return {
                type: 'group',
                children: [{
                    type: 'CubeLeft',
                    position: [50, 0],
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#1477BD'
                        }, {
                            offset: 1,
                            color: '#00FFFE'
                        }])
                    }
                }, {
                    type: 'CubeRight',
                    position: [50, 0],
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#002E75' // 顶部
                        }, {
                            offset: 1,
                            color: '#00B0D0' // 底部
                        }])
                    }
                }, {
                    type: 'CubeTop',
                    position: [50, 0],
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#33F7FB'
                        }, {
                            offset: 1,
                            color: '#00FFFE'
                        }])
                    }
                }]
            }
        },
        data: [40, 50, 30]
    }]
}