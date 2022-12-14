option = {
    title: {
        text: '双数值轴折线',
        subtext: '纯属虚构'
    },
    tooltip: {
        formatter: function (params) {
            return params.seriesName + ' : [ '
                + params.value[0] + ', '
                + params.value[1] + ' ]';
        }
    },
    legend: {
        data: ['数据1', '数据2']
    },
    calculable: true,
    xAxis: [
        {
            type: 'time',
            axisLabel: {
                interval: '0'
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#dc143c'
                }
            }
        }
    ],
    series: [
        {
            name: '数据1',
            type: 'line',
            data: [
                ['2018-08-30 00:00:00', ''], ['2018-09-01 01:00:00', 2], ['2018-09-01 02:00:00', 3], ['2018-09-01 03:00:00', 6], ['2018-09-02 00:00:00', 12], ['2018-09-02 01:00:00', 9], ['2018-09-02 03:00:00', 6], ['2018-09-02 04:00:00', 4], ['2018-09-02 05:00:00', 9]
            ],

        },
        {
            name: '数据2',
            type: 'line',
            data: [
                ['2018-09-01 00:30:00', ''], ['2018-09-01 01:30:00', ''], ['2018-09-01 02:00:00', ''], ['2018-09-01 03:30:00', 6], ['2018-09-02 00:30:00', 12], ['2018-09-02 01:00:00', 9], ['2018-09-02 03:30:00', 6], ['2018-09-02 05:00:00', 4], ['2018-09-02 08:00:00', 9]
            ]
        }
    ]
};
