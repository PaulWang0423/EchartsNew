const backgroundColor = '#101736';
const color = ['#EAEA26', '#906BF9', '#FE5656', '#01E17E', '#3DD1F9', '#FFAD05']; //2个以上的series就需要用到color数组
const title = {
  text: '销售来源',
  textStyle: {
    color: '#fff',
    fontSize: 16,
  },
  padding: 0,
  top: 35,
  left: 25,
};
const legend = {
  //data，就是取得每个series里面的name属性。
  orient: 'horizontal',
  icon: 'circle', //图例形状
  padding: 0,
  top: 35,
  right: 40,
  itemWidth: 14, //小圆点宽度
  itemHeight: 14, // 小圆点高度
  itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
  textStyle: {
    fontSize: 14,
    color: '#ffffff',
  },
};
const tooltip = {
  show: true,
  trigger: 'axis',
  axisPointer: {
    type: 'shadow',
  },
};
let seriesData = [
  { name: '电子邮箱', data: [120, 132, 101, 134, 90, 230, 210] },
  { name: '联盟广告', data: [220, 182, 191, 234, 290, 330, 310] },
  { name: '视频广告', data: [150, 232, 201, 154, 190, 330, 410] },
  { name: '直播', data: [320, 332, 301, 334, 390, 330, 320] },
];
const commonConfigFn = (index) => {
  return {
    type: 'line',
    smooth: true,
    symbol: 'emptyCircle', //空心小圆点。线条小圆点形状
    symbolSize: 6, //小圆点大小
    itemStyle: {
      //还是小圆点设置
    },

    label: {
      show: false, //不显示小圆点上的label文字
    },
    lineStyle: {
      width: 1, //线条设置
     
    },

    areaStyle: {
      //填充线条下面的面积区域颜色。（areaStyle只是锦上添花）
      opacity: 0.2,
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: color[index], // 上处的颜色
          },
          {
            offset: 1,
            color: 'transparent', // 下处的颜色
          },
        ],
        global: false, // 缺省为 false
      },
    },
  };
};

seriesData = seriesData.map((item, index) => ({ ...item, ...commonConfigFn(index) }));
option = {
  backgroundColor,
  color,
  title,
  tooltip,
  legend,
  grid: {
    top: '20%',
    left: '3%',
    right: '4%',
    bottom: '5%',
    containLabel: true,
  },

  xAxis: {
    show: true, //显示x轴+x轴label文字
    type: 'category',
    boundaryGap: false, //从Y轴出发，这个false很好的
    axisLine: {
      show: true, //显示x坐标轴轴线
      lineStyle: {
        color: 'rgba(255,255,255,.4)',
      },
    },
    axisTick: {
      show: false, //不显示x坐标1cm刻度
    },
    axisLabel: {
      color: '#ffffff', //x轴label文字颜色
    },
    splitLine: {
      show: false, //不显示grid竖向分割线
    },

    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      color: '#ffffff',
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(255,255,255,.4)',
      },
    },
    splitLine: {
      show: false, //不显示grid水平分割线
    },
  },

  series: seriesData,
};
