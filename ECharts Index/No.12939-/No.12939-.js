app.title = '堆叠条形图';

var sexIcon = {
    'male': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODkzRDIwQTE0MTIxMTFFODkyOTU4RUU5NzM3MjE3MDMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODkzRDIwQTA0MTIxMTFFODkyOTU4RUU5NzM3MjE3MDMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTQ4MERFMjNCRDNDMTFFNzgyQTFFRkM1MDA3MjdBRTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTQ4MERFMjRCRDNDMTFFNzgyQTFFRkM1MDA3MjdBRTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4iuAMWAAABl0lEQVR42uzWTSgEYRzH8ZmJcPDOkRMXG1cl5SInJ1e5aEtuLhwoNy5K0mpzWCXJyQEH5eDEwUVecuKCKEJ5qU2L8R2e1fT0zLM7O3NR869P284zz69nnmeemTFt2zac6kz+/kpVjG6MoB0ZbGMWJ/jKnrg3bP78WoZ3OW2DWEcPKlGHAWyiC6aqk1fFMI4yRVsDJlDrJ7AXjZp2Z4RtfgLrDX0VocJP4H2OwE+8+Ancwa2mfR9nfgIPMYMnxchuMI071TzoKoFHxMXKOjfrERaw6zWxuvrACjZQLW5kZ27fdSslT0ETyqXjGdeuqHH1e8WFe8e4A0vQL7ZZs2oXSOVc/jnmsJodtTuwDynDX7WKPmmsyas8ahReY6rbpiVAYEwVaBkhlCVNcqFlhzoqI+zLjAL/ygyQY4Z9H1qqkKsAgdeqwESAwHnV4yslnnVD4oWeTz1gEUuqwGdMYQtV4tgkOjzCklgWnyRprye203Dg+h/XjO5YOjevldW9c0qjrRcF/tdA029brsBT8aEke8OlqsO3AAMAxyBOvxLL2/sAAAAASUVORK5CYII=',
    'female': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAdCAYAAACaCl3kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTgxQUVBQkE0MTIwMTFFODlBRjc4REM5QkNCNEQ3NkEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTgxQUVBQjk0MTIwMTFFODlBRjc4REM5QkNCNEQ3NkEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTQ4MERFMjNCRDNDMTFFNzgyQTFFRkM1MDA3MjdBRTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTQ4MERFMjRCRDNDMTFFNzgyQTFFRkM1MDA3MjdBRTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Op4glAAABOUlEQVR42mL8//8/Awj8zY1lgAJ2IG4C4lQg/gbEy4C4Foh/giSZJy8GK2JhwAQzgDgByhYE4lIgFgXiRGRFTGiaQArjsBgWC5XDqVEcixjYhVA5nBrvA/F7LBrfQeVwagQFQDEorJDEQOwSWODAALbAmQ/EN5ACaAEQH0dXxPgnJ4aBHIAtILYB8X80vJWQRiEgdsFimCtUDqfGACBmxaKRFSqHU2M4Hm+F49IoAsROeDQ6QdVgaAzEET3IUReITWMYEbEQhq5RDIgdidDoCFUL1xgETciEADNULVxjGAmJJgymUQKI7UjQaA/SA9JoRaQzkcPFCkScQs8yBABI7SmQxidQDz8gQtMDqNonTEg5QhGUzYC4A4uGDqicIlQtAwusuEMrIrHHBZJaJgYywRDX+IkYMYAAAwB6sjfXWpdRXAAAAABJRU5ErkJggg=='
};

option = {
    tooltip : {
        trigger: 'item',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        backgroundColor: 'rgba(255,255,255,0.7)',
        padding: [5, 10],
        textStyle: {
            color: '#444'
        },
        formatter: '{b}:{c}'
    },
    color: ['#45A1FF', '#F04864'],
    xAxis: [{
        type: 'value',
        show: false
    }],
    yAxis: [{
        type: 'category',
        show: false,
        data: ['性别比例']
    }],
    series: [{
            type: 'bar',
            stack: '性别比例',
            barWidth: 10,
            label: {
                normal: {
                    show: true,
                    position: 'left',
                }
            },
            data: [{
                name: '男',
                value: '155',
                label: {
                    position: 'left',
                    normal: {
                        formatter: [
                            '{Male|   }' + '\n\n' + '男' 
                        ].join('\n'),
                        rich: {
                            Male: {
                                height: 40,
                                align: 'center',
                                backgroundColor: {
                                    image: sexIcon.male
                                }
                            }
                        }
                    }
                }
            }]
        },
        {
            type: 'bar',
            stack: '性别比例',
            barWidth: 10,
            label: {
                normal: {
                    show: true,
                    position: 'right'
                }
            },
            data: [{
                name: '女',
                value: '45',
                label: {
                    normal: {
                        formatter: [
                            '{Female|}' + '\n\n' + '女'
                        ].join('\n'),
                        rich: {
                            Female: {
                                height: 40,
                                align: 'center',
                                backgroundColor: {
                                    image: sexIcon.female
                                }
                            }
                        }
                    }
                }
            }]
        }
    ]
};