var graph = {
        "nodes": [{
            "name": "A",
            "value": [
                "教授",
                "在职",
                "党委办公室、校长办公室"
            ],
            "category": "中心教师",
            "symbolSize": 50,
            "tooltip": {
                "formatter": "{b0}:{c0}"
            }
        },
            {
                "name": "B",
                "category": "论文",
                "value": [
                    "期刊论文",
                    "2005"
                ],
                "symbolSize": 20,
                "tooltip": {
                    "formatter": "{b0}:{c0}"
                }
            },
            {
                "name": "C",
                "category": "论文合作教师",
                "symbolSize": 50
            },

            {
                "name": "D",
                "category": "项目",
                "value": [
                    "信息与通信工程学院",
                    "立项日期：20131101"
                ],
                "symbolSize": 20,
                "tooltip": {
                    "formatter": "{b0}:{c0}"
                }
            },
            {
                "name": "N",
                "category": "项目合作教师",
                "symbolSize": 50
            },
            {
                "name": "Q",
                "category": "项目",
                "symbolSize": 20
            },

            {
                "name": "S",
                "category": "项目",
                "symbolSize": 20
            },
            {
                "name": "E",
                "category": "专著专利",
                "symbolSize": 20,
                "value": [
                    "专利文献",
                    "2009-07-21"
                ],
                "tooltip": {
                    "formatter": "{b0}:{c0}"
                }
            },
            {
                "name": "W",
                "category": "专著专利",
                "symbolSize": 20
            },
            {
                "name": "Y",
                "category": "专著专利",
                "symbolSize": 20
            },
            {
                "name": "Z",
                "category": "专著专利",
                "symbolSize": 20
            },
            {
                "name": "F",
                "category": "专著专利合作教师",
                "symbolSize": 50
            },
            {
                "name": "O",
                "category": "专著专利合作教师",
                "symbolSize": 50
            },
            {
                "name": "P",
                "category": "专著专利合作教师",
                "symbolSize": 50
            },
            {
                "value": [
                    "信息与通信工程学院",
                    "信息工程 "
                ],
                "name": "G",
                "category": "课程",
                "symbolSize": 20,
                "tooltip": {
                    "formatter": "{b0}:{c0}"
                }
            },
            {
                "name": "I",
                "category": "课程",
                "symbolSize": 20
            },
            {
                "name": "L",
                "category": "课程",
                "symbolSize": 20
            },
            {
                "name": "H",
                "category": "课程合作教师",
                "symbolSize": 50
            },
            {
                "name": "M",
                "category": "课程合作教师",
                "symbolSize": 50
            }


        ],
        "links": [{
            "source": "A",
            "target": "B"
        },
            {
                "source": "B",
                "target": "C"
            },
            {
                "source": "A",
                "target": "D"
            },
            {
                "source": "D",
                "target": "N"
            },
            {
                "source": "N",
                "target": "Q"
            },
            {
                "source": "N",
                "target": "R"
            },
            {
                "source": "A",
                "target": "E"
            },
            {
                "source": "E",
                "target": "F"
            },
            {
                "source": "F",
                "target": "W"
            },
            {
                "source": "F",
                "target": "Y"
            },
            {
                "source": "P",
                "target": "Z"
            },
            {
                "source": "E",
                "target": "O"
            },
            {
                "source": "E",
                "target": "P"
            },
            {
                "source": "A",
                "target": "G"
            },
            {
                "source": "G",
                "target": "H"
            },
            {
                "source": "G",
                "target": "M"
            },
            {
                "source": "M",
                "target": "I"
            },
            {
                "source": "M",
                "target": "L"
            }
        ]
    };
    const defaultCategory = "中心教师";
    const graphTitle = "力导向关系图--实现点击节点展开折叠";
    const currentGraph = {
        nodes: {},
        links: {},
    };
    const nodeMap = {};
    // 页面加载时，第一次初始化图
    function init() {
        // 根据定义的常量，产生currentGraph的默认数据
        // 遍历全部nodes和links，产生node映射map
        for (let i = 0; i < graph.nodes.length; i++) {
            if (graph.nodes[i].category === defaultCategory) {
                currentGraph.nodes[graph.nodes[i].name] = graph.nodes[i];
            }
            nodeMap[graph.nodes[i].name] = graph.nodes[i];
            nodeMap[graph.nodes[i].name]['links'] = {};
            nodeMap[graph.nodes[i].name]['nodes'] = {};
            nodeMap[graph.nodes[i].name]['hasAppend'] = false;
        }
        for (let i = 0; i < graph.links.length; i++) {
            let link = graph.links[i];
            if (nodeMap[link.source] !== undefined && nodeMap[link.target] !== undefined) {
                nodeMap[link.source].links[link.target] = link;
                nodeMap[link.source].nodes[nodeMap[link.target].name] = nodeMap[link.target];
            }
        }

        for (let i = 0; i < graph.nodes.length; i++) {
            graph.nodes[i].itemStyle = null;
            graph.nodes[i].label = {
                normal: {
                    show: graph.nodes[i].symbolSize > 15
                }
            };
        }
        redrawGraph();
    }
    // 处理点击节点展开
    function append(nodeName) {
        // 根据nodeName从nodeMap里拿出对应的nodes和links，并append到currentGraph.nodes currentGraph.links
        let node = nodeMap[nodeName];
        if (node.hasAppend === true || Object.keys(node.nodes).length === 0 || Object.keys(node.links).length === 0) {
            alert("无法继续展开");
            return
        }
        Object.values(node.nodes).forEach(n => {
            currentGraph.nodes[n.name] = n;
    });
        Object.values(node.links).forEach(l => {
            currentGraph.links[l.source + "_" + l.target] = l;
    });
        node.hasAppend = true;
        redrawGraph();
    }
    // 处理点击节点收缩
    function remove(nodeName) {
        //根据nodeName从nodeMap里拿出对应的nodes和links，从currentGraph.nodes currentGraph.links删除当前节点的nodes和links并且递归
        let node = nodeMap[nodeName];
        Object.values(node.nodes).forEach(n => {
            delete currentGraph.nodes[n.name];
        if (n.hasAppend === true && Object.keys(n.nodes).length > 0) {
            remove(n.name);
        }
    });
        Object.values(node.links).forEach(l => {
            delete currentGraph.links[l.source + '_' + l.target];
    });
        // 设置flag 等于false
        node.hasAppend = false;

        redrawGraph();
    }
    // 根据更新后的option重新画图
    function redrawGraph() {
        option.series[0].data = Object.values(currentGraph.nodes);
        option.series[0].links = Object.values(currentGraph.links);
        console.log(option);
        myChart.setOption(option);
    }
    const option = {
        title: {
            text: graphTitle,
            top: 'top',
            left: 'center',
        },
        tooltip: {},
        legend: [],
        animation: false,
        series: [{
            type: 'graph',
            layout: 'force',
            data: Object.values(currentGraph.nodes),
            links: Object.values(currentGraph.links),
            categories: [{
                name: '中心教师',
                itemStyle: {
                    color: '#c23531'
                },

            },
                {
                    name: '专著专利合作教师',
                    itemStyle: {
                        color: '#749f83'
                    },


                },
                {
                    name: '课程合作教师',
                    itemStyle: {
                        color: '#6e7074'
                    },

                },
                {
                    name: '论文合作教师',
                    itemStyle: {
                        color: '#2f4554'
                    },

                },
                {
                    name: '论文',
                    itemStyle: {
                        color: '#61a0a8'
                    },

                },
                {
                    name: '专著专利',
                    itemStyle: {
                        color: '#91c7ae'
                    },

                },
                {
                    name: '课程',
                    itemStyle: {
                        color: '#999ea4'
                    },


                },
                {
                    name: '项目合作教师',
                    itemStyle: {
                        color: '#DEB887'
                    },

                },
                {
                    name: '项目',
                    itemStyle: {
                        color: '#bda29a'
                    },

                }
            ],
            roam: false,
            focusNodeAdjacency: false,
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 1,
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                }
            },
            label: {
                position: 'right',
                formatter: '{b}'
            },
            lineStyle: {
                color: 'target',
                opacity: 0.6,
                curveness: 0.3
            },
            emphasis: {
                lineStyle: {
                    width: 10
                }
            },
            force: {
                layoutAnimation: false,
                repulsion: 500
            }
        }]
    };
    init();

    myChart.on('click', {dataType: 'node'}, function (params) {
        // 关系图的节点被点击时此方法被回调。
        if(params.name ==='B'){ //节点名为B时调用
            alert("你点击了B节点;")
        }
    });
    myChart.on('click', {dataType: 'edge'}, function () {
        // 关系图的边被点击时此方法被回调。
        alert("你点击了边")
    });

    myChart.on('click', function(params) {
        if (params.dataType === "node") {
            const node = nodeMap[params.data.name];
            if (node.hasAppend === true) {
                remove(node.name)
            } else {
                append(node.name);
            }
        }
    });

        //参考树节点修改上面的节点折叠
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
        myChart.on('mousedown', (e) => {
            const name = e.data.name;
        const curNode = myChart._chartsViews[0]._data.nodes.find(item => {
            return item.name === name;
    });
        const depth = curNode.depth;
        const curIsExpand = curNode.isExpand;
        myChart._chartsViews[0]._data.tree._nodes.forEach((item, index) => {
            if (item.depth === depth && item.name !== name && !curIsExpand) {
            item.isExpand = false;
        }
    });
    })
    }