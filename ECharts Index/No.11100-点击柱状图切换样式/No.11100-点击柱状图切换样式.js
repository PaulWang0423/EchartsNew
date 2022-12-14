highlightData = ['-', '-', '-', '-', '-', '-', '-'];

option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow',
        },
        formatter: function (param) {
            return param[0].seriesName + ': ' + param[0].value
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220],
            //该处为点击事件
            itemStyle: {
                normal: {
                    color: "#4ABACE"
                }
            }
        },
        {
            silent: true, // 不可交互
            animation: false,
            type: 'bar',
            barWidth: '60%',
            barGap: '-100%',
            data: highlightData,
            itemStyle: {
                color: '#FE8463'
            },
            z: 10
        }
    ]
};

myChart.on('click', function eConfig(param) {
    for (var i = 0; i < highlightData.length; ++i) {
        if (param.dataIndex === i) {
            highlightData[i] = param.value;
        }
        else {
            highlightData[i] = '-';
        }
    }

    myChart.setOption(option, true);
});