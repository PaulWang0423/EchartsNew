 var option = {
     backgroundColor:'#323a5e',
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' ,// 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '2%',
          right: '4%',
          bottom: '14%',
          top:'16%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['2013','2014','2015','2016','2017','2018','2019'],
          axisTick: {
            show: false
        },
          axisLine: {
            lineStyle: {
              color: '#25c3da'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
          },
        },

        yAxis: {
            name:'数量',
          type: 'value',
        axisTick: {
            show: false
        },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#25c3da'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
                color: '#2c3d89',
                type: 'dotted',
            }
        },
          axisLabel: {
              textStyle: {
              color: '#fff'
            }
          }
        },
        
        "dataZoom": [{
          "show": true,
          "height": 8,
          "xAxisIndex": [
            0
          ],
          bottom:'8%',
          "start": 10,
          "end": 90,
          handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
          handleSize: '110%',
          handleStyle:{
            color:"#d3dee5",

          },
          textStyle:{
            color:"#fff"},
          borderColor:"#90979c"
        }, {
          "type": "inside",
          "show": true,
          "height": 15,
          "start": 1,
          "end": 35
        }],
        series: [{
          name: '数量',
          type: 'bar',
          barWidth: '20%',
          itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#8efbff'
                }, {
                    offset: 1,
                    color: '#4b85fb'
                }]),
                barBorderRadius: [12,12,0,0],
            },
          },
          data: [400, 400, 300, 300, 300, 400, 400]
        },
        ]
      };

      var app = {
        currentIndex: -1,
      };
      setInterval(function () {
        var dataLen = option.series[0].data.length;

        // 取消之前高亮的图形
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: app.currentIndex
        });
        app.currentIndex = (app.currentIndex + 1) % dataLen;
        //console.log(app.currentIndex);
        // 高亮当前图形
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: app.currentIndex,
        });
        // 显示 tooltip
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: app.currentIndex
        });


      }, 1000);