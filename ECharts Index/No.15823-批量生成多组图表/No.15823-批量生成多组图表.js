var N_POINT = 20;
var grids = [];
var xAxes = [];
var yAxes = [];
var series = [];
var titles = [];
var count = 0;
var data = [];
var legends=[];
var colors=['#EE8262','#B5C334','#FCCE10','#E87C25','#B4EEB4',
	          	      '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
	                  '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0',
	                  '#E87C25','#FCCE10','#C1232B','#B5C334','#72D871']
var easingFuncs=[
	     {"name":'北京',"value": 35664,"xdata":['周一','周二','周三','周四','周五'],"ydata":[23,45,12,32,11],"type":'bar'},
		 {"name":'天津',"value": 5446,"xdata":['周一','周二','周三','周四','周五'],"ydata":[23,45,12,32,11],"type":'line'},
		 {"name":'上海',"value": 35664,"xdata":['周一','周二','周三','周四','周五'],"ydata":[23,45,12,32,11],"type":'bar'},
		 {"name":'杭州',"value": 35664,"xdata":['周一','周二','周三','周四','周五'],"ydata":[23,45,12,32,11],"type":'line'},
		 {"name":'黑龙江',"value": 35664,"xdata":['周一','周二','周三','周四','周五'],"ydata":[23,45,12,32,11],"type":'bar'},
		 {"name":'新疆',"value": 35664,"xdata":['周一','周二','周三','周四','周五'],"ydata":[23,45,12,32,11],"type":'bar'},
		 {"name":'大连',"value": 35664,"xdata":['周一','周二','周三','周四','周五'],"ydata":[23,45,12,32,11],"type":'bar'},
		 {"name":'青岛',"value": 43555,"xdata":['周一','周二','周三','周四','周五'],"ydata":[23,45,12,32,11],"type":'line'},
		 {"name":'湖南',"value": 13322,"xdata":['周一','周二','周三','周四','周五'],"ydata":[23,45,12,32,11],"type":'bar'},
		 {"name":'山西',"value": 5454,"xdata":['周一','周二','周三','周四','周五'],"ydata":[23,45,12,32,11],"type":'line'},
		 {"name":'陕西',"value": 657,"xdata":['周一','周二','周三','周四','周五'],"ydata":[23,45,12,32,11],"type":'line'},
		 {"name":'甘肃',"value": 35664,"xdata":['周一','周二','周三','周四','周五'],"ydata":[23,45,12,32,11],"type":'bar'},
		 {"name":'四川',"value": 35664,"xdata":['周一','周二','周三','周四','周五'],"ydata":[23,45,12,32,11],"type":'line'},
		 {"name":'云南',"value": 35664,"xdata":['周一','周二','周三','周四','周五'],"ydata":[23,45,12,32,11],"type":'bar'},
		 {"name":'西藏',"value": 35664,"xdata":['周一','周二','周三','周四','周五'],"ydata":[23,45,12,32,11],"type":'line'},
		 {"name":'海南',"value": 35664,"xdata":['周一','周二','周三','周四','周五'],"ydata":[23,45,12,32,11],"type":'bar'},
		 {"name":'江西',"value": 35664,"xdata":['周一','周二','周三','周四','周五'],"ydata":[23,45,12,32,11],"type":'line'},
		 {"name":'福建',"value": 35664,"xdata":['周一','周二','周三','周四','周五'],"ydata":[23,45,12,32,11],"type":'bar'}
	];
echarts.util.each(easingFuncs, function (easingFunc, name) {
		    grids.push({
		        show: false,
		        containLabel: false,
		        borderWidth: 0,
		        borderColor:'#fff'
		    });
		    xAxes.push({
		        type: 'category',
		        show: true,
		        name:'日',
		        nameGap:'1',
		        nameTextStyle:{
		        	color:'#fff'
		        },
		        gridIndex: count,
		        axisLabel:{
		        	show:true,
		        	interval:0,
		        	textStyle: {
					    color:'#fff',
		        		fontSize:14
					}
		        	//interval: '0'
		        },
		        axisTick:{
		        	show:false
		        },
		        
		        data:easingFunc.xdata
               //data:[]
		    });
		    yAxes.push({
		        type: 'value',
		        show: true,
		        min: 0.001,
		        axisLabel:{
		        	show:false
		        },
		        splitLine:{
		        	show:true,
		        	lineStyle:{
		        		width:0.2
		        	}
		        },
		        nameGap:'1',
		        axisTick:{
		        	show:false
		        },
		        name: easingFunc.name,
		        nameTextStyle:{
		        	color:'#fff',
		        	fontSize:14
		        },
		        gridIndex: count
		    });
		    series.push({
		        name: easingFunc.name,
		        type:  easingFunc.type,
		        xAxisIndex: count,
		        yAxisIndex: count,
		       data: easingFunc.ydata,
		       // data:[],
		        showSymbol: false,
		        lineStyle:{
		        	normal:{
		        		color:colors[count],
		        		width:2
		        	}
		        },
		        animationEasing: easingFunc.name,
		        animationDuration: 1000
		    });
		    titles.push({
                show:false,
		        textAlign: 'left',
		        text: easingFunc.value,
		        textStyle: {
		            fontSize: 16,
		            color:'yellow',
		            fontWeight: 'normal'
		        }
		    });
		    count++;
		});
		
		//定位每个图形的位置
		var rowNumber =  Math.floor(Math.sqrt(count))-1;
		echarts.util.each(grids, function (grid, idx) {
		    grid.left = ((idx % rowNumber) / rowNumber * 100+3) + '%';
		    grid.top = (Math.floor(idx / rowNumber) / rowNumber * 50+4) + '%';
		    grid.width = (1 / rowNumber * 92-5) + '%';
		    grid.height = (1 / rowNumber * 25) + '%';
		
		    titles[idx].left = parseFloat(grid.left) +parseFloat(grid.width) / 2+ '%';
		    titles[idx].top = parseFloat(grid.top)-3.5 + '%';
		});
	    
		option = {
				title: titles,
			    grid: grids,
			    xAxis: xAxes,
			    yAxis: yAxes,
			    series: series
		};
		
	   myChart.setOption(option);