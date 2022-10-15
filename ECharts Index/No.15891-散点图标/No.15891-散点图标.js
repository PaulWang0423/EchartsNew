var geoCoordMap = {
    "海门":[121.15,31.89],
    "鄂尔多斯":[109.781327,39.608266],
    "招远":[120.38,37.35],
    "舟山":[122.207216,29.985295],
    "齐齐哈尔":[123.97,47.33],
    "盐城":[120.13,33.38],
    "赤峰":[118.87,42.28],
    "青岛":[120.33,36.07],
    "乳山":[121.52,36.89],
    "金昌":[102.188043,38.520089],
    "泉州":[118.58,24.93],
    "莱西":[120.53,36.86],
    "日照":[119.46,35.42],
    "胶南":[119.97,35.88],
    "南通":[121.05,32.08],
    "拉萨":[91.11,29.97],
    "云浮":[112.02,22.93],
    "梅州":[116.1,24.55],
    "文登":[122.05,37.2],
    "上海":[121.48,31.22],
    "攀枝花":[101.718637,26.582347],
    "威海":[122.1,37.5],
    "承德":[117.93,40.97],
    "厦门":[118.1,24.46],
    "汕尾":[115.375279,22.786211],
    "潮州":[116.63,23.68],
    "丹东":[124.37,40.13],
    "太仓":[121.1,31.45],
    "曲靖":[103.79,25.51],
    "烟台":[121.39,37.52],
    "福州":[119.3,26.08],
    "瓦房店":[121.979603,39.627114],
    "即墨":[120.45,36.38],
    "抚顺":[123.97,41.97],
    "玉溪":[102.52,24.35],
    "张家口":[114.87,40.82],
    "阳泉":[113.57,37.85],
    "莱州":[119.942327,37.177017],
    "湖州":[120.1,30.86],
    "汕头":[116.69,23.39],
    "昆山":[120.95,31.39],
    "宁波":[121.56,29.86],
    "湛江":[110.359377,21.270708],
    "揭阳":[116.35,23.55],
    "荣成":[122.41,37.16],
    "连云港":[119.16,34.59],
    "葫芦岛":[120.836932,40.711052],
    "常熟":[120.74,31.64],
    "东莞":[113.75,23.04],
    "河源":[114.68,23.73],
    "淮安":[119.15,33.5],
    "泰州":[119.9,32.49],
    "南宁":[108.33,22.84],
    "营口":[122.18,40.65],
    "惠州":[114.4,23.09],
    "江阴":[120.26,31.91],
    "蓬莱":[120.75,37.8],
    "韶关":[113.62,24.84],
    "嘉峪关":[98.289152,39.77313],
    "广州":[113.23,23.16],
    "延安":[109.47,36.6],
    "太原":[112.53,37.87],
    "清远":[113.01,23.7],
    "中山":[113.38,22.52],
    "昆明":[102.73,25.04],
    "寿光":[118.73,36.86],
    "盘锦":[122.070714,41.119997],
    "长治":[113.08,36.18],
    "深圳":[114.07,22.62],
    "珠海":[113.52,22.3],
    "宿迁":[118.3,33.96],
    "咸阳":[108.72,34.36],
    "铜川":[109.11,35.09],
    "平度":[119.97,36.77],
    "佛山":[113.11,23.05],
    "海口":[110.35,20.02],
    "江门":[113.06,22.61],
    "章丘":[117.53,36.72],
    "肇庆":[112.44,23.05],
    "大连":[121.62,38.92],
    "临汾":[111.5,36.08],
    "吴江":[120.63,31.16],
    "石嘴山":[106.39,39.04],
    "沈阳":[123.38,41.8],
    "苏州":[120.62,31.32],
    "茂名":[110.88,21.68],
    "嘉兴":[120.76,30.77],
    "长春":[125.35,43.88],
    "胶州":[120.03336,36.264622],
    "银川":[106.27,38.47],
    "张家港":[120.555821,31.875428],
    "三门峡":[111.19,34.76],
    "锦州":[121.15,41.13],
    "南昌":[115.89,28.68],
    "柳州":[109.4,24.33],
    "三亚":[109.511909,18.252847],
    "自贡":[104.778442,29.33903],
    "吉林":[126.57,43.87],
    "阳江":[111.95,21.85],
    "泸州":[105.39,28.91],
    "西宁":[101.74,36.56],
    "宜宾":[104.56,29.77],
    "呼和浩特":[111.65,40.82],
    "成都":[104.06,30.67],
    "大同":[113.3,40.12],
    "镇江":[119.44,32.2],
    "桂林":[110.28,25.29],
    "张家界":[110.479191,29.117096],
    "宜兴":[119.82,31.36],
    "北海":[109.12,21.49],
    "西安":[108.95,34.27],
    "金坛":[119.56,31.74],
    "东营":[118.49,37.46],
    "牡丹江":[129.58,44.6],
    "遵义":[106.9,27.7],
    "绍兴":[120.58,30.01],
    "扬州":[119.42,32.39],
    "常州":[119.95,31.79],
    "潍坊":[119.1,36.62],
    "重庆":[106.54,29.59],
    "台州":[121.420757,28.656386],
    "南京":[118.78,32.04],
    "滨州":[118.03,37.36],
    "贵阳":[106.71,26.57],
    "无锡":[120.29,31.59],
    "本溪":[123.73,41.3],
    "克拉玛依":[84.77,45.59],
    "渭南":[109.5,34.52],
    "马鞍山":[118.48,31.56],
    "宝鸡":[107.15,34.38],
    "焦作":[113.21,35.24],
    "句容":[119.16,31.95],
    "北京":[116.46,39.92],
    "徐州":[117.2,34.26],
    "衡水":[115.72,37.72],
    "包头":[110,40.58],
    "绵阳":[104.73,31.48],
    "乌鲁木齐":[87.68,43.77],
    "枣庄":[117.57,34.86],
    "杭州":[120.19,30.26],
    "淄博":[118.05,36.78],
    "鞍山":[122.85,41.12],
    "溧阳":[119.48,31.43],
    "库尔勒":[86.06,41.68],
    "安阳":[114.35,36.1],
    "开封":[114.35,34.79],
    "济南":[117,36.65],
    "德阳":[104.37,31.13],
    "温州":[120.65,28.01],
    "九江":[115.97,29.71],
    "邯郸":[114.47,36.6],
    "临安":[119.72,30.23],
    "兰州":[103.73,36.03],
    "沧州":[116.83,38.33],
    "临沂":[118.35,35.05],
    "南充":[106.110698,30.837793],
    "天津":[117.2,39.13],
    "富阳":[119.95,30.07],
    "泰安":[117.13,36.18],
    "诸暨":[120.23,29.71],
    "郑州":[113.65,34.76],
    "哈尔滨":[126.63,45.75],
    "聊城":[115.97,36.45],
    "芜湖":[118.38,31.33],
    "唐山":[118.02,39.63],
    "平顶山":[113.29,33.75],
    "邢台":[114.48,37.05],
    "德州":[116.29,37.45],
    "济宁":[116.59,35.38],
    "荆州":[112.239741,30.335165],
    "宜昌":[111.3,30.7],
    "义乌":[120.06,29.32],
    "丽水":[119.92,28.45],
    "洛阳":[112.44,34.7],
    "秦皇岛":[119.57,39.95],
    "株洲":[113.16,27.83],
    "石家庄":[114.48,38.03],
    "莱芜":[117.67,36.19],
    "常德":[111.69,29.05],
    "保定":[115.48,38.85],
    "湘潭":[112.91,27.87],
    "金华":[119.64,29.12],
    "岳阳":[113.09,29.37],
    "长沙":[113,28.21],
    "衢州":[118.88,28.97],
    "廊坊":[116.7,39.53],
    "菏泽":[115.480656,35.23375],
    "合肥":[117.27,31.86],
    "武汉":[114.31,30.52],
    "大庆":[125.03,46.58]
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                symbol:data[i].symbol,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

option = {

    title: {
        text: '全国主要城市空气质量',
        subtext: 'data from PM25.in',
        sublink: 'http://www.pm25.in',
        x:'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return params.name + ' : ' + params.value[2];
        }
    },
    legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:['pm2.5'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
           
                borderColor: '#111'
            },
            emphasis: {
                areaColor: 'yellow'
            }
        }
    },
    series: [
        {
            name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData([
                {name: "海门", symbol:'diamond',value: 9},
                {name: "鄂尔多斯",symbol:'path://M428.268 512.04c0-45.965 37.261-83.227 83.226-83.227 45.963 0 83.225 37.261 83.225 83.227 0 45.963-37.262 83.226-83.225 83.226C465.528 595.266 428.268 558.003 428.268 512.04L428.268 512.04zM802.782 187.954 639.986 354.621c-28.924-23.979-64.623-39.785-103.656-44.947L536.33 63.76c-281.934 0-349.032 157.098-349.032 157.098l163.98 160c-25.593 30.43-42.474 68.387-46.989 109.893L63.106 490.751c0 282.043 157.203 349.031 157.203 349.031L380.955 675.05c30.645 24.194 68.064 39.893 109.14 43.656l0 241.721c282.043 0 349.032-157.097 349.032-157.097L671.601 639.781c22.58-29.032 37.742-64.301 42.042-102.902L959.88 536.879C959.88 255.051 802.782 187.954 802.782 187.954zM511.493 636.877c-68.818 0-124.839-55.914-124.839-124.73 0-68.817 56.021-124.729 124.839-124.729 68.816 0 124.729 56.021 124.729 124.729C636.223 580.963 580.31 636.877 511.493 636.877zM716.762 578.705 745.9 578.705l0 90.322-29.139 0L716.761 578.705zM770.416 567.093l32.904 0 0 113.441-32.904 0L770.416 567.093zM833.75 552.362l42.58 0 0 142.902-42.58 0L833.75 552.362zM905.685 547.846l43.766 0 0 152.043-43.766 0L905.685 547.846zM351.708 718.814l90.216 0 0 29.354-90.216 0L351.708 718.814zM340.095 772.577l113.333 0 0 32.796L340.095 805.373 340.095 772.577zM325.364 835.803l142.903 0 0 42.581L325.364 878.384 325.364 835.803zM320.847 907.736l152.044 0 0 43.872L320.847 951.608 320.847 907.736zM271.922 354.942l29.142 0 0 90.215-29.142 0 0-90.214L271.922 354.942zM214.612 343.331l32.903 0 0 113.333-32.903 0L214.612 343.331 214.612 343.331zM141.6 328.707l42.581 0 0 142.795L141.6 471.502 141.6 328.707zM68.482 324.083l43.764 0 0 151.935L68.482 476.018 68.482 324.083zM584.719 283.76l90.214 0 0 29.139-90.214 0L584.719 283.76zM573.106 226.447l113.333 0 0 32.904L573.106 259.351 573.106 226.447 573.106 226.447zM558.374 153.437l142.902 0 0 42.581L558.374 196.018 558.374 153.437 558.374 153.437zM553.858 80.32l152.044 0 0 43.871L553.858 124.191 553.858 80.32 553.858 80.32z', value: 12},
                {name: "舟山",symbol:'diamond', value: 12},
                {name: "齐齐哈尔",symbol:'diamond', value: 14},
           
                {name: "赤峰",symbol:'path://M512 219.375c-161.353 0-292.625 131.273-292.625 292.625s131.273 292.625 292.625 292.625 292.625-131.273 292.625-292.625-131.273-292.625-292.625-292.625zM512 773.822c-144.373 0-261.822-117.451-261.822-261.822s117.451-261.822 261.822-261.822 261.822 117.451 261.822 261.822-117.451 261.822-261.822 261.822zM512 188.572c8.506 0 15.402-6.889 15.402-15.402v-123.211c0-8.513-6.896-15.402-15.402-15.402s-15.402 6.889-15.402 15.402v123.211c0 8.513 6.896 15.402 15.402 15.402zM512 835.428c-8.506 0-15.402 6.889-15.402 15.402v123.211c0 8.513 6.896 15.402 15.402 15.402s15.402-6.889 15.402-15.402v-123.211c0-8.513-6.896-15.402-15.402-15.402zM261.518 283.296c3.008 3.008 6.948 4.512 10.89 4.512 3.94 0 7.881-1.504 10.89-4.512 6.016-6.016 6.016-15.763 0-21.778l-87.121-87.129c-6.016-6.016-15.763-6.016-21.778 0-6.016 6.016-6.016 15.763 0 21.778l87.121 87.129zM762.475 740.689c-6.016-6.016-15.763-6.016-21.778 0-6.016 6.016-6.016 15.763 0 21.778l87.121 87.129c3.008 3.008 6.948 4.512 10.89 4.512 3.94 0 7.881-1.504 10.89-4.512 6.016-6.016 6.016-15.763 0-21.778l-87.121-87.129zM188.572 512c0-8.513-6.896-15.402-15.402-15.402h-123.211c-8.506 0-15.402 6.889-15.402 15.402s6.896 15.402 15.402 15.402h123.211c8.506 0 15.402-6.889 15.402-15.402zM974.039 496.598h-123.211c-8.506 0-15.402 6.889-15.402 15.402s6.896 15.402 15.402 15.402h123.211c8.506 0 15.402-6.889 15.402-15.402s-6.896-15.402-15.402-15.402zM261.518 740.689l-87.121 87.129c-6.016 6.016-6.016 15.763 0 21.778 3.008 3.008 6.948 4.512 10.89 4.512s7.881-1.504 10.89-4.512l87.121-87.129c6.016-6.016 6.016-15.763 0-21.778-6.016-6.016-15.762-6.016-21.778 0zM751.586 287.808c3.94 0 7.881-1.504 10.89-4.512l87.121-87.129c6.016-6.016 6.016-15.763 0-21.778-6.016-6.016-15.763-6.016-21.778 0l-87.121 87.129c-6.016 6.016-6.016 15.763 0 21.778 3.007 3.008 6.948 4.512 10.89 4.512z',value: 16},
                {name: "青岛",symbol:'pin',value: 18}
              
            ]),
            
            symbolSize: 50,
            label: {
                normal: {
                    show: true,
                    formatter: '{b}'
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        }
    ]
}