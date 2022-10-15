// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

var bg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAADUCAYAAADk3g0YAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxNUFCQzE5MjJEQTFFOTExODdBNjgyQzI3NThDOEVENiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5RDgyN0M4MEExMkUxMUU5ODNDOUJGQjk5M0IxNkU3MiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5RDgyN0M3RkExMkUxMUU5ODNDOUJGQjk5M0IxNkU3MiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE1QUJDMTkyMkRBMUU5MTE4N0E2ODJDMjc1OEM4RUQ2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE1QUJDMTkyMkRBMUU5MTE4N0E2ODJDMjc1OEM4RUQ2Ii8+IDwvcmRmOkRlc2NyaXB0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';

var data = [[5,5,0],[1.5,1.6,15],[2,2,31],[2.6,1.7,35],[2.6,1,22],[3.2,1.5,10],[3.9,1.7,24],[2.2,3.2,20]]
var option = {
    xAxis: {
        show: false
    },
    yAxis: {
        show: false
    },
    series: [{
        type: 'liquidFill',
        data: [0.6, 0.55],
        color: ['#675ac4', '#be70de'],
        radius: '80%',
        itemStyle: {
            shadowBlur: 0
        },
        outline: {
            // show: false
            borderDistance: 5,
            itemStyle: {
                borderWidth: 15,
                borderColor: '#92d4c5',
                shadowBlur: 20,
                shadowColor: 'rgba(146, 212, 197, 1)'
            }
        },
        backgroundStyle: {
            // borderColor: '#156ACF',
            // borderWidth: 1,
            // shadowColor: 'rgba(0, 0, 0, 0.4)',
            // shadowBlur: 20
            borderWidth: 13,
            // borderColor: 'rgb(255,0,255,0.9)',
            // color: 'rgb(255,0,255,0.01)'
            borderColor: '#0ce6c5',
            color: '#007eff'

        },
        // shape: 'path://M367.855,428.202c-3.674-1.385-7.452-1.966-11.146-1.794c0.659-2.922,0.844-5.85,0.58-8.719 c-0.937-10.407-7.663-19.864-18.063-23.834c-10.697-4.043-22.298-1.168-29.902,6.403c3.015,0.026,6.074,0.594,9.035,1.728 c13.626,5.151,20.465,20.379,15.32,34.004c-1.905,5.02-5.177,9.115-9.22,12.05c-6.951,4.992-16.19,6.536-24.777,3.271 c-13.625-5.137-20.471-20.371-15.32-34.004c0.673-1.768,1.523-3.423,2.526-4.992h-0.014c0,0,0,0,0,0.014 c4.386-6.853,8.145-14.279,11.146-22.187c23.294-61.505-7.689-130.278-69.215-153.579c-61.532-23.293-130.279,7.69-153.579,69.202 c-6.371,16.785-8.679,34.097-7.426,50.901c0.026,0.554,0.079,1.121,0.132,1.688c4.973,57.107,41.767,109.148,98.945,130.793 c58.162,22.008,121.303,6.529,162.839-34.465c7.103-6.893,17.826-9.444,27.679-5.719c11.858,4.491,18.565,16.6,16.719,28.643 c4.438-3.126,8.033-7.564,10.117-13.045C389.751,449.992,382.411,433.709,367.855,428.202z',
        // shape: 'container',

        label: {
            normal: {
                position: ['38%', '40%'],
                formatter: function() {
                    var PM25 = '25';
                    // var html ='<span style="fontSize:15px;">'+PM25+'<span>';
                    // html +='<span style="fontSize:15px;">47μg/m³<span>';
                    return PM25;
                },
                textStyle: {
                    fontSize: 40,
                    color: '#D94854'
                }
            }
        }
    }, {
        name: 'ic',
        data: data,
        type: 'scatter',
        // symbolSize:15,
        symbolSize: function(val) {
            console.log(val);
            return val[2] / 1;
        },
        // zlevel:200,
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: '#898cee',
                shadowOffsetY: 2,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: '#725dc8'
                }, {
                    offset: 1,
                    color: '#4b53b8'
                }])
            }
        }
    }]

};