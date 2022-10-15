var uploadedDataURL = "/asset/get/s/data-1583493052309-plTj5wGE.xlsx";

option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['互联网',
        '其它',
        '传统媒体',
        '政府',
        '大型企业',
        '金融',
        '央企',
'资讯',
'阅读',
'电商',
'视频',
'其它2',
'自媒体',
'社区',
'平台',
'直播',
'综合',
'工具',
'科技',
'其它1',
'政府',
'报业',
'广电系',
'制造业',
'保险',
'银行',
'建筑',
'运营商']
    },
    series: [
        {
            name: '一级行业',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                position: 'inner'
            },
            labelLine: {
                show: false
            },
            data: [
{value: 145, name: '互联网', selected: true},
{value: 14, name: '其它'},
{value: 5, name: '传统媒体'},
{value: 5, name: '政府'},
{value: 4, name: '大型企业'},
{value: 3, name: '金融'},
{value: 2, name: '央企'},
            ]
        },
        {
            name: '二级行业',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {
                    a: {
                        color: '#999',
                        lineHeight: 22,
                        align: 'center'
                    },
                    // abg: {
                    //     backgroundColor: '#333',
                    //     width: '100%',
                    //     align: 'right',
                    //     height: 22,
                    //     borderRadius: [4, 4, 0, 0]
                    // },
                    hr: {
                        borderColor: '#aaa',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                    },
                    b: {
                        fontSize: 16,
                        lineHeight: 33
                    },
                    per: {
                        color: '#eee',
                        backgroundColor: '#334455',
                        padding: [2, 4],
                        borderRadius: 2
                    }
                }
            },
            data: [
{value: 34, name: '资讯'},
{value: 24, name: '阅读'},
{value: 21, name: '电商'},
{value: 15, name: '视频'},
{value: 12, name: '其它2'},
{value: 12, name: '自媒体'},
{value: 7, name: '社区'},
{value: 6, name: '平台'},
{value: 6, name: '直播'},
{value: 6, name: '综合'},
{value: 1, name: '工具'},
{value: 1, name: '科技'},
{value: 14, name: '其它1'},
{value: 4, name: '报业'},
{value: 1, name: '广电系'},
{value: 5, name: '政府'},
{value: 4, name: '制造业'},
{value: 2, name: '保险'},
{value: 1, name: '银行'},
{value: 1, name: '建筑'},
{value: 1, name: '运营商'}

            ]
        }
    ]
};