var uploadedDataURLgy = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkExNDkzODdGRDBBNDExRUFCMEM1RDIxM0MzMTJFQUM3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkExNDkzODgwRDBBNDExRUFCMEM1RDIxM0MzMTJFQUM3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTE0OTM4N0REMEE0MTFFQUIwQzVEMjEzQzMxMkVBQzciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTE0OTM4N0VEMEE0MTFFQUIwQzVEMjEzQzMxMkVBQzciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4ZnS/OAAABQklEQVR42qST3UpCQRSFT5MYPUZikgX1AN5InQujtwihAm98kSLoosgKzjsEXYh04wuUJRkEPUSEJ/tZG76J4eABowUfOHv22jOjy7kkSaKMVkVTbIslai/iRnTEY9jsgs9FcSLuRVusiAWoUrO9U7HoTYXAfC1i1hPRFUPWVfasf08sc8PUDzgKzH2xK0aZp5npStTEpjgULXvCGlO9eWuK2fTMXp/1vnkdX9g817aTx1G+xvRM8DRtQIPN25yTsxrRa2rYgBKLu2h2+d6Si/6n1BES0/ofjL731ZEwU11UZjBX6DV1bcCF+CQkl4QqT0V6Cng6NmAgzmiwkPREeYq5zF6NtXkGPoltrhbTMOSnsux/8+Z6EP0ent9CKnaI5wH1OIi315c4x5xm/41WaHHasXgSH+JNPFDbIMLv3vQjwACjkkfZFsaWTQAAAABJRU5ErkJggg==";
var uploadedDataURLbl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZGNUQxMDFDRDdGMzExRUJCNUY0QURDNDhDNjIxNkRFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZGNUQxMDFERDdGMzExRUJCNUY0QURDNDhDNjIxNkRFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkY1RDEwMUFEN0YzMTFFQkI1RjRBREM0OEM2MjE2REUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkY1RDEwMUJEN0YzMTFFQkI1RjRBREM0OEM2MjE2REUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5NdyEpAAAA90lEQVR42oySvw4BQRDG97ZHg07pzxsQ3uAcDRrR0EvEm9DT0YhGUOpO8ASCeAINKprzjcwmm8ut8yW/u9nb+W43M2OlNi+hKQ76wAEZ/nYECzAEN5VoacYaGIGYCNYDdMBcN5JpRmtOOgCX4yLIc+yBBpnJmEBwAVFwBy2w9J1WBhO+DZ2clnh02URqBphIK94TnNsjY1W73lqYRXs7jh0y5njhinBt+Z2V2kdP/K+35D6p6oVJ5VwlN5dUAPYPk80532JRO5IIziHtINNUb4dpAPZasUqmAVB/rYMxiBiu+gRt/8j5h7xCJafqgRMPwEAf8o8AAwBUb0D3Q3x1iAAAAABJRU5ErkJggg==";

//
option = {
    backgroundColor: '#010f1c',
    title: [{
        text: '门禁刷卡次数统计',
        textAlign: 'center',
        textStyle: {
            color: '#22ffff',
            fontSize: 12,
            lineHeight: 12
        },

        left: '5%',
        top: '0%',
    }],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            },
        }
    },
    legend: {
        itemWidth: 16,
        itemHeight: 16,

        data: [{
                name: '进入',
                icon: 'image://' + uploadedDataURLbl
            },
            {
                name: '外出',
                icon: 'image://' + uploadedDataURLgy
            }
        ],
        textStyle: {
            fontSize: 12, //字体大小
            color: '#a4dafe', //字体颜色
        },
        right: '20%' //距离右侧
    },
    grid: {
        left: '0',
        top: '50px',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisTick: {
            show: false
        },
        axisLine: {

            lineStyle: {
                color: '#273f55'
            }
        },
        axisLabel: {
            // interval: 0, //设置x轴的标签显示可自适应
            show: true,
            textStyle: {
                color: '#8fd5f3'
            }
        },
        data: ['0', '1', '2', '3', '4', '5', '6', '7']

    }],
    yAxis: [{
        type: 'value',
        name: '次',
        nameTextStyle: { //y轴上方单位的颜色
            color: '#8fd5f3'
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true, //y轴线
            lineStyle: {
                show: false,

            }
        },
        axisLabel: {
            // margin: 10,
            textStyle: {
                fontSize: 12,
                color: '#8fd5f3',
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: ['#56859d'],
                width: 1,
                type: 'solid'
            }
        },


    }],
    series: [{
            name: '上周',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2,
                    color: '#777779',
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(119,119,121,0.8)'
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(119,119,121,0.4)'
                        },
                        {
                            offset: 0.8,
                            color: 'rgba(119,119,121,0.2)'
                        },
                        {
                            offset: 1,
                            color: 'transparent'
                        }
                    ], false),
                    // shadowColor: 'rgba(232,246,254,0.2)',
                    shadowBlur: 30
                }
            },
            itemStyle: {
                normal: {
                    color: '#777779',
                    borderColor: '#777779',
                    borderWidth: 0

                }
            },

            data: [20, 50, 30, 100, 20, 30, 125],
        },
        {
            name: '本周',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 2,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2,
                    color: '#32e8f5',
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(50,232,245,0.7)'
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(50,232,245,0.4)'
                        },
                        {
                            offset: 0.8,
                            color: 'rgba(50,232,245,0.2)'
                        },
                        {
                            offset: 1,
                            color: 'transparent'
                        }
                    ], false),
                    // shadowColor: 'rgba(232,246,254,0.2)',
                    shadowBlur: 30
                }
            },
            itemStyle: {
                normal: {
                    color: '#32e8f5',
                    borderColor: '#32e8f5',
                    borderWidth: 0

                }
            },

            data: [20, 50, 120, 50, 40, 50, 155],
        },

    ]
}