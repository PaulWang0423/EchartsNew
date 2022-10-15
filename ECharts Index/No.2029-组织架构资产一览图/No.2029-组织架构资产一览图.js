option={
    name:'组织架构资产一览图',
    //提供数据视图、还原、下载的工具
    toolbox: {
      show : true,
      feature : {
        mark : {show: true},
        // dataView : {show: true, readOnly: false},
        restore : {show: true},
        saveAsImage : {show: true}
      }
    },
    tooltip : {
        show: false,
        trigger: 'item',
        formatter: "{b}: {c}"
    },
    series: [
      {
        name: "组织架构一览图",
        type: "tree",
        orient: "horizontal", //竖向或水平   TB代表竖向  LR代表水平
        edgeShape:'curve', //控制折线的形式
        top: '10%',
        initialTreeDepth: 10,  //树图初始展开的层级（深度）
        expandAndCollapse: true,   //点击节点时不收起子节点，default: true
        symbolSize: [135, 42],
        itemStyle: {
          color: 'transparent',
          borderWidth: 0,
        },
        lineStyle: {
          color: '#D5D5D5',
          width: 1,
          // curveness: 0.7,
        },
        animationDuration: 0, //防止图片第一次加载不显示
        data: [
          {
          name: "xxxx科技有限公司",
          symbol:'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAyCAYAAAAA9rgCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3QkMzRkE4QUEwQUYxMUVBOUZEREI0QzdBNDdFMjJDQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3QkMzRkE4QkEwQUYxMUVBOUZEREI0QzdBNDdFMjJDQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdCQzNGQTg4QTBBRjExRUE5RkREQjRDN0E0N0UyMkNBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdCQzNGQTg5QTBBRjExRUE5RkREQjRDN0E0N0UyMkNBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ya4ogQAACBpJREFUeNrsWdtvFFUY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',
          symbolSize: [60, 40],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "#157eff"
                },
                {
                  offset: 1,
                  color: "#35c2ff"
                }
              ])
            }
          },
          label: {
              position: 'bottom',
              backgroundColor: '#F4F4F4',
              borderRadius: [0, 0, 5, 5],
              formatter: [
                '{first|xxxx科技有限公司}',
                '{second|成立时间：2009年\n注册地：深圳}',
              ].join('\n'),
              rich: {
                first: {
                  backgroundColor: '#078E34',
                  color: '#fff',
                  align: 'center',
                  width: 135,
                  height: 30,
                  borderRadius: [5, 5, 0, 0],
                },
                second: {
                  color: '#888',
                  align: 'center',
                  lineHeight: 17,
                },
              }
            },
          children: [
                {
                    name:'xxxx销售一部',
                    value:4,
                    label: {
                      formatter: [
                        '{first|销售一部}',
                      ].join('\n'),
                      rich: {
                        first: {
                          backgroundColor: '#3AC082',
                          color: '#fff',
                          align: 'center',
                          width: 116,
                          height: 42,
                          borderRadius: 5,
                        },
                      }
                    },
                    children: [
                        {
                          label: {
                          backgroundColor: '#F4F4F4',
                          borderRadius: [0, 0, 5, 5],
                          formatter: [
                            '{first|192.168.1.13}',
                            '{second|状态：未确认}',
                          ].join('\n'),
                          rich: {
                            first: {
                              backgroundColor: '#FF6C6A',
                              color: '#fff',
                              align: 'center',
                              width: 116,
                              height: 30,
                              borderRadius: [5, 5, 0, 0],
                            },
                            second: {
                              color: '#888',
                              align: 'center',
                              lineHeight: 17,
                            },
                          }
                        },
                      },
                        {
                          label: {
                          backgroundColor: '#F4F4F4',
                          borderRadius: [0, 0, 5, 5],
                          formatter: [
                            '{first|192.168.1.15}',
                            '{second|状态：未确认}',
                          ].join('\n'),
                          rich: {
                            first: {
                              backgroundColor: '#FF6C6A',
                              color: '#fff',
                              align: 'center',
                              width: 116,
                              height: 30,
                              borderRadius: [5, 5, 0, 0],
                            },
                            second: {
                              color: '#888',
                              align: 'center',
                              lineHeight: 17,
                            },
                          }
                        },
                      },
                        {
                          label: {
                          backgroundColor: '#F4F4F4',
                          borderRadius: [0, 0, 5, 5],
                          formatter: [
                            '{first|192.168.1.12}',
                            '{second|状态：已确认\n数据库总数：3个\n表总数：21个}',
                          ].join('\n'),
                          rich: {
                            first: {
                              backgroundColor: '#3AC082',
                              color: '#fff',
                              align: 'center',
                              width: 116,
                              height: 30,
                              borderRadius: [5, 5, 0, 0],
                            },
                            second: {
                              color: '#888',
                              align: 'center',
                              lineHeight: 17,
                            },
                          }
                        },
                      },
                        {
                          label: {
                          backgroundColor: '#F4F4F4',
                          borderRadius: [0, 0, 5, 5],
                          formatter: [
                            '{first|192.168.1.16}',
                            '{second|状态：未确认}',
                          ].join('\n'),
                          rich: {
                            first: {
                              backgroundColor: '#FF6C6A',
                              color: '#fff',
                              align: 'center',
                              width: 116,
                              height: 30,
                              borderRadius: [5, 5, 0, 0],
                            },
                            second: {
                              color: '#888',
                              align: 'center',
                              lineHeight: 17,
                            },
                          }
                        },
                      },
                    ]
                },
                {
                    label: {
                      formatter: [
                        '{first|销售二部}',
                      ].join('\n'),
                      rich: {
                        first: {
                          backgroundColor: '#3AC082',
                          color: '#fff',
                          align: 'center',
                          width: 116,
                          height: 42,
                          borderRadius: 5,
                        },
                      }
                    },
                    
                },
                {
                    label: {
                      formatter: [
                        '{first|研发部}',
                      ].join('\n'),
                      rich: {
                        first: {
                          backgroundColor: '#3AC082',
                          color: '#fff',
                          align: 'center',
                          width: 116,
                          height: 42,
                          borderRadius: 5,
                        },
                      }
                    },
                },
                {
                    label: {
                      formatter: [
                        '{first|人资部}',
                      ].join('\n'),
                      rich: {
                        first: {
                          backgroundColor: '#3AC082',
                          color: '#fff',
                          align: 'center',
                          width: 116,
                          height: 42,
                          borderRadius: 5,
                        },
                      }
                    },
                },
                {
                    label: {
                      formatter: [
                        '{first|财务部}',
                      ].join('\n'),
                      rich: {
                        first: {
                          backgroundColor: '#3AC082',
                          color: '#fff',
                          align: 'center',
                          width: 116,
                          height: 42,
                          borderRadius: 5,
                        },
                      }
                    },
                },
            ]
        }]
      }
    ]
}