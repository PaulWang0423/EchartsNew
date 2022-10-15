var dfColor = {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [{
        offset: 1,
        color: '#0489f0' // 0% 处的颜色
    }, {
        offset: 0,
        color: '#28d9e8' // 100% 处的颜色
    }],
    global: false // 缺省为 false
};

var provRank = ["杭州", "北京", "南京", "青岛", "厦门", "宁波", "武汉", "广州", "上海", "济南"]
option = {

    backgroundColor: '#000',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(objs, index) {
            let obj = objs[0];
            return `${obj.name}<br/>${obj.marker}${obj.seriesName} : ${obj.value} 个`;
        },
    },
    grid: {
        top: '3%',
        left: '3%',
        right: '2%',
        bottom: '3%',
        containLabel: true,

    },
    xAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false,
            
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        boundaryGap: true,
        inverse: true, //反向
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel:{
            margin:18,
            	formatter: function (value, index){
				var ind=index+1;
						if(ind==1){
							return '{a|'+value +'}'
						}else if(ind==2){
							return '{b|'+value +'}'
						}else if(ind==3){
							return '{c|'+value +'}'
						}else{
							return '{d|'+value +'}'
						}
					},
					rich: {
						a: {
							color:"#fb4d4b",
						},
						b: {
						    	color:"#f39c12",
						    	
						},
						c:{
						color:"#00a65a",
						},
						d:{
						color:"#fff",
						}
					}
        },
        data: provRank
    },
    series: [{
            name: '销售量',
            barMaxWidth: '40%',
            type: 'bar',
            
            label: {
                normal: {
                    show: true,
                    position: 'insideLeft',
                    formatter: '{c}',
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            data: [{
                    value: 110,
                    itemStyle: {
                        color: '#fb4d4b',
                    }
                },
                {
                    value: 20,
                    itemStyle: {
                        color: '#f39c12',
                    }
                },
                {
                    value: 40,
                    itemStyle: {
                        color: '#00a65a',
                    }
                },
                {
                    value: 30,
                    itemStyle: {
                        color: dfColor,
                    }
                },
                {
                    value: 40,
                    itemStyle: {
                        color: dfColor,
                    }
                },
                {
                    value: 50,
                    itemStyle: {
                        color: dfColor,
                    }
                },
                {
                    value: 60,
                    itemStyle: {
                        color: dfColor,
                    }
                },
                {
                    value: 70,
                    itemStyle: {
                        color: dfColor,
                    }
                },
                {
                    value: 80,
                    itemStyle: {
                        color: dfColor,
                    }
                },
                {
                    value: 90,
                    itemStyle: {
                        color: dfColor,
                    }
                },
            ]
        },

    ]
};