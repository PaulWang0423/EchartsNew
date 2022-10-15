option = {
            title: {
                text: '铁路、道路危险品运输相关法规及标准',
                left:'center',
                textStyle:{
                    color:'black',
                    fontStyle:'italic',
                    fontSize:36,
                    textBorderColor:'yellow',
                    textBorderWidth:0.8
                }
            },
            backgroundColor:'#FFFAF0',
            xAxis: {
                min: 0,
                max: 1000,
                show: false,
                type: 'value'
            },
            yAxis: {
                min: 0,
                max: 1000,
                show: false,
                type: 'value'
            },
            legend:{
                left:'center',
                top:'8%',
                selectedMode:'single',
                textStyle:{
                    color:'black',
                    fontSize:30
                },
                data:[{
                    name:'道路法规'
                },{
                    name:'道路标准'
                },{
                    name:'铁路法规'
                },{
                    name:'铁路标准'
                },]
            },
            tooltip:{
                enterable: true,
                textStyle: {
                    color: '#000',
                    decoration: 'none',
                },
            },
            series:[{
                name:'道路法规',
                type:'graph',
                draggable: false,
                coordinateSystem: "cartesian2d",
                itemStyle:{
                    color:'#000033'
                },
                label:{
                    show:true,
                    position:'right',
                    fontSize:20,
                    color:"#000033"
                },
                data:[{
                    name:'宪法',
                    value:[250,850],
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    symbolSize:100,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:100px;width:400px;border-radius:5px;background:#fff">' +
                                      '<br>中华人民共和国的根本大法，规定拥有最高法律效力'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《中华人民共和国宪法》',
                    value:[650,850],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,

                        
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:100px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>描述信息：'+'中华人民共和国的根本大法，规定拥有最高法律效力'+
                                      '<br>最新修改：2018年3月11日，十三届全国人大一次会议第三次<br>全体会议，表决通过了《中华人民共和国宪法修正案》'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'法律',
                    value:[250,650],
                    symbolSize:80,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:100px;width:400px;border-radius:5px;background:#fff">' +
                                      '<br>法律是由国家制定或认可并以国家强制力保证实施的。<br>法律是从属于宪法的强制性规范，是宪法的具体化。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《中华人民共和国安全生产法》',
                    value:[650,700],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:110px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>实施日期：2002年11月1日'+
                                      '<br>制订目的：'+'为了加强安全生产工作，防止和减少生产安全事故，<br>保障人民群众生命和财产安全，促进经济社会持续健康发展，<br>制订本法'
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《中华人民共和国道路交通安全法》',
                    value:[650,650],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:130px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>实施日期：2003年10月28日'+
                                      '<br>通过单位：第十届全国人民代表大会常务委员会第五次会议通过'+
                                      '<br>制订目的：'+'为了维护道路交通秩序，预防和减少交通事故，<br>保护人身安全，保护公民、法人和其他组织的财产安全<br>及其他合法权益，提高通行效率'
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《中华人民共和国公路法》',
                    value:[650,600],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:100px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>实施日期：2017年11月4日'+
                                      '<br>制订目的：'+'为了加强公路的建设和管理，促进公路事业的发展，<br>适应社会主义现代化建设和人民生活的需要制定的法律'
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'行政法规',
                    value:[250,500],
                    symbolSize:60,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:100px;width:400px;border-radius:5px;background:#fff">' +
                                      '<br>是指国务院根据宪法和法律，按照法定程序制定的有关行使<br>行政权力，履行行政职责的规范性文件的总称。<br>行政法规的效力仅次于宪法和法律，高于部门规章和地方性法规。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《危险化学品安全管理条例》',
                    value:[650,550],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:110px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>实施日期：2002年1月26日'+
                                      '<br>通过单位：中华人民共和国国务院'+
                                      '<br>制订目的：'+'为了加强危险化学品的安全管理，预防和减少<br>危险化学品事故，保障人民群众生命财产安全，保护环境'
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《中华人民共和国道路交通安全法实施条例》',
                    value:[650,500],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:100px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>实施日期：2004年5月1日'+
                                      '<br>通过单位：中华人民共和国国务院'+
                                      '<br>最新修改日期：'+'2017年10月7日'
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《中华人民共和国道路运输条例》',
                    value:[650,450],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:80px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>实施日期：2004年4月14日'+
                                      '<br>通过单位：中华人民共和国国务院'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'部门规章',
                    value:[250,350],
                    symbolSize:40,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:140px;width:400px;border-radius:5px;background:#fff">' +
                                      '<br>部门规章是国务院各部门、各委员会、审计署等根据<br>法律和行政法规的规定和国务院的决定，在本部门的<br>权限范围内制定和发布的调整本部门范围内的行政管理关系<br>的，并不得与宪法、法律和行政法规相抵触的规范性文件。<br>其法律地位和效力低于法律、行政法规。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《道路危险货物运输管理规定》',
                    value:[650,400],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:90px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>实施日期：2013年7月1日'+
                                      '<br>制订目的：为规范道路危险货物运输市场秩序,<br>保障人民生命财产安全,保护环境而制定的'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《交通运输突发事件应急管理规定》',
                    value:[650,350],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:90px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>实施日期：2012年1月1日'+
                                      '<br>制订目的：为规范交通运输突发事件应对活动,<br>控制、减轻和消除突发事件引起的危害而制定的'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《机动车维修管理规定》',
                    value:[650,300],
                    symbolSize:20,
                    tooltip:{
                        show:false,
                    },
                },{
                    name:'地方性法规',
                    value:[250,200],
                    symbolSize:30,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:130px;width:410px;border-radius:5px;background:#fff">' +
                                      '<br>地方性法规由省、自治区、直辖市和设区的市人民代表大会<br>及其常务委员会，根据本行政区域的具体情况和实际需要，<br>在不与宪法、法律、行政法规相抵触的前提下制定，由大会主席团<br>或者常务委员会用公告公布施行的文件。地方性法规<br>在本行政区域内有效，其效力低于宪法、法律和行政法规。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《宁夏道路交通安全条例》',
                    value:[650,230],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:80px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>实施日期：2014年1月1日'+
                                      '<br>通过单位：宁夏回族自治区第十一届人民代表大会常务委员会'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《宁夏回族自治区道路运输管理条例》',
                    value:[650,170],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:90px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>实施日期：1997年3月24日'+
                                      '<br>通过单位：宁夏回族自治区第七届人民代表大会常务委员会'+
                                      '<br>最新修改日期：2010年7月30日'
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'地方政府规章',
                    value:[250,50],
                    symbolSize:30,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:160px;width:440px;border-radius:5px;background:#fff">' +
                                      '<br>地方政府规章是省、自治区、直辖市、设区的市、自治州<br>的人民政府和广东省东莞市和中山市、甘肃省嘉峪关市、海南省三沙市<br>等四个不设区的市人民政府(比照适用2015年3月15日<br>通过的全国人民代表大会关于修改《中华人民共和国立法法》<br>的决定中有关赋予设区的市地方立法权的规定执行)，可以根<br>据法律、行政法规和本省、自治区、直辖市的地方性法规，制定规章。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                }],
            },{
                name:'道路法规',
                type:"effectScatter",
                coordinateSystem:'cartesian2d',
                silent:true,
                rippleEffect:{
                    brushType:'stroke',
                    scale:1.7
                },
                itemStyle:{
                    color:'#000033'
                },
                data:[{
                    value:[250,850],
                    symbolSize:100
                },{
                    value:[250,650],
                    symbolSize:80
                },{
                    value:[250,500],
                    symbolSize:60
                },{
                    value:[250,350],
                    symbolSize:40
                },{
                    value:[250,200],
                    symbolSize:30
                },{
                    value:[250,50],
                    symbolSize:30
                },]
            },{
                name:'道路法规',
                type:'lines',
                coordinateSystem:'cartesian2d',
                zlevel:2,
                effect:{
                    show:true,
                    symbolSize:10,
                    symbol:'triangle'
                },
                tooltip:{
                    show:false
                },
                lineStyle:{
                    curveness:0.1,
                    opacity:0.2,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#58B3CC'
                    }, {
                        offset: 1, color: '#F58158'
                    }], false),
                    width: 2,
                },
                data:[
                      {coords:[[250,850],[250,650]],lineStyle:{curveness:0}},
                      {coords:[[250,650],[250,500]],lineStyle:{curveness:0}},
                      {coords:[[250,500],[250,350]],lineStyle:{curveness:0}},
                      {coords:[[250,350],[250,200]],lineStyle:{curveness:0}},
                      {coords:[[250,200],[250,50]],lineStyle:{curveness:0}},
                      {coords:[[250,850],[650,850]]},
                      {coords:[[250,650],[650,700]]},
                      {coords:[[250,650],[650,650]]},
                      {coords:[[250,650],[650,600]]},
                      {coords:[[250,500],[650,550]]},
                      {coords:[[250,500],[650,500]]},
                      {coords:[[250,500],[650,450]]},
                      {coords:[[250,350],[650,400]]},
                      {coords:[[250,350],[650,350]]},
                      {coords:[[250,350],[650,300]]},
                      {coords:[[250,200],[650,230]]},
                      {coords:[[250,200],[650,170]]},
                
                    ]
            },{
                name:'道路标准',
                type:'graph',
                draggable: false,
                coordinateSystem: "cartesian2d",
                label:{
                    show:true,
                    position:'right',
                    fontSize:20
                },
                itemStyle:{
                    color:'#00552e'
                },
                data:[{
                    name:'国家标准',
                    value:[250,800],
                    symbolSize:80,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:180px;width:400px;border-radius:5px;background:#fff">' +
                                      '<br>国家标准分为强制性国家标准和推荐性国家标准。对保障<br>人身健康和生命财产安全、国家安全、生态环境安全<br>以及满足经济社会管理基本需要的技术要求，应当制定<br>强制性国家标准。强制性国家标准由国务院有关行政<br>主管部门依据职责提出、组织起草、征求意见和技术审查，<br>由国务院标准化行政主管部门负责立项、编号和对外通报<br>。强制性国家标准由国务院批准发布或授权发布。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《危险货物品名表》',
                    value:[650,850],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:100px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>现行编号'+'GB 12268-2012'+
                                      '<br>制订单位：中国国家标准化管理委员会、交通部水运科学研究所<br>、全国危险化学品管理标准化技术委员会'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《危险货物分类和品名编号》',
                    value:[650,800],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:80px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>现行编号'+'GB 6944-2012'+
                                      '<br>制订单位：国家标准化管理委员会'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《道路运输危险货物车辆标志》',
                    value:[650,750],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:160px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>现行编号'+'GB 13392-2005'+
                                      '<br>文件内容：本标准规定了道路运输危险货物车辆标志的分类、<br>规格尺寸、技术要求、试验方法、检验规则、包装、标志、<br>装卸、运输和储存，以及安装悬挂和维护要求'+
                                      '<br>适用情况'+'本标准适用于道路运输危险货物车辆标<br>志的生产、使用和管理。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'行业标准',
                    value:[250,600],
                    symbolSize:60,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:100px;width:400px;border-radius:5px;background:#fff">' +
                                      '<br>行业标准是对没有国家标准而又需要在全国某个<br>行业范围内统一的技术要求所制定的标准。<br>行业标准不得与有关国家标准相抵触。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《道路危险货物运输企业等级》',
                    value:[650,600],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:60px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>现行编号：JT∕T 1250-2019'
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'地方标准',
                    value:[250,400],
                    symbolSize:40,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:100px;width:400px;border-radius:5px;background:#fff">' +
                                      '<br>地方标准是由地方(省、自治区、直辖市) 标准化主管<br>机构或专业主管部门批准，发布，在某一地区<br>范围内统一的标准。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《危险货物道路运输安全技术要求》',
                    value:[650,400],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:60px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>现行编号：北京市地方标准DB11∕415-2016'
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'企业标准',
                    value:[250,200],
                    symbolSize:30,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:100px;width:400px;border-radius:5px;background:#fff">' +
                                      '<br>企业标准是在企业范围内需要协调、统一的技术要求、管理要求<br>和工作要求所制定的标准，是企业组织生产、经营活动<br>的依据。企业标准一般以“Q"标准的开头。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                }],
            },{
                name:'道路标准',
                type:"effectScatter",
                coordinateSystem:'cartesian2d',
                silent:true,
                rippleEffect:{
                    brushType:'stroke',
                    scale:1.7
                },
                itemStyle:{
                    color:'#00552e'
                },
                data:[{
                    value:[250,800],
                    symbolSize:80
                },{
                    value:[250,600],
                    symbolSize:60
                },{
                    value:[250,400],
                    symbolSize:40
                },{
                    value:[250,200],
                    symbolSize:30
                }]
            },{
                name:'道路标准',
                type:'lines',
                coordinateSystem:'cartesian2d',
                zlevel:2,
                effect:{
                    show:true,
                    symbolSize:10,
                    symbol:'triangle'
                },
                tooltip:{
                    show:false
                },
                lineStyle:{
                    curveness:0.1,
                    opacity:0.2,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#58B3CC'
                    }, {
                        offset: 1, color: '#F58158'
                    }], false),
                    width: 2,
                },
                data:[
                      {coords:[[250,800],[250,600]],lineStyle:{curveness:0}},
                      {coords:[[250,600],[250,400]],lineStyle:{curveness:0}},
                      {coords:[[250,400],[250,200]],lineStyle:{curveness:0}},
                      {coords:[[250,800],[650,850]]},
                      {coords:[[250,800],[650,800]]},
                      {coords:[[250,800],[650,750]]},
                      {coords:[[250,600],[650,600]]},
                      {coords:[[250,400],[650,400]]},
                    ]
            },{
                name:'铁路法规',
                type:'graph',
                draggable: false,
                coordinateSystem: "cartesian2d",
                label:{
                    show:true,
                    position:'right',
                    fontSize:20
                },
                itemStyle:{
                    color:'#1e50a2'
                },
                data:[{
                    name:'宪法',
                    value:[250,800],
                    symbolSize:80,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:100px;width:400px;border-radius:5px;background:#fff">' +
                                      '<br>中华人民共和国的根本大法，规定拥有最高法律效力'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《中华人民共和国宪法》',
                    value:[650,800],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:100px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>描述信息'+'中华人民共和国的根本大法，规定拥有最高法律效力'+
                                      '<br>最新修改：2018年3月11日，十三届全国人大一次会议第三次<br>全体会议，表决通过了《中华人民共和国宪法修正案》'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'法律',
                    value:[250,600],
                    symbolSize:60,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:100px;width:400px;border-radius:5px;background:#fff">' +
                                      '<br>法律是由国家制定或认可并以国家强制力保证实施的。<br>法律是从属于宪法的强制性规范，是宪法的具体化。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《铁路法》',
                    value:[650,700],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:200px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>定义：'+'是国家管理铁路的根本法，是调整政府机关、企事业单位<br>、其他社会团体以及公民与铁路运输企业在铁路规划<br>、建设、铁路运输营业、铁路运输管理、养护、利用以及铁路<br>安全与防护等方面建立的各种社会关系的法律规范的总称。'+
                                      '<br>制订目的：为了保障铁路运输和铁路建设的顺利进行，<br>适应社会主义现代化建设和人民生活的需要，制定的法律'+
                                      '<br>发布日期：1990年9月7日'+
                                      '<br>实施日期：1991年5月1日'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《合同法》',
                    value:[650,633],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:110px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>定义：对货物运输合同当事人的权力和义务，以及货物<br>运输合同订立和履行中一些注意事项做了一般性规定。'+
                                      '<br>发布日期：1999年3月5日'+
                                      '<br>实施日期：1999年10月1日'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《安全生产法》',
                    value:[650,567],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:130px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>定义：为了加强安全生产工作，防止和减少生产安全事故，保障<br>人民群众生命和财产安全，促进经济社会持续健康发展，制定本<br>法。'+
                                      '<br>发布日期：2002年6月29日'+
                                      '<br>实施日期：2002年11月1日'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《行政许可法》',
                    value:[650,500],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:150px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>目的：为了规范行政许可的设定和实施，保护公民、<br>法人和其他组织的合法权益，维护公共利益和社会秩序<br>，保障和监督行政机关有效实施行政管理，根据宪法<br>，制定本法。'+
                                      '<br>发布日期：2003年8月27日'+
                                      '<br>实施日期：2004年7月1日'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'行政法规',
                    value:[250,400],
                    symbolSize:40,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:100px;width:400px;border-radius:5px;background:#fff">' +
                                      '<br>是指国务院根据宪法和法律，按照法定程序制定的有关行使<br>行政权力，履行行政职责的规范性文件的总称。<br>行政法规的效力仅次于宪法和法律，高于部门规章和地方性法规。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《铁路货物运输合同实施细则》',
                    value:[650,450],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:130px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>目的：结合铁路货物运输实际的特殊性，按照《合同法》<br>的基本精神和原则，规定铁路货物运输合同实施中的具体办法。'+
                                      '<br>发布日期：1986年12月20日'+
                                      '<br>实施日期：1987年7月1日'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《铁路运输安全保护条例》',
                    value:[650,400],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:150px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>目的：为了加强铁路运输安全管理，保障铁路运输安全和畅通，<br>保护人身安全、财产安全及其他合法权益，根据<br>《中华人民共和国铁路法》和《中华人民共和国安全生产法》，<br>制定本条例。'+
                                      '<br>发布日期：2004年12月27日'+
                                      '<br>实施日期：2005年4月1日'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《铁路安全管理条例》',
                    value:[650,350],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:130px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>目的：为了加强铁路安全管理，保障铁路运输安全和畅通<br>，保护人身安全和财产安全而制定的法规。'+
                                      '<br>发布日期：2013年8月17日'+
                                      '<br>实施日期：2014年1月1日'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'行政规章',
                    value:[250,200],
                    symbolSize:40,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    tooltip:{
                        show:false,
                    },
                },{
                    name:'《铁路货物运输规程》',
                    value:[650,250],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:130px;width:410px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>定义：铁路货物运输规程简称“货规”。依据国家制定的有关方针<br>、政策、法令，结合中国铁路运输的实际状况所制定的管理<br>铁路货物运输、调整承运人与托运人、收货人之间权利与<br>义务的行政法规。对承运人、托运人和收货人各方都具有约束力。'+
                                      '<br>实施日期：1991年'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《铁路技术管理规程》',
                    value:[650,200],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:170px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>定义：《铁路技术管理规程》是我国铁路技术管理的基本规章。<br>《技规》的编制对铁路的基本建设、运输生产和安全管理都起<br>着重要的作用，它主要包括技术设备、行车组织、信号显示、对<br>工作人员的要求等四个方面的内容。'+
                                      '<br>发布日期：第一版1910年1月'+
                                      '<br>修订日期：1954、1956、1960、1964、1972、1983、<br>1992、1999、2006'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《铁路军事运输管理办法》',
                    value:[650,150],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:130px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>定义：对运输等级和管理分工、运输范围、装卸载运行，<br>军运事故，军交部门运输组织指挥等作了具体规定。'+
                                      '<br>发布日期：1987年8月21日'+
                                      '<br>实施日期：1988年1月1日'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                }],
            },{
                name:'铁路法规',
                type:"effectScatter",
                coordinateSystem:'cartesian2d',
                silent:true,
                rippleEffect:{
                    brushType:'stroke',
                    scale:1.7
                },
                itemStyle:{
                    color:'#1e50a2'
                },
                data:[{
                    value:[250,800],
                    symbolSize:80
                },{
                    value:[250,600],
                    symbolSize:60
                },{
                    value:[250,400],
                    symbolSize:40
                },{
                    value:[250,200],
                    symbolSize:40
                }]
            },{
                name:'铁路法规',
                type:'lines',
                coordinateSystem:'cartesian2d',
                zlevel:2,
                effect:{
                    show:true,
                    symbolSize:10,
                    symbol:'triangle'
                },
                tooltip:{
                    show:false
                },
                lineStyle:{
                    curveness:0.1,
                    opacity:0.2,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#58B3CC'
                    }, {
                        offset: 1, color: '#F58158'
                    }], false),
                    width: 2,
                },
                data:[
                      {coords:[[250,800],[250,600]],lineStyle:{curveness:0}},
                      {coords:[[250,600],[250,400]],lineStyle:{curveness:0}},
                      {coords:[[250,400],[250,200]],lineStyle:{curveness:0}},
                      {coords:[[250,800],[650,800]]},
                      {coords:[[250,600],[650,700]]},
                      {coords:[[250,600],[650,633]]},
                      {coords:[[250,600],[650,567]]},
                      {coords:[[250,600],[650,500]]},
                      {coords:[[250,400],[650,450]]},
                      {coords:[[250,400],[650,400]]},
                      {coords:[[250,400],[650,350]]},
                      {coords:[[250,200],[650,250]]},
                      {coords:[[250,200],[650,200]]},
                      {coords:[[250,200],[650,150]]},
                
                    ]
            },{
                name:'铁路标准',
                type:'graph',
                draggable: false,
                coordinateSystem: "cartesian2d",
                label:{
                    show:true,
                    position:'right',
                    fontSize:20
                },
                itemStyle:{
                    color:'#640125'
                },
                data:[{
                    name:'国家标准',
                    value:[250,800],
                    symbolSize:80,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:180px;width:400px;border-radius:5px;background:#fff">' +
                                      '<br>国家标准分为强制性国家标准和推荐性国家标准。对保障<br>人身健康和生命财产安全、国家安全、生态环境安全<br>以及满足经济社会管理基本需要的技术要求，应当制定<br>强制性国家标准。强制性国家标准由国务院有关行政<br>主管部门依据职责提出、组织起草、征求意见和技术审查，<br>由国务院标准化行政主管部门负责立项、编号和对外通报<br>。强制性国家标准由国务院批准发布或授权发布。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《铁路运输危险货物包装检验安全规范 通则》',
                    value:[650,850],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:100px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>现行编号'+'GB 19359.1-2003'+
                                      '<br>制订目的：本标准规定了铁路运输危险货物包装(不包<br>括军品)的分类、代码和标记、要求、性能试验和使用鉴定'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《危险货物分类和品名编号》',
                    value:[650,800],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:80px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>现行编号'+'GB 6944-2012'+
                                      '<br>制订单位：国家标准化管理委员会'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《劳动防护用品选用规则》',
                    value:[650,750],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:120px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>现行编号'+'GB11651-89'+
                                      '<br>制订目的：是为了指导用人单位合理配备、正确使用劳动防护<br>用品，保护劳动者在生产过程中的安全和健康，<br>确保安全生产而指定的规则。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'行业标准',
                    value:[250,600],
                    symbolSize:60,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:100px;width:400px;border-radius:5px;background:#fff">' +
                                      '<br>行业标准是对没有国家标准而又需要在全国某个<br>行业范围内统一的技术要求所制定的标准。<br>行业标准不得与有关国家标准相抵触。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《道路危险货物运输企业等级》',
                    value:[650,700],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:50px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>现行编号：TB/T 2688-1996'
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《铁路危险货物分类试验方法》',
                    value:[650,633],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:50px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>现行编号：TB/T 2857-1997'
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《铁路工程设计防火规范》',
                    value:[650,567],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:50px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>现行编号：TB10063-2007'
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《石油化工企业职业安全卫生设计规范》',
                    value:[650,500],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:50px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>现行编号：SH3047-1993'
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'地方标准',
                    value:[250,400],
                    symbolSize:40,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:100px;width:400px;border-radius:5px;background:#fff">' +
                                      '<br>地方标准是由地方(省、自治区、直辖市) 标准化主管<br>机构或专业主管部门批准，发布，在某一地区<br>范围内统一的标准。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'《危险品物流服务质量规范》',
                    value:[650,400],
                    symbolSize:20,
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:50px;width:400px;border-radius:5px;background:#fff">' +
                                      '法规名称：'+params.name+
                                      '<br>现行编号：DB37/T 2116-2012'
                                      '</div>';
                            return tipHtml;
                        }
                    },
                },{
                    name:'企业标准',
                    value:[250,200],
                    symbolSize:30,
                    label:{
                        position:'left',
                        offset:[-30,0]
                    },
                    tooltip:{
                        show:true,
                        padding:0,
                        formatter:function(params){
                            var tipHtml = '';
                            tipHtml = '<div style="height:100px;width:400px;border-radius:5px;background:#fff">' +
                                      '<br>企业标准是在企业范围内需要协调、统一的技术要求、管理要求<br>和工作要求所制定的标准，是企业组织生产、经营活动<br>的依据。企业标准一般以“Q"标准的开头。'+
                                      '</div>';
                            return tipHtml;
                        }
                    },
                }],
            },{
                name:'铁路标准',
                type:"effectScatter",
                coordinateSystem:'cartesian2d',
                silent:true,
                rippleEffect:{
                    brushType:'stroke',
                    scale:1.7
                },
                itemStyle:{
                    color:'#640125'
                },
                data:[{
                    value:[250,800],
                    symbolSize:80
                },{
                    value:[250,600],
                    symbolSize:60
                },{
                    value:[250,400],
                    symbolSize:40
                },{
                    value:[250,200],
                    symbolSize:40
                }]
            },{
                name:'铁路标准',
                type:'lines',
                coordinateSystem:'cartesian2d',
                zlevel:2,
                effect:{
                    show:true,
                    symbolSize:10,
                    symbol:'triangle'
                },
                tooltip:{
                    show:false
                },
                lineStyle:{
                    curveness:0.1,
                    opacity:0.2,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#58B3CC'
                    }, {
                        offset: 1, color: '#F58158'
                    }], false),
                    width: 2,
                },
                data:[
                      {coords:[[250,800],[250,600]],lineStyle:{curveness:0}},
                      {coords:[[250,600],[250,400]],lineStyle:{curveness:0}},
                      {coords:[[250,400],[250,200]],lineStyle:{curveness:0}},
                      {coords:[[250,800],[650,850]]},
                      {coords:[[250,800],[650,800]]},
                      {coords:[[250,800],[650,750]]},
                      {coords:[[250,600],[650,700]]},
                      {coords:[[250,600],[650,633]]},
                      {coords:[[250,600],[650,567]]},
                      {coords:[[250,600],[650,500]]},
                      {coords:[[250,400],[650,400]]},
                    ]
            }],
            animationDuration:5000,
            animationDelay:500
        }