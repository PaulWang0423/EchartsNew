option = {
                   title: {
                       top: 13,
                       left: 'center',
                       text: '饮水安全工程供水保障率（地州）'
                   },
                   tooltip: {
                       trigger: 'axis',
                       axisPointer: {
                           type: 'shadow'
                       },
                       formatter:"{b}供水保障率:{c}%"
                   },
                   legend: {
                       bottom: 13,
                       left: 'center',
                       data: ['供水保障率'],
                       textStyle: {
                           color: '#ffffff'          // 主标题文字颜色
                       }
                   },
                   grid: {
                       left: '3%',
                       right: '3%',
                       bottom: '8%',
                       top:'13%',
                       containLabel: true
                   },
                   xAxis: {
                       show:false,
                       type: 'value',
                       min: 0,
                       max: 100,
                       boundaryGap: [0, 0.01],
                       axisLabel: {
                           formatter: '{value} %',
                           textStyle: {
                               fontSize: '15'}

                       }
                   },
                   yAxis: {
                       type: 'category',
                       axisLine: {
                           show: false,
                           lineStyle: {
                               color: '#32346c',
                           }
                       },
                       splitLine: {
                           show: false,
                           lineStyle: {
                               color: '#32346c ',
                           }
                       }, axisTick: {
                           show: false,
                           lineStyle: {
                               color: '#32346c ',
                           }
                       },
                       axisLabel: {
                           // rotate:40,
                           show: true,
                           textStyle: {
                               fontSize: '12'
                           }
                       },
                       data: ["巴州", "喀什地区", "伊犁州", "和田地区", "克拉玛依市", "昌吉州", "克州", "哈密市", "乌鲁木齐市", "吐鲁番市", "阿勒泰地区", "塔城地区", "阿克苏地区", "博州"]
                   },
                   series: [
                       {
                           name: '供水保障率',
                           type: 'bar',
                           zlevel: 2,
                           data: [ 15,20,40,50,54.5,55,61,  62, 63,65, 67.5,69,70,85],
                           barWidth: 14,
                           label: {
                               normal: {
                                   show: true,
                                   position: 'right',
                                   offset: [5, 0],
                                   textStyle: {
                                       color: '#F68300',
                                       fontSize: 13
                                   },
                                   formatter: function(params) {
                                       console.log(params);
                                       if(params.value){
                                           return params.value + '%'
                                       }else{
                                           return '';
                                       }
                                   }
                               }

                           },
                           itemStyle: {
                               emphasis: {
                                   barBorderRadius: 7
                               },
                               normal: {
                                   barBorderRadius: 7,
                                   color: new echarts.graphic.LinearGradient(
                                       0, 0, 1, 0,
                                       [
                                           {offset: 0, color: '#1748F5'},
                                           {offset: 1, color: '#37BBF8'}

                                       ]
                                   )
                               }
                           }
                       },{
                           name: '供水保障率',
                           zlevel: 1,
                           type: 'bar',
                           barGap: '-100%', // Make series be ove
                           data: [100,100,100,100,100,100,100,100,100,100,100,100,100,100],
                           barWidth: 14,
                           itemStyle: {
                               normal: {
                                   barBorderRadius: 7,
                                   color: 'rgba(0,0,0,0.3)'
                               }
                           }
                       }
                   ]
               }