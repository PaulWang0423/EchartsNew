option = {
    legend: {
        data: ['A门店', 'B门店']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value',
        splitLine: {show: false},
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: { show:false}
    },
    yAxis: {
        type: 'category',
        data: ['上海'],
        splitLine: {show: false},
        axisTick: { show: false },
        axisLine: { show: false },
         axisLabel: { show:false}
    },
    series: [
        {
            name: 'A门店',
            type: 'bar',
            stack: '总量',
            barWidth: 30,
            itemStyle:{
                normal: {
                    color: '#06d3cd',
                    barBorderRadius: [20, 0, 30, 20],
                    shadowOffsetX: 20,
                }
            },
            // label: {
            //     normal: {
            //         show: true,
            //         position: 'insideRight'
            //     }
            // },
            z:  1,
            data: [ 302, 301]
        },
        {
            name: 'B门店',
            type: 'bar',
            stack: '总量',
            itemStyle:{
                normal: {
                    color: '#ebe806',
                    barBorderRadius: [30, 20, 20, 0],
                    shadowOffsetX: -1,
                }
            },
            z: 2,
            data: [ 230, 210]
        }
    ]
};