let colors = ['rgba(124, 124, 191, 1)', 'rgba(233, 195, 116, 1)'];
let c = -13;
const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c0 = [shape.x + c, shape.y];
        const c1 = [shape.x - 5 + c, shape.y - 5];
        const c2 = [xAxisPoint[0] - 5 + c, xAxisPoint[1] - 5];
        const c3 = [xAxisPoint[0] + c, xAxisPoint[1]];
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
    },
});
const CubeRight = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c1 = [shape.x + c, shape.y];
        const c2 = [xAxisPoint[0] + c, xAxisPoint[1]];
        const c3 = [xAxisPoint[0] + 18 + c, xAxisPoint[1] - 0];
        const c4 = [shape.x + 18 + c, shape.y - 0];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
const CubeTop = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const c1 = [shape.x + c, shape.y];
        const c2 = [shape.x + 18 + c, shape.y - 0];
        const c3 = [shape.x + 15 + c, shape.y - 5];
        const c4 = [shape.x - 5 + c, shape.y - 5];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);
const CubeLeft1 = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c0 = [shape.x - c, shape.y];
        const c1 = [shape.x - 5 - c, shape.y - 5];
        const c2 = [xAxisPoint[0] - 5 - c, xAxisPoint[1] - 5];
        const c3 = [xAxisPoint[0] - c, xAxisPoint[1]];
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
    },
});
const CubeRight1 = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c1 = [shape.x - c, shape.y];
        const c2 = [xAxisPoint[0] - c, xAxisPoint[1]];
        const c3 = [xAxisPoint[0] + 18 - c, xAxisPoint[1] - 0];
        const c4 = [shape.x + 18 - c, shape.y - 0];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
const CubeTop1 = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const c1 = [shape.x - c, shape.y];
        const c2 = [shape.x + 18 - c, shape.y - 0];
        const c3 = [shape.x + 15 - c, shape.y - 5];
        const c4 = [shape.x - 5 - c, shape.y - 5];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
echarts.graphic.registerShape('CubeLeft1', CubeLeft1);
echarts.graphic.registerShape('CubeRight1', CubeRight1);
echarts.graphic.registerShape('CubeTop1', CubeTop1);
let xData = ['客户1', '客户2', '客户3', '客户4', '客户5']
const planned = [50, 10, 30, 49, 54];
const completed = [22, 10, 70, 29, 54];
option = {
    backgroundColor: 'RGBA(27, 31, 44, 1)',
    grid: {
        left: 30,
        right: 30,
        bottom: 30,
        top: 70,
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        // 坐标轴指示器，坐标轴触发有效(axis)
        axisPointer: {
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            let returnData = params[0].axisValue + '<br/>';
            for (let i = 0; i < params.length; i++) {
                const indexColor = '#da953e';
                returnData += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background:' + colors[i] + '"></span>';
                returnData += params[i].seriesName + '<span style="padding-left:13px;">' + params[i].value + '</span><br/>';
            }
            return returnData;
        },
        // extraCssText: 'font-size: 22px; line-height: 30px',
    },
    legend: {
        data: [
            {
                name: '计划量',
                itemStyle: {
                    color: colors[0]
                }
            },
            {
                name: '完成量',
                itemStyle: {
                    color: colors[1]
                }
            }
        ],
        textStyle: {
            fontFamily: 'MicrosoftYaHei',
            fontSize: 14, 
            color: 'rgba(178, 175, 173, 1)'
        },
        itemWidth: 10,
        itemHeight: 8,
        itemGap: 15,
        top: '1%',
        right: '3%'
    },
    xAxis: {
        type: 'category',
        data: xData,
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(52, 51, 51, 1)',
            },
        },
        offset: 10,
        axisTick: {
            show: false,
            length: 9,
            alignWithLabel: true,
            lineStyle: {
                color: '#748EAB',
            },
        },
        axisLabel: {
            fontFamily: 'MicrosoftYaHei',
            fontSize: 12,
            color: 'rgba(113, 113, 113, 1)',
            rotate: -30
        },
    },
    yAxis: {
        type: 'value',
        name: '车',
        nameTextStyle: {
            fontFamily: 'MicrosoftYaHei',   
            fontSize: 12,
            color: 'rgba(113, 113, 113, 1)'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(52, 51, 51, 1)',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(52, 51, 51, 1)',
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            fontFamily: 'MicrosoftYaHei',   
            fontSize: 12,
            color: 'rgba(113, 113, 113, 1)'
        },
        min: 0,
    },
    series: [
        {
            type: 'custom',
            name: '计划量',
            renderItem: (params, api) => {
                const location = api.coord([api.value(0), api.value(1)]);
                return {
                    type: 'group',
                    children: [
                        {
                            type: 'CubeLeft',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0]),
                            },
                            style: {
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgba(85, 97, 176, 1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(16, 26, 57, 0)',
                                    },
                                ]),
                            },
                        },
                        {
                            type: 'CubeRight',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0]),
                            },
                            style: {
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgba(116, 127, 219, 1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(28, 41, 83, 0)',
                                    },
                                ]),
                            },
                        },
                        {
                            type: 'CubeTop',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0]),
                            },
                            style: {
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgba(160, 175, 227, 1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(160, 175, 227, 1)',
                                    },
                                ]),
                            },
                        },
                    ],
                };
            },
            data: planned,
        },
        {
            type: 'custom',
            name: '完成量',
            renderItem: (params, api) => {
                const location = api.coord([api.value(0), api.value(1)]);
                return {
                    type: 'group',
                    children: [
                        {
                            type: 'CubeLeft1',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0]),
                            },
                            style: {
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgba(182, 152, 62, 1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(140, 117, 64, 0)',
                                    },
                                ]),
                            },
                        },
                        {
                            type: 'CubeRight1',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0]),
                            },
                            style: {
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgba(243, 211, 132, 1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(154, 139, 84, 0)',
                                    },
                                ]),
                            },
                        },
                        {
                            type: 'CubeTop1',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0]),
                            },
                            style: {
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgba(255, 241, 170, 1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(255, 241, 170, 1)',
                                    },
                                ]),
                            },
                        },
                    ],
                };
            },
            data: completed,
        }
    ],
};
