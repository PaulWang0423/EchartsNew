option = {
    title: {
        text: '词云展示',
        link: 'https://www.baidu.com/s?wd=' + encodeURIComponent('ECharts'),
        x: 'left',
        textStyle: {
            fontSize: 23,
            color: 'rgba(255, 255, 255, 0.8)'
        }

    },
    backgroundColor: '#131f56',
    tooltip: {
        show: true
    },
    // toolbox: {
    //     feature: {
    //         saveAsImage: {
    //             iconStyle: {
    //                 normal: {
    //                     color: '#FFFFFF'
    //                 }
    //             }
    //         }
    //     }
    // },
    series: [{
        name: '热点分析',
        type: 'wordCloud',
        // size: ['9%', '99%'],
        // sizeRange: [6, 66],//最小文字——最大文字
        // textRotation: [0, 45, 90, -45],
        // rotationRange: [-45, 90],//旋转角度区间
        // rotationStep: 90,//旋转角度间隔
        // shape: 'circle',
        // gridSize: 10,//字符间距
        textPadding: 0,
        autoSize: {
            enable: true,
            minSize: 6
        },
        textStyle: {
            normal: {
                color: function() {
                    return 'rgb(' + [
                        Math.round(Math.random() * 105)+150,
                        Math.round(Math.random() * 105)+150,
                        Math.round(Math.random() * 105)+150
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        data: [{
            name: "Jayfee",
            value: 666
        }, {
            name: "Nancy",
            value: 520
        }]
    }]
};

var JosnList = [{
    name: "Jayfee",
    value: 666
}, {
    name: "Nancy",
    value: 520
}, {
    name: "生活资源",
    value: "999"
}, {
    name: "供热管理",
    value: "888"
}, {
    name: "供气质量",
    value: "777"
}, {
    name: "生活用水管理",
    value: "688"
}, {
    name: "一次供水问题",
    value: "588"
}, {
    name: "交通运输",
    value: "516"
}, {
    name: "城市交通",
    value: "515"
}, {
    name: "环境保护",
    value: "483"
}, {
    name: "房地产管理",
    value: "462"
}, {
    name: "城乡建设",
    value: "449"
}, {
    name: "社会保障与福利",
    value: "429"
}, {
    name: "社会保障",
    value: "407"
}, {
    name: "文体与教育管理",
    value: "406"
}, {
    name: "公共安全",
    value: "406"
}, {
    name: "公交运输管理",
    value: "386"
}, {
    name: "出租车运营管理",
    value: "385"
}, {
    name: "供热管理",
    value: "375"
}, {
    name: "市容环卫",
    value: "355"
}, {
    name: "自然资源管理",
    value: "355"
}, {
    name: "粉尘污染",
    value: "335"
}, {
    name: "噪声污染",
    value: "324"
}];

option.series[0].data = JosnList;


 /*http://data-visual.cn/datav/src/js/echarts/extension/echarts-wordcloud.min.js 使用这个脚本才可定义字符颜色*/
 /*http://echarts.baidu.com/christmas/echarts-wordcloud.min.js 无法定义字符颜色*/
 
 
 
 
 
 
 
 
 
//  var data = [{
//     name: "Jayfee",
//     value: 666
// }, {
//     name: "Nancy",
//     value: 520
// }, {
//     name: "生活资源",
//     value: "999"
// }, {
//     name: "供热管理",
//     value: "888"
// }, {
//     name: "供气质量",
//     value: "777"
// }, {
//     name: "生活用水管理",
//     value: "688"
// }, {
//     name: "一次供水问题",
//     value: "588"
// }, {
//     name: "交通运输",
//     value: "516"
// }, {
//     name: "城市交通",
//     value: "515"
// }, {
//     name: "环境保护",
//     value: "483"
// }, {
//     name: "房地产管理",
//     value: "462"
// }, {
//     name: "城乡建设",
//     value: "449"
// }, {
//     name: "社会保障与福利",
//     value: "429"
// }, {
//     name: "社会保障",
//     value: "407"
// }, {
//     name: "文体与教育管理",
//     value: "406"
// }, {
//     name: "公共安全",
//     value: "406"
// }, {
//     name: "公交运输管理",
//     value: "386"
// }, {
//     name: "出租车运营管理",
//     value: "385"
// }, {
//     name: "供热管理",
//     value: "375"
// }, {
//     name: "市容环卫",
//     value: "355"
// }, {
//     name: "自然资源管理",
//     value: "355"
// }, {
//     name: "粉尘污染",
//     value: "335"
// }, {
//     name: "噪声污染",
//     value: "324"
// }];
//  myChart.setOption({
//      series: [{
//          type: 'wordCloud',
//         //  gridSize: 1,
//         //  sizeRange: [12, 40], //最小文字——最大文字
//         //  rotationRange: [0, 90], //旋转角度区间
//         //  rotationStep: 90, //旋转角度间隔
//          //  maskImage: maskImage, //遮罩图片
//         //  width: 500, //遮罩图片宽度
//         //  height: 500, //遮罩图片高度
//          left: 'center',
//          top: 'center',
//          data: data,
//         //  gridSize: 10, //字符间距
//          textStyle: {
//              normal: {
//                  // Color can be a callback function or a color string
//                  color: function() {
//                      // Random color
//                      return 'rgb(' + [
//                          Math.round(Math.random() * 160),
//                          Math.round(Math.random() * 160),
//                          Math.round(Math.random() * 160)
//                      ].join(',') + ')';
//                  }
//              },
//              emphasis: {
//                  shadowBlur: 10,
//                  shadowColor: '#333'
//              }
//          },
//      }],
//  });
 
 
 
 
 
 
 
 
 