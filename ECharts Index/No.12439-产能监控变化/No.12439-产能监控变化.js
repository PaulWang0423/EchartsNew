var xAxisData = [];
var data1 = [];
var data2 = [];
for (var i = 20; i < 100; i++) {
    
    xAxisData.push('第' + i +'天');
    data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
    if(i <80){
        data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
    } 
}

option = {
    title: {
        text: '产能监控'
    },
    legend: {
        data: ['预测产能', '实际产能'],
        align: 'left'
    },
    toolbox: {
        // y: 'bottom',
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            }
        }
    },
    tooltip: {},
    xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
            show: false
        }
    },
    yAxis: {
    },
    series: [{
        name: '预测产能',
        type: 'bar',
        data: data1,
        animationDelay: function (idx) {
            return idx * 10;
        }
    }, {
        name: '实际产能',
        type: 'bar',
        data: data2,
        animationDelay: function (idx) {
            return idx * 10 + 100;
        }
    }],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
        return idx * 5;
    }
};