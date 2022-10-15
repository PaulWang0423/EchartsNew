//政治面貌图表
option = {
    backgroundColor:'#000',
    /*
    graphic: {
        elements: [{
            type: "image",
            z: 3,
            style: {
                image: 'data:image/png;base64,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',
                width:215,
                height: 108
            },
            left: 'center',
            top: "17%",
        }]
    },*/
    color: [{
                x: 0, y:0, x2: 0, y2: 1,
                colorStops: [{
                    offset: 0, color: '#088EFF' // 0% 处的颜色
                }, {
                    offset: 1, color: '#0E51F3' // 100% 处的颜色
                }],
            },{
                x: 0, y:0, x2: 0, y2: 1,
                colorStops: [{
                    offset: 0, color: '#76ED5A' // 0% 处的颜色
                }, {
                    offset: 1, color: '#07DFA5' // 100% 处的颜色
                }],
            },'#41EFFF','transparent'],
        series: [{
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            startAngle: 182,
            center: ['50%', '50%'],
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    //shadowBlur: 10,
                    borderColor:'#020E36',
                    //shadowColor: '#fff'
                }
            },
            labelLine: {
                normal: {
                    length: 20,
                    length2: 88,
                }
            },
            label: {
                normal: {
                    formatter: params => {
                        return (
                            '{value|' + params.value + '%}\n\n{name|' + params.name + '}'
                        );
                    },
                    padding: [0, -100, 0, -100],
                    rich: {
                        name: {
                            fontSize: 12,
                            padding: [0, 40, 0, 40],
                            color: '#7594BA',
                        },
                        value: {
                            fontSize: 14,
                            padding: [0, 50, 0, 50],
                            color: '#31DAFF'
                        }
                    }
                }
            },

            data: [{
                    value: 75,
                    name:'共青团员',

                },
                {
                    value: 15,
                    name:'群众',
                },
                {
                    value: 10,
                    name:'党员',
                },
                {
                    value: 100,
                    name: '',
                    label: {
                       show: false
                   },
                   labelLine: {
                       show: false
                   },
                    itemStyle: {
                       normal: {
                            borderWidth: 0,
                            shadowBlur: 0,
                            borderColor:'transparent',
                            shadowColor: 'transparent'
                       }
                   },
                }
            ]
        },

    ]
};