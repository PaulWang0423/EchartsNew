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
                    { name: '潮州市', value: 1.269 }
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
var JD_ARR =[{province: '天津', locs: [{name:"JD_天津市武清区大王古庄镇京滨工业园复元道78号",value:[116.795284,39.559543,0]},{name:"JD_天津市北辰区陆路港装备产业园嘉民物流园",value:[117.326807,39.249050,0]},{name:"JD_天津市宁河区潘庄工业园区王庄村三维路向东1000米京东商城物流中心。（北门）",value:[117.816616,39.305959,0]},{name:"JD_天津市宁河区潘庄工业园区商超B个户清洁仓1号库",value:[117.826625,39.329858,0]},{name:"JD_天津市北辰区陆港二经路与陆港六纬路交叉口",value:[117.322165,39.244443,0]}]}, {province: '江苏', locs: [{name:"JD_江苏省苏州市昆山市花桥镇花集路632号",value:[121.071265,31.308021,0]},{name:"JD_江苏省镇江市句容市郭庄镇大花茂路协鑫二期7号库",value:[119.035824,31.805727,0]},{name:"JD_江苏省昆山市花桥镇鸡鸣塘南路516号",value:[121.109016,31.311197,0]},{name:"JD_江苏省苏州市昆山市陆家镇集福路300号普洛斯物流园 雀巢电商母婴仓",value:[121.078288,31.327894,0]},{name:"JD_江苏省昆山市淀山湖镇丁家浜路7号商超A个户清洁仓6号库 雀巢电商母婴仓",value:[121.006231,31.208662,0]},{name:"JD_昆山市鸡鸣塘南路花桥镇雀巢电商母婴仓516",value:[121.116621,31.312374,0]},{name:"JD_江苏省昆山市东城大道与横长泾路交界宇培物流园",value:[121.031687,31.428212,0]},{name:"JD_江苏省镇江市句容市郭庄镇小花茂协鑫物流园6号库",value:[119.020059,31.811212,0]}]}, {province: '广东', locs: [{name:"JD_广东省东莞市麻涌镇漳澎村一横路京东亚洲一号园区",value:[113.549502,23.008849,0]},{name:"JD_广东省东莞市大岭山镇第一产业集团东莞大岭山松湖物流园1号楼4层",value:[113.842223,22.899965,0]},{name:"JD_惠州市惠阳三和大道中建科技集团南100米嘉民产业工业园",value:[114.505714,22.887915,0]},{name:"JD_广东省广州市萝岗区开发大道1338号 骏鸿物流园京东商城",value:[113.515114,23.115645,0]},{name:"JD_东莞市麻涌镇漳澎村一横路京东亚洲一号园区亚一综合B仓4号库雀巢电商母婴仓",value:[113.549502,23.008849,0]},{name:"JD_广东省广州市黄埔区九龙镇中新知识城凤凰三横路89号京东商城九龙物流园  雀巢电商母婴仓",value:[113.497319,23.397373,0]},{name:"JD_惠州市惠阳区三和大道嘉民产业工业园雀巢电商母婴仓",value:[114.500110,22.885851,0]},{name:"JD_广东省东莞市麻涌镇漳澎村一横路京东亚洲一号园区亚一综合B仓6号库  雀巢电商母婴仓",value:[113.549502,23.008849,0]},{name:"JD_广州增城市新塘镇陈家林凤凰城园区（京东华南第三物流中心）进入园区门口直走第二个路口右转后再左转",value:[113.560225,23.128099,0]},{name:"JD_广东省东莞市大岭山镇第一产业集团东莞大岭山松湖物流园2号楼1层",value:[113.842223,22.899965,0]}]}, {province: '四川', locs: [{name:"JD_四川省成都市双流区天工北一路京东天府亚洲一号物流园",value:[104.010171,30.590097,0]},{name:"JD_四川省成都市新都区兴城大道京东亚洲一号新都物流园9号库",value:[104.116714,30.805915,0]},{name:"JD_四川省德阳市广汉市新丰镇阳江路一段普洛斯物流园  雀巢电商母婴仓",value:[104.259523,30.950276,0]},{name:"JD_广汉市新丰镇阳江路1段3号普洛斯物流园",value:[104.259523,30.950276,0]}]}, {province: '湖北', locs: [{name:"JD_湖北省武汉市新洲区阳逻经济开发区京东大道亚一园区",value:[114.578276,30.734557,0]},{name:"JD_武汉市蔡甸区常福工业园常欢大道明阳科技一期工业园 食品母婴B2库",value:[114.066750,30.430125,0]},{name:"JD_湖北省武汉市新洲区阳逻经济开发区京东大道丰树园区武汉食品母婴仓A4库  雀巢电商母婴仓",value:[114.578276,30.734557,0]},{name:"JD_ 湖北省武汉市蔡甸区常福工业园常禄大道弗兰西蒂园区弗兰二期 B2202门（月台4-06））",value:[114.064417,30.431481,0]}]}, {province: '辽宁', locs: [{name:"JD_沈阳市浑南新区文溯街京东商城亚洲一号",value:[123.546442,41.735401,0]},{name:"JD_沈阳市浑南新区麦子屯文溯街16-7号亚洲一号京东商城（3号库）",value:[123.531258,41.745464,0]},{name:"JD_沈阳市浑南新区麦子屯文溯街16-7号亚洲一号京东商城（2号库）  雀巢电商母婴仓",value:[123.531258,41.745464,0]},{name:"JD_沈阳沈北新区冬雪湖街平安物流园",value:[123.476645,41.929824,0]}]}, {province: '陕西', locs: [{name:"JD_西安市高陵区耿镇利亨物流园4号库",value:[109.105562,34.436960,0]},{name:"JD_陕西省西安市灞桥区新筑镇潘骞路与维多利亚路交叉京东亚一园区3#库 雀巢电商母婴仓",value:[109.065855,34.382077,0]},{name:"JD_西安市高陵区耿镇利亨物流园4号库  雀巢电商母婴仓",value:[109.105562,34.436960,0]},{name:"JD_陕西省西安市高陵区耿镇东盈物流园",value:[109.103092,34.443008,0]}]}, {province: '山东', locs: [{name:"JD_山东省德州市齐河县晏北街道园区北路齐河经济开发区普洛斯园区",value:[116.838815,36.807921,0]},{name:"JD_山东省德州市齐河县经济开发区京东亚洲一号德州齐河电商产业园  雀巢电商母婴仓",value:[116.831250,36.756057,0]},{name:"JD_济南市济阳县崔寨镇宇陪物流园内",value:[117.112364,36.835319,0]},{name:"JD_山东省济南市济阳县崔寨镇宇培物流园5号库",value:[117.112364,36.835319,0]}]}, {province: '浙江', locs: [{name:"JD_浙江省杭州市富阳区东洲岛2号路京东商城(常深高速路路口)",value:[119.992396,30.009841,0]},{name:"JD_杭州市萧山区大江东产业聚集区万纬杭州大江东物流园2998号",value:[120.614380,30.275668,0]},{name:"JD_杭州市萧山区梅林大道新湾镇大恩数字物流港京东商城雀巢电商母婴仓",value:[120.574717,30.280589,0]},{name:"JD_浙江省杭州市富阳区东洲街道东桥路26号京东亚洲一号智能仓储物流基地",value:[120.071531,30.070058,0]}]}, {province: '河南', locs: [{name:"JD_河南省郑州市经济开发区国际物流园区京东亚一南区3号库2楼",value:[113.743171,34.721838,0]},{name:"JD_河南省郑州市经济开发区国际物流园区京东亚一南区4号库2楼  雀巢电商母婴仓",value:[113.743171,34.721838,0]},{name:"JD_郑州市中牟县万洪路与德方街交叉口向北200米路东河南殴凯汽车部件股份有限公司厂区内（2号库）",value:[114.017803,34.696980,0]}]}, {province: '河北', locs: [{name:"JD_河北省廊坊市固安县锦绣大道京东电子产业园二期四号库",value:[116.270336,39.455826,0]},{name:"JD_廊坊市锦绣大道固安县北开发区京东电子商务园二期",value:[116.264546,39.451512,0]}]}, {province: '北京', locs: [{name:"JD_北京顺义区大孙各庄镇龙塘路与七大路交叉口西南金牧草业  雀巢电商母婴仓",value:[116.917062,40.079040,0]},{name:"JD_北京市通州区张梁路与张凤路交叉路口张家湾镇南500米雀巢电商母婴仓",value:[116.722075,39.850249,0]},{name:"JD_北京中韩联合起重机械公司（北京市顺义区）",value:[116.763420,40.098075,0]}]}];
var Tmall_SM_ARR =[{province: '江西', locs: [{name:"Tmall_SM_江西省南昌市青山湖经开大道丰树物流园1库A门-雀巢电商母婴仓",value:[115.883289,28.734279,0]},{name:"Tmall_SM_江西省南昌市经开区江西省南昌市经开区经开大道丰树南昌物流园",value:[115.879081,28.796980,0]}]}, {province: '北京', locs: [{name:"Tmall_SM_北京市顺义区南法信顺达路安博北京首都机场第二物流中心2楼52门-雀巢电商母婴仓",value:[116.590768,40.126850,0]},{name:"Tmall_SM_北京北京顺义北京市顺义区顺达路8号安博北京首都机场第二物流中心",value:[116.602419,40.129257,0]}]}, {province: '浙江', locs: [{name:"Tmall_SM_浙江省金华市金东区鞋塘镇四海大道阿里巴巴菜鸟物流园E3库-雀巢电商母婴仓",value:[119.921587,29.240899,0]},{name:"Tmall_SM_浙江省杭州市萧山区临江开发区纬七路1717号丰树物流园A 2c-3-雀巢电商母婴仓",value:[120.610966,30.280006,0]},{name:"Tmall_SM_浙江省嘉兴市南湖区坊工路菜鸟网络物流园N2库4号门-雀巢电商母婴仓",value:[120.783025,30.747842,0]},{name:"Tmall_SM_浙江省嘉兴市平湖市独山港镇海兴路168号领盛物流园",value:[121.229256,30.697233,0]},{name:"Tmall_SM_浙江省嘉兴市南湖区花溪路嘉余线交叉口南菜鸟网络二期旁11库5号门",value:[120.791337,30.682403,0]},{name:"Tmall_SM_浙江省嘉兴市南湖区浙江省嘉兴市南湖区余新镇花溪路菜鸟物流园11号库",value:[120.809324,30.672285,0]},{name:"Tmall_SM_浙江省杭州市萧山浙江省杭州市萧山区纬七路南50米丰树物流园",value:[120.614440,30.280001,0]},{name:"Tmall_SM_浙江省金华市金东区金华市都市新区广渠街1号金华金义物流园（高德搜索浙江今飞摩轮有限公司）",value:[119.842759,29.202234,0]},{name:"Tmall_SM_浙江省绍兴市诸暨市浙江省绍兴市诸暨市陶朱街道万旺路16号大壹云仓",value:[120.215576,29.752300,0]}]}, {province: '湖南', locs: [{name:"Tmall_SM_湖南省长沙市望城区金桥路丰树长沙物流园一期A门-雀巢电商母婴仓",value:[112.843914,28.240931,0]},{name:"Tmall_SM_湖南省长沙市岳麓区湖南省长沙市岳麓区金桥路77号丰树长沙物流园",value:[112.848377,28.239500,0]}]}, {province: '四川', locs: [{name:"Tmall_SM_四川省成都市天府新区汽车城大道万纬成都天府物流园5号库01号门-雀巢电商母婴仓",value:[104.175003,30.523944,0]},{name:"Tmall_SM_四川省成都市双流区胜利镇牧华路一段666号菜鸟网络成都双流园区",value:[103.923348,30.516507,0]},{name:"Tmall_SM_四川省成都市双流区成都市双流县胜利镇牧华路一段666号菜鸟网络1号库",value:[103.923348,30.516507,0]}]}, {province: '广东', locs: [{name:"Tmall_SM_广东省江门市鹤山市沙坪镇莺朗村普洛斯物流园A1库12号门-雀巢电商母婴仓",value:[112.940201,22.762248,0]},{name:"Tmall_SM_广东省惠州市惠阳区秋湖路安博物流园4号库50号平台-雀巢电商母婴仓",value:[114.423909,22.782512,0]},{name:"Tmall_SM_广东省广州市增城沙宁路阿里巴巴物流园3号库2楼5号门-雀巢电商母婴仓",value:[113.660155,23.190379,0]},{name:"Tmall_SM_东莞市石排镇安博物流园1号库1号门",value:[113.940312,23.090291,0]},{name:"Tmall_SM_广东省东莞市石排镇广东省东莞市石排赤坎村石崇大道安博物流园内2号库",value:[113.960811,23.098122,0]},{name:"Tmall_SM_广东省广州市萝岗区广州市增城新塘镇沙宁路阿里巴巴物流园",value:[113.660155,23.190379,0]},{name:"Tmall_SM_广东省江门市鹤山沙坪镇广东省江门市鹤山沙坪镇莺朗村普洛斯物流园",value:[112.940201,22.762248,0]}]}, {province: '江苏', locs: [{name:"Tmall_SM_江苏省无锡市新吴区长江东路菜鸟网络无锡空港园区一期（南2门）-雀巢电商母婴仓",value:[120.411457,31.483672,0]},{name:"Tmall_SM_江苏省南京市溧水区沂湖路口维禹物流园A门-雀巢电商母婴仓",value:[118.959471,31.747958,0]},{name:"Tmall_SM_江苏省无锡市新吴区江苏省无锡市新吴区长江东路菜鸟网络无锡空港园区一期（南2门)",value:[120.411457,31.483672,0]},{name:"Tmall_SM_江苏省南京市溧水区江苏省南京市溧水区柘塘镇宁溧高新科技产业园区大路口范路沂湖",value:[119.026782,31.687935,0]}]}, {province: '重庆', locs: [{name:"Tmall_SM_重庆市渝北区木耳镇新乡村通宝路44号（非保税菜鸟园） N1库-雀巢电商母婴仓",value:[106.679847,29.795680,0]},{name:"Tmall_SM_重庆重庆市渝北区重庆渝北区木耳镇新乡村通宝路44号",value:[106.679847,29.795680,0]}]}, {province: '福建', locs: [{name:"Tmall_SM_福建省泉州市晋江市新塘园新城路8号菜鸟园区1号库12号门-雀巢电商母婴仓",value:[118.625569,24.763993,0]},{name:"Tmall_SM_福建省泉州市晋江福建省泉州市晋江市经济技术开发区（新塘园）新城路8号（新塘街道）（东西三路和泉州环城高速交界口）",value:[118.619476,24.775445,0]}]}, {province: '安徽', locs: [{name:"Tmall_SM_安徽省合肥市蜀山区铁笛路1号普洛斯产业园1号门B4-25-雀巢电商母婴仓",value:[117.140360,31.856087,0]},{name:"Tmall_SM_安徽省合肥市高新区合肥市高新区铁迪路1号普洛斯合肥现代服务产业园",value:[117.140527,31.856124,0]}]}, {province: '广西', locs: [{name:"Tmall_SM_广西壮族自治区南宁市江南区永安路169号平安不动产物流园A门2号库-雀巢电商母婴仓",value:[108.201919,22.632653,0]},{name:"Tmall_SM_广西省南宁市江南区广西省南宁市江南区吴圩镇平安南宁空港物流园A2库",value:[108.224283,22.646380,0]}]}, {province: '陕西', locs: [{name:"Tmall_SM_陕西省西安市未央区石化大道南50米菜鸟网络园区A5-3-雀巢电商母婴仓",value:[108.868610,34.322382,0]},{name:"Tmall_SM_陕西省西安市长安区陕西省西安市未央区六村堡街道石化大道西段祥云物流往西500米菜鸟网络园区A5-3",value:[108.826406,34.320206,0]}]}, {province: '山东', locs: [{name:"Tmall_SM_山东省青岛市城阳区阿里山路青岛嘉丰物流园B2库东门A-雀巢电商母婴仓",value:[120.342118,36.262990,0]},{name:"Tmall_SM_山东省济南市历城区临港北路普洛斯济南临港国际物流园-雀巢电商母婴仓",value:[117.230716,36.799686,0]},{name:"Tmall_SM_山东省青岛市流亭街道山东省青岛市流亭街道双元路阿里山路交叉口",value:[120.342118,36.262990,0]},{name:"Tmall_SM_山东省济南市历城区山东省济南市历城区临港开发区临港北路",value:[117.230716,36.799686,0]}]}, {province: '上海', locs: [{name:"Tmall_SM_上海市嘉定区嘉朱公路2333号菜鸟物流园区3号库28号口-雀巢电商母婴仓",value:[121.183991,31.418316,0]},{name:"Tmall_SM_上海上海市奉贤区上海市嘉定区嘉朱公路2333号菜鸟物流园区",value:[121.183991,31.418316,0]}]}, {province: '辽宁', locs: [{name:"Tmall_SM_辽宁省沈阳市浑南区兰台路20号普菱物流园A4仓-雀巢电商母婴仓",value:[123.563266,41.767940,0]},{name:"Tmall_SM_辽宁省沈阳市浑南新区辽宁省沈阳市浑南新区兰台路20号（普洛斯）普菱物流园A4仓",value:[123.563266,41.767940,0]}]}, {province: '天津', locs: [{name:"Tmall_SM_天津市武清区京滨大道88号阿里巴巴物流园9号库--雀巢电商母婴仓",value:[116.810600,39.551819,0]},{name:"Tmall_SM_天津市武清区京滨工业园京滨大道88号 菜鸟网络 2号库",value:[116.793502,39.552754,0]},{name:"Tmall_SM_天津天津市武清区天津市武清区京滨大道88号阿里巴巴物流园2号库天猫商超A09-A12收货口",value:[116.810600,39.551819,0]},{name:"Tmall_SM_天津天津市西青区天津市西青区王稳庄镇盛达三支路32号",value:[117.281050,38.896397,0]}]}, {province: '湖北', locs: [{name:"Tmall_SM_湖北省武汉市江夏区金口街旭光村菜鸟物流园2号库12号门-1--雀巢电商母婴仓",value:[114.172230,30.337440,0]},{name:"Tmall_SM_湖北省武汉市汉南区通江四路汉南菜⻦物流园2号库",value:[114.070741,30.279963,0]},{name:"Tmall_SM_湖北省武汉市江夏区湖北省武汉市江夏区金口街旭光村菜鸟物流园2号库",value:[114.172230,30.337440,0]}]}, {province: '河南', locs: [{name:"Tmall_SM_河南省郑州市航空港区海枣路菜鸟网络物流园1号库--雀巢电商母婴仓",value:[113.669320,34.756580,0]},{name:"Tmall_SM_河南省郑州市航空港经济综合实验区郑州航空港经济综合实验区灵枣路北侧枣梨路东侧菜鸟网络物流园",value:[113.008834,34.744733,0]}]}, {province: '贵州', locs: [{name:"Tmall_SM_贵州省黔南布依族苗族县自治县龙里县双龙路深国际物流园A3库-雀巢电商母婴仓",value:[106.878081,26.485890,0]},{name:"Tmall_SM_贵州省黔南州龙里县贵州省黔南州龙里县谷脚镇泸昆高速龙里西出库深国际物流园区",value:[106.876661,26.512450,0]}]}];
var Tmall_FS_ARR =[{province: '江苏', locs: [{name:"Tmall_FS_江苏省无锡市新吴区锡协路165号C2-21",value:[120.470573,31.507301,0]},{name:"Tmall_FS_江苏省无锡市新吴区锡协路硕放街道 165号C2-21",value:[120.448036,31.482023,0]}]}, {province: '广东', locs: [{name:"Tmall_FS_广东省广州市增城区永宁街沙宁路创业大道161号菜鸟网络园区（6号库一楼）（DG）",value:[113.577300,23.127578,0]}]}, {province: '湖北', locs: [{name:"Tmall_FS_湖北省武汉市江夏区金口街旭光村菜鸟物流园6号库",value:[114.172230,30.337440,0]}]}, {province: '四川', locs: [{name:"Tmall_FS_四川省成都市双流区胜利镇环港路与牧华路交界处双流菜鸟园区B2库08号门",value:[103.931533,30.533101,0]}]}, {province: '天津', locs: [{name:"Tmall_FS_天津市天津市辖区武清区京滨大道88号,阿里巴巴菜鸟园区3号库4号门304",value:[116.810600,39.551819,0]}]}, {province: '辽宁', locs: [{name:"Tmall_FS_沈阳市浑南区麦子屯路608号菜鸟网络2#园6#库",value:[123.553620,41.730692,0]}]}];
var RTD_FS_ARR =[{province: '山东', locs: [{name:"RTD_FS_山东省临沂市罗庄区清河南路与西外环交汇处北50圆通大院2号仓",value:[118.350366,35.023433,0]}]}];
var HeMA_ARR =[{province: '上海', locs: [{name:"HeMA_上海市嘉定区嘉朱公路2333号菜鸟物流园5号库（菜鸟仓）\\/江苏太仓市城厢镇佳和路9号和泰物流园\xa0段明旗18521314631",value:[121.183991,31.418316,0]}]}, {province: '天津', locs: [{name:"HeMA_天津市武清开发区翠源道2号（普洛斯武清现代服务产业园）",value:[117.064738,39.415061,0]}]}, {province: '广东', locs: [{name:"HeMA_广东省东莞市塘厦镇科苑路风景路3号",value:[114.047226,22.783600,0]}]}, {province: '四川', locs: [{name:"HeMA_成都市新都区金石园路480号物安博 \\n物流园5号库2楼1号门",value:[104.108829,30.790135,0]}]}, {province: '陕西', locs: [{name:"HeMA_陕西省咸阳西咸新区丰西新城咸户路宇培西安物流园",value:[108.693420,34.282706,0]}]}, {province: '湖北', locs: [{name:"HeMA_武汉市东西湖区革新大道与兴工四路交叉口处（荷花苑还建房二期对面）",value:[114.111456,30.611565,0]}]}];
var Nestle_ARR =[{province: '江苏', locs: [{name:"Nestle_江苏省苏州市吴江区汾湖高新技术产业开发区联秋路88号易商汾湖物流园",value:[120.841953,31.013073,0]}]}, {province: '天津', locs: [{name:"Nestle_中国天津市北辰区北辰科技园区高新大道 69号沃尔玛二期雀巢仓库",value:[117.269223,39.231075,0]}]}];
var Wyeth_ARR =[{province: '江苏', locs: [{name:"Wyeth_苏州市工业园区方洲路199",value:[120.777720,31.316430,0]},{name:"Wyeth_苏州市吴中区长安路6号",value:[120.504790,31.182005,0]}]}, {province: '天津', locs: [{name:"Wyeth_天津市北辰区北辰科技园高新大道69号沃尔玛二期\xa0雀巢仓库",value:[117.269223,39.231075,0]}]}, {province: '广东', locs: [{name:"Wyeth_ 东莞市洪梅镇望沙路115号易商物流园4楼4号库",value:[113.608904,22.994717,0]}]}, {province: '四川', locs: [{name:"Wyeth_成都市双流区西航港街道物流大道888号",value:[103.973919,30.555545,0]}]}];
var Nespresso_ARR =[{province: '江苏', locs: [{name:"Nespresso_江苏省苏州市昆山市玉山镇吴淞路166号中大物流园",value:[120.858335,31.273165,0]}]}, {province: '北京', locs: [{name:"Nespresso_北京市平谷区马坊镇平谷普洛斯物流园区A3",value:[117.011806,40.060156,0]}]}, {province: '广东', locs: [{name:"Nespresso_广州市花都区花东镇富力金港新城金港北路广州富力空港综合物流园P1栋205A",value:[113.359096,23.458206,0]}]}];
var Kidswant_ARR =[{province: '江苏', locs: [{name:"Kidswant_江苏省南京市空港经济开发区苍穹路2号孩子王物流园",value:[118.813682,31.770809,0]}]}, {province: '四川', locs: [{name:"Kidswant_四川省成都市青白江区祥符镇高楼南路菜鸟网络物流园2号库",value:[104.282899,30.821515,0]}]}];
var Leyou_ARR =[{province: '天津', locs: [{name:"Leyou_天津市北辰区北辰陆路港装备产业园陆港三径路5号-陆路港嘉民物流中心",value:[117.325132,39.248201,0]}]}, {province: '山东', locs: [{name:"Leyou_青岛市市北区傍海南路1号中外运仓库二号库1号门",value:[120.341042,36.128713,0]}]}, {province: '陕西', locs: [{name:"Leyou_咸阳市渭城区天工一路与周武路交叉口往东远泽西安秦汉产业园1号库",value:[108.736122,34.399456,0]}]}, {province: '湖北', locs: [{name:"Leyou_湖北省武汉市东西湖区航嘉中路畅行天下1号楼三层",value:[114.099149,30.630674,0]}]}, {province: '辽宁', locs: [{name:"Leyou_沈阳市经济技术开发区八号街2号中外运久凌2号仓B仓",value:[123.249916,41.784626,0]}]}, {province: '四川', locs: [{name:"Leyou_四川省成都市龙泉驿区车城东五路888号平安物流园二期11栋二层三分区",value:[104.218104,30.529372,0]}]}, {province: '江苏', locs: [{name:"Leyou_江苏省苏州昆山巴城石碑长江北路与立基路交叉口嘉湖物流园4号库",value:[120.922439,31.506449,0]}]}];
var Wumart_ARR =[{province: '北京', locs: [{name:"Wumart_马驹桥常温库：北京市通州区马驹桥镇柏富村物美库房（通州区于家务回族乡漷柏路）",value:[116.677628,39.712766,0]},{name:"Wumart_南皋库：北京市朝阳区崔各庄乡南皋路123号；\xa0\xa0 ",value:[116.523359,40.003060,0]},{name:"Wumart_马驹桥多点常温库（全球精选）",value:[116.561073,39.727482,0]}]}];


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
            backgroundColor: '#0B1C51', //地图背景色white
            // tooltip: {
            //     trigger: 'item',
            //     formatter: function (params) {
            //         if (typeof params.value[2] == 'undefined') {
            //             return params.name + ' : ' + params.value;
            //         } else {
            //             return params.name + ' : ' + params.value[2];
            //         }
            //     },
            // },
             tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    if (typeof params.value[2] == 'undefined') {
                        return params.name ;
                    } else {
                        return params.name ;
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
                        name: 'Tmall_SM',
                        icon:
                            'image://data:image/png;base64,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KJ78QlGMMSx97VJNNacAGB0dld7e3gbAngNj48yaOZOLLr5Iw/DY1wxEoi0XYwzGG6sn1lpmz56tixef3zh36NAhk8/nBSCfzzM0NNToW7J0iTanmrHWIghezPyq9ezW3acMVr+nVjz5LkqnMYZ0Ot1wRblcZnR0tHHtSH5E6++y+EFAU3PThOwRhiFz5szhgW88oGvWrOE73/mOXnjR+VqtjO3wJ5NJWlpaGmOMjo5SrUb9pUqJXGG00RePxSQWCyJJ6TPo+aza/qvto0zSpixc/b39vxVfVoY2HNi3d28DgOd5+P5YMo95scaOQi6Xo/fAgQmSwvM8+g738cLG38jiixbr7t27Zc+rneL5kXeNMQwODsr+/fsbNgVB0Mi4RgyeNzZef/8AhXwRL24qiVn+vQe7+tdOhWVapWfw8OBqESluemXzR/f3dC+Z2zEv3tLSQkdHR+OauR1z6zGoW7dsZdNLm0kkElo3VkSwoeW+L93PIw8/yvDQsKoqXo3Kvu/T19fH8y88z/LlywHo6OigubmZXC5HS6qFmW0zUVUtFos8/dTTLl/Od2bmZ+59/5a/eWA6OKZdZ1X1h/OXzn/x1X1735xOZ25rTjVn58+fbwHxPI/58+cjIhQKBVatWsXAwADJZHIijYzB9336+/rxA78BtN7nrOORRx7hxhuu17MXnCOzZ88mm82Sy+XIZrO0t7cjIrKpZ8PBZ37zzDoVffrQ9kNbp4vhpERF90vdPcA3161b9/jVV1/tL1q0CIBUKtXwcl9fHw8++CDACZVOW3sbw8PDWDtRZQWxgPXPreel323m7AXnMHPmTFpbW+nu7iaVStHUFL3e8Uj/18q7Nu4qnoztcBLvLv4+tD+oV3DPgP19bWfA/r62/waJRstkGtfIWQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wOC0xM1QxMToyMToxNCswODowMLYdhmgAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDgtMTNUMTE6MjE6MTQrMDg6MDDHQD7UAAAAIHRFWHRzb2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAXdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADU4nnu2bAAAABZ0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA1ORHTRncAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTYyODgyNDg3NCwLc0UAAAASdEVYdFRodW1iOjpTaXplADQ1MzFCQlpwElcAAABHdEVYdFRodW1iOjpVUkkAZmlsZTovLy9hcHAvdG1wL2ltYWdlbGMvaW1ndmlldzJfOV8xNjI2Njc5MjUzMTAyNjk3Nl8zODBfWzBdGgsPHwAAAABJRU5ErkJggg==',
                    },
                    {
                        name: 'RTD_FS',
                        icon:
                              'image://data:image/png;base64,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Da9Hx3Vd/gvBMOUrakdFRwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wOC0xOFQxMDoxNjo1MCswODowMDprI8EAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDgtMThUMTA6MTY6NTArMDg6MDBLNpt9AAAAIHRFWHRzb2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAXdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADM5vyYhfAAAABZ0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAxNXwJz1gAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTYyOTI1MzAxMFs0jRkAAAASdEVYdFRodW1iOjpTaXplADE5NjdCQvwe4mUAAABHdEVYdFRodW1iOjpVUkkAZmlsZTovLy9hcHAvdG1wL2ltYWdlbGMvaW1ndmlldzJfOV8xNjI2Njc5MjUzNDMyNDA1M18zMzVfWzBdLt7elAAAAABJRU5ErkJggg==',
              },
                    {
                        name: 'Tmall_FS',
                        icon:
                            'image://data:image/png;base64,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X3570jEhqdOSPO2NUGlGiQnloB6Ploms4zg4joOu65i6TtyxibsOAc1ghp3HIKlj881hAHXC4TkjRMx18GkGPsPASiZxXRdd19H17l2uG1nbtinIL+Ce8nIONzayavlyVi1dxkc7d/D8Cy/QGAmjeb59l3YSSU7ML6SsbDaF/gALKiqYWz4X1zR4auVKwqEQhqezrztp1rZt+vfrx+tvvM7tv51D/YEDNIda2VVbyyOPPcoLz1cyqG8/fEmHXCm+sfmSDqcNOIHXXnuV+fPnU9/YSHM0gisE9953H+teWUdhYSG23Tl+mpCy/YXmInn6mWcYPnw4NXtqqFpfhen30VCzFyIxxk+YwC0zbsr6x4cEYlactrY2rISVeY6UaLrOwooFjB49mrYjLXy2cxcer5eqV9dx+OBBxowdw5IlS9r/CpBAwOGw5hViIULgSJdTC4o5d+gw5WXXIZpIYBge6vbspeWrBgDK5txBICcH2YWwKyV+3WDqpMnMvecefvnzX6C5MmPBC3i9XDH5VwA01h+m9tNP8Xq91NZ9QWs4DMDYsWMxNU29m4XAgjs1I65VGq78OGElmDZ9BsUD+ndwu0DTBKFQiHhcBSCT8NNIJhJcMWkSDy5axOUTJ5Kwuj+rHSkpKSjG1NQ+lhWnLRxG0zQSto2beoPlmV5GnzAQR0pwnPcMN7lJq4s2HSqRepkutOqaDz8mGY50C5vp9WIcI6k0IYhJh9Vr1rBx7SssXb4c4TUzPoRiyQRpnxseDz6fHyklQoj20Cddl2AshpDuu7qUs+rD4UYNYEtL49ZcwZQN72wsizQ0NaV/XNc0HMfhxJNOok9+AQCtzUFklheoaXj4cMd2biu/i/2H69E1PeOh6sKttLWEACgoLuakwafi2EkCgQCGoZyih9r2bTtUd2PAH7imobW1FuB/+34PCNFeYvEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDgtMTNUMTM6Mzk6MzkrMDg6MDAn6sqqAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA4LTEzVDEzOjM5OjM5KzA4OjAwVrdyFgAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA0MxCyXqUAAAAWdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgANDPoHZ4oAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE2Mjg4MzMxNzn93CV+AAAAEnRFWHRUaHVtYjo6U2l6ZQAyMzYxQkI0t/TYAAAARnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vYXBwL3RtcC9pbWFnZWxjL2ltZ3ZpZXcyXzlfMTYyNjY3OTIyMjUwMDQ4NjBfODNfWzBdxc/OnwAAAABJRU5ErkJggg==',
                    },
                    {
                        name: 'HeMA',
                        icon:
                              'image://data:image/png;base64,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',
               },
                    {
                        name: 'Nestle',
                        icon:
                             'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA9CAMAAAA6a9EvAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAyVBMVEX///+Ah4d8hYt7hIt9hYx9hYp7hIl6hYp9hYt8hop7hImAgI97hYyAgIB8g4p8hIt8hol6hYp8g4t8hYt7hIp7hIt5hox7hYuAgIp7hIx9hot8g4l7hYqAgI18g4l8g4t9hIp8g4t8hYp7hIx8hYp7hop9hoyAgId9hop7hId8hop9hYt8hIp9hYqAhYt8hYl9hYp7hop9ho16hYp7hIp8g4t8hYp+hIl8hoqAgIB7hIp6hYp7hop7hIt5hop9hYh8hop8hYv////kti0/AAAAQXRSTlMAIIBwn2BoMFi/OBCXCEi3UK9Az3jnKPcY349U7yanntfExzxxuocgdFGmq72bLsGxfKVkukRtW0oQV8p+mj1WpKePVFkAAAABYktHRACIBR1IAAAACXBIWXMAABcRAAAXEQHKJvM/AAAAB3RJTUUH5QgSEhElR0J0DQAABIxJREFUSMflV9mynDYQbS0ghBCLBIyQJ5hgBzv7vjuL/v+n0oKZCWNuxuVKVV7SVfdKtHTU29EyAHdCKOMhSamIH5nMFS90WdXwWJpAEGWCxX4aWiW7vj4V7wC50wA8+CEEXF6cKo1LkGEgD0E5D+zZKYRzETr0kRgCxoAz/UMU5Ql8MIaqh7KRqwzBPpdhemiK0mL68DyF1JgcXJiNQeMvTBgeRmW6M31JZeCUMiBhoLH/kj5GAQwn+Tx6JSVHW+erh+9CdeZF9MoYTIYwFw/fkY2drREEdjrsfxQm+Rg13eJK0Nb5lNNgnoXJPUZhFl/SVVIQlOaEUgJ1/Pd/kr68tJneKdNSPwLVltumB80Gb2/KxS5NJ26f7QHlM6zOrBumwV5rU86vHJDp4gSw5oAys05EImedwgzkNYsWZkENbrFhY5M7J0cXmxJYmdWUJN51H2f+3Nd2q2w5rW1jBZB0qu9QZKo0Rp4Yrql3lap6UbXpOt9MaDIp6mn+JHVa3VtrrdN9v2iIh0Sy9NBm6eC2FROQazL7YhJ7TCapUDDiSnUVc3pJ0haLsmtbflpld4bErMqC4WEDCldTyyArBtEkmDUVU47FCZ/JsdyjfK2JNh4KPeNyn9MvBGVoVzTQrk72k2LJgfe1LIqJ4gQaD8wvIReMR/0AvV8nJMdqoeSJidkRA0atv0Kf5lUtHcxb1ZvsKRgIP0vSxDSwr/Gv7nFnunyEejPmBvUEqB5MjDrCJ7RHL3MKAZUBjUlgTx32ySmPUaN/NqbtSh/llUNm1giz+RHFxtHKsxw8iTaREau0uWZgsIJegLDHbeOs0kIbXRaQf7Po0VPqJS1ViRxiC+iKgP/2aEx2qePFrCFrFOiV6NhWQmGZeAGKE/fd0VglkhSjZzCX33NZEi+HGnjWNzEcPmpNiWfHdKD3rZSW5PQHAZ73kPCRmhmTiX1eKchedcfTtOB1iptXMvNjU6s80bpI3EAcZJHPhUW4Xw7pWDpPLXpS0p9+ZrPnyA4tC1a57X5NcXe64T4yN87JRkicQqrYL9p25jwlduWSgXz6Bcb0jk523W0+B6JJ3A2j9JLHjhnqjag9uF/Hct6j/DakKgHled1SeJNH4dPl6nKYv2KcTvt88Atb6nYZWfdmkd12l9O/mc4hyz0p9pusv0RZn3FJ9YyZIwtGPEZneEJ6JnP4JylIS+gTw4SnD471NMl+4x7eU/LKvqH5+6LWc+i/lP7OxSKEaH8Jq9hwk7aPL8UlpK6SE+pPe5QMoYtbIsj4aHhNb5KvLy8eqNv07Vuo4NdR/HC/b7RRsdZX1E6/Q9mAFIujvQ02MsTMcSUV3az2+jsUPoPG1ZMu8NcTGj6HIp3CHzycabbX36NECAJHKYLx9Xtyp5AoZcjVw6te36NgDBZHm0sOhY+d9BbXTf8WClfvAh0xjTGHCgTHlza7ovAxfNHfoyCuTlnAI1E0Yy/bWKeqDycVURc9h7dRGHCgegjDn+fg0bIsutBCFwb8NXHT71HLSo2yw4Y0mGG81AXW0OJJls9hRG7c9P9G/gLAk3IQtDJ2MgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wOC0xOFQxMDoxNzozNyswODowMNZhf/YAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDgtMThUMTA6MTc6MzcrMDg6MDCnPMdKAAAAIHRFWHRzb2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAXdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADYxzIpdCwAAABZ0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA1M/EGr2kAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTYyOTI1MzA1N6E83b4AAAASdEVYdFRodW1iOjpTaXplADE2MTZCQuJbJzoAAABGdEVYdFRodW1iOjpVUkkAZmlsZTovLy9hcHAvdG1wL2ltYWdlbGMvaW1ndmlldzJfOV8xNjI2Njc5MDQxNjM1NTI5MF80N19bMF2BQIWjAAAAAElFTkSuQmCC',
                    },
                    {
                        name: 'Wyeth',
                        icon:
                    'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA0CAYAAAA0c0BmAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH5QgSEhETiPjhlAAAC1BJREFUaN7tmWuMXOV5x3/P+77nzMzOXn3F9/VlvbbD0gA2YENiOzUhpaIibUjTNkRxRWgLKAUHk6T9UNJIlap8iIhQlUakolHa0qZRXSi0tcEYbMxiKxjHdn3BNsbFXtu73tn7zJzzXvrhzF5MkCI1jiyc/UtHmnPROc//ef/vcxvZ0/aRwK8I1JU2YJLsJNlJspNkJ8lOkr2KcdWTnVgxXfVkFaACCGCutDG/bEgAL5B6++EmK5DpVN4n1xrBIOADOKMozGv98Mo4IIQggBAy2mPwNfJOgBAgyjNz48YP78oqwKlAqP2WCUvrxaNCIPZCqmvOUXrCyoaaF8aOD3Rndu+Drk08fpnwAazFVxOcteggGDe+shICcRUqSiEJKF+jGAImIAgBjMIpjfIeJwpxCTqABEWQQJCAB7RolEuxWqO8ECJwSqNdwGpF5D3BWqTmx7F9NWbN+KnUomRgfI/pAAQhU6hDvMaqgMKjPNhCHmbPoKmtDUkTenbsIicKFSDg8cpQvGs1dfNmkHYewe77n7FPGwFIEup/cwPX/MkfIt6jJeK9f/wnSs88R04bgjikUmHaFz5L0298iqNf+Rq57l4SL0z7rQ3M2vhFrFVIztD/zBa6n34GcgEJAgJ+QmSQCaIxARKdsVfjMsEpQfBI4kAiIlKc9ZgbVrH88U2YhYvI1TfRs20rvS/uIKgcqfKIs8SLlpBrb6MwazrlkcDIO6fB+kz6XgJGR/TvepOe516mseMmih3XM/X2T2IkIjEO8QETFZl29900r1nLzBU3EGwZozWl7Xu4sOcYjR+9gaEdr1F6/gV8nOnFq1qQqPGQWuQcPazKZKdrh/GCVaBDglSqNN37GZrv/wzVYFEG0uNHOP7d7xFG+jJFWwuAxhN5j3hFiGPccJnBC91UI0GUGpOWMl5RNQrK3fT+/VMMH3wLgMblbciMZnAWlXrstYsoLm9HA/W/fjOpihFRqJ4uVOUi6blznHryKYa7zmATR+LSzBAPPklw1Qq2UsbZNJNuaknSKjZJSKtVrHV4BIInDFVIly5h4aY/pe66a3HDw4RKStQ3RGXrbtz5gbEtEqylmlSpJo7EefzRE4TebqLuEpw6TdpfApXpxjjliLxAKFJOqpR276Sh46PEM+dS6FjGyLazWKdovu0WorpmLNCw8hbihinYcj+6fioz195OaecOrrlzDWrmHLQ3DB4+zPCrO1Emx/Tf/W3M1Kl4ZUgOH6C0dSe59uXMuv024rnTGenqpnf7a8iBgzBtCvX3/A5z7v0cpnkGdfPbmb35EYzW9Dy/jfDeu6DBk+1t3bqIqZ/4ONF1y0iPn6T0g3+h59+2kYsLpJUyEZI9CygJghfwyhOJo/e1Tqy1iNK0rFwJwRIackxf9wn6jhwjeEexdQGF9sVIpUJ+4XwKC66h5z+24RpaaH34UVofe5T5mx6GOMa5hEpsmP3lP2bOxs8zkqY03H0nK555iuKamxkZCcx/6EE6nv5bWH8zUUM909bfSt38paQhELe00PRr11HfcR00NhGCH60jKF7fwYrvfIPWhx9kwafvoW3zV5m16UHEgq9W0UoTRI3FiEuKCtERbv/blE+fQICGVSvxcURh2SIKc+Zy8oknYaAHiXM0rr+NUPU0r1rFcG8PlX0H6P3e9zn34x8BUGxfTF37cqJqwvCWF6heLHHq209QOXOe9m9+A+I87379cXq++uec27aV3PRrWPLlR0jPdXFk82YqZ88QiVDa08nB+/6Io196ALdvP8roMbNHjh7j8H2b2HfPFxk6fAgPtNyxATN1Spai3odLySqNLfUy0NkJQNy2BDdvHg1r11F+9x3K27dTPnYSgKZbV5O2TKG4djUDO3bi+0uoKE/vlucINsHEdRTX30Za8TTctoZ8lKf7pZ20fvZzmKZmKl0XGPEONW8u1f5BAHJLF2Nmz6M+1SidGatFKARDXiI0AsGMmz3YT3KxC/PT/fTvexMF5OrqMA0FQvh5ZBG8Clx8ZRfBeuKGRlrWrqP5Y7dQ2v4qUuqjd/duAOoXLaK4ejWFRfMp/edLaBRERYb3H2Jw/1sEYNrH10BDgZY719O/5w1M1wVyKz9CAOpmT+Pap5+g44Uf03r3p/HeE4vC1TeSqAhVy8deeawSEq2wSmp5OyPiTQ4lBdJchPJpJlcBZDR7X4pLysUAaBMx9NZBql3vkZs3nwVfuBcVQ2nHq0ghprTzdeY+UEHqm1j80P1Ue0sMHDyCiQ2xD1RGKnQ9/9803ngTdUuXoTeso7njet7+q28hRojriligfL6Xw998Ep0kiM8IeBzRO6fxcVbEKLIKSAKo4BE8AY/IeDUso2kFlUXnWoHxQfjZRkBF6PO99O99AwFyCxdSPnwKe/IEKhfjD79D9fhRQGi68Qb6d72BDPSDyryZU5rBrTsY6T6Dqmtg4eavkPRXKL/eSaIC7uIAGpDGCH3kEOzaSdjbSdj7BnrvXhjpI9FkDgBCrehVl6EKvYRsIKCCIWAZ2PFattJA38svQeowwZAODVHq3IMGXKXC4IuvoDVIEJwSvDb4/z3N0IuvgMDUtjb6X34R11/ClAMXf/I6CqibPofpn/8DvMrhLXgPHkWiDdqbsUpL1+WpugTnLBICPk2zhyfa7T3BudrJ6DM/Z88ioEjRRlF68xCVgX7sYB89nXtwcQR4UJ7SrjdxwMChAwwfPQEmxolmtM52OtD77Es4V8END9O7bRuYmMhouv95C0MHf0pAMfehB1j8N99iyn0bmfnoQyz4y8cw9Y0wMkw6NJxF15vWMP9rj1G4cQVJJDSt24CZPScTrxHEgsyaRa6tPXNOYxP5DWtJmouZc2Scov7S1BmPTwxQAcEb8INl9KwpDJ04Sv+//xeFQG3lIJSGybfPpvuFraQ/OYDShsjXtKECWgzJhXM03vEpqiff5uzf/QCjNChB+oYovb4X1xgT1ddTXLqC4oolKBTde96Cg8dw1SrV4WEK7YvxUUzT4oUkp05jrWLhI/dTHaqSnO9iaP9eend1MueuOyisuonq2XOEc+cpLl9GcrFE5cgxIsDHMU0fuxWZ+C9eJkWFV5bYBgKaIJ7IW6pGQ1A45SgmwmDOkE8CGs9IJKjgiMuaVCyiFaa5wIotz3L6u9+h9MN/ReUKYx1P8BVyiZBMnUVaiCgMDZAMliB4Yl0kMQqTDpO0NKLjItFIBTc8iI8EJRrxCicaSIlTRzmvIQg5G0i1JUhE3gacB4ugCgXm/tnm9zXv4kEcOSskWoicxSFUTERswSsBH2FVIJ84BEi0oj7xpAh1HSuoTslT3tlJccMnMZGib/tujImyyQGgCKAKJDmFH+xBDwYsiljlEYFEWVQApfLkei1OlbAImhwqBY9HgkeUxYvCSURcCRgPXoTIxkBKqgVEo70fKxffl3oE5cEjtQChMQG8l6ynJaBC1skoxtsZqyDxntavP0DL6ls4+hd/zcKNv8e7//AjONsFuXgsogqC8ZDqQDSWOAJOZRtJh+zNXgSlPbr23VAzWddqxSgofBC8ZO2UrRUhEgSIatE7S1c+GJT4DxrLZI2zClkzPWqMl4kuGb+nwriR1YPHGZjXyvzfv4szzz3Lhe//kIKJsRMbebJxigqh9iapGTnh+5d882fnS5cuz4ToWrML/CVPBBy269yle/YXglTxKocrNpGrWnRfP0mdJZBH15RxJaBDlkDLxfzlGrgJjhzapYT+fpwkJEWF8fnMu1eIKIATwYujMDh4uUap2ZQBIpQShAjjMz9ejsrnF4UgeK0u39x4dPUkjHabo9evNNXRuZd8eIfk/x9Mkr1aMUn2asUk2asVk2SvVkySvVoxSfZqxa8U2f8DWBE/xDTvUa8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDgtMThUMTA6MTc6MTkrMDg6MDDEewPWAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA4LTE4VDEwOjE3OjE5KzA4OjAwtSa7agAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA1Mn6uX3IAAAAWdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgANTkR00Z3AAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE2MjkyNTMwMzkQ3lc/AAAAEnRFWHRUaHVtYjo6U2l6ZQAzMDI0QkIx4ggRAAAARnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vYXBwL3RtcC9pbWFnZWxjL2ltZ3ZpZXcyXzlfMTYyNjY3OTEyMjY4NDc1OTlfNDVfWzBd51lUQgAAAABJRU5ErkJggg==',
                    },
                    {
                        name: 'Nespresso',
                        icon:
                   'image://data:image/png;base64,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',
   },
                    {
                        name: 'Kidswant',
                        icon:
              'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAOCAMAAADzLXfBAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA6lBMVEX////58/f0utv44O7vls/aAHPkZKDUjbT1/+z5//3htc3kxNX315vwpSjzv2j6/PPJVpTb3t3zmw7ylwT63rDv7++/v7764Lj0zIni5K6wyFzh7sa/3oe72nr24e/d5s7z8vTwoB/1mw/yrUH1lgOotRGJvxSfzkLm89PiUajVsZ/DgG/boKbWbqTJmJeorVn2yHvvpjC5xEOOxyCLux3W0LPmEonqyODNZYe/4ISMxBiz03u6qISZkzO3TV/cyc3HSXfg88Ofz0L45cPF34uUxSr0x3jf4+Hn8c/1tEenzlL1s0Pf7b336c4aYRLCAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAAd0SU1FB+UIEhISM5i7kp8AAADmSURBVBjTbY7bWoJAFIUXhiUmEDNOVNCBkQbspLQnKsrsQKVU7/86jXblZ+vy//619gb+idWy1uGGBbu9uYZb7a2O091Gz/X8FX2nGwSBA8Z5f7XhiN1AgDEewt/z9g8i+PFh50gcRydCIJG87w/S9FRl+fDs/OLSvhoZbHw5LlIpr0nflEO7vC3v7hdriZRcSjeMdPXwOBk9TZ8nLwtufJMekJGmqiLSr8vrCTM+d99Qa6J3g6sYfz77KCRn4SeRimNFNFvygps/B5zP0Sid51plwMzMhl9jwPfmIaKmBurmG/hJvF8sQhueTWeR2wAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wOC0xOFQxMDoxODo1MSswODowMILVGMYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDgtMThUMTA6MTg6NTErMDg6MDDziKB6AAAAIHRFWHRzb2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAXdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADE086E/QwAAABZ0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAyM75HOa4AAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTYyOTI1MzEzMR/HtToAAAASdEVYdFRodW1iOjpTaXplADEyMjRCQgbq+noAAABGdEVYdFRodW1iOjpVUkkAZmlsZTovLy9hcHAvdG1wL2ltYWdlbGMvaW1ndmlldzJfOV8xNjI2Njc5MTIyNjg0NzU5OV80MV9bMF0S2fKCAAAAAElFTkSuQmCC',
                          },
                    {
                        name: 'Leyou',
                        icon:
                    'image://data:image/png;base64,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',
                    },                    
                     {
                        name: 'Wumart',
                        icon:
                     'image://data:image/png;base64,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10PYo7K1Lf+rtp1v42y7NjeoSlnp/nYcBjSgJnwDfDdwY0uYHc0AKwPsudYKxzM1pjbegJhnaMI6IK+ryg8cmeoBauMnG5XdPnvXwtTZWPbLq+fbcURXJgmABrrtYcJrYdqCKs+iSYVM3URChGLoe2eoYIKBiPNZ+Qx2/c34ALWJgV55et2aI2EENNzJWrf0H5HKV1zeWJPhHKQW04TXELdL9NqXHWrqHrVrG/TYX5Q7x11+9qyNLoxsSHcsPh41ZYbb0R9U29tOFxjP8ZMPAYxUjvQgSb7rG8w41mvjj5Zh2DjWRz+lpm1BcGO/qp73NASZ+S34xHW+H6BGXnGd2xnMzAywPpti5Tih8ukWC8pTg8DZXzTGa0GFglZ9oSWpufvUFDQA2rWtOfsGQuaz8uT5W+0AtQlx9HaKcYHtuubtG2ayHRY+UegvwsC75jBRoWG7WMW9les1aG2YOIvxbL4WnnTL245njj1T9qg96xG1H2T0l0aoYSkKGvYgb/lKwoCNxTJv3lbPz0sXl8cxNeUJK8T12U7D9ZqgYblB0k6sa9JKfHXiGKRcNIMYGYaBJ4WLniGMQXoUFjXMQRmAwTUKPqBxz1C+frqf29iQ9BlToVOixjMmu9TSvCYMSY2OlJUmaBAq8JjxlSSCsgqsPKjC9OaOqJxDDt7M0VUflaBQoXlinzHAtI0dfrwNklxZILBZQmtmKnSyREU2w43vNeGadMCFhscn7MnbandhT54sTWzetqW96OTUMFcQ6BU2NfsRcxs35S9xH3/CLuBQgI0GXnkTNIBCXAjeZPqaSmLhB9H/CTVhNfd83yRLQ9PzdHUSbenbD8PzPceHRAQRd4HHjrqxfd8mHfK76fueGeSlZ3u+OROmSx2VzaKjYan7vm5NlTsQ9YPcmFgg6utzlVJzQKGfSm0yArwE96E14I1de8RFBUXWjyTMbzgxWqNtBaXXQa094hAiT1ZfaP2pL/AI1wyVzE/iudFLVAoaWRpNhXe84x0h/v7dBN7xH8A/AeWIF5GHq2JGAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA4LTE4VDEwOjE3OjMwKzA4OjAwE8ZBeAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wOC0xOFQxMDoxNzozMCswODowMGKb+cQAAAAgdEVYdHNvZnR3YXJlAGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnvM8dnQAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABd0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQANji1VuWvAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADE1NJZ6yzEAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTYyOTI1MzA1MD9YSB0AAAASdEVYdFRodW1iOjpTaXplADM5MDNCQpO0tG4AAABGdEVYdFRodW1iOjpVUkkAZmlsZTovLy9hcHAvdG1wL2ltYWdlbGMvaW1ndmlldzJfOV8xNjI2Njc5MDYyNDQ2NTA1NF8yOF9bMF3OnIOjAAAAAElFTkSuQmCC',
                     },                     
                ],
                textStyle: {
                    color: '#FFFFFF', //legend图标颜色  深灰
                    size: 20,
                },
            },

            // visualMap: [
            //     {
            //         min: -5, //IF NO WAREHOUSES IN THIS CITY
            //         max: 35, //填写城市的最大值
            //         seriesIndex: 0,
            //         show: false,
            //         //splitNumber: 4,
            //         //   right: '2%',
            //         inRange: {
            //             color: ['#FFFFFF', '#2A6BA6'],
            //         },
            //         //       calculable: true,
            //         textStyle: {
            //             color: '#242424', //legend图标颜色  深灰
            //             size: 20,
            //         },
            //         formatter: function (value) {
            //             return value;
            //             //       return "";    左下角图例滑过时显示空值
            //         },
            //     },
            // ],

            geo: {
                show: true,
                map: mapName,
                label: {
                    normal: {
                        show: true, //是否显示城市名
                        textStyle: {
                            color: '#1F4E79', //legend字体颜色  深蓝
                            fontSize: 8
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
                        areaColor: '#FFFFFF',
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
                        icon:"M1007.772025 142.969542l-70.419421 53.799178A527.751816 527.751816 0 0 0 524.288347 0.003938C234.733768 0.003938 0.396208 228.591367 0.002363 511.371818-0.391482 794.467344 234.497461 1024 524.288347 1024c226.381899 0 419.287003-140.208692 492.699643-336.579629a9.688578 9.688578 0 0 0-6.065207-12.603028l-70.892035-23.709447a10.082423 10.082423 0 0 0-12.603029 5.8289 416.687628 416.687628 0 0 1-99.406387 151.551418 431.181111 431.181111 0 0 1-303.496679 122.879527c-58.0527 0-114.214945-11.106419-166.990127-32.925412a427.085127 427.085127 0 0 1-228.587428-223.30991 408.653197 408.653197 0 0 1-33.713101-163.287988c0-56.713628 11.421495-111.536802 33.713101-163.209218a416.687628 416.687628 0 0 1 92.080877-133.355795 431.181111 431.181111 0 0 1 303.496678-122.879527c58.0527 0 114.214945 11.02765 167.068896 32.925412a427.085127 427.085127 0 0 1 171.243649 128.235814l-75.224326 57.265011a9.688578 9.688578 0 0 0 3.780909 17.250395l219.213926 52.381337c6.301514 1.49661 12.366722-3.150757 12.366722-9.373503l1.023996-220.552998c-0.157538-8.034431-9.767347-12.603028-16.2264-7.561817z",
                            onclick: function () {
                            loadMap('中国')
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
                    name: 'Tmall_SM',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: getsimboldata(mapName, Tmall_SM_ARR),
                    symbol:
                        'image://data:image/png;base64,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KJ78QlGMMSx97VJNNacAGB0dld7e3gbAngNj48yaOZOLLr5Iw/DY1wxEoi0XYwzGG6sn1lpmz56tixef3zh36NAhk8/nBSCfzzM0NNToW7J0iTanmrHWIghezPyq9ezW3acMVr+nVjz5LkqnMYZ0Ot1wRblcZnR0tHHtSH5E6++y+EFAU3PThOwRhiFz5szhgW88oGvWrOE73/mOXnjR+VqtjO3wJ5NJWlpaGmOMjo5SrUb9pUqJXGG00RePxSQWCyJJ6TPo+aza/qvto0zSpixc/b39vxVfVoY2HNi3d28DgOd5+P5YMo95scaOQi6Xo/fAgQmSwvM8+g738cLG38jiixbr7t27Zc+rneL5kXeNMQwODsr+/fsbNgVB0Mi4RgyeNzZef/8AhXwRL24qiVn+vQe7+tdOhWVapWfw8OBqESluemXzR/f3dC+Z2zEv3tLSQkdHR+OauR1z6zGoW7dsZdNLm0kkElo3VkSwoeW+L93PIw8/yvDQsKoqXo3Kvu/T19fH8y88z/LlywHo6OigubmZXC5HS6qFmW0zUVUtFos8/dTTLl/Od2bmZ+59/5a/eWA6OKZdZ1X1h/OXzn/x1X1735xOZ25rTjVn58+fbwHxPI/58+cjIhQKBVatWsXAwADJZHIijYzB9336+/rxA78BtN7nrOORRx7hxhuu17MXnCOzZ88mm82Sy+XIZrO0t7cjIrKpZ8PBZ37zzDoVffrQ9kNbp4vhpERF90vdPcA3161b9/jVV1/tL1q0CIBUKtXwcl9fHw8++CDACZVOW3sbw8PDWDtRZQWxgPXPreel323m7AXnMHPmTFpbW+nu7iaVStHUFL3e8Uj/18q7Nu4qnoztcBLvLv4+tD+oV3DPgP19bWfA/r62/waJRstkGtfIWQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wOC0xM1QxMToyMToxNCswODowMLYdhmgAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDgtMTNUMTE6MjE6MTQrMDg6MDDHQD7UAAAAIHRFWHRzb2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAXdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADU4nnu2bAAAABZ0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA1ORHTRncAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTYyODgyNDg3NCwLc0UAAAASdEVYdFRodW1iOjpTaXplADQ1MzFCQlpwElcAAABHdEVYdFRodW1iOjpVUkkAZmlsZTovLy9hcHAvdG1wL2ltYWdlbGMvaW1ndmlldzJfOV8xNjI2Njc5MjUzMTAyNjk3Nl8zODBfWzBdGgsPHwAAAABJRU5ErkJggg==',
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
                    name: 'RTD_FS',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: getsimboldata(mapName, RTD_FS_ARR),
                    symbol:
                       'image://data:image/png;base64,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Da9Hx3Vd/gvBMOUrakdFRwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wOC0xOFQxMDoxNjo1MCswODowMDprI8EAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDgtMThUMTA6MTY6NTArMDg6MDBLNpt9AAAAIHRFWHRzb2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAXdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADM5vyYhfAAAABZ0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAxNXwJz1gAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTYyOTI1MzAxMFs0jRkAAAASdEVYdFRodW1iOjpTaXplADE5NjdCQvwe4mUAAABHdEVYdFRodW1iOjpVUkkAZmlsZTovLy9hcHAvdG1wL2ltYWdlbGMvaW1ndmlldzJfOV8xNjI2Njc5MjUzNDMyNDA1M18zMzVfWzBdLt7elAAAAABJRU5ErkJggg==',
                       symbolSize:  function(val){
                            return [14,27]
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
                    name: 'Tmall_FS',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: getsimboldata(mapName, Tmall_FS_ARR),
                    symbol:
                        'image://data:image/png;base64,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X3570jEhqdOSPO2NUGlGiQnloB6Ploms4zg4joOu65i6TtyxibsOAc1ghp3HIKlj881hAHXC4TkjRMx18GkGPsPASiZxXRdd19H17l2uG1nbtinIL+Ce8nIONzayavlyVi1dxkc7d/D8Cy/QGAmjeb59l3YSSU7ML6SsbDaF/gALKiqYWz4X1zR4auVKwqEQhqezrztp1rZt+vfrx+tvvM7tv51D/YEDNIda2VVbyyOPPcoLz1cyqG8/fEmHXCm+sfmSDqcNOIHXXnuV+fPnU9/YSHM0gisE9953H+teWUdhYSG23Tl+mpCy/YXmInn6mWcYPnw4NXtqqFpfhen30VCzFyIxxk+YwC0zbsr6x4cEYlactrY2rISVeY6UaLrOwooFjB49mrYjLXy2cxcer5eqV9dx+OBBxowdw5IlS9r/CpBAwOGw5hViIULgSJdTC4o5d+gw5WXXIZpIYBge6vbspeWrBgDK5txBICcH2YWwKyV+3WDqpMnMvecefvnzX6C5MmPBC3i9XDH5VwA01h+m9tNP8Xq91NZ9QWs4DMDYsWMxNU29m4XAgjs1I65VGq78OGElmDZ9BsUD+ndwu0DTBKFQiHhcBSCT8NNIJhJcMWkSDy5axOUTJ5Kwuj+rHSkpKSjG1NQ+lhWnLRxG0zQSto2beoPlmV5GnzAQR0pwnPcMN7lJq4s2HSqRepkutOqaDz8mGY50C5vp9WIcI6k0IYhJh9Vr1rBx7SssXb4c4TUzPoRiyQRpnxseDz6fHyklQoj20Cddl2AshpDuu7qUs+rD4UYNYEtL49ZcwZQN72wsizQ0NaV/XNc0HMfhxJNOok9+AQCtzUFklheoaXj4cMd2biu/i/2H69E1PeOh6sKttLWEACgoLuakwafi2EkCgQCGoZyih9r2bTtUd2PAH7imobW1FuB/+34PCNFeYvEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDgtMTNUMTM6Mzk6MzkrMDg6MDAn6sqqAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA4LTEzVDEzOjM5OjM5KzA4OjAwVrdyFgAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA0MxCyXqUAAAAWdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgANDPoHZ4oAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE2Mjg4MzMxNzn93CV+AAAAEnRFWHRUaHVtYjo6U2l6ZQAyMzYxQkI0t/TYAAAARnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vYXBwL3RtcC9pbWFnZWxjL2ltZ3ZpZXcyXzlfMTYyNjY3OTIyMjUwMDQ4NjBfODNfWzBdxc/OnwAAAABJRU5ErkJggg==',
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
                    name: 'HeMA',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: getsimboldata(mapName, HeMA_ARR),
                    symbol:
                        'image://data:image/png;base64,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',
                        symbolSize: function (val) {
                        return 17;
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
                    name: 'Nestle',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: getsimboldata(mapName, Nestle_ARR),
                    symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA9CAMAAAA6a9EvAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAyVBMVEX///+Ah4d8hYt7hIt9hYx9hYp7hIl6hYp9hYt8hop7hImAgI97hYyAgIB8g4p8hIt8hol6hYp8g4t8hYt7hIp7hIt5hox7hYuAgIp7hIx9hot8g4l7hYqAgI18g4l8g4t9hIp8g4t8hYp7hIx8hYp7hop9hoyAgId9hop7hId8hop9hYt8hIp9hYqAhYt8hYl9hYp7hop9ho16hYp7hIp8g4t8hYp+hIl8hoqAgIB7hIp6hYp7hop7hIt5hop9hYh8hop8hYv////kti0/AAAAQXRSTlMAIIBwn2BoMFi/OBCXCEi3UK9Az3jnKPcY349U7yanntfExzxxuocgdFGmq72bLsGxfKVkukRtW0oQV8p+mj1WpKePVFkAAAABYktHRACIBR1IAAAACXBIWXMAABcRAAAXEQHKJvM/AAAAB3RJTUUH5QgSEhElR0J0DQAABIxJREFUSMflV9mynDYQbS0ghBCLBIyQJ5hgBzv7vjuL/v+n0oKZCWNuxuVKVV7SVfdKtHTU29EyAHdCKOMhSamIH5nMFS90WdXwWJpAEGWCxX4aWiW7vj4V7wC50wA8+CEEXF6cKo1LkGEgD0E5D+zZKYRzETr0kRgCxoAz/UMU5Ql8MIaqh7KRqwzBPpdhemiK0mL68DyF1JgcXJiNQeMvTBgeRmW6M31JZeCUMiBhoLH/kj5GAQwn+Tx6JSVHW+erh+9CdeZF9MoYTIYwFw/fkY2drREEdjrsfxQm+Rg13eJK0Nb5lNNgnoXJPUZhFl/SVVIQlOaEUgJ1/Pd/kr68tJneKdNSPwLVltumB80Gb2/KxS5NJ26f7QHlM6zOrBumwV5rU86vHJDp4gSw5oAys05EImedwgzkNYsWZkENbrFhY5M7J0cXmxJYmdWUJN51H2f+3Nd2q2w5rW1jBZB0qu9QZKo0Rp4Yrql3lap6UbXpOt9MaDIp6mn+JHVa3VtrrdN9v2iIh0Sy9NBm6eC2FROQazL7YhJ7TCapUDDiSnUVc3pJ0haLsmtbflpld4bErMqC4WEDCldTyyArBtEkmDUVU47FCZ/JsdyjfK2JNh4KPeNyn9MvBGVoVzTQrk72k2LJgfe1LIqJ4gQaD8wvIReMR/0AvV8nJMdqoeSJidkRA0atv0Kf5lUtHcxb1ZvsKRgIP0vSxDSwr/Gv7nFnunyEejPmBvUEqB5MjDrCJ7RHL3MKAZUBjUlgTx32ySmPUaN/NqbtSh/llUNm1giz+RHFxtHKsxw8iTaREau0uWZgsIJegLDHbeOs0kIbXRaQf7Po0VPqJS1ViRxiC+iKgP/2aEx2qePFrCFrFOiV6NhWQmGZeAGKE/fd0VglkhSjZzCX33NZEi+HGnjWNzEcPmpNiWfHdKD3rZSW5PQHAZ73kPCRmhmTiX1eKchedcfTtOB1iptXMvNjU6s80bpI3EAcZJHPhUW4Xw7pWDpPLXpS0p9+ZrPnyA4tC1a57X5NcXe64T4yN87JRkicQqrYL9p25jwlduWSgXz6Bcb0jk523W0+B6JJ3A2j9JLHjhnqjag9uF/Hct6j/DakKgHled1SeJNH4dPl6nKYv2KcTvt88Atb6nYZWfdmkd12l9O/mc4hyz0p9pusv0RZn3FJ9YyZIwtGPEZneEJ6JnP4JylIS+gTw4SnD471NMl+4x7eU/LKvqH5+6LWc+i/lP7OxSKEaH8Jq9hwk7aPL8UlpK6SE+pPe5QMoYtbIsj4aHhNb5KvLy8eqNv07Vuo4NdR/HC/b7RRsdZX1E6/Q9mAFIujvQ02MsTMcSUV3az2+jsUPoPG1ZMu8NcTGj6HIp3CHzycabbX36NECAJHKYLx9Xtyp5AoZcjVw6te36NgDBZHm0sOhY+d9BbXTf8WClfvAh0xjTGHCgTHlza7ovAxfNHfoyCuTlnAI1E0Yy/bWKeqDycVURc9h7dRGHCgegjDn+fg0bIsutBCFwb8NXHT71HLSo2yw4Y0mGG81AXW0OJJls9hRG7c9P9G/gLAk3IQtDJ2MgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wOC0xOFQxMDoxNzozNyswODowMNZhf/YAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDgtMThUMTA6MTc6MzcrMDg6MDCnPMdKAAAAIHRFWHRzb2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAXdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADYxzIpdCwAAABZ0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA1M/EGr2kAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTYyOTI1MzA1N6E83b4AAAASdEVYdFRodW1iOjpTaXplADE2MTZCQuJbJzoAAABGdEVYdFRodW1iOjpVUkkAZmlsZTovLy9hcHAvdG1wL2ltYWdlbGMvaW1ndmlldzJfOV8xNjI2Njc5MDQxNjM1NTI5MF80N19bMF2BQIWjAAAAAElFTkSuQmCC',
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
                    name: 'Wyeth',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: getsimboldata(mapName, Wyeth_ARR),
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
                    name: 'Nespresso',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: getsimboldata(mapName, Nespresso_ARR),
                    symbol: 
                    
                    'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAxCAMAAABeflGgAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC/VBMVEUAAAADAAABAAAAAAADAAABAAAAAAACAgIDAwMCAQEaGhojIyMTExMCAAAFBAQ4ODhwcHCAgIApKSkHBQU9PT2QkJDY2Nh4eHgICAgDAQEHBwcXFxeVlZXX19dJSUnf39+EhIS9vb3Dw8MVFRUZGRkiIiI1NTUUFBQQEBA8PDw7OzszMzM0NDQGBgYvLy8mJiYqKioFBQVCQkIrKysODg45OTkdHR0BAQFBQUEEBARFRUWRkZHl5eVAQEBcXFxXV1d8fHzBwcG+vr5MTEzW1tbT09Nqamo+Pj68vLy/v79ubm4YGBirq6vAwMAJCQlHR0fCwsKXl5cfHx+wsLDi4uKlpaXPz8/V1dV7e3sMDAyUlJTj4+OoqKgbGxtfX1+GhoZ6enpvb29ra2uYmJjh4eGtra2ampqgoKBTU1PLy8vb29u6uro2NjbOzs7Z2dlGRkZUVFTp6em3t7e2tracnJzJyclQUFCPj4/k5OSzs7Pc3NxoaGixsbFycnKfn5/a2tpgYGBWVlaurq5jY2NYWFjt7e1ZWVm0tLSIiIjq6uqCgoLv7+9lZWVhYWHd3d3MzMy5ubliYmKTk5OysrKenp4WFhZtbW3IyMhSUlLs7Ow/Pz/g4OAPDw+kpKReXl7r6+sNDQ1ISEghISHHx8eqqqqJiYnQ0NCKiopNTU1OTk4KCgrKysqjo6NdXV0sLCx/f3/n5+d3d3dsbGxPT09mZmbFxcWFhYWmpqY3Nzfu7u7y8vLGxsZ2dnZERESpqamvr68xMTESEhJLS0stLS3m5uZxcXH19fWdnZ2Ojo4RERGWlpZbW1tKSkocHBx9fX3z8/O7u7uHh4dpaWl+fn5DQ0PU1NSSkpJzc3Pw8PDe3t709PQnJyceHh7o6Oibm5tkZGTS0tKsrKwyMjK1tbWLi4tRUVHExMQ6OjrR0dHx8fElJSVaWlpnZ2eNjY10dHSBgYFVVVWMjIwuLi6Dg4MLCwt5eXmioqK4uLinp6eZmZkoKCihoaEgICAkJCT///9NHJ9sAAAABHRSTlMg39/fhbitPAAAAAFiS0dE/tIAwlMAAAAJcEhZcwAAEk0AABJNAfOXxKcAAAAHdElNRQflCBISERloLQiKAAAE00lEQVRIx+3Va1TSZxwH8Hb74cDNai6deUHzHppoCGqlU1JzwcxYeL8g1fC2zMsIlDJDBybkdObf0r/WlIWVmrkuVuaiC2tams6hqZXaRU2Xs3Zr5wxOZ+cIrxZ7ub4vn/N8zvM8v+e2YMF/ypvqvAV65pX+P2qMAUZ//TYWZ6i3fuddo4WLFuut3zN+f4mJqb4z/8BsqbmFsd5VA7C0wutRuH80ztpmGdgutbO3t3dwdHK2dVxOIGBdXAmEFeBAINi7EV3dPYgrScaeZPIKioeXjvb2WbUa1vj6fehvE2BJXRsYFGy9LuSj9eto5vSPaf6hG8I2Mj4Jc9/EDKdHREZFx+jo2DireEhgJbI3+8duYQRv/XQVJyk5JXXtprTPtqVvz8iMZWeFZn/ODd6BDWBa8fg6OiTSJscrN0Swc1dIHnN3Pn6P0FwQVcAs/EIkLijy21u8RcKKy5fuK4m0+5KHT82ha+uFpWVpX4WUC/ZHYJzTSzC2FUil2wE/Kv4gp6oaJWHoyTuINbXcXMwhz8NfE+t4OG1dXi8TebPU2gwsi74BzBGhk7zehyqG0t3FIgLQG44CBCHHwOs4uxEKUIq2ZjWJGc0nygVZdGgpOgkQIKQYtGZSv4VTOSWi0+AoLYwAozPNABQ0FpyQNTr6bFzbqXNqHUE+j2ytgQCEQmwtU+sL7cUiErmGJnEmX0zP6YBt6HdwSXFZR1+5WiW9xiqT2ikvHeDlq3UlJut76iKwrrqO/mAoryo6ati5kxECsehqwDG6dPSNm91WhT1XebeqbYOvFIZZIr24JeK+SAqzyxf5sR+38CdVQcTGAevBYtQYbrPjdPSQRbMqiT+M9l2Q3xKhe2uRXT1RI3eC7zJ684TU+sp7zKJRxwSFMHcEDQJP9pi2Dmxr6pKe4WdK8HyvxdIb0eOi+0tSHzxMT+coC5AN4W6m3Y+iKFjrG6Mm6cbgeUBHn9iaZH53gF9Wbz9BJvazU082paWew1nQ1tXLC5BJD0dIoQ1MwQgv7XETRb1uvLZOaEze/vgsX7BfcwGwhZIuxXoT2xiJOJfduQchaHpOF82AMlox3KSpebO2vpxwzeKWkK/ZbwADPntM0VJjcFvVOC5anoec1vQc5PkAxleRKJoEEsrX0YHVQzO8nhcazqvqFE4Aak1Arv+MGGna6NInALNcMTcXWoTFhzBa+sRFbiSNJciSk03pEGARPtSr0WIsG5+HkMCghnyw4Rc62DOO9SXOPeVOVrhoz3zl4dKycgFnqXKWRJ9JLRGpdZgKT2x7Vo32zsXUdhCSZpzNciWuO6S9vza0nKuZr6enMRuoMv6zKLGsuSqc81vFWW+1XiWD0lbWo9/xjYmyMkl+dPj95IinooymyKD+g/P11BQUD9Vtu8bc1xrXxpFMUajqVzKmIR6e0Hr6/EMvCO6ktafs56ji4QEHZWZ7xM7N1+4UOK4SENaMddd5N98ctnWT/QGgnDkC4+Ij3d0yVm17RrbZ5eQ/B8ElcDR+DuuuVTWlEuSbH7oum5iYUD6nzBrM/SUHINo5gANuGW5iRafygXEHeFLumalPA+k5uHRo7ZgmJ7n8l3yV5+swG39X3e+QTP63mthSOuxrpu/YsPJ6wnmi3vql80rrpV9T5/U39MzfbikHVRuTmgIAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDgtMThUMTA6MTc6MjUrMDg6MDCNVG5BAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA4LTE4VDEwOjE3OjI1KzA4OjAw/AnW/QAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA0OfBnt7sAAAAWdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgANjE0JZ2GAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE2MjkyNTMwNDVWKY3TAAAAEnRFWHRUaHVtYjo6U2l6ZQAyMTc3QkLyRrxvAAAARnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vYXBwL3RtcC9pbWFnZWxjL2ltZ3ZpZXcyXzlfMTYyNjY3OTAyMjc3ODk5MTRfNDhfWzBdT41eMwAAAABJRU5ErkJggg==',

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
                {
                    name: 'Kidswant',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: getsimboldata(mapName, Kidswant_ARR),
                    symbol: 
                    
                    'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAOCAMAAADzLXfBAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA6lBMVEX////58/f0utv44O7vls/aAHPkZKDUjbT1/+z5//3htc3kxNX315vwpSjzv2j6/PPJVpTb3t3zmw7ylwT63rDv7++/v7764Lj0zIni5K6wyFzh7sa/3oe72nr24e/d5s7z8vTwoB/1mw/yrUH1lgOotRGJvxSfzkLm89PiUajVsZ/DgG/boKbWbqTJmJeorVn2yHvvpjC5xEOOxyCLux3W0LPmEonqyODNZYe/4ISMxBiz03u6qISZkzO3TV/cyc3HSXfg88Ofz0L45cPF34uUxSr0x3jf4+Hn8c/1tEenzlL1s0Pf7b336c4aYRLCAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAAd0SU1FB+UIEhISM5i7kp8AAADmSURBVBjTbY7bWoJAFIUXhiUmEDNOVNCBkQbspLQnKsrsQKVU7/86jXblZ+vy//619gb+idWy1uGGBbu9uYZb7a2O091Gz/X8FX2nGwSBA8Z5f7XhiN1AgDEewt/z9g8i+PFh50gcRydCIJG87w/S9FRl+fDs/OLSvhoZbHw5LlIpr0nflEO7vC3v7hdriZRcSjeMdPXwOBk9TZ8nLwtufJMekJGmqiLSr8vrCTM+d99Qa6J3g6sYfz77KCRn4SeRimNFNFvygps/B5zP0Sid51plwMzMhl9jwPfmIaKmBurmG/hJvF8sQhueTWeR2wAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wOC0xOFQxMDoxODo1MSswODowMILVGMYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDgtMThUMTA6MTg6NTErMDg6MDDziKB6AAAAIHRFWHRzb2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAXdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADE086E/QwAAABZ0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAyM75HOa4AAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTYyOTI1MzEzMR/HtToAAAASdEVYdFRodW1iOjpTaXplADEyMjRCQgbq+noAAABGdEVYdFRodW1iOjpVUkkAZmlsZTovLy9hcHAvdG1wL2ltYWdlbGMvaW1ndmlldzJfOV8xNjI2Njc5MTIyNjg0NzU5OV80MV9bMF0S2fKCAAAAAElFTkSuQmCC',
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
                 {
                    name: 'Leyou',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: getsimboldata(mapName, Leyou_ARR),
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
                  {
                    name: 'Wumart',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: getsimboldata(mapName, Wumart_ARR),
                    symbol: 
                    
                    'image://data:image/png;base64,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10PYo7K1Lf+rtp1v42y7NjeoSlnp/nYcBjSgJnwDfDdwY0uYHc0AKwPsudYKxzM1pjbegJhnaMI6IK+ryg8cmeoBauMnG5XdPnvXwtTZWPbLq+fbcURXJgmABrrtYcJrYdqCKs+iSYVM3URChGLoe2eoYIKBiPNZ+Qx2/c34ALWJgV55et2aI2EENNzJWrf0H5HKV1zeWJPhHKQW04TXELdL9NqXHWrqHrVrG/TYX5Q7x11+9qyNLoxsSHcsPh41ZYbb0R9U29tOFxjP8ZMPAYxUjvQgSb7rG8w41mvjj5Zh2DjWRz+lpm1BcGO/qp73NASZ+S34xHW+H6BGXnGd2xnMzAywPpti5Tih8ukWC8pTg8DZXzTGa0GFglZ9oSWpufvUFDQA2rWtOfsGQuaz8uT5W+0AtQlx9HaKcYHtuubtG2ayHRY+UegvwsC75jBRoWG7WMW9les1aG2YOIvxbL4WnnTL245njj1T9qg96xG1H2T0l0aoYSkKGvYgb/lKwoCNxTJv3lbPz0sXl8cxNeUJK8T12U7D9ZqgYblB0k6sa9JKfHXiGKRcNIMYGYaBJ4WLniGMQXoUFjXMQRmAwTUKPqBxz1C+frqf29iQ9BlToVOixjMmu9TSvCYMSY2OlJUmaBAq8JjxlSSCsgqsPKjC9OaOqJxDDt7M0VUflaBQoXlinzHAtI0dfrwNklxZILBZQmtmKnSyREU2w43vNeGadMCFhscn7MnbandhT54sTWzetqW96OTUMFcQ6BU2NfsRcxs35S9xH3/CLuBQgI0GXnkTNIBCXAjeZPqaSmLhB9H/CTVhNfd83yRLQ9PzdHUSbenbD8PzPceHRAQRd4HHjrqxfd8mHfK76fueGeSlZ3u+OROmSx2VzaKjYan7vm5NlTsQ9YPcmFgg6utzlVJzQKGfSm0yArwE96E14I1de8RFBUXWjyTMbzgxWqNtBaXXQa094hAiT1ZfaP2pL/AI1wyVzE/iudFLVAoaWRpNhXe84x0h/v7dBN7xH8A/AeWIF5GHq2JGAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA4LTE4VDEwOjE3OjMwKzA4OjAwE8ZBeAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wOC0xOFQxMDoxNzozMCswODowMGKb+cQAAAAgdEVYdHNvZnR3YXJlAGh0dHBzOi8vaW1hZ2VtYWdpY2sub3JnvM8dnQAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABd0RVh0VGh1bWI6OkltYWdlOjpIZWlnaHQANji1VuWvAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADE1NJZ6yzEAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTYyOTI1MzA1MD9YSB0AAAASdEVYdFRodW1iOjpTaXplADM5MDNCQpO0tG4AAABGdEVYdFRodW1iOjpVUkkAZmlsZTovLy9hcHAvdG1wL2ltYWdlbGMvaW1ndmlldzJfOV8xNjI2Njc5MDYyNDQ2NTA1NF8yOF9bMF3OnIOjAAAAAElFTkSuQmCC',
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