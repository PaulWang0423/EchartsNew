this.timeout = setTimeout(function () {
            myChart.setOption({
                grid: {
                    left: 5,
                    right: 0,
                    top: 0,
                    bottom: 0
                },
                xAxis: {
                    data: [{
                        value: '鲁道夫',
                        textStyle: {
                            color: '#ffd56e'
                        }
                    // }, 'çŒ›å†²', 'èˆžè€…', 'ä¹±èˆž', 'é›Œç‹', 'å½—æ˜Ÿ', 'æœ±åº‡ç‰¹', 'å”çº³', 'é—ªç”µ'],
                    }, '鹿2', '鹿3', '鹿4', '鹿5', '鹿6', '鹿7', '鹿8', '鹿9'],
                    axisLabel: {
                        interval: 0,
                        inside: true,
                        textStyle: {
                            color: 'rgba(255,255,255,0.8)',
                            fontSize: 12
                        }
                    },
                    splitLine: { show: false },
                    axisTick: { show: false },
                    axisLine: { show: false }
                },
                yAxis: {
                    show: false,
                    type: 'category',
                    data: ['é©¯é¹¿']
                },
                series: [{
                    type: 'scatter',
                    symbol: 'path://M-189.787,67.678c1.072,0.77-0.162,2.091-1.133,2.356c-0.809,0.184-0.858,0.419-0.912-1.61c-0.756-5.107-3.699-14.439-5.325-17.021c-0.503-0.736-0.738-1.273-0.738-1.273s-0.669,1.977-0.669,2.346c0,0.368-0.636,1.574-0.771,2.043s-3.279,9.141-3.948,10.146c-0.806,3.151,0.393,2.136-0.31,2.998c-0.091,0.776-1.762,1.158-2.553,0.815c-0.037-0.076,0.626-3.135,0.712-3.393c0.737-2.211,3.452-8.893,3.687-9.461c0.234-0.569,0.838-3.148,0.636-4.321c-0.201-1.173-0.603-2.814-1.842-3.552c-1.24-0.736-2.479-2.546-2.914-3.115c-0.436-0.568-0.738-2.713-2.412-2.311c-0.901,1.084-7.669,4.75-13.299,3.383c-2.345-0.569-4.188-1.072-4.858-1.072c-0.669,0-1.742-0.838-1.91,0.904c-0.166,1.742-0.736,4.154-0.803,5.159c0.711,2.651-0.865,14.542,1.148,18.295c0.959,1.786,0.509,1.983,0.383,1.995c-0.761,0.211-2.06,0.611-2.72,0.007c-0.208-0.19,0.162-1.132,0.212-1.565c0.685-2.406-1.993-16.574-2.105-19.166c-1.102,19.925,0.827,14.424,0.974,18.172c-0.586,0.369-1.503,0.747-2.542,0.512c-0.22-0.01-0.371-0.197-0.331-0.992c0.067-1.323,0.334-1.763,0.246-3.627c-0.235-5.023-1.443-12.921-1.33-13.932c0-1.439-0.235-3.584-0.435-4.422c-0.202-0.837-0.502-2.646-1.474-3.081c-5.729-1.687-10.635-21.806-11.088-26.466c-0.369-1.541-0.074-4.396-0.042-4.866c-0.368-0.436-1.466-0.241-2.404-1.097c-1.14-1.139-1.692-2.621-1.858-3.458c-0.083-0.493-0.36-0.126-1.458-1.099c-1.742-1.305-3.986-3.482-4.287-5.191c-0.206-0.83-0.462-3.273-0.33-3.174c0.099,0.031,0.782,3.25,1.15,3.299c0.786-0.419-0.018-2.387-0.018-3.826c0-1.44,0.018-2.479-0.971-3.803c-0.302-1.039,0.033-2.714,0.469-3.216c-0.268,1.388-0.26,2.369,0.36,3.333c0.712,0.947,1.247,1.089,2.353,0.184c1.221-0.836,2.266-1.81,2.411-2.102c0.034-0.07,0.023,0.258-0.379,0.906c-1.441,1.768-2.781,1.878-2.328,2.516c0.276,0.359,0.814,0.061,1.068-0.182c0.284-0.293,0.389,0.277-0.637,0.805c-1.048,0.447-1.507,0.335-1.44,2.279c0.036,1.062,0.039,2.916,0.727,4.478c0.567,1.294,1.671,2.353,3.087,2.877c0.927-0.044,1.388,0.569,2.106,0.974c0.475,0.268,1.169,0.301,1.65,0.448c1.207,0.368,1.575,0.904,1.575,0.904s0.569,0.503,0.067-0.437c-0.503-0.938-1.428-2.25-1.406-3.617c-0.035-1.406-0.134-2.277,0.401-0.302c0.662,3.159,2.396,3.702,2.278,5.243c0.479,0.4,0.888,0.041,1.399,0.092c0.678,0.041,1.014,0.469,1.716,0.168c0.461-0.303,0.896-0.41,1.475-0.311c0.746-0.436,0.469-1.816,1.239-2.479c1.071-1.406,1.624-3.551,1.574-4.221c0.065-1.512,0.21-1.324,0.436-0.368c0.427,2.103-0.771,4.204-1.172,4.79c-0.561,0.854-1.039,1.516-0.502,1.44c0.536-0.167,1.892-0.72,2.194-1.089c0.762-0.662,1.039-1.193,1.29-1.592c0.352-0.477,0.786-0.57,0.871,0.168c0.024,0.67-0.218,0.837-0.034,1.273c3.625-1.412,6.235-3.173,7.512-8.818c0.09-1.268-0.25-2.324-0.754-3.422c-0.645-1.412-1.642-3.612-2.467-4.98c-0.032-0.107,0.551,0.364,1.034,1.207c0.403,1.039,1.823,3.604,2.145,4.02c0.468,0.438,0.905,1.039,1.14,0.168c0.185-1.055,0.871-1.727,0.736-3.484c-0.016-1.59,0.093-1.557,0.427,0.62c-0.101,1.474-0.527,2.898-0.561,3.602c-0.201,0.637-0.537,3.351-1.072,4.255c-2.306,5.33-3.644,5.936-8.436,8.561c0.058,0.1,0.119,1.941-2.25,3.197c-0.77,0.426-0.872,1.14-0.872,2.58c-0.117,2.209,0.85,2.994,1.051,3.563c0.201,0.569,0.373,3.337,1.999,4.142c1.18,0.428,2.477,0.804,4.421,1.004c3.083-0.008,5.577,0.889,8.091,1.189c2.512,0.301,5.878-0.754,8.324-0.754c2.445,0,6.919-0.217,9.967-0.117c3.048,0.101,5.605,0.592,8.458,2.094c2.353,1.469,2.569,6.314,1.454,6.99c0.091-1.138-0.522-0.649-0.49-2.748c0.028,0.553-0.083,2.197-0.812,3.917l-1.408,4.22c0,0-1.724,4.036-0.051,6.381c1.676,2.346,2.715,3.25,3.049,3.585c0.336,0.335,0.67,1.173,0.771,3.249c0.1,2.078,0.703,4.455,0.938,5.562C-193.166,56.301-190.61,66.523-189.787,67.678z',
                    symbolSize: [35, 45],
                    symbolOffset: [-5, 0],
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,0.6)'
                        }
                    },
                    data: [{
                        // symbolSize: [40, 50],
                        symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABTCAYAAAAiNXGsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABZtJREFUeNrsXL1u40YQHhNGqgBWddcEODmlGhvXJI1hprvOzBOcrj8c5S7d0UV68glM12noJzgK9wCRkIuAdHJ5aUIDSZMUzi53SS7/xCXF/SFPAywoiaaW+mbmm59dGp6enkDq+P2dJX3ODsMALBvbBHliovmmuU829hw0EwPd1Dk6TktnNvZE0JwuGk7hs3P9gAGYVICCNShGizNvS+eYMgqY6AgM5EDY2E78fua5Aud1qOVgsdDY6gbMESYaBAa+sRXV3AqBshA+88b2KSBmDNTMC3W0GKy9K+rrVokcxQgG5j0al1QpWrrSigHoPOUBkZJZyAN6HekGzHHhZh3J8691tJYkXFtKogKJRmdohHoCAxApCpcWPWoNzKJnS+AFZimFzzoBM/NW1KT7Kg0WNJveBd6URkEfNJUkKt2VEr3yj2kDWpPV+DHxzjztgVnEYRPg9Q5tm5z5jdlgLQ7NXRagsRg0TEfU5x9jMtwFTrOL1CdsG9ulSd21bpluncUA5RqTkvGvccqet5CwoiquqoHuYqA3NuaaMHXDjY2/30bjRnAd1mOtVI4qYUrIAPdoBLlR9cMIB31A45QCfEvPLKkVPdDiNIQBSBmYPBe8r8hUp5VlA7GOc+pGl8yZR1pquDqm/l2AwZbzV811HrWeLXU9i7EQVpbxuQEB0gxM1hp4vcf3Xw+BT3aTb12yRlyha4How0DFaGgNRJQ3vJYA3ccEPEAX4nMlfs7JgzLzLBi4GC3+tpz0rf5EzvIbOTKfwgjkuPOVGBD/E32Djj99B/DqWxiLGJ2v/OUPgIsLgOfPyfvbT7wF5OiAybvIP/8BfPwI8Pkzef/3v2yf5QsCphhhzp7lz198k7x6EddJX5grLdNXPyM3enVKAMLHty/5q/ARku82rYO+/goR7vfdejIjtBjeUHyi4w4GHYCBuJqWu71EUeabZcAtL4j7MCEFNQE2oo2xUQETQr7fso88MIAR8JLoR0qQZO/OlL6uy5Gq7ueRUUQ2B+dyTRdgHCg3sIYkayBNM7/vzDcceMDBLdvbeOvLjvWv9hZDrCaKI8/w5TF204r2SNdaKYRxCFbuvM8iMoDxiHkAplom/QFDfPIeRizGHteOwWqWB2DqypaazQXdwnUWtjE4V4MN1TNvIsJisPgDtpZAFMdgEg5ovXMApsZPh+hGwoHxofsyrpbW0g8wJKdxD8DUu9NwuKbBjfoDhljNfOhJnQiLSR6a8A4lQTU4OIu8G2LRKBYYAg52qR8URCoPzX3EoZizxp3rQoDJ3EpWpMJAnDJP5fEsD/tNzzwYAm/Y5bCaH6l1vaH8tOb8bhwBbygg81znnwSCm0araVDcfkVkc5GJJ7d3WNZRxTVYkybkl062zOBbAuFb5qndPCkaGPwDP7QCpr+5ixu56+RN1VKKIdj/o33ziT1zK5ODjF3ZHAMNy7Dil2gxOCRK7mrDnlRFKQPUyVbiXH7b3EYlMPL2AJdro8YkVDYwbPieSp6bLXIXBfcyVQCzlMor9fIivR9CzM4uJcm2GDXA5B9I85nAkChNCfmuFBEu1LhKUEHKZyqAiTRwpXlKuvmdDUHKe4VtceO3mOwB1qK1JElgUEXAci1GzVP5izQiVrc0lQFTBGOtyI38hhznUi4wZSuJJLrRHLKdX7uy33v695bKzDdUYC3rhrqt5E6ygFlLt5g86bqcypIOjIqQPWfKkIDD3ddA+sFTVa4USQYm4HxoNWc1coHBfQ8ZW+VJfyWpjZyW3GepsBj26TeR/0bS7JA7JQq7wm1RWcBMCsnWWnDboT3oBMCkNWHJAiYB4YTWJBFLdIIsBlfO1x2TUfdYEjAu1WII2b+uTAjS6X22mdcV8DAJ8WKXT+rJ8YmpX/R5HJlkypgHHfnAEPfxGe2aoKH8L8AAWMS4r/E5f/EAAAAASUVORK5CYII=',
                        value: 0
                    },0,0,0,0,0,0,0,0],

                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return idx * 100;
                    }
                }]
            });
        }, 2500);