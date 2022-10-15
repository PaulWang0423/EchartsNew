var getmydmc = ['外地开会', '出国开会', '市内会议', '校内会议', '外地讲学', '市外培训', '校内培训', '病假', '军训', '实习']; //数据点名称
var getmyd = [86, 90, 77, 63, 55, 25, 98, 65, 55, 66]; //学生满意度

//计算最大值  
function calMax(arr) {
    let max = 0;
    arr.forEach((el) => {
        el.forEach((el1) => {
            if (!(el1 === undefined || el1 === '')) {
                if (max < el1) {
                    max = el1;
                }
            }
        })
    })
    let maxint = Math.ceil(max / 9.5);
    //不让最高的值超过最上面的刻度    
    let maxval = maxint * 10;
    //让显示的刻度是整数    
    return maxval;
}


var max = Math.ceil(calMax([getmyd]) / 10) * 10;

option = {
    grid: {
        left: '150',
        right: '80',
        bottom: '30',
        top: '30',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return '申请原因分布<br>' + params[0].name + ': ' + params[0].value + '个'
        }
    },
    xAxis: [{
        type: 'value',
        axisLabel: {
            margin: 5,
            color: '#666666',
            textStyle: {
                fontSize: '13'
            },
        },
        min: 0,
        max: max, // 计算最大值
        interval: max / 5, //  平均分为5份
        splitNumber: 5,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#D1D1D1'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#333333'
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            textStyle: {
                color: '#666666',
                fontSize: '13'
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#333333'
            }
        },
        data: getmydmc
    }],
        dataZoom: [{
        show: true,
        width: 8,
        yAxisIndex: [0],
        bottom: 20,
        top:20,
        right:20,
        startValue: 0,
        endValue: 8,
        handleIcon: "M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z",
        handleSize: "100%",
        handleStyle: {
            color: "#DBDBDB",
        },
        backgroundColor: "transparent",
        fillerColor: "#DBDBDB",
        dataBackground: {
            lineStyle: {
                color: "transparent",
            },
            areaStyle: {
                color: "transparent",
            },
        },
        borderColor: "transparent",
    }],
    series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            xAxisIndex: 0,
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 5, 5, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#5CC0FF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#5998FF' // 100% 处的颜色
                    }], false),
                },
            },
            barWidth: 15,
            data: getmyd
        }
    ]
};