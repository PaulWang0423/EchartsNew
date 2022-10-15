var option = {
      backgroundColor:'#fff',
      title: {
          text: '案件事项执法结果分析'
      },
      tooltip: {
          trigger: 'axis'
      },
      legend: {
          data: ['案件事项执法结果分析']
      },
      
      radar: {
          indicator: [{
              text: '取缔无证经营',
              max: 20
              
          }, {
              text: '捣毁制假售假窝点',
              max: 20
          }, {
              text: '停业整顿',
              max: 20
          }, {
              text: '吊销许可证',
              max: 20
          }, {
              text: '移交司法机关',
              max: 20
          }],
            radius: 90,
          splitNumber: 7,
          name: {
              textStyle: {
                  color: '#201E1F'
              }
          },
          axisLine: {
              lineStyle: {
                  color: '#B3DBF5',
                  width: 2,
                  type: 'dotted'
              },
          },
          splitLine: {
              lineStyle: {
                  color: ['#B3DBF5', 'transparent', 'transparent', 'transparent'],
                  width: 1
              }
          },
          splitArea: {
              areaStyle: {
                  
                  color: ['#C1C1C1', '#fff']
              }
          }
      },
      series: [{
          type: 'radar',
          tooltip: {
              trigger: 'item'
          },
          symbol: 'circle',
          symbolSize: 5,
          radius:'',
          itemStyle: {
              normal: {
                  areaStyle: {type: 'default'},
                  color: '#48D1CC',
                  borderColor: '#5ac3bd',
                  shadowColor:'rgba(0,0,0,0.5)'
              }
          },
          data: [{
              value: [12, 18, 15, 5, 13],
              name:'案件事项执法结果分析'
          }]
      }, ]
  };