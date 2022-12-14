option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: "axis",
        padding: [8, 10],
        backgroundColor: 'rgba(0,0,0,0.5)',
        axisPointer: {
            type: "shadow",
            textStyle: {
                color: "#fff"
            }
        }
    },
    legend: {
        data: ['新开会员', '激活会员', '关闭会员'],
        align: 'left',
        right: 0,
        textStyle: {
            color: "#333",
            fontSize: 14,
            fontWeight: 200
        },
        itemWidth: 14,
        itemHeight: 14,
        itemGap: 35
    },
    grid: {
        left: '0',
        right: '0',
        bottom: '8%',
        top: '15%',
        containLabel: true
    },
    label: {
        show: true,
        position: 'top',
        color: '#333',
        fontSize: 14,
        fontWeight: 700
    },
    xAxis: [{
        type: 'category',
        offset: 10,
        data: ['团队1', '团队2', '团队3', '团队4'],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#333",
                fontSize: 16,
                fontWeight: 200
            }
        },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        name: '新开会员',
        type: 'bar',
        data: [20, 34, 18, 14, 16],
        barWidth: 22, //柱子宽度
        barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color: '#0071c8',
                opacity: 1,
            }
        }
    }, {
        name: '激活会员',
        type: 'bar',
        data: [10, 24, 5, 24, 16],
        barWidth: 22,
        barGap: 1,
        itemStyle: {
            normal: {
                color: '#fdc508',
                opacity: 1,
            }
        }
    }, {
        name: '关闭会员',
        type: 'bar',
        data: [7, 24, 18, 20, 6],
        barWidth: 22,
        barGap: 1,
        itemStyle: {
            normal: {
                color: '#dfeafc',
                opacity: 1,
            }
        }
    }]
};