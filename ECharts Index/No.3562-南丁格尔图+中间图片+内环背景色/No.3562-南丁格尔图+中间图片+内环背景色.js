var img =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAEAYAAACTrr2IAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDQtMjZUMTU6MDM6NDcrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA0LTI5VDA5OjUxOjU1KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA0LTI5VDA5OjUxOjU1KzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRiNjdhMzBjLWUwZDIt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';

option = {
    backgroundColor: {
        type: 'radial',
        x: 0.5,
        y: 0.5,
        r: 0.2, //根据series中的radius[0]赋值可使其完全填充
        colorStops: [
            {
                offset: 0,
                color: '#ffffff', // 0% 处的颜色(环内颜色)
            },
            {
                offset: 0.5,
                color: '#fff', // 50% 处的颜色(环内颜色)
            },
            {
                offset: 0.51,
                color: '#1f314f', // 与offset为1时颜色相同,否则会有渐变的效果
            },
            {
                offset: 1,
                color: '#1f314f', // 100% 处的颜色(此处可根据图表外层背景色背景色来调节)
            },
        ],
        global: false, // 缺省为 false
    },
    graphic: {
        type: 'image',
        // z: 3,
        style: {
            image: img,
            width: 40,
            height: 40,
            backgroundColor: '#fff',
        },
        left: 'center', //
        top: 'middle', // 配置图片居中
    },
    legend: {
        type: 'plain',
        pageTextStyle: {
            color: '#fff',
        },
        icon: 'circle',
        left: 'auto',
        top: 'auto',
        textStyle: {
            color: '#fff',
            fontSize: 14,
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    series: [
        {
            name: '任务概览',
            type: 'pie',
            radius: ['20%', '50%'],
            center: ['40%', '50%'],
            left: '10%',
            width: '100%',
            height: '100%',
            roseType: 'radius',
            label: {
                color:'#ffffff',
                fontSize:16
            },
            data: [
                {
                    value: 2,
                    name: '预测',
                    itemStyle: {
                        color: '#01CFCF ',
                        borderWidth: 2,
                    },
                },
                {
                    value: 1,
                    name: '客户求交',
                    itemStyle: {
                        color: '#8B6BFF',
                        borderWidth: 2,
                    },
                },
                {
                    value: 3,
                    name: '任务建模',
                    itemStyle: {
                        color: '#1F75F3 ',
                        borderWidth: 2,
                    },
                },
            ],
        },
    ],
};
