var data = {
 
        area: ['新荣区', '平城区', '云冈区', '云州区', '阳高县', '天镇县', '广灵县', '浑源县', '左云县'],
        legend: ['因病', '因残', '因学', '因灾', '缺土地', '缺水', '缺技术', '缺资金', '交通条件落后', '自身发展动力不足', '其他原因'],
        data: [
            [1320, 1302, 901, 634, 1390, 1330, 1320, 1000, 500],
            [320, 302, 301, 334, 390, 330, 320, 100, 50],
            [320, 302, 301, 334, 390, 330, 320, 100, 50],
            [320, 302, 301, 334, 390, 330, 320, 100, 50],
            [320, 302, 301, 334, 390, 330, 320, 100, 50],
            [320, 302, 301, 334, 390, 330, 320, 100, 50],
            [320, 302, 301, 334, 390, 330, 320, 100, 50],
            [320, 302, 301, 334, 390, 330, 320, 100, 50],
            [320, 302, 301, 334, 390, 330, 320, 100, 50],
            [320, 302, 301, 334, 390, 330, 320, 100, 50],
            [320, 302, 301, 334, 390, 330, 320, 100, 50],
        ]
    

}
var colors = ['#4C98FB', '#83CCE7', '#26C7C8', '#73DEBD', '#26C978', '#8CDF6C', '#FBD657', '#F56679', '#E07BCE', '#9D50E0', '#634FDA']
var option = {
    title: {
        text: '大同市致贫原因分析',
        left: 19,
        top: 15,
        textStyle: {
            color: '#fff'
        }
    },
    color: colors,
    legend: {
        top: 10,
        left: 200,
        itemWidth: 10,
        itemHeight: 10,
        // padding: [5, 10],
        textStyle: {
            fontSize: 14,
            color: '#96A4F4',
            padding: [3, 0, 0, 0]
        },
        data: data.legend
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '13%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            color: '#96A4F4'
        },
        axisLine: {
            lineStyle: {
                color: '#96A4F4'
            },
            width: 5
        },
        axisTick: {
            show: false,
        },
        data: data.area
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: '#96A4F4'
        },
        axisLine: {
            lineStyle: {
                color: '#96A4F4'
            },
            width: 5
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(150, 164, 244, 0.3)'
            }
        },
    },
    series: [

    ]
};
for (var i = 0; i < data.legend.length; i++) {
    option.series.push({
        name: data.legend[i],
        type: 'bar',
        stack: '总量',
        barWidth: '45%',
        label: {
            show: false,
            position: 'insideRight'
        },
        data: data.data[i]
    })
}
myChart.setOption(option);