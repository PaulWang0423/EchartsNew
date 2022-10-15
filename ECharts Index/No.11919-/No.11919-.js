var targetValue = 200;
var realValue = 88;
var data = {
    title: '仪表盘',
    value: (100 * realValue / targetValue).toFixed(2),
    color: {
        pieMini: '#ffca1c', //小圆形颜色
        pieMiniMini: '#fff', //小小圆形颜色
        piePlus: '#5DD1FA', //大圆形颜色
        value: '#fff', //底部数值颜色
    },
}
var option = {

    backgroundColor: "#062a44",
    series: [{
            type: 'gauge',
            radius: '30%',
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: '269.99',
            endAngle: '-90',
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    color: [
                        [0.2, '#78B5F3'],
                        [1, '#3C8FF4']
                    ]
                }
            },
            axisLabel: {
                show: true,
                color: '#fff',
                distance: -35,
                fontSize: 12,
                formatter: function(v) {
                    switch (v + '') {
                        case '0':
                            return '0';
                        case '10':
                            return '10';
                        case '20':
                            return '20';
                        case '30':
                            return '30';
                        case '40':
                            return '40';
                        case '50':
                            return '50';
                        case '60':
                            return '60';
                        case '70':
                            return '70';
                        case '80':
                            return '80';
                        case '90':
                            return '90';
                        case '100':
                            return '0';
                    }
                }
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 5,
                lineStyle: {
                    color: '#3C8FF4', //用颜色渐变函数不起作用
                    width: 1,
                },
                length: 10
            }, //刻度样式
            splitLine: {
                show: true,
                length: 15,
                lineStyle: {
                    color: '#3C8FF4', //用颜色渐变函数不起作用
                }
            }, //分隔线样式
            itemStyle: {
                normal: {
                    show: false
                }
            },
            pointer: {
                show: true,
                length: '60%',
                width: 7, //指针粗细
            },
            z: 12,
            "detail": {
                "formatter": function(value) {
                    // if (value !== 0) {
                    //     var num = Math.round(value);
                    //     return  parseInt(num).toFixed(0) + "%";
                    // } else {
                    //     return 0;
                    // }
                    var num = Math.round(value);
                    return "当前进度" + parseInt(num).toFixed(0) + "%";
                },
                // "offsetCenter": ['30%', "60%"],
                "textStyle": {
                    padding: [0, 0, 80, 0],
                    "fontSize": 20,
                    fontWeight: '700',
                    "color": '#FBA51C'
                }
            },
            "title": {
                color: '#fff',
                "fontSize": 14,
                //"offsetCenter": ['-20%', "30%"]
            },
            "data": [{
                "name": "当前进度",
                "value": 44,
            }],
        },
        {
            title: {
                show: false
            },
            type: "gauge",
            radius: '40%',
            splitNumber: 10,
            startAngle: '269.99',
            endAngle: '-90',
            z: 11,
            "axisLine": {
                "lineStyle": {
                    "color": [
                        [data.value / 100, "#3C8FF4"],
                        [1, "#000"]
                    ],
                    "width": 15,
                    borderWidth: 5,
                    borderColor: 'red'
                }
            },
            axisLabel: {
                show: false,
            },
            "axisTick": {
                show: false,

            },
            "splitLine": {
                "show": false,
            },
            pointer: {
                show: false
            },
            detail: {
                show: false
            },
        },
        {
            name: 'pie',
            type: 'pie',
            clockWise: true,
            startAngle: -270,
            radius: ['30%', '40%'],
            hoverAnimation: false,
            center: ['50%', '50%'],
            data: ['100'],
            z: 1,
            labelLine: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#000',
                }
            }
        },




    ]
};