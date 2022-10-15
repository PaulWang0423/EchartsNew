var labelData = [];
var labelData1 = [];
var valueData=80;
for (var i = 0; i < 150; ++i) {
    labelData.push({
        value: 1,
        name: i,
        itemStyle: {
            normal: {
                color: '#251f45',
            }
        }
    });
}
for (var i = 0; i < labelData.length; ++i) {
    if (labelData[i].name < valueData) {
        labelData[i].itemStyle = {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [{
                            offset: 0,
                            color: '#0ff'
                        },
                        {
                            offset: 1,
                            color: '#5467df'
                        }
                    ]
                )
            },

        }
    }
}
/*for (var i = 0; i < 150; ++i) {
    labelData1.push({
        value: 1,
        name: i,
        itemStyle: {
            normal: {
                color: 'rgba(0,209,228,0)',
            }
        }
    });
}
for (var i = 0; i < labelData1.length; ++i) {
    if (labelData1[i].name < 0) {
        labelData1[i].itemStyle = {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [{
                            offset: 0,
                            color: '#251f45'
                        },
                        {
                            offset: 1,
                            color: '#251f45'
                        }
                    ]
                )
            },

        }
    }
}*/
option = {
    backgroundColor: '#180f2a',
    title: [{
        text: valueData+'%',
        x: '50%',
        y: '37%',
        textAlign: 'center',
        textStyle: {
            fontSize: '70',
            fontWeight: '100',
            color: '#0FF',
            textAlign: 'center',
        },
    }, {
        text: 'DESIGN ELEMENTS',
        left: '50%',
        top: '52%',
        textAlign: 'center',
        textStyle: {
            fontSize: '18',
            fontWeight: '400',
            color: '#8d8793',
            textAlign: 'center',
        },
    }, {
        text: 'DONUT CHART',
        left: '50%',
        top: '57%',
        textAlign: 'center',
        textStyle: {
            fontSize: '14',
            fontWeight: '400',
            color: 'rgba(65,63,112,1)',
            textAlign: 'center',
        },
    }, ],
    polar: {
        radius: ['56%', '52%'],
        center: ['50%', '50%'],
    },
    angleAxis: {
        max: 100,
        show: false,
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
    },
    series: [{
            name: '',
            type: 'bar',
            roundCap: true,
            barWidth: 60,
            showBackground: true,
            backgroundStyle: {
                color: '#2e2856',
            },
            data: [valueData],
            coordinateSystem: 'polar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#585fe1'
                    }, {
                        offset: 1,
                        color: '#0ff'
                    }]),
                }
            }
        },
        {
            hoverAnimation: false,
            type: 'pie',
            z: 2,
            data: labelData,
            radius: ['43%', '50%'],
            zlevel: -2,
            itemStyle: {
                normal: {
                    borderColor: '#180f2a',
                    borderWidth: 2,
                }
            },
            label: {
                normal: {
                    position: 'inside',
                    show: false,
                }
            },
        },
       /* {
            hoverAnimation: false,
            type: 'pie',
            z: 1,
            data: labelData1,
            radius: ['43%', '50%'],
            zlevel: -2,
            itemStyle: {
                normal: {
                    borderColor: '#180f2a',
                    borderWidth: 2,
                }
            },
            label: {
                normal: {
                    position: 'inside',
                    show: false,
                }
            },
        },*/

    ]
};