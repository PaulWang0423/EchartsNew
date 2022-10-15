var uploadedDataURL = "/asset/get/s/data-1461736688440-B1OeSA6x.gexf";

myChart.showLoading();
$.get(uploadedDataURL, function (xml) {
    myChart.hideLoading();

    var graph = echarts.dataTool.gexf.parse(xml);
    var categories = [];
    for (var i = 0; i < 9; i++) {
        categories[i] = {
            name: '类目' + i
        };
    }
    graph.nodes.forEach(function (node) {
        node.itemStyle = null;
        node.value = node.symbolSize;
        node.label = {
            normal: {
                show: node.symbolSize > 30
            }
        };
        node.label.normal.show = node.symbolSize > 30;
        node.category = node.attributes.modularity_class;
    });
    option = {
        title: {
            text: 'Les Miserables',
            subtext: 'Circular layout',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {},
        legend: [{
            // selectedMode: 'single',
            data: categories.map(function (a) {
                return a.name;
            })
        }],
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series : [
            {
                name: 'Les Miserables',
                type: 'graph',
                layout: 'circular',
                data: graph.nodes,
                links: graph.links,
                categories: categories,
                roam: true,
                label: {
                    normal: {
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                lineStyle: {
                    normal: {
                        curveness: 0.3
                    }
                },
                tooltip:{
                    formatter:function(params){
                        return params.dataType == 'node' ? params.name: ''
                    }
                }
            }
        ]
    };

    myChart.setOption(option);
}, 'xml');