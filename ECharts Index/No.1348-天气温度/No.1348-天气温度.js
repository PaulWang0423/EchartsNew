let  chartData=[
         {time:"2021-09-10",icon:"Showers",temp:(Math.random() * 20).toFixed(2),maxTemp:30,minTemp:10},
         {time:"2021-09-11",icon:"Showers",temp:(Math.random() * 20).toFixed(2),maxTemp:30,minTemp:10},
         {time:"2021-09-12",icon:"Showers",temp:(Math.random() * 20).toFixed(2),maxTemp:30,minTemp:10},
         {time:"2021-09-13",icon:"Showers",temp:(Math.random() * 20).toFixed(2),maxTemp:30,minTemp:10},
         {time:"2021-09-14",icon:"Showers",temp:(Math.random() * 20).toFixed(2),maxTemp:30,minTemp:10},
         {time:"2021-09-15",icon:"Showers",temp:(Math.random() * 20).toFixed(2),maxTemp:30,minTemp:10},
         {time:"2021-09-16",icon:"Showers",temp:(Math.random() * 20).toFixed(2),maxTemp:30,minTemp:10},
         {time:"2021-09-17",icon:"Showers",temp:(Math.random() * 20).toFixed(2),maxTemp:30,minTemp:10},
         {time:"2021-09-18",icon:"Showers",temp:(Math.random() * 20).toFixed(2),maxTemp:30,minTemp:10},
         {time:"2021-09-19",icon:"Showers",temp:(Math.random() * 20).toFixed(2),maxTemp:30,minTemp:10},
         {time:"2021-09-20",icon:"Showers",temp:(Math.random() * 20).toFixed(2),maxTemp:30,minTemp:10},
         {time:"2021-09-21",icon:"Showers",temp:(Math.random() * 20).toFixed(2),maxTemp:30,minTemp:10},
         {time:"2021-09-22",icon:"Showers",temp:(Math.random() * 20).toFixed(2),maxTemp:30,minTemp:10},
         {time:"2021-09-23",icon:"Showers",temp:(Math.random() * 20).toFixed(2),maxTemp:30,minTemp:10},
         {time:"2021-09-24",icon:"Showers",temp:(Math.random() * 20).toFixed(2),maxTemp:30,minTemp:10},
     ];
     let weatherIcons = {
         'Showers':"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjhDNkNBOTVGMjZDMTFFQjlBQ0FCNjI3QUVDM0E3RjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjhDNkNBOTZGMjZDMTFFQjlBQ0FCNjI3QUVDM0E3RjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOEM2Q0E5M0YyNkMxMUVCOUFDQUI2MjdBRUMzQTdGOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOEM2Q0E5NEYyNkMxMUVCOUFDQUI2MjdBRUMzQTdGOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhS//coAAAGsSURBVHjazJZNKERRFMfnPdM0k7HykazsrKxHIoWFz0hK9khZscDGho0N2Ym9FUa+SsnCx5RkoyhWbCRGWQ75eP6n/lPPbcbc5703OfWr172n97/n3nPPuYZlWYF8WDASf/VdJNUTDpg5fAzQDbbBA5BV3YIt0Mt5vYh+mSsFq6BBGa8kneAQ9IHHXELZIoqCgwwiqsn8Pv3/JDQNqjV3RfzuwAdIgg1QqyNUBIYdnncxKAAlPNNjMJpLKAYiLhNN/jsHmjMJtYJzsOtRVktGTqhZ18W9NTy+QjE1ohkfRMQsVajKp6Jwpgrd+BTNrCo0ZQ/TA/sCY7z0P4Q2QRs4BW8uBJ5AHNSBhWy1bo/4YqZGsTUVv6DGt5ZQBbgATaCQUY4w/eVwV+g3btuBGnDPEqTVJsrAEX92wsOUgrkI5lmtW8AkGOBi5FLugEHwrCtk8SdrnFum6CdIsKq/gEtQz2YYZWVJOGl8SYqkRaUqh6Qb28bTdaycQldukiHE7trBPmO3IbDEtq7/OMky3s9Vt4N3pb1Ln2kE145KeXg99S9eQZ6Zka8H5LcAAwAD6VbOyWjWQQAAAABJRU5ErkJggg==",
         'Sunny':"data:image/png;base64,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",
         'Cloudy':"data:image/png;base64,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",
     };
     
     var dataList = chartData.map(function (it) {
        return [it.time, it.temp,weatherIcons[it.icon],it.minTemp, it.maxTemp];
    });

   function renderWeather(param, api) {
      
        var weatherIconSize = 34;
        var point = api.coord([
            api.value(0) + 3600 * 24 * 1000 / 2,
            0
        ]);
        return {
            type: 'group',
            children: [
                
            {
                type: 'image',
                style: {
                    image: api.value(2),
                    x: -weatherIconSize,
                    y: -weatherIconSize,
                    width: weatherIconSize,
                    height: weatherIconSize
                },
                position: [point[0], 60]
            },
             {
                type: 'text',
                style: {
                      fill:"#ffffff",
                    text: api.value(3) + ' - ' + api.value(4) + '°',
                    textFont: api.font({fontSize: 14}),
                    textAlign: 'center',
                    textVerticalAlign: 'bottom'
                },
                position: [point[0]-15 ,80]
            }
            ]
        };
    };
    option = {
        backgroundColor:'black',
        legend: {
            show: false,
            top:10,
            textStyle:{
                normal:{
                    color:"white"
                }
            },
        },
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {
                return [
                    echarts.format.formatTime('yyyy-MM-dd', params[0].value[0]),
                    '平均温度：' + params[0].value[1]+'℃'
                ].join('<br>');
            }
        },
        grid: {
            top: 100,
            bottom:90,
            right:'5%',
        },
        xAxis: {
            type: 'time',
            maxInterval: 3600 * 1000 * 24,
            axisLine: {
                lineStyle: {
                   color: 'rgba(245, 248, 253,0.7)'
                }
            },
            splitLine: {
                lineStyle: {
                   color: 'rgba(245, 248, 253,0.2)'
                }
            },
            axisLabel:{
               // //自己转时间格式
               // formatter:function(params){
               //     return that.$utils.timeFormat(params,'MM/DD');
               // }
            }
            
        },
        yAxis: [
        {
            name: '平均温度（℃）',
            nameLocation: 'middle',
            nameGap: 35,
            axisLine: {
                lineStyle: {
                    color: 'rgba(245, 248, 253,0.7)'
                }
            },
            splitLine: {show: false}
        }, {
            axisLine: {show: false},
            axisTick: {show: false},
            axisLabel: {show: false},
            splitLine: {show: false}
        }],
        dataZoom: [{
            type: 'inside',
            xAxisIndex: 0,
            minSpan: 5,
            textStyle:{
                normal:{
                    color:"#ffffff"
                }
            },
            handleStyle:{
                 color:"#ffffff"
            }
        }, {
            type: 'slider',
            xAxisIndex: 0,
            minSpan: 5,
            bottom: 10,
            textStyle:{
                normal:{
                    color:"#ffffff"
                }
            },
            handleStyle:{
                 color:"#ffffff"
            }
        }],
        series: [{
            type: 'line',
            yAxisIndex: 0,
            showSymbol: false,
            hoverAnimation: false,
            symbolSize: 10,
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#365683'
                    }, {
                        offset: 0.5, color: '#243d63'
                    }, {
                        offset: 1, color: '#081833'
                    }]
                }
            },
            lineStyle: {
                normal: {
                    color: '#4d76a5'
                }
            },
            itemStyle: {
                normal: {
                    color: '#4d76a5'
                }
            },
            encode: {
                x: 0,
                y: 1
            },
            data:dataList,
            z: 2
        },
        {
            type: 'custom',
            itemStyle:{
                  normal: {
                    color: '#ffffff',
                  
                }
            },
            renderItem: renderWeather,
            data: dataList,
            // tooltip: {
            //     trigger: 'item',
            //     formatter: function (param) {
            //         return param.value[that.dims.time] + ': '
            //             + param.value[that.dims.minTemp] + ' - ' + param.value[that.dims.maxTemp] + '°';
            //     }
            // },
            yAxisIndex: 1,
            z: 11
        }]
    };
    
