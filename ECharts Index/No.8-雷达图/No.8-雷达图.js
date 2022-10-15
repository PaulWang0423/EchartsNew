option = {
    backgroundColor: '#0D2753',
    tooltip: {
        //雷达图的tooltip不会超出div，也可以设置position属性，position定位的tooltip 不会随着鼠标移动而位置变化，不友好
        confine: true,
        enterable: true, //鼠标是否可以移动到tooltip区域内
    },
    radar: {
        name: {
            textStyle: {
                color: '#05D5FF',
                fontSize: 14,
            },
        },
        shape: 'polygon',
        center: ['50%', '50%'],
        radius: '80%',
        startAngle: 120,
        scale: true,
        axisLine: {
            lineStyle: {
                color: 'rgba(5, 213, 255, .8)',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                width: 1,
                color: 'rgba(5, 213, 255, .8)', // 设置网格的颜色
            },
        },
        indicator: [
            {
                name: '特殊人群',
                max: 100,
            },
            {
                name: '信访',
                max: 100,
            },
            {
                name: '12345',
                max: 100,
            },
            {
                name: '事件',
                max: 100,
            },
            {
                name: '矛盾调解',
                max: 100,
            },
            {
                name: '人民调解',
                max: 100,
            },
        ],
        splitArea: {
            show: false,
        },
    },
    grid: {
        position: 'center',
    },
    polar: {
        center: ['50%', '50%'], // 默认全局居中
        radius: '0%',
        
    },
    angleAxis: {
        min: 0,
        interval: 5,
        clockwise: false,
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    },
    radiusAxis: {
        min: 0,
        interval: 20,
        splitLine: {
            show: false,
        },
    },
    series: [
        {
            name: '个人雷达图',
            type: 'radar',
            symbol: 'circle', // 拐点的样式，还可以取值'rect','angle'等
            symbolSize: 10, // 拐点的大小
            itemStyle: {
                normal: {
                    color: '#05D5FF',
                },
            },
            areaStyle: {
                normal: {
                    color: '#05D5FF',
                    opacity: 0.5,
                },
            },
            lineStyle: {
                width: 2,
                color: '#05D5FF',
            },
            label: {
                normal: {
                    show: true,
                    formatter: (params) => {
                        return params.value;
                    },
                    color: '#fff',
                },
            },
            data: [
                {
                    value: [20, 50, 60, 60, 90, 80],
                },
            ],
        },
    ],
};
