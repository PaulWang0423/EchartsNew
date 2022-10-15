var Job_scatter_data = {
    "series": [
        [
            [22.3, 0, 1, "adminyarn_default", "2017-03-10 12:22:22"],
            [16.38, 15, 93, "default", "2017-03-10 12:22:22"],
            [5.7, 6, 3, "a", "2017-03-10 12:22:22"],
            [17.45, 1, 1, "adminyarn", "2017-03-10 12:22:22"],
            [12.3, 3, 10, "adminyarn_default", "2017-03-10 12:22:22"],
            [22.3, 5, 12, "default", "2017-03-10 12:22:22"],
            [13.9, 15, 2, "default", "2017-03-10 12:22:22"],
            [19.9, 15, 24, "default", "2017-03-10 12:22:22"],
            [12.9, 15, 2, "adminyarn_default", "2017-03-10 12:22:22"]
        ],
        [
            [12.83, 0, 10, "adminyarn_default", "2017-03-11"],
            [15.38, 0, 90, "default", "2017-03-11"],
            [9.7, 6, 3, "a", "2017-03-11"],
            [21, 5, 1, "a", "2017-03-11"],
            [10.3, 9, 50, "a", "2017-03-11"],
            [1.3, 1, 30, "adminyarn_default", "2017-03-11"],
            [15, 0, 10, "adminyarn_default", "2017-03-11"],
            [12, 3, 90, "default", "2017-03-11"]
        ],
        [
            [10.38, 3, 93, "default", "2017-03-12"],
            [9.7, 6, 3, "a", "2017-03-12"],
            [10, 22, 10, "a", "2017-03-12"],
            [8.5, 12, 10, "a", "2017-03-12"],
            [11.0, 8, 19, "default", "2017-03-12"],
            [6.6, 12, 57, "adminyarn", "2017-03-12"],
            [8.9, 33, 10, "adminyarn", "2017-03-12"],
            [23.8, 21, 17, "adminyarn", "2017-03-12"],
            [22, 2, 77, "adminyarn", "2017-03-12"]
        ],
        [
            [11.8, 10, 23, "adminyarn_default", "2017-03-13"],
            [17.38, 18, 93, "default", "2017-03-13"],
            [7.7, 16, 3, "a", "2017-03-13"],
            [17.9, 10, 1, "adminyarn", "2017-03-13"],
            [14.3, 30, 100, "adminyarn_default", "2017-03-13"],
            [20, 5.9, 92, "default", "2017-03-13"],
            [16.9, 15, 22, "default", "2017-03-13"],
            [14.9, 25, 82, "default", "2017-03-13"],
        ],
        [
            [22.8, 1, 2, "adminyarn_default", "2017-03-14"],
            [7.38, 8, 93, "default", "2017-03-14"],
            [17.7, 6, 30, "a", "2017-03-14"],
            [18.9, 1, 10, "adminyarn", "2017-03-14"],
            [17.3, 3, 93, "default", "2017-03-14"],
            [23, 5, 2, "adminyarn", "2017-03-14"],
            [16, 5, 2, "adminyarn_default", "2017-03-14"],
            [19.9, 2, 8, "adminyarn_default", "2017-03-14"],
        ],
        [
            [18.83, 0, 5, "adminyarn_default", "2017-03-15"],
            [12.38, 0, 93, "default", "2017-03-15"],
            [9.7, 16, 30, "a", "2017-03-15"],
            [12.56, 5, 10, "a", "2017-03-15"],
            [10.33, 5, 10, "adminyarn_default", "2017-03-15"],
            [13.3, 8, 10, "adminyarn", "2017-03-15"],
            [18, 0, 10, "default", "2017-03-15"],
            [11.9, 13, 9, "adminyarn", "2017-03-15"]
        ],
        [
            [22.24, 13, 90, "default", "2017-03-16"],
            [10.7, 6, 3, "a", "2017-03-16"],
            [10, 20, 1, "a", "2017-03-16"],
            [18.5, 0, 1, "a", "2017-03-16"],
            [11.0, 8, 19, "default", "2017-03-16"],
            [6.6, 2, 87, "default", "2017-03-16"],
            [18.9, 3, 90, "default", "2017-03-16"],
            [23.8, 2, 97, "default", "2017-03-16"],
            [12.8, 20, 77, "default", "2017-03-16"],
            [9.9, 2, 5, "adminyarn_default", "2017-03-16"],
            [7.9, 2, 10, "adminyarn_default", "2017-03-16"],
            [6.9, 0, 5, "adminyarn", "2017-03-16"],
        ]
    ],
    "time": ["2017-03-10", "2017-03-11", "2017-03-12", "2017-03-13", "2017-03-14", "2017-03-15", "2017-03-16"],
    "namelist": ["adminyarn_default", "default", "a", "adminyarn"],

};
var xvalue_24h = ['00', '01', '02', '03',
    '04', '05', '06', '07', '08',
    '09', '10', '11', '12', '13',
    '14', '15', '16', '17', '18',
    '19', '20', '21', '22', '23', '24h'
];
var sizeFunction = function(x) {
    var size = "";
    if (x >= 1 && x <= 10) {
        size = 10 * Math.log(x * x + 1);
    } else if (10 < x && x < 50) {
        size = 50 + Math.log(x * x + 1);
    } else {
        size = 20 + Math.log(x * x + 1);
    }
    return size;
};
var itemStyle = {
    normal: {
        opacity: 0.65,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.3)'
    }
};
var colorsJob = ["#ffca67", "#ff60a2", "#bf64ff", "#6c65fb", "#93dffc"];
var option = {
    baseOption: {
        backgroundColor: 'rgba(7,14,28,1)', //设置背景色
        timeline: {
            axisType: 'category',
            autoPlay: false,
            playInterval: 3000,
            symbol: 'circle',
            inverse: false,
            rewind: true,
            symbolSize: 5,
            checkpointStyle: {
                symbol: 'circle',
                symbolSize: 7,
                color: '#aed2ff',
                borderColor: "#aed2ff"
            },
            left: "1%",
            width: '90%',
            height: '36',
            lineStyle: {
                color: "#454e72"
            },
            label: {
                normal: {
                    textStyle: {
                        color: "#aed2ff",
                        fontSize: 14,
                    }
                },
                position: 15,
                formatter: function(value, index) {
                    return value.replace(/-/g, ".");
                }
            },
            data: Job_scatter_data.time
        },
        // legend: {
        //     data: []
        // },
        calculable: true,
        grid: {
            left: '1.5%',
            //right: '3%',
            bottom: '10%',
            containLabel: true
        },
        tooltip: {
            //backgroundColor:'rgba(255,202,103,0.4)',
            backgroundColor: 'rgba(7,14,28,0.9)',

            formatter: function(value, index) {
                //判断是否为数组，若是数组则鼠标滑过的是散点图 若不是则不显示tooltip
                if(Object.prototype.toString.call(value.data)=='[object Array]'){
                  var tooltip = '';
                    tooltip = "<div style='width:185px;height:90px;border-radius:8px;'>" + "<span style='display:block;padding:16px 10px 0 10px;font-size:14px;font-weight:700;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>" + value.data[3] + " " + value.data[4] + "运行情况" + "</span>" + "<span style='display:block;padding:2px 10px 0 10px;font-size:12px;font-weight:600;;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:" + value.color + "'>" + "Job数量:" + value.data[2] + "个" + "</span>" + "<span style='display:block;padding:0px 10px 0 10px;font-size:12px;font-weight:600;;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#707aa0'>" + "执行时长：" + value.data[1] + "分钟" + "</span>" + "</div>";
                    return tooltip;  
                }else{
                    return;
                }
                
            }
        },
        xAxis: [{
            type: 'category',
            boundaryGap: true,
            data: xvalue_24h, //Todo
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: "#454e72"
                },
                margin: 15
            },
            splitLine: {
                lineStyle: {
                    color: "#1d203b"
                }
            }
        }],
        yAxis: [{
            name: '单位（分钟）',
            nameGap:20,
            nameTextStyle:{
                color:'#454e72',
                fontSize: 12,
            },
            type: 'value',

            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                // formatter: function(value, idx) {
                //     if (idx === 0) {
                //         return value + "个";
                //     } else {
                //         return value;
                //     }
                // },
                textStyle: {
                    color: '#303765'
                },
                margin: 20
            },
            splitLine: {
                lineStyle: {
                    color: "#1d203b"
                }
            }
        }],
        dataZoom: [{
                type: 'slider',
                show: true,
                yAxisIndex: [0],
                left: '93%',
                start: 0,
                end: 90,
                textStyle: {
                    color: '#aed2ff'
                },
                borderColor: '#3c4868',
                width: '26',
                height: '80%',
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '90%',
                dataBackground: {
                    areaStyle: {
                        color: '#222445'
                    },
                    lineStyle: {
                        opacity: 0.8,
                        color: '#222445'
                    }
                },
                handleStyle: {
                    color: '#aed2ff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            },

            {
                type: 'inside',
                yAxisIndex: [0],
                start: 0,
                end: 90,
                textStyle: {
                    color: '#aed2ff'
                },
                borderColor: '#3c4868',
                width: '26',
                height: '80%',
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '90%',
                dataBackground: {
                    areaStyle: {
                        color: '#222445'
                    },
                    lineStyle: {
                        opacity: 0.8,
                        color: '#222445'
                    }
                },
                handleStyle: {
                    color: '#aed2ff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            },
        ],
        visualMap: [{
            show: true,
            type: 'piecewise',
            dimension: 3,
            orient: 'horizontal',
            right: "17%",
            top: 0,
            categories: Job_scatter_data.namelist,
            calculable: true,
            //precision: 0.1,
            textGap: 2,
            itemGap: 16,
            textStyle: {
                color: [],
                fontSize: 14
            },
            inRange: {
                color: colorsJob,
                symbol: 'circle'
            },
            outOfRange: {
                color: '#555'
            }
        }],
        animation: true,
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            type: 'scatter',
            itemStyle: itemStyle,
            data: Job_scatter_data.series[0],
            symbolSize: function(val) {
                return sizeFunction(~~val[2]);
            }
        }],
    },
    options: []
};
for (var i = 0; i < Job_scatter_data.time.length; i++) {
    option.options.push({
        title: {
            text: "大小：执行时长",
            textStyle: {
                color: "#707aa0",
                fontStyle: "normal",
                fontSize: '14px',
                fontFamily: "微软雅黑",
            },
            right: "4%"
        },
        series: {
            //name: data.timeline[n],
            type: 'scatter',
            data: Job_scatter_data.series[i],
            itemStyle: itemStyle,
            symbolSize: function(val) {
                return sizeFunction(~~val[2]);
            }
        }
    });
}
myChart.setOption(option);