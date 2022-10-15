var xData = function() {
    var data = [];
    for (var i = 1; i < 32; i++) {
        data.push(i+'日');
    }
    return data;
}();
option = {
    title : {
       text: '抽检异议情况分析',
        subtext: '单位异议趋势分析'
    },
    tooltip : {
        trigger: 'axis'
    },
     grid: {
        left: '3%',
        top:'15%',
        containLabel: true
    },
   legend: {
        data:['异议提出数','异议通过数']
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : xData
        }
    ],
    yAxis : {
            type : 'value',
            min:0,
            max:400
        }
    ,
    series : [
        {
            name:'异议提出数',
            type:'line',
            areaStyle: {
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(199, 37, 50,0.2)'
                    }, {
                        offset: 1,
                        color: 'rgba(199, 37, 50,0.2)'
                    }], false)
                }
            },
            smooth:true,
            itemStyle: {
                normal: {areaStyle: {type: 'default'}}    
            },
            data:[200,213,205,167,250,223,177,195,170,185,161,203,204,195,162,212,243,180,163,204,211,155,231,249,224,190,155,222,232,162,245]
        },
         {
            name:'异议通过数',
            type:'line',
            areaStyle: {
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(19, 37, 250,0.2)'
                    }, {
                        offset: 1,
                        color: 'rgba(19, 37, 250,0.2)'
                    }], false)
                }
            },
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[78,64,64,79,76,72,74,63,54,61,58,63,68,71,78,53,50,64,66,73,55,51,53,75,54,64,68,71,52,78,76]
        }
    ]
};