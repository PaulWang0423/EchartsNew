var img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAABpCAYAAAAqVU3OAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdDRkM2RTdCNEZCQjExRUJCMUU0RkJFRUIxMjc1MzVFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdDRkM2RTdDNEZCQjExRUJCMUU0RkJFRUIxMjc1MzVFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0NGQzZFNzk0RkJCMTFFQkIxRTRGQkVFQjEyNzUzNUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0NGQzZFN0E0RkJCMTFFQkIxRTRGQkVFQjEyNzUzNUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7S7GkmAAAjSElEQVR42uxd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';

var trafficWay = [{
    name: '预警已处置',
    value: 20
}, {
    name: '预警已读',
    value: 30
}, {
    name: '预警未处理',
    value: 40
}];

var data = [];
var color = ['#00ffff', '#006ced', '#ffe000']
for (var i = 0; i < trafficWay.length; i++) {
    data.push({
        value: trafficWay[i].value,
        name: trafficWay[i].name,
        itemStyle: {
            normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: color[i],
                shadowColor: color[i]
            }
        }
    }, {
        value: 3,
        name: '环形间隔',
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                color: 'rgba(0, 0, 0, 0)',
            }
        }
    });
}
var seriesOption = [{
        name: '外圆',
        type: 'pie',
        clockWise: false,
        radius: ['30%', '29%'],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    show: false,
                },
            }
        },
        data: data
    },
    {
        type: 'pie',
        name: '中间背景圆',
        radius: ['23%', '0%'],
        center: ['50%', '50%'],
        z: 0,
        data: [{
            value: 100,
            itemStyle: {
                color: 'rgba(13, 47, 133, .4)',

            },
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            hoverAnimation: false,
        }, ]
    },
    {
        type: 'pie',
        name: '最里面背景圆',
        radius: ['20%', '0%'],
        center: ['50%', '50%'],
        z: 0,
        data: [{
            value: 100,
            itemStyle: {
                color: 'rgba(13, 47, 133, .9)',
            },
            label: {
                show: false
            },
            labelLine: {
                show: false

            },
            hoverAnimation: false,
        }, ]
    },
];
option = {
    backgroundColor: '#0A2E5D',
    color: color,
    graphic: {
        elements: [{
            name: '中间图片',
            type: "image",
            z: 3,
            style: {
                image: img,
                width: 97,
                height: 105
            },
            left: 'center',
            top: 'center',
            position: [100, 100]
        }]
    },
    tooltip: {
        show: false
    },
    legend: {
        icon: "circle",
        orient: 'vertical',
        itemHeight: 7,
        x: '70%',
        y: 'center',
        data: ['预警已处置', '预警已读', '预警未处理'],
        right: 340,
        bottom: 150,
        align: 'left',
        itemGap: 40,
        formatter: function(name) {
            return "{title|" + name + "}{value|起}"
        },

        textStyle: {
            rich: {
                title: {
                    fontSize: 18,
                    lineHeight: 20,
                    width: 150,
                    color: "#fff"
                },
                value: {
                    fontSize: 18,
                    lineHeight: 20,
                    color: "rgb(0, 178, 246)"
                }
            }
        },
    },
    toolbox: {
        show: false
    },
    series: seriesOption
}