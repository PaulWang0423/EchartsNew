option = {
    backgroundColor: '#2c343c',
    title: {
        text: '南丁格尔玫瑰图',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 500,
        max: 600,
        inRange: {
            //colorLightness: [0, 1]
        }
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '50%',
        center: ['50%', '50%'],
        color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5'], //'#FBFE27','rgb(11,228,96)','#FE5050'
        data: [{
                value: 285,
                name: '黑名单查询',
                label: {
                   show:false
                },
                labelLine:{
                    show:false
                }
            },
            {
                value: 410,
                name: '红名单查询',
                 label: {
                    normal: {
                        formatter: ['{c|{c}次}', '{b|{b}}'].join('\n'),
                        rich: {
                            c: {
                                color: 'rgb(241,246,104)',
                                fontSize: 20,
                                fontWeight:'bold',
                                lineHeight: 5
                            },
                            b: {
                                color: 'rgb(98,137,169)',
                                fontSize: 15,
                                height: 40
                            },
                        },
                    }
                },
                 labelLine:{
                    show:false
                }
            },
            {
                value: 274,
                name: '法人行政处罚',
                label: {
                   show:false
                },
                labelLine:{
                    show:false
                }
            },
            {
                value: 235,
                name: '其它查询',
                label: {
                   show:false
                },
                labelLine:{
                    show:false
                }
            }
        ].sort(function(a, b) {
            return a.value - b.value
        }),
        roseType: 'radius',

       
       
        itemStyle: {
            normal: {
                shadowColor: 'rgba(0, 0, 0, 0.8)',
                shadowBlur: 50,
            }
        }
    }]
};