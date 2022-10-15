var uploadedDataURL = "/asset/get/s/data-1504673503593-ryd1yZaY-.json";
myChart.setOption(option = {
        backgroundColor: '#404a59',
        title : {
            text: '中国行政中心分布图',
            subtext: 'From 高德地图',
            sublink: 'http://ditu.amap.com/',
            left: 'center',
            top: 'top',
            textStyle: {
                color: '#fff'
            }
        },
        legend: {
            bottom:10,
            data: ['首都','省级', '地市', '区县','乡镇街道'],
            textStyle: {
                color: '#ccc'
            }
        },
        geo: {
            map: 'china',
            roam:'scale',
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#111'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
            series: []
        })
    myChart.showLoading()
$.getJSON(uploadedDataURL, function(data) {
    serieData=[];
    for (var x = 0; x < data.length; x += 1) {
        var towns = [[data[x][0][0] / 1000000, data[x][0][1] / 1000000]]
        for (var y = 1; y < data[x].length; y += 1) {
            var xs = data[x][y][0] / 1000000 + towns[y - 1][0]
            var ys = data[x][y][1] / 1000000 + towns[y - 1][1]
            towns.push([xs, ys]);
        }
        serieData.push(towns);
    }
    myChart.hideLoading();
    myChart.setOption(
        option = {
        series: [{
            name: '乡镇街道',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 1,
            large: true,
            itemStyle: {
                normal: {
                    color: 'rgba(0, 0, 255, 0.8)',
                    shadowColor: 'rgba(0, 0, 255, 0.8)',
                    shadowBlur: 10
                }
            },
            data: serieData[3]
        },{
            name: '区县',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 3,
            large: true,
            itemStyle: {
                normal: {
                    color:'rgba(50, 200, 255, 0.8)',
                    shadowColor: 'rgba(50, 200, 255, 0.8)',
                    shadowBlur: 30
                }
            },
            data: serieData[2]
        },{
            name: '地市',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 6,
            large: true,
            itemStyle: {
                normal: {
                    color:'rgba(125, 255, 255, 0.8)', 
                    shadowColor: 'rgba(125, 255, 255, 0.8)', 
                    shadowBlur: 60
                }
            },
            data: serieData[1]
        },{
            name: '省级',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 9,
            large: true,
            itemStyle: {
                normal: {
                    shadowBlur: 2,
                    color: 'rgba(255, 255, 255, 0.8)',
                    shadowColor: 'rgba(255, 255, 255, 0.8)', 
                    shadowBlur: 90
                }
            },
            data: serieData[0]
        },{
            name: '首都',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 12,
            large: true,
            itemStyle: {
                normal: {
                    shadowBlur: 2,
                    color: 'rgba(255, 0, 0, 0.8)',
                    shadowColor: 'rgba(255, 0, 0, 0.8)',
                    shadowBlur: 120
                }
            },
            data: [[116.413779, 39.910533]]
        }]
        });
});