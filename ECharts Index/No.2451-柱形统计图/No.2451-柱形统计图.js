const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c0 = [shape.x + 7, shape.y];
        const c1 = [shape.x - 10, shape.y];
        const c2 = [xAxisPoint[0] - 10, xAxisPoint[1]];
        const c3 = [xAxisPoint[0] + 7, xAxisPoint[1]];
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
    },
});
// 绘制右侧面
const CubeRight = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c1 = [shape.x + 7, shape.y];
        const c2 = [xAxisPoint[0] + 7, xAxisPoint[1]];
        const c3 = [xAxisPoint[0] + 15, xAxisPoint[1] - 10];
        const c4 = [shape.x + 15, shape.y - 10];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
// 绘制顶面
const CubeTop = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const c1 = [shape.x + 7, shape.y];
        const c2 = [shape.x + 15, shape.y - 10]; //右点
        const c3 = [shape.x - 2, shape.y - 10];
        const c4 = [shape.x - 10, shape.y];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
// 注册三个面图形
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);
option = {
    backgroundColor: 'rgb(2,35,75)',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    grid: {
        left: '0',
        right: '0',
        top: '8%',
        bottom: '0',
        containLabel: true,
    },
    legend: {
        data: ['一', '二', '三'],
        show: false,
    },
    xAxis: {
        type: 'category',
        data: ['测试1', '测试2', '测试3'],
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgb(177,182,189)',
            },
        },
        axisTick: {
            show: false,
            length: 9,
            alignWithLabel: true,
            lineStyle: {
                color: '#7DFFFD',
            },
        },
        axisLabel: {
            fontSize: 12,
        },
    },
    yAxis: {
        type: 'value',
        min: 0,
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgb(177,182,189)',
            },
        },
        splitLine: {
            show: true,
        },
        axisLabel: {
            fontSize: 12,
        },
        boundaryGap: ['20%', '20%'],
    },
    series: [
        {
            type: 'custom',
            name: '一',
            renderItem: (params, api) => {
                let cubeLeftStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(1,180,255)',
                    },
                    {
                        offset: 1,
                        color: 'rgb(3,54,250)',
                    },
                ]);
                let cubeRightStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(2,99,253)',
                    },
                    {
                        offset: 1,
                        color: 'rgb(3,86,243)',
                    },
                ]);
                let cubeTopStyle = {
                    color: 'rgb(2,110,255)',
                };
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
                                fill: cubeLeftStyle,
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
                                fill: cubeRightStyle,
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
                                fill: cubeTopStyle,
                            },
                        },
                    ],
                };
            },
            data: [200, 300, 350],
        },
        {
            type: 'custom',
            name: '二',
            renderItem: (params, api) => {
                let cubeLeftStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(255,204,1)',
                    },
                    {
                        offset: 1,
                        color: 'rgb(246,254,3)',
                    },
                ]);
                let cubeRightStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(202,124,3)',
                    },
                    {
                        offset: 1,
                        color: 'rgb(252,121,1)',
                    },
                ]);
                let cubeTopStyle = {
                    color: 'rgb(253,216,1)',
                };
                var location = api.coord([api.value(0), api.value(1)]);
                location = [location[0] + 30, location[1]];
                var location1 = api.coord([api.value(0), 0]);
                location1 = [location1[0] + 30, location1[1]];
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
                                xAxisPoint: location1,
                            },
                            style: {
                                fill: cubeLeftStyle,
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
                                xAxisPoint: location1,
                            },
                            style: {
                                fill: cubeRightStyle,
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
                                xAxisPoint: location1,
                            },
                            style: {
                                fill: cubeTopStyle,
                            },
                        },
                    ],
                };
            },
            data: [200, 300, 350],
        },
        {
            type: 'custom',
            name: '三',
            renderItem: (params, api) => {
                let cubeLeftStyle = {
                    color: 'rgb(129,2,255)',
                };
                let cubeRightStyle = {
                    color: 'rgb(90,1,255)',
                };
                let cubeTopStyle = {
                    color: 'rgb(130,2,255)',
                };
                var location = api.coord([api.value(0), api.value(1)]);
                location = [location[0] - 30, location[1]];
                var location1 = api.coord([api.value(0), 0]);
                location1 = [location1[0] - 30, location1[1]];
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
                                xAxisPoint: location1,
                            },
                            style: {
                                fill: cubeLeftStyle,
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
                                xAxisPoint: location1,
                            },
                            style: {
                                fill: cubeRightStyle,
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
                                xAxisPoint: location1,
                            },
                            style: {
                                fill: cubeTopStyle,
                            },
                        },
                    ],
                };
            },
            data: [200, 300, 350],
        },
    ],
};
