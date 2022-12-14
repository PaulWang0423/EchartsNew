app.title = '单轴散点图';

var hours = ['0-1时', '1-2时', '2-3时', '3-4时', '4-5时', '5-6时', '6-7时',
        '7-8时', '8-9时', '9-10时','10-11时','11-12时',
        '12-13时', '13-14时', '14-15时', '15-16时', '16-17时', '17-18时',
        '18-19时', '19-20时', '20-21时', '21-22时', '22-23时', '23-24时'];
var days = ['1月', '2月', '3月', '4月', '5月', '6月', 
            '7月', '8月', '9月', '10月', '11月', '12月'];

var data = [[0, 0, 232],
 [0, 1, 195],
 [0, 2, 141],
 [0, 3, 120],
 [0, 4, 145],
 [0, 5, 287],
 [0, 6, 640],
 [0, 7, 508],
 [0, 8, 342],
 [0, 9, 378],
 [0, 10, 392],
 [0, 11, 373],
 [0, 12, 399],
 [0, 13, 474],
 [0, 14, 542],
 [0, 15, 514],
 [0, 16, 497],
 [0, 17, 583],
 [0, 18, 630],
 [0, 19, 997],
 [0, 20, 774],
 [0, 21, 544],
 [0, 22, 484],
 [0, 23, 316],
 [1, 0, 190],
 [1, 1, 159],
 [1, 2, 111],
 [1, 3, 113],
 [1, 4, 107],
 [1, 5, 187],
 [1, 6, 375],
 [1, 7, 293],
 [1, 8, 256],
 [1, 9, 285],
 [1, 10, 319],
 [1, 11, 272],
 [1, 12, 276],
 [1, 13, 356],
 [1, 14, 466],
 [1, 15, 420],
 [1, 16, 447],
 [1, 17, 369],
 [1, 18, 415],
 [1, 19, 723],
 [1, 20, 822],
 [1, 21, 551],
 [1, 22, 384],
 [1, 23, 250],
 [2, 0, 219],
 [2, 1, 197],
 [2, 2, 184],
 [2, 3, 167],
 [2, 4, 190],
 [2, 5, 430],
 [2, 6, 434],
 [2, 7, 476],
 [2, 8, 358],
 [2, 9, 418],
 [2, 10, 429],
 [2, 11, 381],
 [2, 12, 364],
 [2, 13, 444],
 [2, 14, 481],
 [2, 15, 456],
 [2, 16, 424],
 [2, 17, 379],
 [2, 18, 406],
 [2, 19, 633],
 [2, 20, 936],
 [2, 21, 609],
 [2, 22, 455],
 [2, 23, 367],
 [3, 0, 246],
 [3, 1, 185],
 [3, 2, 184],
 [3, 3, 194],
 [3, 4, 246],
 [3, 5, 396],
 [3, 6, 429],
 [3, 7, 474],
 [3, 8, 417],
 [3, 9, 436],
 [3, 10, 389],
 [3, 11, 395],
 [3, 12, 402],
 [3, 13, 489],
 [3, 14, 501],
 [3, 15, 470],
 [3, 16, 440],
 [3, 17, 399],
 [3, 18, 439],
 [3, 19, 455],
 [3, 20, 806],
 [3, 21, 639],
 [3, 22, 515],
 [3, 23, 388],
 [4, 0, 270],
 [4, 1, 240],
 [4, 2, 202],
 [4, 3, 269],
 [4, 4, 418],
 [4, 5, 420],
 [4, 6, 434],
 [4, 7, 500],
 [4, 8, 444],
 [4, 9, 441],
 [4, 10, 424],
 [4, 11, 443],
 [4, 12, 406],
 [4, 13, 482],
 [4, 14, 489],
 [4, 15, 486],
 [4, 16, 455],
 [4, 17, 390],
 [4, 18, 435],
 [4, 19, 393],
 [4, 20, 634],
 [4, 21, 724],
 [4, 22, 568],
 [4, 23, 428],
 [5, 0, 259],
 [5, 1, 218],
 [5, 2, 197],
 [5, 3, 229],
 [5, 4, 394],
 [5, 5, 415],
 [5, 6, 422],
 [5, 7, 482],
 [5, 8, 459],
 [5, 9, 392],
 [5, 10, 431],
 [5, 11, 374],
 [5, 12, 342],
 [5, 13, 442],
 [5, 14, 472],
 [5, 15, 478],
 [5, 16, 425],
 [5, 17, 375],
 [5, 18, 403],
 [5, 19, 330],
 [5, 20, 377],
 [5, 21, 712],
 [5, 22, 521],
 [5, 23, 426],
 [6, 0, 272],
 [6, 1, 228],
 [6, 2, 217],
 [6, 3, 264],
 [6, 4, 433],
 [6, 5, 450],
 [6, 6, 452],
 [6, 7, 510],
 [6, 8, 495],
 [6, 9, 484],
 [6, 10, 428],
 [6, 11, 466],
 [6, 12, 399],
 [6, 13, 458],
 [6, 14, 504],
 [6, 15, 451],
 [6, 16, 470],
 [6, 17, 403],
 [6, 18, 433],
 [6, 19, 363],
 [6, 20, 410],
 [6, 21, 639],
 [6, 22, 492],
 [6, 23, 398],
 [7, 0, 255],
 [7, 1, 206],
 [7, 2, 215],
 [7, 3, 247],
 [7, 4, 411],
 [7, 5, 616],
 [7, 6, 470],
 [7, 7, 488],
 [7, 8, 484],
 [7, 9, 484],
 [7, 10, 455],
 [7, 11, 448],
 [7, 12, 429],
 [7, 13, 419],
 [7, 14, 485],
 [7, 15, 488],
 [7, 16, 414],
 [7, 17, 386],
 [7, 18, 404],
 [7, 19, 425],
 [7, 20, 707],
 [7, 21, 654],
 [7, 22, 446],
 [7, 23, 369],
 [8, 0, 220],
 [8, 1, 173],
 [8, 2, 178],
 [8, 3, 206],
 [8, 4, 391],
 [8, 5, 664],
 [8, 6, 534],
 [8, 7, 464],
 [8, 8, 451],
 [8, 9, 478],
 [8, 10, 448],
 [8, 11, 413],
 [8, 12, 353],
 [8, 13, 508],
 [8, 14, 508],
 [8, 15, 473],
 [8, 16, 444],
 [8, 17, 427],
 [8, 18, 448],
 [8, 19, 790],
 [8, 20, 843],
 [8, 21, 568],
 [8, 22, 386],
 [8, 23, 313],
 [9, 0, 197],
 [9, 1, 189],
 [9, 2, 178],
 [9, 3, 176],
 [9, 4, 284],
 [9, 5, 674],
 [9, 6, 591],
 [9, 7, 465],
 [9, 8, 467],
 [9, 9, 409],
 [9, 10, 429],
 [9, 11, 395],
 [9, 12, 428],
 [9, 13, 460],
 [9, 14, 526],
 [9, 15, 493],
 [9, 16, 497],
 [9, 17, 670],
 [9, 18, 699],
 [9, 19, 1256],
 [9, 20, 828],
 [9, 21, 623],
 [9, 22, 370],
 [9, 23, 294],
 [10, 0, 198],
 [10, 1, 153],
 [10, 2, 150],
 [10, 3, 129],
 [10, 4, 196],
 [10, 5, 521],
 [10, 6, 762],
 [10, 7, 528],
 [10, 8, 384],
 [10, 9, 414],
 [10, 10, 446],
 [10, 11, 382],
 [10, 12, 372],
 [10, 13, 457],
 [10, 14, 472],
 [10, 15, 492],
 [10, 16, 492],
 [10, 17, 1006],
 [10, 18, 1038],
 [10, 19, 1127],
 [10, 20, 693],
 [10, 21, 498],
 [10, 22, 384],
 [10, 23, 267],
 [11, 0, 211],
 [11, 1, 164],
 [11, 2, 127],
 [11, 3, 125],
 [11, 4, 146],
 [11, 5, 332],
 [11, 6, 801],
 [11, 7, 486],
 [11, 8, 376],
 [11, 9, 403],
 [11, 10, 378],
 [11, 11, 358],
 [11, 12, 352],
 [11, 13, 439],
 [11, 14, 463],
 [11, 15, 463],
 [11, 16, 470],
 [11, 17, 878],
 [11, 18, 913],
 [11, 19, 1037],
 [11, 20, 650],
 [11, 21, 501],
 [11, 22, 357],
 [11, 23, 291]];

option = {
    tooltip: {
        position: 'top'
    },
    title: [],
    singleAxis: [],
    series: []
};

echarts.util.each(days, function (day, idx) {
    option.title.push({
        textBaseline: 'middle',
        top: (idx + 0.5) * 100 /12 + '%',
        text: day
    });
    option.singleAxis.push({
        left: 150,
        type: 'category',
        boundaryGap: false,
        data: hours,
        top: (idx * 100 / 7 + 5) + '%',
        height: (100 / 7 - 10) + '%',
        axisLabel: {
            interval:1
        }
    });
    option.series.push({
        singleAxisIndex: idx,
        coordinateSystem: 'singleAxis',
        type: 'scatter',
        data: [],
        symbolSize: function (dataItem) {
            return dataItem[1] * 4;
        }
    });
});

echarts.util.each(data, function (dataItem) {
    option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]/100]);
});