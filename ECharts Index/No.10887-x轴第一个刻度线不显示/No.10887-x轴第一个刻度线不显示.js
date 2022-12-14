option = {
    "tooltip":{
        "trigger":"item"
    },
    "grid":{
        "x":80,
        "y":60,
        "x2":80,
        "y2":60,
        "containLabel":true
    },
    "xAxis":{
        "type":"category",
        "data":[
            2015,
            2014,
            2013,
            2012,
            2011,
            2010,
            2009,
            2008,
            2007,
            2006
        ],
        interval: 0, //  添加这个属性,强制将坐标label全部展示
        "show":true,
        "name":"年份",
        "nameLocation":"end",
        "nameGap":25,
        "axisLine":{
            "show":true,
            "lineStyle":{
                "color":"#4cabce"
            }
        },
        "axisTick":{
            "show":true
        },
        "splitLine":{
            "show":true,
            "lineStyle":{
                "color":"#4cabce",
                "type":"dotted"
            }
        },
        "axisLabel":{
            "show":true,
            "interval":"auto",
            "rotate":0,
            "color":"#000",
            "fontSize":12,
            "formatter":null,
            'showMinLabel': true
        }
    },
    "yAxis":{
        "type":"value",
        "show":true,
        "name":"性别",
        "nameLocation":"end",
        "nameGap":25,
        "nameRotate":0.1,
        "axisLine":{
            "show":true,
            "lineStyle":{
                "color":"#4cabce"
            }
        },
        "axisTick":{
            "show":true
        },
        "splitLine":{
            "show":true,
            "lineStyle":{
                "color":"#4cabce",
                "type":"solid"
            }
        },
        "axisLabel":{
            "show":true,
            "color":"#000",
            "fontSize":12
        },
        "min":null,
        "max":null,
        "interval":null
    },
    "series":[
        {
            "type":"bar",
            "data":[
                10302,
                10844,
                9576,
                10636,
                11690,
                9776,
                10214,
                8934,
                10004,
                10826
            ],
            "name":"性别",
            "tooltip":{
                "show":false
            }
        },
        {
            "type":"bar",
            "data":[
                10302,
                10844,
                9576,
                10636,
                11690,
                9776,
                10214,
                8934,
                10004,
                10826
            ],
            "name":"门店",
            "tooltip":{
                "show":false
            }
        },
        {
            "type":"bar",
            "data":[
                10302,
                10844,
                9576,
                10636,
                11690,
                9776,
                10214,
                8934,
                10004,
                10826
            ],
            "name":"城市",
            "tooltip":{
                "show":false
            }
        }
    ]
}