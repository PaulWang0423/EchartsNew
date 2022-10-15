//各省份的数据
var allData = [
    { name: '北京', value: 11.481 },
    { name: '天津', value: 15.4 },
    { name: '河北', value: 10 },
    { name: '山西', value: 12.353 },
    { name: '内蒙古', value: 7.833 },
    { name: '安徽', value: 9.952 },
    { name: '上海', value: 8.652 },
    { name: '江苏', value: 8 },
    { name: '浙江', value: 7.406 },
    { name: '江西', value: 8.889 },
    { name: '福建', value: 13.857 },
    { name: '山东', value: 8.286 },
    { name: '河南', value: 11.25 },
    { name: '湖北', value: 6.867 },
    { name: '湖南', value: 11.933 },
    { name: '广东', value: 7.84 },
    { name: '广西', value: 10.444 },
    { name: '海南', value: 4 },
    { name: '陕西', value: 8.714 },
    { name: '甘肃', value: 10 },
    { name: '宁夏', value: 8 },
    { name: '青海', value: 11.6 },
    { name: '新疆', value: 9.308 },
    { name: '黑龙江', value: 11.5 },
    { name: '吉林', value: 10.111 },
    { name: '辽宁', value: 9 },
    { name: '云南', value: 11.692 },
    { name: '重庆', value: 12.556 },
    { name: '四川', value: 9.522 },
    { name: '西藏', value: 2.5 },
    { name: '贵州', value: 9.143 },
]

loadMap('/asset/get/s/data-1527045631990-r1dZ0IM1X.json', 'china');//初始化全国地图

var timeFn = null;


/**
 获取对应的json地图数据，然后向echarts注册该区域的地图，最后加载地图信息
 @params {String} mapCode:json数据的地址
 @params {String} name: 地图名称
 */
function loadMap(mapCode, name) {
    $.get(mapCode, function(data) {
        if (data) {
            echarts.registerMap(name, data);
            var option = {
                tooltip: {
                    show: true,
                    formatter: function(params) {
                        if (params.data) return params.name + '：' + params.data['value']
                    },
                },
                visualMap: {
                    min: 0,
                    max: 1000,
                    left: 26,
                    bottom: 40,
                    showLabel: true,
                    pieces: [{
                        gt: 28,
                        label: "高质量",
                        color: "#b7d6f3"
                        // color: "#215096"
                    }, {
                        gt: 18,
                        lte: 28,
                        label: "中质量",
                        color: "#3598c1"
                        // color: "#FDE102"
                    }, {
                        gte: 13,
                        lte: 18,
                        label: "中低质量",
                        color: "#b7d6f3"
                        // color: "#2EFF88"
                    }, {
                        gt: 0,
                        lt: 13,
                        label: "低质量",
                        // color: "#6100FF"
                        color: "#edfbfb"
                    }],
                    show: true
                    
                    // color: ['#edfbfb', '#b7d6f3', '#40a9ed', '#3598c1', '#215096', ]
                },
                series: [{
                    name: 'MAP',
                    type: 'map',
                    mapType: name,
                    data: allData,
                    selectedMode: 'false',//是否允许选中多个区域
                    label: {
                        normal: {
                            show: true,
                            formatter:function(val){
                                var area_content = ''
                                if (val && val.name && val.value) {
                                    area_content = '{a|' + val.name + '}' + '\n' + '{b|' + val.value + '}'
                                }
                                return area_content
                                // return area_content.split("-").join("\n");
                            },//让series 中的文字进行换行
                            rich: {
                                a: {
                                },
                                b: {
                                    fontFamily: 'Microsoft YaHei',
                                    fontSize: 14,
                                    width: 16,
                                    height: 16,
                                    textAlign: 'center',
                                    padding: 4,
                                }
                            },//富文本样式,就是上面的formatter中'{a|'和'{b|'
                        },
                        emphasis: {show: false}
                    },//地图中文字内容及样式控制
                    
                }]
            };
            myChart.setOption(option);
        } else {
            alert('无法加载该地图');
        }
    });
}