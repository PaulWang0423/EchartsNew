var center1 = ['50%', '50%']
var center2 = ['50%', '48%']
option = {
  backgroundColor: "#062a44",
    tooltip: {
        formatter: "{b}{c}"
    },
  series: [
    {
        tooltip:{
            show:false
        },
        "name": 'wrap',
        "type": 'pie',
        "hoverAnimation": false,
        "legendHoverLink": false,
        center:center1,
        "radius": ['0%', '40%'],
        "z": -11,
        "startAngle": -180,
        "label": {
            "normal": {
                "show": false,
                "position": 'center'
            },
            "emphasis": {
                "show": false
            }
        },
        "labelLine": {
            "normal": {
                "show": false
            }
        },
        "data": [{
                "value": 87,
                itemStyle: {
                    normal: {
                        color: "#063194"
                    },
                    emphasis: {
                        color: "#063194"
                    }
                }
            },
            {
                "value": 87,
                "name": '1',
                itemStyle: {
                    normal: {
                        color: "transparent"
                    }
                }
        }]
    },{
        tooltip:{
            show:false
        },
        "name": 'wrap',
        "type": 'pie',
        "hoverAnimation": false,
        "legendHoverLink": false,
        center:center2,
        "radius": ['2%', '2.5%'],
        "z": -10,
        "label": {
            "normal": {
                "show": false,
                "position": 'center'
            },
            "emphasis": {
                "show": false
            }
        },
        "labelLine": {
            "normal": {
                "show": false
            }
        },
        "data": [{
                "value": 87,
                itemStyle: {
                    normal: {
                        color: "#f3cfa7"
                    },
                    emphasis: {
                        color: "#f3cfa7"
                    }
                }
            }]
    },{
        tooltip:{
            show:false
        },
        "name": 'wrap',
        "type": 'pie',
        "hoverAnimation": false,
        "legendHoverLink": false,
        center:center2,
        "radius": ['0%', '1.5%'],
        "z": -9,
        "label": {
            "normal": {
                "show": false,
                "position": 'center'
            },
            "emphasis": {
                "show": false
            }
        },
        "labelLine": {
            "normal": {
                "show": false
            }
        },
        "data": [{
                "value": 87,
                itemStyle: {
                    normal: {
                        color: "#f3cfa7"
                    },
                    emphasis: {
                        color: "#f3cfa7"
                    }
                }
            }]
    },{
        tooltip:{
            show:false
        },
        name: '??????',
        type: 'gauge',
        radius: '20%',
        z:1,
        min:0,
        max:1,
        center:center2,
        splitNumber: 5, //????????????
        startAngle: 180,
        endAngle: 0,
        axisLine: {
          show: true,
          lineStyle: {
            width: 0,
            color: [[0.2, '#FFB820'], [0.9, '#FF5400'], [1, '#02B22B']]
          }
        },//???????????????
        axisLabel: {
          show: false
        },//???????????????
        axisTick: {
          show: true,
          lineStyle: {
            color: 'auto',
            width: 2
          },
          length: -15
        },//????????????
        splitLine: {
          show: true,
          length: 0,
          lineStyle: {
            color: 'auto',
            width: 2
          }
        },//???????????????
        detail: {
          show:false
        },
        pointer: {
          show:false
        }
  },{
    name: '????????????:',
    type: 'gauge',
    radius: '50%',
    min:0,
    max:1,
    center:center2,
    data: [{value: 0.83, name: '????????????:'}],
    splitNumber: 10, //????????????
    startAngle: 185,
    endAngle: -5,
    z:2,
    axisLine: {
      show: true,
      lineStyle: {
        width: 0,
        color: [[0.2, '#FFB820'], [0.9, '#FF5400'], [1, '#02B22B']]
      }
    },//???????????????
    axisLabel: {
      show: true,
      color:'#fff',
      distance:30
    },//???????????????
    axisTick: {
        splitNumber: 10,
      show: true,
      lineStyle: {
        color: 'auto',
        width: 2
      },
      length: -15
    },//????????????
    splitLine: {
      show: true,
      length: -25,
      lineStyle: {
        color: 'auto',
        width: 2
      }
    },//???????????????
   
    "itemStyle": {
        "normal": {
            "color": "red" //????????????
        }
    },
    detail: {
          formatter:'{value}',
      fontSize: 24,
                color: "#02B22B",
      offsetCenter: ['14%', '30%']
    },
    title: {
                offsetCenter: ['-14%', '30%'], // x, y?????????px
                fontWeight: 'bolder',
                fontSize: 24,
                color: "#fff",
                show: true
            },
    pointer: {
        show:true,
                length: '100%',
                width: 3, //????????????
    }
  }
  ]
};