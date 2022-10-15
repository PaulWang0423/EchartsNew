var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";


var geoGpsMap = [109.1162, 34.2004]
var geoCoordMap = {
    "江苏": [118.8062, 31.9208],
    '内蒙古': [110.3467, 41.4899],
    "辽宁": [123.1238, 42.1216],
    "陕西": [109.1162, 34.2004],
    "甘肃": [103.5901, 36.3043],
    "青海": [101.4038, 36.8207],
    "新疆": [87.9236, 43.5883],

    "河南": [113.4668, 34.6234],
    "西藏": [116.3896, 39.91],
    "浙江": [119.5313, 29.8773],
    "福建": [119.4543, 25.9222],
    "湖南": [113.0823, 28.2568],
    "四川": [113.0823, 28.2568],
    "云南": [102.9199, 25.4663],
    "广东": [113.12244, 23.009505],
    "海南": [110.3893, 19.8516]
};

var value = {
    '江苏': 10000,
    '内蒙古': 10000,
    '辽宁': 10000,
    '陕西': 10000,
    '福建': 10000,
    '甘肃': 10000,
    '青海': 10000,
    '新疆': 10000,
    '湖北': 10000,
    '浙江': 10000,
    '河南': 10000,
    '湖南': 10000,
    '云南': 10000,
    '广东': 10000,
    '海南': 10000,
    '西藏': 10000,



};
var colors = '#f9b207';
$(function() {


    var year = ["长春", "长春", "青岛", "青岛", "成都", "成都"];
    var mapData = [];

    /*柱子Y名称*/
    var categoryData = [];
    var barData = [];

    for (var key in geoCoordMap) {
        mapData.push({
            "year": '陕西',
            "name": key,
            "value": value[key] / 100,
            "value1": value[key] / 100,
        });
    }

    mapData.sort(function sortNumber(a, b) {
        return a.value - b.value
    });
    for (var j = 0; j < mapData.length; j++) {
        barData.push(mapData[j].value1);
        categoryData.push(mapData[j].name);
    }
    console.log(mapData)
    $.getJSON(uploadedDataURL, function(geoJson) {
        console.log(geoJson)
        echarts.registerMap('china', geoJson);
        var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };

        var convertToLineData = function(data, gps) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var toCoord = geoCoordMap[dataItem.name];
                debugger;
                var fromCoord = gps; //郑州
                //  var toCoord = geoGps[Math.random()*3]; 
                if (fromCoord && toCoord) {
                    res.push([{
                        coord: fromCoord,
                        value: dataItem.value
                    }, {
                        coord: toCoord,
                    }]);
                }
            }
            return res;
        };
   
        optionXyMap01 = {
            backgroundColor: '#001540',
            geo: {
                show: true,
                map: 'china',
                roam: true,
                zoom: 1,
                center: [101.4038, 36.8207],
                label: {
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(147, 235, 248, 1)',
                        borderWidth: 1,
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(128, 217, 248, 1)',
                        // shadowColor: 'rgba(255, 255, 255, 1)',
                        shadowOffsetX: -2,
                        shadowOffsetY: 2,
                        shadowBlur: 10
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                }
            },
            series: [

                //地图？
                {
                    type: 'map',
                    map: 'china',
                    geoIndex: 0,
                    aspectScale: 0.75, //长宽比
                    showLegendSymbol: false, // 存在legend时显示
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#031525',
                            borderColor: '#FFFFFF',
                        },
                        emphasis: {
                            areaColor: '#2B91B7'
                        }
                    },
                    animation: false
                },
                //地图点的动画效果
                {
                    //  name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(mapData.sort(function(a, b) {
                        return b.value - a.value;
                    }).slice(0, 20)),
                    symbolSize: function(val) {
                        return val[2] / 10;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: colors,
                            shadowBlur: 10,
                            shadowColor: colors
                        }
                    },
                    zlevel: 1
                },
                //地图线的动画效果
                {
                    type: 'lines',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 4, //箭头指向速度，值越小速度越快
                        trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                        symbol: 'arrow', //箭头图标
                        symbolSize: 3, //图标大小
                    },
                    lineStyle: {
                        normal: {
                            color: colors,
                            width: 0.1, //尾迹线条宽度
                            opacity: 0.5, //尾迹线条透明度
                            curveness: .3 //尾迹线条曲直度
                        }
                    },
                    data: convertToLineData(mapData, geoGpsMap)
                }
            ]

        };
        myChart.setOption(optionXyMap01);
    });
});