option = {
     "backgroundColor": '#030c3b',
    "title": {
        "text": "",
        "left": "center",
        "textStyle": {
            "fontSize": 20,
            "color": "rgb(85,85,85)"
        }
    },
    "legend": {
        "show": false,
        "type": "scroll",
        "orient": "horizontal",
        "x": "center",
        "y": "bottom",
        "icon": "rect",
        "formatter": function(e) {
            return "null" === e ? "(Null)": e
        },
        "textStyle": {
            "color": "rgb(85,85,85)",
            "fontSize": 12
        },
        "data": ["男", "女"]
    },
    "color": ["#00ffff", "#c424ff", "rgba(60, 189, 161, 1)", "rgba(99, 181, 78, 1)", "rgba(23, 171, 181, 1)", "rgba(30, 129, 196, 1)", "rgba(71, 198, 205, 1)", "rgba(143, 202, 110, 1)", "rgba(24, 172, 136, 1)", "rgba(204, 204, 51, 1)"],
    "series": [{
        "name": "人均日消费",
        "type": "pie",
        "data": [{
            "xbmc": "男",
            "人均日消费": 20.42,
            "name": "男",
            "value": 20.42,
            "itemStyle": {
                "normal": {
                    "borderWidth": 5,
                    "shadowBlur": 20,
                    "borderColor": "#00ffff",
                    "shadowColor": "#00ffff"
                }
            }
        },
        {
            "xbmc": "女",
            "人均日消费": 16.35,
            "name": "女",
            "value": 16.35,
            "itemStyle": {
                "normal": {
                    "borderColor": "#c424ff",
                    "borderWidth": 5,
                    "shadowColor": "#c424ff",
                    "shadowBlur": 20
                }
            }
        }],
        "radius": ["42%", "45%"],
        "label": {
            "normal": {
                "show": true,
                "rich": {
                    "name": {
                        "color": "#1890ff",
                        "fontSize": 14,
                        "padding": [0, 0],
                        "align": "center"
                    },
                    "value": {
                        "color": "#1890ff",
                        "align": "center",
                        "fontSize": 16,
                        "padding": [21, 0]
                    },
                    "percent": {
                        "color": "#1890ff",
                        "fontSize": 14,
                        "align": "center"
                    },
                    "hr": {
                        "borderColor": "#0b5263",
                        "width": "100%",
                        "borderWidth": 1,
                        "height": 0
                    }
                }
            }
        },
    }],
    "graphic": {
        "elements": [{
            "style": {
                "width": 50,
                "image": "data:image/png;base64,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",
                "height": 70
            },
            "top": "center",
            "type": "image",
            "z": 3,
            "left": "40%"
        },
        {
            "type": "image",
            "right": "40%",
            "z": 3,
            "style": {
                "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAByCAMAAADzq6aiAAABpFBMVEUAAAAA//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A//8A///ZqXRjAAAAi3RSTlMAAQIDBAYICQoMDQ4RExQWGBkaGxweHyAmJyksLTU4OTo7PD5AQkZHTk9QUVJTVFVYWVpgZGhqa21ucXJzdHZ5fX+AgYKDhoeIi5CRk5WWmZqbn6ChoqOlpqeoqaqsrrW2t7i5uru8vcPFx8jQ0tTX293e4OHi4+Tl5+jr7e7v8PHy8/T2+fr7/P3+d8xxFQAAAmtJREFUaN7t2vlb0zAYB/AAm1zeyKGIByKiQ9zwxgMRhifMCYooh4qgzrMw2awKKhZs80+7jbqkkGzpm/mDz/N+f1rfJZ9nT9ulTVNCiqfu0nTSspJPL9eRUmTnyBp1s/Zgt753/BvlshzS9c7a1BP7nJ53coOXEbt0vPoluinfGzTAJ1SQCbi31xaB9j4weJMKcwsMvhODH6BetS0GnRog2Ewl2Q8ED8vAQ0CwRQa2AMFdMnAP9Kh8EXtLZVBwQgxOgc/DTjF4CgwGDJE3H4D/mbtEoNb4NbbZG9MaYCtfbfQSVXpDdvW013tWq3tRKe/5wbifV8pLcB3dfv3jOmf07wBdRyIDsdH4bZZYLPZ8cXU1NZP5cIeV46P3Brrri2ll4YRDfcR5Eym4ExpeU99JNMq9ps8UELNZ5m01KCjJbRJwhALzUDJA21DQOSgE71Na2p9owMGUELRYA2u2qG7Mcu0dIcifCaSvGNhHTG4LQQQRRBBBBBFEEEG/4C/2/aIKuMDd/gnBt6zBSxXwBdt4LwSjrEGPCniBbdwQPxtdzu/CWhWwJp2fU0qepHb+dvdIO1EBSZt7U2xHZDOfjtxMauEoUQNJW+64mCcKTODDg9FQkKiCJBiKDobVpvhqoI/8Y3AlnclKCcHhbGkYQQQRRBBBBBFEEMH/Brzm6T2ULd3VAs97ekezpX5P6aJP8ICnd+79iw5PqdXvYtk8v1ybu9Gv/MqVPlX4Xes6zfXuXS9d5Upn/K+ePc53nnNXVwNz+dIkYDmuYshdPxvf8rdU5b6Z4cSDoBXC1kcpy5w6xpfaJ00rPX6kQKc/RsXweS7aQLIAAAAASUVORK5CYII=",
                "height": 70,
                "width": 50,
            },
            "top": "center"
        }]
    }
}