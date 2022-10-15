function fontSize(res) {
  var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  if (!clientHeight) return;
  var fontSize = 100 * (clientHeight / 1080);
  return res * fontSize;
}

option = {
        grid: {
          show: false,
          top: 10,
          bottom: 0,
          left: 0,
          right: 10,
          containLabel: true
        },
        title: {
          text: ['{span|}'].join(''),
          bottom: 'center',
          left: 'center',
          textStyle: {
            rich: {
              span: {
                backgroundColor: {
                  image: 'data:image/png;base64,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'
                },
                color: "#F9AF2F",
                width: 600,
                height: 600,
                borderRadius: 50,
                fontSize: fontSize(0.38),
                align: 'center',
                verticalAlign: 'middle',
                lineHeight: 74,
                padding: [0, 0, 0, 0]
              }
            }
          }
        },
        tooltip: {
          backgroundColor: 'rgba(50,50,50,0.7)',
          borderColor: '#333',
          show: true,
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          textStyle: {
            fontSize: fontSize(0.12),
            color: '#fff',
          },
        },
        radar: {
          // #989dde
          splitArea: {
            show: false,
          },
          axisLine: {
            symbol: ['none', "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABJklEQVRYR2NkGGDAOMD2M4w6YDQERkNgNARGQ2BohMCP07qesDqDmYnxP3L98Re9MoEKMLMw/GY1urSXUF1DVAj8OGukwsjw9wDDfwZpQgZC5Vexm1wMJ0YtUQ4AGfT7jL7NPwbGAwwM/5nxGfz/P+MhdpMLDoyMDCghhUsP0Q4AGfDznGEIw79/q3E64D/DrT+MLA7cJmefE+N7kBqSHADS8OOMfi4jA8MkdAsYGRg+/v7P4MhtevE8sZaT5QBwSJzWa2VgZKxCtoiJ8b8nq/GlHaRYTrYDII7Qn8vAyJAENoSRMZHN+MICUi2nyAFgR5zR28rAwHiY3eRiBzmWU+yA/0fUeRltbn4m13KKHUCJxTC9JOcCaliKbMaoA0ZDYDQERkMAAHg1PyFffEsJAAAAAElFTkSuQmCC"],
            symbolSize: [30, 30],
            symbolOffset: [12, 12]
          },
          splitLine: false,
          indicator: [{
              name: '完整性管理方案',
              max: 6500
            },
            {
              name: '数据收集与管理',
              max: 16000
            },
            {
              name: '单元识别管理',
              max: 30000
            },
            {
              name: '风险评价与管理',
              max: 38000
            },
            {
              name: '智能决策',
              max: 52000
            },
            {
              name: '风险控制',
              max: 25000
            }
          ]
        },

        series: [{
          name: '',
          type: 'radar',
          data: [{
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: '预算分配（Allocated Budget）',
              itemStyle: {
                color: "#fff",
              },
              lineStyle: {
                color: 'rgba(128, 128, 128, 0.5)'
              }
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: '实际开销（Actual Spending）',
              itemStyle: {
                color: "#fff",
              },
              lineStyle: {
                color: 'rgba(128, 128, 128, 0.5)'
              }
            },
            {
              value: [6500, 16000, 30000, 38000, 52000, 25000],
              name: '',
              itemStyle: {
                opacity: 0
              },
              lineStyle: {
                color: '#989dde'
              }
            }
          ]
        }]
      }
