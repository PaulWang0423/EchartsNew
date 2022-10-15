//多Y轴，自定义气泡（折柱混合）
app.title = '折柱混合';

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    grid: {
		top:'8%', 
		right: '15%',
		left: '10%',
		bottom: '5%'
	},
    legend: {
        data:['降雪量','降水量','蒸发量','平均温度']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel: {
				interval: 0,
				rotate: 40,
				margin: 10,
				textStyle:{ fontSize:10, color:'red',},
			},
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '水量(ml)',
            min: 0,
            max: 2500,
            interval: 250,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} °C'
            }
        },
        {
            type: 'value',
            name: '雪量(cm)',
            offset: 60,
            min: 0,
            max: 10,
            interval: 2,
            axisLabel: {
                formatter: '{value}'
            }
        },
    ],
    series: [
        {
            name:'蒸发量',
            type:'bar',
            data:[222, 504, 887, 1323, 1395, 1676, 2235, 2062, 1900, 1020, 726, 300],
            markPoint : {
                data : [
                    {name : '蒸发', value : 1323, xAxis: 3, yAxis: 1323,symbolSize:80},
                    {name : '蒸发', value : 1676, xAxis: 5, yAxis: 1676,symbolSize:70},
                ],
                itemStyle:{  
                    normal:{
                    	label:{  
                            show: true,  
                            formatter:function (data) {
				                 var data = (data.value || 0).toString(), result = '';
				                 while (data.length > 3) {
				                 	result = ',' + data.slice(-3) + result;
				                 	data= data.slice(0,data.length - 3);
				                 }
				                 if (data) { result = data + result; }
				                 return result;
			                 },     
                          }  
                    }  
                },
            },
        },
        {
            name:'降水量',
            type:'bar',
            data:[265, 544, 999, 1126, 1428, 1670, 2175, 2182, 1948, 1218, 826, 422],
            markPoint : {
                data : [
                    {name : '降水', value : 1323, xAxis: 9, yAxis: 1218,symbolSize:120},
                ],
                itemStyle:{  
                    normal:{
                    	label:{  
                            show: true,  
                            formatter:function (data) {
				                 var data = (data.value || 0).toString(), result = '';
				                 while (data.length > 3) {
				                 	result = ',' + data.slice(-3) + result;
				                 	data= data.slice(0,data.length - 3);
				                 }
				                 if (data) { result = data + result; }
				                 return '降水\n\n'+result+'\n\nml';
			                 },     
                          }  
                    }  
                },
            },
        },
        {
            name:'平均温度',
            type:'line',
            yAxisIndex: 1,
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
            markPoint : {
                data : [
                    {name : '年最高', value : 23.4, xAxis: 7, yAxis: 23.4,symbolSize:100},
                    {name : '年最低', value : 2.0, xAxis: 0, yAxis: 2.0}
                ],
                itemStyle:{  
                    normal:{
                    	label:{  
                            show: true,  
                            formatter:function (data) {
				                 return data.value+' °C';
			                 },     
                          }  
                    }  
                },
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            },
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 5,
                        type:'dotted',
                    }
            	},
            },
        },
        {
            name:'降雪量',
            type:'line',
            yAxisIndex: 2,
            data:[4.0, 3.2, 0, 0, 0, 0, 0, 0, 0, 0, 1.0, 4.2]
        }
    ]
};
