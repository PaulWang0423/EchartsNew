var xData = function() {
    var data = [];
    for (var i = 1; i < 10; i++) {
        data.push(i + "日");
    }
    return data;
}();

option = {
    backgroundColor: "#344b58",
    "title": {
        "text": "2016年11月1-7日全国分区AQI平均值",
        "subtext": "BY 石瑜 彭楠",
        x: "4%",

        textStyle: {
            color: '#fff',
            fontSize: '22'
        },
        subtextStyle: {
            color: '#90979c',
            fontSize: '16',

        },
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    "grid": {
        "borderWidth": 0,
        "top": 80,
        "bottom": 95,
        textStyle: {
            color: "#fff"
        }
    },
    "legend": {
        x: '4%',
        top: '11%',
        textStyle: {
            color: '#90979c',
        },
        "data": ['华北', '华中', '华东','华南','东北','西南','西北','平均']
    },
     

    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "data": xData,
    }],
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "splitArea": {
            "show": false
        },

    }],
    "dataZoom": [{
        "show": true,
        "height": 30,
        "xAxisIndex": [
            0
        ],
        bottom: 30,
        "start": 10,
        "end": 80,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle:{
            color:"#d3dee5",
            
        },
           textStyle:{
            color:"#fff"},
           borderColor:"#90979c"
        
        
    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 35
    }],
    "series": [{
            "name": "华北",
            "type": "bar",
            "stack": "",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": "rgba(255,144,128,1)",
                    "label": {
                        "show": true,
                        "textStyle": {
                            "color": "#fff"
                        },
                        "position": "insideTop",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
              80.65,
118.9,
172.4,
194.1,
125.3,
100.2,
76.41
            ],
        },

        {
            "name": "华中",
            "type": "bar",
            "stack": "",
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,191,183,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
               52.84,
64.96,
72.82,
81.26,
98.99,
152.6,
103.1
            ]
        }, {
            "name": "华东",
            "type": "bar",
            "stack": "",
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,129,194,214)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
              44.96,
65.76,
81.86,
83.79,
95.75,
108.9,
78.4
            ]
        }, {
            "name": "华南",
            "type": "bar",
            "stack": "",
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,129,146,214)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                42.22,
42.17,
47.97,
73.15,
82.46,
85.56,
64.14
            ]
        }, {
            "name": "东北",
            "type": "bar",
            "stack": "",
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,217,179,230)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
               68.68,
84.2,
86.12,
170.8,
202.2,
54.78,
115.6
            ]
        }, {
            "name": "西南",
            "type": "bar",
            "stack": "",
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,220,247,191)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
               56.43,
58.8,
65.60,
72.49,
75.47,
88.36,
46.01
            ]
        }, {
            "name": "西北",
            "type": "bar",
            "stack": "",
            "itemStyle": {
                "normal": {
                    "color": "rgba(0,131,252,216)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                88.70,
107.3,
109.5,
110.8,
101.9,
88.69,
80.46
            ]
        },
    ]
}