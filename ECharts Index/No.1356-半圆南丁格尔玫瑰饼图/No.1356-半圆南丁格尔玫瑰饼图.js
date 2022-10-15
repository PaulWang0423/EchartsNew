let datas = [
  { value: 10453, name: 'rose 1', rate: '20%' },
  { value: 20444, name: 'rose 2', rate: '10%' },
  { value: 30646, name: 'rose 3', rate: '22%' },
  { value: 40643, name: 'rose 4', rate: '11%' },
  { value: 54240, name: 'rose 5', rate: '13%' },
];

let datap = [];
let colorList = ['#3399ff', '#85c285', '#ffc266', '#ff8585', '#c299ff'];
let color = colorList.splice(0, datas.length);
for (let i = 0; i < datas.length; i++) {
  datap.push({
    value: datas[i].value,
    name: 'rosetemp' + i,
  });
  color.push('#FFFFFF');
}
datap = datas.concat(datap);

option = {
  legend: {
    bottom: '25%',
    left: 'center',
    orient: 'vertical',
    data: datas,
    icon: 'circle',
    itemWith: 8,
    itemHeight: 8,
    itemGap: 10,
    // padding: [5, 10, 5, 0],
    formatter(name) {
      const item = datas.filter((item) => item.name === name)[0];
      return `{name|${name}}{value| ${parseInt(item.value).toLocaleString()}}${item.rate}`;
    },
    textStyle: {
      rich: {
        name: {
          color: '#595959',
          fontSize: 12,
          width: 150,
        },
        value: {
          color: '#595959',
          fontSize: 12,
          width: 120,
        },
      },
    },
  },
  title: {
    text: '渠道数',
    top: '47%',
    textAlign: 'center',
    left: '49.5%',
    textStyle: {
      color: '#262626',
      fontSize: 12,
      fontWeight: '400',
    },
  },
  color: color,
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [40, 200],
      center: ['50%', '50%'],
      roseType: 'radius',
      silent: true,
      startAngle: 180,
      legendHoverLink: false,
      itemStyle: {
        borderRadius: 0,
      },
      label: {
        show: false,
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      color: ['#f6f8fe', '#ffffff'],
      data: [
        { value: 10, name: 'r' },
        { value: 10, name: 'ro' },
      ],
    },
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [40, 190],
      center: ['50%', '50%'],
      roseType: 'radius',
      startAngle: 180,
      legendHoverLink: false,
      itemStyle: {
        borderRadius: 0,
        borderColor: '#fff',
        borderWidth: 1,
      },
      label: {
        show: true,
        position: 'inside',
        color: '#fff',
        formatter(params) {
          return params.data.rate;
        },
      },
      emphasis: {
        label: {
          show: true,
        },
      },
      data: datap,
    },
  ],
};
