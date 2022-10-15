option = {
    backgroundColor:'#fff',
    title : {
        text: '即办件情况分析',
       
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        left:'7%',
         top:50,
        data:['审批事项即办数']
    },
      grid: {
        top:80,
        left:'10%',
       right:'45%',
        bottom:'65%'
    },
    color:['#8fdfe6','#c4f9fe'],
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    
    calculable : true,
    xAxis : [
        {
            "axisLabel": {
            interval: {default: 0},
            rotate:50,
            textStyle: {
                fontSize: 10
            },
            formatter : function(params){
               var newParamsName = "";// 最终拼接成的字符串
                var paramsNameNumber = params.length;// 实际标签的个数
                var provideNumber = 4;// 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                /**
                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                 */
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                    /** 循环每一行,p表示行 */
                    var tempStr = "";
                    tempStr=params.substring(0,4);
                    newParamsName = tempStr+"...";// 最终拼成的字符串
                } else {
                    // 将旧标签的值赋给新标签
                    newParamsName = params;
                }
                //将最终的字符串返回
                return newParamsName
            }

        },
            type : 'category',
            boundaryGap : false,
           data: ['武鸣区', '横县', '宾阳县', '上林县'
        ,'马山县', '江南区', '青秀区', '西乡塘区', '邕宁区',
        '良庆区']},
        
    ],
    yAxis : {
           
            type : 'value'
        }
    ,
    series : [
        {
            name:'审批事项即办数',
            type:'line',
            areaStyle: {
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#7dc8cf'
                    }, {
                        offset: 1,
                        color: '#c4f9fe'
                    }], false)
                }
            },
            smooth:true,
            itemStyle: {
                normal: {areaStyle: {type: 'default'}}    
            },
            data:[210, 312, 121,654, 500, 830, 710, 521, 304, 560 ]
        }
    ]
};