let dataList = [
  { value: 628, name: '水田' },
  { value: 735, name: '水浇地' },
  { value: 580, name: '旱地' },
];
const colorList = ['#4D88FE', '#50CCCB', '#FFBF3C'];
option = {
  legend: {
    icon: 'circle',
    data: dataList.map((item) => item.name),
    bottom: 0,
    itemGap: 20,
    itemWidth: 8,
  },
  graphic: {
    // 这个属性可以在饼图内部填充图片,文字等
    elements: [
      {
        type: 'image',
        style: {
          image:
            'data:image/png;base64,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', // 这里添加图片地址
          width: '68',
          height: '68',
        },
        left: 'center', //
        top: 'center', // 配置图片居中
      },
    ],
  },
  series: [
    {
      type: 'pie',
      radius: '70%',
      center: ['50%', '50%'],
      label: {
        fontWeight:'bold',
        rich: {
          rich_blue: {
            color: '#4D88FE',
          },
          rich_orange: {
            color: '#FFBF3C',
          },
          rich_green: {
            color: '#50CCCB',
          },
        },
        formatter: function (params) {
          console.log(params);
          if (params.name === '旱地') {
            return params.name + '\n\n' + `{rich_orange|${params.percent}%}`;
          }else if(params.name === '水浇地'){
             return params.name + '\n\n' + `{rich_green|${params.percent}%}`;
          }else if(params.name === '水田'){
            return params.name + '\n\n' + `{rich_blue|${params.percent}%}`;
          }
        },
      },
      labelLine: {
        length: 10,
        length2: 60,
      },
      itemStyle: {
        normal: {
          borderColor: '#fff',
          borderWidth: 2,
          color: function (params) {
            return colorList[params.dataIndex];
          },
        },
      },
      data: dataList,
    },
  ],
};
