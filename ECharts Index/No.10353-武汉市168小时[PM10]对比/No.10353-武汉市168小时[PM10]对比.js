option =  {
        "title": {
            "text": "武汉市168小时[PM10]对比"
        },
        "toolbox": {
            "feature": {
                "restore": {
                    "show": true,
                    "title": "还原"
                },
                "dataZoom": {
                    "show": true,
                    "title": {
                        "dataZoom": "区域缩放",
                        "dataZoomReset": "区域缩放后退"
                    }
                },
                "magicType": {
                    "show": true,
                    "title": {
                        "line": "折线图切换",
                        "stack": "堆积",
                        "bar": "柱形图切换",
                        "tiled": "平铺"
                    },
                    "type": ["line", "bar"]
                },
                "saveAsImage": {
                    "show": true,
                    "title": "保存为图片",
                    "type": "png",
                    "lang": ["点击保存"]
                }
            },
            "show": true,
            "orient": "vertical",
            "y": "center"
        },
        "tooltip": {
            "show": true
        },
        "legend": {
            "selected": {
                "WRF-CHEM": false
            },
            "data": ["WRF-CMAQ", "WRF-CAMx", "WRF-CHEM", "逐步回归", "神经网络", "实时监测"],
            "show": true
        },
        "xAxis": [{
            "type": "category",
            "boundaryGap": false,
            "axisLabel": {
                "clickable": true
            },
            "splitLine": {
                "show": false,
                "length": 0
            },
            "show": true,
            "data": [{
                "value": "27日",
                "textStyle": {
                    "align": "center",
                    "color": "#4488BB",
                    "decoration": "",
                    "fontFamily": "微软雅黑",
                    "fontFamily2": "",
                    "fontSize": 13,
                    "fontStyle": "italic",
                    "fontWeight": "bolder"
                }
            }, "01时", "02时", "03时", "04时", "05时", "06时", "07时", "08时", "09时", "10时", "11时", "12时", "13时", "14时", "15时", "16时", "17时", "18时", "19时", "20时", "21时", "22时", "23时", {
                "value": "28日",
                "textStyle": {
                    "align": "center",
                    "color": "#4488BB",
                    "decoration": "",
                    "fontFamily": "微软雅黑",
                    "fontFamily2": "",
                    "fontSize": 13,
                    "fontStyle": "italic",
                    "fontWeight": "bolder"
                }
            }, "01时", "02时", "03时", "04时", "05时", "06时", "07时", "08时", "09时", "10时", "11时", "12时", "13时", "14时", "15时", "16时", "17时", "18时", "19时", "20时", "21时", "22时", "23时", {
                "value": "29日",
                "textStyle": {
                    "align": "center",
                    "color": "#4488BB",
                    "decoration": "",
                    "fontFamily": "微软雅黑",
                    "fontFamily2": "",
                    "fontSize": 13,
                    "fontStyle": "italic",
                    "fontWeight": "bolder"
                }
            }, "01时", "02时", "03时", "04时", "05时", "06时", "07时", "08时", "09时", "10时", "11时", "12时", "13时", "14时", "15时", "16时", "17时", "18时", "19时", "20时", "21时", "22时", "23时", {
                "value": "30日",
                "textStyle": {
                    "align": "center",
                    "color": "#4488BB",
                    "decoration": "",
                    "fontFamily": "微软雅黑",
                    "fontFamily2": "",
                    "fontSize": 13,
                    "fontStyle": "italic",
                    "fontWeight": "bolder"
                }
            }, "01时", "02时", "03时", "04时", "05时", "06时", "07时", "08时", "09时", "10时", "11时", "12时", "13时", "14时", "15时", "16时", "17时", "18时", "19时", "20时", "21时", "22时", "23时", {
                "value": "31日",
                "textStyle": {
                    "align": "center",
                    "color": "#4488BB",
                    "decoration": "",
                    "fontFamily": "微软雅黑",
                    "fontFamily2": "",
                    "fontSize": 13,
                    "fontStyle": "italic",
                    "fontWeight": "bolder"
                }
            }, "01时", "02时", "03时", "04时", "05时", "06时", "07时", "08时", "09时", "10时", "11时", "12时", "13时", "14时", "15时", "16时", "17时", "18时", "19时", "20时", "21时", "22时", "23时", {
                "value": "01日",
                "textStyle": {
                    "align": "center",
                    "color": "#4488BB",
                    "decoration": "",
                    "fontFamily": "微软雅黑",
                    "fontFamily2": "",
                    "fontSize": 13,
                    "fontStyle": "italic",
                    "fontWeight": "bolder"
                }
            }, "01时", "02时", "03时", "04时", "05时", "06时", "07时", "08时", "09时", "10时", "11时", "12时", "13时", "14时", "15时", "16时", "17时", "18时", "19时", "20时", "21时", "22时", "23时", {
                "value": "02日",
                "textStyle": {
                    "align": "center",
                    "color": "#4488BB",
                    "decoration": "",
                    "fontFamily": "微软雅黑",
                    "fontFamily2": "",
                    "fontSize": 13,
                    "fontStyle": "italic",
                    "fontWeight": "bolder"
                }
            }, "01时", "02时", "03时", "04时", "05时", "06时", "07时", "08时", "09时", "10时", "11时", "12时", "13时", "14时", "15时", "16时", "17时", "18时", "19时", "20时", "21时", "22时", "23时"]
        }],
        "yAxis": [{
            "type": "value",
            "show": true
        }],
        "series": [{
            "smooth": true,
            "name": "WRF-CMAQ",
            "type": "line",
            "itemStyle": {
                "normal": {
                    "color": "#93ea63"
                }
            },
            "markLine": {
                "symbol": ["none", "none"],
                "itemStyle": {
                    "normal": {
                        "label": {
                            "show": true,
                            "position": "outer"
                        },
                        "lineStyle": {
                            "color": "#4488BB",
                            "type": "dashed"
                        }
                    }
                },
                "data": [
                    [{
                        "yAxis": 0,
                        "name": "07月27日 00时",
                        "xAxis": "27日"
                    }, {
                        "yAxis": 0,
                        "name": "07月27日 00时",
                        "xAxis": "27日"
                    }],
                    [{
                        "yAxis": 0,
                        "name": "07月28日 00时",
                        "xAxis": "28日"
                    }, {
                        "yAxis": 700,
                        "name": "07月28日 00时",
                        "xAxis": "28日"
                    }],
                    [{
                        "yAxis": 0,
                        "name": "07月29日 00时",
                        "xAxis": "29日"
                    }, {
                        "yAxis": 700,
                        "name": "07月29日 00时",
                        "xAxis": "29日"
                    }],
                    [{
                        "yAxis": 0,
                        "name": "07月30日 00时",
                        "xAxis": "30日"
                    }, {
                        "yAxis": 700,
                        "name": "07月30日 00时",
                        "xAxis": "30日"
                    }],
                    [{
                        "yAxis": 0,
                        "name": "07月31日 00时",
                        "xAxis": "31日"
                    }, {
                        "yAxis": 700,
                        "name": "07月31日 00时",
                        "xAxis": "31日"
                    }],
                    [{
                        "yAxis": 0,
                        "name": "08月01日 00时",
                        "xAxis": "01日"
                    }, {
                        "yAxis": 700,
                        "name": "08月01日 00时",
                        "xAxis": "01日"
                    }],
                    [{
                        "yAxis": 0,
                        "name": "08月02日 00时",
                        "xAxis": "02日"
                    }, {
                        "yAxis": 700,
                        "name": "08月02日 00时",
                        "xAxis": "02日"
                    }]
                ]
            },
            "data": ["36", "34", "36", "37", "37", "37", "42", "48", "69", "63", "57", "51", "47", "46", "48", "48", "50", "53", "34", "34", "35", "49", "53", "52", "47", "41", "36", "34", "33", "33", "38", "42", "65", "50", "45", "44", "44", "44", "40", "37", "38", "42", "29", "29", "29", "33", "33", "31", "31", "30", "30", "33", "34", "36", "44", "47", "100", "88", "82", "71", "69", "60", "54", "54", "60", "66", "34", "32", "33", "40", "43", "38", "35", "36", "37", "38", "37", "38", "44", "47", "103", "83", "68", "60", "60", "58", "56", "61", "63", "63", "30", "28", "33", "49", "65", "58", "43", "36", "33", "35", "36", "38", "48", "56", "63", "106", "91", "82", "78", "71", "66", "66", "67", "68", "34", "34", "44", "51", "51", "50", "47", "44", "44", "47", "48", "49", "54", "63", "75", "69", "100", "84", "83", "81", "74", "73", "72", "39", "37", "42", "42", "41", "39", "38", "30", "30", "32", "36", "37", "40", "47", "56", "123", "95", "72", "70", "74", "78", "69", "67", "75", "90", "45", "31", "40", "52", "65", "66"]
        }, {
            "smooth": true,
            "name": "WRF-CAMx",
            "type": "line",
            "itemStyle": {
                "normal": {
                    "color": "#6e9eec"
                }
            },
            "markLine": {
                "symbol": ["none", "none"],
                "itemStyle": {
                    "normal": {
                        "label": {
                            "show": true,
                            "position": "outer"
                        },
                        "lineStyle": {
                            "color": "#4488BB",
                            "type": "dashed"
                        }
                    }
                },
                "data": [
                    [{
                        "yAxis": 0,
                        "name": "07月27日 00时",
                        "xAxis": "27日"
                    }, {
                        "yAxis": 0,
                        "name": "07月27日 00时",
                        "xAxis": "27日"
                    }],
                    [{
                        "yAxis": 0,
                        "name": "07月28日 00时",
                        "xAxis": "28日"
                    }, {
                        "yAxis": 700,
                        "name": "07月28日 00时",
                        "xAxis": "28日"
                    }],
                    [{
                        "yAxis": 0,
                        "name": "07月29日 00时",
                        "xAxis": "29日"
                    }, {
                        "yAxis": 700,
                        "name": "07月29日 00时",
                        "xAxis": "29日"
                    }],
                    [{
                        "yAxis": 0,
                        "name": "07月30日 00时",
                        "xAxis": "30日"
                    }, {
                        "yAxis": 700,
                        "name": "07月30日 00时",
                        "xAxis": "30日"
                    }],
                    [{
                        "yAxis": 0,
                        "name": "07月31日 00时",
                        "xAxis": "31日"
                    }, {
                        "yAxis": 700,
                        "name": "07月31日 00时",
                        "xAxis": "31日"
                    }],
                    [{
                        "yAxis": 0,
                        "name": "08月01日 00时",
                        "xAxis": "01日"
                    }, {
                        "yAxis": 700,
                        "name": "08月01日 00时",
                        "xAxis": "01日"
                    }],
                    [{
                        "yAxis": 0,
                        "name": "08月02日 00时",
                        "xAxis": "02日"
                    }, {
                        "yAxis": 700,
                        "name": "08月02日 00时",
                        "xAxis": "02日"
                    }]
                ]
            },
            "data": ["19", "13", "11", "11", "12", "16", "22", "35", "40", "35", "29", "26", "25", "25", "25", "25", "28", "23", "15", "16", "21", "30", "31", "28", "21", "13", "10", "8", "9", "12", "19", "31", "34", "25", "23", "23", "23", "22", "17", "16", "19", "16", "11", "9", "9", "12", "11", "9", "9", "8", "9", "11", "13", "19", "28", "57", "75", "61", "56", "49", "43", "37", "33", "35", "39", "29", "16", "16", "15", "20", "18", "12", "8", "7", "7", "9", "11", "18", "26", "59", "73", "54", "43", "39", "38", "36", "36", "40", "42", "26", "11", "13", "21", "33", "38", "30", "19", "13", "12", "12", "14", "20", "32", "80", "100", "76", "62", "56", "52", "44", "41", "43", "46", "33", "17", "26", "35", "38", "33", "29", "25", "23", "26", "29", "29", "34", "45", "93", "123", "101", "72", "59", "61", "58", "51", "52", "34", "23", "28", "36", "28", "27", "25", "19", "14", "16", "20", "23", "23", "27", "34", "74", "87", "57", "46", "46", "50", "50", "45", "44", "66", "50", "18", "22", "41", "48", "48", "35"]
        }, {
            "smooth": true,
            "name": "WRF-CHEM",
            "type": "line",
            "itemStyle": {
                "normal": {
                    "color": "#FF6633"
                }
            },
            "data": [""]
        }, {
            "smooth": true,
            "name": "逐步回归",
            "type": "line",
            "itemStyle": {
                "normal": {
                    "color": "#0033FF"
                }
            },
            "markLine": {
                "symbol": ["none", "none"],
                "itemStyle": {
                    "normal": {
                        "label": {
                            "show": true,
                            "position": "outer"
                        },
                        "lineStyle": {
                            "color": "#4488BB",
                            "type": "dashed"
                        }
                    }
                },
                "data": [
                    [{
                        "yAxis": 0,
                        "name": "07月27日 00时",
                        "xAxis": "27日"
                    }, {
                        "yAxis": 0,
                        "name": "07月27日 00时",
                        "xAxis": "27日"
                    }],
                    [{
                        "yAxis": 0,
                        "name": "07月28日 00时",
                        "xAxis": "28日"
                    }, {
                        "yAxis": 700,
                        "name": "07月28日 00时",
                        "xAxis": "28日"
                    }],
                    [{
                        "yAxis": 0,
                        "name": "07月29日 00时",
                        "xAxis": "29日"
                    }, {
                        "yAxis": 700,
                        "name": "07月29日 00时",
                        "xAxis": "29日"
                    }],
                    [{
                        "yAxis": 0,
                        "name": "07月30日 00时",
                        "xAxis": "30日"
                    }, {
                        "yAxis": 700,
                        "name": "07月30日 00时",
                        "xAxis": "30日"
                    }],
                    [{
                        "yAxis": 0,
                        "name": "07月31日 00时",
                        "xAxis": "31日"
                    }, {
                        "yAxis": 700,
                        "name": "07月31日 00时",
                        "xAxis": "31日"
                    }],
                    [{
                        "yAxis": 0,
                        "name": "08月01日 00时",
                        "xAxis": "01日"
                    }, {
                        "yAxis": 700,
                        "name": "08月01日 00时",
                        "xAxis": "01日"
                    }]
                ]
            },
            "data": ["40", "45", "41", "42", "40", "41", "37", "41", "42", "44", "45", "44", "43", "42", "42", "43", "42", "45", "43", "49", "48", "56", "53", "60", "53", "63", "54", "57", "51", "53", "46", "52", "52", "54", "55", "55", "55", "55", "54", "58", "55", "69", "63", "83", "75", "95", "82", "100", "83", "103", "84", "95", "83", "92", "79", "91", "87", "91", "89", "92", "89", "92", "82", "95", "84", "100", "88", "110", "93", "116", "101", "125", "107", "136", "118", "135", "122", "140", "114", "129", "116", "122", "114", "122", "111", "129", "113", "135", "118", "144", "118", "144", "125", "149", "131", "154", "134", "163", "153", "166", "152", "174", "142", "153", "143", "153", "143", "157", "133", "158", "136", "157", "139", "173", "149", "177", "157", "175", "160", "181", "166", "185", "177", "192", "170", "186", "168", "178", "164", "171", "163", "189", "167", "192", "181", "205", "172", "204", "181", "203", "181", "198", "197", "200"]
        }, {
            "smooth": true,
            "name": "神经网络",
            "type": "line",
            "itemStyle": {
                "normal": {
                    "color": "#FFFF00"
                }
            },
            "markLine": {
                "symbol": ["none", "none"],
                "itemStyle": {
                    "normal": {
                        "label": {
                            "show": true,
                            "position": "outer"
                        },
                        "lineStyle": {
                            "color": "#4488BB",
                            "type": "dashed"
                        }
                    }
                },
                "data": [
                    [{
                        "yAxis": 0,
                        "name": "07月27日 00时",
                        "xAxis": "27日"
                    }, {
                        "yAxis": 0,
                        "name": "07月27日 00时",
                        "xAxis": "27日"
                    }],
                    [{
                        "yAxis": 0,
                        "name": "07月28日 00时",
                        "xAxis": "28日"
                    }, {
                        "yAxis": 700,
                        "name": "07月28日 00时",
                        "xAxis": "28日"
                    }],
                    [{
                        "yAxis": 0,
                        "name": "07月29日 00时",
                        "xAxis": "29日"
                    }, {
                        "yAxis": 700,
                        "name": "07月29日 00时",
                        "xAxis": "29日"
                    }],
                    [{
                        "yAxis": 0,
                        "name": "07月30日 00时",
                        "xAxis": "30日"
                    }, {
                        "yAxis": 700,
                        "name": "07月30日 00时",
                        "xAxis": "30日"
                    }],
                    [{
                        "yAxis": 0,
                        "name": "07月31日 00时",
                        "xAxis": "31日"
                    }, {
                        "yAxis": 700,
                        "name": "07月31日 00时",
                        "xAxis": "31日"
                    }],
                    [{
                        "yAxis": 0,
                        "name": "08月01日 00时",
                        "xAxis": "01日"
                    }, {
                        "yAxis": 700,
                        "name": "08月01日 00时",
                        "xAxis": "01日"
                    }]
                ]
            },
            "data": ["72", "72", "72", "72", "72", "73", "74", "75", "76", "75", "73", "70", "68", "67", "66", "68", "68", "70", "70", "72", "74", "75", "77", "78", "77", "77", "76", "76", "77", "78", "79", "79", "78", "77", "75", "73", "71", "70", "69", "69", "70", "72", "73", "74", "75", "76", "77", "77", "76", "77", "78", "78", "79", "80", "81", "81", "79", "79", "77", "75", "73", "72", "71", "72", "73", "74", "75", "76", "77", "78", "79", "78", "78", "79", "79", "79", "80", "80", "81", "81", "79", "78", "76", "74", "72", "71", "70", "70", "70", "72", "73", "75", "77", "79", "79", "80", "80", "80", "80", "81", "79", "78", "77", "77", "76", "75", "74", "72", "69", "68", "67", "67", "67", "70", "72", "73", "73", "75", "77", "78", "76", "74", "73", "73", "72", "72", "73", "74", "75", "74", "73", "70", "68", "66", "66", "66", "66", "68", "72", "74", "74", "77", "77", "76"]
        }, {
            "smooth": true,
            "name": "实时监测",
            "type": "line",
            "itemStyle": {
                "normal": {
                    "color": "#FF8C00"
                }
            },
            "markLine": {
                "symbol": ["none", "none"],
                "itemStyle": {
                    "normal": {
                        "label": {
                            "show": true,
                            "position": "outer"
                        },
                        "lineStyle": {
                            "color": "#4488BB",
                            "type": "dashed"
                        }
                    }
                },
                "data": [
                    [{
                        "yAxis": 0,
                        "name": "07月27日 00时",
                        "xAxis": "27日"
                    }, {
                        "yAxis": 0,
                        "name": "07月27日 00时",
                        "xAxis": "27日"
                    }],
                    [{
                        "yAxis": 0,
                        "name": "07月28日 00时",
                        "xAxis": "28日"
                    }, {
                        "yAxis": 700,
                        "name": "07月28日 00时",
                        "xAxis": "28日"
                    }],
                    [{
                        "yAxis": 0,
                        "name": "07月29日 00时",
                        "xAxis": "29日"
                    }, {
                        "yAxis": 700,
                        "name": "07月29日 00时",
                        "xAxis": "29日"
                    }],
                    [{
                        "yAxis": 0,
                        "name": "07月30日 00时",
                        "xAxis": "30日"
                    }, {
                        "yAxis": 700,
                        "name": "07月30日 00时",
                        "xAxis": "30日"
                    }]
                ]
            },
            "data": ["45", "47", "47", "42", "42", "43", "45", "44", "40", "40", "40", "36", "34", "34", "29", "24", "25", "26", "30", "29", "32", "34", "39", "48", "50", "47", "45", "42", "41", "42", "43", "45", "49", "46", "41", "38", "38", "34", "29", "26", "25", "25", "27", "31", "32", "36", "41", "47", "56", "61", "54", "46", "43", "46", "49", "47", "43", "44", "41", "38", "36", "34", "34", "39", "33", "34", "36", "39", "40", "43", "42", "37", "34", "39", "42", "45", "43", "43", "47", "55", "59", "57", "49", "42", "30", "26"]
        }]
    }