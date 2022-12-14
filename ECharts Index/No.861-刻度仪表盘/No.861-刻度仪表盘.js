option = {
  backgroundColor: "#062a44",
  series: [{
    name: '刻度',
    type: 'gauge',
    radius: '90%',
    min:0,
    max:1000,
    splitNumber: 10, //刻度数量
    startAngle: 220,
    endAngle: -40,
    axisLine: {
      show: true,
      lineStyle: {
        width: 1,
        color: [[1,'rgba(0,0,0,0)']]
      }
    },//仪表盘轴线
    axisLabel: {
      show: true,
      color:'#fff',
      distance:30
    },//刻度标签。
    axisTick: {
      show: true,
      lineStyle: {
        color: '#fff',
        width: 1
      },
      length: -8
    },//刻度样式
    splitLine: {
      show: true,
      length: -20,
      lineStyle: {
        color: '#fff'
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


      type: 'gauge',
      radius: '80%',
      center: ['50%', '50%'],

      splitNumber: 0, //刻度数量
      startAngle: 220,
      endAngle: -40,
      axisLine: {
        show: true,
        lineStyle: {
          width: 20,
          color: [
            [
              0.98, new echarts.graphic.LinearGradient(
              0, 0, 1, 0, [{
              offset: 0,
              color: '#ae3df6'
            },
              {
                offset: 1,
                color: '#53bef9'
              }
            ]
              )
            ],
            [
              1, '#222e7d'
            ]
          ]
        }
      },
      //分隔线样式。
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      pointer: {
        show: false
      },
      title: {
        show: true,
        offsetCenter: [0, '-20%'], // x, y，单位px
        textStyle: {
          color: '#ddd',
          fontSize: 50
        }
      },
      //仪表盘详情，用于显示数据。
      detail: {
        show: true,
        offsetCenter: [0, 0],
        color: '#ddd',
        formatter: function(params) {
      return params
    },
    textStyle: {
      fontSize: 40
    }
    },
    data: [{
    name: "当前用户总数",
    value: 9800
    }]
  }
  ]
};