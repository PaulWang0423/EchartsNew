// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill


var option = {
    backgroundColor: '#33619D', //背景色: ['#FFBFE5', '#EA88CE'],
    title: {
        text: '图表由 sage 制作',
        subtext: '数据纯属虚构',
        textStyle: {
            fontSize: 15,
            color: '#19B8E0',

        },
        subtextStyle: {
            fontSize: 15,
            color: '#999',
            top: '10%',
        },
        top: '90%',
        left: '50%',

        textAlign: 'center',
        textBaseAlign: 'middle'
    },
    tooltip: {
        show: true
    },
    series: [{
        color: ['#04C1F9'],
        amplitude: 5,
        name: 'Liquid Fill',
        waveLength: '80%',
        type: 'liquidFill',
        // silent: true,
        // animationDurationUpdate: 200,
        data: [{
            name: '1机',
            value: 0.78
        }, 0.5, 0.4, 0.3],
        radius: '50%',
        direction: 'left',
        outline: {
            show: false
        },

        backgroundStyle: {
            //  borderColor: '#000',
            //borderWidth: 1,
            shadowColor: 'rgba(234, 136, 206, 0.8)',
            // shadowBlur: 100,
            color: 'white'
        },

        // shape:'path://M 0 112.488 V 20.249 c 0 0 25.918 -20.456 83.239 -20.248 c 57.881 0.211 83.239 20.248 83.239 20.248 v 92.239 H 0 L 0 112.488 Z M 83.24 2.252 c -56.054 0 -80.99 19.497 -80.99 19.497 H 4.5 v -1.5 h 4.499 v 1.5 h 4.499 v -1.5 h 4.5 v 1.5 h 4.499 v -1.5 h 4.5 v 1.5 h 4.5 v -1.5 h 4.499 v 1.5 h 4.5 v -1.5 h 4.499 v 1.5 h 4.5 v -1.5 h 4.5 v 1.5 h 4.499 v -1.5 h 4.5 v 1.5 h 4.499 v -1.5 h 4.5 v 1.5 h 4.499 v -1.5 h 4.499 v 1.5 h 4.501 v -1.5 h 4.499 v 1.5 h 4.499 v -1.5 h 4.499 v 1.5 h 4.5 v -1.5 h 4.499 v 1.5 h 4.499 v -1.5 h 4.501 v 1.5 h 4.499 v -1.5 h 4.499 v 1.5 h 4.499 v -1.5 h 4.5 v 1.5 h 4.499 v -1.5 h 4.5 v 1.5 h 4.5 v -1.5 h 4.499 v 1.5 h 4.499 v -1.5 h 4.499 v 1.5 h 2.251 C 164.23 21.749 143.606 2.252 83.24 2.252 L 83.24 2.252 Z',
        shape: 'path://M0,19.589C0,19.59,12.542,0.133,86.237,0.092c73.639-0.039,86.236,19.497,86.236,19.497v224.215H0V19.589L0,19.589z',
        // shape:'path://M0,112.488V20.249c0,0,25.918-20.456,83.239-20.248c57.881,0.211,83.239,20.248,83.239,20.248v92.239zM0,112.488V20.249c0,0,25.918-20.456,83.239-20.248c57.881,0.211,83.239,20.248,83.239,20.248v92.239H0L0,112.488z M165.729,21c0,0-26.354-20.275-82.49-20.248C24.962,0.78,0.75,21,0.75,21v14.248H6v0.749H0.75v14.249H6v0.75H0.75v14.998H6v0.751H0.75v14.248H6v0.749H0.75v14.248H6v0.751H0.75v14.997h164.979V21L165.729,21z M3,21h3.749v0.749H3V21L3,21zM14.998,21.749h-3.749V21h3.749V21.749L14.998,21.749z M23.247,21.749h-3.75V21h3.75V21.749L23.247,21.749z M31.497,21.749h-3.75V21h3.75V21.749L31.497,21.749z M39.746,21.749h-3.75V21h3.75V21.749L39.746,21.749z M47.994,21.749h-3.749V21h3.749V21.749L47.994,21.749z M56.243,21.749h-3.75V21h3.75V21.749L56.243,21.749z M64.492,21.749h-3.75V21h3.75V21.749L64.492,21.749zM72.742,21.749h-3.75V21h3.75V21.749L72.742,21.749z M80.989,21.749h-3.749V21h3.749V21.749L80.989,21.749z M89.238,21.749H85.49V21h3.748V21.749L89.238,21.749z M97.488,21.749h-3.75V21h3.75V21.749L97.488,21.749z M105.737,21.749h-3.75V21h3.75V21.749L105.737,21.749z M113.986,21.749h-3.75V21h3.75V21.749L113.986,21.749z M122.234,21.749h-3.749V21h3.749V21.749L122.234,21.749z M130.483,21.749h-3.75V21h3.75V21.749L130.483,21.749z M138.733,21.749h-3.75V21h3.75V21.749L138.733,21.749zM146.982,21.749h-3.75V21h3.75V21.749L146.982,21.749z M155.23,21.749h-3.749V21h3.749V21.749L155.23,21.749z M163.479,21.749zh-3.749V21h3.749V21.749L163.479,21.749z',
        label: {
            normal: {
                position: ['50%', '45%'],
                areaStyle: {
                    color: 'green'
                },
               // formatter: '{a}\n{b}\nValue: {c}',
                textStyle: {
                    fontSize: 18
                }
            }
        }
    }]
};