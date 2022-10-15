option = {
    backgroundColor: '#010613',
    grid: {
        left: 55,
        right: 30,
        bottom: 150,
        top: 50,
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },

    },
    yAxis: [{
            offset: 80,
            type: 'category',
            data: ['gcs', 'fps', 'jcy', 'sqs', 'sjs'],
            axisLabel: {
                color: '#34b4ff',
                fontSize: 10,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },

            axisLabel: {
                formatter: function(value) {
                    return '{' + value + '| }';
                },
                rich: {
                    value: {
                        lineHeight: 120,
                        align: 'center',
                    },
                    jcy: {
                        height: 30,
                        align: 'center',
                        backgroundColor: {
                            image: 'data:image/png;base64,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'
                        }

                    },
                    sjs: {
                        height: 30,
                        align: 'center',
                        backgroundColor: {
                            image: 'data:image/png;base64,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'
                        }
                    },
                    gcs: {
                        height: 30,
                        align: 'center',
                        backgroundColor: {
                            image: 'data:image/png;base64,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'
                        }
                    },
                    fps: {
                        height: 30,
                        align: 'center',
                        backgroundColor: {
                            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAlCAYAAAAuqZsAAAAFhklEQVRYha2YbWgcRRjH/8/s3t7lvXkxDXraJk1b02qL9gW0Bl+KILRCpcUiivZDCypUUJSqwW8RVFDQGBCpH/3QfJBAv9TaVqGhDY0NwYpRS7UtmsSk6VuSu9ze7owfbmdvbm42uWs7sNzs7sw8v3memf8ze4TbKxRRBwCxyP2CxS7TuOm5/muCEYZnZRstxaDJU6Q9V6HUS3+3KJhugBANZ4JfDIyXAylDqRpg2u9CkASAWjY+mejYvf9rYqzVm0/1z45fOjL85XujGgRX4Lj2XJ9M0YwljBXULRQDFvW955Fn6lbveu0YMbY8N7xI+1l3wJ25fnjq18ET5/sPTgQAfmDcXwBUqB5T4Sx5PfFR3ydkWe0QeSAhuH/z8p9fDfd2nZH9MjemHSG4R2B8duzvt+2KqqRT27CzoqH5s3s7n526e9PW46kr44f/PX1kaGzw6I1gsr4CCN1zaiilx1gAbFtO4iUQVUErTk39IIBz8v7Kb0McgjMA7OIPfWf+Gxn4HsDBVTv2tjV2bHw8vqTp6Zpk29bVO1+dbN++52R6euLopR+/G5ocGZgD4AVeImih1IFiweU89Wn/MDGrRQfzUrMnMzevDQd9QYw5FU0tu4lZ9fNXJ/u8+dSE8D2Xcz9DxESsqnapU1O32XIS6wO3u37WPfHTgV0vBGCeHl5TKOXashGxne3K6k67srrT9C7R0Py86XnBWESOFXM6Azs8sMkVBsEMYCGcECJKXG+l6GPJCMkNxtQ2JrkILyKyTBa8+bnz2bnZv2S/eG39OhZzWgDAdzPj7sz1c8gNIEAQICYI4Fa8otmKJ1q99NyQ4Hw8CgoALZKSzGAz/1w4Mtzb1Y9g0W754JuuRENzCwC4M9fOnere9zGK9ctb++JbDzWt2fTKz5+/835qamxWg1KdE64xY/q4cXG0205UJrnvMQiQENwSXpaPD504jfz2FoVBIkKxgPoAhJdJzwsIPzU15qodTHXVY0UzPNvz7mEATtBOXQ+WOkui/FIlxgRyuywUT7Js0b7t5fb6FQ9sYHas8eHXP9yanp64MHqo5xdEbTCDp3gwsNwE0pDcqVKA8zJDpO44ASCrjtfYsaE2+di2bhZzWgGgfuW6L+qW3z8yeqhnuwlKgqni5qMw3gieSU+pYHboPaJQtSlXL/BYoq7RIsu+SzVMltWswMsS1k0e87WG0luqvtkKsE3EdI9JNecAuJdJpwT3xohiy8KBfX8Mhhwpf/U1pmd6KX6eAqbmuJzHlVBSHkyuVT45MjC1pG3Nfqd6SQ2IOLNs4c5cn0ZhIi8o+q4E1N2WB4MCpg4kAhhlQiS9LuF97mX57329+jFIbaMDCl3H5At1rUmjel1qUOFscx6TEiHXm6zLtlxpo78zhlKHNGUEdV0sVlQA1SvC8K5gTJPy67tE7limtQu9VpBTc3V1Z6uhM4HpwJFgUSXqtMsgeDbk4jyrTGIh78AAFYLpXigLqia5ItGx+40HWSyelA2teDy5csfedqWvCUzXuiK5KOVYox8knVXP7VvWvH7LHruiupPFnLVEVKF2EJxf8+dTp2YnLn97tufAcQAuctlgQRjcRigJAJrWbn40Xtf4ZmRDxurtyupttfe1LwVwDOaFb1T8UsGMX0deeu6q8L1LAiCEC1/+Uii43HX/MAAUracow6WASXG1kDtt6JfMm3L3eciFzwWQQS6MaiiNaq+WckIZJY5ZFGYICVb0gVGGrUXBVB0rOKsh722ZzOW9hPYCaF2/SgIsxWNqBtCPRvr5TW2jXmV7rdRQqh4D8kcj6R1d6aNSkTrWHQGTA0oYeW/6X0OVg0hlvxNgpsFUw/q/QLoklCwRainngzbqP7GoEhW6kuBu9Uu7nH5lyYQs/wPhgLW819JZ1wAAAABJRU5ErkJggg=='
                        }
                    },
                    sqs: {
                        height: 30,
                        align: 'center',
                        backgroundColor: {
                            image: 'data:image/png;base64,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'
                        }
                    },
                }
            }
        },
        {
            type: 'category',
            data: ['工程师', '分配师', '检察员', '升旗员', '设计师'],
            position: "left",
            margin: '',
            axisLabel: {
                color: '#66dbfc',
                fontSize: 24,
                fontFamily: "PingFang",
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
        },
        {
            type: 'category',
            data: [50, 8, 7, 20, 9],
            axisLabel: {
                color: '#34b4ff',
                fontSize: 24,
                fontFamily: "PingFang",
                color: 'rgb(0, 188, 133)'
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
        },
    ],
    series: [{
            barGap: "-100%",
            /*这里设置包含关系，只需要这一句话*/
            barWidth: 6,
            name: "队伍",
            z: 2,
            /*层级提高*/
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: '#00bc85',
                    label: {
                        show: false,
                        position: 'right',
                        distance: 0,
                        fontSize: '30',
                        align: "right",
                        fontFamily: 'Minima',
                        formatter: function(params) {
                            return params.value
                        },
                    },
                },
            },
            data: [-50, -8, -7, -20, -9],
            type: "bar"
        },
        {
            barWidth: 1,
            barGap: '-50%',
            data: [-100, -100, -100, -100, -100],
            name: "队伍",
            z: 1,
            itemStyle: {
                normal: {
                    color: "#659ab2",
                    label: {
                        show: false,
                        position: "top",
                        // position: "insideTopLeft"
                    }
                }
            },
            type: "bar",
        }
    ]
}