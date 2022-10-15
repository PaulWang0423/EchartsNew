let barData = ["13", "25", "38"];
let lineData =  ["40", "28", "26"];
let xData = ["第一季度", "第二季度", "第三季度"];
option = {
    backgroundColor:"#061740",
    grid: {
        x: 0,
        y: 0,
        x2: 0,
        y2: 0,
        top: '15%',
        left: '3%',
        right: '3%',
        bottom: '20%',
        containLabel: true,
    },
    legend: {
        data: ["限上零售额总量", "限上零售额增速"],
        bottom: 'bottom',
        type: 'scroll',
        padding: [10, 0, 0, 0],
        textStyle: {
            color: 'rgba(36, 173, 254, 1)',
            fontSize: "1rem",
        },
        //图例标记的图形高度
        itemHeight: 5,
        //图例标记的图形宽度
        itemWidth: 10,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                show: false,
            },
            interval: 1,
            axisLabel: {
                color: 'rgba(36, 173, 254, 1)',
                fontSize: "1rem",
            },
            axisLine: {
                show: false
            },
            data: xData,
        }
    ],
    yAxis: [
        {
            type: 'value',
            splitNumber: 5,
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(36, 173, 254, 0.2)'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: 'rgba(36, 173, 254, 1)'
                },
                fontSize: "1rem",
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(36, 173, 254, 1)'
                }
            }
        },
        {
            type: 'value',
            splitNumber: 5,
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(36, 173, 254, 0.2)'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: 'rgba(36, 173, 254, 1)'
                },
                fontSize: "1rem",
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(36, 173, 254, 1)'
                }
            }
        }
    ],
    series: [
        {
            name: "限上零售额总量",
            type: 'bar',
            barWidth: '20%',
            data: barData,
            //背景色
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            },
            //柱体颜色
            itemStyle: {
                normal: {
                    //圆角
                    barBorderRadius: [30, 30, 0, 0],
                    //柱图高亮渐变色
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                            offset: 0,
                            color: '#77DDFF'
                        },
                            {
                                offset: 0.5,
                                color: '#00BBFF'
                            },
                            {
                                offset: 1,
                                color: '#009FCC'
                            }]
                    )
                }
            },
        },
        {
            type: 'line',
            stack: 'Total',
            name: "限上零售额增速",
            emphasis: {
                focus: 'series'
            },
            yAxisIndex: 1,
            data: lineData,
            itemStyle: {
                normal: {
                    color: '#FFBB00', //改变折线点的颜色
                    lineStyle: {
                        color: '#FFBB00', //改变折线颜色
                        type: 'dashed'
                    }
                }
            },
            //线条不显示点
            symbol: 'none',
        },
    ]
};
