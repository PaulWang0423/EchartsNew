
    var base = + new Date(2017,3,8);
    var oneDay = 24*3600*1000;
    var date = [];
    var data = [Math.random()*150];
    var now = new Date(base);
    var day = 30;
    function addData(shift){
        now = [now.getFullYear(),now.getMonth()+1,now.getDate()].join('/');        
        date.push(now);        
        data.push((Math.random()-0.5)*10+data[data.length-1]);
        if (shift) {
            console.log(data);
            date.shift();
            data.shift();
        }
        now = new Date(+new Date(now)+oneDay);        
    }

    for (var i = 0; i < day; i++) {
        addData();
    }

option = {
    title:{
            text:'ECharts 30天内数据实时更新'
        },
        xAxis:{
            type:"category",
            //boundaryGap:false,
            data:date
        },
        yAxis:{
            boundaryGap:[0,'100%'],
            type:'value'
        },
        series:[{
            name:'成交',
            type:'bar',
            smooth:true, //数据光滑过度
            symbol:'none', //下一个数据点
            stack:'a',
            areaStyle:{
                normal:{
                    // color:'red'
                }
            },
            data:data
        }]
};
setInterval(function(){
        addData(true);
        myChart.setOption({
            xAxis:{
                data:date
            },
            series:[{
                name:'成交',
                data:data
            }]
        });
    },1000)