option = {
    backgroundColor: '#0E1327',
    series: [
        {
        type: 'gauge',
        z:100,
        axisLine: {
            lineStyle: {
                width: 5,
                color: [
                            [
                                0.3, new echarts.graphic.LinearGradient(
                                    0, 1, 1, 0, [{
                                            offset: 0,
                                            color: 'rgba(0, 237, 3,0.1)',
                                        }, {
                                            offset: 0.5,
                                            color: 'rgba(0, 237, 3,0.6)',
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(0, 237, 3,1)',
                                        }
                                    ]
                                )
                            ],
                            [
                                0.7, new echarts.graphic.LinearGradient(
                                    0, 1, 1, 0, [{
                                            offset: 0,
                                            color: 'rgba(255, 184, 0,0.1)',
                                        }, {
                                            offset: 0.5,
                                            color: 'rgba(255, 184, 0,0.6)',
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(255, 184, 0,1)',
                                        }
                                    ]
                                )
                            ],
                            [
                                1, new echarts.graphic.LinearGradient(
                                    0, 1, 1, 0, [{
                                            offset: 0,
                                            color: 'rgba(175, 36, 74,0.1)',
                                        }, {
                                            offset: 0.5,
                                            color: 'rgba(255, 36, 74,0.6)',
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(255, 36, 74,1)',
                                        }
                                    ]
                                )
                            ]
                        ],
                // color: [
                //     [0.3, '#00ed03'],
                //     [0.7, '#ffb800'],
                //     [1, '#af00a9']
                // ]
                /*color: [
                    [1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0.3,
                            color: "#00ed03"
                        },
                        {
                            offset: 0.7,
                            color: "#ffb800"
                        },
                        {
                            offset: 1,
                            color: "#af00a9"
                        }
                    ])]
                ]*/
            }
        },
        // radius: '50%',
        pointer: {
            itemStyle: {
                color: 'auto'
            }
        },
        axisTick: {
            distance: 0,
            length: 8,
            lineStyle: {
                color: 'auto',
                width: 2
            }
        },
        splitLine: {
            distance: 0,
            length: 20,
            lineStyle: {
                color: 'auto',
                width: 4
            }
        },
        axisLabel: {
            color: 'white',
            distance: 30,
            fontSize: 15
        },
        detail: {
            valueAnimation: true,
            formatter: '{value} %',
            color: 'white'
        },
        data: [{
            value: 70
        }]
    },
    ]
};

setInterval(function () {
    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    myChart.setOption(option, true);
}, 2000);
