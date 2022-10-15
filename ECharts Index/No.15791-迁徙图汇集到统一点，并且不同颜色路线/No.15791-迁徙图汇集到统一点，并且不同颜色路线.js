  var breakProvince = '辽宁省';
  var myHosName = '广东省';
  option = null;
  var geoCoordMap = {
      '北京': [116.24, 39.55],
      '重庆': [106.54, 29.59],
      '福建': [119.18, 26.05],
      '甘肃': [103.51, 36.04],
      '广州': [113.14, 23.08],
      '广西': [108.19, 22.48],
      '贵州': [106.42, 26.35],
      '海南': [110.20, 20.02],
      '河北': [114.30, 38.02],
      '河南': [113.40, 34.46],
      '黑龙江': [128.36, 45.44],
      '湖北': [112.27, 30.15],
      '湖南': [112.59, 28.12],
      '吉林': [125.19, 43.54],
      '江苏': [118.46, 32.03],
      '江西': [115.55, 28.40],
      '辽宁': [123.25, 41.48],
      '内蒙古': [108.41, 40.48],
      '宁夏': [106.16, 38.27],
      '青海': [101.48, 36.38],
      '山东': [118.00, 36.40],
      '山西': [112.33, 37.54],
      '陕西': [108.57, 34.17],
      '上海': [121.29, 31.14],
      '四川': [104.04, 30.40],
      '天津': [117.12, 39.02],
      '西藏': [91.08, 29.39],
      '新疆': [87.36, 43.45],
      '云南': [102.42, 25.04],
      '浙江': [120.10, 30.16],
      '澳门': [115.07, 21.33],
      '台湾': [121.21, 23.53],
      "香港": [114.21, 22.5],
      "安徽": [117.21, 33.4],

  };

  var BJData = [
      [{
          'name': '广州'
      }, {
          'name': '贵州',
          'value': 119
      }],
      [{
          'name': '广州'
      }, {
          'name': '新疆',
          'value': 61
      }],
      [{
          'name': '广州'
      }, {
          'name': '安徽',
          'value': 175
      }],
      [{
          'name': '广州'
      }, {
          'name': '福建',
          'value': 57
      }],
      [{
          'name': '广州'
      }, {
          'name': '河南',
          'value': 133
      }],
      [{
          'name': '广州'
      }, {
          'name': '甘肃',
          'value': 139
      }],
      [{
          'name': '广州'
      }, {
          'name': '重庆',
          'value': 53
      }],
      [{
          'name': '广州'
      }, {
          'name': '云南',
          'value': 57
      }],
      [{
          'name': '广州'
      }, {
          'name': '宁夏',
          'value': 42
      }],
      [{
          'name': '广州'
      }, {
          'name': '湖南',
          'value': 213
      }],
      [{
          'name': '广州'
      }, {
          'name': '山西',
          'value': 77
      }],
      [{
          'name': '广州'
      }, {
          'name': '吉林',
          'value': 42
      }],
      [{
          'name': '广州'
      }, {
          'name': '辽宁',
          'value': 31
      }],
      [{
          'name': '广州'
      }, {
          'name': '内蒙古',
          'value': 32
      }],
      [{
          'name': '广州'
      }, {
          'name': '河北',
          'value': 34
      }],
      [{
          'name': '广州'
      }, {
          'name': '广西',
          'value': 67
      }],
      [{
          'name': '广州'
      }, {
          'name': '海南',
          'value': 68
      }],
      [{
          'name': '广州'
      }, {
          'name': '湖北',
          'value': 38
      }],
      [{
          'name': '广州'
      }, {
          'name': '江西',
          'value': 85
      }],
      [{
          'name': '广州'
      }, {
          'name': '四川',
          'value': 14
      }],
      [{
          'name': '广州'
      }, {
          'name': '山东',
          'value': 1
      }],
      [{
          'name': '广州'
      }, {
          'name': '香港',
          'value': 1
      }]
  ];
  var planePath = "path://M917.965523 917.331585c0 22.469758-17.891486 40.699957-39.913035 40.699957-22.058388 0-39.913035-18.2302-39.913035-40.699957l-0.075725-0.490164-1.087774 0c-18.945491-157.665903-148.177807-280.296871-306.821991-285.4748-3.412726 0.151449-6.751774 0.562818-10.240225 0.562818-3.450589 0-6.789637-0.410346-10.202363-0.524956-158.606321 5.139044-287.839661 127.806851-306.784128 285.436938l-1.014096 0 0.075725 0.490164c0 22.469758-17.854647 40.699957-39.913035 40.699957s-39.915082-18.2302-39.915082-40.699957l-0.373507-3.789303c0-6.751774 2.026146-12.903891 4.91494-18.531052 21.082154-140.712789 111.075795-258.241552 235.432057-312.784796C288.420387 530.831904 239.989351 444.515003 239.989351 346.604042c0-157.591201 125.33352-285.361213 279.924387-285.361213 154.62873 0 279.960203 127.770012 279.960203 285.361213 0 97.873098-48.391127 184.15316-122.103966 235.545644 124.843356 54.732555 215.099986 172.863023 235.808634 314.211285 2.437515 5.290493 4.01443 10.992355 4.01443 17.181311L917.965523 917.331585zM719.822744 346.679767c0-112.576985-89.544409-203.808826-199.983707-203.808826-110.402459 0-199.944821 91.232864-199.944821 203.808826s89.542362 203.808826 199.944821 203.808826C630.278335 550.488593 719.822744 459.256752 719.822744 346.679767z";
  //   简笔人2
  //  var  planePath="path://M621.855287 587.643358C708.573965 540.110571 768 442.883654 768 330.666667 768 171.608659 648.609267 42.666667 501.333333 42.666667 354.057399 42.666667 234.666667 171.608659 234.666667 330.666667 234.666667 443.22333 294.453005 540.699038 381.59961 588.07363 125.9882 652.794383 21.333333 855.35859 21.333333 1002.666667L486.175439 1002.666667 1002.666667 1002.666667C1002.666667 815.459407 839.953126 634.458526 621.855287 587.643358Z";
  //var planePath ='path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

  var convertData = function(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          var fromCoord = geoCoordMap[dataItem[0].name];
          var toCoord = geoCoordMap[dataItem[1].name];
          if (fromCoord && toCoord) {
              res.push({
                  fromName: dataItem[0].name,
                  toName: dataItem[1].name,
                  coords: [toCoord, fromCoord]
              });
          }
      }
      return res;
  };

  var color = ['#a6c84c', '#ffa022', '#46bee9'];
  var mySeries = [];
  [
      [myHosName, BJData]
  ].forEach(function(item, i) {
      mySeries.push({ //线
          name: item[0],
          type: 'lines',
          zlevel: 1,
          effect: {
              show: true,
              period: 6,
              trailLength: 0.7,
              color: 'green',//光线
              symbolSize: 3
          },
          lineStyle: {
              normal: {
                  color: color[0],
                  width: 0,
                  curveness: 0.2
              }
          },
          data: convertData(item[1])
      }, { //移动 点
          name: item[0],
          //                      name: item[0] + ' Top10',
          type: 'lines',
          zlevel: 2,
          //   effect: {
          //       show: true,
          //       period: 6,
          //       trailLength: 0,
          //       symbol: planePath,
          //       symbolSize: 15
          //   },
          //   lineStyle: {
          //       normal: {
          //           color: function(params) {
          //               if (params.data.toName == breakProvince) {
          //                   return 'red';
          //               } else {
          //                   return 'green';
          //               }
          //           },
          //           width: 1,
          //           opacity: 0.4,
          //           curveness: 0.2
          //       }
          //   },
          data: convertData(item[1])
      }, { //省份圆点
          name: "用户信息传输装置在线数",
          //                      name: item[0] + ' Top10',
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
              brushType: 'stroke'
          },
          label: {
              normal: {
                  show: true,
                  position: 'right',
                  formatter: '{b}'
              }
          },
          symbolSize: 20,
          itemStyle: {
              normal: {
                  color: function(params) {
                      var tmp = params.data.value[2]
                      if (tmp > 100) {
                          return 'rgba(211,241,65,1)'
                      } else if (tmp > 50) {
                          return 'rgba(97,241,255,1)';
                      } else{
                          return 'rgba(255,201,9,1)';
                      }
                  }
              }
          },
          data: item[1].map(function(dataItem) {
              return {
                  name: dataItem[1].name,
                  value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
              };
          })
      });
  });

  option = {

      title: {
          text: '',
          subtext: '',
          left: 'center',
          textStyle: {
              color: '#fff'
          },
          subtextStyle: {
              color: 'yellow',
              fontWeight: 'bold'
          }
      },
      tooltip: {
          trigger: 'item',
          formatter: function(params) {
              if (params.seriesIndex == 2 || params.seriesIndex == 5 || params.seriesIndex == 8) {
                  return params.name + '<br>' + params.seriesName + ':' + params.data.value[2];
              } else if (params.seriesIndex == 1 || params.seriesIndex == 4 || params.seriesIndex == 7) {
                  if (params.data.toName == breakProvince) {
                      return params.data.toName + '→/→' + params.data.fromName;
                  } else {
                      return params.data.toName + '→→' + params.data.fromName;
                  }
              }
          }
      },
      geo: {
          map: 'china',
          label: {
              emphasis: {
                  show: false
              }
          },
          roam: true,
          itemStyle: {
              normal: {
                  areaColor: 'transparent',
                  borderColor: 'rgba(0,160,187,.8)'
              },
              emphasis: {
                  areaColor: 'rgba(255,255,255,.3)'
              }
          }
      },
      series: mySeries
  };


  if (option && typeof option === "object") {
      myChart.setOption(option, true);
  }