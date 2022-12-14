option = {
    title: {
        show: true,
        text: '全国31省人工智能企业数量分布情况',
        x: "center",
        y: "top",
        textStyle: {
            color: "#000",
            fontSize: "20",
            itemSize: "",
        },
    },
    grid: {
        left: 80,
        containLabel: true,
    },
    legend: {
        data: ['人工智能企业数量'],
        bottom: 0,
        textStyle: { //图例文字的样式
            color: '#000',
            fontSize: 15
        },
    },
    backgroundColor: "white",
    xAxis: {
        type: "value",
        axisLabel: {
            interval: 0,
            textStyle: {
                color: "#000",
                fontSize: "15",
                itemSize: "",
            },
        },
    },
    yAxis: {
        type: "category",
        data: ['西藏自治区',
            '新疆维吾尔自治区',
            '内蒙古自治区',
            '海南省',
            '云南省',
            '黑龙江省',
            '山西省',
            '贵州省',
            '江西省',
            '广西壮族自治区',
            '天津市',
            '辽宁省',
            '河北省',
            '重庆市',
            '陕西省',
            '湖南省',
            '安徽省',
            '河南省',
            '湖北省',
            '山东省',
            '四川省',
            '福建省',
            '江苏省',
            '上海市',
            '浙江省',
            '北京市',
            '广东省'
        ],
        axisLabel: {
            textStyle: {
                color: "#000",
                fontSize: "15",
                itemSize: "",
            },
        },
    },
    series: [{
        name: '人工智能企业数量',
        data: [1183,
            384,
            288,
            217,
            153,
            91,
            65,
            65,
            55,
            54,
            51,
            43,
            32,
            31,
            27,
            25,
            23,
            17,
            10,
            5,
            5,
            4,
            4,
            3,
            2,
            2,
            1
        ],
        type: "bar",
        barWidth: 10,
        barMaxWidth: 10,
        itemStyle: {
            normal: {
                color: "#4472c4",
                fontSize: 14,
                shadowBlur: 10,
                shadowColor: "rgba(1,199,171,0.6)",
                shadowOffsetY: 2,
            },
        },
        label: {
            normal: {
                show: true,
                position: "right",
                textStyle: {
                    color: "#000",
                    fontSize: "15",
                },
            },
        },
    }, ],
};