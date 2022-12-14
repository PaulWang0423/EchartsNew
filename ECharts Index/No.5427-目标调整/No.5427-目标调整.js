option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['1月调整前', '1月调整后', '2月调整前', '2月调整后', '3月调整前', '3月调整后']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    dataZoom: [{
        type: 'inside'
    }, {
        type: 'slider'
    }],
    xAxis: [{
        type: 'category',
        data: ['1041', '1042', '1043', '1044', '1045', '1046', '1047', '1048', '1049', '1050', '1051', '1052', '1053', '1054', '1055', '1056', '1057', '1058', '1059', '1060']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
            name: '1月调整前',
            type: 'bar',
            stack: '广告',
            data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '2月调整前',
            type: 'bar',
            stack: '广告',
            data: [220, 182, 191, 234, 290, 330, 310, 120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '3月调整前',
            type: 'bar',
            stack: '广告',
            data: [150, 232, 201, 154, 190, 330, 410, 120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '1月调整后',
            type: 'bar',
            stack: '搜索引擎',
            data: [562, 518, 964, 526, 579, 500, 570, 120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '2月调整后',
            type: 'bar',
            stack: '搜索引擎',
            data: [620, 332, 301, 334, 590, 530, 520, 120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '3月调整后',
            type: 'bar',
            stack: '搜索引擎',
            data: [120, 132, 101, 134, 290, 230, 220, 120, 132, 101, 134, 90, 230, 210]
        }
    ]
};