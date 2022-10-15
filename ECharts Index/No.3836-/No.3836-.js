option = {
    series: [{
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        pointer: {
            show: false
        },
        progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
                borderWidth: 1,
                borderColor: '#464646'
            

            }
        },
        axisLine: {

            lineStyle: {
                width: 120
            }
        },
        splitLine: {
            show: false,
            distance: 0,
            length: 10
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            distance: 50
        },
        data: [{
            value: 20,
            name: 'Perfect',
            title: {
                offsetCenter: ['0%', '-50%']
            },
            detail: {
                offsetCenter: ['0%', '-40%']
            }
        },
        {
            value: 40,
            name: 'Good',
            title: {
                offsetCenter: ['0%', '-30%']
            },
            detail: {
                offsetCenter: ['0%', '-20%']
            }
        },
        {
            value: 60,
            name: 'Commonly',
            title: {
                offsetCenter: ['0%', '-10%']
            },
            detail: {
                offsetCenter: ['0%', '0%']
            }
        },
        {
            value: 20,
            name: 'test1',
            title: {
                offsetCenter: ['0%', '10%']
            },
            detail: {
                offsetCenter: ['0%', '20%']
            }
        }, {
            value: 70,
            name: 'test2',
            title: {
                offsetCenter: ['0%', '30%']
            },
            detail: {
                offsetCenter: ['0%', '40%']
            }
        },
        ],
        title: {
            fontSize: 14
        },
        detail: {
            width: 50,
            height: 14,
            fontSize: 14,
            color: 'auto',
            borderColor: 'auto',
            borderRadius: 20,
            borderWidth: 1,
            formatter: '{value}%'
        }
    },{
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        pointer: {
            show: false
        },
        progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
                borderWidth: 1,
                borderColor: '#464646',
              
            

            }
        },
        axisLine: {

            lineStyle: {
                width: 120
            }
        },
        splitLine: {
            show: false,
            distance: 0,
            length: 10
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
            distance: 50
        },
        data: [{
            value: 120,
            name: 'Perfect',
            title: {
                offsetCenter: ['0%', '-50%']
            },
            detail: {
                offsetCenter: ['0%', '-40%']
            }
        },
        {
            value: 40,
            name: 'Good',
            title: {
                offsetCenter: ['0%', '-30%']
            },
            detail: {
                offsetCenter: ['0%', '-20%']
            }
        },
        {
            value: 60,
            name: 'Commonly',
            title: {
                offsetCenter: ['0%', '-10%']
            },
            detail: {
                offsetCenter: ['0%', '0%']
            }
        },
        {
            value: 20,
            name: 'test1',
            title: {
                offsetCenter: ['0%', '10%']
            },
            detail: {
                offsetCenter: ['0%', '20%']
            }
        }, {
            value: 70,
            name: 'test2',
            title: {
                offsetCenter: ['0%', '30%']
            },
            detail: {
                offsetCenter: ['0%', '40%']
            }
        },
        ],
       	markPoint: { //指针中心加一个小白点
						symbol: 'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z',
						symbolSize: 0,
						data: [
							//跟你的仪表盘的中心位置对应上，颜色可以和画板底色一样
							{
								x: '50%',
								y: '20%',
								itemStyle: {
									color: 'red'
								}
							}
						]
					},
        title: {
            fontSize: 14
        },
        detail: {
          show:false
        }
    },           {
               "type": "pie",
              radius: ['92%', '51%'],
               "hoverAnimation": false,
               startAngle: 90,
               endAngle: 0,
               "data": [{
                       "name": "",
                      "value":120,
                       "label": {
                           show: false
                       },
                       "labelLine": {
                           show: false
                       },
                       itemStyle: {
                           color: 'rgba(0,0,0,0)'
                       }
                   },
                   { //画中间的图标
                       "name": "",
                       "value": 0,
                       "label": {
                           position: 'inside',
                           backgroundColor: {
                               image:'data:image/png;base64,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'
                               
                           },
                           borderRadius: 15,
                           padding: 19,
                           borderWidth: 0,
                           borderColor: "red"

                       }
                   }, {
                       "name": "",
                       value: 490,
                       "label": {
                           show: false
                       },
                       "labelLine": {
                           show: false
                       },
                       itemStyle: {
                           color: 'rgba(255,255,255,0)'
                       }
                   }
               ]
           }]
};

setInterval(function () {
    option.series[0].pointer.show = false;
    option.series[0].data[0].value = (220).toFixed(2) - 0;
    option.series[0].data[1].value = (Math.random() * 100).toFixed(2) - 0;
    option.series[0].data[2].value = (Math.random() * 100).toFixed(2) - 0;
    myChart.setOption(option, true);
}, 2000);