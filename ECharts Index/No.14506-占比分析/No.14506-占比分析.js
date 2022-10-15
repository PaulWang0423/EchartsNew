var people_path = 'path://M662.633485 327.209195H360.762137C327.763015 327.209195 301.012754 354.943866 301.012754 389.227001l22.341818 257.572915 0.642006 7.746876c3.424033 18.618182 19.131787 32.699519 38.049572 32.699519v0.042801H373.773464l1.626416-0.042801 1.626416 0.042801a26.236656 26.236656 0 0 1 23.925433 22.941024c0.214002 1.198412 0.256803 2.354023 0.342404 3.509634l20.715402 269.856635 0.470805 6.034859a39.205183 39.205183 0 0 0 38.220773 33.940732h102.121797a39.076782 39.076782 0 0 0 38.049572-33.084723l0.599206-7.789676 20.715402-269.385831c0-0.898809 0.128401-1.754817 0.256802-2.610826a26.322257 26.322257 0 0 1 23.925434-23.454629l1.669216-0.0428 1.626416 0.0428h11.513313v-0.0428c19.345789 0 35.395946-14.808945 38.263573-34.069133l0.042801-0.470804 0.342403-3.980439 22.51302-259.498934c0-34.240334-26.707461-61.975005-59.706583-61.975006zM511.719211 274.650282c72.974713 0 132.210491-61.504201 132.210491-137.303741C643.929702 61.504201 584.693924 0 511.719211 0 438.701698 0 379.55152 61.504201 379.55152 137.346541c0 75.79954 59.150178 137.303741 132.167691 137.303741z';
var girl_path = 'path://M601.088 327.168h-189.44c-32.768 0-59.904 27.648-59.904 61.952l-95.232 278.016 0.512 7.68c3.584 18.432 18.944 32.768 37.888 32.768H310.272c12.288 1.024 89.088-9.728 90.624 2.56 0 1.024 0.512 2.56 0.512 3.584l20.48 269.824 0.512 6.144c2.56 19.456 18.944 33.792 38.4 33.792h101.888c18.944-0.512 35.328-14.336 37.888-33.28l0.512-7.68 20.48-269.312c0-1.024 0-1.536 0.512-2.56 1.536-12.288 77.824-2.048 90.624-3.072H727.04c19.456 0 35.328-14.848 38.4-34.304v-0.512l0.512-4.096L660.992 389.12c0-34.304-26.624-61.952-59.904-61.952zM511.488 274.432c73.216 0 132.096-61.44 132.096-137.216C644.096 61.44 584.704 0 511.488 0 438.784 0 379.392 61.44 379.392 137.216s59.392 137.216 132.096 137.216z';
var bracket_path = 'path://M28.852459 495.60043662l51.976393 0 0 13.366557c0 33.022951 11.666885 47.963279 40.309508 53.46623 15.91082 3.142295 25.458361 3.92918 74.250492 3.92918l184.561311 0c63.643279 0 91.220984 6.289836 116.679344 26.733115 13.791475 11.792787 18.030164 18.86950799 25.458361 36.957377 26.518033-51.11082 56.215082-63.690492 143.192131-63.690492L849.83082 566.36240462c50.911475 0 58.339672-0.786885 74.250492-3.92918 8.487869-1.57377 16.970492-4.716066 23.33377-9.437377 12.726557-8.650492 16.970492-19.656393 16.970492-44.034098l0-13.366557L1016.361967 495.59519162l0 22.803934c0 51.11081999-28.637377 81.773115-82.733115 91.210492-24.39868899 4.716066-40.304262 5.502951-89.096393 5.502951l-5.30360701 0-177.13836099-0.786885c-61.523934 0-82.733115 4.71606599-96.52459 22.803934-9.547541 11.792787-12.72655701 20.443279-15.91081999 44.034098l-54.09573801 0c-4.243934-33.80983601-13.791475-50.323934-35.000656-58.974426-14.851148-6.289836-35.005902-7.863607-77.434754-7.863607l-176.073443 0.786885-6.363279 0c-47.732459 0-64.702951-1.57376999-88.03672099-5.502951-16.970492-3.142295-32.881311-9.437377-45.60786901-17.29573801-26.518033-16.514098-35.005902-37.74426201-37.125246-73.90950799L28.852459 495.60043662z';
option = {
   backgroundColor:'#0088e8',
   grid:[
        {show: false, left: 40, top: 40, bottom: 20, width: '38%'},//左
        {show: false, left: '51%', top: 40, bottom: 20, width: 0},
        {right: 40, top: 40, bottom: 20, width: '38%'}//右
      ],
      xAxis:[{
        type : 'value', inverse:true,name:'',nameLocation: 'center',
        nameTextStyle :{color:'#6ed28d',fontSize:18},position:'top',
        axisLine: {show: false}, axisTick: {show: false},
        splitLine: {show: false},axisLabel :{show: false}
      }, {gridIndex: 1, show: false },{
        gridIndex: 2, type : 'value',name:'',nameLocation: 'center',
        nameTextStyle :{color:'#f3ce00',fontSize:18},position:'top',
        axisLine: {show: false}, axisTick: {show: false},
        splitLine: {show: false},axisLabel :{show: false}
      }],
      yAxis:[{
        type: 'category',inverse : true,position: 'right',
        axisLine: {show: false}, axisTick: {show: false},
        axisLabel :{show: false}, splitLine: {show: false},
        data: []
      },{
        gridIndex: 1,type: 'category',inverse: false,position: 'left',
        axisLine: {show: false}, axisTick: {show: false},splitLine: {show: false},
        data:['项目五','项目四','项目三','项目二','项目一'].map(function(value) {
          return {value: value, textStyle:{align: 'center', color:'#fff', fontSize: 16} };
        })
      },{
        gridIndex: 2,type: 'category',inverse: true,position: 'left',
        axisLine: {show: false}, axisTick: {show: false},
        axisLabel :{show: false}, splitLine: {show: false},
        data: []
      }],
      series:[{
        type: 'pictorialBar', symbol: people_path, symbolRepeat: 'fixed', symbolMargin: 3,
        symbolClip: true, symbolSize: [10,23], symbolBoundingData: 100,z: 10,
        label: {normal: {show: true, offset: [0, 50], textStyle: {fontSize: 14 },formatter:'{c}%' } },
        itemStyle: {normal: {color:'#6ed28d'} }, data: [81.17, 74.53, 71.85, 71.43,73.86]
      },{
        type: 'pictorialBar',symbolSize: [10,23], symbolBoundingData: 100,z: 5,
        itemStyle: {normal: {color:'#00284d'} },label: {normal: {show: false } },
        animationDuration: 0, symbolRepeat: 'fixed', symbolMargin: 3, symbol: people_path,
        data: [100, 100, 100, 100,100]
      },{
        type: 'pictorialBar', symbolBoundingData: 100,z: 5,symbolOffset:[0,30],symbolSize:['90%','10%'],
        itemStyle: {normal: {color:'#6ed28d',fontSize:14} },label: {normal: {show: false } },symbolPosition:'center',
        animationDuration: 0, symbolRepeat: false, symbol: bracket_path,
        data: [100, 100, 100, 100,100]
      },{
        type: 'pictorialBar',symbolSize: [10,23], symbolBoundingData: 100,xAxisIndex: 2,yAxisIndex: 2,
        itemStyle: {normal: {color:'#00284d'} },label: {normal: {show: false } },z: 5,
        animationDuration: 0, symbolRepeat: 'fixed', symbolMargin: 3, symbol: girl_path,
        data: [100, 100, 100, 100,100]
      },{
        type: 'pictorialBar', symbol: girl_path, symbolRepeat: 'fixed', symbolMargin: 3,
        symbolClip: true, symbolSize: [10,23], symbolBoundingData: 100,z: 10,
        label: {normal: {show: true,offset: [0, 50], textStyle: {fontSize: 14 },formatter:'{c}%' } },
        xAxisIndex: 2,yAxisIndex: 2,itemStyle: {normal: {color:'#f3ce00'} },
        data: [18.83, 25.47, 28.15, 28.57,26.14]
      },{
        type: 'pictorialBar', symbolBoundingData: 100,z: 5,symbolOffset:[0,30],symbolSize:['90%','10%'],
        itemStyle: {normal: {color:'#f3ce00',fontSize:14} },label: {normal: {show: false } },symbolPosition:'center',xAxisIndex: 2,yAxisIndex: 2,
        animationDuration: 0, symbolRepeat: false, symbolMargin: 3, symbol: bracket_path,
        data: [100, 100, 100, 100,100]
      }]
};