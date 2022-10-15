option = {
    title: {
        text: '某展会类别分布图',
        subtext: 'By sunweizy'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: "{a} <br/>{b} : {c}%"
    },
    legend: {
        data: ['2016年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        "axisLabel": {
            "interval": 0,
            formatter: '{value}%',
        }
    },
    yAxis: {
        type: 'category',
        data: ['康体健身与休闲娱乐',
            '酒店IT与安防设备',
            '酒店建筑',
            '酒店布草及纺织用品',
            '酒店家具',
            '酒店工程',
            '酒店设计',
            '葡萄酒与烈酒',
            '客房易耗品及电器',
            '桌面用品',
            '酒店与清洁',
        ]
    },
    series: [{
        name: '2016年占比',
        type: 'bar',
        data: [2.00, 3.00, 5.00, 5.50, 6.50, 6.50, 7.50, 8.50, 8.50, 9.50, 10.0]
    }]
};