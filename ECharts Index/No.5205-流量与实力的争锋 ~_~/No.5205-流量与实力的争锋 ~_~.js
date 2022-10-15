let data = [{
        INVST_TYPE_MARK: "实力型",
        date: ["2020-01-31", "2020-03-31", "2020-06-30", "2020-09-30"],
        value: ["6776", "6551", "6752", "6699"],
        satrtDate: '2020-03-31',
        endDate: '2020-09-30',
        Bad: '85.80'
    },
    {
        INVST_TYPE_MARK: "流量型",
        date: ["2020-01-31", "2020-03-31", "2020-06-30", "2020-09-30"],
        value: ["8690", "8580", "8639", "8719"],
        satrtDate: '2020-01-31',
        endDate: '2020-03-31',
        Bad: '65.51'
    }
]
let Leg = [{
    name: '实力型',
    value: '-66.99'
}, {
    name: '流量型',
    value: '87.19'
}]
var lineData = [];
var barData = [];
var nameData = [];

barData = data[0].value
lineData = data[1].value
nameData = data[0].date
let markDatas = [
    [{
            xAxis: data[0].satrtDate,
            itemStyle: {
                color: "rgba(48, 255, 94, .15)"
            },
            label: {
                show: true,
                position: ["45%", "80%"],
                color: "#4CEB3B",
                fontSize: 10,
                formatter: function(name) {
                    let arr;
                    arr = `${data[0].INVST_TYPE_MARK}\n\n最低点击量\n${data[0].Bad}%`;

                    return arr;
                },
            }
        },
        {
            xAxis: data[0].endDate,
            //yAxis: 30,
            itemStyle: {
                color: ""
            }
        }
    ],
    [{
            xAxis: data[1].satrtDate,
            itemStyle: {
                color: "rgba(116, 83, 153, .15)"
            },
            label: {
                show: true,
                position: ["8%", "18%"],
                color: "#8f82bc",
                //fontStyle: 'oblique',
                fontSize: 10,
                // rotate: 90,
                // formatter: data[1].INVST_TYPE_MARK
                formatter: function(name) {
                    let arr;
                    arr = `${data[1].INVST_TYPE_MARK}\n\n最低点击量\n${data[1].Bad}%`;

                    return arr;
                },
            }
        },
        {
            xAxis: data[1].endDate
        }
    ]
];
var option = {
    title: {
        text: "流量与实力的争锋 ~_~",
        subtext: 'icon',
        x: "right",
        y: 0,
        textStyle: {
            color: "#fff",
            fontSize: 18,
            fontWeight: "normal"
        }
    },
     tooltip:{},
    backgroundColor: "rgba(0,0,0,.9)",
    legend: {
        itemWidth: 25,
        itemHeight: 8,
        //itemGap: 80,
        left: 35,
        textStyle: {
            color: "#fff",
            fontSize: 10,
            rich: {
                a: {
                    padding: [3, 10, 5, 10],
                    align: "center",
                    fontSize: 10,
                    color: "#8f82bc"
                },
                b: {
                    padding: [4, 10, 5, 10],
                    align: "center",
                    fontSize: 10,
                    color: "#4CEB3B"
                }
            }
        },
        formatter: function(name) {
            let _index = 0;
            //console.log(_dataList)
            Leg.forEach((item, i) => {
                //console.log(item.value,name)
                if (item.name == name) {
                    _index = i;
                }
            });
            let arr;
            if (Leg[_index].value > 0) {
                arr = [name, "{a|+" + Leg[_index].value + "%}"];
            } else {
                arr = [name, "{b|" + Leg[_index].value + "%}"];
            }
            return arr.join("");
        },
    },
    grid: {
        x: "12%",
        width: "90%",
        y: "12%",
        bottom: "10%",
        top: "12%"
    },
    xAxis: {
        data: nameData,
        axisLine: {
            lineStyle: {
                color: "rgba(216,216,216,1)"
            }
        },
        axisLabel: {
            fontSize: 10,
            interval: 0,
            formatter: function(value) {
                return value;
            },
            textStyle: {
                color: "#fff",
            }
        },
        axisTick: {
            show: false
        }
    },
    yAxis: [{
        name: "点击量(次)",
        nameTextStyle: {
            //y轴上方单位的颜色
            color: "#fff",
            fontSize: 10,
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "rgba(216,216,216,1)",
                width: 1,
                type: "solid"
            }
        },

        axisLabel: {
            fontSize: 10,
            formatter: "{value}",
            textStyle: {
                color: "#fff"
            }
        }
    }],

    series: [{
            name: "流量型",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 6,
            itemStyle: {
                normal: {
                    color: '#8f82bc'
                }
            },
            label: {

                normal: {
                    show: true,
                    position: 'top',
                    color: '#fff',
                    fontSize: 10
                }
            },
            data: lineData,
            markArea: {
                silent: true,
                data: markDatas
            }
        },

        {
            name: "实力型",
            type: "line",
             smooth: true,
            barWidth: 10,
            symbolSize: 6,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    color: '#fff',
                    fontSize: 10
                }
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#4CEB3B'
                }
            },
            data: barData
        }
    ]
};