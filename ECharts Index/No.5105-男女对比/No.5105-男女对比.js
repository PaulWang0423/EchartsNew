const man = 'data:image/png;base64,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'
const woman = 'data:image/png;base64,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'
const womannum = 70
const mannum = 100 - womannum  

option = {
    graphic: {
        elements: [
            {
                type: 'group',
                left: '16%',
                top: '30%',
                width: 100,
                height: 300,
                children: [{
                        type: 'image',
                        z: 3,
                        style: {
                            image: man,
                        },
                    },
                    {
                        type: 'text',
                        top: 200,
                        style: {
                            fill: 'rgba(0, 252, 253, 1)',
                            text: mannum + '%',
                            font: 'bold 20px Microsoft YaHei',
                        }
                    },
                    {
                        type: 'text',
                        bottom: 0,
                        style: {
                            fill: 'rgba(134, 157, 229, 1)',
                            text: '男教师',
                            font: 'bold 20px Microsoft YaHei',
                        }
                    },
                ]

            },
            {
                type: 'group',
                right: '16%',
                top: '30%',
                width: 100,
                height: 300,
                children: [{
                        type: 'image',
                        z: 3,
                        style: {
                            image: woman,
                        },
                    },
                    {
                        type: 'text',
                        top: 200,
                        style: {
                            fill: 'rgba(0, 252, 253, 1)',
                            text: womannum + '%',
                            font: 'bold 20px Microsoft YaHei',
                        }
                    },
                    {
                        type: 'text',
                        bottom: 0,
                        style: {
                            fill: 'rgba(134, 157, 229, 1)',
                            text: '女教师',
                            font: 'bold 20px Microsoft YaHei',
                        }
                    },
                ]
            },
        ]
    },
    tooltip: {
        show: false
    }, 
    series: [{
            name: 'bg',
            type: 'pie',
            startAngle: 90,
            radius: ['30%', '60%'],
            hoverAnimation: false,
            center: ['50%', '50%'],
            itemStyle: {
                normal: {
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(62, 109, 255, .2)',
                }
            },
            data: [{
                value: 100,

            }]
        },
        {
            name: 'bgman',
            type: 'pie',
            startAngle: 90,
            radius: ['40%', '50%'],
            hoverAnimation: false,
            center: ['50%', '50%'],
            itemStyle: {
                normal: {
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(62, 109, 255, 1)',
                }
            },
            data: [{
                value: 100,

            }]
        },
        {
            name: '',
            type: 'pie',
            startAngle: 90,
            radius: ['35%', '55%'],
            hoverAnimation: false,
            center: ['50%', '50%'],
            itemStyle: {
                normal: {
                    labelLine: {
                        show: false
                    },
                }
            },
            data: [{
                value: womannum,
                itemStyle: {
                    normal: {
                        labelLine: {
                            show: false
                        },
                        color: 'rgba(0, 252, 253, 1)',
                    }
                },
            }, {
                value: mannum,
                itemStyle: {
                    normal: {
                        labelLine: {
                            show: false
                        },
                        color: 'transparent',
                    }
                },
            }]
        },
    ]
};