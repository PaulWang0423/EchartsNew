option = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日', '周一(预测)','周二(预测)','周三(预测)','周四(预测)','周五(预测)','周六(预测)','周日(预测)']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            data:[null, null, null, null, null, null, null, 120, 132, 101, 134, 90, 230, 210],
            
        },
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            data:[null, null, null, null, null, null, null, 120, 132, 101, 134, 90, 230, 210],
            areaStyle: {
            }
        },
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310, null, null, null, null, null, null, null],
        }
    ]
};
