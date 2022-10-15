option = {
    color: ['#79addd', '#df7f7f'],
    xAxis: {
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisLabel: {
            interval: 0,
            rotate: 40
        }
    },
    toolbox: {
    feature: {
            saveAsImage: {}
    }
        },
    grid: {
        left: 80,
        right: 20
    },
    yAxis: {
        max: 8000000,
        min: 5000000
    },
    series: [{
        type: 'k',
        itemStyle: {
            color: '#006633',
            color0: '#a78c7b',
            borderColor: '#006633',
            borderColor0: '#a78c7b'
        },
        data: [
            [6000000, 6476294, 6000000, 6476294],
            [6060000, 6839449, 6060000, 6839449],
            [5880000, 5689365, 5880000, 5689365],
            [6240000, 6698981, 6240000, 6698981],
            [6240000, 5350212, 6240000, 5350212],
            [6480000, 7403152, 6480000, 7403152],
            [6120000, 6780773, 6120000, 6780773],
            [5700000, 5690210, 5700000, 5690210],
            [6240000, 7179888, 6240000, 7179888],
            [6180000, 7114102, 6180000, 7114102],
            [6060000, 5134998, 6060000, 5134998],
            [6060000, 5834960, 6060000, 5834960]
        ]
    }]
};