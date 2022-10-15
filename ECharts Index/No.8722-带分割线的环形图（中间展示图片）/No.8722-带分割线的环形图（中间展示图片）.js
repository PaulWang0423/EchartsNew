var scale = 0.5;
var giftImageUrl = "data:image/png;base64,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";
var dataList = [{
        'name': '1分',
        'value': 100
    },
    {
        'name': '2分',
        'value': 200
    },
    {
        'name': '3分',
        'value': 200
    },
    {
        'name': '4分',
        'value': 100
    },
    {
        'name': '5分',
        'value': 100
    }
];
var data = [];
for (var i = 0; i < dataList.length; i++) {
    data.push({
        value: dataList[i].value,
        name: dataList[i].name,
        itemStyle: {
            color: '#00FFBA'
        },
        label: {
            normal: {
                formatter: (params) => {
                    return '{name| ' + params.name + '}\n' + '{value|' + params.percent.toFixed(2) + '}' + '{unit|%}'
                },
                rich: {
                    name: {
                        fontSize: 24 * scale,
                        lineHeight: 48 * scale,
                        color: '#fff',
                        align: 'right'
                    },
                    value: {
                        fontSize: 36 * scale,
                        lineHeight: 36 * scale,
                        color: '#00FFBA',
                        align: 'right'
                    },
                    unit: {
                        fontSize: 24 * scale,
                        lineHeight: 24 * scale,
                        color: '#00FFBA',
                        padding: [0, 0, 5, 0],
                        align: 'right'
                    }

                }
            }
        },
        labelLine: {
            normal: {
                // length: 55 * scale,
                // length2: 0,
                lineStyle: {
                    color: '#999999'
                }
            }
        },
    }, {
        value: 1,
        name: '',
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                color: 'rgba(0, 0, 0, 0)',
            }
        }
    });
}
var seriesObj = [{
    name: '',
    type: 'pie',
    radius: ['100', '120'],
    data: data
}];
option = {
    backgroundColor: '#131618',
    tooltip: {
        show: false
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
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
    series: seriesObj
}