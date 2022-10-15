option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                type: "dashed",
                width: 2,
                color: "#45a6e4"
            },
            snap: true,
            label: {
                backgroundColor: '#004768'
            }
        }
    },
    legend: [{
        color: "#3baff8",
        left: 500,
        textStyle: {
            fontSize: 23,
            fontFamily: "Noto Sans CJK SC",
            color: "#57c1e0",
        },
        data: [{
            name: "应收水费",
            // icon: "rect",
        }, {
            name: "实收水费",
            //icon: "line",
        }],
        itemWidth: 13,
        itemHeight: 13

    }, ],
    xAxis: [{
        type: 'category',
        color: "#57c1e0",
        boundaryGap: true,
        nameTextStyle: {
            fontSize: 22,
            fontFamily: "Noto Sans CJK SC",
            color: "#57c1e0",
            padding: [30, 0, 0, 0]
        },
        axisLabel: {
            color: "#57c1e0",
            fontSize: 22,
            fontFamily: "Noto Sans CJK SC",
            margin: 35
        },
        axisTick: {
            color: "#1a678e",
            width: 2,
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                width: 2,
                color: "#2979a1",
            }
        },
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    }],
    yAxis: [{
        type: 'value',
        name: '万元',
        nameTextStyle: {
            fontSize: 22,
            fontFamily: "Noto Sans CJK SC",
            color: "#57c1e0"
        },

        axisLabel: {
            color: "#57c1e0",
            fontSize: 22,
            fontFamily: "Noto Sans CJK SC",
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                type: "dotted",
                color: "#1a678e",
                width: 2
            }
        },
    }, ],

    series: [

        {
            name: '应收水费',
            type: 'pictorialBar',
            stack: '总量',
            //label: {
            //    show: true,
            //    position: 'insideRight'
            //},
            //barGap: "30%",

            data: [10, 62, 71, 76, 78, 82, 100],
            //symbolOffset: [0, -8],
            // symbolRotate: -9,
            // symbolPosition: 'start',
            //symbol: 'image://../image/bar1.jpg',
            symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAADaCAYAAAAyjcs7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4RTIwQkJDRUM3M0IxMUVBOEZBRjg0N0UyODcwMzVGRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4RTIwQkJDRkM3M0IxMUVBOEZBRjg0N0UyODcwMzVGRSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhFMjBCQkNDQzczQjExRUE4RkFGODQ3RTI4NzAzNUZFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhFMjBCQkNEQzczQjExRUE4RkFGODQ3RTI4NzAzNUZFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+39rmFAAABUBJREFUeNrs1n9MlHUcB/DPc3fcAXfcD0AInPwQKmApkrRWMSXncPRLiT/a2lzk0taKVvxhrrmM1VYjZU1zrZWbf9Yfbv3j+rUhRGm0WoNQUKgBmigm3j0wguO4p/f3wnYGIiAHR3t/t2ef5/t9njtevJ/v8/2eZhiGzNRMmRtlri2jsjYF5RCOeByv9h3b1y3zbMHepilj2kKjAX5KjOAh/dzJFUH/iLjyS/2axfoeLr0L/HBUoYFNRTk8rg9UXv35c/EP/hEaN8cmiHtNmdgz1vThz+0G/LOoQAP8NNI9qJ/9LsnX0YTTwJR7bMkZ4il8RKzutEZ0XwL+9JKggb0D5cNx3+VtoXSvXZxZoJnEsbpY3AWbAiZr3GGMvAm8d9HQAG9HpO/7OpsT9U6V7sSsH7nJFq/g4sguviKatgdDR4EPRgwNbDrKR37fpccGf0K63v75Lgxqqohn3aNiS1rVgu7LgP+44GiAq5Bovd75rUc/2zyndGeYM2LPLBT3PZuDeGmPYuA14P+8bTSwK3H6MVItD6XruyQL3UwxNnHml0pCzv1ezWR+Q70rwAfmjM6qadRQng2l29Hk8iFdxCuRbDHOFVhlyiU2Jacd3eqe+tLGWaMBXhVK99rFLWplwAohi9ni0/PFDbwl3vUpuruBP39T9GS6z2Gt3e870+jUz30f8XRvOtvNMeK8u0Scdz00jPN3MLQfeP8NaIAzUT7BbrY5lK4+INHQLHaPuNduUemr3zCvhNCT6T5vTATqfGdOJOhdJ5cs3ZlabGqupJRsFwvA2egfGRu88LBaGcaHrki0ttHL//xYtOBo87Z95dC7f4jKdKedLjgcoemwjJpJlmEjmmiiiSaaaKKJJppoookmmmiiiSaaaKKJJppoookmmmiiiSaaaKKJJppoookmmmiiiSaaaKKJJppoookmmmiiiSaaaKKJJppoookmmmiiiSaaaKKJJppoookmmmiiiSaaaKKJJppoookmmmiiiSaaaKKJJppoookmmmiiiSaaaKKJJppoookmmmiiiSaaaKKJJppoookmmmiiiSaaaKKJJvp/gLZ60kPVshywmskszrwN4srbMIjuiyF0bGqujF7ujkpwjDNFku57UqzutOPo7uypL+1X6PKUku0HRgd+L/D++rX4vf1REq8mzjsfFFfBJl0zW2qAPfLvJcMwJKumUeF3iWHUDvf+kuw73SATo0NL5rXYEyWpuEJsyRkN6O4AuPeG/0ehrzfg3Sh7jYC/2ne22TrUdUqMifHFjFccq4vFs6bsL81ifR0DBwEOTrkrHB2Gz0WpC4z4Krzt38jI+XZ0jYhyzXEupLtVYlNyWtCt6ju2r1ONB3ubZFboMHwpSv3Y4IUib+sXghoRsD1znXgKy/2mmNhaFRbAgevX5oyehKu1vApJv43E01TyeAILk67NLon3PiFx6Xmt6D4DbOt/75kX2pS5MVQzKmsdKHswx2sw1+Mw5wVzf97g+JX54il6PAB4Hbq1AE/7ZbeFvt6AV9vSW1hdqrDKmLDa4CHMfr6brHFqKog9o7BrMt1TM92/IOgwfJGa71jXS71tX8rolZ5bgtUmlrR+q2GOc36gnhrAI7f6zIKiw/AV6uUZudiRqzanwPDg1O+w2MS9tkwc2eux3mo7gG2Y7ZOJCHoSbkWpNoITe4d+a3HrHU0SHB8NXbOtyEK627BheNSOVgOwPpe5HzF0GD5ZvVTBsZFdvo4TFrPdI87cB/qxJe8E9vh8XtiIo8PwBSgHcKjfAi8AfHW+q8x06L8FGABPeUeEP5VuYAAAAABJRU5ErkJggg==',
        }, {
            name: '实收水费',
            type: 'pictorialBar',
            stack: '总量',
            //label: {
            //    show: true,
            //    position: 'insideRight'
            //},
            data: [10, 49, 49, 56, 53, 53, 80],
            //symbolOffset: [0, -8],
            // symbolRotate: -9,
            // symbolPosition: 'start',
            //symbol: 'image://../image/bar3.jpg',
            //barGap: "30%",
            symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAADaCAYAAAAyjcs7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5OTcwQzBFQ0M3M0IxMUVBOUNBNEQzRjA2QkQ4QzFGNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5OTcwQzBFREM3M0IxMUVBOUNBNEQzRjA2QkQ4QzFGNCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk5NzBDMEVBQzczQjExRUE5Q0E0RDNGMDZCRDhDMUY0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk5NzBDMEVCQzczQjExRUE5Q0E0RDNGMDZCRDhDMUY0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+EesOXQAAGLJJREFUeNrsXUmMnNdx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',

        },



    ]
};