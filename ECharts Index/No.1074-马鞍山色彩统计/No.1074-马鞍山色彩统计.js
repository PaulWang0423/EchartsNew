let bgColor = '#fff';
let title = '总量';
let color =['#c065e7','#765deb','#3862d8','#6a89E2','#219CF9','#6efbbf','#40c057','#ffd351','#ff8e43','#f56b6d'];
let echartData = [{
        name: "A类",
        value: "3720"
    },
    {
        name: "B类",
        value: "2920"
    },
    {
        name: "C类",
        value: "2200"
    },
    {
        name: "D类",
        value: "1420"
    },
    {
        name: "E类",
        value: "3200"
    },
    {
        name: "F类",
        value: "2420"
    },
    {
        name: "G类",
        value: "2200"
    },
    {
        name: "H类",
        value: "1420"
    },
    {
        name: "I类",
        value: "3200"
    },
    {
        name: "J类",
        value: "2420"
    }
];

let formatNumber = function(num) {
    let reg = /(?=(\B)(\d{3})+$)/g;
    return num.toString().replace(reg, ',');
}
let total = echartData.reduce((a, b) => {
    return a + b.value * 1
}, 0);

option = {
    backgroundColor: bgColor,
    color: color,
    tooltip: {
        trigger: 'item'
    },
    title: [{
        text: '{name|' + title + '}\n{val|' + formatNumber(total) + '}',
        top: 'center',
        left: 'center',
        textStyle: {
            rich: {
                name: {
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: '#000',
                    padding: [10, 0]
                },
                val: {
                    fontSize: 32,
                    fontWeight: 'bolder',
                    color: '#000',
                }
            }
        }
    },{
        text: '单位：个',
        top: 20,
        left: 20,
        textStyle: {
            fontSize: 14,
            color:'#666666',
            fontWeight: 400
        },
        show: false
    }],
    series: [{
        type: 'pie',
        roseType: 'radius',
        radius: ['25%', '60%'],
        center: ['50%', '50%'],
        data: echartData,
        hoverAnimation: false,
        itemStyle: {
            normal: {
                borderColor: bgColor,
                borderWidth: 2
            }
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 120,
                lineStyle: {
                    // color: '#e6e6e6'
                }
            }
        },
        label: {
            normal: {
                formatter: params => {
                    return (
                        '{icon|●}{name|' + params.name + '}\n{value|' +
                        formatNumber(params.value) + '}'
                    );
                },
                // padding: [0 , -100, 25, -100],
                rich: {
                    icon: {
                        fontSize: 16,
                        color: 'inherit'
                    },
                    name: {
                        fontSize: 18,
                        padding: [0, 0, 0, 10],
                        color: '#000'
                    },
                    value: {
                        fontSize: 14,
                        fontWeight: 'bolder',
                        padding: [10, 0, 0, 20],
                        color: 'inherit'
                        // color: '#333333'
                    }
                }
            }
        },
    }]
};

