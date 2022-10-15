app.title = '各城市每个月的雾霾严重程度'
var hours = ['一月', '二月', '三月', '四月', '五月', '六月', '七月',
        '八月', '九月', '十月','十一月','十二月'];
var days = ['北京', '成都', '广州',
        '上海', '沈阳'];

var data =[
    [0, 0, 123],
    [0, 1, 103],
    [0, 2, 96],
    [0, 3, 73],
    [0, 4, 67],
    [0, 5, 65],
    [0, 6, 69],
    [0, 7, 52],
    [0, 8, 65],
    [0, 9, 101],
    [0, 10, 106],
    [0, 11, 121],
    [1, 0, 140],
    [1, 1, 99],
    [1, 2, 87],
    [1, 3, 67],
    [1, 4, 63],
    [1, 5, 53],
    [1, 6, 54],
    [1, 7, 54],
    [1, 8, 55],
    [1, 9, 77],
    [1, 10, 80],
    [1, 11, 116],
    [2, 0, 65],
    [2, 1, 52],
    [2, 2, 52],
    [2, 3, 47],
    [2, 4, 35],
    [2, 5, 31],
    [2, 6, 24],
    [2, 7, 33],
    [2, 8, 36],
    [2, 9, 47],
    [2, 10, 47],
    [2, 11, 55],
    [3, 0, 77],
    [3, 1, 59],
    [3, 2, 55],
    [3, 3, 54],
    [3, 4, 47],
    [3, 5, 38],
    [3, 6, 35],
    [3, 7, 29],
    [3, 8, 30],
    [3, 9, 35],
    [3, 10, 60],
    [3, 11, 85],
    [4, 0, 95],
    [4, 1, 81],
    [4, 2, 75],
    [4, 3, 59],
    [4, 4, 50],
    [4, 5, 45],
    [4, 6, 49],
    [4, 7, 49],
    [4, 8, 47],
    [4, 9, 81],
    [4, 10, 104],
    [4, 11, 101]
];

option = {
    tooltip: {
        position: 'top',
        formatter: function(params) {
            return params.name+'PM2.5: '+params.value[1]
        }
    },
     toolbox: {
　　show: true,
　　feature: {
　　　　saveAsImage: {
　　　　show:true,
　　　　excludeComponents :['toolbox'],
　　　　pixelRatio: 5
　　　　}
　　}
},
    title:[],
    singleAxis: [],
    series: []
};
//这里应该是遍历的意思，idx是遍历每一根轴的标志
echarts.util.each(days, function (day, idx) {
    option.title.push({
        textBaseline: 'middle',
        top: (idx + 1) * 100 / 5-9 + '%',//每个标题的位置
        text: day
    });
    option.singleAxis.push({
        left: 150,
        type: 'category',
        boundaryGap: false,
        data: hours,
        top: (idx * 100 / 5 + 10) + '%',
        height: (100 /5 -19) + '%',//5是指有五根轴，这里计算的是每根轴离顶端的距离
        left:'14%',
        axisLabel: {
            interval:3,
            margin:30
        }
    });
    option.series.push({
        singleAxisIndex: idx,
        coordinateSystem: 'singleAxis',
        type: 'scatter',
        label: {
                normal: {
                    show: true,
                    position: 'top'
                }},
        data: [],
        symbolSize: function (dataItem) {
            return dataItem[1] * 0.5;
        }
    });
});

echarts.util.each(data, function (dataItem) {
    option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
});