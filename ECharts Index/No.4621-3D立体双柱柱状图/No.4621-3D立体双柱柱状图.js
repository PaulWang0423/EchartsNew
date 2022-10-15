 // 计划产值
 var zzx1 = [27, 38, 41, 21, 27];
 var zx = zzx1.map((item) => {
     return 100 - item;
 });
 // 实际产值
 var wgx1 = [37, 40, 63, 61, 64];
 var wg = wgx1.map((item) => {
     return 100 - item;
 });




 var barWidth = 40;
 option = {
     backgroundColor: "#010243",
     tooltip: {
         trigger: "axis",
         axisPointer: {
             // 坐标轴指示器，坐标轴触发有效
             type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
         },
         formatter: function(e) {
             // console.log(e);
             var str =
                 e[6].axisValue +
                 "<br>" +
                 "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:" +
                 e[6].color.colorStops[0].color +
                 ";'></span>" +
                 "" +
                 e[6].seriesName +
                 " : " +
                 e[6].value +
                 "%<br>" +
                 "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:" +
                 e[8].color.colorStops[0].color +
                 ";'></span>" +
                 "" +
                 e[8].seriesName +
                 " : " +
                 e[8].value +
                 "%";
             return str;
         },
     },
     grid: {
         left: "2%",
         right: "4%",
         bottom: "4%",
         top: "16%",
         containLabel: true,
     },
     legend: {
         data: ["计划产值", "实际产值"],

         top: 1,
         textStyle: {
             color: "#00ffff",
             fontSize: 14,
         },
         itemWidth: 12,
         itemHeight: 10,
         itemGap: 35,
         color: "#242424",
         selectedMode: false,
     },
     xAxis: {
         type: "category",
         data: [
             "A高速公路建设项目质量合格率",
             "B高速公路建设项目质量合格率",
             "C高速公路建设项目质量合格率",
             "D高速公路建设项目质量合格率",
             "E高速公路建设项目质量合格率",
         ],
         axisLine: {
             show: true,
             lineStyle: {
                 color: "#15205B",
             },
         },
         axisTick: {
             show: false,
         },
         axisLabel: {
             // interval: 0,
             // rotate: 40,
             textStyle: {
                 fontFamily: "Microsoft YaHei",
                 color: "#fff", // x轴颜色
                 fontWeight: "normal",
                 fontSize: "14",
                 lineHeight: 22,
             },
             interval: 0, //标签设置为全部显示
             margin: 15,
             lineHeight: 15,
             // fontSize: 11,
             formatter: function(params) {
                 var a = params.substring(0, params.length - 5);
                 //   console.log(params.substring(0, params.length - 3));
                 var newParamsName = a + "\n质量合格率";

                 //将最终的字符串返回
                 return newParamsName;
             },
         },
     },

     yAxis: {
         min: 0,
         max: 100,
         type: "value",

         axisLine: {
             show: true,
             lineStyle: {
                 color: "#15205B",
             },
         },
         splitLine: {
             show: false,
             lineStyle: {
                 color: "rgba(135,140,147,1)", //左侧显示线
             },
         },
         axisTick: {
             show: false,
         },
         axisLabel: {
             formatter: "{value}%",
             textStyle: {
                 color: "#c9c9c9",
                 fontSize: 14,
             },
         },
     },
     series: [
         // 计划产值中间正方形
         {
             type: "pictorialBar",
             symbol: "diamond",

             symbolSize: [barWidth, 8],
             symbolOffset: [-26, -4],
             symbolPosition: "end",
             z: 12,
             color: "#3185FF",
             data: zzx1,
         },
         // 实际产值中间正方形
         {
             type: "pictorialBar",
             symbol: "diamond",
             symbolSize: [barWidth, 8],
             symbolOffset: [26, -4],
             symbolPosition: "end",
             z: 12,
             color: "#1BCC98",
             data: wgx1,
         },
         //  计划产值底部正方形
         {
             type: "pictorialBar",
             symbol: "diamond",
             symbolSize: [barWidth, 8],
             symbolOffset: [-26, 4],
             z: 12,
             color: "#161D6E",
             data: zzx1,
         },
         // 实际产值底部正方形
         {
             name: "",
             type: "pictorialBar",
             symbol: "diamond",
             symbolSize: [barWidth, 8],
             symbolOffset: [26, 4],
             color: "#151D6E",
             z: 12,
             data: wgx1,
         },
         // 计划产值上部正方形
         {
             data: [100, 100, 100, 100, 100],
             type: "pictorialBar",

             symbol: "diamond",
             symbolSize: [barWidth, 8],
             symbolOffset: [-26, -4],
             color: "#283190",

             symbolPosition: "end",
         },
         // 实际产值上部正方形
         {
             data: [100, 100, 100, 100, 100],
             type: "pictorialBar",

             symbol: "diamond",
             symbolSize: [barWidth, 8],
             symbolOffset: [26, -4],
             color: "#283190",

             symbolPosition: "end",
         },
         // 计划产值进度柱子
         {
             name: "计划产值",
             type: "bar",
             barWidth: barWidth,
             // zlevel: 2,
             stack: "1",
             itemStyle: {
                 normal: {
                     opacity: 0.7,
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                             offset: 0,
                             color: "#2863D2",
                         },
                         {
                             offset: 1,
                             color: "#161D6E",
                         },
                     ]),
                     barBorderRadius: 0,
                 },
             },
             label: {
                 show: true,
                 position: ["-18", "-18"],
                 color: "#00f8ff",
                 fontSize: 12,
             },
             data: zzx1,
         },
         // 计划产值底部柱子
         {
             data: zx,
             type: "bar",

             barWidth: barWidth,
             stack: "1",

             zlevel: -1,
             itemStyle: {
                 normal: {
                     opacity: 0.7,
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                             offset: 0,
                             color: "#182075",
                         },
                         {
                             offset: 1,
                             color: "#182075",
                         },
                     ]),
                     barBorderRadius: 0,
                 },
             },
         },
         // 实际产值进度柱子
         {
             name: "实际产值",
             type: "bar",
             stack: "2",
             barWidth: barWidth,
             itemStyle: {
                 normal: {
                     opacity: 0.7,
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                             offset: 0,
                             color: "#19958B",
                         },
                         {
                             offset: 1,
                             color: "#151B6F",
                         },
                     ]),
                     barBorderRadius: 0,
                 },
             },
             label: {
                 show: true,
                 position: ["18", "-18"],
                 color: "#00f8ff",
                 fontSize: 12,
             },
             data: wgx1,
         },
         // 实际产值底部柱子
         {
             data: wg,
             type: "bar",
             barWidth: barWidth,
             stack: "2",

             zlevel: -1,
             itemStyle: {
                 normal: {
                     opacity: 0.7,
                     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                             offset: 0,
                             color: "#182075",
                         },
                         {
                             offset: 1,
                             color: "#182075",
                         },
                     ]),
                     barBorderRadius: 0,
                 },
             },
         },
     ],
 };