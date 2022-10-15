   var timeData = ['19/05/01','19/05/02','19/05/03','19/05/04','19/05/05','19/05/06','19/05/07','19/05/08','19/05/09','19/05/10','19/05/11','19/05/12','19/05/13','19/05/14','19/05/15','19/05/16','19/05/17','19/05/18','19/05/19','19/05/20',];  
          var zlval = [57492.65,53458.05,58951.34,64631.67,64374.3,57095.65,57042.06,58435.28,64203.55,60638.24,59244.41,64278.32,64448.12,63430.44,68069.06,61687.29,61591.04,57748.3,61949.49,34972.62,];  
          var kmval = [16976.55,14275.59,15270.09,18635.24,16158.63,13241.11,15610.96,19134.92,25396.83,21978.71,21232.76,21424.99,21312.14,20202.97,20930.19,19473.23,18110.38,15994.1,19138.44,10839.12,];  
          var mmval = [18078.71,17916.51,19818.26,19980.89,23390.32,22876.51,20826.65,20504.32,17772.05,19628.78,19081.35,21570.31,19606.94,18729.04,23419.59,19913.59,19604.15,19206.21,18550.06,8877.72,];  
          var dmval = [22437.39,21265.95,23862.99,26015.54,24825.35,20978.03,20604.45,18796.04,21034.67,19030.75,18930.3,21283.02,23529.04,24498.43,23719.28,22300.47,23876.51,22547.99,24260.99,15255.78,];  
          var wxkmval = [15868.37,12812.51,14248.04,17889.1,15255.32,12762.35,14569.58,18192.69,23118.31,21082.39,19896.25,20625.97,19983.59,18608.99,19979.66,18530.14,16540.81,15283.02,17933.54,10494.33,];  
          var nxkmval = [5750.28,7067.7,5802.11,7777.67,8037.79,8273.78,4851.73,4646.49,4454.77,6482.33,2649.31,4717.12,5916.44,2307.07,8337.31,6504.71,5558.03,4465.62,4060.84,1362.29,];  
          var wxmmval = [12328.43,10848.81,14016.15,12203.22,15352.53,14602.73,15974.92,15857.83,13317.28,13146.45,16432.04,16853.19,13690.5,16421.97,15082.28,13408.88,14046.12,14740.59,14489.22,7515.43,];  
          var nxmmval = [5750.28,7067.7,5802.11,7777.67,8037.79,8273.78,4851.73,4646.49,4454.77,6482.33,2649.31,4717.12,5916.44,2307.07,8337.31,6504.71,5558.03,4465.62,4060.84,1362.29,];  
          var wxval = [28196.8,23661.32,28264.19,30092.32,30607.85,27365.08,30544.5,34050.52,36435.59,34228.84,36328.29,37479.16,33674.09,35030.96,35061.94,31939.02,30586.93,30023.61,32422.76,18009.76,];  
          var nxval = [29295.85,29796.73,30687.15,34539.35,33766.45,29730.57,26497.56,24384.76,27767.96,26409.4,22916.12,26799.16,30774.03,28399.48,33007.12,29748.27,31004.11,27724.69,29526.73,16962.86,];  
     option = {  
          title: { text: '2019-05-01至2019-05-20 煤炭销售走势图', subtext: '', x: 'lift' },  
          tooltip: { trigger: 'axis', axisPointer: { animation: false } },  
          legend: { data:['总量','块煤','面煤','电煤','外销块煤','内销块煤','外销面煤','内销面煤','外销','内销'], x:'left', y:'30%', orient: 'vertical' },  
          axisPointer: { link: {xAxisIndex: 'all'} },  
          dataZoom: [  { show: true, realtime: true, start: 0, end: 100, xAxisIndex: [0, 1] },{ type: 'inside', realtime: true, start: 0,end: 100, xAxisIndex: [0, 1] } ],    
          grid: [ { left: '8%', right: 50, height: '35%' }, { left: '8%',  right: 50, top: '55%', height: '35%' }],  
          xAxis : [ { type : 'category', data: timeData }, { gridIndex: 1, type : 'category',  axisLine: {onZero: true}, data: timeData, position: 'bottom' } ],  
          yAxis : [{  name : '销售数量(吨)',type : 'value',  }, { gridIndex: 1, name : '销售数量(吨)',  type : 'value',  }],  
     series : [  
          { name:'总量', type:'line', label: { normal: { show: true, position: 'bottom'}}, symbolSize: 8, hoverAnimation: false,data: zlval,markLine: { data: [ {type: 'average', name: '平均值'}]}, markPoint: {data: [{type: 'max',name: '最大值',symbolSize:80},{type: 'min',name: '最小值',symbolSize:50}],itemStyle:{normal:{color:'#d0648a'}}}, }, 
          { name:'块煤', type:'bar', symbolSize: 8, hoverAnimation: false, data:kmval },  
          { name:'面煤', type:'bar', symbolSize: 8, hoverAnimation: false, data:mmval },  
          { name:'电煤', type:'bar', symbolSize: 8, hoverAnimation: false, data:dmval },  
          { name:'外销块煤',type:'bar',xAxisIndex: 1,yAxisIndex: 1,data: wxkmval },  
          { name:'内销块煤', type:'bar', xAxisIndex: 1, yAxisIndex: 1, data: nxkmval },  
          { name:'外销面煤', type:'bar', xAxisIndex: 1, yAxisIndex: 1, data: wxmmval },  
          { name:'内销面煤', type:'bar', xAxisIndex: 1, yAxisIndex: 1, data: nxmmval },  
          { name:'外销', type:'line', xAxisIndex: 1, yAxisIndex: 1, data: wxval },   
          { name:'内销', type:'line', xAxisIndex: 1, yAxisIndex: 1, data: nxval }]};   