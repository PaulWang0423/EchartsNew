var giftImageUrl = "data:image/png;base64,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";
option = {
    backgroundColor: '#031845',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    graphic: {
        elements: [{
            type: 'image',
            style: {
                image: giftImageUrl,
                width: 100,
                height: 100
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
        data: ['自理型养老机构', '护理型养老机构', '综合型养老机构'],
        textStyle: {
            color: '#fff'
        }
    },
    series: [{
            name: '养老机构类型',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['32%', '45%'],
            color: ['#4AEAB0', '#1287EA', '#F5D838'],
            label: {
                normal: {
                    show: false,
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
            data: [{
                    value: 100,
                    name: '自理型养老机构'
                },
                {
                    value: 100,
                    name: '护理型养老机构'
                },
                {
                    value: 100,
                    name: '综合型养老机构'
                }
            ]
        },
        {
            name: '养老机构类型',
            type: 'pie',
            radius: ['45%', '50%'],
            color: ['#184D6C', '#165784', '#416663'],
            labelLine: {
                normal: {
                    show: false,
                    length: 20,
                    length2: 20,
                    lineStyle: {
                        width: 2
                    }
                }
            },
            label: {
                normal: {
                    position: 'inner'
                }
            },

            data: [{
                    value: 100,
                    name: ''
                },
                {
                    value: 100,
                    name: ''
                },
                {
                    value: 100,
                    name: ''
                }
            ]
        }
    ]
};