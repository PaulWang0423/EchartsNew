var option = {
    dataset: {
        dimensions: [
            'date', 'custCnt', 'custActiveCnt', 'newCustCnt'
        ],
        source: [{
                custCnt: 663,
                custActiveCnt: 250,
                newCustCnt: 270,
                newCustRemainCnt: 620,
                date: 1561939200000
            },
            {
                custCnt: 184,
                custActiveCnt: 309,
                newCustCnt: 514,
                newCustRemainCnt: 517,
                date: 1562025600000
            },
            {
                custCnt: 377,
                custActiveCnt: 104,
                newCustCnt: 558,
                newCustRemainCnt: 361,
                date: 1562112000000
            },
            {
                custCnt: 445,
                custActiveCnt: 104,
                newCustCnt: 389,
                newCustRemainCnt: 126,
                date: 1562198400000
            },
            {
                custCnt: 571,
                custActiveCnt: 462,
                newCustCnt: 493,
                newCustRemainCnt: 557,
                date: 1562284800000
            },
            {
                custCnt: 688,
                custActiveCnt: 668,
                newCustCnt: 425,
                newCustRemainCnt: 401,
                date: 1562371200000
            },
            {
                custCnt: 347,
                custActiveCnt: 585,
                newCustCnt: 688,
                newCustRemainCnt: 337,
                date: 1562457600000
            }
        ]
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            label: {
                backgroundColor: '#6a7985'
            },
            lineStyle: {
                type: 'dashed'
            }
        },
        formatter: function(params) {
            var date = new Date(params[0].name);
            var res = '<table>'
            res += '<tr><td colspan="2">' + (date.getMonth() + 1) + '-' + date.getDate() + '</td></tr>';
            for (var i = 0; i < params.length; i++) {
                res += '<tr><td>' + params[i].marker + params[i].seriesName;
                switch (i) {
                    case 0:
                        res += ':</td><td>' + params[i].data.custCnt;
                        break;
                    case 1:
                        res += ':</td><td>' + params[i].data.custActiveCnt;
                        break;
                    case 2:
                        res += ':</td><td>' + params[i].data.newCustRemainCnt;
                        break;
                }
                res += '</td></tr>'
            }
            res += '</table>'
            return res
        }
    },
    legend: {
        data: ['????????????', '????????????', '????????????'],
        icon: 'rect', // ???????????????
        itemWidth: 10, // ???????????????
        itemHeight: 10, // ???????????????
        left: 20,
        textStyle: {
            color: ['#80DAFF', '#8CABFF', '#7EFF8E'],
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {

        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            formatter: function(v) {
                var date = new Date(v);
                return (date.getMonth() + 1) +
                    '-' + date.getDate()
            }
        }
    },
    yAxis: {
        type: 'value',
        name: '?????????             ',
        nameRotate: -0.1,
        left: 'left',
        axisLine: { // y???
            show: false,
        },
        nameTextStyle: {
            color: '#476791'
        }
    },
    color: ['#80F4FF', '#8CABFF', '#7EFF8E '],
    series: [{
            name: '????????????',
            type: 'line',
            stack: 'one',
            areaStyle: {},
            symbol: 'circle',
            encode: {
                x: 'date',
                y: 'custCnt'
            },
            lineStyle: {
                normal: {
                    color: '#80F4FF',
                    width: 1
                }
            }
        },
        {
            name: '????????????',
            type: 'line',
            stack: 'one',
            areaStyle: {},
            symbol: 'circle',
            encode: {
                x: 'date',
                y: 'custActiveCnt'
            },
            lineStyle: {
                normal: {
                    color: '#8CABFF',
                    width: 1
                }
            }
        },
        {
            name: '????????????',
            type: 'line',
            stack: 'one',
            areaStyle: {},
            symbol: 'circle',
            encode: {
                x: 'date',
                y: 'newCustCnt'
            },
            lineStyle: {
                normal: {
                    color: '#7EFF8E',
                    width: 1
                }
            }
        }
    ]
};