var  getsyzl=['2014','2015','2016','2017','2018','2019'];
var  getwkrs=[826,673,588,782,779,855];
var  getlkrs=[686,703,788,882,779,785];
option= {
    backgroundColor:'#000',
    grid: {
        top: '20%',
        left: '7%',
		right: '2%',
        bottom: '3%',
        containLabel: true
    },
	legend: {
		data: ['文科','理科'],
        right: "3%",
		top:"4%",
        textStyle: {
            color: "#A1D5FF",
			fontSize: 12
        }, 
		itemWidth: 12,  // 设置宽度
		itemHeight:16, // 设置高度
		itemGap: 12 // 设置间距
    },
    xAxis: [{
        data: getsyzl,
        axisLabel: {
            margin: 10,
            color: '#A1D5FF',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
            lineStyle: {
                color: '#102E74',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
	    type:'value',
	    axisLabel: {
            color: '#A1D5FF',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
            show:false,
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#102E74',
            }
        }
    }],
    series: [
	{
		name: "文科",		
        type: 'bar',
        data: getwkrs,
        barWidth: '12px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(85,244,255,0.9)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'transparent' // 100% 处的颜色
                }], false),
                barBorderRadius: [30, 30, 0, 0],
            }
        },
    },{
		name: "理科",
        type: 'bar',
        data: getlkrs,
        barWidth: '12px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(85,101,255,0.9)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'transparent' // 100% 处的颜色
                }], false),
                barBorderRadius: [30, 30, 0, 0],
            }
        },
    }
    ]
}