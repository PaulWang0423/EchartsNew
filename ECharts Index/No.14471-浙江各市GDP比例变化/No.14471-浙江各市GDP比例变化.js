option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['杭州市','嘉兴市','金华市','宁波市','绍兴市','温州市']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: [2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016]
    },
    series: [
        {
            name: '杭州市',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [2092,2515,2918.61,3440.99,4103.89,4781.16,5098.66,5945.82,7011.8,7803.98,8343.52,9201.16,10053.58,11050.49]
        },
        {
            name: '嘉兴市',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [823.54,1002.41,1158.38,1345.18,1586,1819.78,1919.78,2315.46,2703.9,2914.4,3163.05,3352.6,3517.81,3760.12]
        },
        {
            name: '金华市',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [756.3033,925.5855,1066.7,1240.8,1474.35,1693.0788,1777.8219,2114.5027,2463.6409,2721.3428,2973.5669,3208.203,3402.34,3684.9362]
        },
        {
            name: '宁波市',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [2158.04,2446.4,2864.5,3433.1,3964.1,4214.6,5125.8,6010.48,6524.7,6524.7,7100,7602.51,8011.49,8541.11]
        },
        {
            name: '绍兴市',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [1088.39,1313.87,1440.48,1677.65,1972.05,2222.95,2375.78,2795.2,3332,3654.03,3967.29,4265.88,4465.97,4710.19]
        },

        {
            name: '温州市',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [1220.3,1402.57,1600.17,1834.38,2157,2424.29,2527.88,2925.27,3350.87,3650.06,4003.86,4302.81,4619.84,5045.4]
        }
    ]
};