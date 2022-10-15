var test_data = [{
        "name": "0-13",
        "value": "28134.13"
    },
    {
        "name": "14-17",
        "value": "184129.25"
    },
    {
        "name": "18-19",
        "value": "600728.02"
    },
    {
        "name": "20-24",
        "value": "1224760.49"
    },
    {
        "name": "25-29",
        "value": "1418392.50"
    },
    {
        "name": "30-34",
        "value": "458553.05"
    },
    {
        "name": "35-39",
        "value": "280989.71"
    },
    {
        "name": "40-44",
        "value": "90972.38"
    },
    {
        "name": "45-49",
        "value": "43075.70"
    },
    {
        "name": "50-54",
        "value": "15152.30"
    },
    {
        "name": "55-59",
        "value": "27668.74"
    },
    {
        "name": "60+",
        "value": "12735.51"
    },
    {
        "name": "Unknown",
        "value": "533459.40"
    }
];
var maxData = 4918751.17,
    seriesd = [],
    legend = [];

for (var j in test_data) {
    if (legend.indexOf(test_data[j]["name"] == -1)) {
        legend.push({
            'icon': 'rect',
            "name": test_data[j]["name"]
        });
    }
    var ra = test_data.length - 1 - j;
    seriesd.push({
        name: test_data[j]["name"],
        type: 'pie',
        radius: [(ra*5 + 10)+"%", (7 + ra * 5) +"%" ],
        itemStyle: {
            normal: {
                label: {
                    show: false
                }
            }
        },
        hoverAnimation: false,
        startAngle: 180,
        center: ["45%", "75%"],
        data: [{
                value: test_data[j]["value"],
                name: test_data[j]["name"],
                label: {
                    normal: {
                        postion: "center"
                    }
                },
            },
            {
                value: maxData - test_data[j]["value"],
                itemStyle: {
                    normal: {
                        color: 'rgba(203,203,203,0.5)',
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    emphasis: {
                        color: 'rgba(203,203,203,1)'
                    }
                },
                name: 'showtip_' + test_data[j]["value"]
            },
            {
                value: maxData,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        label: {
                            show: true
                        },
                        labelLine: {
                            show: true
                        }
                    },
                    emphasis: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                name: 'hide'
            }
        ]
    })
}
var initnum = parseFloat(seriesd[0].data[0]["value"] * 100 / maxData).toFixed(2);
seriesd.push({
    type: 'gauge',
    z: 3,
    min: 0,
    max: 100,
    splitNumber: 5,
    center: ['45%', '75%'], // 默认全局居中
    radius: '80%',
    endAngle: 0,
    startAngle: 180,
    axisLabel: {
        formatter: "{value}%"
    },
    axisLine: { // 坐标轴线  
        lineStyle: {
            color: [
                [1, "rgba(203,203,203,1)"]
            ], //仪表盘颜色
            width: 2, //仪表盘宽度
        }
    },
    axisTick: { // 坐标轴小标记
        length: 5, // 属性length控制线长
        lineStyle: { // 属性lineStyle控制线条样式
            color: 'auto'
        }
    },
    splitLine: { // 分隔线
        show: true,
        length: 5, // 属性length控制线长
        lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
            color: 'auto',
            width: 1
        }
    },
    title: {
        show: false
    },
    detail: { //显示数据
        show: false,
    },
    pointer: {
        width: 1,
        shadowColor: '#fff', //默认透明
    },
    itemStyle: {
        normal: {
            color: "#676767", //仪表盘颜色
        }
    },
    data: [{
        value: initnum
    }]

})
var option = {
    maxnum: maxData,
    tooltip: {
        show: true,
        formatter: function(params) {
            if (params.name == "hide") {
                return null
            } else {
                if (params.name.indexOf("showtip_") != -1) {
                    var num = Number(params.name.split("_")[1]);
                } else {
                    var num = params.value;
                }
                if (Number(num) == 0) return params.seriesName + ":" + Number(num) + "";
                return params.seriesName + ":" + parseFloat(num * 100 / maxData).toFixed(2) + "%";
            }
        }
    },
    legend: {
        itemGap: 5,
        orient: 'vertical',
        align: "left",
        x: 'right',
        itemWidth: 12,
        itemHeight: 10,
        data: legend
    },
    grid: {
        top: 8,
        height: 10,
        left: "25%",
        right: '15%',
    },
    series: seriesd
};
myChart.on('mouseover', function (params) {
    if(params.name != "hide"){
        if(params.name.indexOf("showtip_") != -1){
            var shownum = parseFloat( params.name.split("_")[1]*100/myChart.getOption().maxnum).toFixed(2);
        }else{
            var shownum = parseFloat( params.value*100/myChart.getOption().maxnum).toFixed(2);
        }
        var series = myChart.getOption().series;
        option.series[series.length-1].data[0].value = shownum;
        myChart.setOption(option,true); 
    }
});