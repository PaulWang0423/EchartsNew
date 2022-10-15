option = {
    backgroundColor: '#000',
    graphic:{
                type: 'image',
                z: 3,
                style: {
                    image: 'data:image/png;base64,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',
                    width: 300,
                    height: 300
                },
                left: 'center',
                top: 'center'
    },
    legend: [{
            orient: "vertical",
            width: "70%",
            textStyle: {
                color: "#009ae2",
                fontSize: 24
            },
            left: "0",
            top: "center",
            padding: [30, 60],
            itemGap: 40,
            data: ["修缮工程", '建设工程', "地下空间"]
        },
        {
            orient: "vertical",
            width: "70%",
            textStyle: {
                color: "#009ae2",
                fontSize: 24
            },
            top: "center",
            right: "0",
            padding: [30, 60],
            itemGap: 40,
            data: ["燃气工程", "房屋检测", "拆除工程", "物业管理"]
        },
    ],
    series: [{
        type: "pie",
        hoverAnimation: false,
        radius: ["43%", "53%"],
        color: ["#5155e6", "#08befa", "#d1ff69", "#1185f4", "#1512ed", "#1fcfff", "#ffd529", ],
        startAngle: 135,
       labelLine: {
           padding:[20,20],
            normal: {
                // length:20 * scale,
                length: 0,
                length2:60,
                lineStyle: {
                    color:'#52fffd'
                }
            }
        },
        label: {
            normal: {
                formatter: "{a|{c}} ",
                backgroundColor: "rgba(255, 147, 38, 0)",
                borderColor: "transparent",
                borderRadius: 4,
                rich: {
                    a: {
                        "color": "#52fffd",
                        "fontSize": 36,
                    }
                },
            }
        },
        data: [{
            name: "修缮工程",
            value: 3
        }, {
            name: "地下空间",
            value: 2
        }, {
            name: "建设工程",
            value: 12
        }, {
            name: "燃气工程",
            value: 26
        }, {
            name: "房屋检测",
            value: 24
        }, {
            name: "拆除工程",
            value: 11
        }, {
            name: "物业管理",
            value: 3
        }]
    }]
}