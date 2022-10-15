var giftImageUrl = "data:image/png;base64,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";
option = {
    backgroundColor: '#031845',
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {d}% <br/> {c}"
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
        textStyle: {
            color: '#fff'
        },
        data: ['五保', '低保', '残疾', '失独', '重点优抚', '突出贡献']
    },
    series: [{
        type: 'pie',
        radius: ['40%', '50%'],
        center: ['50%', '50%'],
        color: ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'],
        data: [{
                value: 335,
                name: '五保'
            },
            {
                value: 310,
                name: '低保'
            },
            {
                value: 234,
                name: '残疾'
            },
            {
                value: 235,
                name: '失独'
            },
            {
                value: 254,
                name: '重点优抚'
            },
            {
                value: 174,
                name: '突出贡献'
            }
        ],
        labelLine: {
            normal: {
                show: true,
                length: 20,
                length2: 20,
                lineStyle: {
                    color: '#12EABE',
                    width: 2
                }
            }
        },
        label: {
            normal: {
                formatter: '{c|{c}}\n{hr|}\n{d|{d}%}',
                rich: {
                    b: {
                        fontSize: 20,
                        color: '#12EABE',
                        align: 'left',
                        padding: 4
                    },
                    hr: {
                        borderColor: '#12EABE',
                        width: '100%',
                        borderWidth: 2,
                        height: 0
                    },
                    d: {
                        fontSize: 20,
                        color: '#fff',
                        align: 'left',
                        padding: 4
                    },
                    c: {
                        fontSize: 20,
                        color: '#fff',
                        align: 'left',
                        padding: 4
                    }
                }
            }
        }
    }]
};