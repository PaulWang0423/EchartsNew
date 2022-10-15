



var data =[{
        count: 17,
        name: '张三'
      },{
        count: 21,
        name: '李四'
      },{
        count: 27,
        name: '赵五'
      },{
        count: 37,
        name: '钱二'
      },{
        count: 47,
        name: '周大'
      },{
        count: 57,
        name: '王六'
      },{
        count: 67,
        name: '李狗子'
      },{
        count: 87,
        name: '王大爷'
      },{
        count: 43,
        name: '杨杨'
      },{
        count: 87,
        name: '野啊'
      }]
      
const size = 20; //节点大小
      const iconRed = 'image://data:image/png;base64,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'
      const iconGreen = 'image://data:image/png;base64,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'
      const iconCenter = 'image://data:image/png;base64,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'
      // const icon = 'image://../../../../../assets/icons/person-red.png'
      let listdata = []; 
      let links = []; 
      // 中心点
      listdata.push({
          x: 50,
          y: 100,
          "name": 'username',
          "showName": '钟南山',
          "symbol": iconCenter,
          "symbolSize": 30,
          "category": 3,
          "draggable": "false",
          formatter: function(params) {
              return params.data.showName
          },
          label:{
              position: 'bottom',
              color: 'red'
          }
      });
      // 支点
      const list = data
      for (let i=0; i<list.length; i++) {
          listdata.push({
              x: i * 50,
              y: size + i * 10,
              "name": list[i].name,
              "showName": list[i].name,
              "symbol": i%2 ==0 ? iconRed : iconGreen,
              "symbolSize": size,
              "category": 2,
              "draggable": "false",
              formatter: function(params) {
                  return params.data.showName
              },
              label:{
                  position: 'bottom'
              }
          });
      }
      // link 
      for (let i=0; i<list.length; i++) {
        links.push({
            "source": list[i].name,
            "target": "username",
            "value":list[i].count,
            lineStyle: {
                normal: {
                    color: '#d0d0d0'
                }
            }
        });
      }
      console.log(JSON.stringify(listdata))
      console.log(JSON.stringify(links))
option = {
    series: [{
              type: 'graph',
              layout: 'force',
              force: {
                  repulsion: 80,
                  gravity: 0,
                  edgeLength: 150,
                  layoutAnimation: true,
              },
              data: listdata,
              links: links,
              nodeScaleRatio: 0,
              focusNodeAdjacency: false,
              lineStyle: {
                  normal: {
                      color: '#000000',
                      opacity: 0.5,
                      width: 1.5,
                      curveness: 0.2
                  }
              },
              label: {
                  normal: {
                      show: true,
                      position: 'inside',
                      textStyle: {
                          color: '#000000',
                          fontWeight: 'normal',
                          fontSize: "12" //字体大小
                      },
                      formatter: function(params) {
                          return params.data.showName || '--'
                      },
                      fontSize: 18,
                      fontStyle: '600',
                  }
              },
              edgeLabel: {
                  normal: {
                      show: true,
                      textStyle: {
                          fontSize: 12
                      },
                      formatter: "{c}"
                  }
              }
          }]
};