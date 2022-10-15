option = {
    title: {
        text: '缩放问题'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        type: 'graph',
        layout: 'none',
        symbolSize: 50,
        roam: true,
        label: {
            show: true
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
            fontSize: 20
        },
        data: [{
            name: '节点1',
            x: 300,
            y: 300
        }, {
            name: '节点2',
            x: 800,
            y: 300
        }, {
            name: '节点3',
            x: 550,
            y: 100
        }, {
            name: '节点4',
            x: 550,
            y: 500
        }],
        // links: [],
        links: [{
            source: '节点1',
            target: '节点3'
        }, {
            source: '节点2',
            target: '节点3'
        }, {
            source: '节点2',
            target: '节点4'
        }, {
            source: '节点1',
            target: '节点4'
        }],
        lineStyle: {
            opacity: 0.9,
            width: 2,
            curveness: 0
        }
    }]
};