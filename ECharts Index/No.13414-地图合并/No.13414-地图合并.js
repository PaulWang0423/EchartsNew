var rug = "/asset/get/s/data-1528704024268-rye72iigQ.js";

var uploadedDataURL = "/asset/get/s/data-1528682054219-Hy0BU8ilm.json";
var name = 'china';
var yuexi = 'rgba(255, 153, 0, 0.8)' //粤西
var yuedong = 'rgba(244, 233, 37, 0.8)' //粤东
var zhusanjiao = 'rgba(0, 153, 0, 0.8)' //珠三角
var yuebei = 'rgba(204, 0, 204, 0.8)' //粤北


var geoCoordMap = {
    '清远市': [112.9175, 24.3292],
    '北京市': [116.4551, 40.2539],
    '韶关市': [113.7964, 24.7028],
    '湛江市': [110.3577, 20.9894],
    '梅州市': [116.1255, 24.1534],
    '河源市': [114.917, 23.9722],
    '肇庆市': [112.1265, 23.5822],
    '惠州市': [114.6204, 23.1647],
    '茂名市': [111.0059, 22.0221],
    '江门市': [112.6318, 22.1484],
    '阳江市': [111.8298, 22.0715],
    '云浮市': [111.7859, 22.8516],
    '广州市': [113.5107, 23.2196],
    '汕尾市': [115.5762, 23.0438],
    '揭阳市': [116.1255, 23.313],
    '珠海市': [113.7305, 22.1155],
    '佛山市': [112.8955, 23.1097],
    '潮州市': [116.7847, 23.8293],
    '汕头市': [117.1692, 23.3405],
    '深圳市': [114.5435, 22.5439],
    '东莞市': [113.8953, 22.901],
    '中山市': [113.4229, 22.478]
};

var gdata = [{
    'name': '北京市',
    'value': '98652'
}, {
    'name': '广州市',
    'value': '75986'
}]

var cdata = [{
    'name': '清远市',
    'value': '199'
}, {
    'name': '韶关市',
    'value': '152'
}, {
    'name': '湛江市',
    'value': '299'
}, {
    'name': '梅州市',
    'value': '89'
}, {
    'name': '河源市',
    'value': '52'
}, {
    'name': '肇庆市',
    'value': '99'
}, {
    'name': '惠州市',
    'value': '352'
}, {
    'name': '茂名市',
    'value': '116'
}, {
    'name': '江门市',
    'value': '168'
}, {
    'name': '阳江市',
    'value': '176'
}, {
    'name': '云浮市',
    'value': '78'
}, {
    'name': '广州市',
    'value': '468'
}, {
    'name': '汕尾市',
    'value': '86'
}, {
    'name': '揭阳市',
    'value': '114'
}, {
    'name': '珠海市',
    'value': '157'
}, {
    'name': '佛山市',
    'value': '315'
}, {
    'name': '潮州市',
    'value': '169'
}, {
    'name': '汕头市',
    'value': '214'
}, {
    'name': '深圳市',
    'value': '532'
}, {
    'name': '东莞市',
    'value': '265'
}, {
    'name': '中山市',
    'value': '259'
}];

//北京与广州关联
var relevance = [{
    "fromName": "广州市",
    "toName": "北京市",
    'coords': [
        [113.5107, 23.2196],
        [116.4551, 40.2539]
    ],
    lineStyle: {
        color: 'rgba(255, 153, 0, 0.8)'
    },
}, {
    "fromName": "北京市",
    "toName": "广州市",
    'coords': [
        [116.4551, 40.2539],
        [113.5107, 23.2196],
    ],
    lineStyle: {
        color: 'rgba(255, 255, 0, 0.8)'
    }
}]

//广东省地市关系
var relation = [{
        "fromName": "湛江市",
        "toName": "广州市",
        'coords': [
            [110.3577, 20.9894],
            [113.5107, 23.2196]
        ],
        lineStyle: {
            color: yuexi
        }
    },
    {
        "fromName": "清远市",
        "toName": "广州市",
        'coords': [
            [112.9175, 24.3292],
            [113.5107, 23.2196]
        ],
        lineStyle: {
            color: yuebei
        }
    },
    {
        "fromName": "韶关市",
        "toName": "广州市",
        'coords': [
            [113.7964, 24.7028],
            [113.5107, 23.2196]
        ],
        lineStyle: {
            color: yuebei
        }
    },
    {
        "fromName": "梅州市",
        "toName": "广州市",
        'coords': [
            [116.1255, 24.1534],
            [113.5107, 23.2196]
        ],
        lineStyle: {
            color: yuedong
        }
    },
    {
        "fromName": "河源市",
        "toName": "广州市",
        'coords': [
            [114.917, 23.9722],
            [113.5107, 23.2196]
        ],
        lineStyle: {
            color: yuedong
        }
    },
    {
        "fromName": "肇庆市",
        "toName": "广州市",
        'coords': [
            [112.1265, 23.5822],
            [113.5107, 23.2196]
        ],
        lineStyle: {
            color: zhusanjiao
        }
    },
    {
        "fromName": "惠州市",
        "toName": "广州市",
        'coords': [
            [114.6204, 23.1647],
            [113.5107, 23.2196]
        ],
        lineStyle: {
            color: zhusanjiao
        }
    },
    {
        "fromName": "茂名市",
        "toName": "广州市",
        'coords': [
            [111.0059, 22.0221],
            [113.5107, 23.2196]
        ],
        lineStyle: {
            color: yuexi
        }
    },
    {
        "fromName": "江门市",
        "toName": "广州市",
        'coords': [
            [112.6318, 22.1484],
            [113.5107, 23.2196]
        ],
        lineStyle: {
            color: zhusanjiao
        }
    },
    {
        "fromName": "阳江市",
        "toName": "广州市",
        'coords': [
            [111.8298, 22.0715],
            [113.5107, 23.2196]
        ],
        lineStyle: {
            color: yuexi
        }
    },
    {
        "fromName": "云浮市",
        "toName": "广州市",
        'coords': [
            [111.7859, 22.8516],
            [113.5107, 23.2196]
        ],
        lineStyle: {
            color: yuexi
        }
    },
    {
        "fromName": "汕尾市",
        "toName": "广州市",
        'coords': [
            [115.5762, 23.0438],
            [113.5107, 23.2196]
        ],
        lineStyle: {
            color: yuedong
        }
    },
    {
        "fromName": "揭阳市",
        "toName": "广州市",
        'coords': [
            [116.1255, 23.313],
            [113.5107, 23.2196]
        ],
        lineStyle: {
            color: yuedong
        }
    },
    {
        "fromName": "珠海市",
        "toName": "广州市",
        'coords': [
            [113.7305, 22.1155],
            [113.5107, 23.2196]
        ],
        lineStyle: {
            color: zhusanjiao
        }
    },
    {
        "fromName": "佛山市",
        "toName": "广州市",
        'coords': [
            [112.8955, 23.1097],
            [113.5107, 23.2196]
        ],
        lineStyle: {
            color: zhusanjiao
        }
    },
    {
        "fromName": "潮州市",
        "toName": "广州市",
        'coords': [
            [116.7847, 23.8293],
            [113.5107, 23.2196]
        ],
        lineStyle: {
            color: yuedong
        }
    },
    {
        "fromName": "汕头市",
        "toName": "广州市",
        'coords': [
            [117.1692, 23.3405],
            [113.5107, 23.2196]
        ],
        lineStyle: {
            color: yuedong
        }
    },
    {
        "fromName": "深圳市",
        "toName": "广州市",
        'coords': [
            [114.5435, 22.5439],
            [113.5107, 23.2196]
        ],
        lineStyle: {
            color: zhusanjiao
        }
    },
    {
        "fromName": "东莞市",
        "toName": "广州市",
        'coords': [
            [113.8953, 22.901],
            [113.5107, 23.2196]
        ],
        lineStyle: {
            color: zhusanjiao
        }
    },
    {
        "fromName": "中山市",
        "toName": "广州市",
        'coords': [
            [113.4229, 22.478],
            [113.5107, 23.2196]
        ],
        lineStyle: {
            color: zhusanjiao
        }
    }
]

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

option = {
    backgroundColor: '#154E90',
    title: {
        text: '',
        subtext: '',
        sublink: ''
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b} <br/>{a} : {c}'
    },
    geo: [{
        show: true,
        map: 'china',
        label: {
            normal: {
                // show: true,
                textStyle: {
                    color: '#fff'
                }
            },
            emphasis: {
                show: false,
            }
        },
        roam: true,
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
                        color: 'rgba(147, 235, 248, .1)' // 100% 处的颜色
                    }],
                    // globalCoord: true // 缺省为 false
                },
                shadowColor: 'rgba(128, 217, 248, 1)',
                shadowOffsetX: -2,
                shadowOffsetY: 2,
                shadowBlur: 10
            },
            emphasis: {
                areaColor: '#389BB7',
                borderWidth: 0
            }
        },
        regions: [{
            name: '广州市',
            // selected: true,
            // itemStyle: {
            //     areaColor: '#9900CC',
            // },
            label: {
                show: true,
                color: '#FF0'
            }
        }, {
            name: '北京',
            // selected:true,
            // itemStyle: {
            //     areaColor: '#9900CC',
            // },
            label: {
                show: true,
                color: '#FF0'
            }
        }]
    }],
    series: [{
        show: false,
        name: '点',
        type: 'scatter',
        coordinateSystem: 'geo',
        symbol: 'pin',
        symbolSize: 50,
        label: {
            normal: {
                show: true,
                // show: false,
                textStyle: {
                    color: '#fff',
                    fontSize: 9,
                },
                formatter: function(params) {
                    return params.value[2]
                }
            }
        },
        itemStyle: {
            normal: {
                // color:  '#F62157', //标志颜色
                color: 'rgba(255, 153,0, 0.8)',
                // color: 'rgba(255, 153,0, 0)',
            }
        },

        // data: convertData(cdata),//
        data: convertData(gdata),
    }, {
        name: '线路',
        type: 'lines',
        coordinateSystem: 'geo',
        large: true,
        left: '2%',
        top: 10,
        //线特效的配置
        type: 'lines',
        coordinateSystem: 'geo',
        // polyline:true,
        // symbol: ['none', 'triangle'],
        symbol: 'none',
        zlevel: 2,
        effect: {
            show: true,
            symbol: 'roundRect',
            constantSpeed: 50,
            period: 2,
            delay: 100,
            trailLength: 0.6,
            symbolSize: 6,
        },
        lineStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#ed1941'
                    }, {
                        offset: 1,
                        color: '#ffce7b'
                    }],
                    globalCoord: false
                },
                width: 0.5,
                opacity: 0.8,
                type: 'dotted',
                curveness: 0.2,
            }
        },
        data: relevance //北京与广东省
        // data:relation //广东省各地方
    }]
};

$.get(uploadedDataURL, function(geoJson) {
    echarts.registerMap(name, geoJson);
    myChart.setOption(option);
});


var k = 1;
var iCount;
setTimeout(function() {
    iCount = setInterval(function() {
        loading(k);
        k = k + 0.2;
    }, 150);
}, 5000);

function loading(k) {
    console.log(k)
    var newoption = myChart.getOption();
    console.log(newoption);
    if (k == 1) {
        newoption.geo[0].center = [113.5107, 23.2196];
    }

    // if(k==8.2){

    // }
    if (k < 11) {
        newoption.geo[0].zoom = k;
        myChart.setOption(newoption);
    } else {
        //清除setInterval
        newoption.geo[0].label.show = true; //显示所有地名
        newoption.series[0].data = convertData(cdata); //显示广东省各地市数据点
        newoption.series[1].data = relation; //显示广东省各地市线条
        myChart.setOption(newoption);
        clearInterval(iCount);
    }

}

setTimeout(function() {
    setInterval(function() {
        var newoption = myChart.getOption();
        if (newoption.geo[0].zoom < 6 && newoption.geo[0].label.show == true) {
            newoption.geo[0].label.show = false; //隐藏地名,只显示北京与广州
            newoption.series[0].data = convertData(gdata); //显示北京与广东
            newoption.series[1].data = relevance; //北京与广东的点
            myChart.setOption(newoption);
        } else if (newoption.geo[0].zoom > 6 && newoption.geo[0].label.show == false) {
            newoption.geo[0].label.show = true; //显示所有地名
            newoption.series[0].data = convertData(cdata); //显示广东省各地市数据点
            newoption.series[1].data = relation; //显示广东省各地市线条
            myChart.setOption(newoption);
        }

    }, 500)
}, 10000);