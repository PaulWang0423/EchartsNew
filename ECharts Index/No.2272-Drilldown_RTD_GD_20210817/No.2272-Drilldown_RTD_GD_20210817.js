var jsonMapData = {
    中国: '/asset/get/s/data-1594956060000-wzSYdj4lt.json',
    上海: '/asset/get/s/data-1594958113307-cxRUVth12.json',
    河北: '/asset/get/s/data-1594957443106-mUbmYqE_T.json',
    山西: '/asset/get/s/data-1594957766868-uxxAlaOQg.json',
    内蒙古: '/asset/get/s/data-1594957676205-3QrKkEs35.json',
    辽宁: '/asset/get/s/data-1594957651717-Gpv1HF9L3.json',
    吉林: '/asset/get/s/data-1594957628423-QcNxuZC4W.json',
    黑龙江: '/asset/get/s/data-1594957464890-ReTKD9z2j.json',
    江苏: '/asset/get/s/data-1594957547861-KHdRNauVp.json',
    浙江: '/asset/get/s/data-1594957975764-hU_4mjjCM.json',
    安徽: '/asset/get/s/data-1594956457905-qkfohCrdY.json',
    福建: '/asset/get/s/data-1594957317412-_IqC6cGfe.json',
    江西: '/asset/get/s/data-1594957574860-XllJ4xelw.json',
    山东: '/asset/get/s/data-1594957742389-8f6xMmJyc.json',
    河南: '/asset/get/s/data-1594957480524-SL6qHJ-Fq.json',
    湖北: '/asset/get/s/data-1594957504930-HOA-bJ-4Z.json',
    湖南: '/asset/get/s/data-1594957530163-LdNpZfmvz.json',
    广东: '/asset/get/s/data-1594957374153-nlVvqecih.json',
    广西: '/asset/get/s/data-1594957389111-PYkaJMOc7.json',
    海南: '/asset/get/s/data-1594957424894-jIDqZ7UZi.json',
    四川: '/asset/get/s/data-1594957804051-2CAptA9LX.json',
    贵州: '/asset/get/s/data-1594957404398-tHnBWFTJS.json',
    云南: '/asset/get/s/data-1594957958466-t8sorr-Eh.json',
    西藏: '/asset/get/s/data-1594957940133-OoVRveNig.json',
    陕西: '/asset/get/s/data-1594957786745-Q7bywuAwG.json',
    甘肃: '/asset/get/s/data-1594957335316-fAoKcplcm.json',
    青海: '/asset/get/s/data-1594957718199-FGvYekca9.json',
    宁夏: '/asset/get/s/data-1594957693688-bKgaSBp5A.json',
    新疆: '/asset/get/s/data-1594957899456-0opYrqO1x.json',
    北京: '/asset/get/s/data-1594956490489-Sr9M4AyTs.json',
    天津: '/asset/get/s/data-1594957840497-nj8mwSNuj.json',
    重庆: '/asset/get/s/data-1594957282133-TKWoEZjqH.json',
    香港: '/asset/get/s/data-1594957863764-lSsoVf8U2.json',
    澳门: '/asset/get/s/data-1594956484374-Els_HG1wo.json',
    台湾: '/asset/get/s/data-1594957826344-_a_9jgYdN.json',
};

// need to revise
var totalData = [
    {
        name: '中国',
        subData: [
            { name: '上海' },
            { name: '河北' },
            { name: '山西' },
            { name: '内蒙古' },
            { name: '辽宁' },
            { name: '吉林' },
            { name: '黑龙江' },
            { name: '江苏' },
            { name: '浙江' },
            { name: '安徽' },
            { name: '福建' },
            { name: '江西' },
            { name: '山东' },
            { name: '河南' },
            { name: '湖北' },
            { name: '湖南' },
            {
                name: '广东',
                subData: [
                    { name: '顺德市', value: 0.743 },
                    { name: '广州市', value: 33.365 },
                    { name: '深圳市', value: 4.346 },
                    { name: '佛山市', value: 25.165 },
                    { name: '东莞市', value: 24.565 },
                    { name: '惠州市', value: 0.114 },
                    { name: '汕头市', value: 2.08 },
                    { name: '中山市', value: 31.412 },
                    { name: '湛江市', value: 1.784 },
                    { name: '茂名市', value: 2.014 },
                    { name: '潮州市', value: 1.269 },
                ],
            },
            { name: '广西' },
            { name: '海南' },
            { name: '四川' },
            { name: '贵州' },
            { name: '云南' },
            { name: '西藏' },
            { name: '陕西' },
            { name: '甘肃' },
            { name: '青海' },
            { name: '宁夏' },
            { name: '新疆' },
            { name: '北京' },
            { name: '天津' },
            { name: '重庆' },
            { name: '香港' },
            { name: '澳门' },
            { name: '台湾' },
        ],
    },
];

function calculateData(dataset) {
    let totalValue = 0;
    for (let data of dataset) {
        if (data.subData) {
            let subValue = calculateData(data.subData);
            if (subValue > 0) {
                data.value = subValue;
            } else {
                data.value = -5;
            }
        }
        if (data.value === undefined) {
            data.value = -5;
        } else if (data.value > 0) {
            totalValue += data.value;
        }
    }
    return totalValue;
}
calculateData(totalData); //计算省value

// //日志里显示各地的value
// function printData(dataset, prefix) {
//     for (let data of dataset) {
//         console.log(`${prefix} name=${data.name}, value=${data.value}`);
//         if (data.subData) {
//             printData(data.subData, prefix + '--');
//         }
//     }
// }
// printData(totalData, '');

function getSeriesData(name, dataset) {
    if (dataset === undefined) {
        dataset = totalData;
    }
    for (let data of dataset) {
        if (name === data.name) {
            if (data.subData) {
                // for (let sub of data.subData) {
                //     console.log(sub.name);
                // }
                return data.subData;
            } else {
                return [];
            }
        } else {
            if (data.subData) {
                subResult = getSeriesData(name, data.subData);
                if (subResult) {
                    return subResult;
                }
            }
        }
    }
    return null;
}

function getsimboldata(mapName, XXX_ARR) {
    //console.log(mapName);
    let final_arr = [];
    for (let arr of XXX_ARR) {
        if (mapName === '中国') {
            final_arr = final_arr.concat(arr.locs);
        } else if (mapName === arr.province) {
            return arr.locs;
        }
    }
    // console.log(final_arr);
    return final_arr;
}

// need to revise
//   按照标记分类导入地址  copy from python
var JD_ARR = [
    {
        province: '广东',
        locs: [
            {
                name:
                    'JD_16794K_广东省广州市增城市新塘镇陈家林凤凰城园区（京东华南第三物流中心）进入园区门口直走第二个路口右转后再左转',
                value: [113.560225, 23.128099, 16793.8],
            },
            {
                name: 'JD_4588K_广东省东莞市大岭山镇第一产业集团东莞大岭山松湖物流园2号楼1层',
                value: [113.842223, 22.899965, 4587.7],
            },
        ],
    },
];
var Others_ARR = [
    {
        province: '广东',
        locs: [
            {
                name: 'Others_75K_广东省广州市增城区新塘镇新塘大道东45号（原奔马实业有限公司）',
                value: [113.630936, 23.113506, 75.3],
            },
            { name: 'Others_12893K_广东省广州市增城区永宁街创立路1号2棟', value: [113.619877, 23.177012, 12893.4] },
            { name: 'Others_0K_广东省广州市黄埔区开发大道1338号', value: [113.514661, 23.112908, 0] },
            { name: 'Others_1098K_广东省东莞市长安镇步步高大道126号乐其仓库', value: [113.78088, 22.778727, 1097.9] },
            { name: 'Others_6671K_广东省佛山市三水区万贞仓储服务公司', value: [112.896668, 23.156065, 6670.8] },
            { name: 'Others_915K_广东省东莞市大岭山镇莞长路大岭山段19号', value: [113.777287, 22.989076, 914.9] },
            { name: 'Others_0K_广东省惠州市惠阳区秋长街道秋宝路新丰家具厂3栋西侧', value: [114.416878, 22.798361, 0] },
            {
                name: 'Others_0K_广东省佛山市三水区工业大道闽川铝业公司对面，复融供应链仓库',
                value: [112.814505, 23.095211, 0],
            },
            {
                name: 'Others_1487K_广东省深圳市宝安区洲石路同和工业园捷安物流配送中心',
                value: [113.875022, 22.667723, 1486.7],
            },
            {
                name: 'Others_0K_广东省东莞市东莞辖区洪梅镇望沙路115号仓库129-132号门 。',
                value: [113.608904, 22.994717, 0],
            },
            { name: 'Others_0K_广东省深圳市光明区粤宝工业区11栋', value: [113.901528, 22.741556, 0] },
            { name: 'Others_1430K_广东省东莞市大岭山镇连平畔山北街恒路物流', value: [113.802957, 22.928483, 1429.5] },
            { name: 'Others_3763K_广东省佛山市三水区万贞仓储服务公司', value: [112.896668, 23.156065, 3762.5] },
            { name: 'Others_0K_广东省汕头市大学路66号通用物流园新四期第三栋', value: [116.665725, 23.386664, 0] },
            {
                name: 'Others_698K_ 广东省东莞市塘厦镇 环市东路421号宏诚基智造产业园一懂二楼 ',
                value: [114.110169, 22.792185, 697.6],
            },
            {
                name: 'Others_2287K_广东省东莞市常平镇京九路318号（龙地东莞景昌园区一楼）响应云仓',
                value: [114.024762, 22.963709, 2287.3],
            },
            {
                name: 'Others_1510K_广东省广州市花都区平步大道13号天天乐工业园3栋1楼',
                value: [113.198984, 23.427929, 1509.6],
            },
            { name: 'Others_6671K_广东省佛山市三水区万贞仓储服务公司', value: [112.896668, 23.156065, 6670.8] },
            { name: 'Others_114K_广东省惠州市惠阳区沙田镇华达技工学校 （MT）', value: [114.55063, 22.866376, 114.4] },
            {
                name: 'Others_1784K_广东省湛江市坡头区官渡工业园C区鸿业路1号（椰湛饮料有限公司）（MT）',
                value: [110.41218, 21.3969, 1783.6],
            },
            {
                name: 'Others_3601K_广东省佛山市顺德区五沙良五路15号顺德农商银行（大良联盛支行）',
                value: [113.235278, 22.848418, 3601],
            },
            {
                name: 'Others_1178K_广东省汕头市金平区鮀浦街道长荣路（金涛玻璃厂隔壁）',
                value: [116.64519, 23.40487, 1177.9],
            },
            {
                name: 'Others_748K_广东省潮州市潮安区东山湖特色产业基地内B2路和B4路交接处普润物流园一期(MT)',
                value: [116.593172, 23.492102, 748.2],
            },
            { name: 'Others_743K_广东省东莞市常平镇漱新村常马路578-580号，，', value: [114.039356, 22.981246, 742.9] },
            {
                name: 'Others_978K_广东省茂名市电白区粤西农批市场东门对面胜大物流\\n',
                value: [110.980912, 21.588065, 977.8],
            },
            {
                name: 'Others_0K_广东省深圳市南山区牛成村牛成路200号（进厂左转30米）',
                value: [113.931034, 22.612808, 0],
            },
            { name: 'Others_0K_广东省惠州市博罗县宇培物流园4号库55-58号门（CX）', value: [114.205831, 23.152564, 0] },
            {
                name: 'Others_698K_广东省东莞市东莞市塘厦镇环市东路421号宏诚基制造产业园一栋二楼',
                value: [114.110169, 22.792185, 697.6],
            },
        ],
    },
];
var XTL_ARR = [
    {
        province: '广东',
        locs: [
            { name: 'XTL_6184K_广东省东莞市洪梅镇望沙路115号仓库', value: [113.608904, 22.994717, 6184] },
            {
                name: 'XTL_902K_广东省汕头市龙湖区泰山北路与万吉南二街交叉路口西侧泰山物流中心G栋',
                value: [116.720095, 23.422682, 901.8],
            },
        ],
    },
];
var SHT_ARR = [
    {
        province: '广东',
        locs: [
            {
                name: 'SHT_377K_广东省佛山市顺德区北滘镇碧桂园正苑对面十荟团佛山仓',
                value: [113.274089, 22.954801, 377.4],
            },
            { name: 'SHT_0K_广东省佛山市顺德区北滘镇碧桂园正门斜对面', value: [113.268029, 22.923338, 0] },
            { name: 'SHT_0K_广东省惠州市博罗县宇培惠州物流园十荟团', value: [114.289496, 23.172899, 0] },
        ],
    },
];
var MTYX_ARR = [
    {
        province: '广东',
        locs: [
            {
                name: 'MTYX_0K_广东省东莞市常平大京九物流园物流大道318号龙地东莞常平物流园 W1二层1,2,3单元',
                value: [114.043894, 22.98004, 0],
            },
            { name: 'MTYX_743K_广东省佛山市顺德市五沙新宇路普洛斯物流园二期', value: [113.352507, 22.808691, 743.4] },
            {
                name: 'MTYX_743K_广东省佛山市南海区狮山红沙工业园区海元仓储区C3库区',
                value: [112.995084, 23.207265, 743.4],
            },
            {
                name: 'MTYX_0K_广东省潮州市潮安区东山湖特色产业基地的普润潮安沙溪物流园（一期）',
                value: [116.593172, 23.492102, 0],
            },
            { name: 'MTYX_0K_广东省湛江市坡头区官渡镇工业园c区鸿业路1号', value: [110.41218, 21.3969, 0] },
            { name: 'MTYX_2859K_广东省深圳市宝安区朝阳路5号', value: [113.869086, 22.806938, 2859.1] },
            { name: 'MTYX_2093K_广东省佛山市南海区狮山海元里水物流园', value: [113.160865, 23.237893, 2092.8] },
        ],
    },
];
var LST_ARR = [
    {
        province: '广东',
        locs: [
            { name: 'LST_0K_广东省中山市小榄镇绩东二大吉祥装饰材料城B栋厂房', value: [113.228241, 22.654881, 0] },
            {
                name: 'LST_30960K_广东省中山市小榄镇绩东二大吉祥装饰材料城A栋厂房',
                value: [113.228241, 22.654881, 30960.4],
            },
            { name: 'LST_452K_广东省中山市东升镇宏昌物流园B区8-3仓库', value: [113.291471, 22.622846, 452.1] },
            {
                name: 'LST_1246K_广东省佛山市顺德区陈村镇国通大道西4号仓库8号2楼准时达仓库（从斜坡上二楼左转就是）',
                value: [113.196227, 22.997675, 1246.1],
            },
            { name: 'LST_521K_广东省潮州市潮安区沙溪镇普润物流园A3仓库', value: [116.58667, 23.532961, 520.6] },
            {
                name: 'LST_1036K_广东省茂名市高新开发区西南片区工业大道华远物流园西南区C库(三赖坡路口)',
                value: [110.941232, 21.552501, 1036.2],
            },
            {
                name: 'LST_1189K_广东省东莞市东莞辖区石排镇赤坎村石崇大道安博物流园内7-1\\/8-1号库',
                value: [113.960811, 23.098122, 1189.1],
            },
            { name: 'LST_0K_广东省中山市神湾港工业园北区', value: [113.36656, 22.297979, 0] },
        ],
    },
];
var FS_ARR = [
    {
        province: '广东',
        locs: [
            {
                name: 'FS_2093K_广东省广州市增城区永宁街沙宁路创业大道161号菜鸟网络园区（6号库一楼）（DG）',
                value: [113.5773, 23.127578, 2092.7],
            },
        ],
    },
];
var SM_ARR = [
    {
        province: '广东',
        locs: [
            { name: 'SM_4735K_广东省东莞市石排镇安博物流园1号库1号门', value: [113.940312, 23.090291, 4734.7] },
            {
                name: 'SM_0K_广东省广州市增城区沙宁路永宁街创业大道161号阿里巴巴物流园3号库2楼5号门',
                value: [113.5773, 23.127578, 0],
            },
            {
                name: 'SM_0K_广东省惠州市惠阳区秋湖路安博物流园4号库50号平台（导航地址：惠阳区凯荣乐器厂）',
                value: [114.41775, 22.78888, 0],
            },
        ],
    },
];
loadMap('中国');

function loadMap(mapName) {
    var seriesData = getSeriesData(mapName);
    var jsonData = jsonMapData[mapName];

    if (jsonData === undefined) {
        // alert("找不到地图数据")
        return;
    }

    myChart.showLoading(); // 显示加载动画
    $.getJSON(jsonData, null, function (data) {
        echarts.registerMap(mapName, data);
        myChart.hideLoading();

        //地图具体样式
        option = {
            backgroundColor: '#FFFFFF', //地图背景色white
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    if (typeof params.value[2] == 'undefined') {
                        return params.name + ' : ' + params.value;
                    } else {
                        return params.name + ' : ' + params.value[2];
                    }
                },
            },
            legend: {
                //各标记图例
                orient: 'horizontal',
                id: 1,
                y: 'top',
                x: 'left',
                itemWidth: 20,
                data: [
                    {
                        name: 'JD',
                        icon:
                            'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAMAAADH72RtAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAmVBMVEXmGRXhFBHcJiPdPDnqcG7rjozqmJfAbWyoNTPiJCHkV1Tuubf27u7U29v2/f7y+/vDyMensrPfnp3hNTLam5rXq6ru8O/Ozs3b4uLdaGbbu7vc3d3Avr2mpqbdQkDgGhbKqqrPaGXfVVLTu7rah4XoGhjczs3gwcHiNzTiGxnkeXbsqafjPzzheHbspqXnZ2ThKynhLCj////y6UypAAAAAWJLR0QyQNJMyAAAAAlwSFlzAAAXEQAAFxEByibzPwAAAAd0SU1FB+UIDRIaMMERDuQAAADDSURBVBjTNY8Bc4IwDIWTTLrRDcEVYQWErbApVKz+/z9nQm99vVwu/e69FCAeZP23xEJ82SXq9Y17gBT56vePbJ8Xh08UEk15rPKq/qqqXAmDaIumbdvudOi6fnMbjt+mzLK27uofZE+goWdnV45j47bBlithUyOhv+wDJBrs39nwY2QYQnLOyTKSRZgSXWiWklIamUX5UhmfOHuFWSBQ07r63q+33syR0cHrhRbnrcaYZe8JBa11eIT4L4KZ99mqbPIERdgM++k4CMQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDgtMTNUMTA6MjY6NDgrMDg6MDAGFyCEAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA4LTEzVDEwOjI2OjQ4KzA4OjAwd0qYOAAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAAxNh2vXm8AAAAWdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAMTeSB650AAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE2Mjg4MjE2MDhXvHSRAAAAEXRFWHRUaHVtYjo6U2l6ZQA5ODZCQnKEyCgAAABGdEVYdFRodW1iOjpVUkkAZmlsZTovLy9hcHAvdG1wL2ltYWdlbGMvaW1ndmlldzJfOV8xNjI2Njc5MDQxNjM1NTI5MF80OV9bMF0+cDvCAAAAAElFTkSuQmCC',
                    },
                    {
                        name: 'FS',
                        icon:
                            'image://data:image/png;base64,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KJ78QlGMMSx97VJNNacAGB0dld7e3gbAngNj48yaOZOLLr5Iw/DY1wxEoi0XYwzGG6sn1lpmz56tixef3zh36NAhk8/nBSCfzzM0NNToW7J0iTanmrHWIghezPyq9ezW3acMVr+nVjz5LkqnMYZ0Ot1wRblcZnR0tHHtSH5E6++y+EFAU3PThOwRhiFz5szhgW88oGvWrOE73/mOXnjR+VqtjO3wJ5NJWlpaGmOMjo5SrUb9pUqJXGG00RePxSQWCyJJ6TPo+aza/qvto0zSpixc/b39vxVfVoY2HNi3d28DgOd5+P5YMo95scaOQi6Xo/fAgQmSwvM8+g738cLG38jiixbr7t27Zc+rneL5kXeNMQwODsr+/fsbNgVB0Mi4RgyeNzZef/8AhXwRL24qiVn+vQe7+tdOhWVapWfw8OBqESluemXzR/f3dC+Z2zEv3tLSQkdHR+OauR1z6zGoW7dsZdNLm0kkElo3VkSwoeW+L93PIw8/yvDQsKoqXo3Kvu/T19fH8y88z/LlywHo6OigubmZXC5HS6qFmW0zUVUtFos8/dTTLl/Od2bmZ+59/5a/eWA6OKZdZ1X1h/OXzn/x1X1735xOZ25rTjVn58+fbwHxPI/58+cjIhQKBVatWsXAwADJZHIijYzB9336+/rxA78BtN7nrOORRx7hxhuu17MXnCOzZ88mm82Sy+XIZrO0t7cjIrKpZ8PBZ37zzDoVffrQ9kNbp4vhpERF90vdPcA3161b9/jVV1/tL1q0CIBUKtXwcl9fHw8++CDACZVOW3sbw8PDWDtRZQWxgPXPreel323m7AXnMHPmTFpbW+nu7iaVStHUFL3e8Uj/18q7Nu4qnoztcBLvLv4+tD+oV3DPgP19bWfA/r62/waJRstkGtfIWQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wOC0xM1QxMToyMToxNCswODowMLYdhmgAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDgtMTNUMTE6MjE6MTQrMDg6MDDHQD7UAAAAIHRFWHRzb2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAXdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADU4nnu2bAAAABZ0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA1ORHTRncAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTYyODgyNDg3NCwLc0UAAAASdEVYdFRodW1iOjpTaXplADQ1MzFCQlpwElcAAABHdEVYdFRodW1iOjpVUkkAZmlsZTovLy9hcHAvdG1wL2ltYWdlbGMvaW1ndmlldzJfOV8xNjI2Njc5MjUzMTAyNjk3Nl8zODBfWzBdGgsPHwAAAABJRU5ErkJggg==',
                    },
                    {
                        name: 'Others',
                        icon:
                            'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAfCAYAAACLSL/LAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH5QgNFRs3QyG8gwAABmFJREFUWMPtmNlvG8cdxz8ze/K+dFDV7VNxEseO4SY9YqdparSN26IJaqAF+tDH/mt9K1C0KNogTtL6SB07kmVLlhTroiRSpCiSWpLLJXenD5Rrq/Ehx0adh36B3afdmc/8ju/srFBKKb6Bki8a4P9gz0v68xpocW0BKSXZzCCWab14sO1amctTH/OvmctIKflWzxDD2TFG+scZ7h8lEop+rXHF47rSaddYbswS19IMhw/tTbyCz+eucmn6I1ZKCyQH4ggBO9U6btUjbqfpz2R5+eBrvDlxBsuwn1/EbixeIifv0JPpoeTkOGAeJ2GnyZfW+WjyL9xamcRpVDFNg6CtiCbDCCXx6ts0VJWc47A9l8fxqrzz6nlCZuj5gCkF1VINr9WiNdDEEWUqMx6zC7cp1zfxfR873I1EvdbArbsIKYmnYhi2jhSCQAVMrX+G57f4yWvvY1vhZ09lu+Nx5c4nLLWmaXR22Kk0qG05ROIhEpkYfidgZ9uhseOilMKwdKywhSYloLBCJrFUhLrTpLnTYjR1hPeOXyBsR/YH1gk61FpbaFInbqYRQvzngVq9wt9v/olb65/D7hKEFFi2iWHpNBwXFQTYtoVmaA9EW6GbOulsgnDUplyoslOu0x8d4fzxC8RCyceD+b6vZvI3uB1cIhFKc9g6wWD4EMpXLGzM8On8X6m65d3Zurd7IRYIdFPHMHUQIKVASoHvK5TqXqZpkMomcB0Xp9ogUIqU3sf5V35DKp5+fI3VGw0Km1t0Bjp4iX+y1liktLbN3dIsUhckMjFQCs/r0PE6uxAS3dSRu2kDsCMWoaiN2/BwHZdABQQoyhsVhCYAgVOpMz93jXHjFb5/+u1Hg0kpOZw9Rrm5SamSYyW/zkx1AQTYto1uaCBAN3WUEEgp0XSB1CQI0WXazXzgB0hNkuqJUZOChuOiaV2PcaoN1r8sMPnJLIlkAvH24zcdHSAVyXD20E8peev88eM/MH/7NolMgkg8TDhqYYZMrLCJpkkM00LK+zX4373TqDXxQz5BoLBDJq1mm+JamaVbOTYWi6T6Eky8fhjd3gcYAkKhEMOhg4xnjnJT+wLXadF0WuiGRihqk8hE6R/pQdMlQaDQDQ2pSXw/IGj790GBdquDEIJyocrqfJ67UyvouoYdMfnhr7/DwHgfntoi31ymzxzuRv+hYA92g6YwbAPLMFECUIpW06O0vg1CkB3JoBndYrdCBpqh06g16ezCaZrErbus3tkgv1Ri6h+zFFa2OPnOMRI9UUqFMrqt4aZd2u0GFXmAIY4S1ZKPBzN0E92QSFMghUQgun0YQGWzhhCK/pFeDEun3eoQ+N0i03UNhSK/VOTuzVUKy0XimTjFXJmm00Q3BROjr3IkMYFTLeOoOn4nT8HPs1xf43sHfkQ0Ens02BvHzqAEXJm7SLNdR5P3vQkFO+UGQmwxMN6HbnZTqRmS+naDL6dXKawUKebKHDoxhmnqvP7uMfp7s/zs7AeceulNwnYEz3epeFtMb19hav46Ld9CHBJ7OB7q/B2/w3o5x8XpP7NUnu/uTQ9KQSQZZmCsF93UWZ5ZY3Uuj9f08H2fRCbG6XPH0U2Jk2vz3eEfczB7dNda7mvLKZIv5ehPDpJJ9O4x9idsSW1uLl/j0sKHOF4VhUJw/2XD1NkqVFm9s45uaETjERCQzsbJjvcRT0dI9iVIGr0clCfos4eRQn5lkYivzi32cxipNSp8eudvLJSm8YIWAhBC0vY6LE2vYkcs3nr/NNuFGrnZAgORUaQuMPsDZCQg2RejnK/xg74PGOk98KTpHl5jD1M8nOS9k79isXCcqysXKdU36CgP6FpGz1AKp1KndyjN8NggB+0TjNoTuF6Tyc3LLK7NsHB9mTPn/P1Mt/+IPahW2+WL3FXmtybZrOQprJQYHBiiLVrEesKksjGiiQjRTg8TxrdJW/3MFW+i2nBk6GV0bX8fzU8Ndk+F2ho3Vi7juwFjqQkW1xdIDNqsNRdRIY9apYZWjPPLN35LJtnz1ON/bTAA3/fRtL12slSZ49L8h1yb/AzXafHzty7w7snz+47UPT3T8W0PFICAsdQRTvWeJSWyoODy7EWm5q8TBMH/DuxROjz6Er87/3vOnfoFQV1QrBSeGuyZUvkktbwW27UykXCYaCi+x0BfKNiz6Bv7i+Df5GPi3ilrRf8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDgtMTNUMTM6Mjc6NTUrMDg6MDD5YkYqAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA4LTEzVDEzOjI3OjU1KzA4OjAwiD/+lgAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAAzMbH9qU4AAAAWdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAMzgwjtFnAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE2Mjg4MzI0NzVKHczbAAAAEnRFWHRUaHVtYjo6U2l6ZQAxNzc2QkL6UFFWAAAARnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vYXBwL3RtcC9pbWFnZWxjL2ltZ3ZpZXcyXzlfMTYyNjY3OTEzMjc5MzQ4MDZfNTBfWzBdZxMBPAAAAABJRU5ErkJggg==',
                    },
                    {
                        name: 'SM',
                        icon:
                            'image://data:image/png;base64,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X3570jEhqdOSPO2NUGlGiQnloB6Ploms4zg4joOu65i6TtyxibsOAc1ghp3HIKlj881hAHXC4TkjRMx18GkGPsPASiZxXRdd19H17l2uG1nbtinIL+Ce8nIONzayavlyVi1dxkc7d/D8Cy/QGAmjeb59l3YSSU7ML6SsbDaF/gALKiqYWz4X1zR4auVKwqEQhqezrztp1rZt+vfrx+tvvM7tv51D/YEDNIda2VVbyyOPPcoLz1cyqG8/fEmHXCm+sfmSDqcNOIHXXnuV+fPnU9/YSHM0gisE9953H+teWUdhYSG23Tl+mpCy/YXmInn6mWcYPnw4NXtqqFpfhen30VCzFyIxxk+YwC0zbsr6x4cEYlactrY2rISVeY6UaLrOwooFjB49mrYjLXy2cxcer5eqV9dx+OBBxowdw5IlS9r/CpBAwOGw5hViIULgSJdTC4o5d+gw5WXXIZpIYBge6vbspeWrBgDK5txBICcH2YWwKyV+3WDqpMnMvecefvnzX6C5MmPBC3i9XDH5VwA01h+m9tNP8Xq91NZ9QWs4DMDYsWMxNU29m4XAgjs1I65VGq78OGElmDZ9BsUD+ndwu0DTBKFQiHhcBSCT8NNIJhJcMWkSDy5axOUTJ5Kwuj+rHSkpKSjG1NQ+lhWnLRxG0zQSto2beoPlmV5GnzAQR0pwnPcMN7lJq4s2HSqRepkutOqaDz8mGY50C5vp9WIcI6k0IYhJh9Vr1rBx7SssXb4c4TUzPoRiyQRpnxseDz6fHyklQoj20Cddl2AshpDuu7qUs+rD4UYNYEtL49ZcwZQN72wsizQ0NaV/XNc0HMfhxJNOok9+AQCtzUFklheoaXj4cMd2biu/i/2H69E1PeOh6sKttLWEACgoLuakwafi2EkCgQCGoZyih9r2bTtUd2PAH7imobW1FuB/+34PCNFeYvEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDgtMTNUMTM6Mzk6MzkrMDg6MDAn6sqqAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA4LTEzVDEzOjM5OjM5KzA4OjAwVrdyFgAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA0MxCyXqUAAAAWdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgANDPoHZ4oAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE2Mjg4MzMxNzn93CV+AAAAEnRFWHRUaHVtYjo6U2l6ZQAyMzYxQkI0t/TYAAAARnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vYXBwL3RtcC9pbWFnZWxjL2ltZ3ZpZXcyXzlfMTYyNjY3OTIyMjUwMDQ4NjBfODNfWzBdxc/OnwAAAABJRU5ErkJggg==',
                    },
                    {
                        name: 'LST',
                        icon:
                            'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAMAAABVlYYBAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAApVBMVEX////2v7zwl47xlo/vn5ndEQDaBgDndmnmUEHdGQD42tn3xsLUFwDQDQDnXk/2y8jdIxDUHxPXJxHqfXLobWDsjIHoko3niH3aNSPyq6ffWlLsh3zso5vxvLjhcWTZPSv87u7jTj3dVEb65uT99vbme2/yt7HhYFPmhnvic2fTLx7keHH77ezaQzTfaF/pjYbniYHXQDHqmZP++/vVLBvbTkL55uXtpH5LAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAAd0SU1FB+UIDRU2KZkE2w8AAADvSURBVBjTVZCLUoMwEEWX6FKDrCXVRFuoQqgtRVtotf7/p7l5OMVDspOcucMmAQBIxA0jArcQSDBNUzcDs2DvEKXEvw8xc/LeyUgu85x8+MFLl5PEMvfhOcoioOTCVUWPACJ9EkJrHtoIbfSzKF7YooOQ3AiwXXIzQqmQW1FB3I1W3K0kxLxa845eswXXt9odorHlHKAtZxXARryLjb+FTeBKm8VFs53YahcX1tu62zts//E5yR6OQ9kNoz117TXbUnjCav/vv9uDOk+tjd2W6gvgfIx29W0vjbWXU88263f+ElAPw2hGY8Yft1sbLr/orBSrIgeVDQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wOC0xM1QxMzo1NDo0MSswODowMAOLzCcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDgtMTNUMTM6NTQ6NDErMDg6MDBy1nSbAAAAIHRFWHRzb2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAXdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADIw3+GomQAAABZ0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAyMVBJWIIAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTYyODgzNDA4MeiK4w0AAAASdEVYdFRodW1iOjpTaXplADEyNDZCQiAFccgAAABGdEVYdFRodW1iOjpVUkkAZmlsZTovLy9hcHAvdG1wL2ltYWdlbGMvaW1ndmlldzJfOV8xNjI2Njc5MDQxMzE0MzkzN181N19bMF26+HN8AAAAAElFTkSuQmCC',
                    },
                    {
                        name: 'XTL',
                        icon:
                            'image://data:image/png;base64,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',
                    },
                    {
                        name: 'SHT',
                        icon:
                            'image://data:image/png;base64,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Wf0Z76+9QJAtmvE4Ty7+CY4D/HT5L9nqXsXa6FfDyvqYkrSIiwFHx7/KxMgjvHPnJ6z1/gtnCibtEzy5+KfMNh8DiVFVQDDGYYwDBGstxgoiBTYMGHFznJv9Fsf3fZ2oSOj4N3np+j+jcYMzk39MNT2CDTFqAt7mGBMSjA8MxU0Wpk6xvvs8K1s/xpXvE4Umpw99hdHkLOobiCuBtR/4PPrA8yXAIgaMc0ioYcMISZji5IHPsm9oHuM8a71XuHLvaaYbjzA7ehrNYxBDUMUYEtAGk81T2Fh4d/lZCnpkvWEmG59mfOiTkDWgSCAYUINiUQyKoqIogiIP0mJeI+QRwUPZTnJ44vP43n7iOOH63V/Q7W9xcPIkzjQIuWLUYqCEFg1mxs7Ram+ytrNCEIfPRhgbOkEkDXAejTfw9h4q/kH6lIDiUQpUClQCAVCXoW4TF20CfcaHj1IxxyiyCllos7JxheHhWZrVWQyCUYdThSQaoVE9ws1bb5BFV9FkA7FNSqUBe933CekuA1kmqQ4xHD0JWgJJgZSsGBDZMkYSMJD6ZVq7b2OMYsw+4kQR2SOYNYLb4O7WZY7Mnme4NsN634NGOCRnqNrAMkSnuE1IOqjLITfkmUFsFQkRlXgIo1WCAtJj+/4KWbFHq7XJcH2UyNUYbe5HdJpqLGjooyEG2SaQodJHIqHbv03qPY3aPtyWJ2iEU3oEPBDhtYVKg6KIoBimtTOgsW8CqZRQgewDAKSHK6WkYZfmmEOkj4iAyXAyRqXa+PCXcLf1DNmgwFTH8N4QzC4qiqhFJMOEBCe2IMt7dAZtguwS8ASTIdE6m3vPstKq0oib5CTkOob4MoEe1nVJygGlQBAgY6e7hMpbROJxWiZ4z/U7P8YkywTJ8GEYbzukRY9B1kfIAUW+9/rjaqVPLR4jLZYYUEIZgpBizTaJdbjsMKKjeOkiPianDDGgbWzIEV9CpY46MNxBqYDziOziB22wOwxw+HCQkuuSuAnSsEMaVkFrOC0cJDntwc0HJos6+KxCZMYe5AV/H2GTPN0lKvWwLlCYGqk6TMioSIpIn8ylFC4jzqooB0iLLlYzkmIM56tE8R7YnCw3ZGEJLykBi0X4X9vNtKV3gKDkAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA4LTEzVDEzOjU0OjU2KzA4OjAwCobyNwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wOC0xM1QxMzo1NDo1NiswODowMHvbSosAAAAgdEVYdHNvZnR3YXJlAGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnvM8dnQAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABd0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQAMzDG+pnYAAAAFnRFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADMzp1wI7wAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNjI4ODM0MDk2b/VH7wAAABJ0RVh0VGh1bWI6OlNpemUAMjkwM0JCWOhnywAAAEZ0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL2FwcC90bXAvaW1hZ2VsYy9pbWd2aWV3Ml85XzE2MjY3MjEwODA5NjY1ODE0XzUzX1swXflsCSgAAAAASUVORK5CYII=',
                    },
                    {
                        name: 'MTYX',
                        icon:
                            'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAgCAMAAABAUVr7AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAh1BMVEX/////+d7/7Jn+9MH//O7/1BD/zgD/2wH/8rz/1yX/2TP/9s7/0g//7qr/53v/42v/9Mn/31b/4WScggByXQHeugC7mgHwyAEAAACDbAARDwAeGQDrwQEiHQBSRADMqwEwKAA2LQBBNQB4YwDXsAD+3EJoVgCihgEMCgBJPQCNdAD+5Xf/6IkN/cRFAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAAd0SU1FB+UIDRU3AMKtciIAAAGESURBVDjLfVOLdoMgDEWnpGjr1Eml1Gmrbffq/3/feARQuy7qOYlcws1NIERZFMcvBC1JKegnIcE2LEspTSMXAzUWBUSkf6kvd/HWxrsAie0musG4MABKXxcQ0C+zh5ep2QC0esxCszwhyS7FJEuISaL/s2qLAJjzD1lg4YDnr2qmSMYtA9icdSg69ZvB4N4abrkFMpnjwvca2ApxgJUyDJO0UuzVgoIc18pkyLAT4l07Ukg82NdUUNsCriDa64XklrCXJndspRCDWhtO5xa6UcF8U3KnxCQMGTMKF9HNi7qiIO1t8sIdzq32CoTUqB1YXbTXyg8b5IEMDBPqbriPJ4yYrSpRysBeNOCbMB65a0mWuClSaT77AYwNo7wAuNZls9kcejl+fR/Gs2y477qvqrId5tOt729N52mrt44WA6FbjWXhjP2Eubr6XbPhYbv5XSr90Z5FNbslMzZhcOuIrM1cMJeG3R8Byu6eRBaTJ2YY021Vkqemj2JFRP6zMo6TPxd+AZuSG2AgRdGVAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA4LTEzVDEzOjU1OjAwKzA4OjAwznSiVwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wOC0xM1QxMzo1NTowMCswODowML8pGusAAAAgdEVYdHNvZnR3YXJlAGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnvM8dnQAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABd0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQAMzIo9Pj0AAAAFnRFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADM0OTidTAAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNjI4ODM0MTAwVpYzpAAAABJ0RVh0VGh1bWI6OlNpemUAMTUzOEJCBWy4awAAAEZ0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL2FwcC90bXAvaW1hZ2VsYy9pbWd2aWV3Ml85XzE2MjY2NzkwNDEzMTQzOTM3XzMwX1swXd6BTHEAAAAASUVORK5CYII=',
                    },
                ],
                textStyle: {
                    color: '#242424', //legend图标颜色  深灰
                    size: 20,
                },
            },

            visualMap: [
                {
                    min: -5, //IF NO WAREHOUSES IN THIS CITY
                    max: 35, //填写城市的最大值
                    seriesIndex: 0,
                    show: true,
                    //splitNumber: 4,
                    //   right: '2%',
                    inRange: {
                        color: ['#FFFFFF', '#2A6BA6'],
                    },
                    //       calculable: true,
                    textStyle: {
                        color: '#242424', //legend图标颜色  深灰
                        size: 20,
                    },
                    formatter: function (value) {
                        return value;
                        //       return "";    左下角图例滑过时显示空值
                    },
                },
            ],

            geo: {
                show: true,
                map: mapName,
                label: {
                    normal: {
                        show: true, //是否显示城市名
                        textStyle: {
                            color: '#1F4E79', //legend字体颜色  深蓝
                            fontSize: 8,
                        },
                        verticalAlign: 'middle',
                        align: 'left',
                    },
                    emphasis: {
                        show: false,
                    },
                },
                zoom: 1.2,
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: 'transparent',
                        borderColor: '#1F4E79', //地图边框颜色  蓝色
                        borderWidth: 2,
                        //     shadowColor: 'rgba(63, 218, 255, 0.5)',    //地图边框阴影颜色
                        //   shadowBlur: 30
                    },
                    emphasis: {
                        areaColor: '#52B3D6',
                    },
                },
            },
            toolbox: {
                show: true,
                left: 'left',
                top: '25',
                feature: {
                    dataView: { readOnly: false },
                    // restore: {},
                    // saveAsImage: {},
                    myTool1: {
                        show: true,
                        title: '重置地图',
                        icon:
                            'M1007.772025 142.969542l-70.419421 53.799178A527.751816 527.751816 0 0 0 524.288347 0.003938C234.733768 0.003938 0.396208 228.591367 0.002363 511.371818-0.391482 794.467344 234.497461 1024 524.288347 1024c226.381899 0 419.287003-140.208692 492.699643-336.579629a9.688578 9.688578 0 0 0-6.065207-12.603028l-70.892035-23.709447a10.082423 10.082423 0 0 0-12.603029 5.8289 416.687628 416.687628 0 0 1-99.406387 151.551418 431.181111 431.181111 0 0 1-303.496679 122.879527c-58.0527 0-114.214945-11.106419-166.990127-32.925412a427.085127 427.085127 0 0 1-228.587428-223.30991 408.653197 408.653197 0 0 1-33.713101-163.287988c0-56.713628 11.421495-111.536802 33.713101-163.209218a416.687628 416.687628 0 0 1 92.080877-133.355795 431.181111 431.181111 0 0 1 303.496678-122.879527c58.0527 0 114.214945 11.02765 167.068896 32.925412a427.085127 427.085127 0 0 1 171.243649 128.235814l-75.224326 57.265011a9.688578 9.688578 0 0 0 3.780909 17.250395l219.213926 52.381337c6.301514 1.49661 12.366722-3.150757 12.366722-9.373503l1.023996-220.552998c-0.157538-8.034431-9.767347-12.603028-16.2264-7.561817z',
                        onclick: function () {
                            loadMap('中国');
                        },
                    },
                    myTool2: {
                        show: true,
                        title: '全选',
                        icon:
                            "M102.4 302.08c5.12 5.12 15.36 10.24 25.6 10.24s15.36-5.12 25.6-10.24l174.08-174.08c5.12-5.12 10.24-15.36 10.24-25.6s-5.12-15.36-10.24-25.6c-20.48-5.12-40.96-5.12-51.2 10.24l-148.48 153.6-71.68-76.8C51.2 158.72 40.96 158.72 35.84 158.72c-10.24 0-15.36 5.12-25.6 10.24-5.12 5.12-10.24 10.24-10.24 20.48s5.12 15.36 10.24 25.6L102.4 302.08zM276.48 409.6l-148.48 153.6-71.68-71.68C51.2 486.4 40.96 481.28 35.84 481.28c-10.24 0-15.36 5.12-25.6 10.24-5.12 10.24-10.24 15.36-10.24 25.6s5.12 15.36 10.24 25.6L102.4 629.76c5.12 5.12 15.36 10.24 25.6 10.24s15.36-5.12 25.6-10.24L322.56 460.8c5.12-5.12 10.24-15.36 10.24-25.6s-5.12-15.36-10.24-25.6c-10.24-10.24-30.72-10.24-46.08 0z m0 327.68l-148.48 153.6L56.32 819.2c-5.12-5.12-15.36-10.24-25.6-10.24s-15.36 5.12-25.6 10.24c0 5.12-5.12 15.36-5.12 25.6s5.12 15.36 10.24 25.6L102.4 957.44c5.12 5.12 15.36 10.24 25.6 10.24h5.12c10.24 0 15.36-5.12 25.6-10.24l174.08-174.08c5.12-5.12 10.24-15.36 10.24-25.6s-5.12-15.36-10.24-25.6c-25.6-5.12-40.96-5.12-56.32 5.12zM1024 153.6c0 30.72-25.6 56.32-56.32 56.32h-460.8c-30.72 0-61.44-25.6-61.44-56.32 0-30.72 25.6-56.32 56.32-56.32h455.68c35.84-5.12 66.56 20.48 66.56 56.32z m0 358.4c0 30.72-25.6 56.32-56.32 56.32h-460.8c-30.72 0-56.32-25.6-56.32-56.32s25.6-56.32 56.32-56.32h455.68c35.84 0 61.44 25.6 61.44 56.32z m-5.12 358.4c0 30.72-25.6 56.32-56.32 56.32h-460.8c-30.72 0-56.32-25.6-56.32-56.32 0-30.72 25.6-56.32 56.32-56.32h455.68c35.84 0 61.44 25.6 61.44 56.32z m0 0",
                        onclick: function () {
                            myChart.dispatchAction({
                                type: 'legendAllSelect',
                            });
                        },
                    },
                    myTool3: {
                        show: true,
                        title: '取消全选',
                        icon:
                            "M519.656727 472.459636l-160.512-160.488727a36.584727 36.584727 0 1 0-51.712 51.712l160.488728 160.512-160.488728 160.512a36.584727 36.584727 0 1 0 51.712 51.712l160.512-160.512 160.488728 160.512a36.584727 36.584727 0 1 0 51.735272-51.712l-160.512-160.512 160.512-160.512a36.584727 36.584727 0 1 0-51.735272-51.712L519.68 472.436364zM512 1024C229.236364 1024 0 794.763636 0 512S229.236364 0 512 0s512 229.236364 512 512-229.236364 512-512 512z",
                        onclick: function () {
                            myChart.dispatchAction({
                                type: 'legendAllSelect',
                            });
                            myChart.dispatchAction({
                                type: 'legendInverseSelect',
                            });
                        },
                    },
                },
            },
            series: [
                {
                    type: 'map',
                    map: mapName,
                    // left: 'center',
                    // top: 'middle',
                    geoIndex: 0,
                    aspectScale: 0.75, //长宽比
                    showLegendSymbol: false, // 存在legend时显示
                    label: {
                        normal: {
                            show: false,
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff',
                            },
                        },
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#031525',
                            borderColor: '#3B5077',
                        },
                        emphasis: {
                            areaColor: '#2B91B7',
                        },
                    },
                    animation: false,
                    // data: data
                    data: seriesData,
                },

                // 图标的位置
                {
                    name: 'JD',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: getsimboldata(mapName, JD_ARR),
                    symbol:
                        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAMAAADH72RtAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAmVBMVEXmGRXhFBHcJiPdPDnqcG7rjozqmJfAbWyoNTPiJCHkV1Tuubf27u7U29v2/f7y+/vDyMensrPfnp3hNTLam5rXq6ru8O/Ozs3b4uLdaGbbu7vc3d3Avr2mpqbdQkDgGhbKqqrPaGXfVVLTu7rah4XoGhjczs3gwcHiNzTiGxnkeXbsqafjPzzheHbspqXnZ2ThKynhLCj////y6UypAAAAAWJLR0QyQNJMyAAAAAlwSFlzAAAXEQAAFxEByibzPwAAAAd0SU1FB+UIDRIaMMERDuQAAADDSURBVBjTNY8Bc4IwDIWTTLrRDcEVYQWErbApVKz+/z9nQm99vVwu/e69FCAeZP23xEJ82SXq9Y17gBT56vePbJ8Xh08UEk15rPKq/qqqXAmDaIumbdvudOi6fnMbjt+mzLK27uofZE+goWdnV45j47bBlithUyOhv+wDJBrs39nwY2QYQnLOyTKSRZgSXWiWklIamUX5UhmfOHuFWSBQ07r63q+33syR0cHrhRbnrcaYZe8JBa11eIT4L4KZ99mqbPIERdgM++k4CMQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDgtMTNUMTA6MjY6NDgrMDg6MDAGFyCEAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA4LTEzVDEwOjI2OjQ4KzA4OjAwd0qYOAAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAAxNh2vXm8AAAAWdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAMTeSB650AAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE2Mjg4MjE2MDhXvHSRAAAAEXRFWHRUaHVtYjo6U2l6ZQA5ODZCQnKEyCgAAABGdEVYdFRodW1iOjpVUkkAZmlsZTovLy9hcHAvdG1wL2ltYWdlbGMvaW1ndmlldzJfOV8xNjI2Njc5MDQxNjM1NTI5MF80OV9bMF0+cDvCAAAAAElFTkSuQmCC',
                    symbolSize: function (val) {
                        return 10;
                    },
                    label: {
                        normal: {
                            show: false,
                            formatter: function (params) {
                                // console.log(params);
                                return params.name;
                            },
                            position: 'right',
                            color: '#69A4D9',
                            fontSize: '8',
                        },
                        emphasis: {
                            show: false,
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#4bbbb2',
                            borderWidth: 2,
                            borderColor: '#b4dccd',
                        },
                    },
                },
                {
                    name: 'FS',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: getsimboldata(mapName, FS_ARR),
                    symbol:
                        'image://data:image/png;base64,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KJ78QlGMMSx97VJNNacAGB0dld7e3gbAngNj48yaOZOLLr5Iw/DY1wxEoi0XYwzGG6sn1lpmz56tixef3zh36NAhk8/nBSCfzzM0NNToW7J0iTanmrHWIghezPyq9ezW3acMVr+nVjz5LkqnMYZ0Ot1wRblcZnR0tHHtSH5E6++y+EFAU3PThOwRhiFz5szhgW88oGvWrOE73/mOXnjR+VqtjO3wJ5NJWlpaGmOMjo5SrUb9pUqJXGG00RePxSQWCyJJ6TPo+aza/qvto0zSpixc/b39vxVfVoY2HNi3d28DgOd5+P5YMo95scaOQi6Xo/fAgQmSwvM8+g738cLG38jiixbr7t27Zc+rneL5kXeNMQwODsr+/fsbNgVB0Mi4RgyeNzZef/8AhXwRL24qiVn+vQe7+tdOhWVapWfw8OBqESluemXzR/f3dC+Z2zEv3tLSQkdHR+OauR1z6zGoW7dsZdNLm0kkElo3VkSwoeW+L93PIw8/yvDQsKoqXo3Kvu/T19fH8y88z/LlywHo6OigubmZXC5HS6qFmW0zUVUtFos8/dTTLl/Od2bmZ+59/5a/eWA6OKZdZ1X1h/OXzn/x1X1735xOZ25rTjVn58+fbwHxPI/58+cjIhQKBVatWsXAwADJZHIijYzB9336+/rxA78BtN7nrOORRx7hxhuu17MXnCOzZ88mm82Sy+XIZrO0t7cjIrKpZ8PBZ37zzDoVffrQ9kNbp4vhpERF90vdPcA3161b9/jVV1/tL1q0CIBUKtXwcl9fHw8++CDACZVOW3sbw8PDWDtRZQWxgPXPreel323m7AXnMHPmTFpbW+nu7iaVStHUFL3e8Uj/18q7Nu4qnoztcBLvLv4+tD+oV3DPgP19bWfA/r62/waJRstkGtfIWQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wOC0xM1QxMToyMToxNCswODowMLYdhmgAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDgtMTNUMTE6MjE6MTQrMDg6MDDHQD7UAAAAIHRFWHRzb2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAXdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADU4nnu2bAAAABZ0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA1ORHTRncAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTYyODgyNDg3NCwLc0UAAAASdEVYdFRodW1iOjpTaXplADQ1MzFCQlpwElcAAABHdEVYdFRodW1iOjpVUkkAZmlsZTovLy9hcHAvdG1wL2ltYWdlbGMvaW1ndmlldzJfOV8xNjI2Njc5MjUzMTAyNjk3Nl8zODBfWzBdGgsPHwAAAABJRU5ErkJggg==',
                    symbolSize: function (val) {
                        return 10;
                    },
                    label: {
                        normal: {
                            show: false,
                            formatter: function (params) {
                                // console.log(params);
                                return params.name;
                            },
                            position: 'right',
                            color: '#69A4D9',
                            fontSize: '8',
                        },
                        emphasis: {
                            show: false,
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#4bbbb2',
                            borderWidth: 2,
                            borderColor: '#b4dccd',
                        },
                    },
                },
                {
                    name: 'Others',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: getsimboldata(mapName, Others_ARR),
                    symbol:
                        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAfCAYAAACLSL/LAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH5QgNFRs3QyG8gwAABmFJREFUWMPtmNlvG8cdxz8ze/K+dFDV7VNxEseO4SY9YqdparSN26IJaqAF+tDH/mt9K1C0KNogTtL6SB07kmVLlhTroiRSpCiSWpLLJXenD5Rrq/Ehx0adh36B3afdmc/8ju/srFBKKb6Bki8a4P9gz0v68xpocW0BKSXZzCCWab14sO1amctTH/OvmctIKflWzxDD2TFG+scZ7h8lEop+rXHF47rSaddYbswS19IMhw/tTbyCz+eucmn6I1ZKCyQH4ggBO9U6btUjbqfpz2R5+eBrvDlxBsuwn1/EbixeIifv0JPpoeTkOGAeJ2GnyZfW+WjyL9xamcRpVDFNg6CtiCbDCCXx6ts0VJWc47A9l8fxqrzz6nlCZuj5gCkF1VINr9WiNdDEEWUqMx6zC7cp1zfxfR873I1EvdbArbsIKYmnYhi2jhSCQAVMrX+G57f4yWvvY1vhZ09lu+Nx5c4nLLWmaXR22Kk0qG05ROIhEpkYfidgZ9uhseOilMKwdKywhSYloLBCJrFUhLrTpLnTYjR1hPeOXyBsR/YH1gk61FpbaFInbqYRQvzngVq9wt9v/olb65/D7hKEFFi2iWHpNBwXFQTYtoVmaA9EW6GbOulsgnDUplyoslOu0x8d4fzxC8RCyceD+b6vZvI3uB1cIhFKc9g6wWD4EMpXLGzM8On8X6m65d3Zurd7IRYIdFPHMHUQIKVASoHvK5TqXqZpkMomcB0Xp9ogUIqU3sf5V35DKp5+fI3VGw0Km1t0Bjp4iX+y1liktLbN3dIsUhckMjFQCs/r0PE6uxAS3dSRu2kDsCMWoaiN2/BwHZdABQQoyhsVhCYAgVOpMz93jXHjFb5/+u1Hg0kpOZw9Rrm5SamSYyW/zkx1AQTYto1uaCBAN3WUEEgp0XSB1CQI0WXazXzgB0hNkuqJUZOChuOiaV2PcaoN1r8sMPnJLIlkAvH24zcdHSAVyXD20E8peev88eM/MH/7NolMgkg8TDhqYYZMrLCJpkkM00LK+zX4373TqDXxQz5BoLBDJq1mm+JamaVbOTYWi6T6Eky8fhjd3gcYAkKhEMOhg4xnjnJT+wLXadF0WuiGRihqk8hE6R/pQdMlQaDQDQ2pSXw/IGj790GBdquDEIJyocrqfJ67UyvouoYdMfnhr7/DwHgfntoi31ymzxzuRv+hYA92g6YwbAPLMFECUIpW06O0vg1CkB3JoBndYrdCBpqh06g16ezCaZrErbus3tkgv1Ri6h+zFFa2OPnOMRI9UUqFMrqt4aZd2u0GFXmAIY4S1ZKPBzN0E92QSFMghUQgun0YQGWzhhCK/pFeDEun3eoQ+N0i03UNhSK/VOTuzVUKy0XimTjFXJmm00Q3BROjr3IkMYFTLeOoOn4nT8HPs1xf43sHfkQ0Ens02BvHzqAEXJm7SLNdR5P3vQkFO+UGQmwxMN6HbnZTqRmS+naDL6dXKawUKebKHDoxhmnqvP7uMfp7s/zs7AeceulNwnYEz3epeFtMb19hav46Ld9CHBJ7OB7q/B2/w3o5x8XpP7NUnu/uTQ9KQSQZZmCsF93UWZ5ZY3Uuj9f08H2fRCbG6XPH0U2Jk2vz3eEfczB7dNda7mvLKZIv5ehPDpJJ9O4x9idsSW1uLl/j0sKHOF4VhUJw/2XD1NkqVFm9s45uaETjERCQzsbJjvcRT0dI9iVIGr0clCfos4eRQn5lkYivzi32cxipNSp8eudvLJSm8YIWAhBC0vY6LE2vYkcs3nr/NNuFGrnZAgORUaQuMPsDZCQg2RejnK/xg74PGOk98KTpHl5jD1M8nOS9k79isXCcqysXKdU36CgP6FpGz1AKp1KndyjN8NggB+0TjNoTuF6Tyc3LLK7NsHB9mTPn/P1Mt/+IPahW2+WL3FXmtybZrOQprJQYHBiiLVrEesKksjGiiQjRTg8TxrdJW/3MFW+i2nBk6GV0bX8fzU8Ndk+F2ho3Vi7juwFjqQkW1xdIDNqsNRdRIY9apYZWjPPLN35LJtnz1ON/bTAA3/fRtL12slSZ49L8h1yb/AzXafHzty7w7snz+47UPT3T8W0PFICAsdQRTvWeJSWyoODy7EWm5q8TBMH/DuxROjz6Er87/3vOnfoFQV1QrBSeGuyZUvkktbwW27UykXCYaCi+x0BfKNiz6Bv7i+Df5GPi3ilrRf8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDgtMTNUMTM6Mjc6NTUrMDg6MDD5YkYqAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA4LTEzVDEzOjI3OjU1KzA4OjAwiD/+lgAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAAzMbH9qU4AAAAWdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAMzgwjtFnAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE2Mjg4MzI0NzVKHczbAAAAEnRFWHRUaHVtYjo6U2l6ZQAxNzc2QkL6UFFWAAAARnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vYXBwL3RtcC9pbWFnZWxjL2ltZ3ZpZXcyXzlfMTYyNjY3OTEzMjc5MzQ4MDZfNTBfWzBdZxMBPAAAAABJRU5ErkJggg==',
                    symbolSize: function (val) {
                        return 15;
                    },
                    label: {
                        normal: {
                            show: false,
                            formatter: function (params) {
                                // console.log(params);
                                return params.name;
                            },
                            position: 'right',
                            color: '#69A4D9',
                            fontSize: '8',
                        },
                        emphasis: {
                            show: false,
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#4bbbb2',
                            borderWidth: 2,
                            borderColor: '#b4dccd',
                        },
                    },
                },
                {
                    name: 'SM',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: getsimboldata(mapName, SM_ARR),
                    symbol:
                        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAYAAADhXXHAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAABcRAAAXEQHKJvM/AAAAB3RJTUUH5QgNFScnLWXVGAAACShJREFUWMPVmHmQVNUVxn/3vdevl5lhNhY1iMooKpSyFAZQyxiCosEQKRdcAClGmWgpUQdMlREHLNByB4JsmkTHGFOo6OBGEiRlxEEtg4RFZJhCHIHBWZqZ7unldb/3bv643cMs3YO4jfmqzh99+97b3z3nO+fc20JKCYAUZwwUGNMk2v0C4aeXISEM8l5wXxRydzOAkFKSFEN+amCuFGijwO1tnh2gI3E2gXWTkHsPiCglJ/vwVgn0kT8uomloSOxNgsjVmg/vtB8vUQAXgTHewT9BuAyLCfD1NqWeIXBxtgnJMNnbVL4uYa23KXx9SIyevoTkcZ8ePBnWGoCGygsJOKmxNNyUCUBPze2OLGSTMOQM+McaSHQhbCXBtsE0QOuwqemBrbvhmt/AKafDWyvB74W334N5j0M0BroBUyZAxa1wyc0QalP73XEDlF4Ni1dD1b8gFj8esppasOW/ilgatgMXjYbBA2FXLRxqAl07SjbYqtbGLfjPLigZBLddD34f/H4pPHw3nD9Cjb/8JCRtcF0YchoMHABP3QfTJ8OkWzJS6yHB0uHqiDisehjKpsKUOfDGv5X30nBc5UGkMsOER8th5pVwwQ3w5wdhxJlgmhAMgZTKcvxqn3gCtu2GcVMzku0hwWRKQ10thWgE7BYItx61aFvaB0BC/d6AvuD1KHJjJsPNFWpKyaXQdwz0GwFPPKvGyipg3JSsAc+eYH36dNYkQMwCb6okmz4gF3zeznOSNjgJmDkV5s2CoSVwpBV0HfxFSh7XloPhgfwCJYNX34HtNbBzL+QUQySWkVIWGdjw2QY481QVpkzYsx9aw50PFPDBI3+CynWwdhmMOlvpuORk+PUdsGI+DB0MVkId0kl3TakO6fXC7s/hnEkZ/ZjFswKqt8GhBpVUaSQScN450L8IThuoRCQ6SMMw4MR+QAQqlkLDEbhxIjz0OzU34IVQBD7YrhJy5Nlg6FD9iVo78izwm1mDnYWsDrMrOhOxHRhQDBtWK7JLKuGBlSq86WlCqEpAH9i9Ay6+GEpvUGMS8JqweStMLoWcInh9OeTnweWzwMyB5x+C80dmJZs9wWwbksmjJlvhyvEw/EylqdKrwBAQPgKhsLLWEFhxKOgDTyyCqhVw7hmdy5+UgKskkCoa7Z+PgR6qQccKYMHY8+GxeSoRrr0bfCa8vEyVHWRqq5S1tChdfrgdVvxN1VkhIBqHyT+Hlu3w1buqZo84C1o+geD7cO1lWRvCMcimEYXzRsG6FLGFK+CtN6H8EbhkHDz7KHgMjrbX1AEffxYunQE1+1QSWgklmYag6mrvfKCSL9QGGzbDxi1Q39i9Ah1bs6nQYCndrV8GebmwYAWs2wDkwpq1qoY+cDvkr4br5kHwMOBXPmhqAJ8fLrsIwhGVWH6f8vb1cyC3CNanNHvdnWAG4LkH4cJRx+tZF/r3hcfuV0nQFlcJt/AJOl00Fq+A0vthwjio/gvcOTvVfl3IL4LFc+GyC+HJSmhohkg0tX8crIhKWukAYTBRCez2oF3JMNndhki55iUppZSyepuUgyeqMYZ2mTdUSkqkvKRUyj2fq/kz75XSM1zKf1arz6vWSuk9R0oGS/nXN6V0XCn3fiFlbZ2U0biUcUutratX89e8nPqt7rz0BfRfkPEUu/apwn/XYmhsQl39RJdJqSvdvs+hcj00tsDGD6DpIEgDavbDXYtSVwwDPtqpmkH/IhWBxiA0taha2xiEl/4OC/8AUStj0Hu4yDippPFmIJk5RhBHxVNXRd6NgtvxkA5oEor6qqaQ7o5CqEtM8KvU+szq/B6fNeltRYZxt8P3XaLUAwy+N4gexvXj2agd/0dvsHbPZgpVb6M7JwMEn+pJ3tctPALOs02GOWYvExZs0S12GkkMCT+zfQx2DYxDms2tOUE2Gwk0BKc7Ok9FChhvp3v+D0/0bSPKrNwjNGkSF8lVlp8/RgvRPtITbDGS5EuNPCn4UnOZlhtkkxHj65Ws75ioJ8b0vCARAXlS0EdqVJlx5cwXzRjeDg40gbCAW3Na2KpbPyBhwWYjzuzAESxEe5kSgC5gh5ZEFBQWykx0ksApjs7qaCEX2F6+X0kIqg2L0kCQL3UHs4uDXOAnjpa9dHmA/brN9JzmDpL4rr2s9txkxJiW08yBDERB1deDuosoLCzs0WVJwC9hZiJAqZXDINeDX3570jEhqdOSPO2NUGlGiQnloB6Ploms4zg4joOu65i6TtyxibsOAc1ghp3HIKlj881hAHXC4TkjRMx18GkGPsPASiZxXRdd19H17l2uG1nbtinIL+Ce8nIONzayavlyVi1dxkc7d/D8Cy/QGAmjeb59l3YSSU7ML6SsbDaF/gALKiqYWz4X1zR4auVKwqEQhqezrztp1rZt+vfrx+tvvM7tv51D/YEDNIda2VVbyyOPPcoLz1cyqG8/fEmHXCm+sfmSDqcNOIHXXnuV+fPnU9/YSHM0gisE9953H+teWUdhYSG23Tl+mpCy/YXmInn6mWcYPnw4NXtqqFpfhen30VCzFyIxxk+YwC0zbsr6x4cEYlactrY2rISVeY6UaLrOwooFjB49mrYjLXy2cxcer5eqV9dx+OBBxowdw5IlS9r/CpBAwOGw5hViIULgSJdTC4o5d+gw5WXXIZpIYBge6vbspeWrBgDK5txBICcH2YWwKyV+3WDqpMnMvecefvnzX6C5MmPBC3i9XDH5VwA01h+m9tNP8Xq91NZ9QWs4DMDYsWMxNU29m4XAgjs1I65VGq78OGElmDZ9BsUD+ndwu0DTBKFQiHhcBSCT8NNIJhJcMWkSDy5axOUTJ5Kwuj+rHSkpKSjG1NQ+lhWnLRxG0zQSto2beoPlmV5GnzAQR0pwnPcMN7lJq4s2HSqRepkutOqaDz8mGY50C5vp9WIcI6k0IYhJh9Vr1rBx7SssXb4c4TUzPoRiyQRpnxseDz6fHyklQoj20Cddl2AshpDuu7qUs+rD4UYNYEtL49ZcwZQN72wsizQ0NaV/XNc0HMfhxJNOok9+AQCtzUFklheoaXj4cMd2biu/i/2H69E1PeOh6sKttLWEACgoLuakwafi2EkCgQCGoZyih9r2bTtUd2PAH7imobW1FuB/+34PCNFeYvEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDgtMTNUMTM6Mzk6MzkrMDg6MDAn6sqqAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA4LTEzVDEzOjM5OjM5KzA4OjAwVrdyFgAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA0MxCyXqUAAAAWdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgANDPoHZ4oAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE2Mjg4MzMxNzn93CV+AAAAEnRFWHRUaHVtYjo6U2l6ZQAyMzYxQkI0t/TYAAAARnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vYXBwL3RtcC9pbWFnZWxjL2ltZ3ZpZXcyXzlfMTYyNjY3OTIyMjUwMDQ4NjBfODNfWzBdxc/OnwAAAABJRU5ErkJggg==',
                    symbolSize: function (val) {
                        return 20;
                    },
                    label: {
                        normal: {
                            show: false,
                            formatter: function (params) {
                                // console.log(params);
                                return params.name;
                            },
                            position: 'right',
                            color: '#69A4D9',
                            fontSize: '8',
                        },
                        emphasis: {
                            show: false,
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#4bbbb2',
                            borderWidth: 2,
                            borderColor: '#b4dccd',
                        },
                    },
                },
                {
                    name: 'LST',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: getsimboldata(mapName, LST_ARR),
                    symbol:
                        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAMAAABVlYYBAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAApVBMVEX////2v7zwl47xlo/vn5ndEQDaBgDndmnmUEHdGQD42tn3xsLUFwDQDQDnXk/2y8jdIxDUHxPXJxHqfXLobWDsjIHoko3niH3aNSPyq6ffWlLsh3zso5vxvLjhcWTZPSv87u7jTj3dVEb65uT99vbme2/yt7HhYFPmhnvic2fTLx7keHH77ezaQzTfaF/pjYbniYHXQDHqmZP++/vVLBvbTkL55uXtpH5LAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAAd0SU1FB+UIDRU2KZkE2w8AAADvSURBVBjTVZCLUoMwEEWX6FKDrCXVRFuoQqgtRVtotf7/p7l5OMVDspOcucMmAQBIxA0jArcQSDBNUzcDs2DvEKXEvw8xc/LeyUgu85x8+MFLl5PEMvfhOcoioOTCVUWPACJ9EkJrHtoIbfSzKF7YooOQ3AiwXXIzQqmQW1FB3I1W3K0kxLxa845eswXXt9odorHlHKAtZxXARryLjb+FTeBKm8VFs53YahcX1tu62zts//E5yR6OQ9kNoz117TXbUnjCav/vv9uDOk+tjd2W6gvgfIx29W0vjbWXU88263f+ElAPw2hGY8Yft1sbLr/orBSrIgeVDQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wOC0xM1QxMzo1NDo0MSswODowMAOLzCcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDgtMTNUMTM6NTQ6NDErMDg6MDBy1nSbAAAAIHRFWHRzb2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAXdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADIw3+GomQAAABZ0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAyMVBJWIIAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTYyODgzNDA4MeiK4w0AAAASdEVYdFRodW1iOjpTaXplADEyNDZCQiAFccgAAABGdEVYdFRodW1iOjpVUkkAZmlsZTovLy9hcHAvdG1wL2ltYWdlbGMvaW1ndmlldzJfOV8xNjI2Njc5MDQxMzE0MzkzN181N19bMF26+HN8AAAAAElFTkSuQmCC',
                    symbolSize: function (val) {
                        return 15;
                    },
                    label: {
                        normal: {
                            show: false,
                            formatter: function (params) {
                                // console.log(params);
                                return params.name;
                            },
                            position: 'right',
                            color: '#69A4D9',
                            fontSize: '8',
                        },
                        emphasis: {
                            show: false,
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#4bbbb2',
                            borderWidth: 2,
                            borderColor: '#b4dccd',
                        },
                    },
                },
                {
                    name: 'XTL',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: getsimboldata(mapName, XTL_ARR),
                    symbol:
                        'image://data:image/png;base64,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',
                    symbolSize: function (val) {
                        return 15;
                    },
                    label: {
                        normal: {
                            show: false,
                            formatter: function (params) {
                                // console.log(params);
                                return params.name;
                            },
                            position: 'right',
                            color: '#69A4D9',
                            fontSize: '8',
                        },
                        emphasis: {
                            show: false,
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#4bbbb2',
                            borderWidth: 2,
                            borderColor: '#b4dccd',
                        },
                    },
                },
                {
                    name: 'SHT',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: getsimboldata(mapName, SHT_ARR),
                    symbol:
                        'image://data:image/png;base64,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Wf0Z76+9QJAtmvE4Ty7+CY4D/HT5L9nqXsXa6FfDyvqYkrSIiwFHx7/KxMgjvHPnJ6z1/gtnCibtEzy5+KfMNh8DiVFVQDDGYYwDBGstxgoiBTYMGHFznJv9Fsf3fZ2oSOj4N3np+j+jcYMzk39MNT2CDTFqAt7mGBMSjA8MxU0Wpk6xvvs8K1s/xpXvE4Umpw99hdHkLOobiCuBtR/4PPrA8yXAIgaMc0ioYcMISZji5IHPsm9oHuM8a71XuHLvaaYbjzA7ehrNYxBDUMUYEtAGk81T2Fh4d/lZCnpkvWEmG59mfOiTkDWgSCAYUINiUQyKoqIogiIP0mJeI+QRwUPZTnJ44vP43n7iOOH63V/Q7W9xcPIkzjQIuWLUYqCEFg1mxs7Ram+ytrNCEIfPRhgbOkEkDXAejTfw9h4q/kH6lIDiUQpUClQCAVCXoW4TF20CfcaHj1IxxyiyCllos7JxheHhWZrVWQyCUYdThSQaoVE9ws1bb5BFV9FkA7FNSqUBe933CekuA1kmqQ4xHD0JWgJJgZSsGBDZMkYSMJD6ZVq7b2OMYsw+4kQR2SOYNYLb4O7WZY7Mnme4NsN634NGOCRnqNrAMkSnuE1IOqjLITfkmUFsFQkRlXgIo1WCAtJj+/4KWbFHq7XJcH2UyNUYbe5HdJpqLGjooyEG2SaQodJHIqHbv03qPY3aPtyWJ2iEU3oEPBDhtYVKg6KIoBimtTOgsW8CqZRQgewDAKSHK6WkYZfmmEOkj4iAyXAyRqXa+PCXcLf1DNmgwFTH8N4QzC4qiqhFJMOEBCe2IMt7dAZtguwS8ASTIdE6m3vPstKq0oib5CTkOob4MoEe1nVJygGlQBAgY6e7hMpbROJxWiZ4z/U7P8YkywTJ8GEYbzukRY9B1kfIAUW+9/rjaqVPLR4jLZYYUEIZgpBizTaJdbjsMKKjeOkiPianDDGgbWzIEV9CpY46MNxBqYDziOziB22wOwxw+HCQkuuSuAnSsEMaVkFrOC0cJDntwc0HJos6+KxCZMYe5AV/H2GTPN0lKvWwLlCYGqk6TMioSIpIn8ylFC4jzqooB0iLLlYzkmIM56tE8R7YnCw3ZGEJLykBi0X4X9vNtKV3gKDkAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA4LTEzVDEzOjU0OjU2KzA4OjAwCobyNwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wOC0xM1QxMzo1NDo1NiswODowMHvbSosAAAAgdEVYdHNvZnR3YXJlAGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnvM8dnQAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABd0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQAMzDG+pnYAAAAFnRFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADMzp1wI7wAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNjI4ODM0MDk2b/VH7wAAABJ0RVh0VGh1bWI6OlNpemUAMjkwM0JCWOhnywAAAEZ0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL2FwcC90bXAvaW1hZ2VsYy9pbWd2aWV3Ml85XzE2MjY3MjEwODA5NjY1ODE0XzUzX1swXflsCSgAAAAASUVORK5CYII=',
                    symbolSize: function (val) {
                        return 15;
                    },
                    label: {
                        normal: {
                            show: false,
                            formatter: function (params) {
                                // console.log(params);
                                return params.name;
                            },
                            position: 'right',
                            color: '#69A4D9',
                            fontSize: '8',
                        },
                        emphasis: {
                            show: false,
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#4bbbb2',
                            borderWidth: 2,
                            borderColor: '#b4dccd',
                        },
                    },
                },

                {
                    name: 'MTYX',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: getsimboldata(mapName, MTYX_ARR),
                    symbol:
                        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAgCAMAAABAUVr7AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAh1BMVEX/////+d7/7Jn+9MH//O7/1BD/zgD/2wH/8rz/1yX/2TP/9s7/0g//7qr/53v/42v/9Mn/31b/4WScggByXQHeugC7mgHwyAEAAACDbAARDwAeGQDrwQEiHQBSRADMqwEwKAA2LQBBNQB4YwDXsAD+3EJoVgCihgEMCgBJPQCNdAD+5Xf/6IkN/cRFAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAAd0SU1FB+UIDRU3AMKtciIAAAGESURBVDjLfVOLdoMgDEWnpGjr1Eml1Gmrbffq/3/feARQuy7qOYlcws1NIERZFMcvBC1JKegnIcE2LEspTSMXAzUWBUSkf6kvd/HWxrsAie0musG4MABKXxcQ0C+zh5ep2QC0esxCszwhyS7FJEuISaL/s2qLAJjzD1lg4YDnr2qmSMYtA9icdSg69ZvB4N4abrkFMpnjwvca2ApxgJUyDJO0UuzVgoIc18pkyLAT4l07Ukg82NdUUNsCriDa64XklrCXJndspRCDWhtO5xa6UcF8U3KnxCQMGTMKF9HNi7qiIO1t8sIdzq32CoTUqB1YXbTXyg8b5IEMDBPqbriPJ4yYrSpRysBeNOCbMB65a0mWuClSaT77AYwNo7wAuNZls9kcejl+fR/Gs2y477qvqrId5tOt729N52mrt44WA6FbjWXhjP2Eubr6XbPhYbv5XSr90Z5FNbslMzZhcOuIrM1cMJeG3R8Byu6eRBaTJ2YY021Vkqemj2JFRP6zMo6TPxd+AZuSG2AgRdGVAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA4LTEzVDEzOjU1OjAwKzA4OjAwznSiVwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wOC0xM1QxMzo1NTowMCswODowML8pGusAAAAgdEVYdHNvZnR3YXJlAGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnvM8dnQAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABd0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQAMzIo9Pj0AAAAFnRFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADM0OTidTAAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNjI4ODM0MTAwVpYzpAAAABJ0RVh0VGh1bWI6OlNpemUAMTUzOEJCBWy4awAAAEZ0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL2FwcC90bXAvaW1hZ2VsYy9pbWd2aWV3Ml85XzE2MjY2NzkwNDEzMTQzOTM3XzMwX1swXd6BTHEAAAAASUVORK5CYII=',
                    symbolSize: function (val) {
                        return 15;
                    },
                    label: {
                        normal: {
                            show: false,
                            formatter: function (params) {
                                // console.log(params);
                                return params.name;
                            },
                            position: 'right',
                            color: '#69A4D9',
                            fontSize: '18',
                        },
                        emphasis: {
                            show: false, //hover显示文字
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#F24914',
                            borderWidth: 0,
                            borderColor: '#F24914',
                            show: false,
                        },
                    },
                },
            ],
        };
        myChart.clear();
        myChart.setOption(option);
    });
}

myChart.on('click', function (params) {
    // 控制台打印数据的名称
    if (params.data) {
        loadMap(params.data.name);
        // alert(params.data.name);
    }
});
