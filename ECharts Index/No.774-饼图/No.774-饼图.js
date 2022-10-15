var data = {
    dataAge: [
        {
            name: '名称2',
            value: '272',
        },
        {
            name: '名称3',
            value: '292',
        },
        {
            name: '名称4',
            value: '120',
        },
        {
            name: '名称5',
            value: '42',
        },
        {
            name: '名称6',
            value: '88',
        },
        {
            name: '名称7',
            value: '92',
        },
    ],
};
option = {
    backgroundColor: '#05274C',
    grid: {
        left: '20%',
    },
    legend: {
        show: true,
        color:'#C7DDFF',
        orient: 'vertical',
        right: '20%',
        top:'40%',
        animation:true
    },
    color: ['#2AC9FD', '#76FBC0', '#35C96E', '#FCC708', '#48B188', '#5957C2', '#4A5D73'],
    series: [
        {
            color: ['#39D1FA', '#06B3FF', '#0072FF', '#0643FF', '#5158FA', '#5957C2'],
            type: 'pie',
            radius: ['70', '95'],
            // labelLine: {
            //     show: false,
            //     normal: {
            //         length: 25,
            //         length2: 120,
            //         lineStyle: {
            //             type: 'solid',
            //         },
            //     },
            // },
            // label: {
            //     show: false,
            //     normal: {
            //         formatter: (params) => {
            //             console.log(params);
            //             return '{b| ' + params.name + '}  ' + '{c|' + params.percent.toFixed(0) + '%}';
            //         },
            //         borderWidth: 0,
            //         borderRadius: 4,
            //         padding: [0, -86],
            //         height: 70,
            //         fontSize: 13,
            //         align: 'center',
            //         color: '#3494BD',
            //         rich: {
            //             b: {
            //                 fontSize: 12,
            //                 lineHeight: 20,
            //                 color: '#41B3DC',
            //                 padding: [0, 0, 5, 0],
            //             },
            //             c: {
            //                 fontSize: 20,
            //                 lineHeight: 20,
            //                 color: 'orange',
            //             },
            //         },
            //     },
            // },
            data: data.dataAge,
        },
        {
            type: 'pie',
            radius: ['110', '120'],
            data: [100],
            color: ['#5071AE3D'],
            label: {
                show: false,
            },
        },
        {
            type: 'pie',
            radius: ['50', '53'],
            data: [100],
            color: ['#39D1FA5C'],
            label: {
                show: false,
            },
        },
    ],
};
