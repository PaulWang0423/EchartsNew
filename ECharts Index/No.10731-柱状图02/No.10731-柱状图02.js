option = {
                backgroundColor: '#0c1e55',

   color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
        lineStyle: {
          opacity: 0
        }
      },
      formatter: function (prams) {
        if (prams[0].data === 0) {
          return "合格率：0"
        } else {
          return "合格率：" + prams[0].data 
        }
      }
    },
    legend: {
      data: ['直接访问', '背景'],
      show: false
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '5%',
      top: '7%',
      containLabel: true,
      z: 22
    },
    xAxis: [{
      type: 'category',
      gridIndex: 0,

      data: ['合肥市', '六安市', '淮南市', '淮北市', '芜湖市', '宿州市', '池州市', '马鞍山市','安庆市', '黄山市'],
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#19347b'

        }
      },
      axisLabel: {
        interval: 0,
             formatter: function (value) {
          return (value.length > 6 ? (value.slice(0,6)+"...") : value )
        },
        rotate: 45,
        color: '#7cb4d8',
        margin: 10,
        textStyle: {
          fontSize: 14
        }
      }
    }],
    yAxis: [{
      type: 'value',
      //   name: "单位:户",
      nameTextStyle: {
        color: "rgb(170,170,170)"
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#19347b'

        }
      },
      gridIndex: 0,
      splitLine: {
        show: true,
        lineStyle: {
          color: '#102459'
        }
      },
      axisLabel: {
        formatter: '{value}',
        color: '#7cb4d8',
        margin: 10,
        textStyle: {
          fontSize: 14
        }
      }
    },
    {
      type: 'value',
      gridIndex: 0,
      min: 0,
      max: 100,
      splitNumber: 12,
      splitLine: {
        show: false
      },
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
        show: false,
        areaStyle: {
          color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
        }
      }
    }
    ],
    series: [{
      name: '合格率',
      type: 'bar',
      legendHoverLink: true,
      xAxisIndex: 0,
      yAxisIndex: 0,
      itemStyle: {
        normal: {
          barBorderRadius: [0, 0, 0, 0],
          color: "#4dddda"
        }
       
      },
      barWidth: 14,
      data: [20, 69, 56, 34, 45, 56, 67, 67, 87, 45],
      zlevel: 11
    },
      // {
      //   name: '背景',
      //   type: 'bar',
      //   barWidth: '50%',
      //   xAxisIndex: 0,
      //   yAxisIndex: 1,
      //   barGap: '-135%',
      //   data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
      //   itemStyle: {
      //     normal: {
      //       color: 'rgba(255,255,255,0.1)'
      //     }
      //   },
      //   zlevel: 9
      // },

    ]
};
