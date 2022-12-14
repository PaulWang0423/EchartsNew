var data = echarts.dataTool.prepareBoxplotData([
    [19747,
50024,
64617,
86808,
159949,],
   [23635,
46878,
58095,
84877,
158312,],
[21543,
47623,
61315.5,
85947,
159978,],
[18679,
46646,
59842,
84798.25,
159980,],
[15202,
43073.25,
55168.5,
80136.25,
159825,]
]);

option = {
    title: {
        text:'Dispersion of house price according to the position of floor',
        x: 'center',
        y: 20,
        textStyle:{
            color:'#3259B8',
            fontSize:16,
            fontWeight:'normal',
        },
    },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '15%',
        right: '10%',
    },
    xAxis: {
        type: 'category',
        data: ['Bottom','Low','Middle','High','Top'],

        nameTextStyle: {
            color: '#3259B8',
            fontSize: 14,
            
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#3259B8',
            }
        },
        splitLine: {
            show: false
        }
    },
    
    yAxis: {
        type: 'value',
 
        nameTextStyle: {
            color: '#3259B8',
            fontSize: 14,
        },
        axisLabel: {
            formatter: '{value} CNY/㎡'
        },
       axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#3259B8',
            }},
        splitLine: {
            lineStyle: {
                color: '#A7BAFA',
            },
        }
        
    },
    series: [{
            name: 'boxplot',
            type: 'boxplot',
            data: [
       [19747,
50024,
64617,
86808,
159949,],
   [23635,
46878,
58095,
84877,
158312,],
[21543,
47623,
61315.5,
85947,
159978,],
[18679,
46646,
59842,
84798.25,
159980,],
[15202,
43073.25,
55168.5,
80136.25,
159825,]
],
            itemStyle: {
                normal:{
                    borderColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#F02FC2' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#3EACE5' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                borderWidth:2,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(240,47,194,0.7)'  // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(62,172,299,0.7)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
            }
            },
            tooltip: {
                formatter: function(param) {
                    return [

                        'Upper: ' + param.data[5] + ' CNY/㎡' ,
                        'Q3: ' + param.data[4] + ' CNY/㎡',
                        'Median: ' + param.data[3] + ' CNY/㎡',
                        'Q1: ' + param.data[2] + ' CNY/㎡',
                        'Lower: ' + param.data[1] + ' CNY/㎡'
                    ].join('<br/>')
                }
            }
        },

    ]
};