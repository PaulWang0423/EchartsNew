// 指定图表的配置项和数据
var data1 = [20, 30, 20, 30, 20, 30, 20, 30, 20, 30];
var data2 = [9, 30, 9, 60, 70, 20, 59, 20, 49, 20];
var data3 = [20, 30, 20, 30, 20, 30, 20, 30, 20, 30];
var data4 = [9, 30, 9, 60, 70, 20, 59, 20, 49, 20];
var data5 = [9, 30, 9, 60, 70, 20, 59, 20, 49, 20];
var datacity = ['济南市', '青岛市', '淄博市', '枣庄', '东营', '烟台市', '潍坊市', '济宁市', '威海市', '泰安市'];
var option = {
    color: ['#388BFF', '#05C3FA', '#F6931C', '#FFD52E'],
    tooltip: {
        trigger: 'axis',
    },
    legend: {

        top: '8%',
        data: ['产生', '综合利用', '贮存', '丢弃','处置'],
    },
    grid: { //图表的位置
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    yAxis: [{
        type: 'value',
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value} '
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed'
            }
        },
        show: true

    }],
    xAxis: [{
        type: 'category',
        axisLabel: {
            interval: 0,
            show: true,
            splitNumber: 15,
            textStyle: {
                fontSize: 10,
                color: '#000'
            },

        },
        data: datacity,
    }],
    series: [{
            name: '产生',
            type: 'bar',
            stack: 'sum',
            barWidth: '20px',
            data: data1

        },
        {
            name: '综合利用',
            type: 'bar',
            barWidth: '20px',
            stack: 'sum1',
            data: data2,

        },
        {
            name: '贮存',
            type: 'bar',
            color: '#F6931C',
            stack: 'sum1',
            barWidth: '20px',
            data: data3

        },
        {
            name: '丢弃',
            type: 'bar',
            color: '#FFD52E',
            stack: 'sum1',
            barWidth: '20px',
            data: data4

        },
        {
            name: '处置',
            type: 'bar',
            color: '#00FFFF',
            stack: 'sum1',
            barWidth: '20px',
            data: data5

        },
    ]
};