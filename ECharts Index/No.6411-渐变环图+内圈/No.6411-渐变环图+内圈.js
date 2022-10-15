option = {
    backgroundColor: '#000000',
    title: {
        text: '39%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#fff',
            fontSize: '90'
        }
    },
    color: ['rgba(255,255,255,.1)'],
    series: [{
        type: 'pie',
        radius: ['0', '50%'],
        center: ['50%', '50%'],
        hoverAnimation: false,
        z: 0,
        itemStyle: {
            normal: {
                color: 'rgba(171,34,50,.1)',
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
        },
        label: {
            normal: {
                position: "center",

            }
        },
        data: [100],
    }, {
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['55%', '66%'],
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
            value: 39,
            name: '01',
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#FF5367' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#AB2232' // 100% 处的颜色
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
            value: 61
        }]
    }]
}