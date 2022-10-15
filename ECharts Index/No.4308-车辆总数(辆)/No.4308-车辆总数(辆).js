var option = {
    title: [ //文本数值显示
        {
            text: '车辆总数(辆)',
            x: '7%',
            y: '7%',
            textStyle: {
                fontSize: 20
            }
        },
        {
            text: '34220',
            x: '7.6%',
            y: '11%',
            textStyle: {
                fontSize: 30
            }
        },
        {
            text: '车辆行驶数(辆)',
            x: '19%',
            y: '7%',
            textStyle: {
                fontSize: 20
            }
        },
        {
            text: '34220',
            x: '20.3%',
            y: '11%',
            textStyle: {
                fontSize: 30
            }
        },
        {
            text: '行驶里程总数(km)',
            x: '34%',
            y: '7%',
            textStyle: {
                fontSize: 20
            }
        },
        {
            text: '34220',
            x: '36.3%',
            y: '11%',
            textStyle: {
                fontSize: 30
            }
        },
        {
            text: '行驶里程平均数(km)',
            x: '50%',
            y: '7%',
            textStyle: {
                fontSize: 20
            }
        },
        {
            text: '34220',
            x: '53.2%',
            y: '11%',
            textStyle: {
                fontSize: 30
            }
        },
        {
            text: '行驶时长总数(h)',
            x: '69%',
            y: '7%',
            textStyle: {
                fontSize: 20
            }
        },
        {
            text: '34220',
            x: '71.2%',
            y: '11%',
            textStyle: {
                fontSize: 30
            }
        },
        {
            text: '行驶时长平均数(h)',
            x: '83%',
            y: '7%',
            textStyle: {
                fontSize: 20
            }
        },
        {
            text: '34220',
            x: '85.6%',
            y: '11%',
            textStyle: {
                fontSize: 30
            }
        },
        { //饼图
            text: '车辆类型统计',
            x: '25%',
            y: '20%',
            textAlign: 'center',
            textStyle: {
                fontSize: 20
            }
        },
        { //饼图
            text: '车辆报警统计',
            x: '67.5%',
            y: '20%',
            textStyle: {
                fontSize: 20
            }
        },
        { //堆积柱状图
            text: '车辆状态统计',
            x: '25%',
            y: '58%',
            textAlign: 'center',
            textStyle: {
                fontSize: 20
            }
        },
        {
            text: '车辆行驶数量',
            x: '67.5%',
            y: '58%',
            textStyle: {
                fontSize: 20
            }
        }
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    backgroundColor: 'rgba(20,20,100,1)', // 背景色
    grid: [{
            left: '5%',
            right: '55%', // 网格部分
            top: '65%',
            bottom: '5%',
            containLabel: true
        },
        {
            gridindex: 1,
            left: '50%',
            right: '5%',
            top: '65%',
            bottom: '5%',
            containLabel: true
        }
    ],
    xAxis: [{
            type: 'value', // x轴
            axisLabel: {
                formatter: '{value} 辆'
            },
            boundaryGap: [0, 0.02]
        },
        {
            gridIndex: 1,
            type: 'category',
            boundaryGap: false,
            data: ['0时', '1时', '2时', '3时', '4时',
                '5时', '6时', '7时', '8时', '9时',
                '10时', '11时', '12时', '13时', '14时',
                '15时', '16时', '17时', '18时', '19时',
                '20时', '21时', '22时', '23时'
            ]
        }
    ],
    yAxis: [{
            type: 'category', // y轴
            data: ['客运车', '危险品运输车', '网约车', '校车', '私家车'],
            axisLabel: {
                interval: 0
            }
        },
        {
            gridIndex: 1,
            type: 'value',
            axisLabel: {
                formatter: '{value} '
            }
        }
    ],
    legend: {
        data: ['停车', '行驶', '熄火', '离线'], // 图例
        x: '12%',
        y: '62%',
        textStyle: {
            color: '#FCFCFC'
        }
    },
    series: [{ //饼图
            type: 'pie',
            center: ['25%', '42%'],
            radius: ['', '25%'],
            label: {
                normal: {
                    formatter: '{b} :\n{c}({d}%)'
                }
            },
            data: [{
                    value: 1032,
                    name: '客运车'
                },
                {
                    value: 10096,
                    name: '危险品运输车'
                },
                {
                    value: 1240,
                    name: '网约车'
                },
                {
                    value: 15098,
                    name: '校车'
                },
                {
                    value: 4098,
                    name: '私家车'
                }
            ]
        },
        { //饼图
            type: 'pie',
            center: ['73%', '42%'],
            radius: ['', '25%'],
            label: {
                normal: {
                    formatter: '{b} :\n{c}({d}%)'
                }
            },
            data: [{
                    value: 512,
                    name: '超速'
                },
                {
                    value: 302,
                    name: 'SOS'
                },
                {
                    value: 743,
                    name: '偏移'
                },
                {
                    value: 205,
                    name: '其他'
                }
            ]
        },
        { // 堆积柱状图
            name: '停车',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside'
            },
            data: [320, 302, 301, 334, 390]
        },
        {
            name: '行驶',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside'
            },
            data: [120, 132, 101, 134, 90]
        },
        {
            name: '熄火',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside'
            },
            data: [220, 182, 191, 234, 290]
        },
        {
            name: '离线',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside'
            },
            data: [150, 212, 201, 154, 190]
        },
        {
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [820, 932, 901, 934, 1290, 1330,
                1320, 1200, 1134, 1034, 1123, 1290,
                1384, 1136, 984, 843, 934, 1034,
                1204, 1345, 1423, 1320, 1104, 873
            ],
            type: 'line',
            smooth: true
        }
    ]
};