var uploadedDataURL = "/asset/get/s/data-1461574766790-SyPd3Ljl.json";

myChart.showLoading();
$.getJSON(uploadedDataURL, function (data) {
    myChart.hideLoading();

    myChart.setOption(option = {
        title: {
            text: 'Sankey Diagram'
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'

        },
        series: [
            {
                type: 'sankey',
                layout:'none',
                data: data.nodes,
                links: data.links,
                itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#aaa'
                    }
                },
                lineStyle: {
                    normal: {
                        curveness: 0.5
                    }
                }
            }
        ]
    });
});