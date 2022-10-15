var option = {
     title: [ // 所有文字信息
{text: '今日订单总金额',x: 'center',y: '4.5%',
             textStyle: {fontSize: 20}},
			 {text: '今日成交订单数',x: '14.7%',y: '18%',
			  textStyle: {fontSize: 20}},
			 {text: '34220',x: '15.3%',y: '23%',
			  textStyle: {fontSize: 40}},
			 {text: '订单成功占比',x: 'center',y: '18%',
			  textStyle: {fontSize: 20}},
			 {text: '93.25%',x: 'center',y: '23%',
			  textStyle: {fontSize: 40}},
			 {text: '今日取消订单数',x: '74.5%',y: '18%',
			  textStyle: {fontSize: 20}},
			 {text: '2310',x: '76%',y: '23%',
			  textStyle: {fontSize: 40}},
			 {text: '购买用户\n\n设备分布',
x: '19.8%',y: '45%',
   			  textAlign: 'center',textBaseline: 'middle',
			  textStyle: {fontSize: 20}},
			 {text: '购买用户\n\n年龄分布',
x: '49.8%',y: '45%',
			  textAlign: 'center',textBaseline: 'middle',
			  textStyle: {fontSize: 20}},
			 {text: '购买用户\n\n渠道分布',
x: '79.8%',y: '45%',
			  textAlign: 'center',textBaseline: 'middle',
			  textStyle: {fontSize: 20}},
			 {text: '4509834',x: 'center',y: '9%',
			  textStyle: {fontSize: 60}},
			 {text: '订单量 TOP10 城市',x: '18%',y: '60%',
			  textStyle: {fontSize: 20}},
			 {text: '订单量分时段统计',x: '65%',y: '60%',
			  textStyle: {fontSize: 20}}],
     tooltip: {
         trigger: 'axis',
         axisPointer: {type: 'shadow'}},
     backgroundColor:'rgba(20,20,100,1)', // 背景色
     grid: [{left: '5%', // 网格部分
             right: '55%',
             top: '65%',
             bottom: '5%',
             containLabel: true},
            {gridindex: 1,
             left: '50%',
             right: '5%',
             top: '65%',
             bottom: '5%',
             containLabel: true}],
     xAxis:[{type: 'value', // x轴
             axisLabel: {
             formatter: '{value} 件'},
             boundaryGap: [0, 0.02]},
            {gridIndex: 1,
             type: 'category',
             boundaryGap: false,
             data: ['0时', '1时', '2时', '3时', '4时', '5时', 
		    '6时', '7时', '8时', '9时', '10时', '11时', 
'12时', '13时', '14时', '15时', '16时', '17时', 
'18时', '19时', '20时', '21时', '22时', '23时']}],
     yAxis:[{type: 'category', // y轴
             data: ['城市A', '城市B', '城市C', '城市D', '城市E', 
'城市F', '城市G', '城市H', '城市I', '城市J'],
             axisLabel: {interval: 0}},
            {gridIndex: 1,
             type: 'value',
             axisLabel: {formatter: '{value} '}}],
     series:[{type: 'bar', // 条形图
             label: {normal: {
                     show: true,
                     position: 'right'}},
             data: [4320, 3529, 3105, 2304, 2094, 
1790, 1565, 1120, 780, 409]},
	     {type: 'pie', // 饼图
             center: ['20%', '45%'],
             radius: ['15%', '20%'],
             label: {normal: {formatter: '{b} :\n{c}({d}%)'}},
             data: [{value: 1032,name: 'Mac'},
		    {value: 10096,name: 'iphone'},
		    {value: 1240,name: 'iPad'},
		    {value: 15098,name: 'Android'},
		    {value: 4098,name: 'Windows'},
		    {value: 2656,name: '其它'}]},
	     {type: 'pie', // 饼图
             center: ['50%', '45%'],
             radius: ['15%', '20%'],
             label: {
                 normal: {formatter: '{b} :\n{c}({d}%)'}},
             data: [{value: 11045,name: '小于25岁'},
		     {value: 20230,name: '25岁-40岁'},
		     {value: 2945,name: '大于40岁'}]},
{type: 'pie', // 饼图
             center: ['80%', '45%'],
             radius: ['15%', '20%'],
             label: {normal: {formatter: '{b} :\n{c}({d}%)'}},
             data: [{value: 1851,name: '天猫'},
		    {value: 10234,name: '淘宝'},
		    {value: 14575,name: '京东'},
		    {value: 7560,name: '拼多多'}]},
	     {xAxisIndex: 1,
             yAxisIndex: 1,
             type: 'line', // 折线图
             data: ['416', '382', '318', '184', '215', '265', 
'557', '954', '1627', '1180', '2416', '2678', 
'3021', '2590','2100','1809','2300','2539'],
             smooth: true,
             markPoint: {
                 data: [{type: 'max',name: '最大值',symbolSize: 60},
	     	        {type: 'min',name: '最小值',symbolSize: 60}],
                 itemStyle: {normal: {color: '#F36100'}}},
             markLine: {
                 data: [{type: 'average',name: '平均值'}]
             }
         }
     ]
 };