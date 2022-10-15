/*
    每一根柱子 分成 5部分 '对账中金额','已对账金额','已回款金额','未回款总额','总部分'
    这部分 需要竖着看 
    一共 三根 柱子 也就 是有 3列
    第一列 0 0 2 1 0 代表对已回款金额 1 未回款总额 其他为0
    第二列 1 2 0 0 0 代表对账中金额 1 已对账金额2 其他为0
    第三列 0 0 0 0 3 代表 总部分占 全部 其他为0
*/
let data1 = [{ value: 1, bai: '20%' }, 0, 0];
let data2 = [{ value: 2, bai: '50%' }, 0, 0];
// 已经回款

let data3 = [0, { value: 2, bai: '50%' }, 0];
let data4 = [0, { value: 1, bai: '8%' }, 0];
// 对账进度

let data5 = [0, 0, { value: 3, bai: '100%' }];
// 第一个柱子的数据
var line = ['1', '2', '3'];
var colorList = [
    { 0: '#b9ae4d', 1: '#f5edab' },
    { 0: '#45cbd4', 1: '#6ee2ea' },
    { 0: '#1f77c4', 1: '#5aaaf1' },
];
var colorObj = [
    { 0: '#E2D880', 1: '#7F7416' },
    { 0: '#45cbd4', 1: '#0a777e' },
    { 0: '#459be6', 1: '#18609f' },
];
var opacityColor = ['rgba(185,174,77,0.20)', 'rgba(69,203,212,0.20)', 'rgba(69,203,212,0.0)'];
option = {
    tooltip: {
        trigger: 'axis',
        formatter: function (param) {
            let arr = [];
            for (let i = 4; i < param.length; i++) {
                if (param[i].value !== 0) {
                    arr.push({
                        name: param[i].name === '总应收' ? param[i].name : param[i].seriesName,
                        data: param[i].data,
                        color: param[i].color.colorStops,
                    });
                }
            }
            let baseString = `<div style='border:1px solid rgba(255,255,255,.2);padding:5px;border-radius:3px;'>
                <div>`;
            let string = '';
            arr.forEach((item) => {
                string += `
                    <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${item.color[0].color}"></span>
                    ${item.name}:
                    ${item.data.value}万元
                    <br />
                    占比： ${item.data.bai}
                </div>`;
            });
            baseString = baseString + string;
            return baseString;
        },
    },
    grid: {
        left: '15%',
        top: '20%',
        right: '15%',
        bottom: '10%',
    },
    legend: {
        show: true,
        selectedMode: false,
    },

    xAxis: [
        {
            type: 'value',
            // max:4,
            name: '金额(单位：万元)',
            nameTextStyle: {
                color: '#fff',
                padding: [70, 0, 0, 40], // 四个数字分别为上右下左与原位置距离
            },

            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                },
                margin: 30, //刻度标签与轴线之间的距离。
            },

            axisLine: {
                show: true, //不显示x轴
                lineStyle: {
                    type: 'solid',
                    color: '#2b4163',
                },
            },
            axisTick: {
                show: false, //不显示刻度
            },
            boundaryGap: true,
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#2b4163',
                    width: 0.7,
                },
            },
        },
    ],
    yAxis: {
        type: 'category',
        splitLine: {
            show: false,
            lineStyle: {
                color: '#fff',
                type: 'solid',
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                type: 'solid',
                color: '#2b4163',
            },
        },
        data: ['回款进度', '对账进度', '总应收'],
        axisLabel: {
            show: true,
            margin: 20,
            textStyle: {
                color: '#fff',
                fontSize: 14,
            },
        },
    },
    series: [
        //最顶部的椭圆 5 号
        {
            type: 'pictorialBar',
            symbolSize: [20, 60],
            symbolOffset: [10, 0],
            symbolPosition: 'end',
            z: 12,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(255,255,255,0.2)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(255,255,255,0.2)',
                            },
                        ],
                        false
                    ),
                },
            },
            data: [3, 3, 3],
        },
        // 5号 动的 点
        {
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
            symbolSize: [4, 17],
            symbolOffset: ['0', 3],
            itemStyle: {
                normal: {
                    shadowColor: 'rgba(255,255,255,0.2)',
                    shadowBlur: 5,
                    shadowOffsetY: 3,
                    shadowOffsetX: 0,
                    opacity: 0.2,
                    color: (color) => {
                        return opacityColor[color.dataIndex];
                    },
                },
            },
            data: [3, 3, 3],
        },
        {
            //左侧底部椭圆 1号
            type: 'pictorialBar',
            symbolSize: [20, 60],
            symbolOffset: [-10, 0],
            z: 12,
            itemStyle: {
                normal: {
                    color: (params) => {
                        return colorList[params.dataIndex]['0'];
                    },
                },
            },
            data: [3, 3, 3],
        },
        //中间椭圆 3 号
        {
            type: 'pictorialBar',
            symbolSize: [20, 60],
            symbolOffset: [10, 0],
            z: 12,
            symbolPosition: 'end',
            itemStyle: {
                normal: {
                    color: (params) => {
                        return colorList[params.dataIndex]['1'];
                    },
                },
            },
            data: line,
        },
        // 总应收
        {
            type: 'bar',
            stack: '1',
            barWidth: 60,
            barGap: '100%',
            itemStyle: {
                normal: {
                    color: (color) => {
                        return new echarts.graphic.LinearGradient(1, 0, 0, 1, [
                            {
                                offset: 0,
                                color: colorObj[color.dataIndex]['0'],
                            },
                            {
                                offset: 1,
                                color: colorObj[color.dataIndex]['1'],
                            },
                        ]);
                    },
                },
            },
            data: data5,
        },

        // 已对账金额
        {
            name: '已对账金额',
            type: 'bar',
            stack: '1',
            barWidth: 60,
            barGap: '100%',
            itemStyle: {
                normal: {
                    color: {
                        x: 1,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        type: 'linear',
                        global: false,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#45cbd4',
                            },
                            {
                                offset: 1,
                                color: '#0a777e',
                            },
                        ],
                    },
                },
            },
            data: data3,
        },
        // 对账中金额
        {
            name: '对账中金额',
            type: 'bar',
            stack: '1',
            barWidth: 60,
            barGap: '100%',
            itemStyle: {
                normal: {
                    color: {
                        x: 1,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        type: 'linear',
                        global: false,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(69,203,212,0.20)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(69,203,212,0.20)',
                            },
                        ],
                    },
                },
            },
            data: data4,
        },
        //已回款金额
        {
            name: '已回款金额',
            type: 'bar',
            stack: '1',
            barWidth: 60,
            barGap: '100%',
            itemStyle: {
                color: {
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#E2D880',
                        },
                        {
                            offset: 1,
                            color: '#7F7416',
                        },
                    ],
                },
            },
            data: data1,
        },
        // 未回款总额
        {
            name: '未回款总额',
            type: 'bar',
            stack: '1',
            barWidth: 60,
            barGap: '100%',
            itemStyle: {
                normal: {
                    color: {
                        x: 1,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        type: 'linear',
                        global: false,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(185,174,77,0.20)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(185,174,77,0.20)',
                            },
                        ],
                    },
                },
            },
            data: data2,
        },
    ],
};
