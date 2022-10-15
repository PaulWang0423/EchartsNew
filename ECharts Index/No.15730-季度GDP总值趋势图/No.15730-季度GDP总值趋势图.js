/**
 * author: bingo
 * email: guobin@ebigdata.org
 * date: 2016-12-21
 * version: V1.0
 * description: 季度GDP总值趋势图，针对需求x轴最右边显示最新的季度，并且显示每年的这个季度，同时要显示和隐藏数据。主要解决了两个问题，第一是echarts默认显示x轴第一个数据，通过设置inverse: true让数据和x轴的反转来实现，第二是数据的显示和隐藏，通过labelTag的值来实现
 */
var labelTag = true;
var resultData = {
    "times": ["2016Q2", "2016Q1", "2015Q4", "2015Q3", "2015Q2", "2015Q1", "2014Q4", "2014Q3", "2014Q2", "2014Q1", "2013Q4", "2013Q3", "2013Q2", "2013Q1", "2012Q4", "2012Q3", "2012Q2", "2012Q1", "2011Q4", "2011Q3"],
    "totalGDPs": ["1742.0", "1434.7", "2078.5", "1859.8", "1882.6", "1459.6", "1578.7", "1780.9", "2049.5", "1689.6", "1935.5", "1700.1", "1941.1", "1581.9", "1800.8", "1596.4", "1779.6", "1430.0", "1593.8", "1458.4"],
    "increaseGDPs": ["-7.5", "-1.7", "31.7", "4.4", "-8.1", "-13.6", "-18.4", "4.8", "5.6", "6.8", "7.5", "6.5", "9.1", "10.6", "13.0", "9.5", "11.2", "13.2", "16.0", "17.4"]
};

function label() {
    if (labelTag) {
        return {
            normal: {
                show: true,
                position: 'top'
            }
        }
    } else {
        return {
            normal: {
                show: false
            }
        }
    }

}

function label2() {
    if (labelTag) {
        return {
            normal: {
                show: true,
                formatter: function(param) {
                    return param.value + '%'
                },
                position: 'top'
            }
        }
    } else {
        return {
            normal: {
                show: false
            }
        }
    }

}

function xAxis() {
    return [{
        type: 'category',
        axisLabel: {
            interval: 3
        },

        inverse: true,
        data: resultData.times
    }]
}
option = {
    title: [{
        text: "季度GDP总值趋势图",
        left: 'center',
        textStyle: {
            color: "#454545",
            fontSize: 16,
            fontWeight: 'bold'
        }
    }, {
        text: '单位：亿元',
        right: 10,
        textStyle: {
            color: "#006486",
            fontSize: 12,
            fontWeight: 'normal'
        }
    }],
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            console.log(params)
            return params[0].name + '<br/>' + params[0].seriesName + ': ' + params[0].value + '<br/>' + params[1].seriesName + ': ' + params[1].value + '%'
        }
    },
    legend: {
        data: ['GDP总值', 'GDP增长率'],
        selectedMode: true,
        bottom: 'bottom'
    },
    xAxis: xAxis(),
    yAxis: [{
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color: '#006486',
                width: 1,
                type: 'dashed'
            }
        },
        min: 0,
        interval: 500,
        axisLabel: {
            formatter: '{value}'
        }
    }, {
        type: 'value',
        splitLine: {
            show: false,
            lineStyle: {
                color: '#006486',
                width: 1,
                type: 'dashed'
            }
        },
        interval: 10,
        axisLabel: {
            formatter: '{value}%'
        }
    }],
    series: [{
        showAllSymbol: true, //当使用interval隔断时，显示所有的数据
        name: 'GDP总值',
        type: 'line',
        label: label(),
        data: resultData.totalGDPs
    }, {
        name: 'GDP增长率',
        type: 'bar',
        barMaxWidth: '30px',
        label: label2(),
        yAxisIndex: 1,
        data: resultData.increaseGDPs
    }]
}