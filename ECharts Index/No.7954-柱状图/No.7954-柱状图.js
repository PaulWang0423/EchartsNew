        var title = {}
        var plusValue = 94
        var minusValue = 6
        if (plusValue < minusValue) {
            title = {
                text: '今日心情：伤心',
                left: 'center',
                top: 25,
                textStyle: {
                    color: '#036ff2'
                }
            }
        } else {
            title = {
                text: '今日心情：开心',
                left: 'center',
                top: 25,
                textStyle: {
                    color: '#ff5c0b'
                }
            }
        }

        option = {
            backgroundColor: '#fff',
            title: title,
            tooltip: {},
            grid: {
                left: '17%',
                right: '17%'
            },
            xAxis: {
                type: 'value',
                show: false
            },
            yAxis: {
                type: 'category',
                show: false
            },
            series: [{
                    name: '开心',
                    data: [plusValue],
                    type: 'bar',
                    stack: '总量',
                    barWidth: 11,
                    cursor: 'default',
                    itemStyle: {
                        borderWidth: 3,
                        borderStyle: 'solid',
                        borderColor: '#FFFFFF',
                        color: '#ff5c0b'
                    },
                    // label: {
                    //     show: true,
                    //     padding: [0, 0, 40, 0],
                    //     fontSize: 14,
                    //     color: '#333333',
                    //     formatter($data) {
                    //         return Math.abs($data.data).toFixed(2) + '%'
                    //     }
                    // },
                    label: {
                        normal: {
                            show: true,
                            position: "left",
                            padding: [5, 10],
                            color: "transparent",
                            backgroundColor: {
                                "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA4CAYAAABNGP5yAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABdUSURBVGhD7Vt5kFXVmUeBpuluwJiYOGo0MVqVmklNOZlyNMZMppSoJdLdNJvIsLhFRR1FWoNC3JKJaASCa4xkUq6IBtCpTM1iZBilkVg6M65RlsSFpfu9fu/dty93+c3v9537GgIvj0z/OZnzOH3vPfec73zf71vOd+69jMAfeRkWAJF+UWRnYRQgiHw7RqGOIY+8HwQI/Soin+1sAwJWHVnDKsJaDmF5EH4hgaDIYyWDiG0Ii+zjs7rePqcJREP0SF9zBaQXcP4o5Fw8ak5OxBpZu3jhCftHqBlf4tdIHlSGAQApaXKrmtgJzFltwijgtU8GdV0f4ZcQ7HoP6U1rMPjU7Sgsn4/iknOQv/5ryFx1ClILvgpv4deRu4VtK+Yj+dQdSL38LPxd7xIUAaJZKRyBC8KapuQ8pM+5DPCoygaCzfMwBsH10T32t4vGCAwLAP3cPzchFeEYoYaioBb3C1D7+D+Ref4upJaei8y8LyHdcySyk8ei2jkKUefhAI/oZu0cbTXgdZk12zkGmWlHIDv3C/CWnIfU8ytR++jtmC7nCiqcs8Q5ZRXiQlrm/ARFyiBXMgDjLaJlCABnsQeX4bmAk9+ICm2fE0g7gGqI8o7XkH54AbyLT0S+azSqU1oQqHa1oDa5BaXuVhR72pHv6UBuKo9TO3jejuKUsSh3t6DKMUGXwGmB3z0G6SltyMw/Ed4D16D8wRucg66GGoJAwklIJ7jxZdfOJQkL+/Hafo3L/x4Am6A+Ec3LfN0Zey31AdKre5H62xNQmjwGoEBBTytKnS3IzzoK6RvPxN77r4S3YSUqWzag/M5GlLZvZX0V5bdeQqXvWWSfvxd7Hrwcqd5vIH/hcSh0tSLqIRhTW1Ge3E7aX0T60UXwE7+xOSOBQMujWfBIXpztkze6hCAwZYm/xhD8AQBoYDxY1HhuPi+yNHdn8gGKm9eg/+pTab7jyWwbAmou1z0Oe3rPRGrt91HZtgVRfjf7VlgPVdjH+xDV7X1Ir70LyYVn0pI64NOKohmtyHWOxcBVp6LYt956SwGBhJcLSngKHPKajIpbtg3TBZyWdRKfx21qFNp2Wiki88TtSE//HMLuNoBm7XW1of87Z6Pw708gyu0xWipaB2QxkU8TleZYA1lQfK4VI2QNFODcECtRbhcKmx5D/+KzkCNt0G0ERnr6p+E9dhvCimem7lswEl+8kpIUExzTwqJhOYQF2Gir+uskjoXXZbEfyZVXIn0BmZrJ4NY1BoNzTqQZ34OwtFcjXL+alkP6LLmose5bKmVFYlIaq7HdLaPWZquJQFFIcyXK9yO3fiUSDKjVbgbOGW3wJrci+aNLERX2OkMXuJxV8isw2vIc892oHMICVB2iuogY6ExTaueEybtmMKq3ABeOp7mPQj+Xtir9WYHQVn0yb2BRuIDxgn9tXbdorSoQjFMeh6oGxufSqIFFQUTL4AxQ3bEZiZu5ZHYK+HF0u5FILLsIUXaQQBJkgRkD7MfLoNFtUJoCEJjwFIXELMEwEyXClRxRv5LCUwszxyNDsxxceQk15MzdNCegHP8mjDRr63NdIJ6zhx35z0Sr/9HB/uoezy2wmX/LZSiQ7tO1UssvR6az3YFARQyuuJzpgAff3MrFBLM2m8OIH1QOAYCEIAFi4JOAAJAGvCdvQ4bruZu4HYMPX0Mzz5rp1bg++xxg67Mx4CqvnKCmXZm1v0879ouPMbNDP+tLeqYInhsWsioSq6aRevjvCMIE8tJBnlqRfvJ28kiFUQFhVLJ+4oWjJNJBpSkAmnoouQjKbIlQ3LKWweczNPtWmuBopFfO5/rnsY8Yo1DxhCFtXZHYfNDcQHRMBv7ROWmzXedWDB13aid1EAieNGCg2Dhpl5wxpggcEPj08ou5RNIVp3cgNfVPUNq8zlEJlCGKhquNSnMApB1NKsS5rvqpbVzqTuMSNxY1ru2Jm88F8h9rDmfyYpaAyQ9NeDIq3ZvAahcjAlVadQo1xlw94FxjdG60nPtYgKTVmIUNzcmT/C7ych6DcAtC5g2JBaczT/jQaAQGtJOjUTmEC3DSeNkiu0xybqC/j0fEdT7FaF/b9iuJx82KzE0aYZAUszR9ZYY+22WKvDAhzI3MDASoAqIEEgoObBUJ5IByR7WLjl+jsEyBlfQYHaPBebU34Ljqjj7sZeYZTmtFga6QIa80D8YDAe7AbFSaW4BpThMxNdmxFck5xyOa1oEs1/vs83ezB32e97XjMobYv76ESZz6lE5maU0Ci3kx5IQ3TesXM7l/dZbE85iOSkTXklYFgrMOXtMdFJuURRYUm6ig5JxjUd75yhAdY6JBaQqA24Jq+gCZhxagSLMPaGL9i8+2dd7ybTN1CU6NciIxpz1B7YPN8F78KUqv/4IRlMsTf0pwjGkFRROeXUlfoAgxA8OYdUyb4Exyyq//E7Iv/gS19/uEQAwA70u7rAF93fhknpDsnYjaFGaL3Ed4D10hIYymgGhUmlsAlxwx53/8Jrz5X2Ju30bCE5iVPR7f165MS4TTsG8+WWGufx9Ssz6PwgUjkOr5FPpXXYGg0E/GKaCZJM1WwOlaglD6Ia3rKIZZg0ISA6uuIo1x3FuMQPKiY5H+xx9RqLLNq1WKHfnPKUAlt+lppJkpYupIePNORvWT90hX/A3DAsz/efRoWjluUZV+7uUmJWLQEePydZdpkQkTjLp/50UkZx7HtJiboVntiKa3IT2pDfl1d8vQGb2dcObbch21mpYkvEyalX1UcuvuRWqSojsTnukTENH6BmYeg+q7/yaDccHZQGQVrzov7MZA79cZqEczJZ+A9AvLjVZYHQYARrBWQeq759GsuI1llE0/8wPeIZMKSPGk/GOBStrz1t+D8qQRiJggRVPHIZwxHn7nYUjdMdmCqtxkKLs05gUGfZiXQ4LE0T15ZxeCySMZdyYgYOwRzdKkw5HewPjD+yEDo2jaEyllfwZciMyaH9jO0e8ai8zSc9mec3w2KE0B0CT+J+9zL34CNTqK29PPobptq2M0VESWNiWE9uYuGuc3rmZyRI1NG49weis1N46AELj7ma/zvtu1uTXcYUBLii3AKi1J+YT6evddhvL5h5PGEQiY9+PCMaQ9BsVfPia7sdXHLY8CVMDpyMD8wRbkZh0DyArmfR7+7jclTcPS3AL4S29ai0wPGegajUzvX9uW1p7TcTJO5ya25Y+CCZj8b/HJ7Z3wJjFNpt+WqbEPL/sKyjs2GnPOVdifoKm/XMCOuidrIAhuiYtQoSC7LuVY0eochdz5h2HvbV2IvH72IXjsJxTVl0jwVNbEptxHSN14Bnk+nInRp5B+eQ37xEIdUJpbAKNb8qnvccfVhipjQP/9jKooWkBxz/zc0TY40p78m+e1we3wfsqcYdHfwLtnNkrvbzIwLZVmP3MFVrMCCa1z0ZMpE1ADRNbFX/nXm5D64WwM3vRN5B65kQnOTs1qlqTdpbMk9rSVyC2RzFfR/8ClqHCTlKIrDDx9h9FqVJoHQUbb/Ip5qND3S1r7N6x0E3LdNQbJqJioC2NPa/eLtswQhiaWf7rNlZjcBwAnkRLN3cLYMtRHI7V1dnbIhKb+IIXkQq40Aav6mcXwJyKyALcSRdw2L0eZGWuZLlNYPo/M6HHdwaUpAEEtZ09vw87DUexpQ+XV9eKTAHASA8BpVHw6TUozbJc2xAwFMq3G1w4AMSp+NY7XbHfmr6prt87ztrumq7k8g1MZDddfDaJ3oCXJMnS70rcOhSkMwgzA+SUTEVXysVS/W5oDUMogf/3p9L+RyDO7Kr/zElvFjADYX3BWaYHMi2Fp2MxTkZlHt/6TK45TxLYkhlVCSEh7qCquJYyNdUdKbOPdyiBwJLQivgB1luT4YOUY3jGQxKOeMeaZP0RdI+AtOp2yeCbTgaUpAH4+Ae+qU0hkJHJc0krbt1i7e4wlgRwAXI8ECxnhTTJJcWItxYzyV18xpLW6Fm2sHfersnGWulBGnkdZkuZxuYJr4z+jy66OvsAVqBxf3r7ZnjijaxS8BV9lUpU2ugeW5gAUB5Hm4IgRWI+wy9v0tIeTaxKrJrZNbMHLwWAaNEbFoTHGdV6+LXkJHLtateApQSSssc1Sb1PVBe/VeO6siLR0zVnMMkRPaPC+5tccSs5EyQDoGWu8ZxacgtpwAAiYh3s3nMHlbDQBoAu8tZGtZEQZoCYSE3ZNBqR5E3o/7YgT05bigYBQu/qLeW2ixLgTUpQ0wPXRLOqvJtmPoytaQs7iCucn0ja3AcE2W1pJV6Mrb29EgW4LLoXZG05FrZJh+8GlKQB6V5e/5VsIuAkq9rQysPxcM9HKyYQJTCsQY0OMSMvkhtdBUKY28uyniO2soW6u8lV7i2TWwfa41oud19sNLO05RI97AL1vVLIkmnpVJsEFjPHjAqiGWxDsaXcBfMnZFtAblaYAICrZu7oyASgzFc5uWG5MWT4fM2iRWILpZ0xQ/nIav1l2CX3vz7HzujOQ+/XLMXDqo2DlfLkOHG867dZLTNvA5LGwvQ87r/8m6f0ltn1/HvxSQs3xfNoQqZt40TLoxuTXrUKRS7detWkpV/LVqDS3ABpf8qk74TEJqnIl2PPAt9lG1O1xFyeKBa9HbbVZPKhmMLC0E9F5I5Ch+5Q2/sQYDGvSJo+yHB5dFcOcTAAYFmzTQbRlabwub34Caeb1IL3+m86hawoA9hOAOoo2q8Ue0WSOoB1olYrzOtuQWHNnTPzgcggLANPIZ+1FZdg5GqlFZyLKfuQEtoAkF+Ck7CiFuqWKCQtBSP14IapcPapdbSg+eh2JERhmggKJeooZ57mO+vGoCR0G/Cu6osfrwuOLmYi1oEZ/Tt93BecouXtUhOUc6i5gzSJ4kf0EHneEIbWfnnqkvWk28g1KUwAkmL/rPXhzj2cwaeVm6Fj4jK7GvPy9HpUpiEBRHiCf11zFl37GRKQV4ZTRSFz7VwgyekYnrXKMApkYFh1Dzs3lQNGF6Loa5vYgfb22ty0odLaj9M+PGH17VmECOyW4VUmZJLfk27cie9Fn7c1zZu4XUNulN8sadXBpDoB48QvILDkXvhggCKm197h78cMSTaig5gBgm7Vzur1vY8+VX0E4lVvSKe3IPqdttLpIeAUugSUQ6sJqvDTpgqOe+qoUNqxAvosJzdQODFzyZwg/+S9HX+MFpIIgTd5WBloFAwtSzywzsPT0yls6kbTyBlKj0hwAbV5Y0i+sQLrbaTO5kDtCasVFYQor3ZEjq8rlme2Zr5ORDDdSpQvG2AONwdnHoPSGe1xtz+yVTisoyo9Z7QGprIp7fGWaKqU3/wV755zEbXU7ipNHIvOzXs7GfYEhIM1L67H2KbzlCoUPMXADLaanBZnudmSejx+IENRGpXkQlJ8RuepHbyF1yRcBJhaFzvEobnpMdymITI6E1Y+Tu9ycWjHX4KSpHehfeDpqjB8hl9H0/ONRfOUZjnUCGn2CLECqNN/Qvi9QCVHcuhaJS7+MyrQ2+FNGYuDq0xAOfMD5NE6wy9I0r4Tj3LGy8uTN4/KHqS2cT4/E3uIAxYdhACCBZNJCO/PgNdSCzKoFA4vPci8jZaqx+cpstQxZcqM2X7GAC967G5GYczL8njHucfqMzyL70JXc629CWNw/OeG4cgrlHX3I/fgaZGYejWBKB0JaXvKi41H97xfNiwUaJTfhzX1YfVqOaT/fj8RNzFu6RpPXMfAevJYjpET1G44L0M/0TQ5pk+E37OOEMH4/n1+/wvXRkyASt02KZWLSn0DRUyKn6crrv8Duy//U8glMH4vK5Bb0zz4eye+eA++By5B95AZkV12LzC2d2Dv7JJQJMqaNMcvpn/9llF99llTkXs7ShuIG55XFBUyONGt+/Ur3wnR6C1KzT0Bl52vsIzlc/0aluQvUNWqvmGgFj5JRBpaIZpmceyKqO7aYVuTPevvrnvQ4s6Rbo8oTPbZSqez4Ffbc1oUs9+gh/RmMJ2HnCPiTRyCYxHr+CFu29BhLn8dkprShf+n5qGx7WbZhWhYAZu4W+KRZuSGPpF/d1ofBeSeSt7H2fUJm9SK2usCofuaqDcohYgCnJnKWglJAP7EDA8zGaj2juSa3ILn4HMDbbUwNbZHFnEV4l/8b+hXHZFhNovjL1UjeNgW75p/EzcqnmazIIghEF/ftUydgN9sTt56P4r8+ShdxG5gaaUiB5vtaJdx2KBaOHfJ7MLh4IirMO/Tkes/VX0MtsdP4qD9gVW1UmgMg5hWlKYhPYiqlvueQnn4kzayDy9NYpFZcTA4zxoh9zMAxDIUabIDYUknG9dC0RnBUwmoBlQ9fQ+2l1Sj9/G54j9+CIpdJ/8XVqO7cirCStX42XkFSZm6R3sUZcwFr56RVz3goMlvFjA4kZhyF4hbuWVhkfe4p9DAB4FAT3pmdtOzWZu/xW+Fd0ArM5PpODaYeZqbHzYamkFYsIO0HgBgeepsjQfbjZX+26ufsZmDaewdp0RIeuRnXCdYahbe+Ne5WH7wOuQsY9S/sQGoyc44nbxUF8qG3RQKM5+o9HAAc2vJtHSmUGJIfljP2WYrH/YG+EdD7+fRyfSCxy8YpibElMkZfFqEYQU7YJnCcm5jFiJ7MtF5tTDyfmFdcEQAcZ6/etBvkHFF+L1IrL0HOHsG3kxcGzPsup7t5JrjRJx3JraOdNCiHCIIiEgsixsmIMSGEC/0YWHaRfZkhEPR+PqlX1PbUiALorzQlAS1gxTQUHWUFcf2dcwugTnAdxbTSXfvuh7ScAzECbNuM1M0TGfFphRcy4DF4JpbN4dKc1JAhzTsQNL+j2ag0BYAjSYSMWzAUr9IE/UrBSPxlkxhc8W33tQj9T+/n9Ypar9KkIRVjyIKXtCEQ6uu4ljAKZhYmRhXYZCnO3RwobKPgAtNoMffQR1KD805CrfswzjkWg5y7f9Vl+wmvvMUBIAu21UIKM7s5uBzCBRyjomypL491bdknbZqAAVCfpQxOOxoRk5Yofj+f6J2I3H88RcacW6iIBeUGzrcFigtutqmJz/VY3VYVN4SFAOU/they/d85i8uwsjwmZD2jkJz5Gfr87YiqabJIXkjbaMlGNYcAMRBUY3IHlOZBUNFXwgs/aYmEeWYEBYa+xlKEVin2rUPiqtNNePQofR3LrWgH+nvPRGbt33M97+M2VWCUrH/zog8lP0aFu7r0mmVIMLfPMiu0z2eZINl3iAtOQ3Gzor1TkrmKjuSHENu5LMHx7pTYqDR3AS2BhNHcVqakeGDoukntaJpz3llL/Bbp1QsxOOc45JTNUUshd5ElgpKbdTTSvd9A//2X0YzvQYXMl9/chDKBKTNu6HljpW89s7lVGOCeP9N7BrKzjuIOVB9FEtRpbjc6yAwv8w+9ts6r6EtVWSQNJ1aONB/HKdO82gTTMACQKYqyLYNGXIGKRHldD4y2TOlrrKE3Lz5KO1+Bx3zfm3syo/ME+isjNTO/oHukJStlWkdBH0r3jGfyM47HNnvoWmAtMlPUa7iQ+TzYP+ySxjuQod8rty8zvZVb0AcZH2Ty4sXx5nxe0poNMMao3bWxS8PSFAD7zwZxkDKNx1VgOvdQHCDxOFkSA77ObbQ+l38XqRfuRXrpecjOPQHpaUcgxX16hYFLDyujbk4vQbmEgcDoZWaZZp5lPq+Xmpl51PaSbyHzwg/dri6m7F7N1wOmBNQd8eqEJUeujde2h4jbG5WmAOwTmAT0M+Lxr35vqJ87On9kf1W7y3Y/B3/3W0i/8jQST9+Bwor5yFMwb9Fp8Bb8BdILTkF24akoLDnbHmAm13wPgy8/B3/X2xy775WWszonzNCcQ7zEfeJ7atj//PeV5jEgLr8z/AB6NoE7cx11LXvjUalrVBXTrsdQkQYreQRFD34hjRpzfv2XGf03Gv3Pj30lpmNmTiI2l2q96H79VMLWz/XPXahNZ/VbB5Y/CID/y+X/AYiPf6QF+B/vipQDGVxShwAAAABJRU5ErkJggg=="
                            }
                        }
                    },
                },
                {
                    name: '伤心',
                    data: [minusValue],
                    type: 'bar',
                    stack: '总量',
                    barWidth: 11,
                    cursor: 'default',
                    itemStyle: {
                        borderWidth: 3,
                        borderStyle: 'solid',
                        borderColor: '#FFFFFF',
                        color: '#036ff2'
                    },
                    // label: {
                    //     show: true,
                    //     padding: [0, 0, 40, 0],
                    //     fontSize: 14,
                    //     color: '#333333',
                    //     formatter($data) {
                    //         return Math.abs($data.data).toFixed(2) + '%'
                    //     }
                    // }
                    label: {
                        normal: {
                            show: true,
                            position: "right",
                            padding: [5, 10],
                            color: "transparent",
                            backgroundColor: {
                                "image": "data:image/png;base64,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"
                            }
                        }
                    },
                }
            ]
        }