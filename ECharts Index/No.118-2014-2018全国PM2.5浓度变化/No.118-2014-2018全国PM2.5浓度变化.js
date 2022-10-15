var uploadedDataURL = '/asset/get/s/data-1528971808162-BkOXf61WX.json';
//var uploadedDataURL = "/asset/get/s/data-1559032707973-kPCDcrc0f.json";



var colorIndex = 0;
$(function () {
    var geoCoordMap = {
        北京: [116.4551, 40.2539],
        天津: [117.4219, 39.4189],
        河北: [114.4995, 38.1006],
        山西: [112.3352, 37.9413],
        内蒙古: [110.3467, 41.4899],
        辽宁: [123.1238, 42.1216],
        吉林: [125.8154, 44.2584],
        黑龙江: [127.9688, 45.368],
        上海: [121.4648, 31.2891],
        江苏: [118.8062, 31.9208],
        安徽: [117.29, 32.0581],
        浙江: [119.5313, 29.8773],
        福建: [119.4543, 25.9222],
        江西: [116.0046, 28.6633],
        山东: [117.1582, 36.8701],
        河南: [113.4668, 34.6234],
        湖北: [114.3896, 30.6628],
        湖南: [113.0823, 28.2568],
        广东: [113.12244, 23.009505],
        广西: [108.479, 23.1152],
        海南: [110.3893, 19.8516],
        重庆: [108.384366, 30.439702],
        四川: [103.9526, 30.7617],
        贵州: [106.6992, 26.7682],
        云南: [102.9199, 25.4663],
        陕西: [109.1162, 34.2004],
        甘肃: [103.5901, 36.3043],
        青海: [101.4038, 36.8207],
        宁夏: [106.3586, 38.1775],
        新疆: [87.9236, 43.5883],
        西藏: [91.11, 29.97],
    };

    var voltageLevel = ['2014', '2015', '2016', '2017', '2018'];
    var mapData = [[], [], [], [], []];
    var d2018 = {
        北京: 50,
        天津: 51.6,
        河北: 53.1,
        山西: 43.9,
        内蒙古: 21,
        辽宁: 31.6,
        吉林:26.7,
        黑龙江:23.3,
        上海:35.7,
        江苏:46.2,
        浙江:30.6,
        安徽:49.9,
        福建:22.2,
        江西:31.4,
        山东:47.7,
        河南:57.3,
        湖北:43.2,
        湖南:37,
        广东:27,
        广西:29.2,
        海南:15.7,
        重庆:33.4,
        四川: 36.3,
        贵州: 24.8,
        云南:  17.8,
        陕西: 44.2,
        甘肃: 32.7,
        青海: 25.9,
        宁夏: 33,
        新疆: 53.5,
        西藏: 5.8,

    };
    var d2017 = {
        北京: 55.7,
天津: 60.1,
河北: 60.1,
山西: 49.4,
内蒙古: 22.5,
辽宁: 36.8,
吉林: 36.9,
黑龙江: 32.3,
上海: 39.1,
江苏: 48.3,
浙江: 35.4,
安徽: 56,
福建: 24,
江西: 38.5,
山东: 54.3,
河南: 61,
湖北: 48.5,
湖南: 41.4,
广东: 29.9,
广西: 31.7,
海南: 15.8,
重庆: 38.5,
四川: 40.5,
贵州: 27.8,
云南: 18.1,
陕西: 50.2,
甘肃: 34.5,
青海: 25.6,
宁夏: 35.6,
新疆: 49.7,
西藏: 5.7,
    };
    var d2016 = {
        北京: 69.5,
天津: 68.4,
河北: 67.3,
山西: 50.4,
内蒙古: 21.8,
辽宁: 37.8,
吉林: 32.8,
黑龙江: 25.3,
上海: 43.3,
江苏: 50.2,
浙江: 35.7,
安徽: 52.9,
福建: 24.3,
江西: 37.3,
山东: 61.3,
河南: 65.7,
湖北: 50.5,
湖南: 43.6,
广东: 28.6,
广西: 32.2,
海南: 15.9,
重庆: 45.2,
四川: 44.3,
贵州: 30.9,
云南: 21.4,
陕西: 51.1,
甘肃: 39.8,
青海: 28.5,
宁夏: 40.3,
新疆: 53.8,
西藏: 7.6,
    };

    var d2015 = {
       北京: 78.5,
天津: 70.6,
河北: 74.8,
山西: 50.7,
内蒙古: 24.8,
辽宁: 49,
吉林: 45.8,
黑龙江: 35.9,
上海: 51.9,
江苏: 58.6,
浙江: 41.9,
安徽: 58.9,
福建: 25.6,
江西: 37.6,
山东: 69.7,
河南: 73.7,
湖北: 57.8,
湖南: 47.9,
广东: 30.7,
广西: 35.4,
海南: 15.9,
重庆: 46.2,
四川: 45,
贵州: 32.6,
云南: 20.9,
陕西: 47,
甘肃: 38.7,
青海: 29.2,
宁夏: 39.4,
新疆: 49.2,
西藏: 6.7,
    };
    var d2014 = {
        北京: 79.5,
天津: 84.1,
河北: 82.4,
山西: 56.4,
内蒙古: 26.1,
辽宁: 49.2,
吉林: 48.6,
黑龙江: 40.1,
上海: 49.6,
江苏: 62.5,
浙江: 46.8,
安徽: 68,
福建: 28.6,
江西: 44.4,
山东: 71.2,
河南: 77.2,
湖北: 64.5,
湖南: 57.2,
广东: 35.6,
广西: 40.3,
海南: 16.6,
重庆: 53.1,
四川: 54.3,
贵州: 36,
云南: 22.7,
陕西: 54.3,
甘肃: 43,
青海: 35.9,
宁夏: 40.1,
新疆: 59.1,
西藏: 7.7,
    };
    
    
    var colors = [
    ['#1DE9B6', '#F46E36', '#04B9FF', '#5DBD32', '#FFC809', '#FB95D5', '#BDA29A', '#6E7074', '#546570', '#C4CCD3'],
    [
        '#37A2DA',
        '#67E0E3',
        '#32C5E9',
        '#9FE6B8',
        '#FFDB5C',
        '#FF9F7F',
        '#FB7293',
        '#E062AE',
        '#E690D1',
        '#E7BCF3',
        '#9D96F5',
        '#8378EA',
        '#8378EA',
    ],
    [
        '#DD6B66',
        '#759AA0',
        '#E69D87',
        '#8DC1A9',
        '#EA7E53',
        '#EEDD78',
        '#73A373',
        '#73B9BC',
        '#7289AB',
        '#91CA8C',
        '#F49F42',
    ],
];
    
    
    var categoryData = [];
    var barData = [];
    for (var key in geoCoordMap) {
        categoryData.push(key);
        mapData[0].push({
            year: '2014',
            name: key,
            value: d2014[key],
        });
        mapData[1].push({
            year: '20154',
            name: key,
            value: d2015[key],
        });
        mapData[2].push({
            year: '2016',
            name: key,
            value: d2016[key],
        });
        mapData[3].push({
            year: '2017',
            name: key,
            value: d2017[key],
        });
        mapData[4].push({
            year: '2018',
            name: key,
            value: d2018[key],
        });
    }

    for (var i = 0; i < mapData.length; i++) {
        barData.push([]);
        for (var j = 0; j < mapData[i].length; j++) {
            barData[i].push(mapData[i][j].value);
        }
    }
    $.getJSON(uploadedDataURL, function (geoJson) {
        echarts.registerMap('china', geoJson);
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value),
                    });
                }
            }
            return res;
        };

        var convertToLineData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = geoCoordMap[dataItem.name];
                var toCoord = gps; //市区
                if (fromCoord && toCoord) {
                    res.push([
                        {
                            coord: fromCoord,
                            value: dataItem.value,
                        },
                        {
                            coord: toCoord,
                        },
                    ]);
                }
            }
            return res;
        };

        let optionXyMap01 = {
            timeline: {
                data: voltageLevel,
                axisType: 'category',
                autoPlay: true,
                playInterval: 3000,
                left: '10%',
                right: '10%',
                bottom: '3%',
                width: '80%',
                //  height: null,
                label: {
                    normal: {
                        textStyle: {
                            color: '#ddd',
                        },
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff',
                        },
                    },
                },
                symbolSize: 10,
                lineStyle: {
                    color: '#555',
                },
                checkpointStyle: {
                    borderColor: '#888',
                    borderWidth: 2,
                },
                controlStyle: {
                    showNextBtn: true,
                    showPrevBtn: true,
                    normal: {
                        color: '#666',
                        borderColor: '#666',
                    },
                    emphasis: {
                        color: '#aaa',
                        borderColor: '#aaa',
                    },
                },
            },
            baseOption: {
                animation: true,
                animationDuration: 1000,
                animationEasing: 'cubicInOut',
                animationDurationUpdate: 1000,
                animationEasingUpdate: 'cubicInOut',
                grid: {
                    right: '1%',
                    top: '15%',
                    bottom: '10%',
                    width: '20%',
                },
                tooltip: {
                    trigger: 'axis', // hover触发器
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                        shadowStyle: {
                            color: 'rgba(150,150,150,0.1)', //hover颜色
                        },
                    },
                },
                geo: {
                    show: true,
                    map: 'china',
                    roam: true,
                    zoom: 1,
                    center: [113.83531246, 34.0267395887], //中心点
                    label: {
                        emphasis: {
                            show: false,
                        },
                    },
                    itemStyle: {
                        normal: {
                            borderColor: 'rgba(147, 235, 248, 1)',
                            borderWidth: 1,
                            areaColor: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.5,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(147, 235, 248, 0)', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(147, 235, 248, .2)', // 100% 处的颜色
                                    },
                                ],
                                globalCoord: false, // 缺省为 false
                            },
                            // shadowColor: 'rgba(128, 217, 248, 1)',
                            // shadowColor: 'rgba(255, 255, 255, 1)',
                            // shadowOffsetX: -2,
                            // shadowOffsetY: 2,
                            // shadowBlur: 10
                        },
                        emphasis: {
                            areaColor: '#389BB7',
                            borderWidth: 0,
                        },
                    },
                },
            },
            options: [],
        };
        for (var n = 0; n < voltageLevel.length; n++) {
            optionXyMap01.options.push({
             backgroundColor: '#142037',
                
                title: [
                    {
                         text: '2014-2018全国PM2.5浓度变化',
                         subtext: '数据来源：国家统计年鉴',
                        left: '15%',
                        top: '7%',
                        textStyle: {
                            color: '#EEDD78',
                            fontSize: 30,
                        },
                    },
                    {
                        id: 'statistic',
                        text: voltageLevel[n] + '年数据统计情况',
                        left: '75%',
                        top: '8%',
                        textStyle: {
                            color: '#EEDD78',
                            fontSize: 20,
                        },
                    },
                ],
                xAxis: {
                    type: 'value',
                    scale: true,
                    position: 'top',
                    min: 0,
                    boundaryGap: false,
                    splitLine: {
                        show: false,
                    },
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        margin: 2,
                        textStyle: {
                            color: '#aaa',
                        },
                    },
                },
                yAxis: {
                    type: 'category',
                    //  name: 'TOP 20',
                    nameGap: 16,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#ddd',
                        },
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            color: '#ddd',
                        },
                    },
                    axisLabel: {
                        interval: 0,
                        textStyle: {
                            color: '#ddd',
                        },
                    },
                    data: categoryData,
                },
                series: [
                    {
                        //文字和标志
                        name: 'light',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(mapData[n]),
                        symbolSize: function (val) {
                            return (val[2]) / 12;
                        },
                        // label: {
                        //     normal: {
                        //         formatter: '{b}',
                        //         position: 'right',
                        //         show: true
                        //     },
                        //     emphasis: {
                        //         show: true
                        //     }
                        // },
                        itemStyle: {
                            normal: {
                                color: colors[colorIndex][n],
                            },
                        },
                    },
                    {
                        type: 'map',
                        map: 'china',
                        geoIndex: 0,
                        aspectScale: 0.75, //长宽比
                        showLegendSymbol: false, // 存在legend时显示
                        label: {
                            normal: {
                                show: false,
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    color: '#fff',
                                },
                            },
                        },
                        roam: true,
                        itemStyle: {
                            normal: {
                                areaColor: '#031525',
                                borderColor: '#FFFFFF',
                            },
                            emphasis: {
                                areaColor: '#2B91B7',
                            },
                        },
                        animation: false,
                        data: mapData,
                    },
                    {
                        //  name: 'Top 10',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(
                            mapData[n]
                                .sort(function (a, b) {
                                    return b.value - a.value;
                                })
                                .slice(0, 20)
                        ),
                        symbolSize: function (val) {
                            return (val[2]) / 2;
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke',
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true,
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: colors[colorIndex][n],
                                shadowBlur: 5,
                                shadowColor: colors[colorIndex][n],
                            },
                        },
                        zlevel: 1,
                    },
                    
                    {
                        zlevel: 1.5,
                        type: 'bar',
                        symbol: 'none',
                        itemStyle: {
                            normal: {
                                color: colors[colorIndex][n],
                            },
                        },
                        data: barData[n],
                    },
                ],
            });
        }
        myChart.setOption(optionXyMap01);
    });
});
