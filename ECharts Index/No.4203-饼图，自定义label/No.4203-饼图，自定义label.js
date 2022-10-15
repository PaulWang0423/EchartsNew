var seriesData = [{
    name: "系统名称1",
    value: "10"
}, {
    name: "系统名称2",
    value: "40"
}, {
    name: "系统名称3",
    value: "50"
}, {
    name: "系统名称4",
    value: "40"
}, {
    name: "系统名称5",
    value: "40"
}, ]
let colorArr = ['#0A5CE0', '#729CDD', '#4EBB96', '#D5B829', '#DB611A']
option = {
    backgroundColor: "#090e36",
    // tooltip: {
    //     trigger: 'item',
    //     borderColor: 'rgba(255,255,255,.3)',
    //     backgroundColor: 'rgba(13,5,30,.6)',
    //     borderWidth: 1,
    //     padding: 5,
    //     formatter: function(parms) {
    //         var str = parms.marker + "" + parms.data.name + "</br>" +
    //             "数量：" + parms.data.value + "元</br>" +
    //             "占比：" + parms.percent + "%";
    //         return str;
    //     }
    // },
    series: [{
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['40%', '56%'],
        selectedMode: 'single',
        selectedOffset: 10,
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 15,
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorArr[params.dataIndex]
                }
            }
        },
        label: {
            normal: {
                formatter: function(params) {
                    return '{a|' + params.name + '}\n{b|' + params.value +'}{c|'+ '个'+'}\n{hr|}' //引导线上面文字
                },
                distanceToLabelLine: 0,
                padding: [0, 0, 0, 0],
                rich: {
                    hr: {
                        backgroundColor: 't',
                        width: 3,
                        height: 3,
                        borderRadius: 3,
                        shadowBlur: 5,
                        shadowColor: "#fff",
                        shadowOffsetx: 20,
                        shadowOffsety: 20,
                        padding: [3, 3, 0, -12]
                    },
                    a: {
                        color: 'white',
                        padding: [-40, 5, -30, 10]
                    },
                    b: {
                        fontSize: 28,
                        padding: [-20, -5, 40, 10],
                        height: -20
                    },
                    c: {
                        fontSize: 12,
                        padding: [-25,10, 40, 10],
                        height: -20
                    },
                }
            }

        },
        labelLine: {
            show: true,
            normal: {
                length: 20,
                length2: 30,
                lineStyle: {
                    width: 1
                }
            }
        },
        data: seriesData
    }]
};