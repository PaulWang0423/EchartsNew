var data = [];
var dataCount = 10;
var startTime = +new Date();
var categories = [''];
var types = [{
        name: 'JS Heap',
        color: 'rgba(0,0,0,0.08)'
    },
    {
        name: 'Documents',
        color: '#bd6d6c'
    },
    {
        name: 'Nodes',
        color: '#75d874'
    },
    {
        name: 'Listeners',
        color: '#e0bc78'
    },
    {
        name: 'GPU Memory',
        color: '#dc77dc'
    },
    {
        name: 'GPU',
        color: '#72b362'
    }
];
let xdata = [
    "2011-12-28",
    "2016-12-28",
];
let data4 = [8, 6];
let dataMess = [{
        index: 8,
        mess: "XX企业氨水罐发生nh3爆炸",
    },
    {
        index: 6,
        mess: "系统报告泄漏事件升级，由\n报警上升为紧急报警",
    },
    {
        index: 4,
        mess: "系统报告XX园区应急指挥中心\n做批示",
    },
    {
        index: 2,
        mess: "XX区XX医院医疗队伍入场",
    },
    {
        index: 4,
        mess: "XX区应急指挥中心抽\n调应急专家级咨询专家入场",
    },
    {
        index: 6,
        mess: "XX园区SO2泄漏事\n件现场指挥小组成立",
    },
    {
        index: 8,
        mess: "XX园区SO2泄漏事件\n堵漏方案通过",
    },
    {
        index: 6,
        mess: "XX园区SO2泄漏\n事件空气恢复方案通过",
    },
];

let labelMess = function(param) {
    return (
        `{b|${param.name}} \n` + `{value|${dataMess[param.dataIndex].mess}}`
    );
};

function renderItem(params, api) {
    console.log(params)
    var categoryIndex = api.value(0);
    var start = api.coord([api.value(1), categoryIndex]);
    var end = api.coord([api.value(2), categoryIndex]);
    // console.log(start, end)
    var height = api.size([0, 1])[1];

    var rectShape = echarts.graphic.clipRectByRect({
        x: start[0],
        y: start[1] - height / 2,
        width: end[0] - start[0],
        height: height * 0.6
    }, {
        x: params.coordSys.x,
        y: params.coordSys.y,
        width: params.coordSys.width,
        height: params.coordSys.height
    });

    return rectShape && {
        type: 'rect',
        shape: rectShape,
        style: api.style({
            fill: types[params.dataIndex].color
        })
    };
}

option = {
    tooltip: {
        formatter: function(params) {
            return params.marker + params.name + ': ' + params.value[2] + ' ms';
        }
    },
    grid: [{
            "top": 80,
            "height": 40,
            "right": "4%",
            "z": 10
        },
        {
            "top": 80,
            "height": 65,
            "right": "4%",
            "z": 15
        },
        {
            "top": 80,
            "bottom": 0,
            // "height": 40,
            "right": "4%",
            "z": 0
        },
        {
            "top": 38,
            "height": 65,
            "right": "4%",
            "z": 12
        },
        {
            "top": 38,
            "height": 65,
            "right": "4%",
            "z": 12
        },
    ],
    "dataZoom": [{
            "type": "inside",
            "xAxisIndex": [
                0,
                1,
                2
            ],
            "start": 0,
            "end": 99.99999999999999,
            "throttle": 200
        },
        {
            "show": false,
            "height": 16,
            "xAxisIndex": [
                0,
                1,
                2
            ],
            "type": "slider",
            "top": 64,
            "start": 0,
            "end": 100,
            "handleIcon": "M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z",
            "handleSize": "120%",
            "handleStyle": {
                "color": "#18A2B2",
                "shadowColor": "#B1B5B9",
                "shadowBlur": 5
            },
            "dataBackground": {
                "lineStyle": {
                    "width": 0
                },
                "areaStyle": {
                    "color": "transparent"
                }
            },
            "backgroundColor": "transparent",
            "fillerColor": "transparent",
            "borderColor": "transparent",
            "throttle": 200
        }
    ],
    "xAxis": [{
            "type": "time",
            "boundaryGap": false,
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#d8d8d8"
                }
            },
            "axisTick": {
                "show": true,
                "inside": true
            },
            "axisLabel": {
                "color": "rgba(0,0,0,0.54)",
                "fontSize": 12
            },
            "splitLine": {
                "show": false
            },
            "min": "2011-11-28",
            "max": "2017-07-25"
        },
        {
            "type": "value",
            "gridIndex": 1,
            "min": 0,
            "max": 100,
            "axisLabel": {
                "show": false
            },
            "axisLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "splitLine": {
                "show": false
            }
        },
        {
            "type": "time",
            "gridIndex": 2,
            "axisLabel": {
                "show": false
            },
            "axisLine": {},
            "axisTick": {
                "show": false
            },
            "splitLine": {
                "show": false
            }
        },
        {
            "type": "time",
            "boundaryGap": false,
            "axisLabel": {
                "show": false
            },
            "axisLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "splitLine": {
                "show": false
            }
        },
        {
            "type": "time",
            "boundaryGap": false,
            "gridIndex": 3,
            "axisLabel": {
                "show": false
            },
            "axisLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "splitLine": {
                "show": false
            },
            min: '2011-11-28',
            max: '2017-07-25',
        },
        {
            "type": "time",
            "boundaryGap": false,
            "gridIndex": 4,
            "axisLabel": {
                "show": false
            },
            "axisLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "splitLine": {
                "show": false
            },
            min: '2011-11-28',
            max: '2017-07-25',
        }
    ],
    "yAxis": [{
            "data": [],
            "gridIndex": 0,
            "splitLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "axisLine": {
                "show": false
            },
            "axisLabel": {
                "show": false
            }
        },
        {
            "type": "value",
            "gridIndex": 1,
            "axisLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "axisLabel": {
                "show": false
            },
            "splitLine": {
                "show": false
            }
        },
        {
            "type": "value",
            "gridIndex": 2,
            "axisLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "axisLabel": {
                "show": false
            },
            "splitLine": {
                "show": false
            }
        },
        {
            "data": [],
            "gridIndex": 0,
            "splitLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "axisLine": {
                "show": false
            },
            "axisLabel": {
                "show": false
            }
        },
        {
            "gridIndex": 3,
            "splitLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "axisLine": {
                "show": false
            },
            "axisLabel": {
                "show": false
            },
            
        },
        {
            "gridIndex": 4,
            "splitLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "axisLine": {
                "show": false
            },
            "axisLabel": {
                "show": false
            },
            
        }
    ],
    series: [{
            "type": "custom",
            "itemStyle": {
                "opacity": 0.8
            },
            "encode": {
                "x": [1, 2],
                "y": [0]
            },
            "renderItem": renderItem,
            "data": [{
                "value": [0, "2011-12-28", "2012-06-04", "Admission"]
            }, {
                "value": [0, "2012-12-28", "2013-01-04", "Outpatient"]
            }, {
                "value": [0, "2014-05-20", "2014-08-03", "Admission"]
            }, {
                "value": [0, "2016-06-22", "2016-07-25", "Emergency"]
            }]
        }, {
            "type": "line",
            "yAxisIndex": 2,
            "xAxisIndex": 2,
            "data": [
                ["2011-11-28", 0],
                ["2017-07-25", 0]
            ],
            "symbol": "none",
            "lineStyle": {
                "color": "transparent"
            },
            markArea: {
                silent: true,
                itemStyle: {
                    color: 'rgba(83,165,138,.1)',
                },
                data: [
                    [{
                            coord: ['2013-05-01'],
                        },
                        {
                            coord: ['2015-05-16'],
                        },
                    ],
                ],
            },
        }, {
            "type": "custom",
            "yAxisIndex": 3,
            "xAxisIndex": 3,
            "itemStyle": {
                "opacity": 0.8,
            },
            "renderItem": renderItem,
            "encode": {
                "x": [1, 2],
                "y": [0]
            },
            "data": [{
                "value": [0, "2011-11-28", "2017-07-25"]
            }]
        },
        // {
        //  // 个性化 data zoom slider
        //   type: 'pictorialBar',
        //   yAxisIndex: 1,
        //   xAxisIndex: 1,
        //   barWidth: 1,
        //   itemStyle: {
        //     color: '#18A2B2',
        //     borderColor: '#18A2B2',
        //   },
        //   symbol: 'rect',
        //   data: [
        //     [0, 8],
        //     [100, 8],
        //   ],
        // },
        {
            type: "pictorialBar",
            data: [
                // ['2011-11-28', 8],
                ['2013-02-29', 8]
            ],
            zlevel: 999,
            xAxisIndex: 4,
            yAxisIndex: 4,
            barWidth: 1,
            symbol: "rect",
            symbolSize: ['100%', 90],
            symbolOffset: [8,0],
            itemStyle: {
                normal: {
                    color: {
                        //图形颜色
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                                offset: 0,
                                color: "#D88000", // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "#D88000", // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                    // shadowColor: "#D0D6E5",
                    // shadowBlur: 1,
                },
            },
            label: {
                show: true,
                width: 90,
                height: 50,
                padding: [0, 0, 0, 10],
                backgroundColor:'rgba(239,183,19,0.40)',
                // shadowColor: "#D88000",
                // shadowBlur: 4,
                // borderRadius: 5,
                position: "top",
                offset: [57, 55],
                formatter: function(param) {
                    console.log(param)
                    return ( `{a|${'首次转移'}}\n ` + `{b|${'2011-11-28'}}`  + `{c|${3}}`);
                },
                rich: {
                    a: {
                        lineHeight: 0,
                        fontWeight: 400,
                        fontSize: 12,
                        padding: [-35, 0, 0, 3],
                    },
                    b: {
                        color: 'rgba(27,27,27,0.54)',
                        fontWeight: 400,
                        fontSize: 12,
                        lineHeight: 30,
                        padding: [-45, 0, 0, 0],
                        align: "left",
                    },
                    c: {
                        backgroundColor: {
                            width: 24,
                            height: 24,
                            image: "data:image/png;base64,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"
                        },
                        height: 24,
                        width: 24,
                        align: 'right',
                        padding: [2, 8, 0, 0],
                    }
                },
            },
        },
        {
            type: "pictorialBar",
            data: [
                ['2011-11-28', 8],
                // ['2012-02-29', 8]
            ],
            xAxisIndex: 4,
            yAxisIndex: 4,
            zlevel: 1000,
            barWidth: 1,
            symbol: "rect",
            symbolSize: ['100%', 90],
            itemStyle: {
                normal: {
                    color: {
                        //图形颜色
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                                offset: 0,
                                color: "#D88000", // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "#D88000", // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                    // shadowColor: "#D0D6E5",
                    // shadowBlur: 1,
                },
            },
            label: {
                show: true,
                width: 90,
                height: 50,
                padding: [0, 0, 0, 10],
                backgroundColor:'rgba(239,183,19,0.40)',
                // shadowColor: "#D88000",
                // shadowBlur: 4,
                // borderRadius: 5,
                position: "top",
                offset: [49, 55],
                formatter: function(param) {
                    console.log(param)
                    return ( `{a|${'首次复发'}}\n ` + `{b|${'2011-11-28'}}\n` );
                },
                rich: {
                    a: {
                        lineHeight: 0,
                        fontWeight: 400,
                        fontSize: 12,
                        padding: [-35, 0, 0, 3],
                    },
                    b: {
                        color: 'rgba(27,27,27,0.54)',
                        fontWeight: 400,
                        fontSize: 12,
                        lineHeight: 30,
                        padding: [-45, 0, 0, 0],
                        align: "left",
                    },
                },
            },
        },
        
        {
            type: "pictorialBar",
            data: [
                ['2011-11-28', 8],
                ['2012-02-29', 8]
            ],
            xAxisIndex: 5,
            yAxisIndex: 5,
            barWidth: 50,
            symbol: "rect",
            // z: 100,
            symbolSize: ['200%', 50],
            symbolOffset: [50, -40] ,
            itemStyle: {
                normal: {
                    color: {
                        //图形颜色
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                                offset: 0,
                                color: "transparent", // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "transparent", // 100% 处的颜色
                            },
                        ],
                        global: false, // 缺省为 false
                    },
                    // shadowColor: "#D0D6E5",
                    // shadowBlur: 1,
                },
            },
        },
    ]
};