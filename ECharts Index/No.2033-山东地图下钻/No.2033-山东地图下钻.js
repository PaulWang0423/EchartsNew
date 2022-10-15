var uploadedDataURL = '/asset/get/s/data-1630393536588-VjFEPRwC-.json';
var nameMap = '山东省';
//各地市的地图json文件
var citys = {
    '济南市': '/asset/get/s/data-1482909799572-Hkgu_yWSg.json',
    '青岛市': '/asset/get/s/data-1482909909703-SyCA_JbSg.json',
    '烟台市': '/asset/get/s/data-1482909841923-rkqqdyZSe.json',
    '潍坊市': '/asset/get/s/data-1482909836074-rJV9O1-Hg.json',
    '菏泽市': '/asset/get/s/data-1482909832739-rJ-cdy-Hx.json',
    '黑龙江': '/asset/get/s/data-1482909803892-Hy4__J-Sx.json',
    '日照市': '/asset/get/s/data-1482909823260-HkDtOJZBx.json',
    '威海市': '/asset/get/s/data-1482909960637-rkZMYkZBx.json',
    '枣庄市': '/asset/get/s/data-1482909768458-HJlU_yWBe.json',
    '临沂市': '/asset/get/s/data-1478782908884-B1H6yezWe.json',
    '滨州市': '/asset/get/s/data-1482909827542-r12YOJWHe.json',
    '东营市': '/asset/get/s/data-1482909892121-BJ3auk-Se.json',
    '淄博市': '/asset/get/s/data-1482909807135-SJPudkWre.json',
    '泰安市': '/asset/get/s/data-1482909813213-Hy6u_kbrl.json',
    '聊城市': '/asset/get/s/data-1482909818685-H17FOkZSl.json',
    '济宁市': '/asset/get/s/data-1482909784051-BJgwuy-Sl.json',
    '德州市': '/asset/get/s/data-1482909787648-SyEPuJbSg.json',
};

//各省份的数据
var allData = [
    { name: '济南市', value: 396 },
    { name: '青岛市', value: 66 },
    { name: '烟台市', value: 222 },
    { name: '潍坊市', value: 688 },
    { name: '菏泽市', value: 75 },
    { name: '日照市', value: 121 },
    { name: '威海市', value: 91 },
    { name: '枣庄市', value: 479 },
    { name: '临沂市', value: 34 },
    { name: '滨州市', value: 631 },
    { name: '东营市', value: 1203 },
    { name: '淄博市', value: 988 },
    { name: '泰安市', value: 693 },
    { name: '聊城市', value: 934 },
    { name: '济宁市', value: 748 },
    { name: '德州市', value: 1267 },
];
loadMap('/asset/get/s/data-1630393536588-VjFEPRwC-.json', nameMap); //初始化全省地图

var timeFn = null;

//单击切换到省级地图，当mapCode有值,说明可以切换到下级地图
myChart.on('click', function (params) {
    clearTimeout(timeFn);
    //由于单击事件和双击事件冲突，故单击的响应事件延迟250毫秒执行
    timeFn = setTimeout(function () {
        var name = params.name; //地区name
        var mapCode = citys[name]; //地区的json数据
        if (!mapCode) {
            alert('无此区域地图显示');
            return;
        }
        loadMap(mapCode, name);
    }, 250);
});

// 绑定双击事件，返回全国地图
myChart.on('dblclick', function (params) {
    //当双击事件发生时，清除单击事件，仅响应双击事件
    clearTimeout(timeFn);
    //返回全国地图
   loadMap('/asset/get/s/data-1630393536588-VjFEPRwC-.json', nameMap);
});

/**
 获取对应的json地图数据，然后向echarts注册该区域的地图，最后加载地图信息
 @params {String} mapCode:json数据的地址
 @params {String} name: 地图名称
 */
function loadMap(mapCode, name) {
    $.get(mapCode, function (data) {
        if (data) {
            echarts.registerMap(name, data);
            var option = {
                tooltip: {
                    show: true,
                    formatter: function (params) {
                        if (params.data) return params.name + '：' + params.data['value'];
                    },
                },
                series: [
                    {
                        name: 'MAP',
                        type: 'map',
                        mapType: name,
                        selectedMode: 'false', //是否允许选中多个区域
                        label: {
                            normal: {
                                show: true,
                            },
                            emphasis: {
                                show: true,
                            },
                        },
                        data: allData,
                    },
                ],
            };
            myChart.setOption(option);
        } else {
            alert('无法加载该地图');
        }
    });
}
