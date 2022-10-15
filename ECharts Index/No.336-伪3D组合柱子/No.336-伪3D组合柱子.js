let img1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAF8CAYAAABFdgLPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM2MCwgMjAyMC8wMi8xMy0wMTowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFDNzU4QkMzQjFGRjExRUFBRjkxQTRCMzE0QUM2OTRBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFDNzU4QkM0QjFGRjExRUFBRjkxQTRCMzE0QUM2OTRBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUM3NThCQzFCMUZGMTFFQUFGOTFBNEIzMTRBQzY5NEEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUM3NThCQzJCMUZGMTFFQUFGOTFBNEIzMTRBQzY5NEEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7hhRVqAAAGG0lEQVR42uyZYZLb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'
let img2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAUCAYAAAA6NOUqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFEQUNDRkQzQUM4QTExRUE5OUVDQkFCOTgzQkVDN0NGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFEQUNDRkQ0QUM4QTExRUE5OUVDQkFCOTgzQkVDN0NGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QURBQ0NGRDFBQzhBMTFFQTk5RUNCQUI5ODNCRUM3Q0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QURBQ0NGRDJBQzhBMTFFQTk5RUNCQUI5ODNCRUM3Q0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5jRYorAAAPE0lEQVR42oRYeZAc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'
let img3 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAQCAYAAACRBXRYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM2MCwgMjAyMC8wMi8xMy0wMTowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg4RjIwODIxQjFERjExRUFBNzI5QTE3MkE4QTdGQkNEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg4RjIwODIyQjFERjExRUFBNzI5QTE3MkE4QTdGQkNEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODhGMjA4MUZCMURGMTFFQUE3MjlBMTcyQThBN0ZCQ0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODhGMjA4MjBCMURGMTFFQUE3MjlBMTcyQThBN0ZCQ0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6HHksnAAAA5ElEQVR42uyXTQrCMBSEW3VpxQO4VLyCB/BQQvfF0+QA0gN4hBZdegBFt1KnkJW0gYChP34fDIFkMfCYvOTFVVVFAF0xoQRAAIEAAnTBjBL4Mb3e6mUjHaW93c6lg3QJaN3q+V6vBlvPmCHEO4BbLWdp+XV0l3ZSGcDW6akAlkOtJ0+wP1lDECK7l43Ikw7Y0w740LJoOX5JSQBbp6c6YDLUevIH/C1ziRvNExyU3HFm6lclgIzD80QA/4vUfv6jhoEgHZEnAewphZ126670tDJ2rxiRJ0MI8AcEIIBAAAGC8BFgAE/fO8+F5WVHAAAAAElFTkSuQmCC'
let barData = [{
        name: '物资1',
        num: 20
    },
    {
        name: '物资1',
        num: 50
    },
    {
        name: '物资1',
        num: 80
    },
    {
        name: '物资1',
        num: 100
    },
    {
        name: '物资1',
        num: 60
    },
    {
        name: '物资1',
        num: 10
    },
    {
        name: '物资1',
        num: 44
    },
    {
        name: '物资1',
        num: 16
    },
    {
        name: '物资1',
        num: 82
    }
]
let bar = (data, dom) => {
    let color1 = {
        type: 'linear',
        colorStops: [{
                offset: 0,
                color: 'rgb(27,124,177)'
            },
            {
                offset: 0.2,
                color: 'rgb(23,196,230)'
            },
            {
                offset: 0.5,
                color: 'rgb(6,120,221)'
            },
            {
                offset: 0.8,
                color: 'rgb(27,196,227)'
            },
            {
                offset: 1,
                color: 'rgb(43,113,164)'
            }
        ]
    }
    let color2 = {
        type: 'radial',
        colorStops: [{
                offset: 0,
                color: 'rgba(13,47,85,.8)'
            }, {
                offset: 0.5,
                color: 'rgba(33,74,118,.8)'
            },
            {
                offset: 1,
                color: 'rgba(33,74,118,.8)'
            }
        ]
    }
    let color3 = {
        type: 'radial',
        colorStops: [{
                offset: 0,
                color: 'rgba(17,47,75,.7)'
            },
            {
                offset: 1,
                color: 'rgba(51,205,207,.7)'
            }
        ]
    }
    let xLabelData = []
    let bgData = []
    let innerData = []
    data.forEach(item => {
        xLabelData.push(item.name)
        innerData.push(item.num)
        bgData.push(100)
    })
    let innerTopData = (_data) => {
        let arr = []
        let height = (dom.clientHeight - 126) / 100
        _data.forEach(item => {
            if (item * height > 20) {
                arr.push({
                    value: item
                })
            } else {
                arr.push({
                    value: item,
                    symbolOffset: [0, -25 + item * height]
                })
            }
        })
        return arr
    }
    let innerShadowData = (_data) => {
        let arr = []
        let height = (dom.clientHeight - 126) / 100
        _data.forEach(item => {
            if (item < 100) {
                if (item * height > 20) {
                    arr.push({
                        value: item
                    })
                } else {
                    arr.push({
                        value: item,
                        symbolOffset: [0, -47.5 + item * height]
                    })
                }
            } else {
                arr.push({
                    value: ''
                })
            }
        })
        return arr
    }
    let option = {
        // animation: false,
        backgroundColor: '#000',
        grid: {
            top: 40,
            left: 25,
            bottom: 30,
            right: 25,
            containLabel: true
        },
        xAxis: {
            data: xLabelData,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgb(2,185,208)'
                }
            },
            axisLabel: {
                textStyle: {
                    color: 'rgb(2,219,227)',
                    fontSize: 16,
                    fontWeight: 'bold'
                },
                margin: 20
            }
        },
        yAxis: {
            axisTick: {
                show: true
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgb(2,185,208)'
                }
            },
            axisLabel: {
                textStyle: {
                    color: 'rgb(2,185,208)'
                },
                formatter: (value, index) => {
                    if (value === 0 || value === 50 || value === 100) {
                        return value + '%'
                    } else {
                        return ''
                    }
                }
            },
            splitNumber: 10
        },
        series: [{ //空柱子label
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            },
            label: {
                show: true,
                position: 'insideTop',
                distance: -30,
                rich: {
                    a: {
                        color: 'rgb(2,219,227)',
                        fontSize: 16,
                        align: 'left',
                        padding: [0, 0, 0, 120],
                        width: 40,
                        height: 16,
                        lineHeight: 16,
                        backgroundColor: {
                            image: img3
                        },
                    }
                },
                formatter: (params) => {
                    return '{a|' + params.value + '%}'
                }
            },
            z: 5,
            data: innerData
        }, { //蓝色柱子
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: color1
                }
            },
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [35, '100%'],
            symbolOffset: [0, -20],
            symbolPosition: 'start',
            z: 5,
            animation: false,
            data: innerData
        }, { //蓝色柱子顶部阴影椭圆
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: color3
                }
            },
            symbolSize: [35, 10],
            symbolOffset: [0, -27.5],
            symbolPosition: 'end',
            z: 2,
            animation: false,
            data: innerShadowData(innerData)
        }, { //蓝色柱子顶部椭圆
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: 'rgb(51,255,207)'
                }
            },
            symbolSize: [35, 10],
            symbolOffset: [0, -5],
            symbolPosition: 'end',
            z: 6,
            animation: false,
            data: innerTopData(innerData)
        }, { //蓝色柱子底部椭圆
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: color1
                }
            },
            symbolSize: [35, 10],
            symbolOffset: [0, -15],
            symbolPosition: 'start',
            z: 5,
            animation: false,
            data: innerData
        }, { //满的背景柱子
            type: 'pictorialBar',
            symbol: 'image://' + img1,
            symbolClip: true,
            // symbolSize: [35, dom.$el.clientHeight - 136],
            symbolSize: [35, '100%'],
            symbolOffset: [0, -20],
            symbolPosition: 'start',
            z: 2,
            animation: false,
            data: bgData
        }, { //满的顶部椭圆
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    color: color2
                }
            },
            symbolSize: [35, 10],
            symbolOffset: [0, -5],
            symbolPosition: 'end',
            z: 3,
            animation: false,
            data: bgData
        }, { //底部投影
            type: 'pictorialBar',
            symbol: 'image://' + img2,
            symbolSize: [65, 20],
            symbolOffset: [0, -8],
            symbolPosition: 'start',
            z: 2,
            animation: false,
            data: bgData
        }]
    }
    return option
}
option = bar(barData, document.getElementById('chart-panel'))