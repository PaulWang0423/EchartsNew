var imgUrl =
    'data:image/png;base64,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';
option = {
    backgroundColor: '#131D25',
    color: ['#00d2ff', '#22e5d1', '#f4d64e', '#0072ff'],
    title: {
        text: '{a|' + 2600 + '}{b|' + '万元' + '}\n{c|' + '总收益' + '}',
        x: '28%',
        y: 'center',
        textStyle: {
            rich: {
                a: {
                    fontSize: 30,
                    color: '#ffffff'
                },
                b: {
                    fontSize: 12,
                    color: '#ffffff',
                    padding: [0, 0, 0, 4],
                },
                c: {
                    fontSize: 16,
                    color: '#ffffff',
                    padding: [7, 0],
                },
            },
        },
    },
    graphic: {
        elements: [
            {
                type: 'image',
                z: 3,
                style: {
                    image: imgUrl,
                    width: 200,
                    height: 200,
                },
                left: '23%',
                top: 'center',
            },
        ],
    },
    series: [
        {
            name: '',
            type: 'pie',
            center: ['32%', '50%'],
            radius: ['50%', '60%'],
            label: {
                show: false,
            },
            data: [
                {
                    value: 55.91,
                },
                {
                    value: 29.46,
                },
                {
                    value: 12.77,
                },
                {
                    value: 5.8,
                },
            ],
        },
        {
            name: '',
            center: ['32%', '50%'],
            radius: ['56%', '60%'],
            type: 'pie',
            itemStyle: {
                normal: {
                    color: 'rgba(250,250,250,0.5)',
                },
            },
            label: {
                show: false,
            },
            data: [
                {
                    value: 0,
                },
            ],
        },
    ],
};
