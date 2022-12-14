option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'none' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['考勤分', '资源处理中心分', '收集率分'],
        top: 20
    },
    color: ['#3B87E1', '#69AAF6', '#99C8FF'],
    grid: {
        top: 70,
        left: 20,
        bottom: 20,
        containLabel: true
    },
    dataZoom: [{
            height: 3,
            bottom: 0,
            start: 0,
            end: 60,
            // end:1,
            borderColor: 'rgba(0,0,0,0)',
            dataBackground: {
                lineStyle: {
                    width: 0
                },
                areaStyle: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            handleSize: '0%',
            textStyle: {
                color: 'rgba(154,161,169,1)',
                fontSize: 9,
                fontWeight: 400
            }
        },
        {
            type: 'inside'
        }
    ],
    xAxis: {
        type: 'category',
        // max:5,
        data: ["杨祥银", " 罗星街道-鑫锋村16", "罗星街道-厍浜村9", "马田里", "姜春宝", "三头村保洁员11", "丁福明", "溪东保洁员", "罗星街道-鑫锋村26", "周志良",
            "罗星街道-鑫锋村21", "潘青青", "塘下", "保洁员1", "何有亮", "奚立飞", "上董村保洁员2", "郑金芬", "蒋坞村2区", "罗星街道-厍浜村19", "俞亚珍", "大泖村保洁员3",
            "冯海朝", "徐国荣", " 罗星街道-鑫锋村2", "徐中法", " 罗星街道-马家桥村8", "大通村保洁员2", "武段军", "罗星街道-马家桥村14", "周国英", "赵土林", "大石盖村保洁员4",
            "汪瑞华", "徐学林", "排上村", "罗星街道-厍浜村10", "陈言胜", "九峰村保洁员2", "三头村保洁员12", " 罗星街道-鑫锋村17", "杨飞", "朱放儿", "陈荣田", "吴小星",
            "黄金妹", "里庄", "2区保洁员", "杨华英", "大泖村保洁员4", "大棚里", "上董村保洁员3", "罗星街道-厍浜村20", "ceshi", "高渭金", " 罗星街道-鑫锋村3",
            "石马头村保洁员3", " 罗星街道-马家桥村9", "保洁员2", "汤阿良", "罗星街道-鑫锋村22", "冯小金", "濮金水33", "杨志根", "罗星街道-鑫锋村27", "巫金梅", "林万州",
            "卢小三", "邱芽群", "阆苑村3区", "双庙村香樟湖畔小区", "阮建青", "岩坞村", "大石盖村保洁员5", "张跃光", "罗星街道-鑫锋村18", "大通村保洁员3", "吕森林", "黄志军",
            "三头村保洁员13", "李美玉", "塘沙坞", "罗星街道-马家桥村15", "罗星街道-厍浜村11", "陈彩云", "罗星街道-和合社区12", "杨学飞", " 罗星街道-鑫锋村4", "联星村保洁",
            "上董村保洁员4", "朱桂生", "胡公庙", "石艳春", "沈银寿", "关家片", "王贤土", "李海燕", "张德和", "许小林", "苏月清", "枫南村保洁员1", "徐金有", "罗星街道-厍浜村21",
            "岩下村", "马玉娥", "罗星街道-亭桥村1", "孙木云", "徐学冲", "仇岭坞", "袁志金", "测试", "陈兴观", "彭邵明", "陈水莲", "胡秀花", "岭脚金村保洁员", "三头村保洁员14",
            "罗星街道-厍浜村12", "徐苗生", "石马头村保洁员4", "潘美雅", "毛为清", "小吉自然村", "阆苑村6区", "罗星街道-和合社区13", "汤家埠村保洁员2", "保洁员3", "枫南村保洁员2",
            "罗星街道-马家桥村16", "九峰村保洁员1", "仇福奶", " 罗星街道-鑫锋村5", "上董村保洁员5", "祝岳鸿", "新桥头", "唐生良", "鲍迪中", "测试保洁员2", "张春华", "张建明",
            "新润村保洁员1", "沈兴宝", "罗星街道-亭桥村2", "测试保洁员A", "罗星街道-厍浜村22", "王生强", "陈江水", "旭日村", "杨开军", "高坎头", "蒋777", "吴上康",
            "罗星街道-和合社区14", "三头村保洁员1", "朱学峰", "葛江平", "前洋村保洁员3", "大石盖村保洁员6", "枫南村保洁员3", "罗星街道-厍浜村13", "屠志宏", "惠通村保洁员1", "王长生",
            "罗望兴", "张金荣", " 罗星街道-和合社区1", "黄永根", "山支头村", "浮桥埠村3区", "罗星街道-城西社区5", "天凝社区", "沈阿玲", "戴坛根", "汤家埠村保洁员3", "王村、突沙",
            "周珠珍", "童纪年", "草坪村", "阆苑村5区", "金银姣", "罗星街道-厍浜村23", "罗星街道-鑫锋村19", "罗星街道-亭桥村3", "桥东村保洁员1", " 罗星街道-鑫锋村6", "邱玉华",
            "枫南村保洁员4", "严和木", "毛小和", "陈定珍", "新润村保洁员2", "张梅忠", "丁天栋", "泥埂塘", "宋伯成", "罗星街道-和合社区15", "刘先年", "陆建芳", "惠通村保洁员2",
            "罗星街道-厍浜村14", "尚家村", "顾金富", "胡君良", " 罗星街道-和合社区2", "三角店村", "高家", "石马头村保洁员5", "砚头林村2区", "三头村保洁员2", "黄土新", "小洋新城",
            "前洋村保洁员2", "张杏生", "孟根林", "九峰村保洁员3", "章丽华", "南三村保洁员1", "车头村保洁", "李竹金", "刘正泉", "黄健萍", "杨明荣", "枫南村保洁员5",
            "大石盖村保洁员7", "罗星街道-厍浜村1", "罗星街道-亭桥村4", "陈忠会", "叶新顺", "俞祖禄", "葛夏素", "毛美华", " 罗星街道-鑫锋村7", "潘爱贞", "罗星街道-城西社区6",
            "1区", "罗星街道-和合社区16", "盖门村1区保洁员", "王明华", "陈跃明", "罗星街道-亭桥村5", "童守真", "罗星街道-厍浜村15", "郑洪具", "巫爱金", "叶来富", "桥东村保洁员2",
            " 罗星街道-和合社区3", "姜春满", "薛爱珍", "前岸", "渔民村", "枫南村保洁员6", "陈潮云", "新润村保洁员3", "周春兰", "牛成富", "fe", "汪关泉", "黄山泊",
            "南三村保洁员2", "王冲娟", "三头村保洁员3", "倪剑敏", "胡建成", "石马头村保洁员6", "谢钟毕", "罗星街道-和合社区17", " 罗星街道-城西社区1", "罗星街道-城西社区7",
            "大石盖村保洁员8", "枫南村保洁员7", " 罗星街道-鑫锋村8", "张桂夫", "砚头林村1区", "马银庆", "测试保洁4", "莫金富", "2区", "蒋2222", "陈兴观", "横泾桥社区保洁员1",
            "储羊古", "余贤邦", "罗星街道-厍浜村24", "罗星街道-厍浜村16", "王明祥", "潘国凤", "仇卸根", "陈根仁", "阆苑村4区", "阆苑村1区", "罗星街道-亭桥村6", "丁天旭",
            " 罗星街道-和合社区4", "朱洪国", "罗星街道-厍浜村2", "叶香琴", "大石盖村保洁员1", "上贝村2区", "石文博", "潘月英", "南山下", "吴前芳", "陈积叶", "保洁员3",
            "亭屿村保洁", "汪良英", "沈春凤", "童章福", "南三村保洁员3", "保洁员1", "毛家社区保洁员1", "梁柳英", " 罗星街道-城西社区2", "赵阿三", "李家桥", " 罗星街道-鑫锋村9",
            "三头村保洁员4", "大石盖村保洁员9", "俞海康", "2区保洁员", "罗星街道-和合社区18", " 罗星街道-和合社区5", "罗星街道-城西社区8", "葛其标", "花厅下", "里贺宅",
            "三合村保洁员1", "罗星街道-厍浜村17", "刘开仕", "罗星街道-厍浜村3", "石马头村保洁员7", "枫南村保洁员8", "万金旺", "母岭", "3区", "陈开勋", "陈牡娟 ", "蒋善尧",
            "横泾桥社区保洁员2", "毛家社区保洁员2", "张洪钦", "大石盖村保洁员2", "包玉秀", "马爱娟", "张建富", "上贝村1区", "南山村保洁员4", "张建锋", "罗星街道-亭桥村7",
            "测试保洁员1", "叶洵华", "塘前坞", "童遵校", "徐火平", " 罗星街道-城西社区3", " 罗星街道-鑫锋村10", "张万松", " 罗星街道-马家桥村1", "梁照连", "沈金海",
            "三头村保洁员5", "陈锦芳", "大石盖村保洁员10", "小塘桥头", "罗星街道-和合社区19", "罗林成", "姚昌权", " 罗星街道-和合社区6", "保洁员2", "塘园里", "上塘坞", "赵延安",
            "诸秋银", "罗星街道-厍浜村4", "南三村保洁员5", "沈健民", "舒富君", "章燕树", "毛羊宜", "罗星街道-厍浜村25", "张宝花", "塘头", "邵寅儿", "罗星街道-亭桥村8",
            "庆丰村1区", " 罗星街道-鑫锋村11", "刘正秀", "周浩成", " 罗星街道-城西社区4", "曙光村保洁员1", "三头村保洁员6", "蒋僧桥村保洁", "蒋666", "叶会忠", "4区",
            "大石盖村保洁员3", "张牌村", " 罗星街道-马家桥村2", "阆苑村2区", "上下坦", "大石盖村保洁员11", "枫南村保洁员9", " 罗星街道-和合社区7", "裘金花", "前山",
            "石马头村保洁员8", "陈喜", "濮金水", "陈喜", "胡树林", "杨太祥", "孙仙丽", "祝桂荣", "吴双土", "保洁员1", " 罗星街道-鑫锋村12", "彭立强", "王凤亚",
            "罗星街道-厍浜村5", "王玉英", "罗星街道-厍浜村26", "钟有林", "罗星街道-马家桥村10", "徐苏兰", "陈远章", "沈树华", "庆丰村2区", "张汇社区保洁员1", "申屠丽娟",
            "三头村保洁员7", " 罗星街道-马家桥村3", "应村保洁员1", "保洁员3", "杨海良", " 罗星街道-和合社区8", "鲁水木", "5区", "大石盖村保洁员12", "坑口村保洁员", "优家村保洁员1",
            "杨和巷", "枫南村保洁员10", "佳山坞", "朱义民", "石马头村保洁员9", "居委会1区", "柯志山", "下竹寺", "阆苑村9区", "罗星街道-鑫锋村23", " 罗星街道-鑫锋村13", "张金方",
            "大郑村保洁员", "前洋村保洁员1", "张汇社区保洁员2", "潘进", "雷菊花", "王娌娌", "曙光村保洁员2", "罗星街道-马家桥村11", "杨小盘", "罗星街道-和合社区10",
            " 罗星街道-马家桥村4", "陶爱群", "谢清苗", "罗星街道-厍浜村6", "ylj", "上贝村3区", "保洁员4", " 罗星街道-和合社区9", "三头村保洁员8", "石马头村保洁员10", "毛春财",
            "应村保洁员2", "大石盖村保洁员13", "6区", "优家村保洁员2", "陈素君", "张汇社区保洁员3", "姚兆茂", "谢秋胜", "张梅宪", "上马石", "行台", "大坟头", "俞凤信",
            " 罗星街道-鑫锋村14", " 罗星街道-马家桥村5", "骆永勤", "蒋33", "罗星街道-和合社区11", "吴德成", "缪友年", "罗星街道-厍浜村7", "石马头村保洁员1", "罗星街道-鑫锋村24",
            "许照兵", "王继尧", "张建国", "杨建秀", "江效成", "三头村保洁员9", "罗星街道-马家桥村12", "张汇社区保洁员4", "马小洪", "范茶香", "姜岩下", "阆苑村7区", "杨建福",
            "保洁员5", "芦士村1区", "蒋坞村一区", "裘旦献", "张妹珍", "吴秋琴", "魏水祥", " 罗星街道-马家桥村6", " 罗星街道-鑫锋村15", "罗星街道-厍浜村8", "章芽娟", "周龙兴",
            "罗星街道-鑫锋村20", "罗星街道-鑫锋村25", "周林森", "卫老又", "外棚", "罗诗群", "马武云", "三头村保洁员10", "高海山", "大沿路村保洁员", "大泖村保洁员1",
            "大通村保洁员1", "联北村保洁", "张汇社区保洁员5", "上董村保洁员1", "冯彩凤", "周福成", "方贤茂", "汤家埠村保洁员1", "石马头村保洁员2", "csq", "罗星街道-厍浜村18",
            "顾支义", "罗星街道-马家桥村13", "大山村保洁员", " 罗星街道-鑫锋村1", " 罗星街道-马家桥村7", "何国良", "1区保洁员", "许国良", "大泖村保洁员2", "阆苑村8区"
        ],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }, //坐标轴
        nameGap: 20,
        axisLabel: {
            interval: 0,
            formatter: function(params) {
                var newParamsName = "";
                var paramsNameNumber = params.length;
                var provideNumber = 5; //一行显示几个字
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                if (paramsNameNumber > provideNumber) {
                    for (var p = 0; p < rowNumber; p++) {
                        var tempStr = "";
                        var start = p * provideNumber;
                        var end = start + provideNumber;
                        if (p == rowNumber - 1) {
                            tempStr = params.substring(start, paramsNameNumber);
                        } else {
                            tempStr = params.substring(start, end) + "\n";
                        }
                        newParamsName += tempStr;
                    }

                } else {
                    newParamsName = params;
                }
                return newParamsName
            },
            textStyle: {
                color: 'rgba(154,161,169,1)',
                fontSize: 9,
                fontWeight: 400
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#E9EBF1'
            }
        }
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#E9EBF1'
            }
        }, //坐标轴
        axisLabel: {
            textStyle: {
                color: 'rgba(154,161,169,1)',
                fontSize: 10,
                fontWeight: 400
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#E9EBF1'
            }
        }
    },
    series: [{
            name: '收集率分',
            type: 'bar',
            barWidth: 10,
             stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'inside'
                }
            },
            data: [2, 4, 6, 8, 10, 20, 5, 15, 30, 6, 68, 100, 88, 69, 0.0, 47, 15, 36, 12, 57, 64, 8, 200, 0.0, 25, 33, 8,
                34, 21, 0.0, 58, 0.0, 60, 0.0, 66, 0.0, 49, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1, 3, 5, 7, 65, 9, 14, 34, 21, 18, 6, 57, 5, 49, 24, 66, 32, 4,
                8, 48, 6, 8, 9, 63, 7, 5, 45, 9, 88, 72, 28, 16, 98

            ],

            itemStyle: {
                barBorderRadius: [0, 0, 100, 100]
            }
        },
        {
            name: '资源处理中心分',
            type: 'bar',
            barWidth: 10,
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'inside'
                }
            },
            data: [1, 3, 5, 7, 65, 9, 14, 34, 21, 18, 6, 57, 5, 49, 24, 66, 32, 4, 8, 48, 6, 8, 9, 63, 7, 5, 45, 9, 88, 72,
                28, 16, 98, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0
            ],
        },
        {
            name: '考勤分',
            type: 'bar',
            barWidth: 10,
            stack: '总量',
            data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 52, 56, 58, 60, 62, 64, 66, 68, 70, 75, 80, 82, 84, 86, 88, 90, 92,
                94, 96, 98, 100, 102, 105, 108, 110, 115, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0
            ],
            itemStyle: {
                barBorderRadius: [100, 100, 0, 0]
            }
        }
    ]
};