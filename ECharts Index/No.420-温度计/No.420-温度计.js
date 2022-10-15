var value = 41.0;
var kd = [];
// 刻度使用柱状图模拟，短设置3，长的设置5；构造一个数据
for (var i = 0, len = 130; i <= len; i++) {
    if (i > 100 || i < 30) {
        kd.push('0')
    } else {
        if (i % 5 === 0) {
            kd.push('5');
        } else {
            kd.push('3');
        }
    }

}
console.log(kd)
// 因为柱状初始化为0，温度存在负值，所以，原本的0-100，改为0-130，0-30用于表示负值
function getData(value) {
    return [value + 30];
}
var data = getData(value);
var mercuryColor = '#fd4d49';
var borderColor = '#fd4d49';

option = {
    title: {
        text: '温度计',
        show: false
    },
    yAxis: [{
        show: false,
        min: 0,
        max: 130,
    }, {
        show: false,
        data: [],
        min: 0,
        max: 130,
    }],
    xAxis: [{
        show: false,
        data: []
    }, {
        show: false,
        data: []
    }, {
        show: false,
        data: []
    }, {
        show: false,
        min: -110,
        max: 100,

    }],
    series: [{
        name: '条',
        type: 'bar',
        // 对应上面XAxis的第一个对象配置
        xAxisIndex: 0,
        data: data,
        barWidth: 18,
        itemStyle: {
            normal: {
                color: mercuryColor,
                barBorderRadius: 0,
            }
        },
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: function(param) {
                    // 因为柱状初始化为0，温度存在负值，所以，原本的0-100，改为0-130，0-30用于表示负值
                    return param.value - 30 + '°C';
                },
                textStyle: {
                    color: '#ccc',
                    fontSize: '10',
                }
            }
        },
        z: 2
    }, {
        name: '白框',
        type: 'bar',
        xAxisIndex: 1,
        barGap: '-100%',
        data: [129],
        barWidth: 28,
        itemStyle: {
            normal: {
                color: '#ffffff',
                barBorderRadius: 50,
            }
        },
        z: 1
    }, {
        name: '外框',
        type: 'bar',
        xAxisIndex: 2,
        barGap: '-100%',
        data: [130],
        barWidth: 38,
        itemStyle: {
            normal: {
                color: borderColor,
                barBorderRadius: 50,
            }
        },
        z: 0
    }, {
        name: '圆',
        type: 'scatter',
        hoverAnimation: false,
        data: [0],
        xAxisIndex: 0,
        symbolSize: 48,
        itemStyle: {
            normal: {
                color: mercuryColor,
                opacity: 1,
            }
        },
        z: 2
    }, {
        name: '白圆',
        type: 'scatter',
        hoverAnimation: false,
        data: [0],
        xAxisIndex: 1,
        symbolSize: 60,
        itemStyle: {
            normal: {
                color: '#ffffff',
                opacity: 1,
            }
        },
        z: 1
    }, {
        name: '外圆',
        type: 'scatter',
        hoverAnimation: false,
        data: [0],
        xAxisIndex: 2,
        symbolSize: 70,
        itemStyle: {
            normal: {
                color: borderColor,
                opacity: 1,
            }
        },
        z: 0
    }, {
        name: '刻度',
        type: 'bar',
        yAxisIndex: 1,
        xAxisIndex: 3,
        label: {
            normal: {
                show: true,
                position: 'right',
                distance: 5,
                color: '#525252',
                fontSize: 10,
                formatter: function(params) {
                    // 因为柱状初始化为0，温度存在负值，所以，原本的0-100，改为0-130，0-30用于表示负值
                    if (params.dataIndex > 100 || params.dataIndex < 30) {
                        return '';
                    } else {
                        if (params.dataIndex % 5 === 0) {
                            return params.dataIndex - 30;
                        } else {
                            return '';
                        }
                    }
                }
            }
        },
        barGap: '-100%',
        data: kd,
        barWidth: 1,
        itemStyle: {
            normal: {
                color: borderColor,
                barBorderRadius: 10,
            }
        },
        z: 0
    }]
};