option = {
  grid: { left: '20%', top: '10%', right: '20%' },
  tooltip: { trigger: 'item', textStyle: { fontSize: 12 }, formatter: '{b0}:{c0}' },
  xAxis: {
    max: 100,
    splitLine: { show: false },
    axisLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
  },
  yAxis: [
    {
      type: 'category',
      inverse: false,
      data: ['2020年', '2019年', '2018年'],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { margin: -4, textStyle: { color: '#fff', fontSize: 16.25 } },
    },
  ],
  series: [
    {
      type: 'pictorialBar',
      symbol:
        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAcCAYAAACK7SRjAAAB2UlEQVRIibXUvWsUURjF4efOiIi6REVEMEbxoxUiiIJWYoqgYEAFU+QPEAttrLO7tRgknZ0iFmIjLKhoLaRQRAgo2Igi+AF+jKbQbGKxie7s7kx2dPdUd95z58e5l/e9YXFxUZ7iarIaFYwKdmEOTwVX8eDPxtD009I65MHjajKGKezMANzERGF4XEmGBK9TxQ4A3MGZTl6UGZuHOV6zTuNsJ6Nj8riSHEctlaYpUduat4LtrV5W8rH8sG0axI7WYhZ8oCActnQLf/cP8A/dwm8XBL+kpbOy4PXJ0mPMFIBf6FTMa8WTqHcBvqx5UruB1ydL73EAr3LA13Apy8wd/2XF1WQvRgR78AMzglqa1L7OG/81giMaPfwRC4L1mMd3wWaNkz/DbCf4qgzwOK5g64rHaugeTmChudh253ElOYdbBcAwqtFdQ83F1LXE5eSiYOqv24LIfluWv79gm2AuBY/LyX486QKwkvdIMEL6Wq7rjY7hFEvJ43IygRsF0q3kzWFgOfnk/8Zt0VqMR3E5GcbuHsPhaISDfQDDxgib+gQvRXjRJ/h8hBre9AFei+rl0k8M426PoF9xHtOt439IcBj7MCjYgHVobEr3coRf+Ixvglk8x33BJ/gNiop2KgneFNMAAAAASUVORK5CYII=',
      symbolRepeat: 'fixed',
      symbolMargin: '100%',
      symbolClip: true,
      symbolSize: 22.5,
      symbolPosition: 'start',
      symbolOffset: [20, 0],
      symbolBoundingData: 100,
      data: [35.62, 15, 10],
      label: {
        normal: { show: true, textStyle: { color: '#18fcff', fontSize: 14 }, position: 'right', offset: [-10, 0] },
      },
      z: 10,
    },
    {
      type: 'pictorialBar',
      symbol:
        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAcCAYAAACK7SRjAAABYElEQVRIibWVW0/CMBiGn3XAWBANEHtr//+fsreOSIJBZQ6HFy0Ex3qa+CZNlx6er6fvXfb0/EJAGTAHCmAEHIEG2Gkla99EEQBPAQncAWMbSNhAK6WrxVB4Dixt7VLpC+CDr3yr6gQoU+BTzPnG6j4VnqJc6erq+FzwLBHey3LB2wHwqzku+Gci+KCV/I6Ff9kSq21fo+8pbiLBzkz1wVtgDRw8Yz60km+uztBbboDKjisw2XoEGq3kPjCXzGNcGTCxwNZCha1P39hAvbtzrbwEHggbGwBKVzXwqpX81d43eQYsYsFWBfDYzdIuYIZZ8RCNbYBzdotO51DwJW/ZB/caf4IKpavpJbwkzWJDWihdneHzG4LBPONSYM76lqs+qRCYRPkPCcGwH0OMMoHfmP4kAdTAldHfQPuTEa2BoMtFqgW2Wsn30UXDBnO5E8zryTE7C91Ja8sBY9G1VrIF+AGillLtT7urUAAAAABJRU5ErkJggg==',
      symbolRepeat: 'fixed',
      symbolMargin: '100%',
      symbolClip: true,
      symbolSize: 22.5,
      symbolPosition: 'start',
      symbolOffset: [20, 0],
      symbolBoundingData: 100,
      data: [100, 100, 100],
      z: 10,
    },
  ],
};
