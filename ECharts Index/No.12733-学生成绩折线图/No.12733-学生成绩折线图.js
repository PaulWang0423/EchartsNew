option = {
    backgroundColor:'#050d19',
    title:{
      textStyle:{
          color:"#6a9cd5",
      },
      text:'张三英语成绩',
      left:"center",
    },
    tooltip: {//鼠标悬浮弹出提示框
        trigger:'axis', //提示框弹出的触发时间，折线图和柱状图为axis
        formatter:"{a} <br/>{b} : {c} "//提示框提示的信息，{a}series内的名字，{b}为块状的名字，{c}为数值
		},
		grid: {//统计图距离边缘的距离
			top: '8%',
			left: '10%',
			right: '10%',
			bottom: '8%'
		},
		xAxis: [{//x轴
			type: 'category',//数据类型为不连续数据
			boundaryGap: false,//坐标轴两边是否留白
			axisLine: { //坐标轴轴线相关设置。数学上的x轴
				 show: true,
				 lineStyle: {
					 color: '#233e64' //x轴颜色
				 },
			 },
			 axisLabel: { //坐标轴刻度标签的相关设置
				 textStyle: {
					 color: '#6a9cd5',
				 },
			 },
			 axisTick: { show: true,},//刻度点数轴
			data: ['模拟考一', '模拟考二', '模拟考三', '模拟考四', '模拟考五', '模拟考六', '模拟考七'],
		}],
		yAxis: [{//y轴的相关设置
			type: 'value',//y轴数据类型为连续的数据
			min: 0,//y轴上的刻度最小值
			max:140,//y轴上的刻度最大值
			splitNumber: 7,//y轴上的刻度段数
			splitLine: {//y轴上的y轴线条相关设置
				 show: true,
				 lineStyle: {
					 color: '#233e64'
				 }
			 },
			 axisLine: {//y轴的相关设置
                show: true,
                lineStyle: {
                    color: '#233e64' //y轴颜色
                },
             },
			 axisLabel: {//y轴的标签相关设置
				 textStyle: {
					 color: '#6a9cd5',
				 },
			 },
			 axisTick: { show: true,},  //刻度点数轴
		}],
		series: [{
			name: '张三英语成绩',
			type: 'line',//统计图类型为折线图
			smooth: true, //是否平滑曲线显示
			symbolSize:0,//数据点的大小，[0,0]//b表示宽度和高度
			lineStyle: {//线条的相关设置
				normal: {
					color: "#3deaff"   // 线条颜色
				}
			},
			areaStyle: { //区域填充样式
                normal: {
                 //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
					   { offset: 0,  color: 'rgba(61,234,255, 0.9)'}, 
					   { offset: 0.7,  color: 'rgba(61,234,255, 0)'}
				   ], false),

                 shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                 shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
             }
         },
			data: [90, 105, 84, 125, 110, 92, 98]
		}]
};