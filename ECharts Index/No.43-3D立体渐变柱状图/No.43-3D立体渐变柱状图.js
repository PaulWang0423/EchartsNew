var newchartName = ['国道201', '国道252', '国道322'],
    newchartValue1 = ['91', '51', '29'],
    newchartValue2 = ['83', '81', '20'];
var path = 'path://M1390,595h79l-39,22Z';
var barWidth = 40;
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
    backgroundColor: '#000E1A', //背景色
    legend: {
        data: ['未开工', '未完成'],
        icon: 'rect',
        top: 5,
        right: 10,
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
                '已开工未完成' +
                ': </span>' +
                "<span style=''>" +
                (100 - param[0].value) +
                '</span><span>%</span>' +
                '</div>' +
                "<div style='padding-top:5px;'>" +
                "<span style='display:inline-block;border-radius:4px;width:20px;height:10px;background-color:rgba(255,164,41,.16);'></span>" +
                "<span style=''> " +
                '已完成未合格' +
                ': </span>' +
                "<span style=''>" +
                (100 - param[1].value) +
                '</span><span>%</span>' +
                '</div>' +
                '</div>';
            return resultTooltip;
        },
    },
    title: [
        {
            text: 100 - newchartValue1[0] + '%',
            textAlign: 'center',
            textStyle: {
                color: 'rgba(61,187,255,.3)',
                fontSize: 12,
            },
            top: '20%',
            left: '19%',
        },
        {
            text: 100 - newchartValue2[0] + '%',
            textAlign: 'center',
            textStyle: {
                color: 'rgba(255,146,41,.3)',
                fontSize: 12,
            },
            top: '20%',
            left: '24%',
        },
        {
            text: 100 - newchartValue1[1] + '%',
            textAlign: 'center',
            textStyle: {
                color: 'rgba(61,187,255,.3)',
                fontSize: 12,
            },
            top: '20%',
            left: '48%',
        },
        {
            text: 100 - newchartValue2[1] + '%',
            textAlign: 'center',
            textStyle: {
                color: 'rgba(255,146,41,.3)',
                fontSize: 12,
            },
            top: '20%',
            left: '53%',
        },
        {
            text: 100 - newchartValue1[2] + '%',
            textAlign: 'center',
            textStyle: {
                color: 'rgba(61,187,255,.3)',
                fontSize: 12,
            },
            top: '20%',
            left: '77%',
        },
        {
            text: 100 - newchartValue2[2] + '%',
            textAlign: 'center',
            textStyle: {
                color: 'rgba(255,146,41,.3)',
                fontSize: 12,
            },
            top: '20%',
            left: '82.5%',
        },
    ],
    grid: {
        top: '25%',
        left: '5%',
        bottom: '10%',
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
                show: false,
                lineStyle: {
                    color: 'rgba(0,228,255,1)',
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
            show: false,
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#fff',
                },
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(0,228,255,1)',
                },
            },
            axisLine: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '已开工已完成',
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
            name: '已完成已合格',
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
            name: '已开工已完成',
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
                position: 'left',
                color: 'rgba(119,167,255,1)',
                fontSize: 12,
                textAlign: 'center',
            },
            zlevel: 2,
            data: newchartValue1,
        },
        {
            name: '已完成已合格',
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
                position: 'right',
                color: 'rgba(255,228,59,1)',
                fontSize: 12,
                textAlign: 'center',
            },
            zlevel: 2,
            data: newchartValue2,
        },
        {
            name: '工程量',
            type: 'bar',
            xAxisIndex: 1,
            barGap: '60%',
            data: [100, 100, 100],
            zlevel: 1,
            barWidth: barWidth,
            itemStyle: {
                normal: {
                    color: 'rgba(61,187,255,.16)',
                },
            },
        },
        {
            name: '合格量',
            type: 'bar',
            xAxisIndex: 1,
            barGap: '60%',
            data: [100, 100, 100],
            zlevel: 1,
            barWidth: barWidth,
            itemStyle: {
                normal: {
                    color: 'rgba(255,164,41,.16)',
                },
            },
        },
        {
            name: '已开工已完成',
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
            ],
        },
        {
            name: '已完成已合格',
            type: 'pictorialBar',
            symbolSize: [barWidth, 10],
            symbolOffset: ['81%', 5],
            z: 12,
            color: '#ffc241',

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
            ],
        },
        // 头

        {
            name: '已开工未完成',
            type: 'effectScatter',
            rippleEffect: {
                period: 1,
                scale: 5,
                brushType: 'fill',
            },
            z: 20,
            zlevel: 3,
            symbolPosition: 'end',
            // symbol: path,
            symbolSize: [10, 4],
            symbolOffset: [-32, 0],
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
            name: '已开工未完成',
            type: 'effectScatter',
            rippleEffect: {
                period: 1,
                scale: 5,
                brushType: 'fill',
            },
            z: 20,
            zlevel: 2,
            symbolPosition: 'end',
            // symbol: path,
            symbolSize: [10, 4],
            symbolOffset: ['310%', 0],
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
            ],
        },
    ],
};
