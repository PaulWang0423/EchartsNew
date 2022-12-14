option = {
    backgroundColor: '#1b1b1b',
    tooltip: {
        formatter: "{a} <br/>{c} {b}"
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    series: [{
            name: '速度',
            type: 'gauge',
            min: 0,
            max: 100,
            splitNumber: 8,
            radius: '50%',
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    // color: [
                    //     [0.09, 'lime'],
                    //     [0.82, '#1e90ff'],
                    //     [1, '#ff4500']
                    // ],
                    width: 3,
                    // shadowColor: '#fff', //默认透明
                    // shadowBlur: 10
                }
            },
            axisLabel: { // 坐标轴小标记
                show:false,
                textStyle: { // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#fff',
                    // shadowColor: '#fff', //默认透明
                    // shadowBlur: 10
                }
            },
            axisTick: { // 坐标轴小标记
                length: 0, // 属性length控制线长
                lineStyle: { // 属性lineStyle控制线条样式
                    color: 'auto',
                    // shadowColor: '#fff', //默认透明
                    // shadowBlur: 10
                }
            },
            splitLine: { // 分隔线
                length: 15, // 属性length控制线长
                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                    width: 1,
                    color: '#fff',
                    // shadowColor: '#fff', //默认透明
                    // shadowBlur: 10
                }
            },
            pointer: { // 分隔线
                width: 3,
                // shadowColor: '#fff', //默认透明
                // shadowBlur: 5
            },
            title: {
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 20,
                    fontStyle: 'italic',
                    color: '#fff',
                    // shadowColor: '#fff', //默认透明
                    // shadowBlur: 10
                }
            },
            detail: {
                color: '#f00',
                // shadowColor: '#fff', //默认透明
                // shadowBlur: 5,
                offsetCenter: [0, '50%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#fff'
                }
            },
            data: [{
                value: 95,
            }]
        },



    ]
};

// setInterval(function() {
//     option.series[0].data[0].value = (Math.random() * 100).toFixed(0) - 0;
//     myChart.setOption(option);
// }, 2000)