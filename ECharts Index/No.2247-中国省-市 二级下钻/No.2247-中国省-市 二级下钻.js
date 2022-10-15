/**
 * git 地址 ：https://github.com/FunArtisanPai/china-echarts-distpicker.git
 * 该地图不是跟高德地图一样精准，如果地图精准度要求高，请移步
 * 账号里面的code全部用的是adcode  区域行政代码
 **/

var provinces = {
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

loadMap('/asset/get/s/data-1594956060000-wzSYdj4lt.json', 'china');

/**
 * 省数据
 **/
var item = [
    {
        code: 110000,
        area: '北京',
        number: randomData(),
    },
    {
        code: 120000,
        area: '天津',
        number: randomData(),
    },
    {
        code: 130000,
        area: '河北',
        number: randomData(),
    },
    {
        code: 140000,
        area: '山西',
        number: randomData(),
    },
    {
        code: 150000,
        area: '内蒙古',
        number: randomData(),
    },
    {
        code: 210000,
        area: '辽宁',
        number: randomData(),
    },
    {
        code: 220000,
        area: '吉林',
        number: randomData(),
    },
    {
        code: 230000,
        area: '黑龙江',
        number: randomData(),
    },
    {
        code: 310000,
        area: '上海',
        number: randomData(),
    },
    {
        code: 320000,
        area: '江苏',
        number: randomData(),
    },
    {
        code: 330000,
        area: '浙江',
        number: randomData(),
    },
    {
        code: 340000,
        area: '安徽',
        number: randomData(),
    },
    {
        code: 350000,
        area: '福建',
        number: randomData(),
    },
    {
        code: 360000,
        area: '江西',
        number: randomData(),
    },
    {
        code: 370000,
        area: '山东',
        number: randomData(),
    },
    {
        code: 410000,
        area: '河南',
        number: randomData(),
    },
    {
        code: 420000,
        area: '湖北',
        number: randomData(),
    },
    {
        code: 430000,
        area: '湖南',
        number: randomData(),
    },
    {
        code: 440000,
        area: '广东',
        number: randomData(),
    },
    {
        code: 450000,
        area: '广西',
        number: randomData(),
    },
    {
        code: 460000,
        area: '海南',
        number: randomData(),
    },
    {
        code: 500000,
        area: '重庆',
        number: randomData(),
    },
    {
        code: 510000,
        area: '四川',
        number: randomData(),
    },
    {
        code: 520000,
        area: '贵州',
        number: randomData(),
    },
    {
        code: 530000,
        area: '云南',
        number: randomData(),
    },
    {
        code: 540000,
        area: '西藏',
        number: randomData(),
    },
    {
        code: 610000,
        area: '陕西',
        number: randomData(),
    },
    {
        code: 620000,
        area: '甘肃',
        number: randomData(),
    },
    {
        code: 630000,
        area: '青海',
        number: randomData(),
    },
    {
        code: 640000,
        area: '宁夏',
        number: randomData(),
    },
    {
        code: 650000,
        area: '新疆',
        number: randomData(),
    },
    {
        code: 710000,
        area: '台湾',
        number: randomData(),
    },
    {
        code: 810000,
        area: '香港',
        number: randomData(),
    },
    {
        code: 820000,
        area: '澳门',
        number: randomData(),
    },
];
/**
 * 你可以自定义字段，
 **/
item.map(function (i) {
    i.name = i.area;
    i.value = i.number;
    return i;
});
myChart.on('click', function (params) {
    if (params.data && params.data.number > 0) {
        /**
         * 市数据
         **/
        item = [
            {
                code: 110101,
                area: '东城区',
                number: randomData(),
            },
            {
                code: 110102,
                area: '西城区',
                number: randomData(),
            },
            {
                code: 110105,
                area: '朝阳区',
                number: randomData(),
            },
            {
                code: 110106,
                area: '丰台区',
                number: randomData(),
            },
            {
                code: 110107,
                area: '石景山区',
                number: randomData(),
            },
            {
                code: 110108,
                area: '海淀区',
                number: randomData(),
            },
            {
                code: 110109,
                area: '门头沟区',
                number: randomData(),
            },
            {
                code: 110111,
                area: '房山区',
                number: randomData(),
            },
            {
                code: 110112,
                area: '通州区',
                number: randomData(),
            },
            {
                code: 110113,
                area: '顺义区',
                number: randomData(),
            },
            {
                code: 110114,
                area: '昌平区',
                number: randomData(),
            },
            {
                code: 110115,
                area: '大兴区',
                number: randomData(),
            },
            {
                code: 110116,
                area: '怀柔区',
                number: randomData(),
            },
            {
                code: 110117,
                area: '平谷区',
                number: randomData(),
            },
            {
                code: 110118,
                area: '密云区',
                number: randomData(),
            },
            {
                code: 110119,
                area: '延庆区',
                number: randomData(),
            },
            {
                code: 120101,
                area: '和平区',
                number: randomData(),
            },
            {
                code: 120102,
                area: '河东区',
                number: randomData(),
            },
            {
                code: 120103,
                area: '河西区',
                number: randomData(),
            },
            {
                code: 120104,
                area: '南开区',
                number: randomData(),
            },
            {
                code: 120105,
                area: '河北区',
                number: randomData(),
            },
            {
                code: 120106,
                area: '红桥区',
                number: randomData(),
            },
            {
                code: 120110,
                area: '东丽区',
                number: randomData(),
            },
            {
                code: 120111,
                area: '西青区',
                number: randomData(),
            },
            {
                code: 120112,
                area: '津南区',
                number: randomData(),
            },
            {
                code: 120113,
                area: '北辰区',
                number: randomData(),
            },
            {
                code: 120114,
                area: '武清区',
                number: randomData(),
            },
            {
                code: 120115,
                area: '宝坻区',
                number: randomData(),
            },
            {
                code: 120116,
                area: '滨海新区',
                number: randomData(),
            },
            {
                code: 120117,
                area: '宁河区',
                number: randomData(),
            },
            {
                code: 120118,
                area: '静海区',
                number: randomData(),
            },
            {
                code: 120119,
                area: '蓟州区',
                number: randomData(),
            },
            {
                code: 130100,
                area: '石家庄市',
                number: randomData(),
            },
            {
                code: 130200,
                area: '唐山市',
                number: randomData(),
            },
            {
                code: 130300,
                area: '秦皇岛市',
                number: randomData(),
            },
            {
                code: 130400,
                area: '邯郸市',
                number: randomData(),
            },
            {
                code: 130500,
                area: '邢台市',
                number: randomData(),
            },
            {
                code: 130600,
                area: '保定市',
                number: randomData(),
            },
            {
                code: 130700,
                area: '张家口市',
                number: randomData(),
            },
            {
                code: 130800,
                area: '承德市',
                number: randomData(),
            },
            {
                code: 130900,
                area: '沧州市',
                number: randomData(),
            },
            {
                code: 131000,
                area: '廊坊市',
                number: randomData(),
            },
            {
                code: 131100,
                area: '衡水市',
                number: randomData(),
            },
            {
                code: 140100,
                area: '太原市',
                number: randomData(),
            },
            {
                code: 140200,
                area: '大同市',
                number: randomData(),
            },
            {
                code: 140300,
                area: '阳泉市',
                number: randomData(),
            },
            {
                code: 140400,
                area: '长治市',
                number: randomData(),
            },
            {
                code: 140500,
                area: '晋城市',
                number: randomData(),
            },
            {
                code: 140600,
                area: '朔州市',
                number: randomData(),
            },
            {
                code: 140700,
                area: '晋中市',
                number: randomData(),
            },
            {
                code: 140800,
                area: '运城市',
                number: randomData(),
            },
            {
                code: 140900,
                area: '忻州市',
                number: randomData(),
            },
            {
                code: 141000,
                area: '临汾市',
                number: randomData(),
            },
            {
                code: 141100,
                area: '吕梁市',
                number: randomData(),
            },
            {
                code: 150100,
                area: '呼和浩特市',
                number: randomData(),
            },
            {
                code: 150200,
                area: '包头市',
                number: randomData(),
            },
            {
                code: 150300,
                area: '乌海市',
                number: randomData(),
            },
            {
                code: 150400,
                area: '赤峰市',
                number: randomData(),
            },
            {
                code: 150500,
                area: '通辽市',
                number: randomData(),
            },
            {
                code: 150600,
                area: '鄂尔多斯市',
                number: randomData(),
            },
            {
                code: 150700,
                area: '呼伦贝尔市',
                number: randomData(),
            },
            {
                code: 150800,
                area: '巴彦淖尔市',
                number: randomData(),
            },
            {
                code: 150900,
                area: '乌兰察布市',
                number: randomData(),
            },
            {
                code: 152200,
                area: '兴安盟',
                number: randomData(),
            },
            {
                code: 152500,
                area: '锡林郭勒盟',
                number: randomData(),
            },
            {
                code: 152900,
                area: '阿拉善盟',
                number: randomData(),
            },
            {
                code: 210100,
                area: '沈阳市',
                number: randomData(),
            },
            {
                code: 210200,
                area: '大连市',
                number: randomData(),
            },
            {
                code: 210300,
                area: '鞍山市',
                number: randomData(),
            },
            {
                code: 210400,
                area: '抚顺市',
                number: randomData(),
            },
            {
                code: 210500,
                area: '本溪市',
                number: randomData(),
            },
            {
                code: 210600,
                area: '丹东市',
                number: randomData(),
            },
            {
                code: 210700,
                area: '锦州市',
                number: randomData(),
            },
            {
                code: 210800,
                area: '营口市',
                number: randomData(),
            },
            {
                code: 210900,
                area: '阜新市',
                number: randomData(),
            },
            {
                code: 211000,
                area: '辽阳市',
                number: randomData(),
            },
            {
                code: 211100,
                area: '盘锦市',
                number: randomData(),
            },
            {
                code: 211200,
                area: '铁岭市',
                number: randomData(),
            },
            {
                code: 211300,
                area: '朝阳市',
                number: randomData(),
            },
            {
                code: 211400,
                area: '葫芦岛市',
                number: randomData(),
            },
            {
                code: 220100,
                area: '长春市',
                number: randomData(),
            },
            {
                code: 220200,
                area: '吉林市',
                number: randomData(),
            },
            {
                code: 220300,
                area: '四平市',
                number: randomData(),
            },
            {
                code: 220400,
                area: '辽源市',
                number: randomData(),
            },
            {
                code: 220500,
                area: '通化市',
                number: randomData(),
            },
            {
                code: 220600,
                area: '白山市',
                number: randomData(),
            },
            {
                code: 220700,
                area: '松原市',
                number: randomData(),
            },
            {
                code: 220800,
                area: '白城市',
                number: randomData(),
            },
            {
                code: 222400,
                area: '延边朝鲜族自治州',
                number: randomData(),
            },
            {
                code: 230100,
                area: '哈尔滨市',
                number: randomData(),
            },
            {
                code: 230200,
                area: '齐齐哈尔市',
                number: randomData(),
            },
            {
                code: 230300,
                area: '鸡西市',
                number: randomData(),
            },
            {
                code: 230400,
                area: '鹤岗市',
                number: randomData(),
            },
            {
                code: 230500,
                area: '双鸭山市',
                number: randomData(),
            },
            {
                code: 230600,
                area: '大庆市',
                number: randomData(),
            },
            {
                code: 230700,
                area: '伊春市',
                number: randomData(),
            },
            {
                code: 230800,
                area: '佳木斯市',
                number: randomData(),
            },
            {
                code: 230900,
                area: '七台河市',
                number: randomData(),
            },
            {
                code: 231000,
                area: '牡丹江市',
                number: randomData(),
            },
            {
                code: 231100,
                area: '黑河市',
                number: randomData(),
            },
            {
                code: 231200,
                area: '绥化市',
                number: randomData(),
            },
            {
                code: 232700,
                area: '大兴安岭地区',
                number: randomData(),
            },
            {
                code: 310101,
                area: '黄浦区',
                number: randomData(),
            },
            {
                code: 310104,
                area: '徐汇区',
                number: randomData(),
            },
            {
                code: 310105,
                area: '长宁区',
                number: randomData(),
            },
            {
                code: 310106,
                area: '静安区',
                number: randomData(),
            },
            {
                code: 310107,
                area: '普陀区',
                number: randomData(),
            },
            {
                code: 310109,
                area: '虹口区',
                number: randomData(),
            },
            {
                code: 310110,
                area: '杨浦区',
                number: randomData(),
            },
            {
                code: 310112,
                area: '闵行区',
                number: randomData(),
            },
            {
                code: 310113,
                area: '宝山区',
                number: randomData(),
            },
            {
                code: 310114,
                area: '嘉定区',
                number: randomData(),
            },
            {
                code: 310115,
                area: '浦东新区',
                number: randomData(),
            },
            {
                code: 310116,
                area: '金山区',
                number: randomData(),
            },
            {
                code: 310117,
                area: '松江区',
                number: randomData(),
            },
            {
                code: 310118,
                area: '青浦区',
                number: randomData(),
            },
            {
                code: 310120,
                area: '奉贤区',
                number: randomData(),
            },
            {
                code: 310151,
                area: '崇明区',
                number: randomData(),
            },
            {
                code: 320100,
                area: '南京市',
                number: randomData(),
            },
            {
                code: 320200,
                area: '无锡市',
                number: randomData(),
            },
            {
                code: 320300,
                area: '徐州市',
                number: randomData(),
            },
            {
                code: 320400,
                area: '常州市',
                number: randomData(),
            },
            {
                code: 320500,
                area: '苏州市',
                number: randomData(),
            },
            {
                code: 320600,
                area: '南通市',
                number: randomData(),
            },
            {
                code: 320700,
                area: '连云港市',
                number: randomData(),
            },
            {
                code: 320800,
                area: '淮安市',
                number: randomData(),
            },
            {
                code: 320900,
                area: '盐城市',
                number: randomData(),
            },
            {
                code: 321000,
                area: '扬州市',
                number: randomData(),
            },
            {
                code: 321100,
                area: '镇江市',
                number: randomData(),
            },
            {
                code: 321200,
                area: '泰州市',
                number: randomData(),
            },
            {
                code: 321300,
                area: '宿迁市',
                number: randomData(),
            },
            {
                code: 330100,
                area: '杭州市',
                number: randomData(),
            },
            {
                code: 330200,
                area: '宁波市',
                number: randomData(),
            },
            {
                code: 330300,
                area: '温州市',
                number: randomData(),
            },
            {
                code: 330400,
                area: '嘉兴市',
                number: randomData(),
            },
            {
                code: 330500,
                area: '湖州市',
                number: randomData(),
            },
            {
                code: 330600,
                area: '绍兴市',
                number: randomData(),
            },
            {
                code: 330700,
                area: '金华市',
                number: randomData(),
            },
            {
                code: 330800,
                area: '衢州市',
                number: randomData(),
            },
            {
                code: 330900,
                area: '舟山市',
                number: randomData(),
            },
            {
                code: 331000,
                area: '台州市',
                number: randomData(),
            },
            {
                code: 331100,
                area: '丽水市',
                number: randomData(),
            },
            {
                code: 340100,
                area: '合肥市',
                number: randomData(),
            },
            {
                code: 340200,
                area: '芜湖市',
                number: randomData(),
            },
            {
                code: 340300,
                area: '蚌埠市',
                number: randomData(),
            },
            {
                code: 340400,
                area: '淮南市',
                number: randomData(),
            },
            {
                code: 340500,
                area: '马鞍山市',
                number: randomData(),
            },
            {
                code: 340600,
                area: '淮北市',
                number: randomData(),
            },
            {
                code: 340700,
                area: '铜陵市',
                number: randomData(),
            },
            {
                code: 340800,
                area: '安庆市',
                number: randomData(),
            },
            {
                code: 341000,
                area: '黄山市',
                number: randomData(),
            },
            {
                code: 341100,
                area: '滁州市',
                number: randomData(),
            },
            {
                code: 341200,
                area: '阜阳市',
                number: randomData(),
            },
            {
                code: 341300,
                area: '宿州市',
                number: randomData(),
            },
            {
                code: 341500,
                area: '六安市',
                number: randomData(),
            },
            {
                code: 341600,
                area: '亳州市',
                number: randomData(),
            },
            {
                code: 341700,
                area: '池州市',
                number: randomData(),
            },
            {
                code: 341800,
                area: '宣城市',
                number: randomData(),
            },
            {
                code: 350100,
                area: '福州市',
                number: randomData(),
            },
            {
                code: 350200,
                area: '厦门市',
                number: randomData(),
            },
            {
                code: 350300,
                area: '莆田市',
                number: randomData(),
            },
            {
                code: 350400,
                area: '三明市',
                number: randomData(),
            },
            {
                code: 350500,
                area: '泉州市',
                number: randomData(),
            },
            {
                code: 350600,
                area: '漳州市',
                number: randomData(),
            },
            {
                code: 350700,
                area: '南平市',
                number: randomData(),
            },
            {
                code: 350800,
                area: '龙岩市',
                number: randomData(),
            },
            {
                code: 350900,
                area: '宁德市',
                number: randomData(),
            },
            {
                code: 360100,
                area: '南昌市',
                number: randomData(),
            },
            {
                code: 360200,
                area: '景德镇市',
                number: randomData(),
            },
            {
                code: 360300,
                area: '萍乡市',
                number: randomData(),
            },
            {
                code: 360400,
                area: '九江市',
                number: randomData(),
            },
            {
                code: 360500,
                area: '新余市',
                number: randomData(),
            },
            {
                code: 360600,
                area: '鹰潭市',
                number: randomData(),
            },
            {
                code: 360700,
                area: '赣州市',
                number: randomData(),
            },
            {
                code: 360800,
                area: '吉安市',
                number: randomData(),
            },
            {
                code: 360900,
                area: '宜春市',
                number: randomData(),
            },
            {
                code: 361000,
                area: '抚州市',
                number: randomData(),
            },
            {
                code: 361100,
                area: '上饶市',
                number: randomData(),
            },
            {
                code: 370100,
                area: '济南市',
                number: randomData(),
            },
            {
                code: 370200,
                area: '青岛市',
                number: randomData(),
            },
            {
                code: 370300,
                area: '淄博市',
                number: randomData(),
            },
            {
                code: 370400,
                area: '枣庄市',
                number: randomData(),
            },
            {
                code: 370500,
                area: '东营市',
                number: randomData(),
            },
            {
                code: 370600,
                area: '烟台市',
                number: randomData(),
            },
            {
                code: 370700,
                area: '潍坊市',
                number: randomData(),
            },
            {
                code: 370800,
                area: '济宁市',
                number: randomData(),
            },
            {
                code: 370900,
                area: '泰安市',
                number: randomData(),
            },
            {
                code: 371000,
                area: '威海市',
                number: randomData(),
            },
            {
                code: 371100,
                area: '日照市',
                number: randomData(),
            },
            {
                code: 371200,
                area: '莱芜市',
                number: randomData(),
            },
            {
                code: 371300,
                area: '临沂市',
                number: randomData(),
            },
            {
                code: 371400,
                area: '德州市',
                number: randomData(),
            },
            {
                code: 371500,
                area: '聊城市',
                number: randomData(),
            },
            {
                code: 371600,
                area: '滨州市',
                number: randomData(),
            },
            {
                code: 371700,
                area: '菏泽市',
                number: randomData(),
            },
            {
                code: 410100,
                area: '郑州市',
                number: randomData(),
            },
            {
                code: 410200,
                area: '开封市',
                number: randomData(),
            },
            {
                code: 410300,
                area: '洛阳市',
                number: randomData(),
            },
            {
                code: 410400,
                area: '平顶山市',
                number: randomData(),
            },
            {
                code: 410500,
                area: '安阳市',
                number: randomData(),
            },
            {
                code: 410600,
                area: '鹤壁市',
                number: randomData(),
            },
            {
                code: 410700,
                area: '新乡市',
                number: randomData(),
            },
            {
                code: 410800,
                area: '焦作市',
                number: randomData(),
            },
            {
                code: 419001,
                area: '济源市',
                number: randomData(),
            },
            {
                code: 410900,
                area: '濮阳市',
                number: randomData(),
            },
            {
                code: 411000,
                area: '许昌市',
                number: randomData(),
            },
            {
                code: 411100,
                area: '漯河市',
                number: randomData(),
            },
            {
                code: 411200,
                area: '三门峡市',
                number: randomData(),
            },
            {
                code: 411300,
                area: '南阳市',
                number: randomData(),
            },
            {
                code: 411400,
                area: '商丘市',
                number: randomData(),
            },
            {
                code: 411500,
                area: '信阳市',
                number: randomData(),
            },
            {
                code: 411600,
                area: '周口市',
                number: randomData(),
            },
            {
                code: 411700,
                area: '驻马店市',
                number: randomData(),
            },
            {
                code: 420100,
                area: '武汉市',
                number: randomData(),
            },
            {
                code: 420200,
                area: '黄石市',
                number: randomData(),
            },
            {
                code: 420300,
                area: '十堰市',
                number: randomData(),
            },
            {
                code: 420500,
                area: '宜昌市',
                number: randomData(),
            },
            {
                code: 420600,
                area: '襄阳市',
                number: randomData(),
            },
            {
                code: 420700,
                area: '鄂州市',
                number: randomData(),
            },
            {
                code: 420800,
                area: '荆门市',
                number: randomData(),
            },
            {
                code: 420900,
                area: '孝感市',
                number: randomData(),
            },
            {
                code: 421000,
                area: '荆州市',
                number: randomData(),
            },
            {
                code: 421100,
                area: '黄冈市',
                number: randomData(),
            },
            {
                code: 421200,
                area: '咸宁市',
                number: randomData(),
            },
            {
                code: 421300,
                area: '随州市',
                number: randomData(),
            },
            {
                code: 422800,
                area: '恩施土家族苗族自治州',
                number: randomData(),
            },
            {
                code: 429004,
                area: '仙桃市',
                number: randomData(),
            },
            {
                code: 429005,
                area: '潜江市',
                number: randomData(),
            },
            {
                code: 429006,
                area: '天门市',
                number: randomData(),
            },
            {
                code: 429021,
                area: '神农架林区',
                number: randomData(),
            },
            {
                code: 430100,
                area: '长沙市',
                number: randomData(),
            },
            {
                code: 430200,
                area: '株洲市',
                number: randomData(),
            },
            {
                code: 430300,
                area: '湘潭市',
                number: randomData(),
            },
            {
                code: 430400,
                area: '衡阳市',
                number: randomData(),
            },
            {
                code: 430500,
                area: '邵阳市',
                number: randomData(),
            },
            {
                code: 430600,
                area: '岳阳市',
                number: randomData(),
            },
            {
                code: 430700,
                area: '常德市',
                number: randomData(),
            },
            {
                code: 430800,
                area: '张家界市',
                number: randomData(),
            },
            {
                code: 430900,
                area: '益阳市',
                number: randomData(),
            },
            {
                code: 431000,
                area: '郴州市',
                number: randomData(),
            },
            {
                code: 431100,
                area: '永州市',
                number: randomData(),
            },
            {
                code: 431200,
                area: '怀化市',
                number: randomData(),
            },
            {
                code: 431300,
                area: '娄底市',
                number: randomData(),
            },
            {
                code: 433100,
                area: '湘西土家族苗族自治州',
                number: randomData(),
            },
            {
                code: 440100,
                area: '广州市',
                number: randomData(),
            },
            {
                code: 440200,
                area: '韶关市',
                number: randomData(),
            },
            {
                code: 440300,
                area: '深圳市',
                number: randomData(),
            },
            {
                code: 440400,
                area: '珠海市',
                number: randomData(),
            },
            {
                code: 440500,
                area: '汕头市',
                number: randomData(),
            },
            {
                code: 440600,
                area: '佛山市',
                number: randomData(),
            },
            {
                code: 440700,
                area: '江门市',
                number: randomData(),
            },
            {
                code: 440800,
                area: '湛江市',
                number: randomData(),
            },
            {
                code: 440900,
                area: '茂名市',
                number: randomData(),
            },
            {
                code: 441200,
                area: '肇庆市',
                number: randomData(),
            },
            {
                code: 441300,
                area: '惠州市',
                number: randomData(),
            },
            {
                code: 441400,
                area: '梅州市',
                number: randomData(),
            },
            {
                code: 441500,
                area: '汕尾市',
                number: randomData(),
            },
            {
                code: 441600,
                area: '河源市',
                number: randomData(),
            },
            {
                code: 441700,
                area: '阳江市',
                number: randomData(),
            },
            {
                code: 441800,
                area: '清远市',
                number: randomData(),
            },
            {
                code: 441900,
                area: '东莞市',
                number: randomData(),
            },
            {
                code: 442000,
                area: '中山市',
                number: randomData(),
            },
            {
                code: 442101,
                area: '东沙群岛',
                number: randomData(),
            },
            {
                code: 445100,
                area: '潮州市',
                number: randomData(),
            },
            {
                code: 445200,
                area: '揭阳市',
                number: randomData(),
            },
            {
                code: 445300,
                area: '云浮市',
                number: randomData(),
            },
            {
                code: 450100,
                area: '南宁市',
                number: randomData(),
            },
            {
                code: 450200,
                area: '柳州市',
                number: randomData(),
            },
            {
                code: 450300,
                area: '桂林市',
                number: randomData(),
            },
            {
                code: 450400,
                area: '梧州市',
                number: randomData(),
            },
            {
                code: 450500,
                area: '北海市',
                number: randomData(),
            },
            {
                code: 450600,
                area: '防城港市',
                number: randomData(),
            },
            {
                code: 450700,
                area: '钦州市',
                number: randomData(),
            },
            {
                code: 450800,
                area: '贵港市',
                number: randomData(),
            },
            {
                code: 450900,
                area: '玉林市',
                number: randomData(),
            },
            {
                code: 451000,
                area: '百色市',
                number: randomData(),
            },
            {
                code: 451100,
                area: '贺州市',
                number: randomData(),
            },
            {
                code: 451200,
                area: '河池市',
                number: randomData(),
            },
            {
                code: 451300,
                area: '来宾市',
                number: randomData(),
            },
            {
                code: 451400,
                area: '崇左市',
                number: randomData(),
            },
            {
                code: 460100,
                area: '海口市',
                number: randomData(),
            },
            {
                code: 460200,
                area: '三亚市',
                number: randomData(),
            },
            {
                code: 460300,
                area: '三沙市',
                number: randomData(),
            },
            {
                code: 469001,
                area: '五指山市',
                number: randomData(),
            },
            {
                code: 469002,
                area: '琼海市',
                number: randomData(),
            },
            {
                code: 460400,
                area: '儋州市',
                number: randomData(),
            },
            {
                code: 469005,
                area: '文昌市',
                number: randomData(),
            },
            {
                code: 469006,
                area: '万宁市',
                number: randomData(),
            },
            {
                code: 469007,
                area: '东方市',
                number: randomData(),
            },
            {
                code: 469021,
                area: '定安县',
                number: randomData(),
            },
            {
                code: 469022,
                area: '屯昌县',
                number: randomData(),
            },
            {
                code: 469023,
                area: '澄迈县',
                number: randomData(),
            },
            {
                code: 469024,
                area: '临高县',
                number: randomData(),
            },
            {
                code: 469025,
                area: '白沙黎族自治县',
                number: randomData(),
            },
            {
                code: 469026,
                area: '昌江黎族自治县',
                number: randomData(),
            },
            {
                code: 469027,
                area: '乐东黎族自治县',
                number: randomData(),
            },
            {
                code: 469028,
                area: '陵水黎族自治县',
                number: randomData(),
            },
            {
                code: 469029,
                area: '保亭黎族苗族自治县',
                number: randomData(),
            },
            {
                code: 469030,
                area: '琼中黎族苗族自治县',
                number: randomData(),
            },
            {
                code: 500101,
                area: '万州区',
                number: randomData(),
            },
            {
                code: 500102,
                area: '涪陵区',
                number: randomData(),
            },
            {
                code: 500103,
                area: '渝中区',
                number: randomData(),
            },
            {
                code: 500104,
                area: '大渡口区',
                number: randomData(),
            },
            {
                code: 500105,
                area: '江北区',
                number: randomData(),
            },
            {
                code: 500106,
                area: '沙坪坝区',
                number: randomData(),
            },
            {
                code: 500107,
                area: '九龙坡区',
                number: randomData(),
            },
            {
                code: 500108,
                area: '南岸区',
                number: randomData(),
            },
            {
                code: 500109,
                area: '北碚区',
                number: randomData(),
            },
            {
                code: 500112,
                area: '渝北区',
                number: randomData(),
            },
            {
                code: 500113,
                area: '巴南区',
                number: randomData(),
            },
            {
                code: 500114,
                area: '黔江区',
                number: randomData(),
            },
            {
                code: 500115,
                area: '长寿区',
                number: randomData(),
            },
            {
                code: 500110,
                area: '綦江区',
                number: randomData(),
            },
            {
                code: 500152,
                area: '潼南区',
                number: randomData(),
            },
            {
                code: 500151,
                area: '铜梁区',
                number: randomData(),
            },
            {
                code: 500111,
                area: '大足区',
                number: randomData(),
            },
            {
                code: 500153,
                area: '荣昌区',
                number: randomData(),
            },
            {
                code: 500120,
                area: '璧山区',
                number: randomData(),
            },
            {
                code: 500155,
                area: '梁平区',
                number: randomData(),
            },
            {
                code: 500229,
                area: '城口县',
                number: randomData(),
            },
            {
                code: 500230,
                area: '丰都县',
                number: randomData(),
            },
            {
                code: 500231,
                area: '垫江县',
                number: randomData(),
            },
            {
                code: 500156,
                area: '武隆区',
                number: randomData(),
            },
            {
                code: 500233,
                area: '忠县',
                number: randomData(),
            },
            {
                code: 500154,
                area: '开州区',
                number: randomData(),
            },
            {
                code: 500235,
                area: '云阳县',
                number: randomData(),
            },
            {
                code: 500236,
                area: '奉节县',
                number: randomData(),
            },
            {
                code: 500237,
                area: '巫山县',
                number: randomData(),
            },
            {
                code: 500238,
                area: '巫溪县',
                number: randomData(),
            },
            {
                code: 500240,
                area: '石柱土家族自治县',
                number: randomData(),
            },
            {
                code: 500241,
                area: '秀山土家族苗族自治县',
                number: randomData(),
            },
            {
                code: 500242,
                area: '酉阳土家族苗族自治县',
                number: randomData(),
            },
            {
                code: 500243,
                area: '彭水苗族土家族自治县',
                number: randomData(),
            },
            {
                code: 500116,
                area: '江津区',
                number: randomData(),
            },
            {
                code: 500117,
                area: '合川区',
                number: randomData(),
            },
            {
                code: 500118,
                area: '永川区',
                number: randomData(),
            },
            {
                code: 500119,
                area: '南川区',
                number: randomData(),
            },
            {
                code: 510100,
                area: '成都市',
                number: randomData(),
            },
            {
                code: 510300,
                area: '自贡市',
                number: randomData(),
            },
            {
                code: 510400,
                area: '攀枝花市',
                number: randomData(),
            },
            {
                code: 510500,
                area: '泸州市',
                number: randomData(),
            },
            {
                code: 510600,
                area: '德阳市',
                number: randomData(),
            },
            {
                code: 510700,
                area: '绵阳市',
                number: randomData(),
            },
            {
                code: 510800,
                area: '广元市',
                number: randomData(),
            },
            {
                code: 510900,
                area: '遂宁市',
                number: randomData(),
            },
            {
                code: 511000,
                area: '内江市',
                number: randomData(),
            },
            {
                code: 511100,
                area: '乐山市',
                number: randomData(),
            },
            {
                code: 511300,
                area: '南充市',
                number: randomData(),
            },
            {
                code: 511400,
                area: '眉山市',
                number: randomData(),
            },
            {
                code: 511500,
                area: '宜宾市',
                number: randomData(),
            },
            {
                code: 511600,
                area: '广安市',
                number: randomData(),
            },
            {
                code: 511700,
                area: '达州市',
                number: randomData(),
            },
            {
                code: 511800,
                area: '雅安市',
                number: randomData(),
            },
            {
                code: 511900,
                area: '巴中市',
                number: randomData(),
            },
            {
                code: 512000,
                area: '资阳市',
                number: randomData(),
            },
            {
                code: 513200,
                area: '阿坝藏族羌族自治州',
                number: randomData(),
            },
            {
                code: 513300,
                area: '甘孜藏族自治州',
                number: randomData(),
            },
            {
                code: 513400,
                area: '凉山彝族自治州',
                number: randomData(),
            },
            {
                code: 520100,
                area: '贵阳市',
                number: randomData(),
            },
            {
                code: 520200,
                area: '六盘水市',
                number: randomData(),
            },
            {
                code: 520300,
                area: '遵义市',
                number: randomData(),
            },
            {
                code: 520400,
                area: '安顺市',
                number: randomData(),
            },
            {
                code: 520600,
                area: '铜仁市',
                number: randomData(),
            },
            {
                code: 522300,
                area: '黔西南布依族苗族自治州',
                number: randomData(),
            },
            {
                code: 520500,
                area: '毕节市',
                number: randomData(),
            },
            {
                code: 522600,
                area: '黔东南苗族侗族自治州',
                number: randomData(),
            },
            {
                code: 522700,
                area: '黔南布依族苗族自治州',
                number: randomData(),
            },
            {
                code: 530100,
                area: '昆明市',
                number: randomData(),
            },
            {
                code: 530300,
                area: '曲靖市',
                number: randomData(),
            },
            {
                code: 530400,
                area: '玉溪市',
                number: randomData(),
            },
            {
                code: 530500,
                area: '保山市',
                number: randomData(),
            },
            {
                code: 530600,
                area: '昭通市',
                number: randomData(),
            },
            {
                code: 530700,
                area: '丽江市',
                number: randomData(),
            },
            {
                code: 530800,
                area: '普洱市',
                number: randomData(),
            },
            {
                code: 530900,
                area: '临沧市',
                number: randomData(),
            },
            {
                code: 532300,
                area: '楚雄彝族自治州',
                number: randomData(),
            },
            {
                code: 532500,
                area: '红河哈尼族彝族自治州',
                number: randomData(),
            },
            {
                code: 532600,
                area: '文山壮族苗族自治州',
                number: randomData(),
            },
            {
                code: 532800,
                area: '西双版纳傣族自治州',
                number: randomData(),
            },
            {
                code: 532900,
                area: '大理白族自治州',
                number: randomData(),
            },
            {
                code: 533100,
                area: '德宏傣族景颇族自治州',
                number: randomData(),
            },
            {
                code: 533300,
                area: '怒江傈僳族自治州',
                number: randomData(),
            },
            {
                code: 533400,
                area: '迪庆藏族自治州',
                number: randomData(),
            },
            {
                code: 540100,
                area: '拉萨市',
                number: randomData(),
            },
            {
                code: 540300,
                area: '昌都市',
                number: randomData(),
            },
            {
                code: 540500,
                area: '山南市',
                number: randomData(),
            },
            {
                code: 540200,
                area: '日喀则市',
                number: randomData(),
            },
            {
                code: 540600,
                area: '那曲市',
                number: randomData(),
            },
            {
                code: 542500,
                area: '阿里地区',
                number: randomData(),
            },
            {
                code: 540400,
                area: '林芝市',
                number: randomData(),
            },
            {
                code: 610100,
                area: '西安市',
                number: randomData(),
            },
            {
                code: 610200,
                area: '铜川市',
                number: randomData(),
            },
            {
                code: 610300,
                area: '宝鸡市',
                number: randomData(),
            },
            {
                code: 610400,
                area: '咸阳市',
                number: randomData(),
            },
            {
                code: 610500,
                area: '渭南市',
                number: randomData(),
            },
            {
                code: 610600,
                area: '延安市',
                number: randomData(),
            },
            {
                code: 610700,
                area: '汉中市',
                number: randomData(),
            },
            {
                code: 610800,
                area: '榆林市',
                number: randomData(),
            },
            {
                code: 610900,
                area: '安康市',
                number: randomData(),
            },
            {
                code: 611000,
                area: '商洛市',
                number: randomData(),
            },
            {
                code: 620100,
                area: '兰州市',
                number: randomData(),
            },
            {
                code: 620200,
                area: '嘉峪关市',
                number: randomData(),
            },
            {
                code: 620300,
                area: '金昌市',
                number: randomData(),
            },
            {
                code: 620400,
                area: '白银市',
                number: randomData(),
            },
            {
                code: 620500,
                area: '天水市',
                number: randomData(),
            },
            {
                code: 620600,
                area: '武威市',
                number: randomData(),
            },
            {
                code: 620700,
                area: '张掖市',
                number: randomData(),
            },
            {
                code: 620800,
                area: '平凉市',
                number: randomData(),
            },
            {
                code: 620900,
                area: '酒泉市',
                number: randomData(),
            },
            {
                code: 621000,
                area: '庆阳市',
                number: randomData(),
            },
            {
                code: 621100,
                area: '定西市',
                number: randomData(),
            },
            {
                code: 621200,
                area: '陇南市',
                number: randomData(),
            },
            {
                code: 622900,
                area: '临夏回族自治州',
                number: randomData(),
            },
            {
                code: 623000,
                area: '甘南藏族自治州',
                number: randomData(),
            },
            {
                code: 630100,
                area: '西宁市',
                number: randomData(),
            },
            {
                code: 630200,
                area: '海东市',
                number: randomData(),
            },
            {
                code: 632200,
                area: '海北藏族自治州',
                number: randomData(),
            },
            {
                code: 632300,
                area: '黄南藏族自治州',
                number: randomData(),
            },
            {
                code: 632500,
                area: '海南藏族自治州',
                number: randomData(),
            },
            {
                code: 632600,
                area: '果洛藏族自治州',
                number: randomData(),
            },
            {
                code: 632700,
                area: '玉树藏族自治州',
                number: randomData(),
            },
            {
                code: 632800,
                area: '海西蒙古族藏族自治州',
                number: randomData(),
            },
            {
                code: 640100,
                area: '银川市',
                number: randomData(),
            },
            {
                code: 640200,
                area: '石嘴山市',
                number: randomData(),
            },
            {
                code: 640300,
                area: '吴忠市',
                number: randomData(),
            },
            {
                code: 640400,
                area: '固原市',
                number: randomData(),
            },
            {
                code: 640500,
                area: '中卫市',
                number: randomData(),
            },
            {
                code: 650100,
                area: '乌鲁木齐市',
                number: randomData(),
            },
            {
                code: 650200,
                area: '克拉玛依市',
                number: randomData(),
            },
            {
                code: 650400,
                area: '吐鲁番市',
                number: randomData(),
            },
            {
                code: 650500,
                area: '哈密市',
                number: randomData(),
            },
            {
                code: 652300,
                area: '昌吉回族自治州',
                number: randomData(),
            },
            {
                code: 652700,
                area: '博尔塔拉蒙古自治州',
                number: randomData(),
            },
            {
                code: 652800,
                area: '巴音郭楞蒙古自治州',
                number: randomData(),
            },
            {
                code: 652900,
                area: '阿克苏地区',
                number: randomData(),
            },
            {
                code: 653000,
                area: '克孜勒苏柯尔克孜自治州',
                number: randomData(),
            },
            {
                code: 653100,
                area: '喀什地区',
                number: randomData(),
            },
            {
                code: 653200,
                area: '和田地区',
                number: randomData(),
            },
            {
                code: 654000,
                area: '伊犁哈萨克自治州',
                number: randomData(),
            },
            {
                code: 654200,
                area: '塔城地区',
                number: randomData(),
            },
            {
                code: 654300,
                area: '阿勒泰地区',
                number: randomData(),
            },
            {
                code: 659000,
                area: '可克达拉市',
                number: randomData(),
            },
            {
                code: 659001,
                area: '石河子市',
                number: randomData(),
            },
            {
                code: 659002,
                area: '阿拉尔市',
                number: randomData(),
            },
            {
                code: 659003,
                area: '图木舒克市',
                number: randomData(),
            },
            {
                code: 659004,
                area: '五家渠市',
                number: randomData(),
            },
            {
                code: 659005,
                area: '北屯市',
                number: randomData(),
            },
            {
                code: 659006,
                area: '铁门关市',
                number: randomData(),
            },
            {
                code: 659007,
                area: '双河市',
                number: randomData(),
            },
            {
                code: 659009,
                area: '昆玉市',
                number: randomData(),
            },
            {
                code: 710100,
                area: '台北市',
                number: randomData(),
            },
            {
                code: 710200,
                area: '高雄市',
                number: randomData(),
            },
            {
                code: 710300,
                area: '台南市',
                number: randomData(),
            },
            {
                code: 710400,
                area: '台中市',
                number: randomData(),
            },
            {
                code: 710500,
                area: '金门县',
                number: randomData(),
            },
            {
                code: 710600,
                area: '南投县',
                number: randomData(),
            },
            {
                code: 710700,
                area: '基隆市',
                number: randomData(),
            },
            {
                code: 710800,
                area: '新竹市',
                number: randomData(),
            },
            {
                code: 710900,
                area: '嘉义市',
                number: randomData(),
            },
            {
                code: 711100,
                area: '新北市',
                number: randomData(),
            },
            {
                code: 711200,
                area: '宜兰县',
                number: randomData(),
            },
            {
                code: 711300,
                area: '新竹县',
                number: randomData(),
            },
            {
                code: 711400,
                area: '桃园市',
                number: randomData(),
            },
            {
                code: 711500,
                area: '苗栗县',
                number: randomData(),
            },
            {
                code: 711700,
                area: '彰化县',
                number: randomData(),
            },
            {
                code: 711900,
                area: '嘉义县',
                number: randomData(),
            },
            {
                code: 712100,
                area: '云林县',
                number: randomData(),
            },
            {
                code: 712400,
                area: '屏东县',
                number: randomData(),
            },
            {
                code: 712500,
                area: '台东县',
                number: randomData(),
            },
            {
                code: 712600,
                area: '花莲县',
                number: randomData(),
            },
            {
                code: 712700,
                area: '澎湖县',
                number: randomData(),
            },
            {
                code: 712800,
                area: '连江县',
                number: randomData(),
            },
            {
                code: 810100,
                area: '香港岛',
                number: randomData(),
            },
            {
                code: 810200,
                area: '九龙',
                number: randomData(),
            },
            {
                code: 810300,
                area: '新界',
                number: randomData(),
            },
            {
                code: 820100,
                area: '澳门半岛',
                number: randomData(),
            },
            {
                code: 820200,
                area: '离岛',
                number: randomData(),
            },
        ];
        item.map(function (i) {
            i.name = i.area;
            i.value = i.number;
            return i;
        });
        var name = params.name; //地区name
        var mapCode = provinces[name]; //地区的json数据
        loadMap(mapCode, name);
    } else {
        alert('该区域暂无数据');
    }
});

function randomData() {
    return Math.round(Math.random() * 2000);
}

$('.back').click(function () {
    window.location.reload();
});

function loadMap(mapCode, name) {
    $.get(mapCode, function (data) {
        if (data) {
            echarts.registerMap(name, data);
            var option = {
                title: {
                    text: '中国省-市 二级下钻',
                    left: 'center',
                },
                /**
                 * 你可以自定义样式
                 **/
                tooltip: {
                    formatter: function (params) {
                        return params.name + '<br>' + '视频数:' + params.data.number + '<br>';
                    },
                },
                visualMap: {
                    min: 0,
                    max: 2000,
                    left: 'left',
                    top: 'bottom',
                    text: ['高', '低'],
                    calculable: true,
                    // seriesIndex: [1],
                    inRange: {
                        color: ['white', 'red'],
                    },
                    show: true,
                },
                toolbox: {
                    show: true,
                    feature: {
                        saveAsImage: {
                            pixelRatio: 4,
                        },
                    },
                },
                series: [
                    {
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
                        // zoom: 1, //当前视角的缩放比例
                        // roam: true, //是否开启平游或缩放
                        // scaleLimit: { //滚轮缩放的极限控制
                        //     min: 1,
                        //     max: 2
                        // },
                        data: item,
                    },
                ],
            };
            myChart.setOption(option);
        } else {
            alert('无法加载该地图');
        }
    });
}
