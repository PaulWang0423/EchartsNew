option = {
    series: [
        {
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            pointer: {
                show: false,
            },
            progress: {
                show: true,
                overlap: false,
                roundCap: true,
                clip: false,
                itemStyle: {
                    borderWidth: 1,
                    borderColor: '#464646',
                },
            },
            axisLine: {
                lineStyle: {
                    width: 20,
                },
            },
            splitLine: {
                show: false,
                distance: 0,
                length: 10,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
                distance: 50,
            },
            data: [
                {
                    value: 60,
                    name: '完成率',
                    title: {
                        offsetCenter: ['0%', '30%'],
                    },
                    detail: {
                        valueAnimation: true,
                        offsetCenter: ['0%', '40%'],
                    },
                },
            ],
            title: {
                fontSize: 14,
            },
            detail: {
                width: 50,
                height: 14,
                fontSize: 14,
                color: 'auto',
                borderColor: 'auto',
                borderRadius: 20,
                borderWidth: 1,
                formatter: '{value}%',
            },
        },
    ],
};
