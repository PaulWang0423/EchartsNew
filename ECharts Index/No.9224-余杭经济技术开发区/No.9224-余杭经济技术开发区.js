option = {
    title : {
        text: '余杭经济技术开发区',
        subtext: '单位:万元/亩'
    },
    backgroundColor:'rgba(0,0,0,0)',
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['亩均税收']
    },
    color:'#EBA954',
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data :['网格一','网格二','网格三','网格四','网格五','网格六']
        }
    ],
//    "WGMC"	"tdmj"	"XSSR"	"sjsf"	"XSSR_mj"	"sjsf_mj"
//  "网格一"	"5433.16"	"143.04"	"5.58"	"263.28"	"10.27"
//  "网格三"	"6573.62"	"341.88"	"16.75"	"520.08"	"25.49"
//  "网格二"	"2600.58"	"68.68"	"4.79"	"264.09"	"18.42"
//   "网格五"	"2803.37"	"87.39"	"4.68"	"311.73"	"16.71"
//  "网格六"	"2789.66"	"77.39"	"3.57"	"277.43"	"12.78"
//  "网格四"	"2655.58"	"89.75"	"6.00"	"337.98"	"22.60"
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'亩均税收',
            type:'bar',
            label:{show:true,position:'top'},
            //data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            //data:[470,263,264,344,301,345],//企业数量
           //data:[143.04,68.68,341.88,89.75,87.39,77.39],//营业收入
           //data:[5.58,4.79,16.75,6.00,4.68,3.57],//上交税金
           //data:[5433.16,2600.58,6573.62,2655.58,2803.37,2789.66],//用地面积
            //data:[263.28,264.09,520.08,337.98,311.73,277.43],//亩均营收
            data:[10.27,18.42,25.49,22.60,16.71,12.78],//亩均实收
            barWidth:38,
           /* markLine : {
                data : [
                     {name: '两个坐标之间的标线',yAxis: 0},
                ]
            }*/
        }
    ]
};
