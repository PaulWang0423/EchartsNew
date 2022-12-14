//ecStat 是 ECharts 的统计扩展，需要额外添加扩展脚本，参加上方“脚本”
// 详情请移步 https://github.com/ecomfe/echarts-stat
// 图中的曲线是通过多项式回归拟合出的

 var data = [
     [96.24, 11.35],
     [33.09, 85.11],
     [57.60, 36.61],
     [36.77, 27.26],
     [20.10, 6.72],
     [45.53, 36.37],
     [110.07, 80.13],
     [72.05, 20.88],
     [39.82, 37.15],
     [48.05, 70.50],
     [0.85, 2.57],
     [51.66, 63.70],
     [61.07, 127.13],
     [64.54, 33.59],
     [35.50, 25.01],
     [226.55, 664.02],
     [188.60, 175.31],
     [81.31, 108.68]
 ];

 var myRegression = ecStat.regression('polynomial', data, 3);

 myRegression.points.sort(function(a, b) {
     return a[0] - b[0];
 });

 myChart.setOption({

     tooltip: {
         trigger: 'axis',
         axisPointer: {
             type: 'cross'
         }
     },
     title: {
         text: '18 companies net profit and main business income (million)',
         left: 'center',
         top: 16
     },
     xAxis: {
         type: 'value',
         splitLine: {
             lineStyle: {
                 type: 'dashed'
             }
         },
         splitNumber: 20
     },
     yAxis: {
         type: 'value',
         min: -40,
         splitLine: {
             lineStyle: {
                 type: 'dashed'
             }
         }
     },
     series: [{
         name: 'scatter',
         type: 'scatter',
         label: {
             emphasis: {
                 show: true
             }
         },
         data: data
     }, {
         name: 'line',
         type: 'line',
         smooth: true,
         showSymbol: false,
         data: myRegression.points,
         markPoint: {
             itemStyle: {
                 normal: {
                     color: 'transparent'
                 }
             },
             label: {
                 normal: {
                     show: true,
                     position: 'left',
                     formatter: myRegression.expression,
                     textStyle: {
                         color: '#333',
                         fontSize: 14
                     }
                 }
             },
             data: [{
                 coord: myRegression.points[myRegression.points.length - 1]
             }]
         }
     }]
 });