option = {
    legend: {},
    dataset: {
        source: [
            ['province', 'h_tmp', 'l_tmp', 'aqi'],
            ['上海', 6, 0, 170],
            ['云南', 25, 8, 112],
            ['内蒙古', 0, -17, 59],
            ['北京', 2, -10, 63],
            ['台湾', 12, 8, 61],
            ['吉林', -4, -11, 46],
            ['四川', 17, 6, 121],
            ['天津', 10, 0, 117],
            ['宁夏', 5, -9, 37],
            ['安徽', 15, 5, 185],
            ['山东', -1, -11, 58],
            ['山西', 6, -8, 139],
            ['广东', 24, 17, 61],
            ['广西', 20, 12, 124],
            ['新疆', -5, -12, 109],
            ['江苏', 17, 4, 79],
            ['江西', 22, 11, 77],
            ['河北', 8, -4, 117],
            ['河南', 10, 1, 237],
            ['浙江', 23, 12, 40],
            ['海南', 25, 21, 17],
            ['湖北', 14, 5, 146],
            ['湖南', 12, 4, 71],
            ['澳门', 17, 15, 34],
            ['甘肃', 11, -10, 95],
            ['福建', 15, 11, 59],
            ['西藏', 12, -9, 29],
            ['贵州', 2, -2, 105],
            ['辽宁', 4, -8, 64],
            ['重庆', 19, 13, 69],
            ['陕西', 7, -3, 244],
            ['青海', 7, -4, 14],
            ['香港', 16, 12, 64],
            ['黑龙江', -12, -23, 56]
        ]
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false
    },
    yAxis: {},
    series: [{
        type: 'line',
        smooth: true,
        symbolSize: 1,
        symbol: 'circle',
        areaStyle: {
            opacity: "0.4"
        }
    }, {
        type: 'line',
        smooth: true,
        symbolSize: 1,
        symbol: 'circle',
        areaStyle: {
            opacity: "0.4"
        }
    }, {
        type: 'line',
        smooth: true,
        symbolSize: 1,
        symbol: 'circle',
        areaStyle: {
            opacity: "0.4"
        }
    }]
};