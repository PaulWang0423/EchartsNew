var colorArr = ['#218de0', '#01cbb3', '#85e647', '#5d5cda', '#05c5b0', '#c29927'];
var colorAlpha = [
    'rgba(60,170,211,0.05)',
    'rgba(1,203,179,0.05)',
    'rgba(133,230,71,0.05)',
    'rgba(93,92,218,0.05)',
    'rgba(5,197,176,0.05)',
    'rgba(194,153,39,0.05)',
];

option = {
    backgroundColor: '#020410',
    grid: {
        left: -100,
        top: 50,
        bottom: 10,
        right: 10,
        containLabel: true,
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}贡献case数: {c} ({d}%)',
    },
    // polar: {},
    // angleAxis: {
    //     interval: 1,
    //     type: 'category',
    //     data: [],
    //     z: 10,
    //     axisLine: {
    //         show: false,
    //         lineStyle: {
    //             color: '#0B4A6B',
    //             width: 1,
    //             type: 'solid',
    //         },
    //     },
    //     axisLabel: {
    //         interval: 0,
    //         show: true,
    //         color: '#0B4A6B',
    //         margin: 8,
    //         fontSize: 16,
    //     },
    // },
    // radiusAxis: {
    //     min: 20,
    //     max: 120,
    //     interval: 20,
    //     axisLine: {
    //         show: false,
    //         lineStyle: {
    //             color: '#0B3E5E',
    //             width: 1,
    //             type: 'solid',
    //         },
    //     },
    //     axisLabel: {
    //         formatter: '{value} %',
    //         show: false,
    //         padding: [0, 0, 20, 0],
    //         color: '#0B3E5E',
    //         fontSize: 16,
    //     },
    //     splitLine: {
    //         show: 'false',
    //         lineStyle: {
    //             color: '#07385e',
    //             width: 2,
    //             type: 'dashed',
    //         },
    //     },
    // },
    // calculable: true,
    series: [
        {
            stack: 'a',
            type: 'pie',
            radius: '80%',
            roseType: 'radius',
            zlevel: 10,
            startAngle: 100,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{b}',
                    textStyle: {
                        fontSize: 10,
                    },
                },
            },
            data: [
                {
                    value: 45,
                    name: 'SI',
                    itemStyle: {
                        borderColor: colorArr[0],
                        borderWidth: 2,
                        shadowBlur: 20,
                        shadowColor: '#41a8f8',
                        shadowOffsetx: 25,
                        shadowOffsety: 20,
                        color: colorAlpha[0],
                    },
                },
                {
                    value: 35,
                    name: 'RQ',
                    itemStyle: {
                        borderColor: colorArr[2],
                        borderWidth: 2,
                        shadowBlur: 20,
                        shadowColor: colorArr[2],
                        shadowOffsetx: 25,
                        shadowOffsety: 20,
                        color: colorAlpha[2],
                    },
                },
                {
                    value: 25,
                    name: 'CI',
                    itemStyle: {
                        borderColor: colorArr[5],
                        borderWidth: 2,
                        shadowBlur: 20,
                        shadowColor: colorArr[5],
                        shadowOffsetx: 25,
                        shadowOffsety: 20,
                        color: colorAlpha[4],
                    },
                },
                {
                    value: 20,
                    name: 'HW',
                    itemStyle: {
                        borderColor: colorArr[1],
                        borderWidth: 2,
                        shadowBlur: 20,
                        shadowColor: colorArr[1],
                        shadowOffsetx: 25,
                        shadowOffsety: 20,
                        color: colorAlpha[1],
                    },
                },

                {
                    value: 15,
                    name: 'CD',
                    itemStyle: {
                        borderColor: colorArr[3],
                        borderWidth: 2,
                        shadowBlur: 20,
                        shadowColor: colorArr[3],
                        shadowOffsetx: 25,
                        shadowOffsety: 20,
                        color: colorAlpha[3],
                    },
                },
            ],
        },
    ],
};
// let len = 0;
// setInterval(() => {
//     if (len === 5) {
//         len = 0;
//     }
//     myChart.dispatchAction({
//         type: 'showTip',
//         seriesIndex: 0,
//         dataIndex: len,
//     });
//     len++;
// }, 2000);
