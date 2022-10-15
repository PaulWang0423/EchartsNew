data = [{
        name: 'user1',
        value: 10,
    },
    {
        name: '46545132',
        value: 20,
    },
    {
        name: 'user3',
        value: 64,
    },
    {
        name: 'user4',
        value: 44,
    }
];
getArrByKey = (data, k) => {
    let key = k || "value";
    let res = [];
    if (data) {
        data.forEach(function(t) {
            res.push(t[key]);
        });
    }
    return res;
};
getSymbolData = (data) => {
    let arr = [];
    for (var i = 0; i < data.length; i++) {
        arr.push({
            value: data[i].value,
            symbolPosition: 'end'
        })
    }
    return arr;
}
// console.log(getSymbolData(data));
option = {
    backgroundColor: '#000000',
    grid: {
        top: '2%',
        bottom: -15,
        right: 100,
        left: 50,
        containLabel: true
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        triggerEvent: true,
        show: true,
        inverse: true,
        data: getArrByKey(data, 'name'),
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        
        axisLabel: {
            show: true,
            interval: 0,
            color: '#fff',
            align: 'left',
            margin: 60,
            formatter: function(value, index) {
                return '{title|' + value + '}'
            },
            rich: {
                title: {
                    width: 50,
                    align:'right',
                    fontSize:18
                }
            }
        },
    }, {
        triggerEvent: true,
        show: true,
        inverse: true,
        data: getArrByKey(data, 'name'),
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            shadowOffsetX: '-20px',
            color: ['#fff'],
            align: 'left',
            verticalAlign: 'center',
            lineHeight: 40,
            fontSize: 18,
            formatter: function(value, index) {
                return data[index].value+'吨'
            },
            
        }
    }],
    series: [{
        name: 'XXX',
        type: 'pictorialBar',
        symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==',
        symbolSize: [50, 50],
        symbolOffset: [20, 0],
        z: 12,
        itemStyle: {
            normal: {
                color: '#fff'
            }
        },
        data: getSymbolData(data)
    }, {
        name: '条',
        type: 'bar',
        showBackground: true,
        // barBorderRadius: 30,
        yAxisIndex: 0,
        data: data,
        barWidth: 10,
        // align: left,
        itemStyle: {
            normal: {
                color: "rgba(41, 162, 245, 1)",
                // barBorderRadius: 10
            },
            // color: '#A71A2B',
            // barBorderRadius: 4,
        },
        // label: {
        //     normal: {
        //         color: '#fff',
        //         show: true,
        //         position: ["-80px", 0],
        //         textStyle: {
        //             fontSize: 16
        //         },
        //         formatter: function(a, b) {
        //             return a.name
        //         }
        //     }
        // }
    }]
};