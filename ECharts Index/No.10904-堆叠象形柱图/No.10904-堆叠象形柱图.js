var barData = [{
        name: "设备1",
        normal: 120,
        alarm: 40
    },
    {
        name: "设备2",
        normal: 180,
        alarm: 20
    },
    {
        name: "设备3",
        normal: 20,
        alarm: 150
    }
]
var blueBar =
    "data:image/png;base64,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";
var yellowBar =
    "data:image/png;base64,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";
var barname = [];
var sum = []
barData.forEach(el => {
    barname.push(el.name);
    sum.push(el.normal + el.alarm)
    el.sum = el.normal + el.alarm
});
var max = Math.max(...sum)
var bigMax = max
var normalData = []
var alarmData = []
barData.forEach((el, index) => {
    var symbolY = (el.sum / max).toFixed(2) * 100 + "%"
    var alarmValue = NaN
    normalData[index] = {
        name: el.name,
        value: el.normal,
        symbolSize: ["100%", symbolY]
    }
    if (el.alarm / el.sum < 0.1 && el.alarm !== 0) {

        alarmValue = parseInt(el.sum) * 1.2
        if (alarmValue > max) {
            bigMax = alarmValue
        }
    } else {
        alarmValue = el.sum
    }
    alarmData[index] = {
        name: el.name,
        value: alarmValue,
        symbolSize: ["100%", symbolY]
    }

})
option = {
    tooltip: {
        show: false
    },
    grid: {
        left: "2%",
        right: "2%",
        width: "98%",
    },
    xAxis: {
        data: barname,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: "#fff"
            },
            margin: 20,
        }
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [{
            name: "normal",
            type: "pictorialBar",
            barWidth: "115",
            silent: true,
            barGap: '-100%',
            label: {
                show: true,
                color: "#fff",
                position: 'insideBottom'
            },
            symbolBoundingData: bigMax,
            symbol: "image://" + blueBar,
            symbolClip: true,
            data: normalData,
            z: 9,
        },
        {

            name: "alarm",
            type: "pictorialBar",
            barWidth: "115",
            silent: true,
            label: {
                show: true,
                position: 'insideTop',
                formatter: (params) => {
                    return barData[params.dataIndex].alarm
                },

            },
            barCategoryGap: 200,
            symbolBoundingData: bigMax,
            symbol: "image://" + yellowBar,
            symbolClip: false,
            data: alarmData
        },
        {

            name: "alarm",
            type: "pictorialBar",
            barWidth: "115",
            silent: true,
            label: {
                show: true,
                position: 'top',
                color: "#fff",
                textBorderColor: "#2a87a1",
                textBorderWidth: 2,
                formatter: (params) => {
                    return barData[params.dataIndex].sum
                },

            },
            barCategoryGap: 200,
            symbolBoundingData: bigMax,
            symbol: "none",
            symbolClip: false,
            data: alarmData
        }
    ]
};