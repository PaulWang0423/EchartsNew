var value = 88;
option = {
    backgroundColor: '#000000',
    grid: {
        top: 200,
        bottom: 300,
    },
    // tooltip: {},
    xAxis: {
        data: [],
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        // axisLabel: {
        //     interval: 0,
        //     textStyle: {
        //         color: '#409bff',
        //         fontSize: 80
    
        //     margin: 80, //刻度标签与轴线之间的距离。
        // },
    },
    yAxis: {
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    series: [
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [100, 45],
            symbolOffset: [-10, -20],
            z: 12,
            data: [
                {
                    name: '',
                    value: value,
               
                    symbolPosition: 'end',
                    itemStyle: {
                        normal: {
                            color: 'rgba(2, 163, 243,0.5)', //圆柱顶部颜色
                        },
                    },
                },
            ],
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [100, 45],
            symbolOffset: [-10, 24],
            z: 12,
            data: [
                {
                    name: '',
                    value: value,
                   
                    itemStyle: {
                        normal: {
                            color: 'rgba(2, 163, 243, 1)', //圆柱底部颜色
                        },
                    },
                },
            ],
        },
        {
            type: 'bar',
            // silent: true,
            barWidth: 100,
            // "barGap": "-1100%",

            data: [
                {
                    name: '',
                    value: value,
                    
                    label: {
                        
                        normal: {
                            show: true,
                            formatter: "{c}"+"人",
                            position: 'top',
                            // distance: 4,
                            textStyle: {
                                color: 'rgba(2, 163, 243, 1)', //柱子对应数值颜色
                                fontSize: 40,
                                fontWeight:600
                        
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: {
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                type: 'linear',
                                global: false,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(18, 246, 255, 0)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(2, 163, 243, 1)', //底部渐变颜色
                                    },
                                ],
                            },
                        },
                    },
                },
            ],
        },

        //往上是内部柱状图
        //往下是外部柱状图

        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [340, 45],
            symbolOffset: [-10, -20],
            z: 12,
            data: [
                {
                    name: '',
                    value: '100',
                 
                    symbolPosition: 'end',
                    itemStyle: {
                        normal: {
                            color: 'rgba(0, 255, 136, 0)', //圆柱顶部颜色
                        },
                    },
                },
            ],
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [150, 75],
            symbolOffset: [-10, 41],
            z: 12,
            data: [
                {
                    name: '',
                    value: '100',
                   
                    itemStyle: {
                        normal: {
                            color: 'rgba(2, 163, 243, .1)', //圆柱底部颜色
                        },
                    },
                },
            ],
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [150, 75],
            symbolOffset: [-10, 55],
            z: 11,
            data: [
                {
                    name: '',
                    value: '100',
                
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderColor: 'rgba(2, 163, 243, 1)', //底部内圆圈颜色
                            borderWidth: 30,
                        },
                    },
                },
            ],
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [200, 100],
            symbolOffset: [-10, 62],
            z: 10,
            data: [
                {
                    name: '关井数',
                    value: '100',
                 
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderColor: 'rgba(2, 163, 243, 1)', //底部外圆圈颜色
                            borderType: 'dashed',
                            borderWidth: 2,
                        },
                    },
                },
            ],
        },
        {
            type: 'bar',
            silent: true,
            barWidth: 140,
            barGap: '-120%',
            data: [
                {
                    name: '',
                    value: '100',
                 
                    label: {
                        normal: {
                            show: false,
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: {
                                x: 1,
                                y: 1,
                                x2: 1,
                                y2: 0,
                                type: 'linear',
                                global: false,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(0, 255, 136, 0)',
                                    },
                                    {
                                        offset: 0.3,
                                        color: 'rgba(0, 255, 136, .1)',
                                    },
                                    {
                                        offset: 0.5,
                                        color: 'rgba(0, 255, 136, .1)',
                                    },
                                    {
                                        offset: 0.8,
                                        color: 'rgba(0, 255, 136, .1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(0, 255, 136, 0)', //底部渐变颜色
                                    },
                                ],
                            },
                        },
                    },
                },
            ],
        },
    ],
};
