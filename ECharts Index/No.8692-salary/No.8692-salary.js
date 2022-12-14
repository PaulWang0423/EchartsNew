option = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['到手的钱', '每月扣额', '总计', '直接访问', '搜索引擎']
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
        data: ["9K", "10K", "11K", "12K", "13K", "14K", "15K", "16K", "17K", "18K", "19K", "20K", "21K", "22K", "23K", "24K", "25K", "26K", "27K", "28K", "29K", "30K", "31K", "32K", "33K", "34K", "35K", "36K", "37K", "38K", "39K", "40K", "41K", "42K", "43K", "44K", "45K", "46K", "47K", "48K", "49K", "50K"]
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '到手的钱',
            type: 'line',
             
            data: [9000, 10000, 9350, 10200, 11050, 11900, 12750, 13600, 14450, 15300, 16150, 17000, 16800, 17600, 18400, 19200, 20000, 20800, 21600, 22400, 23200, 24000, 21700, 22400, 23100, 23800, 24500, 25200, 25900, 26600, 27300, 28000, 24600, 25200, 25800, 26400, 27000, 27600, 28200, 28800, 29400, 30000]
        },
        {
            name:'每月扣额',
            type:'line',
    
            data: [0, 0, 1650, 1800, 1950, 2100, 2250, 2400, 2550, 2700, 2850, 3000, 4200, 4400, 4600, 4800, 5000, 5200, 5400, 5600, 5800, 6000, 9300, 9600, 9900, 10200, 10500, 10800, 11100, 11400, 11700, 12000, 16400, 16800, 17200, 17600, 18000, 18400, 18800, 19200, 19600, 20000]
        },
        {  name:'总计',
            type:'bar',
            data:[0, 0, 8250, 9000, 9750, 10500, 11250, 12000, 12750, 13500, 14250, 15000, 21000, 22000, 23000, 24000, 25000, 26000, 27000, 28000, 29000, 30000, 46500, 48000, 49500, 51000, 52500, 54000, 55500, 57000, 58500, 60000, 82000, 84000, 86000, 88000, 90000, 92000, 94000, 96000, 98000, 100000]
        }
        
    ]
};
