var newchartName = ['南昌工厂', '宜昌工厂','赣州工厂','上高工厂','重庆工厂','沈阳工厂','荆州工厂'],
    newchartValue1 = ['91', '51', '29','50','90','80','78'],
    newchartValue2 = ['83', '81', '20','10','50','88','58'];
var symbol1 = "/asset/get/s/data-1544501081049-3FpaM5ea4.png";
var symbol2 = "/asset/get/s/data-1544501065781-v1k7-gZb8.png";
var path = 'path://M1390,595h79l-39,22Z';
var barWidth = 30;
var color1 = {
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    type: 'linear',
    global: false,
    colorStops: [
        {
            //第一节下面
            offset: 0,
            color: '#1C98CD',
        },
        {
            offset: 1,

            color: 'rgba(61,187,255,.16)',
        },
    ],
};
var color2 = {
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    type: 'linear',
    global: false,
    colorStops: [
        {
            //第一节下面
            offset: 0,
            color: '#E7AB47',
        },
        {
            offset: 1,
            color: 'rgba(255,164,41,.16)',
        },
    ],
};
option = {
    backgroundColor: '#0D2048', //背景色
    legend: {
        data: ['散装库容占比', '平仓库容占比'],
        icon: 'rect',
        top: "10%",
        right: "center",
        textStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: 12,
        },
    },
    //提示框
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
        formatter: function (param) {
            var resultTooltip =
                "<div style='background:rgba(13,5,30,.3);border:1px solid rgba(255,255,255,.2);padding:5px 10px;border-radius:4px;'>" +
                "<div style='text-align:center;'>" +
                param[0].name +
                '</div>' +
                "<div style='padding-top:5px;'>" +
                "<span style='display:inline-block;border-radius:4px;width:20px;height:10px;background-color:rgba(61,187,255,.3);border: 2px solid #3eb6f5;'></span>" +
                "<span style=''> " +
                param[0].seriesName +
                ': </span>' +
                "<span style=''>" +
                param[0].value +
                '</span><span>%</span>' +
                '</div>' +
                "<div style='padding-top:5px;'>" +
                "<span style='display:inline-block;border-radius:4px;width:20px;height:10px;background-color:rgba(255,164,41,.3);border: 2px solid #ffc241;'></span>" +
                "<span style=''> " +
                param[1].seriesName +
                ': </span>' +
                "<span style=''>" +
                param[1].value +
                '</span><span>%</span>' +
                '</div>' +
                "<div style='padding-top:5px;'>" +
                "<span style='display:inline-block;border-radius:4px;width:20px;height:10px;background-color:rgba(61,187,255,.16);'></span>" +
                "<span style=''> " +
                '散装剩余库容占比' +
                ': </span>' +
                "<span style=''>" +
                (100 - param[0].value) +
                '</span><span>%</span>' +
                '</div>' +
                "<div style='padding-top:5px;'>" +
                "<span style='display:inline-block;border-radius:4px;width:20px;height:10px;background-color:rgba(255,164,41,.16);'></span>" +
                "<span style=''> " +
                '平仓剩余库容占比' +
                ': </span>' +
                "<span style=''>" +
                (100 - param[1].value) +
                '</span><span>%</span>' +
                '</div>' +
                '</div>';
            return resultTooltip;
        },
    },
    
     timeline: {
            axisType: 'category',
            autoPlay: true,
            symbolSize: 8,
            symbol: "image://"+symbol1,
            playInterval: 4000,
            left: '5%',
            right: '5%',
            bottom: '35%',
            label: {
                normal: {
                    color: '#fff',
                    fontSize: 12,
                    show: false
                }
            },
            lineStyle: {
                color: "#0b4e86"
            },
            itemStyle: {
                normal: {
                    color: '#f00',
                    borderColor: "#00aeff",
                    borderWidth: 0
                }

            },
            checkpointStyle: {
                symbol: "image://"+symbol2,
                symbolSize: 10
            },
            controlStyle: {
                showPlayBtn: false
            },
            data: ['华中战区', '北方战区', '西南战区', '桂湘战区', '华东战区'],
        },
    title: [
        // {
        //     text: 100 - newchartValue1[0] + '%',
        //     textAlign: 'center',
        //     textStyle: {
        //         color: 'rgba(61,187,255,.3)',
        //         fontSize: 12,
        //     },
        //     top: '12%', //第一个蓝色柱子顶部文字位置
        //     left: '25%',
        // },
        // {
        //     text: 100 - newchartValue2[0] + '%',
        //     textAlign: 'center',
        //     textStyle: {
        //         color: 'rgba(255,146,41,.3)',
        //         fontSize: 12,
        //     },
        //     top: '12%',
        //     left: '35%',//第一个黄色柱子顶部文字位置
        // },
        // {
        //     text: 100 - newchartValue1[1] + '%',
        //     textAlign: 'center',
        //     textStyle: {
        //         color: 'rgba(61,187,255,.3)',
        //         fontSize: 12,
        //     },
        //     top: '12%',
        //     left: '68%',//第二个蓝色柱子顶部文字位置
        // },
        // {
        //     text: 100 - newchartValue2[1] + '%',
        //     textAlign: 'center',
        //     textStyle: {
        //         color: 'rgba(255,146,41,.3)',
        //         fontSize: 12,
        //     },
        //     top: '12%',
        //     left: '77%',//第二个黄色柱子顶部文字位置
        // },
        // // 只有两个战区，故注释如下内容
        // {
        //     text: 100 - newchartValue1[2] + '%',
        //     textAlign: 'center',
        //     textStyle: {
        //         color: 'rgba(61,187,255,.3)',
        //         fontSize: 12,
        //     },
        //     top: '20%',
        //     left: '77%',
        // },
        // {
        //     text: 100 - newchartValue2[2] + '%',
        //     textAlign: 'center',
        //     textStyle: {
        //         color: 'rgba(255,146,41,.3)',
        //         fontSize: 12,
        //     },
        //     top: '20%',
        //     left: '82.5%',
        // },
    ],
    grid: {
        top: '18%',
        left: '5%',
        bottom: '50%',
        right: '5%',
        containLabel: true,
    },
    animation: false,
    xAxis: [
        {
            type: 'category',
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#333333',
                },
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: 12,
                },
                margin: 20, //刻度标签与轴线之间的距离。
            },
            data: newchartName,
        },
        {
            type: 'category',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            splitArea: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            data: newchartName,
        },
    ],
    yAxis: [
        {
            show: true,
            type: 'value',
            axisLabel: {
                 show: false,
                textStyle: {
                    color: '#fff',
                },
            },
            splitLine: {
                lineStyle: {
                    color: '#212E4A',
                },
            },
            axisLine: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '散装库容占比',
            type: 'pictorialBar',
            symbolSize: [barWidth, 10],
            symbolOffset: ['-81%', -5],
            symbolPosition: 'end',
            z: 15,
            color: '#3eb6f5',
            zlevel: 2,
            data: newchartValue1,
        },
        {
            name: '平仓库容占比',
            type: 'pictorialBar',
            symbolSize: [barWidth, 10],
            symbolOffset: ['81%', -5],
            symbolPosition: 'end',
            z: 15,
            color: '#ffc241',
            zlevel: 2,
            data: newchartValue2,
        },

        {
            name: '散装库容占比',
            type: 'bar',
            barGap: '60%',
            barWidth: barWidth,
            itemStyle: {
                //
                // color: '',
                color: color1,
                borderColor: color1,
                borderWidth: 1,
                borderType: 'solid',
            },
            label: {
                show: true,
                formatter: '{c}' + '%',
                position: 'top',
                // color: 'rgba(119,167,255,1)',
                color:'#fff',
                fontSize: 12,
                textAlign: 'center',
            },
            zlevel: 2,
            data: newchartValue1,
        },
        {
            name: '平仓库容占比',
            type: 'bar',
            barGap: '60%',
            barWidth: barWidth,
            itemStyle: {
                // color: 'rgba(255,164,41,.16)',
                color: color2,
                borderColor: color2,
                borderWidth: 1,
                borderType: 'solid',
            },
            label: {
                show: true,
                formatter: '{c}' + '%',
                position: 'top',
                color: 'rgba(255,228,59,1)',
                fontSize: 12,
                textAlign: 'center',
            },
            zlevel: 2,
            data: newchartValue2,
        },
        {
            name: '浅蓝柱子',
            type: 'bar',
            xAxisIndex: 1,
            barGap: '60%',
            data: [100, 100, 100, 100, 100, 100, 100],
            zlevel: 1,
            barWidth: barWidth,
            itemStyle: {
                normal: {
                    color: 'rgba(61,187,255,.16)',
                },
            },
        },
        {
            name: '浅黄柱子',
            type: 'bar',
            xAxisIndex: 1,
            barGap: '60%',
            data: [100, 100, 100, 100, 100, 100, 100],
            zlevel: 1,
            barWidth: barWidth,
            itemStyle: {
                normal: {
                    color: 'rgba(255,164,41,.16)',
                },
            },
        },
        {
            name: '黄色底座',
            type: 'pictorialBar',
            symbolSize: [barWidth, 10],
            symbolOffset: ['-81%', 5],
            z: 12,
            color: '#3eb6f5',

            data: [
                {
                    name: '',
                    value: '100',
                },
                {
                    name: '',
                    value: '100',
                },
                {
                    name: '',
                    value: '100',
                },
                {
                    name: '',
                    value: '100',
                },
                {
                    name: '',
                    value: '100',
                },
                {
                    name: '',
                    value: '100',
                },
                {
                    name: '',
                    value: '100',
                }
                
            ],
        },
        {
            name: '蓝色底座',
            type: 'pictorialBar',
            symbolSize: [barWidth, 10],
            symbolOffset: ['81%', 5],
            z: 12,
            color: '#ffc241',
            show: false,
            data: [
                {
                    name: '',
                    value: '100',
                },
                {
                    name: '',
                    value: '100',
                },
                {
                    name: '',
                    value: '100',
                },
                {
                    name: '',
                    value: '100',
                },
                {
                    name: '',
                    value: '100',
                },
                {
                    name: '',
                    value: '100',
                },
                {
                    name: '',
                    value: '100',
                }
            ],
        },
        // 头

        {
            name: '蓝色动态封顶',
            type: 'effectScatter',
            rippleEffect: {
                period: 1,
                scale: 4, //控制上方蓝色动态效果封顶大小
                brushType: 'fill',
            },
            z: 20,
            zlevel: 3,
            symbolPosition: 'end',
            // symbol: path,
            symbolSize: [10, 4],
            symbolOffset: [-24, 0], //控制上方蓝色动态效果封顶位置
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 5,
                    shadowOffsetY: 3,
                    shadowOffsetX: 0,
                    color: 'rgba(119,167,255,1)',
                },
            },
            data: [
                {
                    name: '',
                    value: 100,
                    symbolPosition: 'end',
                },
                {
                    name: '',
                    value: 100,
                    symbolPosition: 'end',
                },
                {
                    name: '',
                    value: 100,
                    symbolPosition: 'end',
                },
                {
                    name: '',
                    value: 100,
                    symbolPosition: 'end',
                },
                {
                    name: '',
                    value: 100,
                    symbolPosition: 'end',
                },
                {
                    name: '',
                    value: 100,
                    symbolPosition: 'end',
                },
                {
                    name: '',
                    value: 100,
                    symbolPosition: 'end',
                }
            ],
        },
        // {
        //     name: '已完成未合格',
        //     type: 'pictorialBar',
        //     symbolSize: [barWidth, 10],
        //     symbolOffset: ['81%', -5],
        //     z: 20,
        //     itemStyle: {
        //         normal: {
        //             color: 'rgba(255,164,41,0.5)',
        //         },
        //     },
        //     data: [
        //         {
        //             name: '',
        //             value: 100,
        //             symbolPosition: 'end',
        //         },
        //         {
        //             name: '',
        //             value: 100,
        //             symbolPosition: 'end',
        //         },
        //         {
        //             name: '',
        //             value: 100,
        //             symbolPosition: 'end',
        //         },
        //     ],
        // },
        {
            name: '黄色动态封顶',
            type: 'effectScatter',
            rippleEffect: {
                period: 1,
                scale: 4, //控制上方黄色动态效果封顶大小
                brushType: 'fill',
            },
            z: 20,
            zlevel: 2,
            symbolPosition: 'end',
            // symbol: path,
            symbolSize: [10, 4],
            symbolOffset: ['240%', 0], //控制上方黄色动态效果封顶大小
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 5,
                    shadowOffsetY: 3,
                    shadowOffsetX: 0,
                    color: 'rgba(255,164,41,0.5)',
                },
            },
            data: [
                {
                    name: '',
                    value: 100,
                    symbolPosition: 'end',
                },
                {
                    name: '',
                    value: 100,
                    symbolPosition: 'end',
                },
                {
                    name: '',
                    value: 100,
                    symbolPosition: 'end',
                },
                {
                    name: '',
                    value: 100,
                    symbolPosition: 'end',
                },
                {
                    name: '',
                    value: 100,
                    symbolPosition: 'end',
                },
                {
                    name: '',
                    value: 100,
                    symbolPosition: 'end',
                },
                {
                    name: '',
                    value: 100,
                    symbolPosition: 'end',
                }
                
            ],
        },
    ],
};
