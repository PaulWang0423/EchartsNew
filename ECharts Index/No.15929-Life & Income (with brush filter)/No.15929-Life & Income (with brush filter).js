var uploadedDataURL = "/asset/get/s/data-1469555879417-SkJnEmr_.json";

myChart.showLoading();

$.getJSON(uploadedDataURL, function (data) {
    myChart.hideLoading();

    var itemStyle = {
        normal: {
            opacity: 0.8,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    };

    var sizeFunction = function (x) {
        var y = Math.sqrt(x / 5e8) + 0.1;
        return y * 40;
    };
    // Schema:
    var schema = [
        {name: 'Income', index: 0, text: '人均收入', unit: '美元'},
        {name: 'LifeExpectancy', index: 1, text: '人均寿命', unit: '岁'},
        {name: 'Population', index: 2, text: '总人口', unit: ''},
        {name: 'Country', index: 3, text: '国家', unit: ''}
    ];

    option = {
        baseOption: {
            timeline: {
                axisType: 'category',
                orient: 'vertical',
                autoPlay: true,
                inverse: true,
                playInterval: 1000,
                left: null,
                right: 10,
                top: 20,
                bottom: 20,
                width: 55,
                height: null,
                label: {
                    normal: {
                        textStyle: {
                            color: '#ddd'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                symbol: 'none',
                lineStyle: {
                    color: '#555'
                },
                checkpointStyle: {
                    color: '#bbb',
                    borderColor: '#777',
                    borderWidth: 2
                },
                controlStyle: {
                    showNextBtn: false,
                    showPrevBtn: false,
                    normal: {
                        color: '#666',
                        borderColor: '#666'
                    },
                    emphasis: {
                        color: '#aaa',
                        borderColor: '#aaa'
                    }
                },
                data: []
            },
            backgroundColor: '#333',
            title: {
                'text': data.timeline[0],
                textAlign: 'center',
                right: '3%',
                top: '73%',
                textStyle: {
                    fontSize: 100,
                    color: 'rgba(255, 255, 255, 0.9)'
                }
            },
            tooltip: {
                padding: 5,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1
            },
            xAxis: {
                type: 'log',
                name: '人均收入',
                max: 100000,
                min: 300,
                nameGap: 25,
                nameLocation: 'middle',
                nameTextStyle: {
                    fontSize: 18
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    lineStyle: {
                        color: '#ddd'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#ddd'
                    }
                },
                axisLabel: {
                    formatter: '{value} $',
                    textStyle: {
                        color: '#ddd'
                    }
                }
            },
            yAxis: {
                type: 'value',
                name: '平均寿命',
                nameGap: 25,
                max: 100,
                nameTextStyle: {
                    color: '#ccc',
                    fontSize: 18
                },
                axisLine: {
                    lineStyle: {
                        color: '#ddd'
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: '#ddd'
                    }
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    formatter: '{value} 岁',
                    textStyle: {
                        color: '#ddd'
                    }
                }
            },
            grid: {
                top: '40%',
                left: 200,
                right: 110
            },
            geo: {
                top: 20,
                left: 170,
                right: 120,
                height: '38%',
                name: 'World Population (2010)',
                type: 'map',
                map: 'world',
                roam: false,
                label: {
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#aaa',
                        areaColor: '#555'
                    },
                    emphasis: {
                        areaColor: '#555'
                    }
                }
            },            
            toolbox: {
                // orient: 'vertical',
                top: 25,
                left: 10,
                itemSize: 20,
                // itemGap: 17,
                iconStyle: {
                    normal: {
                        borderColor: '#eee'
                    },
                    emphasis: {
                        borderColor: '#fffb60'
                    }
                }
            },
            brush: {
                toolbox: ['polygon', 'keep', 'clear'],
                brushLink: 'all',
                outOfBrush: {
                    opacity: .1,
                    color: '#aaa'
                }
            },
            visualMap: [
                {
                    type: 'piecewise',
                    dimension: 3,
                    categories: data.countries.map(function (item) {
                        return item[2];
                    }),
                    left: 10,
                    bottom: 35,
                    calculable: true,
                    precision: 0.1,
                    textGap: 10,
                    itemGap: 12,
                    textStyle: {
                        color: '#ccc'
                    },
                    inRange: {
                        color: ['#bcd3bb', '#e88f70', '#edc1a5', '#9dc5c8', '#e1e8c8', '#7b7c68', '#e5b5b5', '#f0b489', '#928ea8', '#bda29a', '#376956', '#c3bed4', '#495a80', '#9966cc', '#bdb76a', '#eee8ab', '#a35015', '#04dd98', '#d9b3e6']
                    },
                    outOfRange: {
                        color: '#555'
                    }
                }
            ],
            series: [
                {
                    type: 'scatter',
                    id: 'gridScatter',
                    itemStyle: itemStyle,
                    data: data.series[0],
                    symbolSize: function(val) {
                        return sizeFunction(val[2]);
                    },
                    tooltip: {
                        formatter: function (obj) {
                            var value = obj.value;
                            return schema[3].text + '：' + value[3] + '<br>'
                                + schema[1].text + '：' + value[1] + schema[1].unit + '<br>'
                                + schema[0].text + '：' + value[0] + schema[0].unit + '<br>'
                                + schema[2].text + '：' + value[2] + '<br>';
                        }
                    }
                },
                {
                    type: 'scatter',
                    id: 'geoScatter',
                    coordinateSystem: 'geo',
                    itemStyle: {
                        normal: {
                            opacity: 1,
                            shadowBlur: 5,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                    },
                    data: data.countries.map(function (item) {
                        return [item[0], item[1], 0, item[2]];
                    }),
                    symbolSize: 15,
                    tooltip: {
                        formatter: function (obj) {
                            var value = obj.value;
                            return schema[3].text + '：' + value[3];
                        }
                    }
                }
            ],
            animationDurationUpdate: 1000,
            animationEasingUpdate: 'quinticInOut'
        },
        options: []
    };

    for (var n = 0; n < data.timeline.length; n++) {
        option.baseOption.timeline.data.push(data.timeline[n]);
        option.options.push({
            title: {
                show: true,
                'text': data.timeline[n] + ''
            },
            series: {
                id: 'gridScatter',
                name: data.timeline[n],
                type: 'scatter',
                itemStyle: itemStyle,
                data: data.series[n],
                symbolSize: function(val) {
                    return sizeFunction(val[2]);
                }
            }
        });
    }

    myChart.setOption(option);

});