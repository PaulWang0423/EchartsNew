var xData = ['递铺街道', '昌硕街道', '孝源街道', '灵峰街道', '章村镇', '报福镇', '杭垓镇'];
var data1 = [10, 50, 100, 35, 55, 30, 20];
var data2 = [5, 5, 5, 5, 5, 5, 5];javascript:;
var data3 = [];
for (let i = 0; i < data1.length; i++) {
    data3.push(data1[i] + data2[i]);
}
var option = {
    backgroundColor: '#030446',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },

        formatter: function (parms) {
            var str =
                '名称：' +
                parms[0].axisValue +
                '</br>' +
                parms[0].marker +
                '结案量：' +
                parms[0].value +
                '</br>' +
                parms[1].marker +
                '未结案量：' +
                parms[1].value;
            return str;
        },
    },
    textStyle: {
        color: '#C9C9C9',
    },
    color: ['#7BA9FA', '#7BA9FA', '#DE9FB1', '#DE9FB1'],
    grid: {
        containLabel: true,
        left: '10%',
        top: '20%',
        bottom: '10%',
        right: '10%',
    },
    xAxis: {
        type: 'category',
        data: xData,
        axisLine: {
            lineStyle: {
                color: '#B5B5B5',
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            margin: 20, //刻度标签与轴线之间的距离。
            textStyle: {
                fontFamily: 'Microsoft YaHei',
                color: '#C9C9C9',
            },
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#B5B5B5',
            },
        },
        splitLine: {
            lineStyle: {
                // 使用深浅的间隔色
                color: ['#B5B5B5'],
                type: 'dashed',
                opacity: 0.5,
            },
        },
        axisLabel: {},
    },
    series: [
        {
            data: data1,
            stack: 'zs',
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: 60,
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#5EA1FF',
                        },
                        {
                            offset: 1,
                            color: '#90BEFF',
                        },
                    ],
                },
            },
        },
        {
            data: data2,
            stack: 'zs',
            type: 'bar',
            barMaxWidth: 'auto',
            barWidth: 60,
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#FF6772',
                        },
                        {
                            offset: 1,
                            color: '#FFABAC',
                        },
                    ],
                },
            },
        },
        {
            data: [1, 1, 1, 1, 1, 1, 1],
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [60, 15],
            zlevel: 2,
        },
        {
            data: data1,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [60, 12],
            zlevel: 2,
        },
        {
            data: data1,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [60, 12],
            zlevel: 2,
        },
        {
            data: data3,
            type: 'pictorialBar',
            barMaxWidth: '20',
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [60, 12],
            zlevel: 2,
        },
    ],
};

var current = -1;
var dataLen1 = option.series[0].data.length;
setInterval(() => {
    // 取消之前高亮的图形
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: current,
    });
    current = (current + 1) % dataLen1;
    // 高亮当前图形
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: current,
    });
    // 显示 tooltip
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: current,
    });
}, 2000);
