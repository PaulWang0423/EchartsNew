var xAxisData = [];
var data = [];
for (var i = 9; i < 16; i++) {
    xAxisData.push('5月' + i + '日');
    data.push(Math.round(Math.random() * 500) + 200);
}
option = {
   
    xAxis: [{
        data: xAxisData,
        axisLabel: {
            textStyle: {
                color: '#333'
            }
        },
        splitLine: {
            show: false
        }
    }, {
        // 辅助 x 轴
        show: false,
        data: xAxisData  
    }],
    yAxis: {
        max: 1000,
        axisLine: {
            show: false
        }
    },
    series: [{
        // 辅助系列
        type: 'bar',
        silent: true,
        xAxisIndex: 1,
        itemStyle: {
            normal: {
                barBorderRadius: 20,
                color: '#ddd'      
            }
        },
        barWidth: 55,
        data: data.map(function (val) {
            return 1000;
        })
    }, {
        type: 'bar',
        data: data,
        barWidth: 55,
        itemStyle: {
            normal: {
                barBorderRadius: 40,
                color: '#37A2DA',
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                shadowBlur: 20
            }
        }
    }]
};