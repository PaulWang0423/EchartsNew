let list = [{
        name: '中和',
        value: 6
    }, {
        name: '西园',
        value: 1
    }, {
        name: '肖家河',
        value: 0
    }, {
        name: '石羊',
        value: 8
    }, {
        name: '合作',
        value: 0
    },
    {
        name: '桂溪',
        value: 6
    },
    {
        name: '芳草街',
        value: 1
    }
];
let data = ['中和', '西园', '肖家河', '石羊', '合作', '桂溪', '芳草街'];
let values = [6, 1, 0, 8, 0, 6, 1]

option = {
    backgroundColor:'balck',
    xAxis: {
        max: 20,
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    grid: {
        containLabel: true,
        left: 30,
        top: 0,
        right: 60,
        bottom: 0
    },
    yAxis: [{
        data: data,
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14,
                color: '#fff'
            }
        }
    }],
    series: [{ //内
            type: 'bar',
            barWidth: 10,
            legendHoverLink: false,
            symbolRepeat: true,
            silent: true,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#12272A' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#62E6F6' // 100% 处的颜色
                    }]
                }
            },
            data: list,
            z: 1,
            animationEasing: 'elasticOut'
        },
        {
            type: 'pictorialBar',
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '20%',
            symbol: 'roundRect',
            symbolSize: [7, 10],
            symbolBoundingData: 20,
            itemStyle: {
                normal: {
                    color: '#12272A',

                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    offset: [0, 2],
                    distance: 30,
                    textStyle: {
                        color: '#7AF8FF',
                        fontSize: 14,
                    }
                },

            },
            data: values,
            z: 0,
            animationEasing: 'elasticOut'
        },
        { //分隔
            type: 'pictorialBar',
            itemStyle: {
                color: '#000'
            },
            symbolRepeat: 'fixed',
            symbolMargin: 4,
            symbol: 'roundRect',
            symbolClip: true,
            symbolSize: [2, 10],
            symbolPosition: 'start',
            symbolOffset: [0, 0],
            symbolBoundingData: 20,
            data: list,
            z: 2,
            animationEasing: 'elasticOut'
        }
    ]
};