let border = 'data:image/png;base64,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'
option = {
    backgroundColor:'#000',
    graphic:{
         elements: [{
                type: 'image',
                z: 3,
                style: {
                    image: border,
                    width: 280,
                    height: 280
                },
                left: 'center',
                top: 'center',
            },
        ]
    },
        
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 10
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold',
                    formatter:(p)=>{
                        console.log(p)
                        let dom = `<div backgroundColor="red">1</div>`
                        return p.name + '\n' + p.value
                    }
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 1048, name: '搜索引擎'},
                {value: 735, name: '直接访问'},
                {value: 580, name: '邮件营销'},
                {value: 484, name: '联盟广告'},
                {value: 300, name: '视频广告'}
            ]
        }
    ]
};