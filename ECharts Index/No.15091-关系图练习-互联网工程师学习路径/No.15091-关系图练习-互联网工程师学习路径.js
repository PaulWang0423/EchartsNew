option = {
    title: {
        text: '互联网工程师学习路径'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    legend: {
        x: "center",
        show: true,
        data: ["运维", "测试", '应用', '实施', '开发'] // 此处不显示根节点学生
    },
    series: [

        {
            type: 'graph',
            layout: 'force',
            symbolSize: function(size) {
                return size;
            },
            focusNodeAdjacency: true,
            roam: true,
            categories: [{
                name: '学生',
            }, {
                name: '运维',
            }, {
                name: '测试',
                // itemStyle: { 可配置颜色
                //     normal: {
                //         color: "blue",
                //     }
                // }
            }, {
                name: '应用',
            }, {
                name: '实施',
            }, {
                name: '开发',
            }],
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 12
                    },
                }
            },
            force: {
                repulsion: 1000
            },
            tooltip: {
                formatter: function(node) { // 区分连线和节点，节点上额外显示其他数字
                    if (!node.value) {
                        return node.data.name;
                    } else {
                        return node.data.name + ":" + node.data.showNum;
                    }
                },
            },
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 1,
                    curveness: 0.3
                }
            },
            data: [{
                name: '王小二',
                draggable: true, // 是否可以拖拽，默认false
                category: 0, // 这是种类，运维1测试2应用3实施4开发5
                number: 10, // 这是编号 非必须，目的仅为方便编写line
                value: 45, //图形大小
                showNum: 25 //节点需要显示的额外内容
            }, {
                name: '运维1',
                number: 1,
                category: 1,
                draggable: true,
                value: 40,
                showNum: 35
            }, {
                name: '测试1',
                number: 2,
                category: 2,
                draggable: true,
                value: 45,
                showNum: 35
            }, {
                name: '应用1',
                number: 3,
                category: 3,
                draggable: true,
                value: 45,
                showNum: 35
            }, {
                name: '实施1',
                number: 4,
                category: 4,
                draggable: true,
                value: 45,
                showNum: 35
            }, {
                name: '开发1',
                number: 5,
                category: 5,
                draggable: true,
                value: 45,
                showNum: 35
            }, {
                name: 'JS',
                number: 6,
                category: 5,
                draggable: true,
                value: 35,
                showNum: 35
            }, {
                name: 'php',
                number: 7,
                category: 5,
                draggable: true,
                value: 20,
                showNum: 35
            }, {
                name: 'java',
                number: 8,
                category: 5,
                draggable: true,
                value: 45,
                showNum: 35
            }],
            links: [{
                source: '王小二', // 可以用name 可以用number，但name不能重名
                target: '运维1'
            }, {
                source: 0,
                target: 2,
            }, {
                source: 0,
                target: 3,
            }, {
                source: 0,
                target: 4,
            }, {
                source: 0,
                target: 5,
            }, {
                source: 5,
                target: 6,
            }, {
                source: 6,
                target: 7,
            }, {
                source: 6,
                target: 8,
            }]
        }
    ]
};