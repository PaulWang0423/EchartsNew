var giftImageUrl = 'data:image/png;base64,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';
var data = [
    {
        value:37173,
        name:'重要价值客户'
    },
    {
        value:63596,
        name:'重要发展客户'
    },
    {
        value:10823,
        name:'重要保持客户'
    },
    {
        value:63451,
        name:'重要挽留客户'
    },
];
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {d}% <br/> {c}"
    },
    graphic: {
        elements: [{
            type: 'image',
            style: {
                image: giftImageUrl,
                width: 100,
                height: 100
            },
            left: 'center',
            top: 'center'
        }]
    },
    legend: {
        icon: 'circle',
        top: 120,
    },
    series: [{
        type: 'pie',
        radius: ['30%', '40%'],
        center: ['50%', '50%'],
        data: data,
        labelLine: {
            normal: {
                show: true,
                length: 10,
                length2: 40,
                lineStyle: {
                    width: 2
                }
            }
        },
        label: {
            normal: {
                formatter: function(params) {
                        var str = '{c|' + params.data.name+'}' + '{c|\n' + (params.data.value/175043*100).toFixed(2) + '%}'+'{c|\n'+params.data.value +'}';
                        return str;
                    },
                rich: {
                    c: {
                        fontSize: 14,
                        align: 'left',
                        padding: 4
                    }
                }
            }
        }
    }]
};