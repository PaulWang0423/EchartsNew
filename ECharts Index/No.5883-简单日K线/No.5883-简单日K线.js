var xDatas = ['2013/1/24', '2013/1/25', '2013/1/28', '2013/1/29', '2013/1/30', '2013/1/31', '2013/2/1']
var sDatas = [
    // [开盘值, 收盘值, 最低值, 最高值]
    [2320.26, 2320.26, 2287.3, 2362.94],
    [2300, 2291.3, 2288.26, 2308.38],
    [2295.35, 2346.5, 2295.35, 2346.92],
    [2347.22, 2358.98, 2337.35, 2363.8],
    [2360.75, 2382.48, 2347.89, 2383.76],
    [2383.43, 2385.42, 2371.23, 2391.82],
    [2377.41, 2419.02, 2369.57, 2421.15],
];
var stickColor = ['#4CAF50', '#FF3344'];

var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false,
            axisPointer: {
                lineStyle: {
                    type: 'solid',
                    color: '#b2b5c1'
                }
            }
        },
        textStyle: {
            fontSize: '.24rem'
        },
        hideDelay: 0,
        padding: 5,
        formatter: function(params) {
            console.log(params)
            var time = params[0].name;
            var kd = params[0].data;
            var rate = (kd[2] - kd[1]) / kd[1] * 100;
            rate = rate > 0 ? ('+' + rate.toFixed(2)) : rate.toFixed(2);
            var html = `${time}<br>开：${kd[1]} <br>高：${kd[4]}<br>收：${kd[2]} <br>低：${kd[3]}<br><span class='rate'>涨跌：${rate}%</span><br>`
            return html;
        }.bind(this)
    },
    grid: {
        left: '5%',
        right: '1%',
        bottom: '5%',
    },
    legend: {
        icon: 'roundRect',
        orient: 'horizontal',
        top: '2%',
        right: '15%',
        itemWidth: 35,
        itemHeight: 9,
        itemGap: 100,
        // textStyle: {
        //     color: '#FFFFFF'
        // }
    },
    xAxis: [{
        type: 'category',
        data: xDatas,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false, //不显示刻度
        },
        boundaryGap: true,
        splitLine: {
            show: true,
            width: 0.05,
            lineStyle: {
                type: "solid",
                color: "#4B90BD"
            }
        },
        axisPointer: { //轴指示器
            type: 'shadow',
            z: 1,
            shadowStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(18,155,249,0)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(18,155,249,1)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowBlur: 5
            }
        },

    }],
    yAxis: [{
        type: 'value',
        scale: true,
        axisLabel: {
            show: true,
        },

        splitLine: {
            show: false,

        },
        axisTick: {
            show: false, //不显示刻度
        },
        axisLine: {
            show: false,
        },
        nameTextStyle: {
            color: "#FFFFFF"
        },
        splitArea: {
            show: false
        }
    }],
    dataZoom: [{
        type: 'inside',
        startValue: xDatas.length > 45 ? xDatas.length - 45 : 0,
        endValue: xDatas.length - 1
    }],
    series: [{
        name: '日k线',
        type: 'candlestick',
        data: sDatas,
        itemStyle: {
            normal: {
                color: stickColor[1],
                color0: stickColor[0],
                borderColor: stickColor[1],
                borderColor0: stickColor[0]
            }
        }
    }]
};