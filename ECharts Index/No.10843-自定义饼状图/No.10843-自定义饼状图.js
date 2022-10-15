option = {
            title: {
              text: '80%',
              x: 'center',
              y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: '#0580f2',
                fontSize: '20'
              }
            },
            color: ['rgba(176, 212, 251, 1)'],
            legend: {
              show: true,
              itemGap: 12,
              data: ['已使用', '未使用']
            },

            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              radius: ['50%', '66%'],
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              hoverAnimation: false,
              data: [{
                value: 80,
                name: '已使用',
                itemStyle: {
                  normal: {
                    color: { // 完成的圆环的颜色
                      colorStops: [{
                        offset: 0,
                        color: '#00cefc' // 0% 处的颜色
                      }, {
                        offset: 1,
                        color: '#367bec' // 100% 处的颜色
                      }]
                    },
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              }, {
                name: '未使用',
                value: 20
              }]
            }]
        };