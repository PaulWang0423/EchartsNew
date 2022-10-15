option = {
    title: {
        text: '贪腐金额之最（单位：万元）',
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['贪腐金额']
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'value',
        boundaryGap: [0, 0.01]
    }],
    yAxis: [{
        type: 'category',
        data: ['武长顺','白恩培','朱明国','韩先聪','张越','王保安','卢子跃','景春华','金道铭','奚晓明','万庆良','毛小兵','刘志庚','申维辰','杜善学','谭力','潘逸阳','杨振超','王阳','龚清概','聂春玉','谷春立','郭永祥','艾宝俊','周本顺','李春城','白雪山','孙鸿志','刘铁男','蒋洁敏','杨栋梁','仇和','郭有明','赵黎平','杨鲁豫','盖如垠','姚木根','陈铁新','秦玉海','冀文林','苏宏章','徐钢','斯鑫良','吕锡文','乐大克','王敏','白云','韩学键','杨卫泽','陆武成','沈培平','令政策','杨刚', '阳宝华','廖少华','栗智','倪发科','徐建一','谭栖伟','季建业','李崇禧','李达球','王素毅','隋凤富','余远辉','祝作利','陈安众','何家成','李成云','梁滨','陈柏槐','张力军','陈川平']
    }],
    series: [{
            name: '贪腐金额',
            type: 'bar',
            data: [52700,24700,23200,22235,15700,15428,15000,14700,12300,11400,11125,10480,9817,9542,8900,8625,8601,8200,6291,5352,4458,4365,4347,4320,4002,3979,3887,3579,3558,2881,2849,2443,2379,2368,2328,2303,2300,2195,2086,2046,1996,1977,1955,1879,1873,1805,1782,1686,1643,1626,1615,1600,1379,1356,1324,1319,1296,1219,1143,1132,1109,1095,1073,1044,901,854,810,710,636,557,283,242,91]
        },

    ]
};