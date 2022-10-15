app.title = '嵌套环形图';

var STEP = 5;
var TOTAL = 100;

var errorIndex = [];

// generate data
var deviceData = [];
for (var c=0; c<5; c++) {
    var deviceItemData = [];
    for (var i=0; i<TOTAL; i++) {
        var color = '#0c96e2';
        var borderColor = i==0?'white':'#333';
        var borderWidth = i==0?2:0.5;
        if (Math.random() < 0.1) {
            if (c == 4) {
                color = 'black';
            } else if (c == 2 || c == 3) {
                errorIndex.push(i);
                color = '#fa240d';
            }
        }
        deviceItemData.push({
            value: 1,
            name: 'name'+i,
            itemStyle: {
                normal: {
                    color: color,
                    borderColor: '#333',
                    borderWidth: 0.5,
                }
            }
        })
        
    }
    deviceData.push(deviceItemData);
}



option = {
    backgroundColor: 'linear-gradient(#000135, #0252a3)',

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },

    series: [
        {
            name:'Device',
            type:'pie',
            selectedMode: 'single',
            radius: ['50%', '55%'],
            //animation: false,

            label: {
                normal: {
                    show: false,
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: deviceData[0]       
            
        },
        {
            name:'Device',
            type:'pie',
            radius: ['55%', '60%'],
            //animation: false,
            label: {
              normal: {
                  show: false
              }  
            },

            data:deviceData[1]         
            
        },
        {
            name:'Device',
            type:'pie',
            radius: ['60%', '65%'],
            //animation: false,
            label: {
              normal: {
                  show: false
              }  
            },

            data:deviceData[2]         
            
        },
        {
            name:'Device',
            type:'pie',
            radius: ['65%', '70%'],
            //animation: false,
            label: {
              normal: {
                  show: false
              }  
            },

            data:deviceData[3]         
            
        },
        {
            name:'Device',
            type:'pie',
            radius: ['70%', '75%'],
            //animation: false,
            label: {
              normal: {
                  show: false
              }  
            },

            data:deviceData[4]         
            
        }
    ]
};
/*
function rotate(){
    for (var i=0; i<5; i++) {
        option.series[i].data[0].itemStyle.normal.borderColor = '#333';
        option.series[i].data[0].itemStyle.normal.borderWidth = 0.5;
        deviceData[i].unshift(deviceData[i].pop());
        option.series[i].data = deviceData[i];
        option.series[i].data[0].itemStyle.normal.borderColor = 'white';
        option.series[i].data[0].itemStyle.normal.borderWidth = 2;
        

    }
}
*/
var currentStep = 0;
var newStep = 0;
function rotate () {
    newStep = currentStep - STEP;
    if (newStep < 0) {
        newStep = TOTAL + newStep;
    }
    //console.log('startAngle: ', option.series[0].startAngle);
    for (var i=0; i<5; i++) {
        //option.series[i].data[currentStep].itemStyle.normal.borderColor = '#333';
        //option.series[i].data[currentStep].itemStyle.normal.borderWidth = 0.5;
        
        if (option.series[i].startAngle !== undefined) {
            
            if (option.series[i].startAngle > 0) {
                option.series[i].startAngle -= 360/TOTAL*STEP;
            } else {
                option.series[i].startAngle = 360 - 360/TOTAL*STEP;
            }
        } else {
            option.series[i].startAngle = 90 - 360/TOTAL*STEP;
        }
        

        //option.series[i].data[newStep].itemStyle.normal.borderColor = 'white';
        //option.series[i].data[newStep].itemStyle.normal.borderWidth = 2;
    }
    
    currentStep = newStep;
}

setInterval(function(){
    var currentIndex = errorIndex.indexOf(currentIndex);
    if (currentIndex < 0) {
        currentIndex = errorIndex[errorIndex.length - 1];
    }

    rotate();
    myChart.setOption(option);
}, 2000);