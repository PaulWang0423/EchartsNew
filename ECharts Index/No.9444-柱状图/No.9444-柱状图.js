var imgDatUrl = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAADJCAYAAAAw0pBNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplYzU1OTc4NS00ZmVkLTlhNGEtYjYyYS01NDQ2YTdlMzc1ZWUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RENFQTBGMjUxNENGMTFFQTgzNzE4OTEyQTBCRjBENzIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RENFQTBGMjQxNENGMTFFQTgzNzE4OTEyQTBCRjBENzIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJjODg2NDU4LWViOGItNzQ0OC05ZTU3LWY5MjgyODBiMGQzNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDplYzU1OTc4NS00ZmVkLTlhNGEtYjYyYS01NDQ2YTdlMzc1ZWUiLz4gPC9y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'
var dimensions = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
var currentMonth = [325, 375, 425, 595, 485, 325, 395];
var option = {
    backgroundColor: '#070b1c',
    tooltip: {
        show: true,
        formatter: "{b}:{c}"
    },
    xAxis: {
        data: dimensions,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#1d356f'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#FFF'
            },
            margin: 20,
        },
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#1d356f'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#bcfff7'
            },
        }
    },
    series: [{
        name: '本月',
        type: 'pictorialBar',
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}',
                textStyle: {
                    color: '#fff'
                }
            }
        },
        symbol: imgDatUrl,
        barGap: 0,
        symbolSize: ['100%', '100%'],
        data: currentMonth
    }]
};