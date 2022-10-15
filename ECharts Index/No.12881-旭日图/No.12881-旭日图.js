 var colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
var bgColor = '#2E2733';

var itemStyle = {
    star5: {
        color: colors[0]
    },
    star4: {
        color: colors[1]
    },
    star3: {
        color: colors[2]
    },
    star2: {
        color: colors[3]
    }
};

var data = [{
    name: '混招',
    itemStyle: {
        normal: {
            color: colors[1]
        }
    },
    children: [{
        name: '经管学院',
        children: [{
            name: '5☆',
            children: [ {
                name: '工商、物流'
            }, 
            {
                name: '行政管理'
            },
         ]}, {
            name: '4☆',
            children: [ {
                name: '财政学、金融学、会计学、国际经济与贸易'
            }, ]
        }],
    }, {
        name: '外国语学院',
        children: [{
            name: '5☆',
            children: [{
                name: '日语、英语'
            },
                ]},{
                    name: '4☆',
            children: [ {
                name: '朝鲜语'
            }, ] 
        }]
    },{
        name: '艺术学院',
        children: [{
            name: '5☆',
            children: [{
                name: '产品设计、音乐学'
            },]
        }, {
            name: '4☆',
            children: [ {
                name: '专业环境设计、视觉传达设计'
            }]
        }, ]
    }]
},{
    name: '单招',
    itemStyle: {
        color: colors[2]
    },children: [{
        name: '测绘学院',
        children: [{
            name: '5☆',
            children: [{
                name: '测绘工程'
            }]
        }, {
            name: '4☆',
            children: [{
                name: '遥感科学与技术'
            }, {
                name: '地理信息科学'
            }]
        }, {
            name: '3☆',
            children: [{
                name: '人文、自然地理与资源环境、海洋测绘'
            }]
        }]
    },
        {
        name: '矿业学院',
        children: [{
            name: '5☆',
            children: [{
                name: '采矿工程'
            }]
        }, {
            name: '4☆',
            children: [ {
                name: '安全工程'
            }, ]
        }, {
            name: '3☆',
            children: [{
                name: '工程力学'
            },{
                name: '工业工程'
            },{
                name: '矿业加工工程'
            },]
        }]
    },
        {
        name: '化工学院',
        children: [{
            name: '5☆',
            children: [{
                name: '矿物加工工程专业'
            },{
                name: '化学工程与工艺专业'
            }]
        }, {
            name: '4☆',
            children: [ {
                name: '应用化学'
            },]
        }, {
            name: '3☆',
            children: [{
                name: '生物工程专业'
            }, {
                name: '环境科学、环境科学'
            },]
        }]
    }, {
        name: '数学学院',
        children: [{
            name: '5☆',
            children: [{
                name: '数学与应用数学专业'
            },{
                name: '统计学专业'
            }, ]
        }, {
            name: '4☆',
            children: [{
                name: '信息与计算科学专业'
            }, ]
        }, {
            name: '3☆',
            children: [{
                name: '统计学（数据分析方向)'
            }]
        }]
    }, {
        name: '计算机学院',
        children: [{
            name: '5☆',
            children: [{
                name: '计算机科学与技术专业'
            }]
        }, {
            name: '4☆',
            children: [ {
                name: '信息安全专业'
            },{
                name: '物联网工程专业'
            },
            {
                name: '软件工程专业'
            }
            ]
        }, {
            name: '3☆',
            children: [{
                name: '计算机科学与技术专业（人工智能方向）'
            },{
                name: '网络工程专业'
            }]
        }]
    }, {
        name: '交通学院',
        children: [{
            name: '4☆',
            children: [{
                name: '物流工程'
            }, {
                name: '交通工程'
            },{
                name: '交通运输'
            }]
        }]
    }, {
        name: '材料学院',
        children: [{
            name: '5☆',
            children: [{
                name: '材料化学专业'
            }]
        }, {
            name: '4☆',
            children: [{
                name: '金属材料工程专业（焊接技术方向）'
            }, {
                name: '金属材料工程专业（焊接技术方向）'
            }]
        }, {
            name: '3☆',
            children: [{
                name: '无机非金属材料工程专业'
            }]
        }]
    }, {
        name: '机械学院',
        children: [{
            name: '5☆',
            children: [{
                name: '机械设计制造及其自动化、机械电子工程'
            }]
        },{
            name: '4☆',
            children: [{
                name: '测控技术与仪器、能源与动力工程专业'
            },]
        }]
    }, {
        name: '电气学院',
        children: [{
            name: '5☆',
            children: [{
                name: '电气工程及其自动化专业'
            }]
        }, {
            name: '4☆',
            children: [{
                name: '自动化专业'
            },]
        }]
    }]
}];




for (var j = 0; j < data.length; ++j) {
    var level1 = data[j].children;
    for (var i = 0; i < level1.length; ++i) {
        var block = level1[i].children;
        var bookScore = [];
        var bookScoreId;
        for (var star = 0; star < block.length; ++star) {
            var style = (function (name) {
                switch (name) {
                    case '5☆':
                        bookScoreId = 0;
                        return itemStyle.star5;
                    case '4☆':
                        bookScoreId = 1;
                        return itemStyle.star4;
                    case '3☆':
                        bookScoreId = 2;
                        return itemStyle.star3;
                    case '2☆':
                        bookScoreId = 3;
                        return itemStyle.star2;
                }
            })(block[star].name);

            block[star].label = {
                color: style.color,
                downplay: {
                    opacity: 0.5
                }
            };

            if (block[star].children) {
                style = {
                    opacity: 1,
                    color: style.color
                };
                block[star].children.forEach(function (book) {
                    book.value = 1;
                    book.itemStyle = style;

                    book.label = {
                        color: style.color
                    };

                    var value = 1;
                    if (bookScoreId === 0 || bookScoreId === 3) {
                        value = 5;
                    }

                    if (bookScore[bookScoreId]) {
                        bookScore[bookScoreId].value += value;
                    }
                    else {
                        bookScore[bookScoreId] = {
                            color: colors[bookScoreId],
                            value: value
                        };
                    }
                });
            }
        }

        level1[i].itemStyle = {
            color: data[j].itemStyle.color
        };
    }
}

option = {
    backgroundColor: bgColor,
    color: colors,
    series: [{
        type: 'sunburst',
        center: ['50%', '48%'],
        data: data,
        sort: function (a, b) {
            if (a.depth === 1) {
                return b.getValue() - a.getValue();
            }
            else {
                return a.dataIndex - b.dataIndex;
            }
        },
        label: {
            rotate: 'radial',
            color: bgColor
        },
        itemStyle: {
            borderColor: bgColor,
            borderWidth: 2
        },
        levels: [{}, {
            r0: 0,
            r: 40,
            label: {
                rotate: 0
            }
        }, {
            r0: 40,
            r: 105
        }, {
            r0: 115,
            r: 140,
            itemStyle: {
                shadowBlur: 2,
                shadowColor: colors[2],
                color: 'transparent'
            },
            label: {
                rotate: 'tangential',
                fontSize: 10,
                color: colors[0]
            }
        }, {
            r0: 140,
            r: 145,
            itemStyle: {
                shadowBlur: 80,
                shadowColor: colors[0]
            },
            label: {
                position: 'outside',
                textShadowBlur: 5,
                textShadowColor: '#333',
            },
            downplay: {
                label: {
                    opacity: 0.5
                }
            }
        }]
    }]
};
