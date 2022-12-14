var xData = function() {
    //var data = [1.13,1.20,1.27,2.03,2.10,2.17,2.24,3.02,3.09,3.16,3.23,3.30,4.06,4.13,4.20,4.27,5.04];
    var data =[1.13,1.14,1.15,1.16,1.17,1.18,1.19,1.2,1.21,1.22,1.23,1.24,1.25,1.26,1.27,1.28,1.29,1.3,1.31,2.01,2.02,2.03,2.04,2.05,2.06,2.07,2.08,2.09,2.1,2.11,2.12,2.13,2.14,2.15,2.16,2.17,2.18,2.19,2.2,2.21,2.22,2.23,2.24,2.25,2.26,2.27,2.28,2.29,3.01,3.02,3.03,3.04,3.05,3.06,3.07,3.08,3.09,3.1,3.11,3.12,3.13,3.14,3.15,3.16,3.17,3.18,3.19,3.2,3.21,3.22,3.23,3.24,3.25,3.26,3.27,3.28,3.29,3.30,3.31,4.01,4.02,4.03,4.04,4.05,4.06,4.07,4.08,4.09,'4.10',4.11,4.12,4.13,4.14,4.15,4.16,4.17,4.18,4.19,4.2,4.21,4.22,4.23,4.24,4.25,4.26,4.27,4.28,4.29,4.30,5.01,5.02,5.03,5.04]
    // for (var i = 1; i < 31; i++) {
    //     data.push(i + "日");
    // }
    return data;
}();

option = {
        title:{
        text:'全球主要疫情国家死亡率统计',
        top:10,
        left:10,
        
    },
    backgroundColor: "#1A1835",
    backgroundColor:'#fff',

    tooltip: {
        trigger: 'axis',
        //formatter: "{a} <br/>{b}: {c}%",
        axisPointer: {
            
            type: "shadow",
            textStyle: {
                color: "#fff"
            }

        },
        formatter: function(params) {
            var result = params[0].name + "<br>";
            params.forEach(function(item) {
              if (item.value!='-') {
                result += item.marker + " " + item.seriesName + " : " + item.value + "%</br>";
              } else {
                result += item.marker + " " + item.seriesName + " :  - </br>";
              }
            });
            return result;
          }
//           formatter:function(params) {
//     var str = params[0].name + '<br>'
//     for(let item of params) {
//       str += item.seriesName + ' : ' + item.value + '%<br>'
//     }
//     return str;
//   }
    },
    grid: {
        borderWidth: 0,
        top: 110,
        bottom: 95,
        textStyle: {
            color: "#fff"
        }
    },
    legend: {
        x: '20%',
        top: '11%',
        textStyle: {
            color: '#90979c',
        },
        data: ['全球平均', '中国','美国','意大利','西班牙','日本','德国']
    },

     toolbox: {
        iconStyle: {
            normal: {
                borderColor: '#535c68'
            },
            emphasis: {
                borderColor: '#30336b'
            }
        },
        feature: {
            dataZoom: {},
            brush: {
                type: ['rect', 'polygon', 'clear']
            },
            saveAsImage: {
                show: true
            }
        }
    },

    calculable: true,
    xAxis: [{
        type: "category",
        axisLine: {
            lineStyle: {
               // color: "rgba(204,187,225,0.5)",
            }
        },
        axisLabel:{
            interval:7,
            formatter:function (value) {
    return value;}
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: xData,
    }],

    yAxis: [{
        type: "value",
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                //color: "rgba(204,187,225,0.5)",
            }
        },
        axisLabel:{
            formatter: '{value} %' ,
            //formatter:function (value) {
// return value;
//         }
}
    }],
    dataZoom: [{
        show: true,
        height: 30,
        xAxisIndex: [0],
        bottom: 30,
        
        "start": 10,
        "end": 80,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
            color: "#5B3AAE",
        },
        textStyle:{
            color:"rgba(204,187,225,0.5)",
        },
        fillerColor:"rgba(67,55,160,0.4)",
        borderColor: "rgba(204,187,225,0.5)",

    }, {
        type: "inside",
        show: true,
        height: 15,
        start: 1,
        end: 35
    }],
    
    
    
    series: [{
        name: "全球平均",
        type: "line",
        smooth:false,
        // label: {  
        //     normal:{
        //         formatter: function (params) {
        //      if (params.value > 0) {
        //       return params.value;
        //      } else {
        //       return '';
        //      }
           
         //   }
        normal: {
        // show: true,
        formatter:function(params){ //标签内容
          return  params.value+'%'
        },
        },
       // },
                lineStyle:{
            normal:{
                width:1
            }
        },
        symbolSize: "none",
        symbol: 'circle',
        itemStyle: {
       
        //       normal: {
        //         color: "#fff",  // 会设置点和线的颜色，所以需要下面定制 line
        //       // borderColor: "blue"  // 点边线的颜色
        //     }
        // },
        // lineStyle: {
        //     normal: {
        //         color: "#6f7de3"   // 线条颜色
        //     }
        // },
           color: "#ff7f50",
           color:'#675bba',
        },
        
        // markPoint: {
        //     label: {
        //         normal: {
        //             textStyle: {
        //                 color: '#fff'
        //             }
        //         }
        //     },
        //     data: [{
        //         type: 'max',
        //         name: '最大值',

        //     }, {
        //         type: 'min',
        //         name: '最小值'
        //     }]
        // },
        
        //data: [
        //    2.44, 2.06, 2.34, 2.07, 2.36, 2.55, 3.37, 3.44, 3.50, 3.86,4.36,4.74,5.48,6.20,
        //    6.86,6.93
        //],
        data:[2.44,2.44,4.88,4.44,3.23,1.52,1.45,2.06,2.05,2.96,2.99,3.16,2.82,'2.90',2.34,2.18,2.18,2.17,2.17,2.09,2.08,2.07,2.00,2.00,2.03,2.08,2.17,2.24,2.36,2.47,2.27,2.15,2.27,2.41,2.49,2.55,2.67,2.79,2.91,3.04,3.13,3.31,3.37,3.41,3.42,3.44,3.46,3.44,3.46,3.44,3.43,3.44,3.45,3.43,3.42,3.42,3.50,3.55,3.60,3.67,3.68,3.74,3.72,3.86,4.01,4.03,4.08,4.07,4.18,4.31,4.38,4.37,4.50,4.53,4.58,4.62,4.70,4.74,4.90,4.99,5.10,5.30,5.34,5.43,5.48,5.61,5.76,5.86,'6.00',6.09,6.16,6.20,6.27,6.39,6.63,6.72,6.86,6.88,6.86,6.87,6.93,6.98,7.03,7.01,6.97,6.93,6.93,6.95,7.10,7.04,7.02]
    }, {
        name: "中国",
        type: "line",
        smooth:false,
        symbolSize: "3",
        symbol: 'circle',
        itemStyle: {
            color: "#F8EFBA",
            color:'#d14a61',
        },
        lineStyle:{
            normal:{
                width:1
            }
        },
        // markPoint: {
        //     label: {
        //         normal: {
        //             textStyle: {
        //                 color: '#fff'
        //             }
        //         }
        //     },
        //     data: [{
        //         type: 'max',
        //         name: '最大值',

        //     }, {
        //         type: 'min',
        //         name: '最小值'
        //     }]
        // },
        //data: [
        //    2.44,2.06,2.34,2.08,2.38,2.58,3.43,3.67,3.88,3.98,4.02,4.01,4.02,4.00,5.51,5.50
        //]
        data:[2.44,2.44,4.88,4.44,3.23,1.52,1.45,2.06,2.05,2.96,2.99,3.16,2.82,'2.90',2.34,2.20,2.20,2.19,2.19,2.11,2.09,2.08,2.02,2.01,2.04,2.09,2.18,2.26,2.38,2.49,2.28,2.16,2.29,2.43,2.51,2.58,2.70,2.83,2.95,3.07,3.17,3.36,3.43,3.48,3.49,3.53,3.57,3.59,3.64,3.67,3.71,3.74,3.77,3.80,3.83,3.86,3.88,3.91,3.92,3.93,3.94,3.95,3.97,3.98,'4.00','4.00','4.00','4.01',4.01,4.01,4.02,4.02,4.02,4.02,4.02,4.02,4.02,4.01,4.02,4.02,4.02,4.02,4.03,4.02,4.02,4.02,4.02,4.02,4.02,4.01,4.01,'4.00','4.00','4.00','4.00',5.51,5.51,5.51,5.51,5.51,5.51,5.51,'5.50','5.50',5.51,'5.50','5.50','5.50','5.50','5.50','5.50']
    },
    {
        name: "意大利",
        type: "line",
        smooth:false,
        symbolSize: "3",
        symbol: 'circle',
        itemStyle: {
            color: "#f8a5c2",
            color:'#feb062'
           
        },
        lineStyle:{
            normal:{
                width:1
            }
        },
        data:['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-',0,0,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,10.00,1.52,2.61,2.47,3.21,2.65,2.60,2.36,2.57,2.39,2.49,3.10,3.46,3.77,4.21,3.88,4.93,5.02,6.14,6.64,6.60,7.17,6.77,7.31,7.71,7.94,8.17,8.30,8.57,9.01,9.26,9.51,9.86,10.09,10.20,10.56,10.84,11.03,11.39,11.75,11.90,12.07,12.25,12.33,12.32,12.47,12.63,12.67,12.73,12.77,12.79,12.73,12.83,12.97,13.11,13.12,13.19,13.20,13.22,13.31,13.40,13.39,13.45,13.46,13.51,13.48,13.53,13.58,13.60,13.61,13.61]
    },
    {
        name: "美国",
        type: "line",
        smooth:false,
        symbolSize: "3",
        symbol: 'circle',
        itemStyle: {
            color: "#ea8685",
             color:'#636e72'
        },
                lineStyle:{
            normal:{
                width:1
            }
        },
        // markPoint: {
        //     label: {
        //         normal: {
        //             textStyle: {
        //                 color: '#fff'
        //             }
        //         }
        //     },
        //     data: [{
        //         type: 'max',
        //         name: '最大值',

        //     }, {
        //         type: 'min',
        //         name: '最小值'
        //     }]
        // },
        //data: [,,,0,0,0,2.61,2.39,4.93,7.31,9.26,11.03,12.32,12.73,13.22,13.48
        //    ]
        data:['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-',0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,1.45,2.25,5.71,7.14,6.83,5.98,5.04,4.18,3.78,3.44,2.95,2.86,2.18,2.19,2.04,1.83,1.98,1.78,1.48,1.48,1.37,1.29,1.34,1.26,1.45,1.52,1.52,1.64,1.76,1.76,1.92,2.16,2.37,2.47,2.57,2.72,2.86,2.99,3.23,3.43,3.58,3.74,3.89,3.96,4.06,4.27,4.84,4.96,5.25,5.32,5.35,5.38,5.46,5.55,5.75,5.74,5.74,5.68,'5.70',5.76,5.86,5.89,5.81]
    },
    {
        name: "西班牙",
        type: "line",
        smooth:false,
        symbolSize: "3",
        symbol: 'circle',
        itemStyle: {
            color: "#63cdda",
            color:'#0652DD'
        },
                lineStyle:{
            normal:{
                width:1
            }
        },
        // markPoint: {
        //     label: {
        //         normal: {
        //             textStyle: {
        //                 color: '#fff'
        //             }
        //         }
        //     },
        //     data: [{
        //         type: 'max',
        //         name: '最大值',

        //     }, {
        //         type: 'min',
        //         name: '最小值'
        //     }]
        // },
        // data: [
        //     ,,,0,0,0,0,0,2.49,3.36,6.59,8.62,9.67,10.32,10.42,10.25
        // ]
        data:['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-','-',0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.56,0.81,1.45,1.81,2.77,2.49,2.12,2.25,2.83,2.85,2.36,2.52,3.36,4.39,4.07,4.47,4.47,5.42,6.02,6.59,6.80,7.21,7.28,7.58,7.88,8.28,8.62,8.76,8.86,9.07,9.29,9.42,9.50,9.67,9.82,9.92,10.00,10.09,10.10,10.22,10.32,10.46,10.46,10.46,10.44,10.45,10.44,10.42,10.42,10.42,10.40,10.25,10.24,10.24,10.25,10.26,10.25,10.24,10.36,10.22]
    },
    {
        name: "日本",
        type: "line",
        smooth:false,
        symbolSize: "3",
        symbol: 'circle',
        //smooth: true,
        itemStyle: {
            color: "#c8d6e5",
            color:'#17b978'
        },
                lineStyle:{
            normal:{
                width:1
            }
        },
        // markPoint: {
        //     label: {
        //         normal: {
        //             textStyle: {
        //                 color: '#fff'
        //             }
        //         }
        //     },
        //     data: [{
        //         type: 'max',
        //         name: '最大值',

        //     }, {
        //         type: 'min',
        //         name: '最小值'
        //     }]
        // },
        // data: [,,0,0,0,1.54,0.63,2.19,1.75,3.35,3.68,2.89,2.33,,13.22,13.48
        //     ]
        data:['-','-','-','-','-','-','-','-','-','-','-','-','-','-','-',0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,2.94,2.86,2.04,1.79,1.54,1.35,1.19,3.23,0.97,0.82,0.74,0.63,0.62,0.56,1.93,2.15,2.07,2.34,2.19,2.05,1.84,1.81,1.44,1.59,1.42,1.75,2.07,2.23,2.46,2.90,2.81,2.93,3.35,3.30,3.37,3.45,3.44,3.42,3.72,3.68,3.47,3.44,3.36,3.23,3.02,3.01,2.89,2.87,2.62,2.39,2.41,2.35,2.45,2.33,2.36,2.18,2.01,1.79,1.65,1.60,1.67,1.87,1.80,2.06,2.06,1.94,2.16,2.19,2.36,2.44,2.50,2.65,2.69,2.72,2.77,2.83,2.87,3.04,3.05,3.18,]
    },

    
    
    ]
}
				// var index = 0; //播放所在下标
				// var mTime = setInterval(function() {
				// 	myChart.dispatchAction({
				// 		type: 'showTip',
				// 		seriesIndex: 0,
				// 		dataIndex: index
				// 	});
				// 	index++;
				// 	if(index > data.length) {
				// 		index = 0;
				// 	}
				// }, 1000);
		

