var data = [{ name: '任务完成', value: 123, sum: 234 }];
var img =
    'data:image/png;base64,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';
option = {
    backgroundColor: '#000',
    graphic: [
        {
            type: 'image',
            left: 'center',
            top: 'center',
            z: 100,
            style: {
                image: img,
                width: 537,
                height: 312,
            },
        },
    ],
    series: [
        {
            name: 'Pressure',
            type: 'gauge',
            radius: 537,
            center: ['50%', '70%'],
            startAngle: 180,
            endAngle: 0,
            max: data[0].sum,
            detail: {
                show: 0,
                formatter: '{value}',
            },
            pointer: {
                length: 220,
                width: 8,
            },
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#FFC200', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#FF4200', // 100% 处的颜色
                        },
                    ],
                },
            },
            title: {
                offsetCenter: [0, '50'],
                color: '#fff',
                fontSize: 24,
            },
            axisLine: {
                show: 0,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            data: data,
            z: 9999,
        },
    ],
};
