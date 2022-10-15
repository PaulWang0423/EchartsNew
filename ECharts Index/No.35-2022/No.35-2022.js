const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        console.log(ctx,shape);
        const yAxisPoint = shape.yAxisPoint
        const c0 = [shape.x, shape.y]
        const c1 = [shape.x + 9, shape.y - 9]
        const c2 = [yAxisPoint[0] + 9, yAxisPoint[1] - 9]
        const c3 = [yAxisPoint[0], yAxisPoint[1]]
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
    }
})
const CubeRight = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const yAxisPoint = shape.yAxisPoint
        const c1 = [shape.x, shape.y]
        const c2 = [yAxisPoint[0], yAxisPoint[1]]
        const c3 = [yAxisPoint[0] + 9, yAxisPoint[1] + 18]
        const c4 = [shape.x + 9, shape.y + 18]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
})
const CubeTop = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const c1 = [shape.x, shape.y]
        const c2 = [shape.x + 9, shape.y + 18]
        const c3 = [shape.x + 18, shape.y + 9]
        const c4 = [shape.x + 9, shape.y - 9]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
})
echarts.graphic.registerShape('CubeLeft', CubeLeft)
echarts.graphic.registerShape('CubeRight', CubeRight)
echarts.graphic.registerShape('CubeTop', CubeTop)
const MAX = [100, 100, 100, 100, 100,100]
const VALUE = [40, 40, 15, 2, 2, 1]
const NAMES = ['漏洞攻击：40%', '网络扫描：40%', '暴力破解：15%', '进程外联：2%','钓鱼邮件：2%','启动powershell：1%'];
option = {
    backgroundColor: "#010d3a",
    title: {
        text: '',
        top: 32,
        left: 18,
        textStyle: {
            color: '#00F6FF',
            fontSize: 24
        }
    },
    grid: {
        left: 20,
        right: 40,
        bottom: '19%',
        top: 107,
        containLabel: true
    },
    yAxis: {
        type: 'category',
        data: NAMES,
        axisLine: {
            show: false,
            lineStyle: {
                color: 'white'
            }
        },
        offset: 20,
        axisTick: {
            show: false,
            length: 9,
            alignWithLabel: true,
            lineStyle: {
                color: '#7DFFFD'
            }
        },
        axisLabel: {
            fontSize: 10
        }
    },
    xAxis: {
        type: 'value',
        axisLine: {
            show: false,
            lineStyle: {
                color: 'white'
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show:false,
            fontSize: 16
        },
        boundaryGap: ['20%', '20%']
    },
    series: [{
        type: 'custom',
        renderItem: function(params, api) {
            const location = api.coord([api.value(0), api.value(1)])
            return {
                type: 'group',
                children: [{
                    type: 'CubeLeft',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        yAxisPoint: api.coord([0,api.value(1)])
                    },
                    style: {
                        fill: 'rgba(7,29,97,.6)'
                    }
                }, {
                    type: 'CubeRight',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        yAxisPoint: api.coord([0,api.value(1)])
                    },
                    style: {
                        fill: 'rgba(10,35,108,.7)'
                    }
                }, {
                    type: 'CubeTop',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        yAxisPoint: api.coord([0,api.value(1)])
                    },
                    style: {
                        fill: 'rgba(11,42,106,.8)'
                    }
                }]
            }
        },
        data: MAX
    },
    {
        type: 'custom',
        renderItem: (params, api) => {
            const location = api.coord([api.value(0), api.value(1)])
            return {
                type: 'group',
                children: [{
                    type: 'CubeLeft',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        yAxisPoint: api.coord([0,api.value(1)])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#3B80E2'
                            },
                            {
                                offset: 1,
                                color: '#49BEE5'
                            }
                        ])
                    }
                }, {
                    type: 'CubeRight',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        yAxisPoint: api.coord([0,api.value(1)])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#3B80E2'
                            },
                            {
                                offset: 1,
                                color: '#49BEE5'
                            }
                        ])
                    }
                }, {
                    type: 'CubeTop',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        yAxisPoint: api.coord([0,api.value(1)])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: '#3B80E2'
                            },
                            {
                                offset: 1,
                                color: '#49BEE5'
                            }
                        ])
                    }
                }]
            }
        },
        data: VALUE
    },
    {
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: (e) => {
                    switch (e.name) {
                       

                    }
                },
                fontSize: 16,
                color: '#fff',
                offset: [25, 4]
            }
        },
        itemStyle: {
            color: 'transparent'
        },
        data: MAX
    }]
}