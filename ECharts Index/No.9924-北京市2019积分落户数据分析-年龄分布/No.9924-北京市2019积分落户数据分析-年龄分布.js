option = {
    title: {
        text: '北京市2019积分落户数据分析-年龄分布',
        subtext: '数据来自2019年积分落户公示名单',
        x: 'center',
        align: 'right'
    },
     tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    xAxis: {
        data: ["1959", "1960", "1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987"]
    },
    yAxis: {},
    series: [{
        type: 'line',
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        areaStyle: {
            normal: {}
        },
        data: ["1", "1", "1", "2", "2", "6", "9", "5", "3", "8", "8", "12", "3", "274", "393", "516", "631", "735", "743", "791", "660", "476", "361", "235", "93", "29", "7", "1", "1"]
    }]
};