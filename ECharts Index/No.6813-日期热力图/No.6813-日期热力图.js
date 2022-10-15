var days = ["06.23","24","25","26","27","28","29","30","07.01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22"];//刷卡日期
var weeks = [" "," "," "," ","六","日"," "," "," "," "," ","六","日"," "," "," "," "," ","六","日"," "," "," "," "," ","六","日"," "," "," "];//刷卡日期六日
var place = ["校医院","教学楼","超市","图书馆","饭堂","宿舍","校门"];//刷卡地点
var numx=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6];//刷卡地点序号
var numy=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,12,12,12,13,13,13,14,14,14,15,15,15,16,16,16,17,17,17,18,18,18,19,19,19,20,20,20,21,21,21,22,22,22,23,23,23,24,24,24,25,25,25,26,26,26,27,27,27,28,28,28,29,29,29,0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,12,12,12,13,13,13,14,14,14,15,15,15,16,16,16,17,17,17,18,18,18,19,19,19,20,20,20,21,21,21,22,22,22,23,23,23,24,24,24,25,25,25,26,26,26,27,27,27,28,28,28,29,29,29,0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,12,12,12,13,13,13,14,14,14,15,15,15,16,16,16,17,17,17,18,18,18,19,19,19,20,20,20,21,21,21,22,22,22,23,23,23,24,24,24,25,25,25,26,26,26,27,27,27,28,28,28,29,29,29,0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,12,12,12,13,13,13,14,14,14,15,15,15,16,16,16,17,17,17,18,18,18,19,19,19,20,20,20,21,21,21,22,22,22,23,23,23,24,24,24,25,25,25,26,26,26,27,27,27,28,28,28,29,29,29,0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,12,12,12,13,13,13,14,14,14,15,15,15,16,16,16,17,17,17,18,18,18,19,19,19,20,20,20,21,21,21,22,22,22,23,23,23,24,24,24,25,25,25,26,26,26,27,27,27,28,28,28,29,29,29,0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,12,12,12,13,13,13,14,14,14,15,15,15,16,16,16,17,17,17,18,18,18,19,19,19,20,20,20,21,21,21,22,22,22,23,23,23,24,24,24,25,25,25,26,26,26,27,27,27,28,28,28,29,29,29,0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,9,9,9,10,10,10,11,11,11,12,12,12,13,13,13,14,14,14,15,15,15,16,16,16,17,17,17,18,18,18,19,19,19,20,20,20,21,21,21,22,22,22,23,23,23,24,24,24,25,25,25,26,26,26,27,27,27,28,28,28,29,29,29];//刷卡日期序号
var numh=[4,4,4,4,4,4,0,0,0,2,2,2,0,0,0,7,7,7,3,3,3,5,5,5,0,0,0,0,0,0,7,7,7,7,7,7,0,0,0,2,2,2,0,0,0,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,0,0,0,4,4,4,0,0,0,4,4,4,0,0,0,6,6,6,3,3,3,0,0,0,6,6,6,0,0,0,6,6,6,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,6,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,6,6,6,0,0,0,0,0,0,5,5,5,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,8,8,0,0,0,0,0,0,7,7,7,0,0,0,0,0,0,0,0,0,5,5,5,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,6,6,6,0,0,0,0,0,0,8,8,8,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,4,4,4,0,0,0,0,0,0,0,0,0,6,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,6,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,6,6,6,0,0,0,5,5,5,0,0,0,0,0,0,1,1,1,1,1,1,4,4,4,6,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,2,2,2,2,2,2,6,6,6,0,0,0,4,4,4,6,6,6,2,2,2,7,7,7,2,2,2,7,7,7,0,0,0,0,0,0,2,2,2,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];//刷卡次数;
var data = [];
for(var i = 0;i<numh.length;i++){
    data[i]=[numx[i],numy[i],numh[i]];
}
data = data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});


//近一个月一卡通刷卡地点热力图图表
option = {
    backgroundColor:'#fff',
    grid: {
        top: '25%',//上边距
        right: '3%',//右边距
        left: '6%',//左边距
        bottom: '25%',//下边距
        show:true,
        borderColor:"transparent",
        backgroundColor:'rgba(6,99,252,0)',
    },
    tooltip: {
        position: 'top',
        formatter: function(params) {
	            return '刷卡地点：' + place[params.value[1]]+ '<br/>' + days[params.value[0]]+ '日刷卡总次数：' + params.data[2]+'次';
	        }
    },
    xAxis: [{
        type: 'category',
        data: days,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#fff',
                width:5,
            },
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }, 
        axisLabel: {
            margin: 5,
            color: '#999',
            textStyle: {
                fontSize: 12
            },
			interval: 0,  
			formatter:function(value){ 
			//	debugger  
				var ret = "";//拼接加\n返回的类目项  
				var maxLength = 3;//每项显示文字个数  
				var valLength = value.length;//X轴类目项的文字个数  
				var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
				if (rowN > 1)//如果类目项的文字大于3,
				{  
					for (var i = 0; i < rowN; i++){
						var temp = "";//每次截取的字符串  
						var start = i * maxLength;//开始截取的位置  
						var end = start + maxLength;//结束截取的位置  
						//这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
						temp = value.substring(start, end) + "\n";  
						ret += temp; //凭借最终的字符串  
					}
					return ret;  
				}
				else{
					return value;  
				}
			},
        },
    },{
        type: 'category',
        data: weeks,
        splitLine: {
            show: true,
            lineStyle: {
				type:'dashed',
                color: '#E5E8EB',
                width:1,
            },
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }, 
        axisLabel: {
            margin: 5,
            color: '#999',
            textStyle: {
                fontSize: 12
            },
			interval: 0,  
        },
    }],
    yAxis: {
        type: 'category',
        data: place,
        splitArea: {
            show: true,
            areaStyle: {
                color:'transparent',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#fff',
                 width:15,
            },
        },
        axisLine: {
            show: true,
			lineStyle:{
				width:1,
				color:'#ccc',
			}
        },
        axisTick: {
            show: false
        }, 
        axisLabel: {
            margin: 8,
            color: '#666',
            textStyle: {
                fontSize: 12
            },
        },
    },
    visualMap: {
        type: 'continuous',
        show:false,
        min: 0,
        max: 10,
        inRange: {
            color: ['#8DB6F8', '#4185F4','#5984C8'],
        },
    },
    series: [{
        type: 'heatmap',
        data: data,
        label: {
            show: true,
        },
        zlevel:-1,
    }]
};