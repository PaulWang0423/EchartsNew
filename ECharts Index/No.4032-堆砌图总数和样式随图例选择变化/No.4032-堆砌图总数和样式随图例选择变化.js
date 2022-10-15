var getname = ['学前教育', '学前教育（公费师范）', '小学教育（公费师范）', '小学教育', '教育学', '公共事业管理', '公共事业管理（公共与非盈利管理）'];
var getvaluenum = [1, 20, 25, 0, 0, 0, 0, 5, 22, 32, 26, 41, 0, 0, 21, 0, 24, 25, 30, 15, 28, 20, 0, 23, 44, 24, 20, 37, 0, 0, 1, 1, 0, 1, 0];
var getxlmc = ['2020级', '2019级', '2018级', '2017级', '2016级'];

var getxlmcnum=getvaluenum.length/getname.length;

var getvalue = [];
for (let i = 0; i < getxlmcnum; i++) {
  getvalue[i] = [];
  for (let j = 0; j < getname.length; j++) {
        getvalue[i][j] = getvaluenum[i*getname.length+j];

  }
}

var color1 = ['#63B4FF', '#FFD19A', '#64F0BC', '#BDBCFF', '#FFA387','#63B4FF', '#FFD19A', '#64F0BC', '#BDBCFF', '#FFA387'];
var color2 = ['#1890FF', '#FFD283', '#47D095', '#9C9BFF', '#FF6388','#1890FF', '#FFD283', '#47D095', '#9C9BFF', '#FF6388'];
var getvaluesum=[];
for(var i=0;i<getname.length;i++){
    getvaluesum[i] =0
    for(var j=0;j<getxlmcnum;j++){
    	getvaluesum[i] += getvalue[j][i];
    }
}

var maxnum = Math.max.apply(null, getvaluesum);
var maxlen = Math.pow(10, String(Math.ceil(maxnum)).length - 2);
if (maxnum >= 5) {
    var max = Math.ceil(maxnum / (.95 * maxlen)) * maxlen;
} else {
    var max = 5;
}

var series = [];
for (var i = 0; i < getxlmc.length; i++) {
    series.push({
        name: getxlmc[i],
        type: 'bar',
        data: getvalue[i],
        stack: '各专业本科生年级分布',
        barWidth: '20px',
        itemStyle: {
            normal: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: color1[i] // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: color2[i] // 100% 处的颜色
                    }],
                },
                barBorderRadius: [0, 0, 0, 0],
                label: {
                    show: false,
                    position: 'top',
                    textStyle: {
                        fontSize: 12,
                        color: '#666666',
                    },
                }
            }
        },
    })
}

option = {
    grid: {
        top: '33',
        right: '15',
        left: '50',
        bottom: '55'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        backgroundColor: 'rgba(21, 64, 92, 0.9)',
        formatter: function(params) {
            var str = ''; //声明一个变量用来存储数据
            str += '<div>' + params[0].name + '</div>';
            for (var i = 0; i < getxlmcnum; i++) {
                if (params[i]) {
                    if (params[i].value > 0) {
                        str += '<span style="color:rgba(0, 255, 252, 1);font:16px bold;">' + params[i].seriesName + '</span>本科生人数&nbsp;&nbsp;<span style="color:rgba(0, 255, 252, 1);">' + params[i].value + '人</span></br>';
                    }
                }
            }
            return str;
        }
    },
    legend: {
        type: "scroll",
        right: '10',
        top: '0',
        data: getxlmc,
        itemGap: 25,
        itemWidth: 16,
        itemHeight: 16,
        textStyle: {
            fontSize: '13',
            color: '#666666',
        },

    },
    xAxis: [{
        data: getname,
        axisLabel: {
            interval: 0,  
            formatter: function(value) {
                var ret = ""; //拼接加\n返回的类目项  
                var maxLength = 8; //每项显示文字个数  
                var valLength = value.length; //X轴类目项的文字个数  
                var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
                if (rowN > 1) //如果类目项的文字大于5,
                {
                    for (var i = 0; i < rowN; i++) {
                        var temp = ""; //每次截取的字符串  
                        var start = i * maxLength; //开始截取的位置  
                        var end = start + maxLength; //结束截取的位置  
                        //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
                        temp = value.substring(start, end) + "\n";
                        ret += temp; //凭借最终的字符串  
                    }
                    return ret;
                } else {
                    return value;
                }
            },
            margin: 10,
            color: '#666666',
            textStyle: {
                fontSize: 13,
                fontWeight:400
            },
        },
        axisLine: {
            lineStyle: {
                color: '#B0C5DB',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        min: 0,
        max: max, // 计算最大值
        interval: max / 5, //  平均分为5份
        splitNumber: 5,
        name: '单位：人',
        nameTextStyle: {
            color: '#999999',
            fontSize: 13,
            padding: [0, 0, 0, 65]
        },
        axisLabel: {
            color: '#666666',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#CCDBEB',
                type: 'dashed',
                opacity: 0.5
            }
        }
    }],
    series: series
};

var series = option["series"];
var fun = function(params) {
    var datavalue = 0;
    for (var i = 0; i < series.length; i++) {
        datavalue += series[i].data[params.dataIndex]
    }
    return datavalue;
}

if (series[series.length - 1]) {
   series[series.length - 1]["itemStyle"]["normal"]["label"]["show"] = true;
   series[series.length - 1]["itemStyle"]["normal"]["label"]["formatter"] = fun;
   series[series.length - 1]["itemStyle"]["normal"]["barBorderRadius"] = [3, 3, 0, 0];
}
myChart.on("legendselectchanged", function(object) {

    var b = object.selected, //图例的选中情况，key是图例的name，value是true或false
        d = []; //选中的series的index列表
    for (var key in b) {
        if (b[key]) { //选中的图例
            for (var i = 0; i < series.length; i++) {
                var changename = series[i]["name"];
                if (changename == key) {
                    d.push(i); //选中的series的index列表
                }
            }
        }
    }

    var fn = function(params) {
        var datavalue = 0;
        for (var i = 0; i < d.length; i++) {
            for (var j = 0; j < series.length; j++) {
                if (d[i] == j) {
                    datavalue += series[j].data[params.dataIndex];
                }
            }
        }

        return datavalue;
    }

    for (var j = 0; j < series.length; j++) {
        series[j]["itemStyle"]["normal"]["label"]["show"] = false;
        series[j]["itemStyle"]["normal"]["barBorderRadius"] = [0, 0, 0, 0];
    }

    var l_s = series[d[d.length - 1]]; //选中的series的最后一个
    if (l_s != null && l_s != "" && l_s != undefined) {
        l_s["itemStyle"]["normal"]["label"]["show"] = true; //显示label
        l_s["itemStyle"]["normal"]["label"]["formatter"] = fn; //绑定formatter
        l_s["itemStyle"]["normal"]["barBorderRadius"] = [3, 3, 0, 0];
    }
    myChart.setOption(option)
})
