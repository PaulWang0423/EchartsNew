
var countries = ['澳大利亚', '加拿大', '中国', '德国', '丹麦', '西班牙', '芬兰', '法国', '英国', '希腊',  '以色列', '意大利', '日本', '韩国',  '墨西哥', '荷兰', '波兰', '俄罗斯', '新加坡', '美国', '泰国', '瑞典', '印度'];

var years = ['1.31', '2.29', '3.31', '4.30'];

var data = [
    [
        [0, 9, 101835],
        [0, 4, 119695],
        [213, 9720, 927243],
        [0, 7, 265232],
        [0, 0, 23816],
        [0, 1, 96318],
        [0, 1, 18411],
        [0, 6, 186885],
        [0, 2, 177767],
        [0, 0, 14963],
        [0, 0, 24350],
        [0, 2, 137096],
        [0, 17, 338865],
        [0, 11, 108583],
        [0, 0, 86019],
        [0, 0, 60021],
        [0, 0, 39113],
        [0, 0, 103240],
        [0, 16, 21380],
        [0, 7, 1368689],
        [0, 19, 32432],
        [0, 1, 40539],
        [0, 1, 190498]
    ],
    [
        [0, 10, 101835],
        [0, 14, 119695],
        [2838, 79389, 927243],
        [0, 57, 265232],
        [0, 3, 23816],
        [0, 45, 96318],
        [0, 2, 18411],
        [2, 100, 186885],
        [0, 23, 177767],
        [0, 3, 14963],
        [0, 7, 24350],
        [29, 1128, 137096],
        [5, 239, 338865],
        [17, 3150, 108583],
        [0, 2, 86019],
        [0, 6, 60021],
        [0, 0, 39113],
        [0, 2, 103240],
        [0, 102, 21380],
        [0, 62, 1368689],
        [0, 42, 32432],
        [0, 13, 40539],
        [0, 3, 190498]
    ],
    [
        [19, 4557, 101835],
        [66, 6317, 119695],
        [3314, 82545, 927243],
        [583, 61913, 265232],
        [77, 2577, 23816],
        [7340, 85195, 96318],
        [13, 1313, 18411],
        [3017, 43977, 186885],
        [1408, 22145, 177767],
        [43, 1212, 14963],
        [17, 4831, 24350],
        [11591, 101739, 137096],
        [56, 1953, 338865],
        [162, 9786, 108583],
        [20, 993, 86019],
        [864, 11750, 60021],
        [31, 2055, 39113],
        [9, 1837, 103240],
        [3, 879, 21380],
        [2398, 140640, 1368689],
        [10, 1651, 32432],
        [146, 4028, 40539],
        [32, 1251,190498]
    ],
    [
        [90, 6756, 101835],
        [2904, 50363, 119695],
        [4643, 84373, 927243],
        [6288, 159119, 265232],
        [443, 9008, 23816],
        [24257, 212917, 96318],
        [206, 4906, 18411],
        [24054, 127066, 186885],
        [26097, 165225, 177767],
        [139, 2576, 14963],
        [212, 15782, 24350],
        [27682, 203591, 137096],
        [415, 14088, 338865],
        [247, 10765, 108583],
        [1569, 16752, 86019],
        [4711, 38802, 60021],
        [624, 12640, 39113],
        [1073, 106498, 103240],
        [14, 15641, 21380],
        [52428, 1003974, 1368689],
        [54, 2954, 32432],
        [2462, 20302, 40539],
        [1074, 33050, 190498]
    ]
];

var coords = [
    [150.53, -33.55, 0, '澳大利亚',24772247],
    [-106.346771, 56.130366, 0, '加拿大', 36953765],
    [104.195397, 35.86166, 0, '中国', 1400050000],
    [10.451526, 51.165691, 0, '德国', 82293457],
    [9.501785, 56.26392, 0, '丹麦', 5754356],
    [-3.74922, 40.463667, 0, '西班牙', 46397452],
    [25.748151, 61.92411, 0, '芬兰', 5542517],
    [2.213749, 46.227638, 0, '法国', 65233271],
    [-3.435973, 55.378051, 0, '英国', 66573504],
    [21.824312, 39.074208, 0, '希腊', 11142161],
    [34.851612, 31.046051, 0, '以色列', 8452841],
    [12.56738, 41.87194, 0, '意大利', 60482200],
    [138.252924, 36.204824, 0, '日本', 127185332],
    [127.766922, 35.907757,  0, '韩国', 51269185],
    [-102.552784, 23.634501, 0, '墨西哥', 130759074],
    [5.291266, 52.132633, 0, '荷兰', 17084459],
    [19.145136, 51.919438, 0, '波兰', 38104832],
    [105.318756, 61.52401, 0, '俄罗斯', 143964709],
    [103.819836, 1.352083, 0, '新加坡', 5791901],
    [18.643501, 60.128161, 0, '瑞典', 9982709],
    [100.66471, 13.82031, 0, '泰国', 69183173],
    [-95.712891, 37.09024, 0, '美国', 326766748],
    [72.59242,18.532938, 0, '印度', 1354051854]
];

function getMax(dim) {
    var max = 0;
    data.forEach(function (dataByYear) {
        dataByYear.forEach(function (item) {
            if (item[dim] > max) {
                max = item[dim];
            }
        });
    });
    var exp = Math.round(Math.log(max) / Math.log(10));
    var exp10 = Math.pow(10, exp);
    max = Math.ceil(max / exp10 * 10) / 10 * exp10;

    return max;
}


var itemStyle = {
    normal: {
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
};

// Schema:
var schema = [{
    name: 'Income',
    index: 0,
    text: '人均收入',
    unit: '美元'
}, {
    name: 'LifeExpectancy',
    index: 1,
    text: '人均寿命',
    unit: '%'
}, {
    name: 'Population',
    index: 2,
    text: '总人口',
    unit: ''
}, {
    name: 'Country',
    index: 3,
    text: '国家',
    unit: ''
}];

option = {
    baseOption: {
        timeline: {
            axisType: 'category',
            orient: 'vertical',
            autoPlay: true,
            inverse: true,
            playInterval: 3000,
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
            data: years
        },
        backgroundColor: '#333',
        title: {
            text: '',
            textAlign: 'center',
            right: 80,
            bottom: 60,
            textStyle: {
                fontSize: 70,
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
            // type: 'log',
            type: 'value',
            name: '累计死亡数',
            nameGap: 25,
            min: 0,
            max: getMax(0),
            nameLocation: 'middle',
            nameTextStyle: {
                fontSize: 14
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
                textStyle: {
                    color: '#ddd'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: '累计确诊数',
            nameGap: 25,
            min: 0,
            max: getMax(1),
            nameTextStyle: {
                color: '#ccc',
                fontSize: 14
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
                formatter: '{value} ',
                textStyle: {
                    color: '#ddd'
                }
            }
        },
        grid: {
            top: '40%',
            left: 200,
            right: 130
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
            top: 20,
            left: 10,
            itemSize: 15,
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
        visualMap: [{
            type: 'piecewise',
            dimension: 3,
            categories: countries,
            left: 10,
            top: 80,
            calculable: true,
            precision: 0.1,
            textGap: 10,
            itemGap: 3,
          	itemHeight: 10,
            textStyle: {
                color: '#ccc'
            },
            inRange: {
                color: ['#bcd3bb', '#e88f70', '#ff0000', '#e1e8c8', '#7b7c68', '#e5b5b5', '#f0b489', '#928ea8', '#bda29a', '#376956', '#c3bed4', '#495a80', '#9966cc', '#bdb76a', '#eee8ab', '#a35015', '#04dd98', '#d9b3e6', '#b6c3fc','#315dbc','#c5c975','#476a54','#66e638','#a59619','#822ee2','#49450d','#eeebd4','#2b98dc','#b95c25', '#8f1ec2', '#d50390', '#36a15d', '#edc1a5','#bcd33b']
            },
            outOfRange: {
                color: '#555'
            }
        }, {
            show: false,
            type: 'continuous',
            dimension: 2,
            min: 0,
            max: 5,
            inRange: {
                
            }
        }],
        series: [{
            type: 'scatter',
            id: 'gridScatter',
            itemStyle: itemStyle,
            data: [],
            tooltip: {
                formatter: function(obj) {
                    var value = obj.value;
                    return '<div style="border-bottom: 1px solid #555;padding-bottom: 5px; margin-bottom: 5px;">' + value[3] + '</div>'
                        + '累计死亡数：' + value[0] + '<br>'
                        + '累计确诊数：' + value[1] + ' <br>'
                        + '2019年GDP：' + value[2] + ' 亿元 <br>';
                }
            }
        }, {
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
            data: coords,
              symbolSize: 15,
            tooltip: {
                formatter: function(obj) {
                    var value = obj.value;
                    return '<div style="border-bottom: 1px solid #555;padding-bottom: 5px; margin-bottom: 5px;">' + value[3] + '</div>'
                        + '人口总数：' + value[4] + ' 人 <br>';
                }
            }
        }],
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'quinticInOut'
    },
    options: []
};

for (var n = 0; n < years.length; n++) {
    option.options.push({
        title: {
            text: years[n]
        },
        series: {
            id: 'gridScatter',
            type: 'scatter',
            itemStyle: itemStyle,
            data: data[n].map(function (item, index) {
                return item.concat([countries[index]]);
            }),
           symbolSize: function (data) {  
                return data[2]*0.00006;  
            },

        }
    });
}
