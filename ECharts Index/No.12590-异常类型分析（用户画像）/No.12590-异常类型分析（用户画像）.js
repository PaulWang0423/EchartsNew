option = {
    backgroundColor: '#141845',
    title: {
        text: '异常类型分析（用户画像）',
        textStyle: {
            color: '#fff',
        },
    },
    tooltip: {},
    legend: {
        //              data: ['上月人数', '本月人数']
        data: [{
                name: '上月人数',
                textStyle: {
                    color: '#fff'
                }
            },
            {
                name: '本月人数',
                textStyle: {
                    color: '#fff'
                }
            }
        ],
    },
    radar: {
        // shape: 'circle',
        nameGap: 4,
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: 'rgba(0,0,0,.5)',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [{
                name: '心里异常',
                max: 600
            },
            {
                name: '上网时间异常',
                max: 600
            },
            {
                name: '消费异常',
                max: 600
            },
            {
                name: '日常行为异常',
                max: 600
            },
            {
                name: '关注信息异常',
                max: 600
            },
            {
                name: '社交媒体异常',
                max: 600
            }
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [{
                value: [430, 100, 280, 350, 500, 190],
                name: '上月人数'
            },
            {
                value: [500, 140, 280, 310, 420, 210],
                name: '本月人数'
            }
        ]
    }]
};