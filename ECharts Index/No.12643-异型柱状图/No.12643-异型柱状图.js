 
    var walk = 'image://data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAADCCAYAAAAsAxBAAAAAAXNSR0IArs4c6QAAGm9JREFUeAGlXM+vXddVPve++55/xe6z3ThJVSEhBrQVEkjMWpCoXHXWIX8BnTAFiSJGHTNBgilT/gIQgkEEQoUZA4SISgE3/ZUmbRI7duzEP969fD/Wt/c+594Xu+lO3lnrrL3Wt7619j77nnftZDX9EuMv/3534c319OXd2fTa8fH0z3/+9dVbnxZu9YsEfnu3Wz/4h+m3EXN7u51uI/gru2m6FAzcf3daT6/D9vpnLk7/9O2vru5l7nnyuUT++B93X9g9m25Pq+n2bjd9FYCnzwPlPIC3uPw7Yl4/OppeP7s2/etffHn10Xmxe0T+8G921y9dn74BgK+tnPxz5wX/QvbV9Hi1m/4N5F5/ejb93V99Y/UfY/xmvKH+kzcffnP6we5bN187efzSjePTzTHCdyzwlxvYR6u793Zf+MH3t7/2zk+3vw+03xoRV3/0t7vf3B1Nv4tMv4O1/cq9d55+/q3/edR8Nier6fqrF6ZrNzfTyeU1GL04pydPdtO7P99NP7hzNr3/HtBrnF5fT1/5vc1PgfQdwH0H++1fVre/de/dC5fX373x2sl049bJF4+OVzceP9xO9+8+nR6+/2x69OHZNGGdMq5+9ni68crJdOnq0bQ+mpOi26OHu+ntt7bTnf/dTiSSceHSarp1az3denU9vXxrNe220wc//OHZGz+6sz27/+H0xdXtP7kLbwNiT2zXR+s3rt7YvHvz88e3rlzbfPHsyW714O6z6UP8PLz3dDp71sFPLh9Nn/3cybTbbKY372ynt36yTV5ArqbT66vplVeYfDVd+8xqun9/d+fN/zv74U/f2p4+eTz9xm6329CPha6+9qcg0rBJiDet0p9feunov09fPVlff/n4S0eb1emjB2fTg/efitjjR+gWxv2zi9N776+mzWalaln1LRDA2fLk7bd3//nmnbMP7767/dWz7fQrChguzLY5QsY/+Osnu8cfb7EEz6aPAPwEOkl6dGLYG2frze6/rt48ef/m545fu3x18+v0Zac+eHg0XT1dTzdurKanT6Z3kPh7P/7R9vijR6h62r00q43rhwQXL+ym64g5xc+1q0D/JohM68oMp2fPpunjhySFH+yV7bZ3qLoooqvV6h1s3u/dfO3C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';

    option = {
        
    backgroundColor:'#0b3470',
//        color: ['#bb0004', '#FFD48A'],
//        legend: {
//            data: ['pictorial element', 'reference bar']
//        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        title: {
            text: '万人',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 16,
                color: '#BDCAEA'
            },
            right: '0%',
            top:'2%',
        },
            grid: {
                top:'30%',
                right: "3%",
                bottom:'30%'

        },
        xAxis: {
            data: [
             '2014年',
             '2015年',
             '2016年',
             '2017年',
             '2018年'
            ],
            boundaryGap:true,
            axisLine: {   //轴线的设置
                show: true,
                lineStyle: {
                    color: '#abbbdd',
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#fff',
                fontSize: 16
            },
        },
        yAxis: {
            axisLabel: {
                color: '#fff',
                fontSize: 16
            },
            boundaryGap:true,
            axisLine: {   //轴线的设置
                show: true,
                lineStyle: {
                    color: '#abbbdd',
                }
            },
            axisTick:{
                show:false
            },
            splitLine: {   //网格线的设置
                show: true,
                lineStyle: {
                    color: '#3d5f8b',
                }
            },
        },
        series: [{
            type: 'pictorialBar',
            name: '用户数',
            symbolOffset: [0, 0],
            symbolPosition: 'end',
            symbolClip:true,
            symbol: walk,
            symbolSize: [34, 500],
            z: 10,
            data: [60,50,60,40,60]
        }]
    };