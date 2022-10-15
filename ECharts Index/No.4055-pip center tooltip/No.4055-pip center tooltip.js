option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '汇总数据']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: false,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
            ]
        },
         {
            name: '汇总数据',
            type: 'pie',
            radius: ['0%', '30%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
                show: true,
                position: 'center',
                verticalAlign: 'bottom',
                formatter: `{a}:{c}`,
                lineHeight: 30,
                color: '#30323b',
                fontSize: 14,
                fontWeight: 'lighter',
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 2021, name: '汇总数据'}
            ],
            itemStyle: {
                color: 'rgba(255, 0, 0, 0)'
            }
        }
    ]
};