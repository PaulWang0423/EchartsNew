option = {
    backgroundColor: '#000',
    tooltip: {
        trigger: 'item',
        textStyle: {
            fontSize: 14
        },
        formatter: '{b0}:{c0}'
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 16.25
            }
        },
        axisTick: {
            show: false
        },
        data: [
            '山西',
            '四川',
            '西藏',
            '北京',
            '上海',
            '内蒙古',
            '云南'
        ],
    },
    yAxis: [{
            inverse: false,
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 16.25
                }
            }
        },

    ],
    series: [{
        type: 'pictorialBar',
        symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAgCAYAAABO6BuSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTlBM0E5NjY4OUYwMTFFQkE3QTM4QzA4NTM0NDg3M0UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTlBM0E5Njc4OUYwMTFFQkE3QTM4QzA4NTM0NDg3M0UiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1OUEzQTk2NDg5RjAxMUVCQTdBMzhDMDg1MzQ0ODczRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1OUEzQTk2NTg5RjAxMUVCQTdBMzhDMDg1MzQ0ODczRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqLccv4AABGCSURBVHjahFlJjFzXdb1v+L/mqp7Y3ZyabEoURYmaSMVSaEEKpCiSDAT2IjCiILt4lXUWAYKsAwRZZuFkk53jRQI4luEISSDZkmmRlCxLJGWKEmc22exmT1XVNfzhvZdz3/vV3SSFpIBidf36/707nHvuuY/Crl8iEkMSrk3kJNl8gSjt4M+MlJonylOycUpkLZmNX5OK95FsPUVp+ywp/SSJkqS8d5XiaLac0nCK0o2GlvksbZypO1WbsWQb1g6w1oySlNadG2rnnBSC8JJGiEg6WR8Y2++TaTtZms6VGdx0pZnMxAduG9PrllVjOc27m7I2RyI1lOdLFNcmSZiY8vYpUmOvEEWORKLgi4Kpd7G2JexPSs4S6QpZUYZ/LcLmvDFupvByW3+7cAFfBKxzxVcSEb9xwUzY9NYBmaw/KpIbc8aemZZZv0m2L6y0JGwJxm2Qlrw1bs9WsaIkdlTgM2yBRQUMcwZXFIKOd3IPwY6OmeEN/P4RRaJGua72pSytUL5yy8rxK1a6K7BhhYTOEbRgscMubKPcYbu3VxQfwQe99WPhkaAdL8FPK7+IkPxFHKLel8dM//ITcnh1lky/5Cgn5TRZqUhqRS6KYEvsH3Wq6pd13hi8EX1jzHZwcRPW9b85H1iYA6sFAqByPJgZxDUDyjaq0ro5N7g5J5T+dkQlY/qzK1KNXcLNn8OVr0mVEpKjlYXP8NbL+xb80yPv/U1u22XnNwcCzNpu1731lN28fEKnS/ts3iOJBZyMyVYr3knLC6a4ZhDtgSNzb0iuk5Do4b05JJtZxMzAhtwjiDOKRZAgh0sIEAdMRQgQ9q0CGY0KUQ3XmyWiuExOGzJaAJ4VJBJrJami/rUZPDijVPVlmy2vUv2Rc1LNfyqiyRsko4SsCe54FIktv4RZ4xoeYP+ihu0iIotyym6dUL1bb9nBtX3CJcIV2ZYRPkswAhk1SwNyt/vkluDgZp8UHBIyJ6NSEjEMi3KSwADhb+wUsqcCrEPpCO+As1whgHMmEBx+AymJxiN4IyBG4rNSITGFOtxfI7m7Cv7gmkUwh5kPOKNCSJRbNLtsG4c/VKU9HzhVHyox5WvY+WA1UUFw2LHD1IEVMZn04iG3eup7bnD1iAJcnYhJwiDLGyDydhMIu9wnutohsbEJQ4CkKpxqYY1qG45qZIqhCiiaPpfWdpkUyPKx01UYqr3TxNnHRcfXuY75wzIPcO1j70GVqAMUbCIh/ZhcBd/nmqSP1ElN4KFBQpS4UL82ZboiKu9fotaJd3T1+MeAIUgLyAFpicDSgJ4ECtoXTtqVf/tzmXeQypKvKzIwqY5AILvmoy7Zy6t4fkh6MiMx3SdRBsNLZFjtA3qwaPI7Xz5OYfHmSRLjT5Cr7w3OMKSyhFz7Csnl/8La93Ah3skaWMMFogz/wFDOXh44AQGiBNBfaYC/YNNAk9w/Rer3x0g2cF9nsL0QHHeqRHLsO++IyW//zHH12jo7/BUcywV13n/D3fvpd1GEUoLCHXMrsGcqcPwm6vLsMjihQ2r3kGhiA/WXkcy1Z0fjEjLP/R3awz6ihXNEGwji3BtkmmgdtIxNupS7HiBvmBxAbJMkly6TuvhP2KdSMKgruOT/fgkEwCoXiLA9RtltIKWH9vP0NIkny6RzBD9zPkAWMHcuhdOvnaHJP/5XQeMD4QYLZJZ/8l1a/tF3pGRHdcFwgE8pouSDTZKLK6QP36Ootekh6Wy0nRFfiymlg2NET/0hif2tsCEctCnQYJGJdbSnFLVWQx1VnIewuIL12r/C311iDhv5OuJXUAReDcSnIBt6OBi+bEB+eb9G5soE5ajX6I8a6PnYw6AJMiosLLQ9tOCTF9W+v/xH7Vbf3W9XfvqWBMapcFYgPFyz+bmEopUlUs8tIKNMLCWf0fs29ew+JFWOIDGOg2zOkIQ44F4sY17zIIk+UPLFfwNyn4LQIp/lSF8msReGMuyrh8DOyFCE+3LAcnCH7MZ1Ur3fgjDWwNKtBwIsAgNz4FErqgKSfGqB1NdA2oXDJJ4Hj5g8dCOuDF0DB5w96pYmX9J2eP0lZbvQAg0P41EdOTC/6CKzRxd8/wR/BfXyDdDjDNEjz5JrfkWqjxqNNJmPr4ATUOvHlkg8Mk10+CTJzotUuvlbtKsFcgf+iszEEQSWM4xahnriOnfcp8fHEIxXQaCvkrp9nmj558gmU5HayvQ2EVrPM5Lb6KN3KbvRILO2n1Q93DlqwaBRcOilF7RNlh5TFPnIyZGiwqdIkekW6i/i/rrt5DfVmb+UsSQt++cNohvtQjvoXCN3aonsBNY6jr5dh0R9/Ajuf5VSe4N08g653jp2Tr2CExkTFjKjwQuQtER1MgefoFi9RuLOf6Irqq0M78z2VrsFaarxJRDbLqIm2NzsQKPgFtdvaeZ/TxpeEGy3DxEbdI6Bbwv/H5kI0L67fR1kdpDMGOzqgzj218keehPSEvpgyIauQwsgW8OrCPcnpH1wkZmoQbZzgOzpzwD5m+ivdXIzNXKPI90VaPr2h5RMjlN5YxqVsx7UWIHE++qabUcb0zXYzIG18Q6JKYuOiEaoK7tS178IQRDdV5mseyWqflQHD7aOUZD8pigHObxG+XuolWcOk9kfh96OFmXt57jL+CxacISIwMqbaBk3eqAMdPoDCekWavCVN0mso26XPyW3cJbcly+SASocbZLKNigH2UUD5bX3N7P3DqijBL24CY29uI7GGjetNtFMmaImWkzmqZFpnynfN2u+PmTIlUPWH4D1NpwsSIsL4zyZMxD/n+9FW5pAxstkWGmxnRAN1EXfvgNH1+6RjheBHiazWcoP4plHPyYxe4Bo9k2S8y9DGjeh9t7FowiUBTF1YgrTwTe/fBLQr6m6C/qpzD1pK0+s1ZmCRGVO6Szp6dLYCbKrH4HhjY+On56wgB2bBXlBUSV4y7iAhbsPTFusyX6VNan5ZXL9NtkbcOYSFJGLPKQkxInWPYgRGHP8GbSoZ0klG4A/bFsGyZ2pkHkM75mzlFfhnGVpuYF6htK7jX4O1qYWM696qEV5pewyCA0EuLW3mMbyoN68ToDEbT1Jmawq0T7zZ39Tnjo8F5er0MbvoW9mYXDgOmHn8Z3WwardRQQkf0gZPQjzIqReU29TuAqzCaRmfuAHlO/ZDbI6j1CBqGQLddsA6XFLSkF4X4H1rvr+KnM4ECO70RtoUYD+1R8D0W0Kun7UEtECua9X0NamDiJAZVwN3cRrBpCgnHgBJb2HBgunVjT2yLLFUyQPvAVR/jrZxfewYRcbxh73YBWyu+bRJ8eJVq+jx3YKHojvd1Ts+BtkZKHCgoLSXgCQF1kgspun4NguEhNhZHRwzqaALdSa9GMkkNTFtLQAa++g7kCC7tH/oLwGFRfHpAch6IIFBZ4hJr3xOej8CU9oAgOMHWWcdcX0q+RKu2l47V0eNDB08SSCGunf+h+q7HmF9NyfkFv9GOPdV0ERsYDgsQ8Ou1KdcrQR2UW7StpB4zIKnPBi5T6kPTB4+4DgnjhZpuQjOFptkm3hmar2iLIJAjjAXhzrAeBfwWCyF8zew8DySYtk8wLenSKgGRk4SnXUfBOZRVY9+nh25qmJS6yyHxl/gadE6l9/F4nCwqzvNz78/l/Hojvv0w9JJqefAocdxcNwaON3aAWL6F+9MN5xVuEgz7Ni2Pe16rCQAkyc4feA5NYxiSwEamBM9tpyf5fOiwuC/rV9VkQ8D8sgLErQ6ZjjVW0zkCd+42D4ZxSyjoHGwlFZG8O9GBO1DiySJ8UMD84ozyAwj5MtgwwHN8ncOYv+nnvRYoRe1mKYOle2nqF5OnJ3z9Fg9RIE9yGKJ0+gj1YxT9zCaPY1MnAL2R4Gh0pV1E3TKx3LjIjoiqQXpCEmIohrXBsAqrxo6h0Q+GRV5DeqI1CNcCDAmBde/MRB3sppOIZ9dSnIzRilgE8GkT94scaXm8vQc1kDVPciSIcwnkKiIjFJ5zqE2yfoMD2fRC9YLB9SZKSNaVyL86VDJt5VqBzt8U/rFynbvE6mMU+qeYDU7OtQX2DfwV3Uwi0SgxUY3/NsyGdRjo93YkhCmgg8zihgwjPFeMc17Ap9y7UauDXIP8zPbBS3Qj8SckfwhR8wwg4qnnz4FMOXDoaQGJxS3QNxhLG0tAu3dAHKy3h/jfJoI4bc82U4YMCiCsGGXG7roZj9RW3zw5dovFUyzM7O/xyat8WMvI7einoWWFQ1DmCD3SiFIz5bZrgKaKN1ZCu+dbm87etLwVFbDPV8wuFZmoePgG1S4cOLGzs6FfCRsMVH4nnDawEgTyOQJkL9cUBhhyxP4DogDgTlfejntS9QetDsWc9LSKlBtECSP3qCH5KT3L0OCXPyA92rHVqW4g/+fWr1J2+7iePC8cLMcDJEBqt7YeaSu3gvUaawYAkblzEQlHeTrO8GXA+FQzjud8ycMEQkqHHDx78MbQSOs+1Cq/Iwpy3VV0g/ZETx4V/FH/4JFg/8yb2V65jlPyfAorV1voaDyxgu1kP5BF3oycvaQgj5qwgYnikjaV06dnq9+Xsf6370CPWaj/0y0XPZ3rV/fjtvzMWmBsHBGabMi0zhJaby04zgY9VsDYSI7HYgHT0U2VDUWgRpqaHOFLRwqYJ6q+M3sCwHCZs7cg+NlqIQMlx7gsnMMkdw0OBcsoohoovMYQ5H8BwnIg9l4Z/lDqC0V1WevIq2yO4aIEsN1qm29gktVf/0/aXG93/M9a5Xa8/7A7mN2vO/Vta0Z9b//i+i/nRtOP4IjG4VC4VaCo1ehGlqdNBZZBaWIQNg13QJZWs9ig3fxLXEzM7EUTzky5CN9dM+s6wJ5Md9mQmJxQrrHisCulxg+gBRHQiQRCEuQhAtz/EudAf0Tiq3b6ATXKbl6g9+dHXqb3/ZiydRxyAtf16Mh/jEca30+heD2aP/MLP2wzeqS5++KCtTlLbmoYerWyzuxYjbOqHfPgb1xwvFMb4c6b3RfdY75EZ6nHHnW5QI7GlHdSyDunOqGNnEA2fM4URQOLl9je1yhR35kKIOOkn/Cg3F09cWp374s5R2XxAIonSZt137/Ytpgk/2enr+zmrje/+yQa+dnm7//BV998vHVDmuyfouOA7y4FZRCvp4RDQ7D/IfmBtpNFO5rf8VEMGponbD0a0tmH1kTBg4giPkA+FPMdlYJf2xLtcsKzQBuaoHXTgJ4hwMeqk4eGWj8dZvNuMnPunHx/MoWfS+jXKjRwly/lSAj0ZT6pf3U7v6zMWFsbcuNjffb822f3W03Fn6Vin/7EhZJJpbQl6fgcgfh/IsYZU49PAtWW+3FnViZ7Z3vPjoVxa3qfDdHy8xq/usFSeYToR1McwLPhRIBhg4VgHXNTi6CDau5amqX9oov/yZquhzg9LhjUTVfXCkG2ydDbsijno7OW5LEW6WDlGiJlH4MCqeaDdL+06v1U6ervVW9ursxuFqunysvHx5rkTnWwSicmWwdlz10tP5T2ZY4Wdsrl0/lfoKkIFt+fCNIa0CCQij4DxDG7+BC7gt+TkFGZRpDzwGkTJI0AJX4GBCxo51s2hmYRB/62Kq58+TuHinXzpKzcGd0ClAtrmLH5inwkuLnbU2Ohcu8M7jIr/9IqjxTEzcTqPy7bWxt3+BAqjNtN+b1+buXKV/bZ/r2xlpr01pt1YOEhTMrMC0IAvSdSARUdYFxGXkeUOMSIf344EjhazMOxg8wOnc0lB7mRgfOqqsIL93u5WXbrvyzM1MTl93sr85FAcpQoBKBTL9f+EUU9JDhzRFxemtBiF2topCB4kd/znFXCRMaA2IYapne4nae8HoyQsiGgPhPS2Ua7ekSycq6VeTyi3XUnF0V214rlzKF8qDaK5mHAM2gzQeSM60dbHlwDhZNXG+iGG5kbTj5/qxureSxAe7mRi7l0XNduw67Wr/vOtXnvVBkraERKBu0b58SbC0FXSfl6M5XdB9LtD/CjAAMzAxq48BHsYAAAAASUVORK5CYII=',
        symbolRepeat: true,
        symbolSize: [60, 32],
        symbolPosition: 'start',
        symbolMargin: -7,
        symbolBoundingData: 10000,
        data: [11233, 23212,  19324, 13266, 12220, 10249, 9262]

    }]
};