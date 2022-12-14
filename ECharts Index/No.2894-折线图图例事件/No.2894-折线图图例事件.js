
var selected = {
    '最高气温': false,
    '最低气温': false
};
var test = [];
option = {
    title: {
        text: '未来一周气温变化',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['最高气温', '最低气温'],
        selected: selected
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        }
    },
    series: [
        {
            name: '最高气温',
            type: 'line',
            data: [10, 11, 13, 11, 12, 12, 9],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name: '最低气温',
            type: 'line',
            data: [1, -2, 2, 5, 3, 2, 0],
            markPoint: {
                data: [
                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'},
                    [{
                        symbol: 'none',
                        x: '90%',
                        yAxis: 'max'
                    }, {
                        symbol: 'circle',
                        label: {
                            position: 'start',
                            formatter: '最大值'
                        },
                        type: 'max',
                        name: '最高点'
                    }]
                ]
            }
        }
    ]
};

myChart.on('highlight', (params)=>{
    if (!test.includes(params['seriesName']) && params.excludeSeriesId && params.excludeSeriesId.length === 0) {
        myChart.dispatchAction({
            type: 'legendSelect',
            name: params['seriesName']
        })
    }
})

myChart.on('downplay', (params)=>{
    if (!test.includes(params['seriesName']) && params.excludeSeriesId && params.excludeSeriesId.length === 0) {
        console.log(test,params['seriesName']);
        if (!test[params['seriesName']]) {
            myChart.dispatchAction({
            type: 'legendUnSelect',
            name: params['seriesName']
        })
    }
    }
})
myChart.on('legendselectchanged', (params)=>{
    console.log(13);
    test[params['name']] = true;
    if (test.includes(params['name']) && !params['selected'][params['name']]) {
        test = test.filter((item)=>{return item != params['name'] })
    }
    if (!test.includes(params['name']) && params['selected'][params['name']]) {
        test.push(params['name'])
    }
})