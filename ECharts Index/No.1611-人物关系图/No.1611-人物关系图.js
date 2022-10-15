option = {
    backgroundColor: '#1a4377',
    tooltip: {},
    toolbox: {
        feature: {
            saveAsImage: {},
        },
    },
    series: [
        {
            type: 'graph',
            layout: 'force',
            force: {
                repulsion: 1500,
                edgeLength: 120,
                layoutAnimation: true,
            },
            symbolSize: 70,
            nodeScaleRatio: 1, //图标大小是否随鼠标滚动而变
            roam: true, //缩放
            draggable: true, //节点是否可以拖拽
            edgeSymbol: ['none', 'arrow'], //线2头标记
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    color: '#FFF',
                },
            },
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 12,
                        color: '#FFF',
                    },
                    formatter: '{c}',
                },
            },
            symbolKeepAspect: false,
            focusNodeAdjacency: false, // 指定的节点以及其所有邻接节点高亮
            itemStyle: {
                normal: {
                    borderColor: '#29ACFC',
                    borderWidth: 2,
                    shadowColor: '#29ACFC',
                    color: '#29ACFC',
                    curveness: 0.08,
                },
            },

            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 2,
                    curveness: 0.15,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#FFF', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#FFF', // 100% 处的颜色
                            },
                        ],
                        globalCoord: false,
                    },
                },
            },

            data: [
                {
                    name: '李富贵',
                    tooltip: {
                        formatter: '{b} <br/>性别：男<br/>职务：富阳区灵桥镇灵桥村务农',
                    },
                    itemStyle: {
                        normal: {
                            color: '#FCBB5B',
                            borderColor: '#FCBB5B',
                            shadowColor: '#FCBB5B',
                        },
                    },
                },
                {
                      tooltip: {
                        formatter: '{b} <br/>性别：男<br/>出生年月：19951114<br/>星座：处女座',
                    },
                    name: '王桂花',
                },
                {
                      tooltip: {
                        formatter: '{b} <br/>性别：男<br/>出生年月：19951114<br/>星座：处女座',
                    },
                    name: '李思思',
                },
                {
                    name: '自住房屋',
                },
                {
                    name: '车子',
                },
                {
                    name: '租房',
                },
                {
                    name: '黄涛',
                },
                {
                    name: '于海',
                },
                {
                    name: '张柏',
                },
                {
                    name: '付梦杰',
                },
            ],
            links: [
                {
                    source: 0,
                    target: 1,
                    value: '夫妻',
                },
                {
                    source: 0,
                    target: 2,
                    value: '父亲',
                },
                {
                    source: 2,
                    target: 0,
                    value: '女儿',
                },
                {
                    source: 0,
                    target: 3,
                    value: '自住',
                },
                {
                    source: 0,
                    target: 4,
                    value: '车主',
                },
                {
                    source: 0,
                    target: 5,
                    value: '租户',
                },
                {
                    source: 5,
                    target: 6,
                    value: '租赁',
                },
                {
                    source: 5,
                    target: 7,
                    value: '租赁',
                },
                {
                    source: 5,
                    target: 8,
                    value: '租赁',
                },
                {
                    source: 5,
                    target: 9,
                    value: '租赁',
                },
            ],
        },
    ],
};
