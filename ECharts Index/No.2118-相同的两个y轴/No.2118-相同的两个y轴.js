option = {
    backgroundColor:'rgba(19, 52, 89, .5)',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          backgroundColor: 'rgba(9, 24, 48, 0.5)',
          borderColor: 'rgba(75, 253, 238, 0.4)',
          textStyle: {
            color: '#CFE3FC',
          },
          borderWidth: 1,
          formatter: function (params) {
            let str = ''
            for (let i = 0; i < params.length; i++) {
              if (i == 0) {
                str += `${params[i].name}<br/>${params[i].seriesName.slice(0, params[i].seriesName.indexOf('('))}<br/><span>${params[0].data}</span>%<br/>`;
                continue;
              }
              str += `${params[i].seriesName.slice(0, params[i].seriesName.indexOf('('))}<br/><span>${params[i].data}</span>个<br/>`
            }
            return str
          }
        },
        legend: [
          {
            data: ['办结率(%)'],
            x: '50%',
            top: '25',
            itemStyle: {
              borderWidth: 2
            },
            textStyle: {
              color: '#c1cadf',
              fontSize: 20
            }
          }
        ],
        grid: {
          left: '20px',
          right: '20px',
          top: '50px',
          bottom: '30px',
          containLabel: true
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          x: 'right',
          y: 'center'
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            axisTick: {
              show: false
            },
            data: ['西城区', '顺义区', '朝阳区', '大兴区', '海淀区', '昌平区', '西城区', '东城区', '丰台区'],
            axisLine: {
              lineStyle: {
                color: 'rgba(51, 176, 255, 1)'
              }
            },
            axisLabel: {
              interval: 0,
              color: 'rgba(207, 227, 252, 1)',
              fontSize: 20
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              show: true
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(120, 160, 236, 1)'
              },
              symbol: ['none', 'arrow'],
              symbolSize: [5, 12],
              symbolOffset: [0, 10]
            },
            max: 102,
            axisLabel: {
              interval: 0,
              color: 'rgba(207, 227, 252, 1)'
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(39, 57, 75, 1)',
                width: 1,
                type: 'solid'
              }
            }
          },
          {
            type: 'value',
            axisTick: {
              show: true
            },

            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(207, 227, 252, 1)t'
              },
              symbol: ['none', 'arrow'],
              symbolSize: [5, 12],
              symbolOffset: [0, 10]
            },
            min: 0,
            max: 102,
            axisLabel: {
              interval: 0,
              color: 'rgba(207, 227, 252, 1)',
              formatter: '{value}'
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(39, 57, 75, 1)',
                width: 1,
                type: 'solid'
              }
            }
          }
        ],
        series: [
          {
            name: '办结率(%)',
            yAxisIndex: 1,
            type: 'line',
            smooth: true,

            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(98, 227, 255, 1)'
                },
                {
                  offset: 1,
                  color: 'rgba(98, 227, 255, 0)'
                }
              ])
            },
            data: [30, 50, 53, 42, 66, 71, 20, 80, 20],
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: '#FFFFFF',
                borderColor: 'rgba(0, 255, 240, 1)',
                lineStyle: {
                  color: 'rgba(0, 255, 240, 1)'
                }
              }
            }
          },
          {
            type: 'bar',

            yAxisIndex: 0,
            name: '问题个数(个)',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(232, 98, 32, 1)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(232, 98, 32, 0)'
                    }
                  ],
                  false
                )
              }
            },
            barWidth: 24,
            data: [0]
          },
        ]
  }