//这个图可以分为行业级别和领域级别

var uploadedDataURL = "/asset/get/s/data-1506594859158-SkmVe8qj-.json";

myChart.showLoading();

$.getJSON(uploadedDataURL, function(data) {
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

    var sizeFunction = function(x) {
        var y = Math.sqrt(x / 5e8) + 0.1;
        return y * 80;
    };
    // Schema:
    var schema = [{
        name: 'Income',
        index: 0,
        text: '投资总额',
        unit: '亿元'
    }, {
        name: 'LifeExpectancy',
        index: 1,
        text: '平均投资',
        unit: '万元'
    }, {
        name: 'Population',
        index: 2,
        text: '项目数',
        unit: ''
    }, {
        name: 'Country',
        index: 3,
        text: '行业',
        unit: ''
    }];

    option = {
        baseOption: {
            timeline: {
                axisType: 'category',
                orient: 'vertical',
                autoPlay: true,
                inverse: true,
                playInterval: 1000,
                left: null,
                right: 0,
                top: 20,
                bottom: 20,
                width: 55,
                height: null,
                label: {
                    normal: {
                        textStyle: {
                            color: '#999'
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
            backgroundColor: '#404a59',
            title: [{
                text: data.timeline[0],
                textAlign: 'center',
                left: '63%',
                top: '55%',
                textStyle: {
                    fontSize: 100,
                    color: 'rgba(255, 255, 255, 0.7)'
                }
            }, {
                text: '各行业热度与投资金额关系演变',
                left: 'center',
                top: 10,
                textStyle: {
                    color: '#aaa',
                    fontWeight: 'normal',
                    fontSize: 20
                }
            }],
            tooltip: {
                padding: 5,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function(obj) {
                    var value = obj.value;
                    return schema[3].text + '：' + value[3] + '<br>' +
                        schema[1].text + '：' + value[1] + schema[1].unit + '<br>' +
                        schema[0].text + '：' + value[0] + schema[0].unit + '<br>' +
                        schema[2].text + '：' + value[2] + '<br>';
                }
            },
            grid: {
                top: 100,
                containLabel: true,
                left: 30,
                right: '110'
            },
            xAxis: {
                type: 'log',
                name: '投资总额',
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
                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                },
                axisLabel: {
                    formatter: '{value} 亿元'
                }
            },
            yAxis: {
                type: 'value',
                name: '热度',
                max: 100,
                nameTextStyle: {
                    color: '#ccc',
                    fontSize: 18
                },
                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    formatter: '{value} '
                }
            },
            visualMap: [{
                show: false,
                dimension: 3,
                categories: data.counties,
                calculable: true,
                precision: 0.1,
                textGap: 30,
                textStyle: {
                    color: '#ccc'
                },
                inRange: {
                    color: (function() {
                        var colors = ['#bcd3bb', '#e88f70', '#edc1a5', '#9dc5c8', '#e1e8c8', '#7b7c68', '#e5b5b5', '#f0b489', '#928ea8', '#bda29a'];
                        return colors.concat(colors);
                    })()
                }
            }],
            series: [{
                type: 'scatter',
                itemStyle: itemStyle,
                data: data.series[0],
                symbolSize: function(val) {
                    return sizeFunction(val[2]);
                }
            }],
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
                'text': data.timeline[n] + '',
            },
            series: {
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