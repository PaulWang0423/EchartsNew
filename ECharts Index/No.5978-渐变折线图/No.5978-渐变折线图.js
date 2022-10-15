option = {
    backgroundColor:'#FFF',
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 255, 233,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 233,0)'
                    }],
                    global: false
                }
            },
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['5月10日', '5月11日', '5月12日', '5月13日', '5月14日', '5月15日', '5月16日', '5月17日'],
        axisTick: {
            show: true,
            inside: true,
            lineStyle: {
                
            }
        },
        axisLine: {
            onZero: false,
            lineStyle: {
                color: '#C7D4E1'
            }
        },
        axisLabel: {
            lineHeight: 60,
            
            color: '#6A829A',
            fontSize: 14
        },
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            onZero: false,
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            color: '#6A829A'
        },
        x: 0,
        y: 0,
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: 'rgba(255,255,255,.2)'
            }
        }
    }],
    series: [{
            name: '',
            type: 'line',
            data: [100, 120, 90, 280, 90, 330, 170],
            smooth: true,
            symbol: 'circle',
            symbolSize: 0,
            itemStyle: {
                normal: {
                    color: '#fff',
                    borderColor: '#4bc8db',
                    areaStyle: {
                        type: 'default',
                        opacity: 0.4
                    }
                }
            },
            lineStyle: {
                // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 254, 157, 1)' // 0% 处的颜色
                    }, {
                        offset: 0.25,
                        color: 'rgba(2, 221, 241, 1)' // 0% 处的颜色
                    }, {
                        offset: 0.5,
                        color: 'rgba(51, 156, 255, 1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(145, 127, 255, 1)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                width: 4,
            },
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear', //设置线性渐变
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(0, 254, 157, 0.8)' // 0% 处的颜色
                        }, {
                            offset: 0.25,
                            color: 'rgba(2, 221, 241, 0.8)' // 0% 处的颜色
                        }, {
                            offset: 0.5,
                            color: 'rgba(51, 156, 255, 0.8)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(145, 127, 255, 0.8)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            },

        },

    ]
};