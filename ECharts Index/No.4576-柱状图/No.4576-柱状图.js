let data = [{
    name: '应用1',
    value: 90
}, {
    name: '应用2',
    value: 88
}, {
    name: '应用3',
    value: 77
}, {
    name: '应用4',
    value: 66
}, {
    name: '应用5',
    value: 55
}];
let img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAABVCAYAAAB3qKuKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTVFQTYxMkVFMTJEMTFFQTkzOTlBRjE0MERERDg4OEEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTVFQTYxMkZFMTJEMTFFQTkzOTlBRjE0MERERDg4OEEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNUVBNjEyQ0UxMkQxMUVBOTM5OUFGMTQwREREODg4QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNUVBNjEyREUxMkQxMUVBOTM5OUFGMTQwREREODg4QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkGieecAAAf0SURBVHja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';
var xData = data.map(v => v.name);
var seriesData = data.map(v => v.value);
option = {
    backgroundColor: '#000',
    tooltip: {
        trigger: 'axis',
        formatter: '{b0}: {c0}'
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '2%',
        top: '10%',
        containLabel: true
    },
    xAxis: {
        data: xData,
        triggerEvent: true,
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(19,166,197,0.7)',
                width: 2
            }
        },
        axisLabel: {
            show: true,
            interval: 0,
            // formatter: function (val) {
            //     let strs = val.length > 8 ? val.substring(0, 7) : val;
            //     let str = '';
            //     for (var i = 0, s; (s = strs[i++]); ) {
            //         //遍历字符串数组
            //         str += s;
            //         if (!(i % 4)) str += '\n'; //按需要求余
            //     }
            //     return val.length > 8 ? str + '...' : str;
            // },
            textStyle: {
                color: '#66e0ff',
                fontSize: 12,
                align: 'center'
            }
        }
    },
    yAxis: {
        triggerEvent: true,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,246,255,0.4)',
                type: 'dashed'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(19,166,197,0.7)',
                width: 2
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#96c7d3',
                fontSize: 12
            }
        }
    },
    series: [{
            name: '柱',
            barWidth: '80%',
            type: 'pictorialBar',
            barCategoryGap: '0%',
            //    barGap: '-100%', // Make series be overlap

            // symbol: 'image://' + require('@/assets/images/bg.png'),
            symbol: 'image://' + img,
            itemStyle: {
                normal: {}
            },
            label: {
                normal: {
                    show: true,
                    formatter: '{c}%',
                    color: '#08faf1',
                    fontSize: 18,
                    position: ['40%', -18]
                }
            },
            data: seriesData,
            z: 1
        },
        {
            name: '柱顶部',
            barWidth: '80%',
            type: 'pictorialBar',
            barGap: '-100%', // Make series be overlap
            symbolSize: [7, 7],
            // symbolOffset: [23, -2],
            z: 2,
            symbolPosition: 'end',
            itemStyle: {
                normal: {
                    color: '#00ffff',
                    shadowColor: '#00ffff',
                    shadowBlur: 10
                }
            },
            label: {
                show: false
            },
            data: seriesData
        }
    ]
};