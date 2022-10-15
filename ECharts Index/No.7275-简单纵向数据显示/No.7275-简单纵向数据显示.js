    var gain = 0.9;
    var gap = 0;
    var myColor=['#e63810','#ff6b00','#e3b61f','#13b5b1'];
    
    
    var data = [8, 15, 10,6];
    var option = {
            grid: {
                left: '3%',
                top:'10%',
                right: '2%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: [{
                    type: 'category',
                    axisTick: {
                        show: false
                    },splitLine: {
                        show: false
                    },
                    axisLine:{
                                  lineStyle:{
                                      color:'rgba(160,160,160,0.3)',
                                  }
                              },
                    axisLabel:{
                        textStyle:{
                            color:function(param,index){
                                return myColor[index]
                            },
                            fontSize:14*gain,
                        }
                    },
                    data: ['橙子','苹果','香蕉','菠萝']
                }, {
                    type: 'category',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    splitArea: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    data: []
                },
            ],
            yAxis: {
                type: 'value',
                name:'单位：个',
                nameGap:35+gap,
                 show:false,
                nameTextStyle:{
                    color:'#ffffff',
                    fontSize:16*gain,
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                   show:false
                },
                axisLabel: {
                    textStyle: {
                        color: 'rgba(255,255,255,0.8)',
                        fontSize:14*gain,
                    }
                }
            },
            series: [{
                    type: 'bar',
                    xAxisIndex: 1,
                    animation:false,
                    itemStyle: {
                         normal: {
                            show: true,
                            color:'rgba(0,0,0,0.2)' ,
                            barBorderRadius: 0,
                            borderWidth: 0,
                            borderColor: '#333',
                        }
                    },
                    label:{
                        normal:{
                           show:true,
                           formatter: function(params) {
                            var stuNum = 0;
                            data.forEach(function(value, index, array) {
                                if (params.dataIndex == index) {
                                   stuNum = value;
                                }
                            })
                            return stuNum ;
                          },
                          position: 'top',
                          textStyle:{
                              color:function(params) {
                                var num=myBgColor.length;
                                return myBgColor[params.dataIndex%num]
                            },
                              fontSize:25*gain,
                          }
                        }
                    },
                    barWidth: '25%',
                    data: [33, 33, 33,33]
                }, 
                {
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            show: true,
                            color: function(params) {
                                var num=myColor.length;
                                return myColor[params.dataIndex%num]
                            },
                            borderWidth: 0,
                            borderColor: '#333',
                        }
                    },
                    label: {
                        normal: {
                            show: false,

                        }
                    },
                    barWidth: '25%',
                    data: data
                }
            ],
    };