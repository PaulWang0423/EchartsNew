let _img = [
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk1RTk5NEVENTE4NzExRUNBOUIzQjQ0MTdDMDI4NTc4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk1RTk5NEVFNTE4NzExRUNBOUIzQjQ0MTdDMDI4NTc4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTVFOTk0RUI1MTg3MTFFQ0E5QjNCNDQxN0MwMjg1NzgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTVFOTk0RUM1MTg3MTFFQ0E5QjNCNDQxN0MwMjg1NzgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4oDIaAAAAEQklEQVR42rxZaUhUURQeJ9N+tElUNkZampmNZlGBLZYa/cigKLAfFiKRRkhSP+pPG/SjjchWy4xo0YyK9oUWkjJaDcIpLcw0akyhRSsqK+3c8Tw4c3oz85b7OvDJvee9+9435517lmtQZ/UgmwSZBJgNSAaMAoShvg3wDHAfcAFw65+VTreuFwWZJDwSsBWQofF+QXgl4LFRwnYTZPMBLh1khaQCHgFWGX1psMF16wHrmK4GcBZQCXiFuijiLonk3k2AXoDVel9sxCWyAMeYbimgKMC6bEAxIIToloNLFFpJeAigkcxbAemAKo3r4wDXAYOJLh5I11jlwzvJuAM/d5WO9bWAyYB2ojtg1aYbir6oyBoMWXpFfKECr5DocoyxgvBCMv6CG8eo7AM0kXmOFYSnkPFpdAkzUsYSj3TCkWR8W0J2vEPGEeAWwTIJdwf0JvM3Egi/JWMRk/vKJNwpQqCEhEOlm5EvrfXG31jIKBIjgXA0GbdhTJfqwzSEpUsgnErGLyB5/JJN+AYZi4Knpwmy4r2ZZH7ViihxnIxFPbDNBOG1gD5kfsgKwh8Au8g8l2U+PfGcVnrl4A5NVhU/PQDNLMQJ0uc1rp+KrhVM6pH+QPijVcXPD8BMpjsH2A5w+FnXD7ARUMFC4iw9ZM20SPMAp5juG+Ai4B7gPcbucMB43KRh7P5cT6X2H3u6EWixcJ3rWjyW7WqVdPd0RjOWcIuJLFvpyXBzAAPxi1hq4SxsIBNscsTl8W2nu0w24dEA0XtNU7kmuoeHgKeIRjyHEJlrLB4FiPVJ6M+hKs+44unCne56GYSX+GgwxeY6ilGCO2ImRqBypg/HDZjN6mshPwGLgHSpmbC2WYWssOZc9OEiFbIlgBOYGUvYNRE9DgJScOM9INdCPd24y7HBqIVFS76Y6fJQ70/qsf8T8howLMD9Behu3s2u012gx8K7Gdlm9MNiDf4uToS+IvID3u1070D/bibaZb4srWZh7rN1uNne2awQJQ67HBEY12O8Dl+c7iP+CEfhZ6QteQJ2yVpFRIVkLPorArZTNHG4HKJVqmb9YzSNHtwlzrB5ik6yQi7jxjqssukCWVu8K80fJztLCklsrrfZdOBXUmSc7gKry5rU9xPB8gvUCG8h42vs3ECrxLJ5GPsBWknvwfCpSCGQtlPC81l5mGdwCw1X0cUZfFYOK08zKeEVzLoNJio4OYSd7uesj8xTCIuqaYKX+Y1LrIou3sTz9nt1Ky5HmCA8nSg/YSFik2hhM4QvYY1hw4OcGXYMXWrnXXplgA8LJ/qo0LS4xXf4e5No0uyYchW5a4Jwu59jLjMnnZX0x9tZ2Hli4sGfcSd3MBfLwNrYqNSRcaSy6RRptZmTk7aufyw2YIoVad3s0WwLDW+8p2uTUM7UYgHzR1J5RA9ZQuyY98XDSz2HcnJEFlmx8V4iN/HMvX8FGADmfgV8JoFAFgAAAABJRU5ErkJggg==',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI5RkU3OTdCNTE4NzExRUM4QjM4QUE2NTI1RDBFNTJDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI5RkU3OTdDNTE4NzExRUM4QjM4QUE2NTI1RDBFNTJDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjlGRTc5Nzk1MTg3MTFFQzhCMzhBQTY1MjVEMEU1MkMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjlGRTc5N0E1MTg3MTFFQzhCMzhBQTY1MjVEMEU1MkMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7dewfaAAAEeklEQVR42sxaeYiNURT/PsYuQnYyyC4hgyzZsteI7CREqFHIkKEsE0pZh6IQf0jRjCU0jcEYZF9KQpYRsj47Wcf4He883Y573/p9732nfr33nXfffb9z7vnOved8z662tcRyWYYDqcB74BlwE7gFPKEP386IfuIky33pDUwWul/AJeB49W3WQRhwI5qJS8WBvM/gtG7AUuA6DMgDhiTC8zWBjkBboBVQFygPjAVehzlHfwIMOInXxViJC26SrwOM4XjuDFSIYO4rQFWgmeazvsB5GLEKBix2OmwaAFlAEbAB6GUgTmLKBBlAc/b2dsO4DBhwAqjoFPl04C6QxmERSkqChBlJPjCdV2CLYRWuwoAasZAnb58B1gA6T7wAcoCFnBI7cez7DPPZ6gXC4wGQxqt4S4xtSVkJBpSLJuZ7AEc4RqXk8rIfBb7FetfDgEKQbIe3B9gJAWkCnAVSIvH8SPa4JH6J43UwkO0EccWA38AwvN0hPuoEw9aHS74PsF+jXwZ04Xh1TWDANLzsE+o5MCAlFPlkAzlKi8utOAkMoFR8W6j3hiKfq9HTzXTQir8MFddN4f1pJvKZQAtNyipMAHHyfpFmtTN15OsDS8RASn+nrAQKDKD77KO6u8P7qZL8KvG9m5zbvSDrxPVUlXw9YJJugEdkk9ixB9HRoZSB6Ak+QLkhX6MInXd4yVNUtOP2Duyw48X4FS56saJ6RIAHwyFPXj8GDFTU3ZL4YNRKUb50ObtsBFZH8gWDgW2ShDUWb/luSnVGrJJMMd9Gs0k5KZVdckJj8nwjoSxy+EeeA4+BYgfnJKc/JvK1RFXvc5h8Fsd5ieFmjDzutlk23cREvoqif0PzOUy+2Ol44ezztxgpo+i/Az89tDmRl2l3bcjcKDLmg7wvQP6TMrYGFx/vPcR/urjp09XAV4lWUgpkL3i9NF6+KKpnalgT+aeanoxXhAqj2momRMgUq+Qfii+keIh8e3F9R+bLAjFghIfI9xPXFyX5QnHS6y5yfyJltLgukOR/AIfEoJkeuFnHcfb7Vxwh3u/pCnDZJ0m34tO7DyYZ4nqzqW9DrY774jC1MoFen2j5W+YBoXS5y0SeZK74bIHl7+bGmzgdl3cK9RqEzI9g5KkneV5TDpaOM/9j4sjy0hQFsm8zQVxTh/h0HL1OHu8i1GPVjSkYeTrLzxY6Sp2H40Ccjs5ThHotiBeYvmMbHmVSk3OU0J2z/E/17jvMm9Lhbuv/1l4+iPcPVZGYNodszQpQ8z/NQeL00O22hviVUMSDkSeh/vx2oSvLldE5ze4XiaRyMtirOcVSf6ZrOJPYYTwBX2T93woMCO14OfyD14LUAdSr6QAMYKe0NozbCo/PCtcDdpiP73vSxEF+lOQD8MDyP5b/zDVrBa6CkkOcl14B80B8TyTLZ0fw3wPqcmVyNqriYH1LYbgcxCOu3uwo/jhRzfL3NqeGWIlgQimZHpxlgfSjaC23Y/zXBz0x6cMFTFsOEVsz7gkXEpf5WJsfaIXE8q+PPwIMAOR3DqftJGu5AAAAAElFTkSuQmCC',
];
var result = [
    {
        name: '劳动年龄残疾人',
        value: 135,
    },
    {
        name: '按比例就业',
        value: 246,
    },
    {
        name: '灵活就业',
        value: 357,
    },
];
let abljy = 0, // 按比例就业人数
    lhjy = 0; // 灵活就业人数
$.each(result, function (i, n) {
    if (n.name == '劳动年龄残疾人') {
        ldnl = n.value;
    }
    if (n.name == '按比例就业') {
        abljy = n.value;
    }
    if (n.name == '灵活就业') {
        lhjy = n.value;
    }
});

let sw = $('body').width();

option = {
    graphic: {
        elements: [
            {
                type: 'image',
                style: {
                    image: _img[0],
                    width: sw/7,
                    height: sw/7,
                },
                left: sw/2.3,
                top: sw/5,
            },
        ],
    },
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(50,50,50,0.5)',
        extraCssText: 'box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.75);',
        textStyle: {
            color: '#c4c4c4',
            fontSize: 10,
            fontFamily: 'verdana, sans-serif',
        },
        padding: [3, 4],
        formatter: function (params) {
            var res =
                '<div style="text-align:left">' +
                params.marker +
                params.name +
                '<br>' +
                '人数：' +
                params.value +
                '人' +
                '<br>' +
                '占比：' +
                params.percent +
                '%</div>';
            return res;
        },
    },
    title: {
        text: '',
        left: sw/2.1,
        top: sw/2.5,
        textStyle: {
            color: '#333',
            fontSize: 14,
            fontFamily: 'verdana',
        },
    },
    legend: {
        orient: 'vertical',
        top: 'center',
        right: 0,
        itemWidth: 12,
        itemHeight: 12,
        itemGap: 10,
        data: ['按比例就业', '灵活就业'],
        textStyle: {
            fontSize: 12,
            color: '#333',
        },
    },
    series: [
        {
            type: 'pie',
            startAngle: 360,
            radius: ['72%', '85%'],
            avoidLabelOverlap: false,
            emphasis: {
                scale: true,
                scaleSize: -3,
                label: {
                    show: false,
                },
                itemStyle: {
                    shadowColor: 'rgba(0, 13, 37, 0.3)',
                    shadowBlur: 3,
                },
            },
            label: {
                show: false,
            },
            labelLayout: function (params) {
                return {
                    x: sw/1.2,
                    y: '10%',
                    verticalAlign: 'middle',
                    align: 'left',
                };
            },
            labelLine: {
                show: false,
                length: 3,
                length2: 0,
            },
            data: [
                { name: '按比例就业', value: abljy, itemStyle: { color: '#1299F7' } },
                { name: '灵活就业', value: lhjy, itemStyle: { color: '#F5D41C' } },
            ],
        },
    ],
};

let currentIndex = 0;
let dataLen = option.series[0].data.length;

setInterval(function () {
    let _text = option.series[0].data[currentIndex].value + '人';
    myChart.setOption({
        graphic: {
            elements: [
                {
                    style: {
                        image: _img[currentIndex],
                    },
                },
            ],
        },
        title: {
            text: _text,
        },
        series: [
            {
                label: {
                    show: true,
                    formatter: '{d}%',
                    color: '#333',
                    fontSize: 12,
                    fontFamily: 'verdana',
                },
            },
        ],
    });
    // 取消高亮指定的数据图形
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: currentIndex,
    });
    currentIndex = (currentIndex + 1) % dataLen;
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: currentIndex,
    });
}, 2000);
