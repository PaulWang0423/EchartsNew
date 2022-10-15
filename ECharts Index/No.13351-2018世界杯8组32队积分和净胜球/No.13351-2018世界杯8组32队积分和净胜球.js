/*18.6.29 p.m.*/
var zu = ["A组", "B组", "C组", "D组", "E组", "F组", "G组", "H组"];
var tData = [
    {'球队': '乌拉圭', '胜': 3, '平': 0, '负': 0, '净胜球': 5, '积分': 9},
    {'球队': '俄罗斯', '胜': 2, '平': 0, '负': 1, '净胜球': 4, '积分': 6},
    {'球队': '沙特阿拉伯', '胜': 1, '平': 0, '负': 2, '净胜球': -5, '积分': 3},
    {'球队': '埃及', '胜': 0, '平': 0, '负': 3, '净胜球': -4, '积分': 0},
    {'球队': '西班牙', '胜': 1, '平': 2, '负': 0, '净胜球': 1, '积分': 5},
    {'球队': '葡萄牙', '胜': 1, '平': 2, '负': 0, '净胜球': 1, '积分': 5},
    {'球队': '伊朗', '胜': 1, '平': 1, '负': 1, '净胜球': 0, '积分': 4},
    {'球队': '摩洛哥', '胜': 0, '平': 1, '负': 2, '净胜球': -2, '积分': 1},
    {'球队': '法国', '胜': 2, '平': 1, '负': 0, '净胜球': 2, '积分': 7},
    {'球队': '丹麦', '胜': 1, '平': 2, '负': 0, '净胜球': 1, '积分': 5},
    {'球队': '秘鲁', '胜': 1, '平': 0, '负': 2, '净胜球': 0, '积分': 3},
    {'球队': '澳大利亚', '胜': 0, '平': 1, '负': 2, '净胜球': -3, '积分': 1},
    {'球队': '克罗地亚', '胜': 3, '平': 0, '负': 0, '净胜球': 6, '积分': 9},
    {'球队': '阿根廷', '胜': 1, '平': 1, '负': 1, '净胜球': -2, '积分': 4},
    {'球队': '尼日利亚', '胜': 1, '平': 0, '负': 2, '净胜球': -1, '积分': 3},
    {'球队': '冰岛', '胜': 0, '平': 1, '负': 2, '净胜球': -3, '积分': 1},
    {'球队': '巴西', '胜': 2, '平': 1, '负': 0, '净胜球': 4, '积分': 7},
    {'球队': '瑞士', '胜': 1, '平': 2, '负': 0, '净胜球': 1, '积分': 5},
    {'球队': '塞尔维亚', '胜': 1, '平': 0, '负': 2, '净胜球': -2, '积分': 3},
    {'球队': '哥斯达黎加', '胜': 0, '平': 1, '负': 2, '净胜球': -3, '积分': 1},
    {'球队': '瑞典', '胜': 2, '平': 0, '负': 1, '净胜球': 3, '积分': 6},
    {'球队': '墨西哥', '胜': 2, '平': 0, '负': 1, '净胜球': -1, '积分': 6},
    {'球队': '韩国', '胜': 1, '平': 0, '负': 2, '净胜球': 0, '积分': 3},
    {'球队': '德国', '胜': 1, '平': 0, '负': 2, '净胜球': -2, '积分': 3},
    {'球队': '比利时', '胜': 3, '平': 0, '负': 0, '净胜球': 7, '积分': 9},
    {'球队': '英格兰', '胜': 2, '平': 0, '负': 1, '净胜球': 5, '积分': 6},
    {'球队': '突尼斯', '胜': 1, '平': 0, '负': 2, '净胜球': -3, '积分': 3},
    {'球队': '巴拿马', '胜': 0, '平': 0, '负': 3, '净胜球': -9, '积分': 0},
    {'球队': '哥伦比亚', '胜': 2, '平': 0, '负': 1, '净胜球': 3, '积分': 6},
    {'球队': '日本', '胜': 1, '平': 1, '负': 1, '净胜球': 0, '积分': 4},
    {'球队': '塞内加尔', '胜': 1, '平': 1, '负': 1, '净胜球': 0, '积分': 4},
    {'球队': '波兰', '胜': 1, '平': 0, '负': 2, '净胜球': -3, '积分': 3}
];

var xData = [];
var yData = [];
for (var i = 0; i < tData.length; i++) {
    xData.push(tData[i]['积分']);
    yData.push(tData[i]['球队']);

}

function split_array(arr, len) {
    var a_len = arr.length;
    var result = [];
    for (var i = 0; i < a_len; i += len) {
        result.push(arr.slice(i, i + len));
    }
    return result;
}

var zuData = split_array(tData, 4);

xData = split_array(xData, 4);
yData = split_array(yData, 4);

var graphDatas = [];

zuData.forEach(function(val, index) {
    var j = index;
    val.forEach(function(val, index) {
        graphDatas.push({
            name: val['球队'],
            value: val['净胜球'],
            category: zu[j]
        });

    })
})

var cData = [];
var legenddData = {};
zu.forEach(function(v, index) {
    cData.push({
        name: v,

    });
    //legenddData[v] = false;
})
/*
legenddData['A组'] = true;
legenddData['B组'] = true;
legenddData['C组'] = true;
legenddData['D组'] = true;
*/

option = {
    ///////title开始////////
    
    title: [
        /*
        {
        text: 'A组积分',
        top: '8%',
        textStyle: {
            fontSize: 12
        }
    }, {
        text: 'B组积分',
        x: '35%',
        top: '8%',
        textStyle: {
            fontSize: 12
        }
    }, {
        text: 'C组积分',
        x: '70%',
        top: '8%',
        textStyle: {
            fontSize: 12
        }
    }, {
        text: 'D组积分',
        y: '35%',
        textStyle: {
            fontSize: 12
        }
    }, {
        text: 'E组积分',
        x: '35%',
        y: '35%',
        textStyle: {
            fontSize: 12
        }
    }, {
        text: 'F组积分',
        x: '70%',
        y: '35%',
        textStyle: {
            fontSize: 12
        }
    }, {
        text: 'G组积分',
        y: '65%',
        textStyle: {
            fontSize: 12
        }
    }, {
        text: 'H组积分',
        x: '35%',
        y: '65%',
        textStyle: {
            fontSize: 12
        }
    },*/ 
    {
        text: '净胜球',
        x: '76%',
        y: '76%',
        textStyle: {
            fontSize: 12
        }
    }],
    

    ////grid开始/////
    grid: [{
        x: '2%',
        y: '14%',
        width: '20%',
        height: '15%',
        containLabel: true,
    }, { //b
        x: '34%',
        y: '14%',
        width: '20%',
        height: '15%',
        containLabel: true,
    }, { //c
        x: '68%',
        y: '14%',
        width: '20%',
        height: '15%',
        containLabel: true,
    }, { //d
        x: '2%',
        y: '40%',
        width: '20%',
        height: '15%',
        containLabel: true,
    }, { //e
        x: '34%',
        y: '40%',
        width: '20%',
        height: '15%',
        containLabel: true,
    }, { //f
        x: '68%',
        y: '40%',
        width: '20%',
        height: '15%',
        containLabel: true,
    }, { //g
        x: '2%',
        y: '70%',
        width: '20%',
        height: '15%',
        containLabel: true,
    }, {
        x: '34%',
        y: '70%',
        width: '20%',
        height: '15%',
        containLabel: true,
    }],

    ////xAxis开始/////
    xAxis: [{
        splitNumber: 4,
        splitLine: {
            show: false
        },
    }, {
        gridIndex: 1,
        splitNumber: 4,
        splitLine: {
            show: false
        },
    }, {
        gridIndex: 2,
        splitNumber: 4,
        splitLine: {
            show: false
        },
    }, {
        gridIndex: 3,
        splitNumber: 4,
        splitLine: {
            show: false
        },
    }, {
        gridIndex: 4,
        splitNumber: 4,
        splitLine: {
            show: false
        },
    }, {
        gridIndex: 5,
        splitNumber: 4,
        splitLine: {
            show: false
        },
    }, {
        gridIndex: 6,
        splitNumber: 4,
        splitLine: {
            show: false
        },
    }, {
        gridIndex: 7,
        splitNumber: 4,
        splitLine: {
            show: false
        },
    }],

    ////yAxis开始/////
    yAxis: [{
        name: 'A组积分',
        axisLabel: {
            interval: 0,
            color: '#00C5CD',
        },
        data: yData[0].reverse(),
    }, { //b
        name: 'B组积分',
        gridIndex: 1,
        axisLabel: {
            interval: 0,
            color: '#00C5CD',
        },
        data: yData[1].reverse(),
    }, { //c
        name: 'C组积分',
        gridIndex: 2,
        axisLabel: {
            interval: 0,
            color: '#00C5CD',
        },
        data: yData[2].reverse(),
    }, { //d
        name: 'D组积分',
        gridIndex: 3,
        axisLabel: {
            interval: 0,
            color: '#00C5CD',
        },
        data: yData[3].reverse(),
    }, { //e
        name: 'E组积分',
        gridIndex: 4,
        axisLabel: {
            interval: 0,
            color: '#00C5CD',
        },
        data: yData[4].reverse(),
    }, { //f
        name: 'F组积分',
        gridIndex: 5,
        axisLabel: {
            interval: 0,
            color: '#00C5CD',
        },
        data: yData[5].reverse(),
    }, { //g
        name: 'G组积分',
        gridIndex: 6,
        axisLabel: {
            interval: 0,
            color: '#00C5CD',
        },
        data: yData[6].reverse(),
    }, { //h
        name: 'H组积分',
        gridIndex: 7,
        axisLabel: {
            interval: 0,
            color: '#00C5CD',
        },
        data: yData[7].reverse(),
    }],

    tooltip: {
        formatter: function(parmes) {
            return parmes.name + ":" + parmes.value;
        }
    },
    legend: {
        data: zu,
        selected: legenddData
    },


    series: [
        ///////graph开始///////////
        {
            color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
            type: 'graph',
            layout: 'circular',
            symbol: 'circle',
            symbolSize: 8,

            left: '70%',
            top: '68%',
            width: '18%',
            height: '18%',


            circular: {
                rotateLabel: true
            },

            label: {
                show: true,
                position: "top",
                verticalAlign: 'middle',
                formatter: function(parmes) {
                    return parmes.name + ":" + parmes.value;
                }
            },
            categories: cData,
            data: graphDatas,
            //links:linkData

        },

        /////////bar开始/////////////
        { //a
            name: 'A组',
            type: 'bar',
            data: xData[0].reverse(),
            label: {
                show: true,
                position: 'right',
                align: 'left',
            },

        }, { //b
            name: 'B组',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: xData[1].reverse(),
            label: {
                show: true,
                position: 'right',
                align: 'left',
            },

        }, { //c
            name: 'C组',
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: xData[2].reverse(),
            label: {
                show: true,
                position: 'right',
                align: 'left',
            },

        }, { //d
            name: 'D组',
            type: 'bar',
            xAxisIndex: 3,
            yAxisIndex: 3,
            data: xData[3].reverse(),
            label: {
                show: true,
                position: 'right',
                align: 'left',
            },

        }, { //e
            name: 'E组',
            type: 'bar',
            xAxisIndex: 4,
            yAxisIndex: 4,
            data: xData[4].reverse(),
            label: {
                show: true,
                position: 'right',
                align: 'left',
            },
        }, { //f
            name: 'F组',
            type: 'bar',
            xAxisIndex: 5,
            yAxisIndex: 5,
            data: xData[5].reverse(),
            label: {
                show: true,
                position: 'right',
                align: 'left',
            },

        }, { //g
            name: 'G组',
            type: 'bar',
            xAxisIndex: 6,
            yAxisIndex: 6,
            data: xData[6].reverse(),
            label: {
                show: true,
                position: 'right',
                align: 'left',
            },

        }, { //h
            name: 'H组',
            type: 'bar',
            xAxisIndex: 7,
            yAxisIndex: 7,
            data: xData[7].reverse(),
            label: {
                show: true,
                position: 'right',
                align: 'left',
            }
        }
    ]
};