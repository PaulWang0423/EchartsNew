var data = [[0, 16, 3, '方案1'], [16, 20, 15, '方案2'], [20, 26, 12, '方案3'],
[26, 32, 22, '方案4'], [32, 56, 7, '方案5'], [56, 62, 17, '方案6']];
var textColor="#fff";
var splitLineColor="rgba(255,255,255,0.1)"
var img="data:image/png;base64,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XV1duwFg/vz5K956663P1dbWmoetNA+OOPEpxGPhEFpaWtS333777iuvvPJGANr58+ePbd++/ZV77733fz366KPfHxoa+nN/f//v9+/fvzEej59QVTU8Z86czxw+fPgLN954owL5HVRPQ9VCMzh0d3ffWFFRcSvnPH3y5Mnft7a2HhnjitF+zZo1ZevXr08a2xs3blxw00033cUYi5w8efLd5cuXv2W0b/z6k98MSnCIEyfuj8d7u99d95X7p9fX1y/QdT2xdevWP6xevfo4AI4x49q8efNlXV1d51atWtUFQOzcufPy1tbWzymKEh4aGtpXX1//KnKzNtuZGJZ6AIX9bKDYsmVLdUVFxc0AREdHx+9aW1sPyzqyfv36rLup7e3tx7ds2fIKAD5v3rxlTz311MeM/YIUHOLEifvjX7hh+WV1dXUf13U9+eyzz764evXqE7AY0W233XZk1apVZ42K66677sjrr7/+T5zzdHl5+dUffvjhEvhUQUPU66677iZFUdRkMrn/sssuO5yneZajPvjggx92dnb+BQC76667VhhtghQc4sSJF84TqZR2/RWXX8EYE1u2bPnjD3/4w1443yDIJEd33XVX56lTp/4IAHV1dW0PP/xwWNLe7jg58mxwjz76qBYOh6/gnGPbtm1vutwtK738zne+swNAuqqqqum+++4rB82DI058yvAVlzXXhzVV6+/vP7FmzZrjGJdsOJlzk2DhwoUHUqnUGUVRYo8//vgiK/eifNfgrG1YR0fHgtra2v+cTqdPl5eXbzDqTQskdYq17oMPPmivqam56tixY1tff/3148cr6trODQ+xlM4BIQAhGGMMFZEIIprCuADODw+PcgCCC8YYUBGJsGhIhRDAuaFhphtcjPFoBJGQBiEEzg/HWXqMG50sj0QQDWngQmAgkUDa9JwABkac+OTmUROPJzD+989EzvkRTwrj/IHCBANQEY0iGtaEEMBAIiGM848xJhgYppVFRTQUggDE+UQcp7r74o9+/o5lVzbMZEf37H6+vb39ELITHG7Zli4nT55cUl9f/zepVOqD6dOn/wpyM8z7/XbZPDjHeW/RaLQOAHRd77Q5qGxfq/uywcHBs3V1dctnzpzZtHjx4sGFun6Ic850XWecc+mCmhhy6oBMHcrKIYTI1AOjRgcIcM4ZKiMw2Gi90bWxb5ZVaJKP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"
var timeArr=["2020.03-2020.08","2020.03-2020.04","2020.03-2020.06","2020.03-2020.05","2020.03-2020.08","2020.03-2020.08",]
data = data.map(function (item, index) {
    return {
        value: item,
        itemStyle: {
          borderColor:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "rgb(121, 238, 255)"
                },
                {
                    offset:0.05,
                    color: "rgb(81, 203, 216,0)"
                }
            ], false),
          borderWidth:2,
            color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "rgb(81, 203, 216,.8)"
                },
                {
                    offset: 1,
                    color: "rgb(81, 203, 216,.1)"
                }
            ], false),
        }
    };
});

function renderItem(params, api) {
    var yValue = api.value(2);
    var start = api.coord([api.value(0), yValue]);
    var size = api.size([api.value(1) - api.value(0), yValue]);
    var style = api.style();

    return {
        type: 'rect',
        shape: {
            x: start[0],
            y: start[1],
            width: size[0],
            height: size[1]
        },
        style: style
    };
}

option = {
    backgroundColor: "rgb(48, 160, 199)",
    tooltip: {
        trigger: 'item',
        backgroundColor:"rgba(29, 115, 145,.8)",
        borderColor:"#fff",
        textStyle:{
        color:textColor,
        align:"center"
        },
        formatter:(p)=>{
            console.log("===",p);
            return  `<div style="background:url(img)">持续时间<br/>${timeArr[p.dataIndex]}</div>`;
        }
    },
    xAxis: {
        scale: true,
       axisLabel:{
           show:false
       },
       axisTick:{
           show:false
       },
       axisLine:{
           show:false
       },
       splitLine:{
           lineStyle:{
           color:splitLineColor
               
           }
           
       }
    },
    yAxis: {
        axisLine:{
           show:false
       },
       axisTick:{
           show:false
       },
       axisLabel:{
           color:textColor
       },
       splitLine:{
            lineStyle:{
           color:splitLineColor
               
           }
       }
    },
    series: [{
        type: 'custom',
        
        renderItem: renderItem,
        label: {
            show: true,
            position: 'top',
            color:textColor,
            formatter:(p)=>{
                console.log('p',p)
                return p.name;
            }
        },
        dimensions: ['from', 'to', 'profit'],
        encode: {
            x: [0, 1],
            y: 2,
            tooltip: [0, 1, 2],
            itemName: 3
        },
         borderWidth:3,
            borderColor:'red',
        data: data
    },
    ]
};