var data = [];

var times=[[1584086222000,"473"],[1584086342000,"47"],[1584086462000,"46"],[1584086582000,"454"],[1584086702000,"44"],[1584086822000,"436"],[1584086942000,"43"],[1584087062000,"43"],[1584087182000,"43"],[1584087302000,"45"],[1584087422000,"474"],[1584087542000,"45"],[1584087662000,"445"],[1584087782000,"45"],[1584087902000,"445"],[1584088022000,"444"],[1584088142000,"43"],[1584088262000,"44"],[1584088382000,"44"],[1584088502000,"42"],[1584088622000,"41"],[1584088742000,"414"],[1584088862000,"43"],[1584088982000,"456"],[1584089102000,"45"],[1584089222000,"45"],[1584089342000,"45"],[1584089462000,"47"],[1584089582000,"48"],[1584089702000,"47"],[1584089822000,"45"]]

option = {
    title: {
        text: '时间坐标轴'
    },
    tooltip: {
        trigger: 'axis',
    },
    xAxis: {
        type: 'time',
        min: 1584086222000,
        max: 1584089822000,
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        }
    },
    series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: times
    }]
};