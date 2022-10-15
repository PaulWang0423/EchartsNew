option = {
    legend: {
        data: ['ACC', 'MES','Precision','Recall','F-Value']
    },
  	grid: {
      	left: 250
    },
    xAxis: {
      	axisLine: {
          	lineStyle: {color: '#ccc'}
        },
      	axisLabel: {
          	textStyle: {color: '#777'}
        },
    },
    yAxis: [
        {
      	inverse: true,
      	splitLine: {
          	show: true
        },
      	axisTick: {
          	length: 100,
          	lineStyle: {color: '#ccc'}          
        },
      	axisLine: {
          	lineStyle: {color: '#ccc'}
        },
        data: ['-','-','-','-']
    },  {
      	name: '                    实验阶段',
      	nameLocation: 'start',
      	nameTextStyle: {
          	fontWeight: 'bold',
          	color: '#000',
            fontSize : 15
        },      
		position: 'left',
      	offset: 220,
      	axisLine: {
          	onZero: false,
          	show: false
        },
      	axisTick: {
          	length: 200,
          	inside: true,
          	lineStyle: {color: '#ccc'}          
        },
      	axisLabel: {
      	    fontWeight: 'bold',
      	    fontSize:15,
          	inside: true
        },
      	inverse: true,
      	data: ['+Scale+Optimize', '+Optimize', '+Data Scale', 'Baseline'],
      	
    }],
    series: [{
        name:"ACC",
        type: 'bar',
        data:[58.94736842105263, 52.63157894736842, 41.05263157894737,38.94736842105263],
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	textStyle: {
              	    color: '#000',
              	    fontWeight : 'normal',
                    fontSize : 15
              	},
              	formatter: 'ACC',              
            }
        }
    }, {
        name:"MES",
        type: 'bar',
        data:[211.86315789473684/10, 235.90526315789472/10, 240.61052631578949/10,314.06315789473683/10],//缩小规模10
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	textStyle: {
              	    color: '#000',
              	    fontWeight : 'normal',
                    fontSize : 15
              	},
              	formatter: 'MES',              
            }
        }      
    },{
        name:"Precision",
        type: 'bar',
        data:[53.16131237183869, 43.4955185659411, 8.950617283950617,10.357142857142856],//百分数
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	textStyle: {
              	    color: '#000',
              	    fontWeight : 'normal',
                    fontSize : 15
              	},
              	formatter: 'Precision',              
            }
        }      
    },{
        name:"Recall",
        type: 'bar',
        data:[52.97619047619048, 38.915343915343914, 11.337868480725623,8.163265306122448],//百分数
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	textStyle: {
              	    color: '#000',
              	    fontWeight : 'normal',
                    fontSize : 15
              	},
              	formatter: 'Recall',              
            }
        }      
    },{
        name:"F-Value",
        type: 'bar',
        data:[51.26058346371939, 38.81765681077044, 8.595848595848597,6.2192118226600986],//百分数
        label: {
         	normal: {
              	show: true,
              	position: 'left',
              	textStyle: {
              	    color: '#000',
              	    fontWeight : 'normal',
                    fontSize : 15
              	},
              	formatter: 'F-Value',
            }
        }      
    }]
};