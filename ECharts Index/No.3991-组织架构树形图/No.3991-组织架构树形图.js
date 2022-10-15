myChart.showLoading();
let src1 = "data:image/png;base64,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";
let src2="data:image/png;base64,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";
var data2 = [{
    name: "AAAAA",
    label: {
        normal: {
            backgroundColor: {
                image: src1
            }
        }
    },
    children: [{
            name: "BBBBB",
            label: {
                normal: {
                    backgroundColor: {
                        image: src1
                    }
                }
            },
            children: [{
                name: "CCCCC",
                children: [{
                    name: "小花"
                }, {
                    name: "小花"
                }]
            }, {
                name: "CCCCC",
                children: [{
                    name: "翠花"
                }, {
                    name: "秋月"
                }]
            }, {
                name: "CCCCC",
                children: [{
                    name: "翠花"
                }, {
                    name: "秋月"
                }]
            }, {
                name: "CCCCC",
                children: [{
                    name: "翠花"
                }, {
                    name: "秋月"
                }]
            }]
        },

    ],

}];

myChart.hideLoading();

myChart.setOption(option = {
    backgroundColor: '#02246d',
    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },
    legend: {
        show: false,
    },
    series: [{
            type: 'tree',
            width: 800,//修改树形图的宽度
            orient: 'vertical',
            name: '治安管理工作',
            data: data2,
            top: '10%',
            bottom: '26%',
            x: 'center',
            symbolSize: 1,
            itemStyle:{
                // 节点颜色
                normal:{
                    color:"#fff",
                    borderColor:"#fff"
                }
            },
            initialTreeDepth: 3, //树图初始展开的层级（深度）。根节点是第 0 层，然后是第 1 层、第 2 层，
            lineStyle: {
                normal: {
                    color: 'rgba(255,255,255,1)',
                    curveness: 1,
                       
                }
            },
            label: {
                normal: {
                    position: 'top',
                    // verticalAlign: 'top',
                    align: 'center',
                    distance :0,
                    backgroundColor: {
                        image: src1
                    },
                    color: '#fff',
                    padding: 3,
                    formatter: [
                        '{box|{b}}'
                    ].join('\n'),
                    rich: {
                        box: {
                            height: 30,
                            width:60,
                            color: '#0dffff',
                            padding: [0, 5],
                            align: 'center',
                            writingMode: "vertical-rl"
                        }
                    }
                }
            },
            leaves: {
                label: {
                    normal: {
                        position: 'center',
                        verticalAlign: 'middle',
                        align: 'left',
                        backgroundColor: {
                            image: src2
                        },
                        rotate: -90,
                       
                        rich: {
                            box: {
                                width: 60,
                                height: 30,
                                color: '#0dffff',
                                padding: [0, 5],
                                align: 'center',
                                
                            }
                        }
                    }
                }
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
        },

    ]
});
