var val1data2 = [{
        value: 0.2,
        name: '装配完成率',
    },
    {
        value: 0.3,
        name: '班检完成率',
    },
    {
        value: 0.4,
        name: '初检完成率',
    },
    {
        value: 0.3,
        name: '复检完成率',
    },
    {
        value: 0.1,
        name: '出厂检完成率',
    },
]

var arr = ['middleLost', 0.6, val1data2, '今日完成进度']

option = {
    title: {
        top: '45%',
        left: 'center',
        text: arr[3],
        textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 14
        },
        subtext: '(占所有数据的的' + (arr[1] * 10000 / 100).toFixed(2) + '%)',
        subtextStyle: {
            color: '#fff',
            fontSize: 12
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function(res) {
            console.log(res)

            if (res.componentSubType == 'liquidFill') {
                return res.seriesName + ': ' + (res.value * 10000 / 100).toFixed(2) + '%';
            } else {
                return '<span class="ii" style="background:' + res.color + ' "></span>' + res.name + ':<br/> ' + res.data.value;
            }
        }
    },
    series: [{
            type: 'liquidFill',
            itemStyle: {
                normal: {
                    opacity: 0.4,
                    shadowBlur: 0,
                    shadowColor: 'blue'
                }
            },
            name: arr[3],
            data: [{
                value: 0.6,
                itemStyle: {
                    normal: {
                        color: '#53d5ff',
                        opacity: 0.6
                    }
                }
            }],
          //  background: '#fff',
            color: ['#53d5ff'],
            center: ['50%', '50%'],
          /*  backgroundStyle: {
                color: '#fff'
            },*/
            label: {
                normal: {
                    formatter: '',
                    textStyle: {
                        fontSize: 12
                    }
                }
            },
            outline: {
                itemStyle: {
                    borderColor: '#86c5ff',
                    borderWidth: 0
                },
                borderDistance: 0
            }
        },
        {
            type: 'pie',
            radius: ['42%', '50%'],
                 color: ['#c487ee', '#deb140','#49dff0', '#034079', '#6f81da', '#00ffb4'],
            hoverAnimation: false, ////设置饼图默认的展开样式
            label: {
                show: true,
                
                normal: {
                      formatter: '{b}\n{d}%',
                    show: true,
                    position: ''
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },

            itemStyle: { // 此配置
                normal: {
                    borderWidth: 2,
                    borderColor: '#fff',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 2,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            data: arr[2]
        }
    ]
}