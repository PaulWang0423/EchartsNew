var giftImageUrl = "data:image/png;base64,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";
option = {
    backgroundColor: '#031845',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c}人 ({d}%)",

    },
    graphic: {
        elements: [{
            type: 'image',
            style: {
                image: giftImageUrl,
                width: 200,
                height: 200
            },
            left: 'center',
            top: 'center'
        }]
    },
    legend: {

        orient: 'horizontal',
        icon: 'circle',
        bottom: 20,
        x: 'center',
        data: ['管理人员', '访客', '施工人员'],
        textStyle: {
            color: '#fff'
        }
    },
    series: [{
            name: '人员类型',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['38%', '45%'],
            color: ['#006495', '#1D5F84', '#255C6D', '#3C5C67', '#40486C', '#3F3C73', '#403D84', '#1F3A8D', '#0B3B77'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                },

            },
            tooltip: {
                show: false,
            },
        },
        {
            name: '人员类型',
            type: 'pie',
            radius: ['43%', '55%'],
            color: [ '#45F0EA','#0A8CFF','#9B04F9'],
            labelLine: {
                normal: {
                    show: true,
                    length: 20,
                    length2:40,
                    lineStyle: {
                        width: 2
                    }
                }
            },
            label: {
                normal: {
                    formatter: '{a|{a}}\n{hr|}\n{d|{d}%}',
                    rich: {
                          a: {
                            fontSize: 16,
                            align: 'left',
                        },
                        hr: {
                            width: '100%',
                            borderWidth: 1,
                            height: 0
                        },
                        d: {
                            fontSize: 16,
                            align: 'right',
                            padding: 4
                        }
                    }
                }
            },
            data: [{
                    value: 5,
                    name: '管理人员'
                },
                {
                    value: 18,
                    name: '访客'
                },
                {
                    value: 36,
                    name: '施工人员'
                },
            ]
        }
    ]
};