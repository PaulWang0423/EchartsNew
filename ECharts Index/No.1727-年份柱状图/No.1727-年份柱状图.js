var xData2 = ["1997年", "2010年", "2019年"];
var data1 = [2, 15, 40];
// var data2 = [400, 200, 300];
var barWidth = 30;
option = {
    backgroundColor: '#021132',
    tooltip: {
        trigger: 'item',
    },
    // 左右距离
    grid: {
        left: 10,
        bottom: 100
    },
    xAxis: {
        data: xData2,
        offset: 14,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        minInterval: 1,
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 16,
            },
            margin: 26, //刻度标签与轴线之间的距离。
        },
    },
    yAxis: {
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
            textStyle: {
                color: '#fff',
                fontSize: 16,
            },
        }
    },
    series: [{ // 上半截柱子
            name: '2019',
            type: 'bar',
            barWidth: barWidth,
            barGap: '-100%',
            z: 0,
            itemStyle: {
                color: '#163F7A',
                opacity: .7,
            },
            data: []
        },
        { //下半截柱子
            name: '2020',
            type: 'bar',
            barWidth: barWidth,
            barGap: '-100%',
            itemStyle: { //lenged文本
                opacity: .7,
                color: function(params) {
                    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FF9A22' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#FFD56E' // 100% 处的颜色
                    }], false)
                }
            },
            data: data1
        },
        { //上半截柱子顶部圆片
            "name": "",
            "type": "pictorialBar",
            "symbolSize": [barWidth, 15],
            "symbolOffset": [0, -5],
            "z": 12,
            "symbolPosition": "end",
            silent: true, 
            itemStyle: {
                color: '#163F7A',
                opacity: 1,
            },
            label: {
                show: false,
                position: 'top',
                fontSize: 16,
                color: '#fff',
            },
            "data": []
        },
        { //下半截柱子顶部圆片
            "name": "",
            "type": "pictorialBar",
            "symbolSize": [barWidth, 15],
            "symbolOffset": [0, -8],
            "z": 12,
            silent: true, 
            itemStyle: {
                opacity: 1,
                color: function(params) {
                    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FF9A22' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#FFD56E' // 100% 处的颜色
                    }], false)
                }
            },
            label: {
                show: true,
                position: 'top',
                fontSize: 16,
                color: '#fff',
                formatter:(item)=>{
                    // console.log(item.value)
                    return `${item.value}亿`
                    return 'ssss'
                }
            },
            "symbolPosition": "end",
            "data": data1
        },
        { //下半截柱子底部圆片
            "name": "",
            "type": "pictorialBar",
            "symbolSize": [barWidth, 15],
            "symbolOffset": [0, 5],
            "z": 11,
            silent: true,
            itemStyle: {
                opacity: 1,
                color: function(params) {
                    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FF9A22' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#FFD56E' // 100% 处的颜色
                    }], false)
                }
            },
            "data": [1, 1, 1]
        },
        // 底部圆圈图案配置
        {
            name: '',
            type: 'pictorialBar',
            legendHoverLink: false,
            symbolSize: [47, 16],
            symbolOffset: [0, 11],
            z: 10,
            silent: true, // 图形不响应和触发鼠标事件
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: '#3ACDC5',
                    borderWidth: 2
                }
            },
            data: [50, 50, 50]
        }, {
            name: '',
            type: 'pictorialBar',
            legendHoverLink: false,
            barCategoryGap: 20,
            symbolSize: [62, 22],
            symbolOffset: [0, 17],
            silent: true, // 图形不响应和触发鼠标事件
            z: 10,
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderColor: "#02c3f1",
                    borderWidth: 2
                }
            },
            data: [1, 1, 1]
        },
    ]
};