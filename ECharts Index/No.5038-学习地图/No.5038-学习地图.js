myChart.showLoading();
$.get('https://cdn.jsdelivr.net/gh/apache/incubator-echarts-website@asf-site/examples/data/asset/data/flare.json', function (data) {
    myChart.hideLoading();

    myChart.setOption(option = {

        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },

        series:[
            {
                type: 'tree',

                data: [data],

                left: '2%',
                right: '2%',
                top: '20%',
                bottom: '8%',

                symbol: 'emptyCircle',

                orient: 'BT',

                expandAndCollapse: true,

                label: {
                    position: 'bottom',
                    rotate: 90,
                    verticalAlign: 'middle',
                    align: 'right'
                },

                leaves: {
                    label: {
                        position: 'top',
                        rotate: 90,
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },

                animationDurationUpdate: 750
            }
        ]
    });
});
