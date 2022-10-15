var TmpData = (function(){
    var data = [];
    Date.prototype.getHM = function (format) {
        return this.getHours()+":"+this.getMinutes();
    }
    var date=new Date(); 
    for(var i=1;i<21;i++){
        var tmp = {};
        date.setMinutes(date.getMinutes()+1);
        tmp['time'] = date.getHM();
        tmp['client'] = Math.floor(Math.random()*20)+30;//30~50个
        tmp['fair'] =  Math.floor(tmp['client']*(Math.random()/10));//不大于10%
        tmp['good'] = Math.floor((tmp['client']-tmp['fair'])*(Math.random()/3));//剩余部分不大于1/3
        tmp['best'] = tmp['client']-tmp['good']-tmp['fair'];//剩下的
        data.push(tmp);
    }
    return data;
})();


var xData = function() {
    var data = [];
    for (var i = 1; i < TmpData.length; i++) {
        data.push(TmpData[i]['time']);
    }
    return data;
}();

var clientData = function() {
    var data = [];
    for (var i = 1; i < TmpData.length; i++) {
        data.push(TmpData[i]['client']);
    }
    return data;
}();

var bestData = function() {
    var data = [];
    for (var i = 1; i < TmpData.length; i++) {
        data.push(TmpData[i]['best']);
    }
    return data;
}();

var goodData = function() {
    var data = [];
    for (var i = 1; i < TmpData.length; i++) {
        data.push(TmpData[i]['good']);
    }
    return data;
}();

var fairData = function() {
    var data = [];
    for (var i = 1; i < TmpData.length; i++) {
        data.push(TmpData[i]['fair']);
    }
    return data;
}();

option = {
    //backgroundColor: "#344b58",
    "title": {
        "text": "终端数量",
        x: "4%",

        textStyle: {
            color: '#446699',
            fontSize: '14'
        }
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
    toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
    "grid": {
        "borderWidth": 0,
        "top": '25%',
        "bottom": '15%',
        textStyle: {
            color: "#fff"
        }
    },
    "legend": {
        x: '30%',
        //top: '2%',
        textStyle: {
            color: '#90979c',
        },
        "data": ['Best', 'Good', 'Fair', '总数']
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
    
    "series": [{
            "name": "Best",
            "type": "bar",
            "stack": "总数",
            "barMaxWidth": 25,
            "barGap": "20%",
            "itemStyle": {
                "normal": {
                    "color": "#1F77B4",
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
            "data": bestData,
        },{
            "name": "Good",
            "type": "bar",
            "stack": "总数",
            "itemStyle": {
                "normal": {
                    "color": "#FF7F0E",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": goodData
        }, {
            "name": "Fair",
            "type": "bar",
            "stack": "总数",
            "itemStyle": {
                "normal": {
                    "color": "#2CA02C",
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
            "data": fairData
        },{
            "name": "总数",
            "type": "line",
            "stack": "总数",
            symbolSize:8,
            symbol:'circle',
            "itemStyle": {
                "normal": {
                    "color": "#6ca7e2",
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
            "data": clientData
        },
    ]
}