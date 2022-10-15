var data = {
    "yaxis": [
        "河北省",
        "山东省",
        "湖北省",
        "河南省",
        "四川省",
        "甘肃省"
    ],
    "wkksl": [{
            "name": "尾矿库数量",
            "value": 300
        },
        {
            "name": "尾矿库数量",
            "value": 280
        },
        {
            "name": "尾矿库数量",
            "value": 240
        },
        {
            "name": "尾矿库数量",
            "value": 230
        },
        {
            "name": "尾矿库数量",
            "value": 210
        },
        {
            "name": "尾矿库数量",
            "value": 180
        }
    ],
    "tdksl": [{
            "name": "头顶库数量",
            "value": 300
        },
        {
            "name": "头顶库数量",
            "value": 280
        },
        {
            "name": "头顶库数量",
            "value": 240
        },
        {
            "name": "头顶库数量",
            "value": 230
        },
        {
            "name": "头顶库数量",
            "value": 210
        },
        {
            "name": "头顶库数量",
            "value": 180
        }
    ]
}
var yaxis = data.yaxis;
var xaxisLabelColor = '#7c7c7c';
var wkkslData = data.wkksl;
var wkkslName = wkkslData[0].name;

var tdkslData = data.tdksl;
var tdkslName = tdkslData[0].name;
var option = {
    backgroundColor:'#000',
    legend: {
        data: [wkkslName, tdkslName],
        top: 0,
        right: 10,
        itemGap: 18,
        itemWidth: 16,
        itemHeight: 8,
        textStyle: {
            color: '#9CC2D2'
        },
    },
    grid: [{
            show: false,
            left: 15,
            top: 43,
            bottom: 38,
            containLabel: true,
            width: '40%'
        },
        {
            show: false,
            left: '52.5%',
            top: 63.5,
            bottom: 41,
            width: '0%'
        },
        {
            show: false,
            right: '14',
            top: 43,
            bottom: 38,
            containLabel: true,
            width: '40%'
        }
    ],
    xAxis: [{
            splitNumber: 4,
            type: 'value',
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'top',
            // offset: -10,
            axisLabel: {
                show: true,
                textStyle: {
                    color: xaxisLabelColor,
                    fontSize: 14
                },
            },
            splitLine: {
                show: false
            }
        },
        {
            gridIndex: 1,
            show: false,
        },
        {
            gridIndex: 2,
            splitNumber: 4,
            type: 'value',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'top',
            // offset: -10,
            axisLabel: {
                show: true,
                textStyle: {
                    color: xaxisLabelColor,
                    fontSize: 14,
                },
            },
            splitLine: {
                show: false
            },
        },
    ],
    yAxis: [{
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
            },
            data: [],

        },
        {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                align: 'center',
                color: '#a1d6d5'
            },
            data: yaxis,
        },
        {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
            },
            data: [],
        },
    ],
    series: [{
            name: wkkslName,
            type: 'pictorialBar',
            // barWidth: '10',
            symbol: 'image://data:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAAYCAYAAAA1Zem1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTYzQTVDRjJCNjkyMTFFOEI5QzJEQUI0OTg1QzBDNkMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTYzQTVDRjFCNjkyMTFFOEI5QzJEQUI0OTg1QzBDNkMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTNGMkRENjVCNjkxMTFFOEEyQzM5NDhDNzI1NTU4NzIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTNGMkRENjZCNjkxMTFFOEEyQzM5NDhDNzI1NTU4NzIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Cn4hXAAAYs0lEQVR42ux6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',
            data: wkkslData
        },
        {
            name: tdkslName,
            type: 'pictorialBar',
            // barWidth: '10',
            symbol: 'image://data:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAAYCAYAAAA1Zem1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUMyRkU3MTdCNjkxMTFFOEE2RTdDM0M0NjdFMkZGMUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUMyRkU3MTZCNjkxMTFFOEE2RTdDM0M0NjdFMkZGMUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTY5ODRFM0NCNjgyMTFFODlGMTE4MTkxOTAwRkFGREQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTY5ODRFM0RCNjgyMTFFODlGMTE4MTkxOTAwRkFGREQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz73QJn5AAAVJklEQVR42uxa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',
            xAxisIndex: 2,
            yAxisIndex: 2,
            barCategoryGap: 5,
            barGap: 5,
            data: tdkslData
        }
    ]
};