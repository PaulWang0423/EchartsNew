let arr = [];
let list = [];
let series = [];
let legend = [];
let fontSize=16;
let barWidth=26;
let barGap=0;
let maxList=[];
let max=460;//背景最大值取y轴刻度线（最后注释部分）
let colorStartList=["transparent",'transparent','transparent','transparent']
let colorLeftList=["#000","#000","#000","#000"]
let colorTopList= ["#1E7EFF",'#FFA75A','#6ACC29','#9833FF']
let colorEndList=["#4084EE",'#FF8D28','#6ACC29','#9833FF']
chartObj={
  series:[{name:"当前资源",data:[269,460,400,170]},{name:"其他资源",data:[39,50,40,100]},{name:"资源",data:[15,200,80,60]}],
  chartList:['通信','网络','能源','建筑']
}
function colorRgba(str,alpha){
    let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    var sColor = str.toLowerCase();
    if(sColor=='transparent'){
        return 'transparent'
    }
    if(sColor && reg.test(sColor)){
        if(sColor.length === 4){
            var sColorNew = "#";
                for(let i=1; i<4; i+=1){
                    sColorNew += sColor.slice(i,i+1).concat(sColor.slice(i,i+1));       
                }
                sColor = sColorNew;
        }
        //处理六位的颜色值
        var sColorChange = [];
        for(let i=1; i<7; i+=2){
            sColorChange.push(parseInt("0x"+sColor.slice(i,i+2)));       
        }
        return "rgba(" + sColorChange.join(",") +','+alpha+ ")";
    }else{
        return sColor;       
    }
}
if (chartObj.series && chartObj.series.length) {
    chartObj.series.forEach((ele, i) => {
        arr = arr.concat(ele.data);
    });
    maxList = chartObj.series[0].data.map(() => {
        return max;
    });
    list = chartObj.series[0].data.map((item, index) => {
        return 1;
    });
    chartObj.series.forEach((item, index) => {
        legend.push({
            name: item.name,
            itemStyle: {
                color: colorEndList[index % colorEndList.length],
            },
        });
         //背景顶部切片
        series.push({
            data: maxList,
            type: 'pictorialBar',
            barMaxWidth: fontSize * 3,
            itemStyle: {
                color: colorEndList[index],
                opacity: 0.1,
            },
            tooltip: {
                show: false,
            },
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [
                (-0.5 * (chartObj.series.length - 1) +
                    index +
                    -0.5 * barGap * 0.01 * (chartObj.series.length - 1) +
                    barGap * 0.01 * index) *
                    barWidth,
                '-50%',
            ],
            symbolSize: [barWidth, barWidth * 0.4],
            zlevel: -1,
        });
        //底部切片
        series.push({
            data: list,
            color: colorStartList[index % colorStartList.length],
            type: 'pictorialBar',
            tooltip: {
                show: false,
            },
            barMaxWidth: fontSize * 3,
            symbol: 'diamond',
            symbolOffset: [
                (-0.5 * (chartObj.series.length - 1) +
                    index +
                    -0.5 * barGap * 0.01 * (chartObj.series.length - 1) +
                    barGap * 0.01 * index) *
                    barWidth,
                '50%',
            ],
            symbolSize: [barWidth, barWidth * 0.5],
        });

        //实际数据顶部切片
        series.push({
            data: item.data,
            type: 'pictorialBar',
            tooltip: {
                show: false,
            },
            barMaxWidth: fontSize * 3,
            color: colorTopList[index],
            symbolPosition: 'end',
            symbol: 'diamond',
            symbolOffset: [
                (-0.5 * (chartObj.series.length - 1) +
                    index +
                    -0.5 * barGap * 0.01 * (chartObj.series.length - 1) +
                    barGap * 0.01 * index) *
                    barWidth,
                '-50%',
            ],
            symbolSize: [barWidth, barWidth * 0.4],
            zlevel: 2,
        });
        //实际数据侧边切片
        series.push({
            data: item.data,
            type: 'pictorialBar',
            tooltip: {
                show: false,
            },
            barMaxWidth: fontSize * 3,
            color: {
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                type: 'linear',
                global: false,
                colorStops: [
                    {
                        offset: 0,
                        color: 'transparent',
                    },
                    {
                        offset: 0.2,
                        color: colorRgba(colorLeftList[index % colorLeftList.length], 0.2),
                    },
                    {
                        offset: 1,
                        color: colorRgba(colorLeftList[index % colorLeftList.length], 0.3),
                    },
                ],
            },
            symbolPosition: 'end',
            symbol: 'rect',
            symbolSize: [barWidth / 2, '100%'],
            symbolOffset: [
                (-0.5 * (chartObj.series.length - 1) +
                    index +
                    -0.5 * barGap * 0.01 * (chartObj.series.length - 1) +
                    barGap * 0.01 * index -
                    0.25) *
                    barWidth,
                0,
            ],
            zlevel: 1,
        });
        //柱子
        series.push({
            data: item.data,
            type: 'bar',
            name: item.name,
            barGap: barGap + '%',
            barWidth: barWidth,
            barMaxWidth: fontSize * 3,
            label: {
                show: true,
                position: 'top',
                distance: fontSize * 0.3,
                textStyle: {
                    color: colorEndList[index % colorEndList.length],
                    fontSize: fontSize,
                },
                // formatter: function (a, b) {
                //     return a.value==0?'':a.value;
                // },
            },
            showBackground: true,
            backgroundStyle: {
                color: {
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        {
                            offset: 0,
                            color: colorStartList[index % colorStartList.length],
                        },
                        {
                            offset: 0.2,
                            color: colorRgba(colorEndList[index % colorEndList.length], 0.2),
                        },
                        {
                            offset: 1,
                            color: colorRgba(colorEndList[index % colorEndList.length], 1),
                        },
                    ],
                },
                opacity: 0.1,
            },
            itemStyle: {
                color: {
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        {
                            offset: 0,
                            color: colorStartList[index % colorStartList.length],
                        },
                        {
                            offset: 0.2,
                            color: colorRgba(colorEndList[index % colorEndList.length], 0.2),
                        },
                        {
                            offset: 1,
                            color: colorRgba(colorEndList[index % colorEndList.length], 1),
                        },
                    ],
                },
            },
        });
    });
}
option = {
    // backgroundColor: "#061326",
    title: {
        text: '',
        top: 20,
        left: 'center',
        textStyle: {
            color: '#fff',
            fontSize: 20,
        },
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        backgroundColor: 'rgba(116,176,222,0.3)',
        extraCssText: 'box-shadow: 0 0 8px rgba(0, 128, 255, 0.27) inset;',
        borderWidth: 0,
        confine: false,
        appendToBody: true,
        formatter: (params) => {
            ////console.log(params,'---paramsshopping')
            let result = "<div style='margin-bottom:5px;'>" + params[0].name + '</div>';
            params.forEach((item, index) => {
                var dotHtml = `<span style="display:inline-block;margin-right:5px;border-radius:50%;width:${fontSize}px;height:${fontSize}px;background:${colorEndList[index]}"></span>`;
                result +=
                    "<div style='display:flex;align-items:center;margin-bottom:5px'>" +
                    dotHtml +
                    item.seriesName +
                    (item.seriesName ? "<span style='display:inline-block;margin-right:6px;'></span>" : '') +
                    item.data +
                    '</div>';
            });
            return result;
        },
        //轴触发提示才有效
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: 'rgba(35,49,77,0.3)',
            },
        },
        textStyle: {
            color: '#fff',
            fontSize: fontSize,
        },
    },
    grid: {
        top: fontSize * 3.5,
        left: 5,
        right: 5,
        bottom: fontSize,
        containLabel: true, //包括文本，居中
    },
    legend: {
        show: true,
        data: legend,
        selectedMode: false, //图例是否可以点击
        type: 'scroll',
        icon: 'circle',
        itemWidth: fontSize,
        itemHeight: fontSize,
        textStyle: {
            color: '#C3E3F9',
            fontSize: fontSize,
        },
    },
    xAxis: {
        data: chartObj.chartList,
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#2B72A1',
            },
        },
        axisLabel: {
            fontSize: fontSize,
            color: '#87CCFF',
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        interval: 0,
    },
    yAxis: [
        {
            type: 'value',
            name: '单位',
            nameGap: fontSize * 1.5,
            nameTextStyle: {
                align: 'center',
                fontSize: fontSize,
                color: '#2869A9',
            },
            splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)',
                },
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                margin: 10,
                fontSize: fontSize,
                color: '#2869A9',
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#2869A9',
                },
            },
        },
    ],
    series: series,
    // series: [

    //   //下切片
    //   {
    //     data: [1, 1, 1, 1],
    //     color: "#63caff",
    //     type: "pictorialBar",
    //     barMaxWidth: "20",
    //     symbol: "diamond",
    //           symbolOffset: [-barWidth/2,barWidth*0.2],
    //     symbolSize: [barWidth,barWidth*0.5],
    //   },
    //   //实际数据上切片
    //   {
    //     data: [120, 85, 112, 50],
    //     type: "pictorialBar",
    //     barMaxWidth: "20",
    //     color: "#63caff",
    //     symbolPosition: "end",
    //     symbol: "diamond",
    //     symbolOffset: [-barWidth/2,-barWidth*0.2],
    //     symbolSize: [barWidth,barWidth*0.4],
    //     zlevel: 2,
    //   },
    //   //背景上切片
    //   {
    //     data: [700, 700, 700, 700],
    //     type: "pictorialBar",
    //     barMaxWidth: "20",
    //     itemStyle: {
    //       color: "#63caff",
    //       opacity: 0.1,
    //     },
    //     symbolPosition: "end",
    //     symbol: "diamond",
    //     symbolOffset: [-barWidth/2,0],
    //     symbolSize: [barWidth,barWidth*0.4],
    //     zlevel: -5,
    //   },
    //   //柱子
    //       {
    //     data: [120, 85, 112, 50],
    //     type: "bar",
    //     name:'ni',
    //     barMaxWidth: "auto",
    //     barWidth:barWidth,
    //     showBackground: true,
    //      backgroundStyle: {
    //       color: "#63caff",
    //       opacity: 0.1,
    //     },
    //     itemStyle: {
    //       color: {
    //         x: 0,
    //         y: 0,
    //         x2: 0,
    //         y2: 1,
    //         type: "linear",
    //         global: false,
    //         colorStops: [
    //           {
    //             offset: 0,
    //             color: "#0b9eff",
    //           },
    //           {
    //             offset: 1,
    //             color: "#63caff",
    //           },
    //         ],
    //       },
    //     },
    //     label: {
    //       show: true,
    //       position: "top",
    //       distance: 10,
    //       color: "#fff",
    //     },
    //   },
    //   //下切片
    //   {
    //     data: [1, 1, 1, 1],
    //     color: "#63caff",
    //     type: "pictorialBar",
    //     barMaxWidth: "20",
    //     symbol: "diamond",
    //     symbolOffset: [barWidth/2,barWidth*0.2],
    //     symbolSize: [barWidth,barWidth*0.5],
    //   },
    //   //实际数据上切片
    //   {
    //   data: [200, 85, 112, 50],
    //     type: "pictorialBar",
    //     barMaxWidth: "20",
    //     color: "#63caff",
    //     symbolPosition: "end",
    //     symbol: "diamond",
    //      symbolOffset: [barWidth/2,-barWidth*0.2],
    //     symbolSize: [barWidth,barWidth*0.4],
    //     zlevel: 2,
    //   },
    //   //背景上切片
    //   {
    //     data: [700, 700, 700, 700],
    //     type: "pictorialBar",
    //     barMaxWidth: "20",
    //     itemStyle: {
    //       color: "#63caff",
    //       opacity: 0.1,
    //     },
    //     symbolPosition: "end",
    //     symbol: "diamond",
    //     symbolOffset: [barWidth/2, 0],
    //     symbolSize: [barWidth,barWidth*0.4],
    //     zlevel: -5,
    //   },
    //     //柱子
    
    //     {
    //     data: [200, 85, 112, 50],
    //     type: "bar",
    //     name:'wo',
    //     // barMaxWidth: "auto",
    //     barGap:barGap,
    //     showBackground: true,
    //      backgroundStyle: {
    //       color: "#63caff",
    //       opacity: 0.1,
    //     },
    //     barWidth:barWidth,
    //     itemStyle: {
    //       color: {
    //         x: 0,
    //         y: 0,
    //         x2: 0,
    //         y2: 1,
    //         type: "linear",
    //         global: false,
    //         colorStops: [
    //           {
    //             offset: 0,
    //             color: "#0b9eff",
    //           },
    //           {
    //             offset: 1,
    //             color: "#63caff",
    //           },
    //         ],
    //       },
    //     },
    //     label: {
    //       show: true,
    //       position: "top",
    //       distance: 10,
    //       color: "#fff",
    //     },
    //   },
    // ],
};
//获取Y轴的刻度范围 必须在图表画完后才能获取
// var rangeY = chart.getModel().getComponent('yAxis').axis.scale._extent;
// let max = rangeY[1];
// if (chartObj.series && chartObj.series.length) {
//     maxList = chartObj.series[0].data.map(() => {
//         return max;
//     });
//     chartObj.series.forEach((item, index) => {
//         //背景顶部切片
//         series.push({
//             data: maxList,
//             type: 'pictorialBar',
//             barMaxWidth: fontSize * 3,
//             itemStyle: {
//                 color: colorEndList[index],
//                 opacity: 0.1,
//             },
//             tooltip: {
//                 show: false,
//             },
//             symbolPosition: 'end',
//             symbol: 'diamond',
//             symbolOffset: [
//                 (-0.5 * (chartObj.series.length - 1) +
//                     index +
//                     -0.5 * barGap * 0.01 * (chartObj.series.length - 1) +
//                     barGap * 0.01 * index) *
//                     barWidth,
//                 '-50%',
//             ],
//             symbolSize: [barWidth, barWidth * 0.4],
//             zlevel: -1,
//         });
//     });
// }
// echarts.setOption({ series: series });
