option = {
    title: {
        text: '政策留言情感知识图谱'
    },
    tooltip: {
        formatter: function(x) {
            return x.data.des;
        }
    },
    legend: { // 图例显示（显示在右上角），name:类别名称，icon:图例的形状（默认是roundRect圆角矩形）。
        show: true,
        top: '5%',
        data: [{
            name: '来源'
        }, {
            name: '政策留言'
        }, {
            name: '一级分类'
        }, {
            name: '二级分类'
        }, {
            name: '三级分类'
        }, {
            name: '日期'
        }, {
            name: '情感值'
        }, {
            name: '乐'
        }, {
            name: '好'
        }, {
            name: '怒'
        }, {
            name: '哀'
        }, {
            name: '惧'
        }, {
            name: '恶'
        }, {
            name: '惊'
        }, {
            name: '快乐'
        }, {
            name: '安心'
        }, {
            name: '尊敬'
        }, {
            name: '赞扬'
        }, {
            name: '相信'
        }, {
            name: '喜爱'
        }, {
            name: '祝愿'
        }, {
            name: '愤怒'
        }, {
            name: '悲伤'
        }, {
            name: '失望'
        }, {
            name: '内疚'
        }, {
            name: '思念'
        }, {
            name: '慌张'
        }, {
            name: '恐惧'
        }, {
            name: '羞愧'
        }, {
            name: '烦闷'
        }, {
            name: '憎恶'
        }, {
            name: '贬责'
        }, {
            name: '妒忌'
        }, {
            name: '怀疑'
        }, {
            name: '惊奇'
        }]
    },
    series: [{
        type: 'graph', // 关系图
        //name: '', // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
        layout: 'force', // 图的布局，类型为力导图，'circular' 采用环形布局，见示例 Les Miserables
        legendHoverLink: true, // 是否启用图例 hover(悬停) 时的联动高亮。
        hoverAnimation: true, // 是否开启鼠标悬停节点的显示动画
        coordinateSystem: null, // 坐标系可选
        xAxisIndex: 0, // x轴坐标 有多种坐标系轴坐标选项
        yAxisIndex: 0, // y轴坐标 
        force: { // 力引导图基本配置
            // initLayout: , // 力引导的初始化布局，默认使用xy轴的标点
            repulsion: 500, // 节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
            gravity: 0.02, // 节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
            edgeLength: 200, // 边的两个节点之间的距离，这个距离也会受 repulsion影响 。值越大则长度越长
            layoutAnimation: true // 因为力引导布局会在多次迭代后才会稳定，这个参数决定是否显示布局的迭代动画
            // 在浏览器端节点数据较多（>100）的时候不建议关闭，布局过程会造成浏览器假死。                        
        },
        roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启，true 为都开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'
        nodeScaleRatio: 0.6, // 鼠标漫游缩放时节点的相应缩放比例，当设为0时节点不随着鼠标的缩放而缩放
        draggable: true, // 节点是否可拖拽，只在使用力引导布局的时候有用。
        focusNodeAdjacency: true, // 是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
        // symbol:'roundRect', // 关系图节点标记的图形。
        // ECharts 提供的标记类型包括：'circle'(圆形), 'rect'（矩形）, 'roundRect'（圆角矩形）,
        // 'triangle'（三角形）, 'diamond'（菱形）, 'pin'（大头针）, 'arrow'（箭头）
        // 也可以通过 'image://url' 设置为图片，其中 url 为图片的链接。'path:// 这种方式可以任意改变颜色并且抗锯齿
        // symbolSize: 10 , // 也可以用数组分开表示宽和高，例如 [20, 10] 如果需要每个数据的图形大小不一样，
        // 可以设置为如下格式的回调函数：(value: Array|number, params: Object) => number|Array
        // symbolRotate:, // 关系图节点标记的旋转角度。注意在 markLine 中当 symbol 为 'arrow' 时会忽略 symbolRotate 强制设置为切线的角度。
        // symbolOffset:[0,0], // 关系图节点标记相对于原本位置的偏移。[0, '50%']
        edgeSymbol: ['none', 'none'], // 边两端的标记类型，可以是一个数组分别指定两端，也可以是单个统一指定。
        // 默认不显示标记，常见的可以设置为箭头，如下：edgeSymbol: ['circle', 'arrow']
        edgeSymbolSize: 10, // 边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定。

        itemStyle: { // ========图形样式，有 normal 和 emphasis 两个状态。
            // normal 是图形在默认状态下的样式；
            // emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
            normal: { // 默认样式
                label: {
                    show: true
                },
                borderType: 'solid', // 图形描边类型，默认为实线，支持 'solid'（实线）, 'dashed'(虚线), 'dotted'（点线）。
                borderColor: 'rgba(205, 149, 12, 0.4)', // 设置图形边框为淡金色,透明度为0.4
                borderWidth: 2, // 图形的描边线宽。为 0 时无描边。
                opacity: 1 // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5

            },
            emphasis: { // 高亮状态

            }
        },
        lineStyle: { // ========关系边的公用线条样式。
            normal: {
                color: 'rgba(255, 0, 255, 0.4)',
                width: '1', //线的粗细
                type: 'solid', // 线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                curveness: 0.3, // 线条的曲线程度，从0到1
                opacity: 0.5 // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
            },
            emphasis: { // 高亮状态

            }
        },
        label: { // ========结点图形上的文本标签
            normal: {
                show: true, // 是否显示标签。
                position: 'inside', // 标签的位置。['50%', '50%'] [x,y]
                textStyle: { // 标签的字体样式
                    color: '#d3d7d4', // 字体颜色 #cde6c7 #d1c7b7 #d9d6c3 #d3d7d4
                    fontStyle: 'normal', // 文字字体的风格 'normal'标准 'italic'斜体 'oblique' 倾斜
                    fontWeight: 'bolder', // 'normal'标准，'bold'粗的，'bolder'更粗的，'lighter'更细的，或100 | 200 | 300 | 400...
                    fontFamily: 'sans-serif', // 文字的字体系列
                    fontSize: 12, // 字体大小
                }
            },
            emphasis: { // 高亮状态

            }
        },
        edgeLabel: { // ========连接线上的文本标签 
            normal: {
                show: false // 不显示连接线上的文字，如果显示只能显示结点的value值，而不是连接线的值
            },
            emphasis: { // 高亮状态

            }
        },
        categories: [ // name(类别名称)要同legend(图例）按次序一致
            {
                name: '来源'
            }, {
                name: '政策留言'
            }, {
                name: '一级分类'
            }, {
                name: '二级分类'
            }, {
                name: '三级分类'
            }, {
                name: '日期'
            }, {
                name: '情感值'
            }, {
                name: '乐'
            }, {
                name: '好'
            }, {
                name: '怒'
            }, {
                name: '哀'
            }, {
                name: '惧'
            }, {
                name: '恶'
            }, {
                name: '惊'
            }, {
                name: '快乐'
            }, {
                name: '安心'
            }, {
                name: '尊敬'
            }, {
                name: '赞扬'
            }, {
                name: '相信'
            }, {
                name: '喜爱'
            }, {
                name: '祝愿'
            }, {
                name: '愤怒'
            }, {
                name: '悲伤'
            }, {
                name: '失望'
            }, {
                name: '内疚'
            }, {
                name: '思念'
            }, {
                name: '慌张'
            }, {
                name: '恐惧'
            }, {
                name: '羞愧'
            }, {
                name: '烦闷'
            }, {
                name: '憎恶'
            }, {
                name: '贬责'
            }, {
                name: '妒忌'
            }, {
                name: '怀疑'
            }, {
                name: '惊奇'
            }
        ],
        // 设置结点node的数据
        // category: 类别序号，从0开始
        // name: 结点图形显示的文字
        // value: 鼠标点击结点，显示的数字
        // symbolSize: 结点图形的大小
        // symbol: 类目节点标记图形，默然为圆形
        // label: 标签样式
        data: [{
                name: '悲伤:1',
                des: '悲伤:1',
                category: '悲伤',
                symbolSize: 130
            },
            {
                name: '哀',
                des: '哀',
                symbolSize: 110,
                category: '哀'
            },
            {
                name: '快乐:8',
                des: '快乐:8',
                category: '快乐',
                symbolSize: 130
            },
            {
                name: '赞扬:39',
                des: '赞扬:39',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '医疗改革',
                des: '医疗改革',
                symbolSize: 90,
                category: '三级分类'
            },
            {
                name: '留言27',
                des: '我的家乡处于江南丘陵地区，<br/>有湖有河，<br/>有山有水，<br/>几乎没有发生过旱灾或者水灾，<br/>是一个鱼米之乡，<br/>但是近几年越来越多的人外出打工，<br/>家乡经济凋敝，<br/>农田荒芜。<br/>家乡经济发展不起来，<br/>就吸引不住年轻人。<br/>现在政府在鼓励创新创业，<br/>而大多数的创业都集中在互联网上，<br/>我觉得农村这一块也可以搭上互联网创业的快车，<br/>利用互联网+农业农村，<br/>把家乡的特色与传统推向全国、甚至世界，<br/>但也要注意对特色传统本质的提升。<br/>由此，<br/>希望家乡的经济能够活跃起来，<br/>家乡能越来越美丽。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '情感值:30',
                des: '情感值:30',
                symbolSize: 130,
                category: '情感值'
            },
            {
                name: '情感值:33',
                des: '情感值:33',
                symbolSize: 130,
                category: '情感值'
            },
            {
                name: '留言36',
                des: '总理您好，<br/>我是一名普通的外来务工人员，<br/>针对有病不能医、有病不敢医的问题，<br/>希望国家能建立健全的医保政策，<br/>从根本去解决看病贵、看病难的问题。<br/>我个人觉得调整药品价格，<br/>不如人人都有医保，<br/>毕竟调整药品价格后医院也随着调整用药方子，<br/>国家调整什么，<br/>他就不用什么，<br/>什么贵他用什么。<br/>我们的职工医疗保险，<br/>在就职期间正常缴纳，<br/>下岗或是换工作期间，<br/>保险就自然中断，<br/>建议有一个部门专门审核，<br/>管理这些事项，<br/>专门给咱们这些断了职工险的民工继续上医疗保险。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '赞扬:3',
                des: '赞扬:3',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '相信:8',
                des: '相信:8',
                category: '相信',
                symbolSize: 130
            },
            {
                name: '病有所医',
                des: '病有所医',
                symbolSize: 90,
                category: '三级分类'
            },
            {
                name: '相信:7',
                des: '相信:7',
                category: '相信',
                symbolSize: 130
            },
            {
                name: '情感值:20',
                des: '情感值:20',
                symbolSize: 130,
                category: '情感值'
            },
            {
                name: '民生保障',
                des: '民生保障',
                symbolSize: 90,
                category: '三级分类'
            },
            {
                name: '教育考试',
                des: '教育考试',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '情感值:32',
                des: '情感值:32',
                symbolSize: 130,
                category: '情感值'
            },
            {
                name: '中国日报网',
                des: '中国日报网',
                symbolSize: 130,
                category: '来源'
            },
            {
                name: '今日头条',
                des: '今日头条',
                symbolSize: 130,
                category: '来源'
            },
            {
                name: '安心:15',
                des: '安心:15',
                category: '安心',
                symbolSize: 130
            },
            {
                name: '悲伤:14',
                des: '悲伤:14',
                category: '悲伤',
                symbolSize: 130
            },
            {
                name: '科技创新',
                des: '科技创新',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '憎恶:1',
                des: '憎恶:1',
                category: '憎恶',
                symbolSize: 130
            },
            {
                name: '快乐:7',
                des: '快乐:7',
                category: '快乐',
                symbolSize: 130
            },
            {
                name: '相信:5',
                des: '相信:5',
                category: '相信',
                symbolSize: 130
            },
            {
                name: '留言21',
                des: '随着互联网经济的发展，<br/>互联网体育也得到飞速发展，<br/>财团们把眼光聚焦于明星体育，<br/>而有多少在意过老百姓的体育，<br/>群众体育蒸蒸日上不是让老百姓作为观众观看“明星体育”，<br/>而是让老百姓参与到“真正”的体育运动中，<br/>让老百姓玩得起体育运动。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '喜爱:5',
                des: '喜爱:5',
                category: '喜爱',
                symbolSize: 130
            },
            {
                name: '留言38',
                des: '在中国，<br/>优质的医疗资源一般都集中在大城市，<br/>这就造成了城市和农村医疗水平存在巨大差距。<br/>中国的医疗体系需要改革，<br/>以便让农村的医生也能与大城市医院的专家信息共享，<br/>更好地为患者服务。<br/> ',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '赞扬:18',
                des: '赞扬:18',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '留言29',
                des: '12306买火车票太难了，<br/>希望总理能够关注这个问题，<br/>在2016年让卖票的网络能够顺畅些！<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '文体生活',
                des: '文体生活',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '留言9',
                des: '越来越多的农民被征地，<br/>然后转为了工人，<br/>他们付出了赖以生存安身立命的宝贵财富——土地，<br/>可是到了企业，<br/>农龄不被认作工龄，<br/>半辈子辛苦工作不被企业承认。<br/>让支持国家建设任劳任怨的农民瞬间一无所有，<br/>面对农民合理诉求，<br/>企业强势不理我行我素，<br/>让农民受到不公正的不公平的不合理的低工资条件和低养老金待遇。<br/>同在蓝天下，<br/>党和国家大力构建和谐社会，<br/>努力实现美好中国梦，<br/>让我们征地农转工能老有所养老有所依，<br/>共享美好的明天。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '消费市场',
                des: '消费市场',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '失望:5',
                des: '失望:5',
                category: '失望',
                symbolSize: 130
            },
            {
                name: '悲伤:7',
                des: '悲伤:7',
                category: '悲伤',
                symbolSize: 130
            },
            {
                name: '留言18',
                des: '昂贵的专利申请、维护费用和繁琐的申请程序令草根发明者望而却步，<br/>希望在“大众创业、万众创新”的大环境下，<br/>降低专利申请门槛，<br/>简化申请程序，<br/>激发万众创新的热情，<br/>让草根发明者的梦想与创意更好地连接现实！<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '留言25',
                des: '总理，<br/>您好。<br/>建议加快推进公路、铁路以及水运航道等综合交通运输体系建设，<br/>对影响城市市区规划建设的繁忙通道进行改扩建，<br/>合理规划布局物流基础设施，<br/>完善物流通道，<br/>构建便捷、高效的物流基础设施网络，<br/>促进多种运输方式顺畅衔接和高效中转，<br/>提升物流体系综合能力。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '赞扬:7',
                des: '赞扬:7',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '就业政策',
                des: '就业政策',
                symbolSize: 90,
                category: '三级分类'
            },
            {
                name: '贬责:6',
                des: '贬责:6',
                category: '贬责',
                symbolSize: 130
            },
            {
                name: '赞扬:17',
                des: '赞扬:17',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '工资收入',
                des: '工资收入',
                symbolSize: 90,
                category: '三级分类'
            },
            {
                name: '好',
                des: '好',
                symbolSize: 110,
                category: '好'
            },
            {
                name: '留言34',
                des: '现在买同一种药，<br/>一个医院一个价，<br/>一个药店一个价，<br/>多个地方多个价，<br/>实属乱象。<br/>建议立法，<br/>要厂家把每瓶每盒每个产品上都打上零售价（确保货真价实），<br/>使消费者和经销商一目了然，<br/>有一个自由选择的空间和权力，<br/>以促进厂家公平竞争，<br/>有利于社会良性发展；铲除医药市场滋生腐败的土壤，<br/>使猖獗的医药蛀虫无利而亡。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '相信:10',
                des: '相信:10',
                category: '相信',
                symbolSize: 130
            },
            {
                name: '赞扬:44',
                des: '赞扬:44',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '药品仪器',
                des: '药品仪器',
                symbolSize: 90,
                category: '三级分类'
            },
            {
                name: '留言31',
                des: '我是北京市街头的摊贩，<br/>自己每天很辛苦的摆着煎饼果子摊，<br/>每天也确实能够赚到一些钱，<br/>也方便了很多上班族。<br/>我建议政府在对这方面的管理上，<br/>可以加强摊位食物安全的检查与监督，<br/>而不是一味的取缔摊位。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '赞扬:52',
                des: '赞扬:52',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '情感值:1',
                des: '情感值:1',
                symbolSize: 130,
                category: '情感值'
            },
            {
                name: '尊敬:7',
                des: '尊敬:7',
                category: '尊敬',
                symbolSize: 130
            },
            {
                name: '留言23',
                des: '在城市建设中，<br/>往往出现主干道、支路干净漂亮，<br/>而最靠近群众的的小街巷脏乱差现象普遍存在，<br/>包括一些一线城市，<br/>县城和小城镇更是如此。<br/>建议我们在做好面子工程时，<br/>进一步加大投入，<br/>搞好小街小巷的硬化、美化、绿化、亮化，<br/>真正践行以人民为中心，<br/>让老百姓感到舒适宜居，<br/>提高获得感和幸福感。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '留言1',
                des: '建议未来高楼设计应多加考虑坠物平台，<br/>可以分层次（金字塔形），<br/>或设置防坠落平台或其他一些相关的安全措施，<br/>或者裙楼可加大加宽或对人形过道设置防护等等，<br/>相信政府会有相关政策支持，<br/>相关专业的技术人员也定能给出合适的思路。<br/>总有一些坠落物防不胜防，<br/>毕竟风险应提前控制，<br/>而不是等发生了才追究责任，<br/>相信大家都是珍爱生命的。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '安心:6',
                des: '安心:6',
                category: '安心',
                symbolSize: 130
            },
            {
                name: '留言6',
                des: '建议借全面深化改革的东风，<br/>国家深改组根据经济发展新常态和国家赋予地方政府的事权，<br/>重新科学核定县级政府在当前新经济形势下，<br/>上缴市级、省级和国家的国税、地税基数，<br/>重新核定转移支付的县区，<br/>让所有县级政府在税负相对公平的基础上，<br/>带领辖区干部群众轻装上阵全面建设小康社会。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '留言3',
                des: '司法公开程度能否更深？<br/>全面推进立案、庭审、执行、听证、文书、审务公开。<br/>继续深化司法公开的重点，<br/>我认为是加强对审判各个环节的公开，<br/>当事人有权在第一时间获悉案件的进展情况。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '政治建设',
                des: '政治建设',
                symbolSize: 130,
                category: '一级分类'
            },
            {
                name: '相信:14',
                des: '相信:14',
                category: '相信',
                symbolSize: 130
            },
            {
                name: '留言5',
                des: '“互联网+”的时代，<br/>网络在社会治理过程中的作用越来越不容忽视，<br/>希望有关部门能够畅通完善网络舆情的上传和反馈渠道，<br/>实现年初计划、年中落实、年末盘点，<br/>一方面帮助提高政府部门效率，<br/>同时也让更多人实实在在享受到网络政务带来的便利。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '情感值:17',
                des: '情感值:17',
                symbolSize: 130,
                category: '情感值'
            },
            {
                name: '新华网',
                des: '新华网',
                symbolSize: 130,
                category: '来源'
            },
            {
                name: '财税金融',
                des: '财税金融',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '文化宣传',
                des: '文化宣传',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '慌张:7',
                des: '慌张:7',
                category: '慌张',
                symbolSize: 130
            },
            {
                name: '规章制度',
                des: '规章制度',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '情感值:22',
                des: '情感值:22',
                symbolSize: 130,
                category: '情感值'
            },
            {
                name: '外贸环境',
                des: '外贸环境',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '网易网',
                des: '网易网',
                symbolSize: 130,
                category: '来源'
            },
            {
                name: '“三农”',
                des: '“三农”',
                symbolSize: 90,
                category: '三级分类'
            },
            {
                name: '中国政府网',
                des: '中国政府网',
                symbolSize: 130,
                category: '来源'
            },
            {
                name: '人民网',
                des: '人民网',
                symbolSize: 130,
                category: '来源'
            },
            {
                name: '安心:5',
                des: '安心:5',
                category: '安心',
                symbolSize: 130
            },
            {
                name: '快乐:35',
                des: '快乐:35',
                category: '快乐',
                symbolSize: 130
            },
            {
                name: '农业为本',
                des: '农业为本',
                symbolSize: 90,
                category: '三级分类'
            },
            {
                name: '尊敬:6',
                des: '尊敬:6',
                category: '尊敬',
                symbolSize: 130
            },
            {
                name: '文化建设',
                des: '文化建设',
                symbolSize: 130,
                category: '一级分类'
            },
            {
                name: '贬责:7',
                des: '贬责:7',
                category: '贬责',
                symbolSize: 130
            },
            {
                name: '赞扬:19',
                des: '赞扬:19',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '情感值:26',
                des: '情感值:26',
                symbolSize: 130,
                category: '情感值'
            },
            {
                name: '烦闷:6',
                des: '烦闷:6',
                category: '烦闷',
                symbolSize: 130
            },
            {
                name: '留言8',
                des: '在全国大众创业，<br/>万众创新的形势下，<br/>中小企业的创新之路尤其艰难，<br/>难的不是创新，<br/>而是创新之后的推广或产业化，<br/>以中小企业的财力、物力和人力很难将一个具有较大市场前景的创新产品快速推向市场，<br/>因此建议政府对市场前景广阔而企业又无力推动市场的产品，<br/>在经调研后进行引导和扶持，<br/>以加快创新产品的推广。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '留言12',
                des: '当前对外贸易发展还有很多需要提升的地方，<br/>金融、物流、消费品、奢侈品，<br/>在国内都还有很多地方需要培养。<br/>当前要做的是建立一个个人可以做外贸的平台，<br/>让国外的友伴来代理国内的商品，<br/>这样通过网络来把中国商品推广出去。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '贬责:3',
                des: '贬责:3',
                category: '贬责',
                symbolSize: 130
            },
            {
                name: '农村建设',
                des: '农村建设',
                symbolSize: 90,
                category: '三级分类'
            },
            {
                name: '留言11',
                des: '快递员经常超时工作，<br/>加班费没有保障，<br/>没有企业的工伤救助，<br/>甚至有的企业也没有为其缴纳养老医疗等社保。<br/>希望能够采取有效措施，<br/>加强劳动法对快递员等新兴职业的法律保障覆盖，<br/>让这个职业群体得到劳动法的法律保障，<br/>享受到应有的权益。<br/>这样既加强了法制建设，<br/>保障了员工权益，<br/>也有利于促进快递行业的长远健康发展。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '赞扬:34',
                des: '赞扬:34',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '留言0',
                des: '希望中央加大县乡村反腐力度，<br/>铲除腐败毒瘤，<br/>畅通人民反腐，<br/>网络等举报渠道，<br/>只有让人民群众参与举报，<br/>纪检监察加大从严力度，<br/>决不容袒护姑息，<br/>对于毒瘤坚决下刀，<br/>反腐才能彻底，<br/>社会才能风清气正！<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '赞扬:10',
                des: '赞扬:10',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '留言43',
                des: '我希望国家加大对森林的保护和管理，<br/>比如在各省建立森林保护管理局，<br/>主要负责种树和保护森林。<br/>种树的工人可以面向全国招，<br/>同时也能适当缓解就业困难的问题。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '怀疑:5',
                des: '怀疑:5',
                category: '怀疑',
                symbolSize: 130
            },
            {
                name: '留言22',
                des: '总理好！<br/>现在个人信息安全真是一个大问题，<br/>网上查找一点信息填个手机号，<br/>之后几天就开始不断有不同的相关机构打电话过来推销，<br/>而且骚扰电话、短信也是频频不断。<br/>希望之后能好好整治一下网络信息安全问题，<br/>保护网民的隐私和权益。<br/>谢谢！<br/> ',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '情感值:11',
                des: '情感值:11',
                symbolSize: 130,
                category: '情感值'
            },
            {
                name: '快乐:1',
                des: '快乐:1',
                category: '快乐',
                symbolSize: 130
            },
            {
                name: '烦闷:3',
                des: '烦闷:3',
                category: '烦闷',
                symbolSize: 130
            },
            {
                name: '快乐:5',
                des: '快乐:5',
                category: '快乐',
                symbolSize: 130
            },
            {
                name: '留言10',
                des: '建议政府建立更多高质量的创业培训机构，<br/>推动更多优秀的企业成为青年创业的实训基地，<br/>为创业青年提供理论与实践相结合、提升创业能力的平台。<br/>如财政、人事、劳动、经贸、农业等方面的职能部门出台政策，<br/>与企业合作建立一批“青年就业创业见习基地”，<br/>按照“财政贴一点，<br/>企业出一点，<br/>青年承担一点”的思路，<br/>为青年在见习期间提供保障和必要的生活补助，<br/>为青年创业就业积累实训经验。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '食品安全',
                des: '食品安全',
                symbolSize: 90,
                category: '三级分类'
            },
            {
                name: '居住环境',
                des: '居住环境',
                symbolSize: 90,
                category: '三级分类'
            },
            {
                name: '乐',
                des: '乐',
                symbolSize: 110,
                category: '乐'
            },
            {
                name: '情感值:15',
                des: '情感值:15',
                symbolSize: 130,
                category: '情感值'
            },
            {
                name: '新浪微博',
                des: '新浪微博',
                symbolSize: 130,
                category: '来源'
            },
            {
                name: '就业培训',
                des: '就业培训',
                symbolSize: 90,
                category: '三级分类'
            },
            {
                name: '中国网',
                des: '中国网',
                symbolSize: 130,
                category: '来源'
            },
            {
                name: '城市建设',
                des: '城市建设',
                symbolSize: 90,
                category: '三级分类'
            },
            {
                name: '医保政策',
                des: '医保政策',
                symbolSize: 90,
                category: '三级分类'
            },
            {
                name: '住房层面',
                des: '住房层面',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '祝愿:5',
                des: '祝愿:5',
                category: '祝愿',
                symbolSize: 130
            },
            {
                name: '安心:14',
                des: '安心:14',
                category: '安心',
                symbolSize: 130
            },
            {
                name: '生态文明建设',
                des: '生态文明建设',
                symbolSize: 130,
                category: '一级分类'
            },
            {
                name: '情感值:3',
                des: '情感值:3',
                symbolSize: 130,
                category: '情感值'
            },
            {
                name: '经济建设',
                des: '经济建设',
                symbolSize: 130,
                category: '一级分类'
            },
            {
                name: '留言14',
                des: '关于营商环境的塑造我有几点浅见，<br/>希望能对东北营商环境的改善有帮助:一、给予中小型民企适当的政策支持，<br/>激发民企活力。<br/>二、优选创新标杆、技术专家等企业典型，<br/>树立各行业发展的风向标。<br/>三、建立供应链间的第三方担保制度，<br/>强化企业间合作信任度。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '情感值:18',
                des: '情感值:18',
                symbolSize: 130,
                category: '情感值'
            },
            {
                name: '留言37',
                des: '建议严查医疗腐败，<br/>特别要加强医德教育，<br/>真心关爱生命，<br/>科学合理、因病施治，<br/>奖励守法医生，<br/>杜绝医生违法用患者作试验，<br/>小病治重残，<br/>重惩医务人员以职业之便，<br/>违法违规伤人。<br/>应为医疗事故解决开起绿色通道，<br/>及时化解矛盾，<br/>有追责制度，<br/>让百姓明白每一个程序，<br/>构建和谐的医患关系。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '喜爱:10',
                des: '喜爱:10',
                category: '喜爱',
                symbolSize: 130
            },
            {
                name: '恶',
                des: '恶',
                symbolSize: 110,
                category: '恶'
            },
            {
                name: '创新创业',
                des: '创新创业',
                symbolSize: 90,
                category: '三级分类'
            },
            {
                name: '赞扬:28',
                des: '赞扬:28',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '赞扬:75',
                des: '赞扬:75',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '赞扬:21',
                des: '赞扬:21',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '相信:19',
                des: '相信:19',
                category: '相信',
                symbolSize: 130
            },
            {
                name: '留言24',
                des: '在新型城镇化建设中，<br/>加快实现教育、医疗等基本公共服务由户籍人口向常住人口全面覆盖，<br/>让农村人真正享受到与城市人一样的公平待遇。<br/>把农村建设用地推广到市场，<br/>筹集资金开发利用，<br/>让农村人住上房，<br/>买得起房。<br/>引进无污染企业入驻，<br/>以“美丽中国”为理念，<br/>开发建设绿色旅游田园城镇。<br/>推进“互联网＋”发展城镇旅游，<br/>将特色产品推广出去，<br/>带动就业。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '住房政策',
                des: '住房政策',
                symbolSize: 90,
                category: '三级分类'
            },
            {
                name: '情感值:2',
                des: '情感值:2',
                symbolSize: 130,
                category: '情感值'
            },
            {
                name: '留言15',
                des: '现在国家鼓励支持企业个人定制化生产，<br/>培育精益求精的工匠精神。<br/>现在有一批具有代表性工匠精神的企业走出国门了（航天、高铁、核电）。<br/>在追求个性化的今天，<br/>农村的一些传统工艺品（景泰蓝、木雕、刺绣、蓝印花布……）<br/>展示了农村传统工艺的独特工匠精神！<br/>希望国家能在农村扶持一批个人定制化、<br/>具有工匠精神的个人工作室与企业，<br/>专门制作传统工艺品，<br/>把这些农村传统工艺品推广出去，<br/>走出国门，<br/>这样可以在国际展示中国农村传统文化的魅力，<br/>也可以发扬壮大农村传统工艺品的产业，<br/>培育出更多具有工匠精神的企业出来！<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '赞扬:11',
                des: '赞扬:11',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '情感值:-5',
                des: '情感值:-5',
                symbolSize: 130,
                category: '情感值'
            },
            {
                name: '留言39',
                des: '房子是用来住的、不是用来炒的，<br/>面对过热的房产市场和老百姓买房难的呼声，<br/>要想解决这个难题就要以政府为主提供基本保障，<br/>以市场为主满足多层次需求，<br/>加大中低价位、中小套型普通商品住房供应比例，<br/>加大保障房建设和棚户区改造力度，<br/>建立一套购租并举的住房制度，<br/>促进房地产市场平稳健康发展。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '经济政策',
                des: '经济政策',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '情感值:7',
                des: '情感值:7',
                symbolSize: 130,
                category: '情感值'
            },
            {
                name: '留言32',
                des: '建议养老院的建设与医学院、卫校等医学护理类学校建设统筹。<br/>学校学生是流动的，<br/>一来主要解决现行养老院工作人员因长期面对老病死亡可能造成的精神疲怠甚至心理问题，<br/>二来也给年轻学生以实习的机会，<br/>同时也是开展传统孝道教育、弘扬优秀中华传统文化的有效途径。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '尊敬:5',
                des: '尊敬:5',
                category: '尊敬',
                symbolSize: 130
            },
            {
                name: '留言41',
                des: '期待国家能在加大社会保障性住房建设的同时，<br/>也要加强对申请、审批保障房的监督。<br/>禁止利用职权之便，<br/>将保障性住房作为谋私的工具。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '住房审批',
                des: '住房审批',
                symbolSize: 90,
                category: '三级分类'
            },
            {
                name: '赞扬:6',
                des: '赞扬:6',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '烦闷:5',
                des: '烦闷:5',
                category: '烦闷',
                symbolSize: 130
            },
            {
                name: '节能减排',
                des: '节能减排',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '留言17',
                des: '历史上科举考试制度以文才文章作为选才用人的标准。<br/>现在社会发展了，<br/>学生考大学以语文、数理化、外语等考试成绩录取学生。<br/>时代变了，<br/>治国理政之策应该是高考学生的一个重要标准。<br/>让考生在政治、经济、军事、文化、科技这些主要领域中发挥他的见解见地，<br/>并提出具体的发展方案和措施。<br/>这样，<br/>将国家的大事和培养学生“天下兴亡匹夫有责”的爱国精神结合起来，<br/>从大学开始培养这样的学生，<br/>带着爱国情怀学习，<br/>将来带着爱国情怀工作。<br/>他们在以上学科里一旦走到世界的前沿，<br/>这将对中华民族的伟大复兴起着不可估量的作用。<br/>这些人才是德才兼备的爱国人才，<br/>决不是唯利是图的小人。<br/>我认为，<br/>从高考开始选拔一批这样的人才进行重点培养，<br/>对国家的兴旺发达、人民的幸福安康是一个长治久安之计。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '失望:3',
                des: '失望:3',
                category: '失望',
                symbolSize: 130
            },
            {
                name: '喜爱:3',
                des: '喜爱:3',
                category: '喜爱',
                symbolSize: 130
            },
            {
                name: '快乐:21',
                des: '快乐:21',
                category: '快乐',
                symbolSize: 130
            },
            {
                name: '情感值:8',
                des: '情感值:8',
                symbolSize: 130,
                category: '情感值'
            },
            {
                name: '憎恶:3',
                des: '憎恶:3',
                category: '憎恶',
                symbolSize: 130
            },
            {
                name: '央视网',
                des: '央视网',
                symbolSize: 130,
                category: '来源'
            },
            {
                name: '情感值:27',
                des: '情感值:27',
                symbolSize: 130,
                category: '情感值'
            },
            {
                name: '交通物流',
                des: '交通物流',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '尊敬:3',
                des: '尊敬:3',
                category: '尊敬',
                symbolSize: 130
            },
            {
                name: '城市发展',
                des: '城市发展',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '留言28',
                des: '无农不稳，<br/>无粮则乱，<br/>粮食问题是一个关系到国家社会稳定的根本问题。<br/>近几年有些农民种粮不赚钱，<br/>改种其它农作物，<br/>农村青壮年不愿在农村种地，<br/>出门打工挣钱，<br/>农田大面积撂荒，<br/>这样就给粮食安全埋下了隐患；粮食安全不单是一个经济问题，<br/>更是一个影响社会稳定、关系国计民生的问题，<br/>建议政府和有关部门齐抓共管，<br/>采取措施，<br/>必须守住耕地红线，<br/>提升粮食生产能力，<br/>要提高粮食价格，<br/>调动农民种粮积极性，<br/>加大粮食补贴，<br/>加大政策支持力度，<br/>要坚持科学种田，<br/>实现农民增产和增收，<br/>做到“手中有粮，<br/>心中不慌”，<br/>确保我国粮食安全。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '留言40',
                des: '总理您好，<br/>现在的住宅小区，<br/>绿化等基础设施都逐渐完善，<br/>唯独缺少球类运动场地。<br/>足球场不敢奢望，<br/>但篮球场、乒乓球台、网球场，<br/>完全可以有。<br/>经常看到孩子们抱着球无处玩耍，<br/>只有开车到运动场馆去打球，<br/>把原本简单的运动变得费时而奢侈，<br/>渐渐地运动爱好就放弃了。<br/>建议在绿化休闲地带开辟球类设施和跑道，<br/>让青少年在小区附近就可以跑起来，<br/>他们可是健康中国的后备军。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '悲伤:6',
                des: '悲伤:6',
                category: '悲伤',
                symbolSize: 130
            },
            {
                name: '腾讯网',
                des: '腾讯网',
                symbolSize: 130,
                category: '来源'
            },
            {
                name: '赞扬:22',
                des: '赞扬:22',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '营商环境',
                des: '营商环境',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '房价上涨',
                des: '房价上涨',
                symbolSize: 90,
                category: '三级分类'
            },
            {
                name: '赞扬:81',
                des: '赞扬:81',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '养老保障',
                des: '养老保障',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '简政放权',
                des: '简政放权',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '留言45',
                des: '现在广大农村也在大力推动宜居建设，<br/>每个村子都建了垃圾统一回收点，<br/>这是很好的一件事，<br/>可是还是有美中不足的是，<br/>垃圾基本上没有人来回收，<br/>基本都是就地焚烧，<br/>这样下来，<br/>每天都觉得空气中的有毒气体让人呼吸不过来，<br/>请总理是否可关注一下这个问题？<br/>能否统一回焚烧或填埋，<br/>从而真正地保护农村的美好环境！<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '中国制造',
                des: '中国制造',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '情感值:6',
                des: '情感值:6',
                symbolSize: 130,
                category: '情感值'
            },
            {
                name: '惧',
                des: '惧',
                symbolSize: 110,
                category: '惧'
            },
            {
                name: '信息公开',
                des: '信息公开',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '反腐倡廉',
                des: '反腐倡廉',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '情感值:9',
                des: '情感值:9',
                symbolSize: 130,
                category: '情感值'
            },
            {
                name: '留言7',
                des: '成立独立的金融行为监管局，<br/>或者督促现有的监管部门将机构监管为主的模式调整为功能监管模式，<br/>打破利益固化的藩篱，<br/>坚持监管姓监，<br/>防止目标冲突，<br/>强化履职问责，<br/>严格治理金融乱象。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '贬责:13',
                des: '贬责:13',
                category: '贬责',
                symbolSize: 130
            },
            {
                name: '赞扬:1',
                des: '赞扬:1',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '留言13',
                des: '尊敬的总理，<br/>经济稳增长，<br/>可持续发展和经营需要市场的交易转换，<br/>满足市场需求并被交易是可持续稳增长和绿色发展经济的主题。<br/>需求端既要得到物权又要实现自身价值，<br/>就需要消费端提供有效的服务体系。<br/>减少对资源的过度开采，<br/>鼓励绿色农业发展，<br/>提高运营服务价值体系，<br/>提高国民综合素质，<br/>才能促进今后经济的持续健康发展。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '情感值:44',
                des: '情感值:44',
                symbolSize: 130,
                category: '情感值'
            },
            {
                name: '医疗层面',
                des: '医疗层面',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '祝愿:10',
                des: '祝愿:10',
                category: '祝愿',
                symbolSize: 130
            },
            {
                name: '信息隐私',
                des: '信息隐私',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '留言2',
                des: '现在有大量人员异地就业，<br/>户籍和工作地不一致，<br/>新生儿异地户籍不能办理社保，<br/>必须回户籍地才能办理，<br/>这给异地新生儿办理社保和就医带来极大不便，<br/>也增加了公民支出成本，<br/>给照顾新生儿本就繁忙的家庭带来极大不便，<br/>希望政府能够重视相关问题。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '留言44',
                des: '节能减排工作也是关乎国民经济持续健康发展的重要工作。<br/>中国虽然是一个大国，<br/>各种资源丰富，<br/>但是因为人口众多，<br/>人均资源占有量小。<br/>加强节能减排工作，<br/>符合我国国情，<br/>是促进可持续发展的需要。<br/>通过节能减排降低单位GDP的能耗，<br/>提高经济增长的质量和效益。<br/>目前欧美等发达国家正在全力推进低碳经济发展，<br/>也是旨在加强环境保护，<br/>促进可持续发展，<br/>持续保持和改善良好的人居环境。<br/>抓好节能减排工作，<br/>一要加强宣传教育，<br/>培养公民节约资源能源意识，<br/>从生活琐碎做起。<br/>二要重点抓好企业的节能减排工作，<br/>尤其是资源消耗型大中企业，<br/>排污较多的企业的节能减排工作。<br/>三要抓好技术创新，<br/>通过技术发展改进生产生活方式，<br/>促进低碳生活普遍化、便利化。<br/>四要构建覆盖全社会的节能减排的制度，<br/>通过制度约束，<br/>促进节能减排工作落到实处。<br/>尤其要对企业及党政领导做好节能减排工作的考核，<br/>以考核促落实，<br/>促发展。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '留言4',
                des: '大数据和互联网时代，<br/>希望政府各部门间能加快数据共享和信息共享，<br/>改变民众办事时需要跑多个部门开证明的情况。<br/>另外，<br/>希望推进电子凭证合法化的进程，<br/>当然，<br/>要在保障信息安全有效的前提下。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '情感值:14',
                des: '情感值:14',
                symbolSize: 130,
                category: '情感值'
            },
            {
                name: '留言33',
                des: '尊敬的李总理，<br/>你好！<br/>我家住在甘肃省静宁县司桥乡唐岔村。<br/>我常常看到村里的人抱着小孩或领着老人乘车到二十多公里外的县城看病，<br/>即使是一般的感冒发烧等病也是这样。<br/>严重影响了村民们的生产生活。<br/>这样的情况不只是我村，<br/>在我们西北地区广泛存在。<br/>农民们都非常希望自家村里有一个比较正規的卫生站。<br/>我村的卫生站已基本修成，<br/>可是只有一位年迈的老中医，<br/>不能打针挂瓶子……所以我建议，<br/>给村级卫生站配一位本科或大专学历的合格大夫和一位能打针挂瓶子的合格护士。<br/>就能基本满足农村一般疾病的预防和治疗。<br/>望总理在百忙之中能够看到这个建议并出台相关政策，<br/>切实解决农民们的看病难。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '安心:7',
                des: '安心:7',
                category: '安心',
                symbolSize: 130
            },
            {
                name: '留言19',
                des: '希望多做一些普法宣传工作，<br/>减少法盲人数，<br/>减少被动违法事件。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '快乐:3',
                des: '快乐:3',
                category: '快乐',
                symbolSize: 130
            },
            {
                name: '医患关系',
                des: '医患关系',
                symbolSize: 90,
                category: '三级分类'
            },
            {
                name: '情感值:13',
                des: '情感值:13',
                symbolSize: 130,
                category: '情感值'
            },
            {
                name: '社会建设',
                des: '社会建设',
                symbolSize: 130,
                category: '一级分类'
            },
            {
                name: '留言30',
                des: '老百姓热爱生活，<br/>期盼有更好的教育，<br/>更稳定的工作，<br/>更满意的收入，<br/>更可靠的社会保障、更高水平的医疗卫生服务，<br/>更舒适的居住环境，<br/>这些就是我们普通老百姓所盼望的。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '赞扬:8',
                des: '赞扬:8',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '赞扬:5',
                des: '赞扬:5',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '贬责:8',
                des: '贬责:8',
                category: '贬责',
                symbolSize: 130
            },
            {
                name: '垃圾回收',
                des: '垃圾回收',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '赞扬:27',
                des: '赞扬:27',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '留言42',
                des: '有的农村商品房开发手续不齐全，<br/>不按规划随意开发，<br/>极大地影响了农村集镇的健康长足发展:一是商品房买卖不按正规手续进行，<br/>购房户的权益无法保障；二是没有政府监管部门处理物业纠纷，<br/>扯皮案件较多。<br/>希望政府出台政策规范农村集镇开发行为，<br/>做到有预期、有规划，<br/>售后有监管，<br/>群众才能住得放心，<br/>住得踏实。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '情感值:10',
                des: '情感值:10',
                symbolSize: 130,
                category: '情感值'
            },
            {
                name: '农村变化',
                des: '农村变化',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '赞扬:30',
                des: '赞扬:30',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '社会保障',
                des: '社会保障',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '相信:12',
                des: '相信:12',
                category: '相信',
                symbolSize: 130
            },
            {
                name: '情感值:4',
                des: '情感值:4',
                symbolSize: 130,
                category: '情感值'
            },
            {
                name: '赞扬:40',
                des: '赞扬:40',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '安心:3',
                des: '安心:3',
                category: '安心',
                symbolSize: 130
            },
            {
                name: '贬责:9',
                des: '贬责:9',
                category: '贬责',
                symbolSize: 130
            },
            {
                name: '憎恶:5',
                des: '憎恶:5',
                category: '憎恶',
                symbolSize: 130
            },
            {
                name: '信息共享',
                des: '信息共享',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '赞扬:9',
                des: '赞扬:9',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '赞扬:29',
                des: '赞扬:29',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '环境保护',
                des: '环境保护',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '贬责:5',
                des: '贬责:5',
                category: '贬责',
                symbolSize: 130
            },
            {
                name: '情感值:24',
                des: '情感值:24',
                symbolSize: 130,
                category: '情感值'
            },
            {
                name: '安心:9',
                des: '安心:9',
                category: '安心',
                symbolSize: 130
            },
            {
                name: '赞扬:26',
                des: '赞扬:26',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '就业保障',
                des: '就业保障',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '留言35',
                des: '作为一名乡镇卫生院的医生，<br/>我感觉乡镇卫生院各个方面都很薄弱，<br/>迫切需要加强。<br/>医疗和公共卫生服务是卫生院的两大主要工作，<br/>可是专业人才缺乏，<br/>辅助检查仪器严重不足，<br/>导致首诊负责制得不到体现。<br/>“基药”和限二级医疗机构用药这两项措施，<br/>某种药不是“基药”，<br/>医院没法用；某种是“基药”，<br/>限二级医疗机构使用，<br/>乡镇卫生院又是没法用，<br/>我感到很无奈。<br/>群众生一场病会因为没有物美价廉的药而雪上加霜。<br/>我是河南省滑县下设乡镇的卫生院的一名医生，<br/>这就是我的心声。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '羞愧:5',
                des: '羞愧:5',
                category: '羞愧',
                symbolSize: 130
            },
            {
                name: '留言16',
                des: '推进教育资源公共服务均等化。<br/>1建立资源分配基本标准，<br/>保证配置均衡；2建立教学质量标准，<br/>保证教育水平统一；加强师资队伍建设，<br/>严格培训考核，<br/>保证教师教学水平达标。<br/>以提高全民素质为目标，<br/>从娃娃抓起，<br/>加强义务教育阶段的文化教育，<br/>道德教育，<br/>提高人的素养；以培养优秀人才为目标，<br/>从视野出发，<br/>开展创新意识培养，<br/>提高人才创造力，<br/>实践力。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '新型城镇化',
                des: '新型城镇化',
                symbolSize: 90,
                category: '三级分类'
            },
            {
                name: '快乐:15',
                des: '快乐:15',
                category: '快乐',
                symbolSize: 130
            },
            {
                name: '赞扬:16',
                des: '赞扬:16',
                category: '赞扬',
                symbolSize: 130
            },
            {
                name: '相信:28',
                des: '相信:28',
                category: '相信',
                symbolSize: 130
            },
            {
                name: '快乐:17',
                des: '快乐:17',
                category: '快乐',
                symbolSize: 130
            },
            {
                name: '相信:6',
                des: '相信:6',
                category: '相信',
                symbolSize: 130
            },
            {
                name: '留言20',
                des: '我生在闽南，<br/>当地有着非常悠久的传统历史文化，<br/>如何让优秀传统文化融入现代的生活，<br/>这不仅需要加强历史文化街区管理，<br/>还需要深入挖掘城市历史文化价值，<br/>提炼精选一批凸显文化特色的经典性元素和标志性符号，<br/>纳入城镇化建设、城市规划设计，<br/>合理应用于城市雕塑、广场园林等公共空间，<br/>避免千篇一律、千城一面。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '快乐:14',
                des: '快乐:14',
                category: '快乐',
                symbolSize: 130
            },
            {
                name: '政府办事',
                des: '政府办事',
                symbolSize: 110,
                category: '二级分类'
            },
            {
                name: '情感值:29',
                des: '情感值:29',
                symbolSize: 130,
                category: '情感值'
            },
            {
                name: '留言26',
                des: '在新型农民的培养上，<br/>党和政府要坚持把农村基层组织建成农村改革发展的主心骨，<br/>培育惜农业、爱农村、爱农民的“三农”工作队伍，<br/>鼓励支持农民自主创业，<br/>引导优秀人才回乡创业，<br/>一大批新型农民将脱颖而出。<br/>',
                symbolSize: 80,
                category: '政策留言'
            },
            {
                name: '快乐:9',
                des: '快乐:9',
                category: '快乐',
                symbolSize: 130
            },
            {
                name: '情感值:12',
                des: '情感值:12',
                symbolSize: 130,
                category: '情感值'
            },
        ],
        links: [{ // 设置连线edges的数据
                source: '情感值:33',
                target: '留言0',
                name: '政策留言情感值'
            },
            {
                source: '人民网',
                target: '留言0',
                name: '政策留言来源'
            },
            {
                source: '政治建设',
                target: '留言0',
                name: '政策留言一级分类'
            },
            {
                source: '反腐倡廉',
                target: '政治建设',
                name: '政策留言二级分类'
            },
            {
                source: '情感值:33',
                target: '留言0',
                name: '政策留言情感值'
            },
            {
                source: '快乐:5',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:33',
                name: '情感大类:乐'
            },
            {
                source: '赞扬:18',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:33',
                name: '情感大类:好'
            },
            {
                source: '祝愿:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:33',
                name: '情感大类:好'
            },
            {
                source: '悲伤:14',
                target: '哀',
                name: '情感细分'
            },
            {
                source: '哀',
                target: '情感值:33',
                name: '情感大类:哀'
            },
            {
                source: '憎恶:3',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:33',
                name: '情感大类:恶'
            },
            {
                source: '贬责:8',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:33',
                name: '情感大类:恶'
            },
            {
                source: '情感值:22',
                target: '留言1',
                name: '政策留言情感值'
            },
            {
                source: '中国政府网',
                target: '留言1',
                name: '政策留言来源'
            },
            {
                source: '政治建设',
                target: '留言1',
                name: '政策留言一级分类'
            },
            {
                source: '规章制度',
                target: '政治建设',
                name: '政策留言二级分类'
            },
            {
                source: '情感值:22',
                target: '留言1',
                name: '政策留言情感值'
            },
            {
                source: '赞扬:7',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:22',
                name: '情感大类:好'
            },
            {
                source: '相信:19',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:22',
                name: '情感大类:好'
            },
            {
                source: '喜爱:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:22',
                name: '情感大类:好'
            },
            {
                source: '悲伤:14',
                target: '哀',
                name: '情感细分'
            },
            {
                source: '哀',
                target: '情感值:22',
                name: '情感大类:哀'
            },
            {
                source: '失望:5',
                target: '哀',
                name: '情感细分'
            },
            {
                source: '哀',
                target: '情感值:22',
                name: '情感大类:哀'
            },
            {
                source: '怀疑:5',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:22',
                name: '情感大类:恶'
            },
            {
                source: '情感值:26',
                target: '留言2',
                name: '政策留言情感值'
            },
            {
                source: '中国政府网',
                target: '留言2',
                name: '政策留言来源'
            },
            {
                source: '政治建设',
                target: '留言2',
                name: '政策留言一级分类'
            },
            {
                source: '简政放权',
                target: '政治建设',
                name: '政策留言二级分类'
            },
            {
                source: '情感值:26',
                target: '留言2',
                name: '政策留言情感值'
            },
            {
                source: '赞扬:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:26',
                name: '情感大类:好'
            },
            {
                source: '相信:7',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:26',
                name: '情感大类:好'
            },
            {
                source: '喜爱:3',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:26',
                name: '情感大类:好'
            },
            {
                source: '烦闷:6',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:26',
                name: '情感大类:恶'
            },
            {
                source: '情感值:7',
                target: '留言3',
                name: '政策留言情感值'
            },
            {
                source: '央视网',
                target: '留言3',
                name: '政策留言来源'
            },
            {
                source: '政治建设',
                target: '留言3',
                name: '政策留言一级分类'
            },
            {
                source: '信息公开',
                target: '政治建设',
                name: '政策留言二级分类'
            },
            {
                source: '情感值:7',
                target: '留言3',
                name: '政策留言情感值'
            },
            {
                source: '快乐:3',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:7',
                name: '情感大类:乐'
            },
            {
                source: '赞扬:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:7',
                name: '情感大类:好'
            },
            {
                source: '相信:7',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:7',
                name: '情感大类:好'
            },
            {
                source: '慌张:7',
                target: '惧',
                name: '情感细分'
            },
            {
                source: '惧',
                target: '情感值:7',
                name: '情感大类:惧'
            },
            {
                source: '情感值:17',
                target: '留言4',
                name: '政策留言情感值'
            },
            {
                source: '中国政府网',
                target: '留言4',
                name: '政策留言来源'
            },
            {
                source: '政治建设',
                target: '留言4',
                name: '政策留言一级分类'
            },
            {
                source: '信息共享',
                target: '政治建设',
                name: '政策留言二级分类'
            },
            {
                source: '情感值:17',
                target: '留言4',
                name: '政策留言情感值'
            },
            {
                source: '安心:5',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:17',
                name: '情感大类:乐'
            },
            {
                source: '赞扬:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:17',
                name: '情感大类:好'
            },
            {
                source: '相信:14',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:17',
                name: '情感大类:好'
            },
            {
                source: '祝愿:10',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:17',
                name: '情感大类:好'
            },
            {
                source: '情感值:27',
                target: '留言5',
                name: '政策留言情感值'
            },
            {
                source: '中国政府网',
                target: '留言5',
                name: '政策留言来源'
            },
            {
                source: '政治建设',
                target: '留言5',
                name: '政策留言一级分类'
            },
            {
                source: '政府办事',
                target: '政治建设',
                name: '政策留言二级分类'
            },
            {
                source: '情感值:27',
                target: '留言5',
                name: '政策留言情感值'
            },
            {
                source: '快乐:8',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:27',
                name: '情感大类:乐'
            },
            {
                source: '赞扬:9',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:27',
                name: '情感大类:好'
            },
            {
                source: '喜爱:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:27',
                name: '情感大类:好'
            },
            {
                source: '祝愿:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:27',
                name: '情感大类:好'
            },
            {
                source: '情感值:29',
                target: '留言6',
                name: '政策留言情感值'
            },
            {
                source: '中国网',
                target: '留言6',
                name: '政策留言来源'
            },
            {
                source: '经济建设',
                target: '留言6',
                name: '政策留言一级分类'
            },
            {
                source: '财税金融',
                target: '经济建设',
                name: '政策留言二级分类'
            },
            {
                source: '情感值:29',
                target: '留言6',
                name: '政策留言情感值'
            },
            {
                source: '尊敬:3',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:29',
                name: '情感大类:好'
            },
            {
                source: '赞扬:26',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:29',
                name: '情感大类:好'
            },
            {
                source: '情感值:2',
                target: '留言7',
                name: '政策留言情感值'
            },
            {
                source: '中国政府网',
                target: '留言7',
                name: '政策留言来源'
            },
            {
                source: '经济建设',
                target: '留言7',
                name: '政策留言一级分类'
            },
            {
                source: '经济政策',
                target: '经济建设',
                name: '政策留言二级分类'
            },
            {
                source: '情感值:2',
                target: '留言7',
                name: '政策留言情感值'
            },
            {
                source: '赞扬:6',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:2',
                name: '情感大类:好'
            },
            {
                source: '憎恶:1',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:2',
                name: '情感大类:恶'
            },
            {
                source: '贬责:5',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:2',
                name: '情感大类:恶'
            },
            {
                source: '情感值:32',
                target: '留言8',
                name: '政策留言情感值'
            },
            {
                source: '中国政府网',
                target: '留言8',
                name: '政策留言来源'
            },
            {
                source: '经济建设',
                target: '留言8',
                name: '政策留言一级分类'
            },
            {
                source: '就业保障',
                target: '经济建设',
                name: '政策留言二级分类'
            },
            {
                source: '创新创业',
                target: '就业保障',
                name: '政策留言三级分类'
            },
            {
                source: '情感值:32',
                target: '留言8',
                name: '政策留言情感值'
            },
            {
                source: '赞扬:44',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:32',
                name: '情感大类:好'
            },
            {
                source: '烦闷:3',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:32',
                name: '情感大类:恶'
            },
            {
                source: '怀疑:5',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:32',
                name: '情感大类:恶'
            },
            {
                source: '情感值:18',
                target: '留言9',
                name: '政策留言情感值'
            },
            {
                source: '中国日报网',
                target: '留言9',
                name: '政策留言来源'
            },
            {
                source: '经济建设',
                target: '留言9',
                name: '政策留言一级分类'
            },
            {
                source: '就业保障',
                target: '经济建设',
                name: '政策留言二级分类'
            },
            {
                source: '工资收入',
                target: '就业保障',
                name: '政策留言三级分类'
            },
            {
                source: '情感值:18',
                target: '留言9',
                name: '政策留言情感值'
            },
            {
                source: '赞扬:40',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:18',
                name: '情感大类:好'
            },
            {
                source: '相信:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:18',
                name: '情感大类:好'
            },
            {
                source: '悲伤:7',
                target: '哀',
                name: '情感细分'
            },
            {
                source: '哀',
                target: '情感值:18',
                name: '情感大类:哀'
            },
            {
                source: '贬责:8',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:18',
                name: '情感大类:恶'
            },
            {
                source: '情感值:15',
                target: '留言10',
                name: '政策留言情感值'
            },
            {
                source: '中国政府网',
                target: '留言10',
                name: '政策留言来源'
            },
            {
                source: '经济建设',
                target: '留言10',
                name: '政策留言一级分类'
            },
            {
                source: '就业保障',
                target: '经济建设',
                name: '政策留言二级分类'
            },
            {
                source: '就业培训',
                target: '就业保障',
                name: '政策留言三级分类'
            },
            {
                source: '情感值:15',
                target: '留言10',
                name: '政策留言情感值'
            },
            {
                source: '赞扬:26',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:15',
                name: '情感大类:好'
            },
            {
                source: '相信:10',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:15',
                name: '情感大类:好'
            },
            {
                source: '羞愧:5',
                target: '惧',
                name: '情感细分'
            },
            {
                source: '惧',
                target: '情感值:15',
                name: '情感大类:惧'
            },
            {
                source: '情感值:15',
                target: '留言11',
                name: '政策留言情感值'
            },
            {
                source: '中国政府网',
                target: '留言11',
                name: '政策留言来源'
            },
            {
                source: '经济建设',
                target: '留言11',
                name: '政策留言一级分类'
            },
            {
                source: '就业保障',
                target: '经济建设',
                name: '政策留言二级分类'
            },
            {
                source: '就业政策',
                target: '就业保障',
                name: '政策留言三级分类'
            },
            {
                source: '情感值:15',
                target: '留言11',
                name: '政策留言情感值'
            },
            {
                source: '快乐:3',
                target: '乐',
                name: '情感细分'
            },
            {
                target: '情感值:15',
                source: '乐',
                name: '情感大类:乐'
            },
            {
                source: '尊敬:6',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:15',
                name: '情感大类:好'
            },
            {
                source: '赞扬:19',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:15',
                name: '情感大类:好'
            },
            {
                source: '相信:28',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:15',
                name: '情感大类:好'
            },
            {
                source: '祝愿:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:15',
                name: '情感大类:好'
            },
            {
                source: '情感值:3',
                target: '留言12',
                name: '政策留言情感值'
            },
            {
                source: '中国政府网',
                target: '留言12',
                name: '政策留言来源'
            },
            {
                source: '经济建设',
                target: '留言12',
                name: '政策留言一级分类'
            },
            {
                source: '外贸环境',
                target: '经济建设',
                name: '政策留言二级分类'
            },
            {
                source: '情感值:3',
                target: '留言12',
                name: '政策留言情感值'
            },
            {
                source: '安心:3',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:3',
                name: '情感大类:乐'
            },
            {
                source: '赞扬:3',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:3',
                name: '情感大类:好'
            },
            {
                source: '情感值:17',
                target: '留言13',
                name: '政策留言情感值'
            },
            {
                source: '中国网',
                target: '留言13',
                name: '政策留言来源'
            },
            {
                source: '经济建设',
                target: '留言13',
                name: '政策留言一级分类'
            },
            {
                source: '消费市场',
                target: '经济建设',
                name: '政策留言二级分类'
            },
            {
                source: '情感值:17',
                target: '留言13',
                name: '政策留言情感值'
            },
            {
                source: '快乐:21',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:17',
                name: '情感大类:乐'
            },
            {
                source: '尊敬:3',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:17',
                name: '情感大类:好'
            },
            {
                source: '赞扬:30',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:17',
                name: '情感大类:好'
            },
            {
                source: '贬责:3',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:17',
                name: '情感大类:恶'
            },
            {
                source: '情感值:11',
                target: '留言14',
                name: '政策留言情感值'
            },
            {
                source: '中国政府网',
                target: '留言14',
                name: '政策留言来源'
            },
            {
                source: '经济建设',
                target: '留言14',
                name: '政策留言一级分类'
            },
            {
                source: '营商环境',
                target: '经济建设',
                name: '政策留言二级分类'
            },
            {
                source: '情感值:11',
                target: '留言14',
                name: '政策留言情感值'
            },
            {
                source: '快乐:1',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:11',
                name: '情感大类:乐'
            },
            {
                source: '赞扬:19',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:11',
                name: '情感大类:好'
            },
            {
                source: '相信:8',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:11',
                name: '情感大类:好'
            },
            {
                source: '喜爱:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:11',
                name: '情感大类:好'
            },
            {
                source: '祝愿:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:11',
                name: '情感大类:好'
            },
            {
                source: '贬责:3',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:11',
                name: '情感大类:恶'
            },
            {
                source: '情感值:18',
                target: '留言15',
                name: '政策留言情感值'
            },
            {
                source: '央视网',
                target: '留言15',
                name: '政策留言来源'
            },
            {
                source: '经济建设',
                target: '留言15',
                name: '政策留言一级分类'
            },
            {
                source: '中国制造',
                target: '经济建设',
                name: '政策留言二级分类'
            },
            {
                source: '情感值:18',
                target: '留言15',
                name: '政策留言情感值'
            },
            {
                source: '快乐:35',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:18',
                name: '情感大类:乐'
            },
            {
                source: '赞扬:28',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:18',
                name: '情感大类:好'
            },
            {
                source: '相信:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:18',
                name: '情感大类:好'
            },
            {
                source: '祝愿:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:18',
                name: '情感大类:好'
            },
            {
                source: '情感值:14',
                target: '留言16',
                name: '政策留言情感值'
            },
            {
                source: '人民网',
                target: '留言16',
                name: '政策留言来源'
            },
            {
                source: '文化建设',
                target: '留言16',
                name: '政策留言一级分类'
            },
            {
                source: '教育考试',
                target: '文化建设',
                name: '政策留言二级分类'
            },
            {
                source: '情感值:14',
                target: '留言16',
                name: '政策留言情感值'
            },
            {
                source: '快乐:7',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:14',
                name: '情感大类:乐'
            },
            {
                source: '赞扬:29',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:14',
                name: '情感大类:好'
            },
            {
                source: '相信:7',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:14',
                name: '情感大类:好'
            },
            {
                source: '情感值:12',
                target: '留言17',
                name: '政策留言情感值'
            },
            {
                source: '人民网',
                target: '留言17',
                name: '政策留言来源'
            },
            {
                source: '文化建设',
                target: '留言17',
                name: '政策留言一级分类'
            },
            {
                source: '教育考试',
                target: '文化建设',
                name: '政策留言二级分类'
            },
            {
                source: '情感值:12',
                target: '留言17',
                name: '政策留言情感值'
            },
            {
                source: '快乐:17',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:12',
                name: '情感大类:乐'
            },
            {
                source: '安心:15',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:12',
                name: '情感大类:乐'
            },
            {
                source: '尊敬:7',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:12',
                name: '情感大类:好'
            },
            {
                source: '赞扬:81',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:12',
                name: '情感大类:好'
            },
            {
                source: '慌张:7',
                target: '惧',
                name: '情感细分'
            },
            {
                source: '惧',
                target: '情感值:12',
                name: '情感大类:惧'
            },
            {
                source: '憎恶:5',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:12',
                name: '情感大类:恶'
            },
            {
                source: '贬责:7',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:12',
                name: '情感大类:恶'
            },
            {
                source: '情感值:30',
                target: '留言18',
                name: '政策留言情感值'
            },
            {
                source: '新浪微博',
                target: '留言18',
                name: '政策留言来源'
            },
            {
                source: '文化建设',
                target: '留言18',
                name: '政策留言一级分类'
            },
            {
                source: '科技创新',
                target: '文化建设',
                name: '政策留言二级分类'
            },
            {
                source: '情感值:30',
                target: '留言18',
                name: '政策留言情感值'
            },
            {
                source: '快乐:1',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:30',
                name: '情感大类:乐'
            },
            {
                source: '尊敬:6',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:30',
                name: '情感大类:好'
            },
            {
                source: '赞扬:21',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:30',
                name: '情感大类:好'
            },
            {
                source: '祝愿:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:30',
                name: '情感大类:好'
            },
            {
                source: '贬责:3',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:30',
                name: '情感大类:恶'
            },
            {
                source: '情感值:11',
                target: '留言19',
                name: '政策留言情感值'
            },
            {
                source: '今日头条',
                target: '留言19',
                name: '政策留言来源'
            },
            {
                source: '文化建设',
                target: '留言19',
                name: '政策留言一级分类'
            },
            {
                source: '文化宣传',
                target: '文化建设',
                name: '政策留言二级分类'
            },
            {
                source: '情感值:11',
                target: '留言19',
                name: '政策留言情感值'
            },
            {
                source: '祝愿:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:11',
                name: '情感大类:好'
            },
            {
                source: '贬责:6',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:11',
                name: '情感大类:恶'
            },
            {
                source: '情感值:27',
                target: '留言20',
                name: '政策留言情感值'
            },
            {
                source: '中国政府网',
                target: '留言20',
                name: '政策留言来源'
            },
            {
                source: '文化建设',
                target: '留言20',
                name: '政策留言一级分类'
            },
            {
                source: '文体生活',
                target: '文化建设',
                name: '政策留言二级分类'
            },
            {
                source: '情感值:27',
                target: '留言20',
                name: '政策留言情感值'
            },
            {
                source: '赞扬:22',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:27',
                name: '情感大类:好'
            },
            {
                source: '烦闷:5',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:27',
                name: '情感大类:恶'
            },
            {
                source: '情感值:13',
                target: '留言21',
                name: '政策留言情感值'
            },
            {
                source: '新浪微博',
                target: '留言21',
                name: '政策留言来源'
            },
            {
                source: '文化建设',
                target: '留言21',
                name: '政策留言一级分类'
            },
            {
                source: '文体生活',
                target: '文化建设',
                name: '政策留言二级分类'
            },
            {
                source: '情感值:13',
                target: '留言21',
                name: '政策留言情感值'
            },
            {
                source: '赞扬:18',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:13',
                name: '情感大类:好'
            },
            {
                source: '怀疑:5',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:13',
                name: '情感大类:恶'
            },
            {
                source: '情感值:1',
                target: '留言22',
                name: '政策留言情感值'
            },
            {
                source: '中国网',
                target: '留言22',
                name: '政策留言来源'
            },
            {
                source: '文化建设',
                target: '留言22',
                name: '政策留言一级分类'
            },
            {
                source: '信息隐私',
                target: '文化建设',
                name: '政策留言二级分类'
            },
            {
                source: '情感值:1',
                target: '留言22',
                name: '政策留言情感值'
            },
            {
                source: '尊敬:3',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:1',
                name: '情感大类:好'
            },
            {
                source: '祝愿:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:1',
                name: '情感大类:好'
            },
            {
                source: '情感值:10',
                target: '留言23',
                name: '政策留言情感值'
            },
            {
                source: '中国政府网',
                target: '留言23',
                name: '政策留言来源'
            },
            {
                source: '社会建设',
                target: '留言23',
                name: '政策留言一级分类'
            },
            {
                source: '城市发展',
                target: '社会建设',
                name: '政策留言二级分类'
            },
            {
                source: '城市建设',
                target: '城市发展',
                name: '政策留言三级分类'
            },
            {
                source: '情感值:10',
                target: '留言23',
                name: '政策留言情感值'
            },
            {
                source: '快乐:3',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:10',
                name: '情感大类:乐'
            },
            {
                source: '尊敬:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:10',
                name: '情感大类:好'
            },
            {
                source: '赞扬:22',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:10',
                name: '情感大类:好'
            },
            {
                source: '贬责:9',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:10',
                name: '情感大类:恶'
            },
            {
                source: '情感值:17',
                target: '留言24',
                name: '政策留言情感值'
            },
            {
                source: '新华网',
                target: '留言24',
                name: '政策留言来源'
            },
            {
                source: '社会建设',
                target: '留言24',
                name: '政策留言一级分类'
            },
            {
                source: '城市发展',
                target: '社会建设',
                name: '政策留言二级分类'
            },
            {
                source: '新型城镇化',
                target: '城市发展',
                name: '政策留言三级分类'
            },
            {
                source: '情感值:17',
                target: '留言24',
                name: '政策留言情感值'
            },
            {
                source: '快乐:3',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:17',
                name: '情感大类:乐'
            },
            {
                source: '安心:7',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:17',
                name: '情感大类:乐'
            },
            {
                source: '赞扬:52',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:17',
                name: '情感大类:好'
            },
            {
                source: '相信:7',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:17',
                name: '情感大类:好'
            },
            {
                source: '情感值:22',
                target: '留言25',
                name: '政策留言情感值'
            },
            {
                source: '中国政府网',
                target: '留言25',
                name: '政策留言来源'
            },
            {
                source: '社会建设',
                target: '留言25',
                name: '政策留言一级分类'
            },
            {
                source: '交通物流',
                target: '社会建设',
                name: '政策留言二级分类'
            },
            {
                source: '情感值:22',
                target: '留言25',
                name: '政策留言情感值'
            },
            {
                source: '快乐:3',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:22',
                name: '情感大类:乐'
            },
            {
                source: '赞扬:34',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:22',
                name: '情感大类:好'
            },
            {
                source: '相信:7',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:22',
                name: '情感大类:好'
            },
            {
                source: '情感值:44',
                target: '留言26',
                name: '政策留言情感值'
            },
            {
                source: '中国政府网',
                target: '留言26',
                name: '政策留言来源'
            },
            {
                source: '社会建设',
                target: '留言26',
                name: '政策留言一级分类'
            },
            {
                source: '农村变化',
                target: '社会建设',
                name: '政策留言二级分类'
            },
            {
                source: '“三农”',
                target: '农村变化',
                name: '政策留言三级分类'
            },
            {
                source: '情感值:44',
                target: '留言26',
                name: '政策留言情感值'
            },
            {
                source: '赞扬:39',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:44',
                name: '情感大类:好'
            },
            {
                source: '相信:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:44',
                name: '情感大类:好'
            },
            {
                source: '情感值:11',
                target: '留言27',
                name: '政策留言情感值'
            },
            {
                source: '网易网',
                target: '留言27',
                name: '政策留言来源'
            },
            {
                source: '社会建设',
                target: '留言27',
                name: '政策留言一级分类'
            },
            {
                source: '农村变化',
                target: '社会建设',
                name: '政策留言二级分类'
            },
            {
                source: '农村建设',
                target: '农村变化',
                name: '政策留言三级分类'
            },
            {
                source: '情感值:11',
                target: '留言27',
                name: '政策留言情感值'
            },
            {
                source: '快乐:14',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:11',
                name: '情感大类:乐'
            },
            {
                source: '赞扬:27',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:11',
                name: '情感大类:好'
            },
            {
                source: '喜爱:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:11',
                name: '情感大类:好'
            },
            {
                source: '悲伤:6',
                target: '哀',
                name: '情感细分'
            },
            {
                source: '哀',
                target: '情感值:11',
                name: '情感大类:哀'
            },
            {
                source: '情感值:20',
                target: '留言28',
                name: '政策留言情感值'
            },
            {
                source: '中国政府网',
                target: '留言28',
                name: '政策留言来源'
            },
            {
                source: '社会建设',
                target: '留言28',
                name: '政策留言一级分类'
            },
            {
                source: '农村变化',
                target: '社会建设',
                name: '政策留言二级分类'
            },
            {
                source: '农业为本',
                target: '农村变化',
                name: '政策留言三级分类'
            },
            {
                source: '情感值:20',
                target: '留言28',
                name: '政策留言情感值'
            },
            {
                source: '快乐:14',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:20',
                name: '情感大类:乐'
            },
            {
                source: '赞扬:9',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:20',
                name: '情感大类:好'
            },
            {
                source: '相信:12',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:20',
                name: '情感大类:好'
            },
            {
                source: '贬责:5',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:20',
                name: '情感大类:恶'
            },
            {
                source: '情感值:8',
                target: '留言29',
                name: '政策留言情感值'
            },
            {
                source: '腾讯网',
                target: '留言29',
                name: '政策留言来源'
            },
            {
                source: '社会建设',
                target: '留言29',
                name: '政策留言一级分类'
            },
            {
                source: '社会保障',
                target: '社会建设',
                name: '政策留言二级分类'
            },
            {
                source: '民生保障',
                target: '社会保障',
                name: '政策留言三级分类'
            },
            {
                source: '情感值:8',
                target: '留言29',
                name: '政策留言情感值'
            },
            {
                source: '快乐:3',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:8',
                name: '情感大类:乐'
            },
            {
                source: '祝愿:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:8',
                name: '情感大类:好'
            },
            {
                source: '情感值:26',
                target: '留言30',
                name: '政策留言情感值'
            },
            {
                source: '网易网',
                target: '留言30',
                name: '政策留言来源'
            },
            {
                source: '社会建设',
                target: '留言30',
                name: '政策留言一级分类'
            },
            {
                source: '社会保障',
                target: '社会建设',
                name: '政策留言二级分类'
            },
            {
                source: '民生保障',
                target: '社会保障',
                name: '政策留言三级分类'
            },
            {
                source: '情感值:26',
                target: '留言30',
                name: '政策留言情感值'
            },
            {
                source: '安心:3',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:26',
                name: '情感大类:乐'
            },
            {
                source: '赞扬:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:26',
                name: '情感大类:好'
            },
            {
                source: '相信:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:26',
                name: '情感大类:好'
            },
            {
                source: '喜爱:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:26',
                name: '情感大类:好'
            },
            {
                source: '情感值:4',
                target: '留言31',
                name: '政策留言情感值'
            },
            {
                source: '网易网',
                target: '留言31',
                name: '政策留言来源'
            },
            {
                source: '社会建设',
                target: '留言31',
                name: '政策留言一级分类'
            },
            {
                source: '社会保障',
                target: '社会建设',
                name: '政策留言二级分类'
            },
            {
                source: '食品安全',
                target: '社会保障',
                name: '政策留言三级分类'
            },
            {
                source: '情感值:4',
                target: '留言31',
                name: '政策留言情感值'
            },
            {
                source: '安心:3',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:4',
                name: '情感大类:乐'
            },
            {
                source: '赞扬:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:4',
                name: '情感大类:好'
            },
            {
                source: '贬责:5',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:4',
                name: '情感大类:恶'
            },
            {
                source: '怀疑:5',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:4',
                name: '情感大类:恶'
            },
            {
                source: '情感值:24',
                target: '留言32',
                name: '政策留言情感值'
            },
            {
                source: '中国政府网',
                target: '留言32',
                name: '政策留言来源'
            },
            {
                source: '社会建设',
                target: '留言32',
                name: '政策留言一级分类'
            },
            {
                source: '养老保障',
                target: '社会建设',
                name: '政策留言二级分类'
            },
            {
                source: '情感值:24',
                target: '留言32',
                name: '政策留言情感值'
            },
            {
                source: '快乐:15',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:24',
                name: '情感大类:乐'
            },
            {
                source: '赞扬:30',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:24',
                name: '情感大类:好'
            },
            {
                source: '憎恶:3',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:24',
                name: '情感大类:恶'
            },
            {
                source: '情感值:2',
                target: '留言33',
                name: '政策留言情感值'
            },
            {
                source: '新华网',
                target: '留言33',
                name: '政策留言来源'
            },
            {
                source: '社会建设',
                target: '留言33',
                name: '政策留言一级分类'
            },
            {
                source: '医疗层面',
                target: '社会建设',
                name: '政策留言二级分类'
            },
            {
                source: '病有所医',
                target: '医疗层面',
                name: '政策留言三级分类'
            },
            {
                source: '情感值:2',
                target: '留言33',
                name: '政策留言情感值'
            },
            {
                source: '快乐:8',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:2',
                name: '情感大类:乐'
            },
            {
                source: '尊敬:3',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:2',
                name: '情感大类:好'
            },
            {
                source: '赞扬:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:2',
                name: '情感大类:好'
            },
            {
                source: '相信:6',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:2',
                name: '情感大类:好'
            },
            {
                source: '祝愿:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:2',
                name: '情感大类:好'
            },
            {
                source: '贬责:3',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:2',
                name: '情感大类:恶'
            },
            {
                source: '情感值:6',
                target: '留言34',
                name: '政策留言情感值'
            },
            {
                source: '人民网',
                target: '留言34',
                name: '政策留言来源'
            },
            {
                source: '社会建设',
                target: '留言34',
                name: '政策留言一级分类'
            },
            {
                source: '医疗层面',
                target: '社会建设',
                name: '政策留言二级分类'
            },
            {
                source: '药品仪器',
                target: '医疗层面',
                name: '政策留言三级分类'
            },
            {
                source: '情感值:6',
                target: '留言34',
                name: '政策留言情感值'
            },
            {
                source: '尊敬:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:6',
                name: '情感大类:好'
            },
            {
                source: '赞扬:16',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:6',
                name: '情感大类:好'
            },
            {
                source: '憎恶:3',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:6',
                name: '情感大类:恶'
            },
            {
                source: '贬责:5',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:6',
                name: '情感大类:恶'
            },
            {
                source: '情感值:-5',
                target: '留言35',
                name: '政策留言情感值'
            },
            {
                source: '中国政府网',
                target: '留言35',
                name: '政策留言来源'
            },
            {
                source: '社会建设',
                target: '留言35',
                name: '政策留言一级分类'
            },
            {
                source: '医疗层面',
                target: '社会建设',
                name: '政策留言二级分类'
            },
            {
                source: '药品仪器',
                target: '医疗层面',
                name: '政策留言三级分类'
            },
            {
                source: '情感值:-5',
                target: '留言35',
                name: '政策留言情感值'
            },
            {
                source: '赞扬:10',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:-5',
                name: '情感大类:好'
            },
            {
                source: '悲伤:1',
                target: '哀',
                name: '情感细分'
            },
            {
                source: '哀',
                target: '情感值:-5',
                name: '情感大类:哀'
            },
            {
                source: '贬责:13',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:-5',
                name: '情感大类:恶'
            },
            {
                source: '怀疑:5',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:-5',
                name: '情感大类:恶'
            },
            {
                source: '情感值:6',
                target: '留言36',
                name: '政策留言情感值'
            },
            {
                source: '中国网',
                target: '留言36',
                name: '政策留言来源'
            },
            {
                source: '社会建设',
                target: '留言36',
                name: '政策留言一级分类'
            },
            {
                source: '医疗层面',
                target: '社会建设',
                name: '政策留言二级分类'
            },
            {
                source: '医保政策',
                target: '医疗层面',
                name: '政策留言三级分类'
            },
            {
                source: '情感值:6',
                target: '留言36',
                name: '政策留言情感值'
            },
            {
                source: '快乐:1',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:6',
                name: '情感大类:乐'
            },
            {
                source: '安心:6',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:6',
                name: '情感大类:乐'
            },
            {
                source: '赞扬:1',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:6',
                name: '情感大类:好'
            },
            {
                source: '相信:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:6',
                name: '情感大类:好'
            },
            {
                source: '祝愿:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:6',
                name: '情感大类:好'
            },
            {
                source: '情感值:13',
                target: '留言37',
                name: '政策留言情感值'
            },
            {
                source: '人民网',
                target: '留言37',
                name: '政策留言来源'
            },
            {
                source: '社会建设',
                target: '留言37',
                name: '政策留言一级分类'
            },
            {
                source: '医疗层面',
                target: '社会建设',
                name: '政策留言二级分类'
            },
            {
                source: '医患关系',
                target: '医疗层面',
                name: '政策留言三级分类'
            },
            {
                source: '情感值:13',
                target: '留言37',
                name: '政策留言情感值'
            },
            {
                source: '快乐:1',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:13',
                name: '情感大类:乐'
            },
            {
                source: '赞扬:11',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:13',
                name: '情感大类:好'
            },
            {
                source: '喜爱:10',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:13',
                name: '情感大类:好'
            },
            {
                source: '贬责:5',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:13',
                name: '情感大类:恶'
            },
            {
                source: '情感值:4',
                target: '留言38',
                name: '政策留言情感值'
            },
            {
                source: '中国日报网',
                target: '留言38',
                name: '政策留言来源'
            },
            {
                source: '社会建设',
                target: '留言38',
                name: '政策留言一级分类'
            },
            {
                source: '医疗层面',
                target: '社会建设',
                name: '政策留言二级分类'
            },
            {
                source: '医疗改革',
                target: '医疗层面',
                name: '政策留言三级分类'
            },
            {
                source: '情感值:4',
                target: '留言38',
                name: '政策留言情感值'
            },
            {
                source: '赞扬:9',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:4',
                name: '情感大类:好'
            },
            {
                source: '情感值:29',
                target: '留言39',
                name: '政策留言情感值'
            },
            {
                source: '中国政府网',
                target: '留言39',
                name: '政策留言来源'
            },
            {
                source: '社会建设',
                target: '留言39',
                name: '政策留言一级分类'
            },
            {
                source: '住房层面',
                target: '社会建设',
                name: '政策留言二级分类'
            },
            {
                source: '房价上涨',
                target: '住房层面',
                name: '政策留言三级分类'
            },
            {
                source: '情感值:29',
                target: '留言39',
                name: '政策留言情感值'
            },
            {
                source: '快乐:9',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:29',
                name: '情感大类:乐'
            },
            {
                source: '赞扬:18',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:29',
                name: '情感大类:好'
            },
            {
                source: '相信:7',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:29',
                name: '情感大类:好'
            },
            {
                source: '怀疑:5',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:29',
                name: '情感大类:恶'
            },
            {
                source: '情感值:2',
                target: '留言40',
                name: '政策留言情感值'
            },
            {
                source: '中国政府网',
                target: '留言40',
                name: '政策留言来源'
            },
            {
                source: '社会建设',
                target: '留言40',
                name: '政策留言一级分类'
            },
            {
                source: '住房层面',
                target: '社会建设',
                name: '政策留言二级分类'
            },
            {
                source: '居住环境',
                target: '住房层面',
                name: '政策留言三级分类'
            },
            {
                source: '情感值:2',
                target: '留言40',
                name: '政策留言情感值'
            },
            {
                source: '快乐:7',
                target: '乐',
                name: '情感细分'
            },
            {
                target: '情感值:2',
                source: '乐',
                name: '情感大类:乐'
            },
            {
                source: '赞扬:6',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:2',
                name: '情感大类:好'
            },
            {
                source: '喜爱:3',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:2',
                name: '情感大类:好'
            },
            {
                source: '贬责:7',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:2',
                name: '情感大类:恶'
            },
            {
                source: '情感值:6',
                target: '留言41',
                name: '政策留言情感值'
            },
            {
                source: '中国政府网',
                target: '留言41',
                name: '政策留言来源'
            },
            {
                source: '社会建设',
                target: '留言41',
                name: '政策留言一级分类'
            },
            {
                source: '住房层面',
                target: '社会建设',
                name: '政策留言二级分类'
            },
            {
                source: '住房审批',
                target: '住房层面',
                name: '政策留言三级分类'
            },
            {
                source: '情感值:6',
                target: '留言41',
                name: '政策留言情感值'
            },
            {
                source: '尊敬:3',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:6',
                name: '情感大类:好'
            },
            {
                source: '赞扬:8',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:6',
                name: '情感大类:好'
            },
            {
                source: '相信:7',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:6',
                name: '情感大类:好'
            },
            {
                source: '贬责:5',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:6',
                name: '情感大类:恶'
            },
            {
                source: '情感值:18',
                target: '留言42',
                name: '政策留言情感值'
            },
            {
                source: '中国政府网',
                target: '留言42',
                name: '政策留言来源'
            },
            {
                source: '社会建设',
                target: '留言42',
                name: '政策留言一级分类'
            },
            {
                source: '住房层面',
                target: '社会建设',
                name: '政策留言二级分类'
            },
            {
                source: '住房政策',
                target: '住房层面',
                name: '政策留言三级分类'
            },
            {
                source: '情感值:18',
                target: '留言42',
                name: '政策留言情感值'
            },
            {
                source: '快乐:3',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:18',
                name: '情感大类:乐'
            },
            {
                source: '安心:14',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:18',
                name: '情感大类:乐'
            },
            {
                source: '尊敬:3',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:18',
                name: '情感大类:好'
            },
            {
                source: '赞扬:21',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:18',
                name: '情感大类:好'
            },
            {
                source: '相信:7',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:18',
                name: '情感大类:好'
            },
            {
                source: '祝愿:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:18',
                name: '情感大类:好'
            },
            {
                source: '贬责:3',
                target: '恶',
                name: '情感细分'
            },
            {
                source: '恶',
                target: '情感值:18',
                name: '情感大类:恶'
            },
            {
                source: '情感值:9',
                target: '留言43',
                name: '政策留言情感值'
            },
            {
                source: '今日头条',
                target: '留言43',
                name: '政策留言来源'
            },
            {
                source: '生态文明建设',
                target: '留言43',
                name: '政策留言一级分类'
            },
            {
                source: '环境保护',
                target: '生态文明建设',
                name: '政策留言二级分类'
            },
            {
                source: '情感值:9',
                target: '留言43',
                name: '政策留言情感值'
            },
            {
                source: '安心:3',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:9',
                name: '情感大类:乐'
            },
            {
                source: '赞扬:10',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:9',
                name: '情感大类:好'
            },
            {
                source: '祝愿:5',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:9',
                name: '情感大类:好'
            },
            {
                source: '情感值:10',
                target: '留言44',
                name: '政策留言情感值'
            },
            {
                source: '腾讯网',
                target: '留言44',
                name: '政策留言来源'
            },
            {
                source: '生态文明建设',
                target: '留言44',
                name: '政策留言一级分类'
            },
            {
                source: '节能减排',
                target: '生态文明建设',
                name: '政策留言二级分类'
            },
            {
                source: '情感值:10',
                target: '留言44',
                name: '政策留言情感值'
            },
            {
                source: '快乐:7',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:10',
                name: '情感大类:乐'
            },
            {
                source: '安心:9',
                target: '乐',
                name: '情感细分'
            },
            {
                source: '乐',
                target: '情感值:10',
                name: '情感大类:乐'
            },
            {
                source: '尊敬:7',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:10',
                name: '情感大类:好'
            },
            {
                source: '赞扬:75',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:10',
                name: '情感大类:好'
            },
            {
                source: '相信:7',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:10',
                name: '情感大类:好'
            },
            {
                source: '慌张:7',
                target: '惧',
                name: '情感细分'
            },
            {
                source: '惧',
                target: '情感值:10',
                name: '情感大类:惧'
            },
            {
                source: '情感值:7',
                target: '留言45',
                name: '政策留言情感值'
            },
            {
                source: '腾讯网',
                target: '留言45',
                name: '政策留言来源'
            },
            {
                source: '生态文明建设',
                target: '留言45',
                name: '政策留言一级分类'
            },
            {
                source: '垃圾回收',
                target: '生态文明建设',
                name: '政策留言二级分类'
            },
            {
                source: '情感值:7',
                target: '留言45',
                name: '政策留言情感值'
            },
            {
                source: '赞扬:17',
                target: '好',
                name: '情感细分'
            },
            {
                source: '好',
                target: '情感值:7',
                name: '情感大类:好'
            },
            {
                source: '失望:3',
                target: '哀',
                name: '情感细分'
            },
            {
                source: '哀',
                target: '情感值:7',
                name: '情感大类:哀'
            }
        ]
    }]
};