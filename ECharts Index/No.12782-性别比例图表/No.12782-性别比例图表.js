var sexIcon = {
    'male': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODkzRDIwQTE0MTIxMTFFODkyOTU4RUU5NzM3MjE3MDMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODkzRDIwQTA0MTIxMTFFODkyOTU4RUU5NzM3MjE3MDMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTQ4MERFMjNCRDNDMTFFNzgyQTFFRkM1MDA3MjdBRTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTQ4MERFMjRCRDNDMTFFNzgyQTFFRkM1MDA3MjdBRTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4iuAMWAAABl0lEQVR42uzWTSgEYRzH8ZmJcPDOkRMXG1cl5SInJ1e5aEtuLhwoNy5K0mpzWCXJyQEH5eDEwUVecuKCKEJ5qU2L8R2e1fT0zLM7O3NR869P284zz69nnmeemTFt2zac6kz+/kpVjG6MoB0ZbGMWJ/jKnrg3bP78WoZ3OW2DWEcPKlGHAWyiC6aqk1fFMI4yRVsDJlDrJ7AXjZp2Z4RtfgLrDX0VocJP4H2OwE+8+Ancwa2mfR9nfgIPMYMnxchuMI071TzoKoFHxMXKOjfrERaw6zWxuvrACjZQLW5kZ27fdSslT0ETyqXjGdeuqHH1e8WFe8e4A0vQL7ZZs2oXSOVc/jnmsJodtTuwDynDX7WKPmmsyas8ahReY6rbpiVAYEwVaBkhlCVNcqFlhzoqI+zLjAL/ygyQY4Z9H1qqkKsAgdeqwESAwHnV4yslnnVD4oWeTz1gEUuqwGdMYQtV4tgkOjzCklgWnyRprye203Dg+h/XjO5YOjevldW9c0qjrRcF/tdA029brsBT8aEke8OlqsO3AAMAxyBOvxLL2/sAAAAASUVORK5CYII=',
    'female': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAdCAYAAACaCl3kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTgxQUVBQkE0MTIwMTFFODlBRjc4REM5QkNCNEQ3NkEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTgxQUVBQjk0MTIwMTFFODlBRjc4REM5QkNCNEQ3NkEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTQ4MERFMjNCRDNDMTFFNzgyQTFFRkM1MDA3MjdBRTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTQ4MERFMjRCRDNDMTFFNzgyQTFFRkM1MDA3MjdBRTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Op4glAAABOUlEQVR42mL8//8/Awj8zY1lgAJ2IG4C4lQg/gbEy4C4Foh/giSZJy8GK2JhwAQzgDgByhYE4lIgFgXiRGRFTGiaQArjsBgWC5XDqVEcixjYhVA5nBrvA/F7LBrfQeVwagQFQDEorJDEQOwSWODAALbAmQ/EN5ACaAEQH0dXxPgnJ4aBHIAtILYB8X80vJWQRiEgdsFimCtUDqfGACBmxaKRFSqHU2M4Hm+F49IoAsROeDQ6QdVgaAzEET3IUReITWMYEbEQhq5RDIgdidDoCFUL1xgETciEADNULVxjGAmJJgymUQKI7UjQaA/SA9JoRaQzkcPFCkScQs8yBABI7SmQxidQDz8gQtMDqNonTEg5QhGUzYC4A4uGDqicIlQtAwusuEMrIrHHBZJaJgYywRDX+IkYMYAAAwB6sjfXWpdRXAAAAABJRU5ErkJggg==',
    'question': 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTQzOTA2MzM0NzEzIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE5MjMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMS40NjA3MTggNjUuMDk5NjdjLTI0Ny40MTcwMTkgMC00NDcuOTIxNTg5IDIwMC41MDQ1Ny00NDcuOTIxNTkgNDQ3LjkyMTU5czIwMC41MDQ1NyA0NDcuOTIxNTg5IDQ0Ny45MjE1OSA0NDcuOTIxNTg5IDQ0Ny45MjE1ODktMjAwLjUwNDU3IDQ0Ny45MjE1ODktNDQ3LjkyMTU4OS0yMDAuNTA0NTctNDQ3LjkyMTU4OS00NDcuOTIxNTg5LTQ0Ny45MjE1OXpNNzU5Ljk4MjkwOCA3NjEuNTQzNDVjLTMyLjM0NTY4NiAzMi4zNDU2ODYtNjkuOTE1MzQ5IDU3LjY2MDIzNC0xMTEuODA0Mzg5IDc1LjMzOTg5NS00My4yOTUwNjIgMTguMjgyMzg5LTg5LjMwMjkwOSAyNy42MjQxNTEtMTM2LjgxNzA2MiAyNy42MjQxNTFzLTkzLjUyMi05LjI0MTQ3OC0xMzYuODE3MDYyLTI3LjYyNDE1MWMtNDEuODg5MDM5LTE3LjY3OTY2MS03OS40NTg3MDMtNDMuMDk0NDk0LTExMS44MDQzODktNzUuMzM5ODk1LTMyLjM0NTY4Ni0zMi4zNDU2ODYtNTcuNjYwMjM0LTY5LjkxNTM0OS03NS4zMzk4OTUtMTExLjgwNDM4OS0xOC4yODIzODktNDMuMjk1MDYyLTI3LjYyNDE1MS04OS4zMDI5MDktMjcuNjI0MTUxLTEzNi44MTcwNjJzOS4yNDE0NzgtOTMuNTIyIDI3LjYyNDE1MS0xMzYuODE3MDYyYzE3LjY3OTY2MS00MS44ODkwMzkgNDMuMDk0NDk0LTc5LjQ1ODcwMyA3NS4zMzk4OTUtMTExLjgwNDM4OSAzMi4zNDU2ODYtMzIuMzQ1Njg2IDY5LjkxNTM0OS01Ny42NjAyMzQgMTExLjgwNDM4OS03NS4zMzk4OTUgNDMuMjk1MDYyLTE4LjI4MjM4OSA4OS4zMDI5MDktMjcuNjI1MTc0IDEzNi44MTcwNjItMjcuNjI1MTc0czkzLjUyMiA5LjI0MTQ3OCAxMzYuODE3MDYyIDI3LjYyNTE3NGM0MS44ODkwMzkgMTcuNjc5NjYxIDc5LjQ1ODcwMyA0My4wOTQ0OTQgMTExLjgwNDM4OSA3NS4zMzk4OTUgMzIuMzQ1Njg2IDMyLjM0NTY4NiA1Ny42NjAyMzQgNjkuOTE1MzQ5IDc1LjMzOTg5NSAxMTEuODA0Mzg5IDE4LjI4MjM4OSA0My4yOTUwNjIgMjcuNjI0MTUxIDg5LjMwMjkwOSAyNy42MjQxNTEgMTM2LjgxNzA2MnMtOS4yNDE0NzggOTMuNTIyLTI3LjYyNDE1MSAxMzYuODE3MDYyYy0xNy42Nzk2NjEgNDEuODg5MDM5LTQyLjk5NDIxIDc5LjU1ODk4Ny03NS4zMzk4OTUgMTExLjgwNDM4OXoiIHAtaWQ9IjE5MjQiPjwvcGF0aD48cGF0aCBkPSJNNDQ1LjU2Mzg5MiA2NjYuNzE1NzExaDk0LjAyNDQ0M3Y5Ni4zMzUwNjloLTk0LjAyNDQ0M3YtOTYuMzM1MDY5eiBtNTYuNDU0Nzc5LTQxMS4zNTY4MTJjLTk3LjEzODM2NCAwLTE1My41OTMxNDQgNTIuNTM3NTY0LTE2OS4yNjQwNTUgMTU3LjUxMDM2aDg2Ljk5MjI4NGMxMC45NDkzNzYtNjIuNjgyNjIxIDM5LjE3NzI3OC05NC44Mjc3MzkgODQuNTgxMzczLTk2LjMzNTA2OSA0Mi4yOTExOTkgMy4xMTM5MjEgNjQuMTg5OTUxIDI3LjQyMzU4MyA2NS43OTY1NDIgNzIuODI4NzAyIDEuNTA3MzMgMjkuODM0NDkyLTE4Ljc4NDgzMiA2MS4wNzYwMy02MS4wNzYwMyA5NC4wMjQ0NDMtNDMuODk3Nzg5IDMxLjM0MTgyMi02NC4yOTAyMzUgNjkuMDExNzctNjEuMDc2MDMxIDExMi44MDkyNzZ2MjUuODE2OTkyaDg2Ljk5MjI4NHYtMTguNzg0ODMyYy0xLjYwNzYxNC0zMi45NDg0MTMgMTQuMDYzMjk3LTYxLjg3OTMyNiA0Ny4wMTE3MS04Ni45OTIyODMgNTYuNDU0NzgtMzkuMTc2MjU0IDgzLjA3NTA2Ny04My4wNzUwNjcgNzkuOTYxMTQ2LTEzMS41OTQxMDgtNC44MTk3NzItODMuMDc1MDY3LTU4LjE2MDYzMS0xMjYuMTY5NTYxLTE1OS45MTkyMjMtMTI5LjI4MzQ4MXoiIHAtaWQ9IjE5MjUiPjwvcGF0aD48L3N2Zz4='
};
var data = [131,113,114]
let count = data[0]+data[1]+data[2]
option = {
    xAxis: [{
        type: 'value',
        show: false,
        max: count  // 居中显示
    }],
    yAxis: [{
        type: 'category',
        show: false,
        data: ['性别比例']
    }],
    color: ['#618cff', '#ffa57c', '#8f949a'],
    series: [{
            name: '男',
            type: 'bar',
            stack: '性别比例',
            barWidth: 10,
            label: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                barBorderRadius: 10
            },
            data: [{
                value: data[0],
                label: {
                    normal: {
                        offset: [0, -20],
                        formatter: [
                            '{male|}',
                            '{b|男}',
                            '{c|'+ data[0] +'人}'
                        ].join('\n'),
                        rich: {
                            male: {
                                height: 40,
                                align: 'center',
                                backgroundColor: {
                                    image: sexIcon.male
                                }
                            },
                            b: {
                                fontSize: 18,
                                fontWeight: 100,
                                align: 'center',
                                padding: [40, 0, 10, 0]
                            },
                            c: {
                                fontSize: 18,
                                fontWeight: 100,
                                align: 'center'
                            }
                        }
                    }
                }
            }]
        },
        {   
            name: '女',
            type: 'bar',
            stack: '性别比例',
            barWidth: 10,
            label: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                barBorderRadius: 10
            },
            data: [{
                value: data[1],
                label: {
                    normal: {
                        offset: [0, -20],
                        formatter: [
                            '{Female|}',
                            '{b|女}',
                            '{c|'+ data[1] +'人}'
                        ].join('\n'),
                        rich: {
                            Female: {
                                height: 40,
                                align: 'center',
                                backgroundColor: {
                                    image: sexIcon.female
                                }
                            },
                            b: {
                                fontSize: 18,
                                fontWeight: 100,
                                align: 'center',
                                padding: [40, 0, 10, 0]
                            },
                            c: {
                                fontSize: 18,
                                fontWeight: 100,
                                align: 'center'
                            }
                        }
                    }
                }
            }]
        },
        {
            name: '未知',
            type: 'bar',
            stack: '性别比例',
            barWidth: 10,
            label: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                barBorderRadius: 10
            },
            data: [{
                value: data[2],
                label: {
                    normal: {
                        offset: [0, -20],
                        formatter: [
                            '{Female|}',
                            '{b|未知}',
                            '{c|'+ data[2] +'人}'
                        ].join('\n'),
                        rich: {
                            Female: {
                                height: 40,
                                align: 'center',
                                backgroundColor: {
                                    image: sexIcon.question
                                }
                            },
                            b: {
                                fontSize: 18,
                                fontWeight: 100,
                                align: 'center',
                                padding: [40, 0, 10, 0]
                            },
                            c: {
                                fontSize: 18,
                                fontWeight: 100,
                                align: 'center'
                            }
                        }
                    }
                }
            }]
        }
    ]
}