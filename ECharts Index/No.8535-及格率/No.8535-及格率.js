var value = 20
option = {
    title: {
        text: `${value}分`,
        subtext: '最低分',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#FF0000',
            fontSize: '90'
        },
        subtextStyle: {
            color: '#ff',
            fontSize: 35,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
        },
    },
    backgroundColor: '#ffffff',
    color: ['#FFA07A'],
    legend: {
        show: false,
        itemGap: 12,
        data: []
    },

    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['60%', '66%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false,
        data: [{
            value: value,
            name: '01',
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#FF0000' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#FF0000	' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: '02',
            value: 120 - value
        }]
    }]
}