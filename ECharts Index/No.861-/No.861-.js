 // 绘制左侧面
        const CubeLeft = echarts.graphic.extendShape({
            shape: {
                x: 0,
                y: 0
            },
            buildPath: function(ctx, shape) {
                // 会canvas的应该都能看得懂，shape是从custom传入的
                const xAxisPoint = shape.xAxisPoint
                const c0 = [shape.x + 7, shape.y]
                const c1 = [shape.x - 23, shape.y - 6]
                const c2 = [xAxisPoint[0] - 23, xAxisPoint[1] - 13]
                const c3 = [xAxisPoint[0] + 7, xAxisPoint[1]]
                ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
            }
        })
        // 绘制右侧面
        const CubeRight = echarts.graphic.extendShape({
            shape: {
                x: 0,
                y: 0
            },
            buildPath: function(ctx, shape) {
                const xAxisPoint = shape.xAxisPoint
                const c1 = [shape.x + 7, shape.y]
                const c2 = [xAxisPoint[0] + 7, xAxisPoint[1]]
                const c3 = [xAxisPoint[0] + 25, xAxisPoint[1] - 15]
                const c4 = [shape.x + 25, shape.y - 15]
                ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
            }
        })
        // 绘制顶面
        const CubeTop = echarts.graphic.extendShape({
            shape: {
                x: 0,
                y: 0
            },
            buildPath: function(ctx, shape) {
                const c1 = [shape.x + 7, shape.y]
                const c2 = [shape.x + 25, shape.y - 15] //右点
                const c3 = [shape.x - 5, shape.y - 20]
                const c4 = [shape.x - 23, shape.y - 6]
                ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
            }
        })
        // 注册三个面图形
        echarts.graphic.registerShape('CubeLeft', CubeLeft)
        echarts.graphic.registerShape('CubeRight', CubeRight)
        echarts.graphic.registerShape('CubeTop', CubeTop)
        const yData = [200,300];
        const xData = ['2020','2021'];
        const xName = ["企业"];
         option = {
           backgroundColor: "#0A2E5D",
            grid: {
                left: '5%',
                right: '5%',
                top: '12%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: {
                name:xName,
                nameLocation:'middle',
                nameTextStyle:{
                    color:'#fff',
                    fontSize:20
                },
                type: 'category',
                data: xData,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#7ebaf2'
                    }
                },
                axisTick: {
                    show: false,
                    length: 9,
                    alignWithLabel: true,
                    lineStyle: {
                        color: '#7DFFFD'
                    }
                },
                axisLabel: {
                    fontSize: 12
                }
            },
            yAxis: {
                type: 'value',
                min:0,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#7ebaf2'
                    }
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false,
                    fontSize: 12
                },
                boundaryGap: ['20%', '20%']
            },
            series: [{
                type: 'custom',
                renderItem: (params, api) => {
                    let cubeLeftStyle = ''
                    let cubeRightStyle = ''
                    let cubeTopStyle = ''
                    if(params.dataIndex == 0){
                        cubeLeftStyle=new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(186, 155, 52, 1)'
                        }, {
                            offset: 1,
                            color: 'rgba(183, 163, 60, 1)'
                        }])
                        cubeRightStyle=new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(250, 238, 70, 1)'
                        }, {
                            offset: 1,
                            color: 'rgba(252, 96, 78, 1)'
                        }])
                        cubeTopStyle=new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(247, 253, 58, 1)'
                        }, {
                            offset: 1,
                            color: 'rgba(247, 253, 58, 1)'
                        }])
                    }else if(params.dataIndex == 1){
                        cubeLeftStyle=new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(52, 74, 186, 1)'
                        }, {
                            offset: 1,
                            color: 'rgba(134, 60, 183, 1)'
                        }])
                        cubeRightStyle=new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(36, 173, 254, 1)'
                        }, {
                            offset: 1,
                            color: 'rgba(165, 78, 252, 1)'
                        }])
                        cubeTopStyle=new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(58, 213, 253, 1)'
                        }, {
                            offset: 1,
                            color: 'rgba(58, 213, 253, 1)'
                        }])
                    }
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
                                xAxisPoint: api.coord([api.value(0), 0])
                            },
                            style: {
                                fill: cubeLeftStyle
                            }
                        }, {
                            type: 'CubeRight',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0])
                            },
                            style: {
                                fill:cubeRightStyle
                            }
                        },
                         {
                            type: 'CubeTop',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0])
                            },
                            style: {
                                fill: cubeTopStyle
                            }
                        },
                        ]
                    }
                },
                data: yData
            }, {
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        fontSize: 14,
                        color: '#fff',
                        offset: [2, -25]
                    }
                },
                itemStyle: {
                    color: 'transparent'
                },
                tooltip: {

                },
                data: yData
            }]
        }