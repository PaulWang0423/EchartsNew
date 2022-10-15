
var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAADGCAYAAACJm/9dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDUtMjFUMDk6Mzk6MTArMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA1LTIxVDA5OjQwOjUwKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA1LTIxVDA5OjQwOjUwKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI4MTU0MTE4LWYyZGQtYmM0Ny05NmRkLTI2Nzg2M2FjMDUwNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5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"
var trafficWay = [{
    name: '火车',
    value: 20
},{
    name: '飞机',
    value: 10
},{
    name: '客车',
    value: 30
},{
    name: '轮渡',
    value: 40
},{
    name: '大炮',
    value: 40
},{
    name: '火箭',
    value: 40
},{
    name: '潜艇',
    value: 40
},{
    name: '坦克',
    value: 40
}
  
];
var nameArray = trafficWay.map(item=>{
    return item.name
})

var data = [];
var color=['#00ffff','#00cfff','#006ced','#ffe000','#ffa800','#ff5b00','#ff3000','#ff3000']
var size = 120
var left = '30%'
for (var i = 0; i < trafficWay.length; i++) {
    data.push({
        value: trafficWay[i].value,
        name: trafficWay[i].name,
        itemStyle: {
            normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor:color[i],
                shadowColor: color[i]
            }
        }
    }, {
        value: 5,
        name: '',
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
            }
}
    });
}
var seriesOption = [{
    name: '',
    type: 'pie',
    clockWise: false,
    // 适配给你写好了
      radius: [72, 76],
      width: size,
      height: size,
      center: ['50%', '50%'],
      left: left,
      top: "center",
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {
                show: false,
                position: 'outside',
                color: '#ddd',
                formatter: function(params) {
                    var percent = 0;
                    var total = 0;
                    for (var i = 0; i < trafficWay.length; i++) {
                        total += trafficWay[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(0);
                    if(params.name !== '') {
                        return '交通方式：' + params.name + '\n' + '\n' + '占百分比：' + percent + '%';
                    }else {
                        return '';
                    }
                },
            },
        }
    },
    data: data
}];
option = {
    backgroundColor: '#0A2E5D',
    color : color,
    graphic: {
    elements: [{
        type: "image",
        z: 3,
          style: {
            image: img,
            width: size,
            height: size
          },
          left: left,
          top: 'center',
    }]
    },
    legend: [{
        // icon: `path://M881.387 297.813c38.08 65.387 57.28 136.747 57.28 214.187s-19.094 148.8-57.28 214.187c-38.187 65.28-89.92 117.12-155.2 155.2S589.44 938.667 512 938.667s-148.8-19.094-214.187-57.28c-65.28-38.08-117.013-89.814-155.306-155.307C104.427 660.8 85.333 589.44 85.333 512c0-77.333 19.094-148.693 57.28-214.187 38.08-65.28 89.814-117.013 155.307-155.306C363.2 104.533 434.56 85.333 512 85.333c77.333 0 148.693 19.094 214.187 57.28 65.28 38.187 117.013 89.92 155.2 155.2z m-217.707-47.36C617.387 223.467 566.827 209.92 512 209.92s-105.387 13.547-151.68 40.533-82.987 63.68-109.973 109.974c-26.987 46.293-40.534 96.853-40.534 151.68s13.547 105.386 40.534 151.68c26.986 46.293 63.68 82.986 109.973 109.973 46.293 26.987 96.853 40.533 151.68 40.533s105.387-13.546 151.68-40.533c46.293-26.987 82.987-63.68 109.973-109.973 26.987-46.294 40.534-96.854 40.534-151.68s-13.547-105.387-40.534-151.68c-27.093-46.294-63.786-82.987-109.973-109.974z`,
        orient: 'vertical',
        // x: 'left',
        data:nameArray.slice(4,8),
        left: '80%',
        top: 'center',
        itemWidth:15,
        align: 'left',
        textStyle: {
          color: "#fff"
        },
        itemGap: 20
    },
    {
        // icon: `path://M881.387 297.813c38.08 65.387 57.28 136.747 57.28 214.187s-19.094 148.8-57.28 214.187c-38.187 65.28-89.92 117.12-155.2 155.2S589.44 938.667 512 938.667s-148.8-19.094-214.187-57.28c-65.28-38.08-117.013-89.814-155.306-155.307C104.427 660.8 85.333 589.44 85.333 512c0-77.333 19.094-148.693 57.28-214.187 38.08-65.28 89.814-117.013 155.307-155.306C363.2 104.533 434.56 85.333 512 85.333c77.333 0 148.693 19.094 214.187 57.28 65.28 38.187 117.013 89.92 155.2 155.2z m-217.707-47.36C617.387 223.467 566.827 209.92 512 209.92s-105.387 13.547-151.68 40.533-82.987 63.68-109.973 109.974c-26.987 46.293-40.534 96.853-40.534 151.68s13.547 105.386 40.534 151.68c26.986 46.293 63.68 82.986 109.973 109.973 46.293 26.987 96.853 40.533 151.68 40.533s105.387-13.546 151.68-40.533c46.293-26.987 82.987-63.68 109.973-109.973 26.987-46.294 40.534-96.854 40.534-151.68s-13.547-105.387-40.534-151.68c-27.093-46.294-63.786-82.987-109.973-109.974z`,
        orient: 'vertical',
        // x: 'left',
        data:nameArray.slice(0,4),
        left: '70%',
        top: 'center',
        itemWidth:15,
        align: 'left',
        textStyle: {
          color: "#fff"
        },
        itemGap: 20
    }],
    tooltip: {
        show: true
    },
    toolbox: {
        show: false
    },
    series: seriesOption
}