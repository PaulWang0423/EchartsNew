var xData = ["电子信息工程", "智能工程", "汽车工程", "物理网工程", "商学院", "建筑工程", '艺术设计', '士官']

var data = [{
        name: '理论课',
        value: ["13", "25", "84", "68", "89", "45", 23, 23]
    },
    {
        name: '理实一体课',
        value: ["13", "25", "84", "68", "89", "45", 23, 23]
    },
    {
        name: '实践课',
        value: ["13", "25", "84", "68", "89", "45", 23, 23]
    },
]

var barWidth = 30
var imgurl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAADHQAAAAyCAYAAACHgW2RAAAQvklEQVR4Xu3dXYildR0H8N//HBZ39zzncV1Y2W62bhavlroS9qrIq8L1pTLNSCo2DERoQ0HIXoRCaS8KjEXI0kAt03wPQfBCEIRCEKTwIhFKpHYl95znmR3X5swvRjA0X3Z25syZc858nqth5v//vXyeuf3ylNhCz2AwuLDT6TwSER/bQmtblQABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIzILAG6WUK6qqenoWhl3vjGW9BWblftM0V0TEbyJix6zMbE4CBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQILDFBP6TmdfVdf3Led977gMdmVnatr05Im6JiLnfd97/Ye1HgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAvMvkJk/6/f7N5ZSRvO67VwHHDJze9u2d0bEV+f1BdqLAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAjMo0Ap5YnFxcWr9+zZ08zlfvO41MpOTdOcHxGPRMTBed3RXgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAYM4FXux2uxfv3Lnz7/O251x+oaNt2wMR8VhmfmLeXph9CBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIDAFhP4V2ZeXtf1c/O099wFOhYWFj63vLx8f0T05+lF2YUAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECGxhgTdLKd+squq382IwV4GOtm2PZObRiOjOywuyBwECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIPC2QEbEj6uq+mEpZeXnmX7mItCRmdvatr09Iq6d6bdheAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQOBMAvdXVfWNUsrimQ5O899nPtBx8uTJ87rd7gMRcdE0Q5uNAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGI9AKeVPEXFpVVX/HE/FyVeZ6UDHYDDY3+l0Ho+ICyZPpyMBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCwiQL/KKVcUlXVC5s4w5pbz2ygo2maT0fEQxGxe83bu0iAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAjMskCbmVfXdb3ysYiZemYy0DEcDg+XUo5FxLaZ0jYsAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgMG6B5cy8qa7ro+MuvJH1ZirQkZndhYWFWzPzxo1EUZsAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBCYOYE7q6q6rpTy1ixMPjOBjuPHj1c7d+68LzMPzQKsGQkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIGJCzyzvLz8hXPPPfffE+98lg1nItBx6tSpfaPR6NGI+NRZ7uc4AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgsLUE/rbyMYm6rl+a5rWnPtAxGAwu7HQ6K2GOvdMMaTYCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgagTeKKVcUVXV01Mz0f8NMtWBjqZproqIX0fEjmkFNBcBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAwlQJLEXF9v9+/Yxqnm8pAR2aWtm1vjohbImIqZ5zGl2kmAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBA4H0CP6+q6oZSymiabKYuLJGZ29u2vSsiVr7O4SFAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIrEsgM588ffr0lXv27GnWVWiMl6cq0NG27d7MfCgiDo5xR6UIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAi+ORqNLd+3a9co0UExNoKNt2wOZ+URE7JsGGDMQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECcydwPDMvq+v6uc3ebCoCHcPh8FAp5d6I6G82iP4ECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIDAXAu8WUr5VlVV92zmlpse6Gjb9khmHo2I7mZC6E2AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhsGYGMiJ9UVfWDUsrKzxN/Ni3QkZnb2rY9FhGHJ761hgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBiAerqrqmlLI4aYxNCXQMBoPdnU7n9xFx0aQX1o8AAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAg8I5AZv652+1e1uv1XpukysQDHYPBYH+n0/ljROyf5KJ6ESBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQ+RODVUsqhqqpemJTQRAMdTdN8NiIeiIjdk1pQHwIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIDAKgTazLymruuHV3F23UcmFugYDoeHSynHImLbuqdWgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAwfoHlzLypruuj4y/93oobHujIzG7TND8tpXx3o5dRnwABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCwXoFSyt29Xu/aUspb6631Yfc3NNBx4sSJ/o4dO+7NzEMbtYC6BAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIENEHgmM79U1/XrG1A7NizQcerUqX2j0eiJiDiwEYOrSYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBDYYIGXM/Piuq5fGnefDQl0DIfDg6WUhyJi77gHVo8AAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgMEGBk6WUK6uqemqcPcce6Gia5qqIuCsito9zULUIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABApsksBQR1/f7/TvG1X9sgY7MLG3b/igivh8RY6s7rkXVIUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAisU+AXVVV9p5QyWmed8QQvMnN727YrX+VY+TqHhwABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECAwlwKZ+eTS0tJXdu/ePVjPguv+kkbbtnsj4tHMvHA9g7hLgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEJgRgb+MRqNDu3btemWt864r0NG27Scz87GI2LfWAdwjQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECMygwPHM/GJd18+uZfY1BzqGw+GhUsp9EVGtpbE7BAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEZFzhdSjlcVdU9Z7vHmgIdbdvekJm3RUT3bBs6T4AAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBCYI4EspdzW6/W+V0rJ1e51VoGOzNzWtu2xiDi82gbOESBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgS2gMCDCwsLX9+7d+/CanZddaBjMBjs7nQ6f4iIz6ymsDMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgS0m8Hyn07mk1+u9dqa9VxXoGA6HF5RSHo+I/Wcq6O8ECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgS0s8Gqn07ms1+s9/1EGZwx0tG17UWY+EBHnbWFMqxMgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEViVQSllYXl7+Wl3XD3/YhY8MdDRNc21E3B4R21bV0SECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEVgeXMvLmu61s/iOMDAx2Z2W2a5mgp5QhDAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBtQmUUu7u9XrfLqWcfneF9wU6Tpw40T/nnHN+V0r5/NpauUWAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIPAugWcz8/K6rl9/53fvCXQsLi5+fGlp6fGIOICNAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBgbAIvR8Ql/X7/rysV/xfoGA6HB0spj0TE+WNrpRABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgMA7AoNSyperqnrq7UBH27ZXZ+avImI7IwIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgQ0TWIqII/8FUR7Qhy+AhvIAAAAASUVORK5CYII='
//背景图片不接受百分比，只接受数值，获取图表的宽度实现动态背景宽度
var imgwidth = myChart.getWidth()

// console.log(myChart.getWidth())

var colorsTop = {
    '理论课':new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: "rgba(128, 195, 255, 1)"
        },
        {
            offset: 1,
            color: "rgba(128, 195, 255, 1)"
        }
    ]),
    '理实一体课':new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: "rgba(122, 240, 205, 1)"
        },
        {
            offset: 1,
            color: "rgba(122, 240, 205, 1)"
        }
    ]),
    '实践课':new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: "rgba(255, 209, 155, 1)"
        },
        {
            offset: 1,
            color: "rgba(255, 209, 155, 1)"
        }
    ])
}
var colorsBottom = {
    '理论课':'rgba(10, 121, 223, 1)',
    '理实一体课':'rgba(97, 233, 193, 1)',
    '实践课':'rgba(255, 189, 111, 1)'
}
// var colorsTop = [
//     new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//             offset: 0,
//             color: "rgba(128, 195, 255, 1)"
//         },
//         {
//             offset: 1,
//             color: "rgba(128, 195, 255, 1)"
//         }
//     ]), new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//             offset: 0,
//             color: "rgba(122, 240, 205, 1)"
//         },
//         {
//             offset: 1,
//             color: "rgba(122, 240, 205, 1)"
//         }
//     ]), new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//             offset: 0,
//             color: "rgba(255, 209, 155, 1)"
//         },
//         {
//             offset: 1,
//             color: "rgba(255, 209, 155, 1)"
//         }
//     ])
// ]

// var colorsBottom = [
//     'rgba(10, 121, 223, 1)', 'rgba(97, 233, 193, 1)', 'rgba(255, 189, 111, 1)'
// ]

var colors = [
    new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 0,
            color: "rgba(10, 121, 223, 1)"
        },
        {
            offset: 1,
            color: "rgba(78, 164, 243, 1)"
        }
    ]), new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 0,
            color: "rgba(97, 233, 193, 1)"
        },
        {
            offset: 1,
            color: "rgba(11, 201, 145, 1)"
        }
    ]), new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 0,
            color: "rgba(255, 189, 111, 1)"
        },
        {
            offset: 1,
            color: "rgba(255, 161, 38, 1)"
        }
    ])
]
var option = chuliData(data, barWidth)

function chuliData(data, barWidth) {
    let baseWidth = data.length == 3 ? 0 :1.5 / data.length
    console.log(data)
    var seriesData = []

    data.forEach((item, i) => {
        var item = {
            name: data[i].name,
            type: 'bar',
            barWidth: barWidth,
            barGap: '50%',
            data: data[i].value,
        }

        var itemBottom = { //柱底圆片
            name: data[i].name,
            type: "pictorialBar",
            symbolSize: [barWidth, barWidth * 0.5],
            symbolOffset: [baseWidth*barWidth + (i - 1) * barWidth * 1.5, barWidth * 0.25],
            z: 12,
            silent: true,
            // color: colorsBottom,
            itemStyle: {
                "normal": {
                    color: colorsBottom[item.name]
                }
            },
            data: data[i].value
        }
        //柱顶圆片
        var itemTop = {
            name: data[i].name,
            type: "pictorialBar",
            symbolSize: [barWidth, barWidth * 0.5],
            symbolOffset: [baseWidth*barWidth + (i - 1) * barWidth * 1.5, -barWidth * 0.25],
            z: 12,
            symbolPosition: "end",
            silent: true,
            itemStyle: {
                "normal": {
                    color: colorsTop[item.name]
                }
            },
            data: data[i].value
        }

        seriesData.push(itemTop)
        seriesData.push(item)
        seriesData.push(itemBottom)
    })


    var option = {
        color: colors,
        tooltip: {
            // show:true,
            trigger: 'item',
            // trigger: 'axis',
            // axisPointer: {
            //     type: 'shadow'
            // },
            // formatter(params) {
            //     const data = []
            //     params.map(item => {
            //         if (item.seriesType === 'bar') {
            //             data.push(item)
            //         }
            //     })
            //     var text = data[0].name + '</br>' +
            //         data[0].seriesName + ':' + data[0].value + '</br>' +
            //         data[1].seriesName + ':' + data[1].value + '</br>' +
            //         data[2].seriesName + ':' + data[2].value
            //     return text
            // }
        },
        grid: {
            top: 100,
            right: 0,
            left: 0,
            bottom: 0,
            containLabel: true
        },
        legend: {
            show: true,
            selectedMode: true,
            orient: 'horizontal',
            top: 0,
            left: 0,
            itemWidth: 16,
            itemHeight: 16,
            textStyle: {
                color: 'rgba(102, 102, 102, 1)',
                fontSize: 14
            },
            data: [{
                    name: '理论课',
                    icon: 'rect',
                },
                {
                    name: '理实一体课',
                    icon: 'rect',
                },
                {
                    name: '实践课',
                    icon: 'rect',
                },
            ]
        },
        graphic: {
            type: 'image',
            id: 'logo',
            left: 22,
            bottom: 44,
            z: 0,
            left: 'center',
            style: {
                image: imgurl,
                width: imgwidth,
                height: 50,
            }
        },

        xAxis: [{
            data: xData,
            axisLabel: {
                textStyle: {
                    color: '#aaaaaa',
                    fontSize: 14
                },
                margin: 30, //刻度标签与轴线之间的距离。
            },

            axisLine: {
                show: false //不显示x轴
            },
            axisTick: {
                show: false //不显示刻度
            },
            boundaryGap: true,
            splitLine: {
                show: false,
                width: 0.08,
                lineStyle: {
                    type: "solid",
                    color: "#03202E"
                }
            }
        }],
        yAxis: [{
            splitLine: {
                // show: false,
                lineStyle: {
                    color: 'rgba(216, 216, 216, 1)',
                    type: 'solid'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#888'
                },
            }
        }],
        series: seriesData
    };

    return option
}
// console.log(seriesData)
myChart.setOption(option);
myChart.on('legendselectchanged', function(obj) {
const selectedList = []
data.forEach((item,i) => { 
    if (obj['selected'][item['name']]) {
        selectedList.push(item)
    }
})
var option = chuliData(selectedList, 30)
myChart.setOption(option);
});