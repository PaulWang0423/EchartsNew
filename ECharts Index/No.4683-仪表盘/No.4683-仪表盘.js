        var targetValue = 200;
        var realValue = 88;
        var data = {
        	    title: '仪表盘',
        	    value: (100*realValue/targetValue).toFixed(2),
        	   // color: {
        	   //     pieMini: '#ffca1c', //小圆形颜色
        	   //     pieMiniMini: '#fff', //小小圆形颜色
        	   //     piePlus: '#5DD1FA', //大圆形颜色
        	   //     value: '#687284', //底部数值颜色
        	   // },
        	}
        var option = {
        		title: [{
        	        text:'咸阳',
        	        top:'55%',
        	        left:'48%',
        	        padding:[-30,0], 
        	        textStyle:{
        	            color:'#fff',
        	            fontSize:18, 
        	            align:'center',
        	              fontWeight: '400',
        	        } 
        	    }
        	    ],
        		  backgroundColor: "#062a44",
        		  series: [
        	         {
            		    name: '刻度1',
            		    type: 'gauge',
            		    center: ['50%', '50%'],
            		    radius: '30%',
            		    min:0,//最小刻度
            		    max:100,//最大刻度
            		    splitNumber: 10, //刻度数量
            		    startAngle: 225,
            		    endAngle: -45,
            		    axisLine: {
            		      show: true,
            		      lineStyle: {
            		        width: 1,
            		        color: [[1,'#42B3D0']] 
            		      }
            		    },//仪表盘轴线
            		    axisLabel: {
            		      show: true,
            		      color:'#42B3D0',
            		      distance:25,
            		      formatter:function(v){
            		            switch (v + '') {
            		                case '0' : return '0';
            		                case '10' : return '10';
            		                case '20' : return '20';
            		                case '30' : return '30';
            		                case '40' : return '40';
            		                case '50' : return '50';
            		                case '60' : return '60';
            		                case '70' : return '70';
            		                case '80' : return '80';
            		                case '90' : return '90';
            		                case '100' : return '100';
            		            }
            		        }
            		    },//刻度标签。
            		    axisTick: {
            		       show: true,
            		       splitNumber: 7,
            		      lineStyle: {
            		          color: '#42B3D0',  //用颜色渐变函数不起作用
            		          width: 1,
            		      },
            		      length: -8
            		    },//刻度样式
            		    splitLine: {
            		      show: true,
            		      length: -20,
            		      lineStyle: {
            		        color: '#01B661',  //用颜色渐变函数不起作用
            		      }
            		    },//分隔线样式
            		    detail: {
            		      show: false
            		    },
            		    pointer: {
            		      show: false
            		    }
            		  },
            		  {
            	            "name": "仪表盘2",
            	            "type": "gauge",
            	            center: ['50%', '50%'],
            	            radius: '22%',
            	            "splitNumber": 10,
            	            "axisLine": {
            	                "lineStyle": {
            	                    "color": [
            	                        [20 / 100, "#42B3D0"],
            	                        [1, "#111F42"]
            	                    ],
            	                    "width": 8
            	                }
            	            },
            	            axisLabel: {
            	                show: false,
            	            },
            	            "axisTick": {
            	                show: false,

            	            },
            	            "splitLine": {
            	                "show": false,
            	            },
            	            "itemStyle": {
            	                show: false,
            	            },
            	            "detail": {
            	                "formatter": function(value) {
            	                    if (value !== 0) {
            	                        var num = Math.round(value ) ;
            	                        return parseInt(num).toFixed(0)+"%";
            	                    } else {
            	                        return 0;
            	                    }
            	                },
            	                "offsetCenter": [0, "20%"],
            	                "textStyle": {
            	                	padding: [0, 0, 80, 0],
            	                    "fontSize": 24,
            	                    fontWeight: '700',
            	                    "color": '#fff'
            	                }
            	            },
            	            "title": {
            	            	 color: '#fff',
            	            	 "fontSize": 10,
            	            	"offsetCenter": [0, "-25%"]
            	            }, 
            	            "data": [{
            	               // "name": "目标值："+targetValue+"万吨",
            	                "value": 30,
            	            }
            	            ],
            	            pointer: {
            	                show: false,
            	                length: '75%',
            	                width: 20, //指针粗细
            	            },
            	        },
            	        
        	        
        		  ]
        		};