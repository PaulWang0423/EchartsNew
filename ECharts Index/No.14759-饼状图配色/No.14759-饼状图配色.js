app.title = '嵌套环形图';

option = {
    color: ['#1E90FF', '#87CEFA', '#00FFFF', '#FFA500', '#EEC900','#E9967A','#FF00FF', '#7D26CD'],
    backgroundColor: 'rgb(5,13,2)',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
    },
    series: [
        {
            name:'访问量',
            type:'pie',
            roseType : 'area',
            radius: ['20%', '50%'],
            label: {
                normal: {
                    formatter: ' {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: 'rgb(5,13,2)',
                    borderColor: '#00FFFF',
                    borderWidth: 1,
                    borderRadius: 4,
                    shadowBlur:3,
                    shadowOffsetX: 2,
                    shadowOffsetY: 2,
                    shadowColor: '#00FFFF',
                    padding: [0, 2],
                    rich: {
                        hr: {
                            borderColor: '#00FFFF',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 8,
                            lineHeight: 26
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 10
                }
            },
            data:[
                {value:335, name:'直达'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1048, name:'百度'},
                {value:251, name:'谷歌'},
                {value:147, name:'必应'},
                {value:102, name:'其他'}
            ]
        }
    ]
};