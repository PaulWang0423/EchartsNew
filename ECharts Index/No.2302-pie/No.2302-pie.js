let colorList = ['#547CFF', '#23C3FF', '#7BE09A', '#FFDE4C', '#FF7C92', '#A96FFF'];
let dataArr = [
    {
        name: '数字经济',
        value: 0,
        color: 'blue',
    },
    {
        name: '智能经济',
        value: 0,
        color: 'lBlue',
    },
    {
        name: '绿色经济',
        value: 0,
        color: 'green',
    },
    {
        name: '创意经济',
        value: 0,
        color: 'yellow',
    },
    {
        name: '流量经济',
        value: 0,
        color: 'pink',
    },
    {
        name: '共享经济',
        value: 0,
        color: 'purple',
    },
];
option = {
    title: {
        text: '{a|' + '20000' + '}\n{c|' + '注册企业总数' + '}',
        x: '16%',
        y: '38%',
        textStyle: {
            rich: {
                a: {
                    fontSize: 26,
                    color: '#23C3FF',
                    padding: [5, 10],
                },
                c: {
                    fontSize: 16,
                    color: '#EEEEEE',
                    padding: [5, 5],
                },
            },
        },
    },
    tooltip: {
        trigger: 'item',
    },
    legend: {
        icon: 'none',
        right: '10%',
        top: 'center',
        orient: 'vertical',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            lineHeight: 20,
            color: '#fff',
        },
          tooltip: {
            show: true,
        },
        data: ['数字经济', '智能经济', '绿色经济', '创意经济', '流量经济', '共享经济'],
        formatter: function (name) {
            let _arr = '';
            for (var i = 0; i < dataArr.length; i++) {
                if (dataArr[i].name == name) {
                    _arr =
                        ' {title|' +
                        name +
                        ' :' +
                        '}' +
                        ' ' +
                        ' {' +
                        dataArr[i].color +
                        '|' +
                        dataArr[i].value +
                        '%' +
                        '}';
                }
            }
            return _arr;
        },
        textStyle: {
            lineHeight: 20,
            color: '#868f96',
            align: 'left',
            rich: {
                title: {
                    color: '#EEEEEE',
                    fontSize: 14,
                },
                blue: {
                    color: '#547CFF',
                    fontSize: 18,
                },
                lBlue: {
                    color: '#23C3FF',
                    fontSize: 18,
                },
                green: {
                    color: '#7BE09A',
                    fontSize: 18,
                },
                yellow: {
                    color: '#FFDE4C',
                    fontSize: 18,
                },
                pink: {
                    color: '#FF7C92',
                    fontSize: 18,
                },
                purple: {
                    color: '#A96FFF',
                    fontSize: 18,
                },
            },
        },
    },
    series: [
        {
            type: 'pie',
            center: ['30%', '50%'],
            radius: ['35%', '40%'],
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 15,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex];
                    },
                },
            },
            label: {
                show: false,
            },
            data: dataArr,
        },
        {
            type: 'pie',
            center: ['30%', '50%'],
            radius: ['55%', '65%'],
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 15,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return colorList[params.dataIndex];
                    },
                },
            },
            label: {
                show: false,
            },
            data: dataArr,
        },
    ],
};
