// 克隆别人的柱图/折线，修改成label显示文字自定义模式(2020/02/14)
var allNum=196;//总数量
option = {
    backgroundColor: '#fff',
    grid: {
        top: '15%',
        right: '10%',
        left: '10%',
        bottom: '12%'
    },
    xAxis: [{
        type: 'category',
        color: '#59588D',
        data: ['2019Q1', '2019Q2', '2019Q3', '2019Q4'],
        axisLabel: {
            margin: 20,
            color: '#999',
            textStyle: {
                fontSize: 18
            },
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(107,107,107,0.37)',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        min: 0,
        max: 100,
        axisLabel: {
            formatter: '{value}%',
            color: '#999',
            textStyle: {
                fontSize: 18
            },
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(107,107,107,0.37)',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(131,101,101,0.2)',
                type: 'dashed',
            }
        }
    }],
    series: [{
        type: 'bar',
        data: [40, 80, 20, 56],
        barWidth: '50px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FF9A22' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#FFD56E' // 100% 处的颜色
                }], false),
                barBorderRadius: [30, 30, 0, 0],
            }
        },
        label: {
            normal: {
                show: true,
                fontSize: 18,
                align:'left',
                fontWeight: 'bold',
                color: '#00aeff',
                position: 'top',
                offset:[-50,0],
                lineHeight:20,
                formatter: function(params){
                    // console.log(params);
                    return '数量：'+params.value+'\n占比：'+(params.value*100/allNum).toFixed(1)+'%';
                }
            }
        }
    }
    // ,{
    //     data: [48, 95, 60, 56],
    //     type: 'line',
    //     smooth: true,
    //     name: '折线图',
    //     symbol: 'none',
    //     lineStyle: {
    //         color: '#3275FB',
    //         width: 4,
    //         shadowColor: 'rgba(0, 0, 0, 0.3)',//设置折线阴影
    //         shadowBlur: 15,
    //         shadowOffsetY: 20,
    //     }
    // }
]
};