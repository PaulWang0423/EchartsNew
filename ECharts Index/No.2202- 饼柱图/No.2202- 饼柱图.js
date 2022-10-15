//  数据配置
const source = [
    ['出入口', '入场', '离场', '黑名单车辆'],
    ['东出入口', 338, 110, 40],
    ['北出入口', 416,145, 33], 
];
const colorArr = ['#49CCFFee', '#20D3ABee', '#FDD56Aee'];
const colorAlpha = ['#49CCFF88', '#20D3AB88', '#FDD56A88'];
const title = '合计';
const piedata = [{
        name: '入场',
        value: 1834,
        itemStyle: {
            normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: colorAlpha[0],
                shadowColor: colorArr[0],
                color:  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: colorArr[0],
                },
                {
                    offset: 1,
                    color: colorAlpha[0],
                },
            ])
            }
        }
    },
    {
        name: '离场',
        value: 325,
        itemStyle: {
            normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: colorAlpha[1],
                shadowColor: colorArr[1],
                color:  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: colorArr[1],
                },
                {
                    offset: 1,
                    color: colorAlpha[1],
                },
            ])
            }
        }
    },
    {
        name: '黑名单车辆',
        value: 123,
        itemStyle: {
            normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: colorAlpha[2],
                shadowColor: colorArr[2],
                color:  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: colorArr[2],
                },
                {
                    offset: 1,
                    color: colorAlpha[2],
                },
            ])
            }
        }
    }
];
myChart.resize({
    height: 320,
    width: 1112
})

// 图表配置

option = {
    // backgroundColor: '#fff',
    dataset: {
        source: source
    },
    grid: {
        left: 350,
        right: 440,
        top: 95,
        bottom: 70
    },
    title: [{
        text: title,
        subtext: '1350',
        left: '155',
        top: '150', 
        subtextStyle: { 
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: '#fff',
                    padding: [10, 0] 
            } , 
        textStyle: { 
                    fontSize: 18,
                    fontWeight: 'bolder',
                    color: '#fff',
                    padding: [10, 0] 
            } 
    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }, 
        padding:16, 
    },
    legend: {
        show: true,
        left: 293,
        top: 45,
        itemWidth: 12,
        itemHeight: 12,
        textStyle: {
            color:'#fff',
                    fontWeight: 'bolder',
        },
    }, 
    color: colorArr,
    yAxis: {
        type: 'category',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLabel:{
            color:'#fff',
                    fontWeight: 'bolder',
        },
    },
    xAxis: {
        type: 'value',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        splitNumber:3,
        axisLabel:{
            color:'#fff',
                    fontWeight: 'bolder',
        },
        splitLine:{
            lineStyle:{
                type:'dashed'
            }
        }
    },
    series: [{
            type: 'bar',
            name:source[0][1],
            barWidth:30,
            stack:true,
            encode: {
                y: 0,
                x: 1
            },
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    shadowBlur: 20,
                    borderColor: colorAlpha[0],
                    shadowColor: colorArr[0],
                    color:  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: colorArr[0],
                        },
                        {
                            offset: 1,
                            color: colorAlpha[0],
                        },
                    ])
                }
            },
            label: {
                normal: {
                    show: true, 
                    color:'#fff',
                    fontWeight: 'bolder',
                },
            },
        },{
            type: 'bar',
            name:source[0][2],
            barWidth:30,
            stack:true,
            encode: {
                y: 0,
                x: 2
            },
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    shadowBlur: 20,
                    borderColor: colorAlpha[1],
                    shadowColor: colorArr[1],
                    color:  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: colorArr[1],
                        },
                        {
                            offset: 1,
                            color: colorAlpha[1],
                        },
                    ])
                }
            },
            label: {
                normal: {
                    show: true, 
                    color:'#fff',
                    fontWeight: 'bolder',
                },
            },
        },{
            type: 'bar',
            name:source[0][3],
            barWidth:30,
            stack:true,
            encode: {
                y: 0,
                x: 3
            },
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    shadowBlur: 20,
                    borderColor: colorAlpha[2],
                    shadowColor: colorArr[2],
                    color:  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: colorArr[2],
                        },
                        {
                            offset: 1,
                            color: colorAlpha[2],
                        },
                    ])
                }
            },
            label: {
                normal: {
                    show: true, 
                    color:'#fff',
                    fontWeight: 'bolder',
                },
            },
        },
        { 
            type: 'pie',
            z: 100,
            radius: ['30%', '50%'],
            center: [180, '55%'],
            data: piedata, 
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}"
            },
            label: {
                show: true,
                fontSize: 12,
                formatter: "{b}\n{c}辆",
                    fontWeight: 'bolder',
                color:'#fff'
            },
        }
    ]
};