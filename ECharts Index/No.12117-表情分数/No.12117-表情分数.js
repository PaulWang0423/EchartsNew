var tired = "/asset/get/s/data-1550221226037-OEkhRWdrX.png";

var nervous = "/asset/get/s/data-1550221231717-vA2WrVY1J.png";

var happy = "/asset/get/s/data-1550221238026-CukpWkqgR.png";

var excited = "/asset/get/s/data-1550221244668-fX43F9XBT.png";

var clam = "/asset/get/s/data-1550221249202-iSOFh0PCt.png";


var baifenbi = [1.0, 0.833, 0.966, 0.897, 0.915];
this.$yData = ['Excited', 'Happy', 'Clam', 'Nervous', 'Tired'].reverse();
option = {
    backgroundColor: '#2c1344',
    xAxis: [{
        show: false,
    }, ],
    grid: {
        left: '150px',
        right: '56px',
        bottom: '30%',
        top: '30%',
    },
    yAxis: {
        type: 'category',
        axisLabel: {
            show: true,
            interval: 0,
            color: '#FFFFFF',
            fontSize: 15,
            fontFamily: 'ArialMT',
            margin: 85,
            textStyle: {
                align: 'left',
            },
            formatter: function(value) {
                return '{' + value + '| }{value|' + ' ' + value + '}';
            },
            rich: {
                Excited: {
                    height: 24,
                    align: 'right',
                    backgroundColor: {
                        image: excited,
                    },
                },
                Happy: {
                    height: 24,
                    align: 'right',
                    backgroundColor: {
                        image: happy,
                    },
                },
                Clam: {

                    height: 24,
                    align: 'right',
                    backgroundColor: {
                        image: clam,
                    },
                },
                Nervous: {

                    height: 24,
                    align: 'right',
                    backgroundColor: {
                        image: nervous,
                    },
                },
                Tired: {
                    height: 24,
                    align: 'right',
                    backgroundColor: {
                        image: tired,
                    },
                },
            },
        },
        axisTick: {
            show: false, // ??????Y?????????
        },
        axisLine: {
            show: false, // ??????Y?????????
        },
        data: this.$yData,
    },
    series: [
        // ??????--------------------??????????????????------------------------------//
        {
            show: true,
            type: 'bar',
            // barGap: '-100%',
            barWidth: '18px', // ???????????????
            itemStyle: {
                normal: {
                    barBorderRadius: 20, // ???????????????
                    // color: {
                    //     colorStops: [{
                    //             offset: 0,
                    //             color: '#0A8BFE', // 0% ????????????
                    //         },
                    //         {
                    //             offset: 1,
                    //             color: '#40A8F6', // 100% ????????????
                    //         },
                    //     ],
                    //     globalCoord: false, // ????????? false
                    // },
                    color: function(params) {
                        var colorList = ['#EE9201', '#EFE42A', '#64BD3D', '#29AAE3', '#B74AE5', '#0AAF9F', '#E89589', '#16A085', '#4A235A', '#C39BD3 ', '#F9E79F', '#BA4A00', '#ECF0F1', '#EAF2F8', '#4A235A', '#3498DB'];
                        return colorList[params.dataIndex]
                    }
                },
            },
            label: {
                normal: {
                    show: false,
                },
            },
            labelLine: {
                show: false,
            },
            data: baifenbi,
        },
    ],
};