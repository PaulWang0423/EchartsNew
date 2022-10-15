 let dataPie = [

     {
         value: 52,
         name: '在线'
     },
     {
         value: 36,
         name: '维修'
     },
     {
         value: 31,
         name: '离线'
     },
     {
         value: 15,
         name: '检修'
     },
     {
         value: 17,
         name: '抢修'
     },
     {
         value: 22,
         name: '其他'
     },
 ];
 let colorPie = ['#173852', '#0b2036', '#002e49'];
 let colorWrap = ['#3087d6', '#f6ce54', '#4be1ff', "#b6e9ff", "#18edc9", "#6ac5fa"];
 let baseDataPie = [],
     baseDataWrap = [];
 let total = 0;
 dataPie.forEach(function(val, idx, arr) {
     total += val.value;
 })
 for (let i = 0; i < dataPie.length; i++) {
     baseDataWrap.push({
         value: dataPie[i].value,
         name: dataPie[i].name,
         itemStyle: {
             normal: {
                 color: colorWrap[i],
                 borderWidth: 5,
                 borderColor: colorWrap[i],
                 shadowBlur: 50,
                 shadowColor: 'rgba(7, 132, 250, 0.8)',
             }
         }
         
         
         
         
         
         
         
         
         
     }, {
         value: 5,
         name: '',
         itemStyle: {
             normal: {
                 color: 'transparent',
                 borderWidth: 5,
                 borderColor: 'transparent',

             }
         },
         tooltip: {
             show: false
         },
     });

     if (i < 3) {
         baseDataPie.push({
             value: dataPie[i].value,
             name: dataPie[i].name,
             itemStyle: {
                 normal: {
                     borderWidth: 20,
                     borderColor: colorPie[i],
                 }
             }
         });
     }
 }


 option = {
     backgroundColor: "#031223",
     title: {
         text: '设备总数',
         subtext: '10,225',
         textStyle: {
             color: '#00b5f3',
             fontSize: 14,

         },
         subtextStyle: {
             align: 'center',
             fontSize: 16,
             color: ['#85c7e3'],
             fontWeight: 800
         },
         x: '23%',
         y: 'center',
     },
     grid: {
         left: '1%', // 与容器左侧的距离
         right: '1%', // 与容器右侧的距离
         top: '1%', // 与容器顶部的距离
         bottom: '1%', // 与容器底部的距离

     },
     tooltip: {
         show: true,
         trigger: 'item',
         formatter: "{a}：{b} <br/>数量：{c}"
     },
     legend: [{
             data: ['在线', '维修', '离线','检修', '抢修', '其他'],
             icon: 'vertical',
             right: '5px',
             top: 'center',
             orient: 'vertical',
             itemGap: 20,
             itemWidth: 15,
             itemHeight: 8,
             formatter: function(name) {

                 let target, percent;
                 for (let i = 0; i < dataPie.length; i++) {
                     if (dataPie[i].name === name) {
                         target = dataPie[i].value;
                         percent = ((target / total) * 100).toFixed(1);
                     }
                 }
                 let arr = [percent + '% ' + ' {yellow|' + target + '}', ' {blue|' + name + '}'];
                 return arr.join("\n")

             },
             textStyle: {
                 lineHeight: 20,
                 color: '#f0f4f6',
                 align: 'right',
                 rich: {
                     yellow: {
                         color: '#00b5f3',
                         fontWeight: "bold"

                     },
                     blue: {
                         color: '#4be1ff',
                         align: 'right',

                     },
                 }

             },
         },
        /* {
             data: ['检修', '抢修', '其他'],
             icon: 'vertical',
             right: '5px',
             top: 'center',
             orient: 'vertical',
             itemGap: 20,
             itemWidth: 15,
             itemHeight: 8,
             formatter: function(name) {

                 let target, percent;
                 for (let i = 0; i < dataPie.length; i++) {
                     if (dataPie[i].name === name) {
                         target = dataPie[i].value;
                         percent = ((target / total) * 100).toFixed(1);
                     }
                 }
                 let arr = [percent + '% ' + ' {yellow|' + target + '}', ' {blue|' + name + '}'];
                 return arr.join("\n")

             },
             textStyle: {

                 lineHeight: 20,
                 color: '#f0f4f6',
                 align: 'right',
                 rich: {
                     yellow: {
                         color: '#00b5f3',
                         fontWeight: "bold"


                     },
                     blue: {
                         color: '#4be1ff',
                         align: 'right',

                     },
                 }

             },
         }*/
     ],

     series: [{
             name: '报警',
             type: 'pie',
             clockWise: false, //顺时加载
             hoverAnimation: false, //鼠标移入变大
             center: ['30%', '50%'],
             radius: ['80%', '81%'],
             label: {
                 normal: {
                     show: false
                 }
             },
             data: baseDataWrap
         },
         {
             name: '',
             type: 'pie',
             color: colorPie,
             selectedMode: 'single',
             radius: ['55%', '58%'],
             center: ['30%', '50%'],
             hoverAnimation: false,
             label: {
                 normal: {
                     show: false,
                 }
             },
             tooltip: {
                 show: false
             },
             data: baseDataPie
         },

     ]
 };