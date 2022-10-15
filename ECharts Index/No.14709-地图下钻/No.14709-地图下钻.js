function loadJSON() {
    var i, o, n, m, l, k, j;
    a = myChart, a.showLoading(), i = $(".panel").find("option:selected").last(), i.attr("selected", !0), 
    o = i.val().split("|"), n = o[0], m = o[1], l = i.text(), k = {
        subdistrict: 1,
        extensions: "all"
    }, j = new AMap.DistrictSearch(k), j.setSubdistrict(1), j.setLevel(n), j.search(l, function(A, z) {
        function y() {
            this.type = "FeatureCollection", this.features = [];
        }
        function x() {
            this.type = "Feature", this.id = "", this.properties = {
                name: "",
                cp: [],
                childNum: 1
            }, this.geometry = {
                type: "Polygon",
                coordinates: []
            };
        }
        function w(H, G) {
            var B, q, p, F = [], E = [], D = [], C = H.boundaries.length;
            if (1 === C) {
                for (B = H.boundaries[0], q = 0; q < B.length; q++) {
                    F[0] = B[q].lng, F[1] = B[q].lat, E.push(F), F = [];
                }
                G.push(E);
            } else {
                for (p = 0; C > p; p++) {
                    for (B = H.boundaries[p], q = 0; q < B.length; q++) {
                        F[0] = B[q].lng, F[1] = B[q].lat, E.push(F), F = [];
                    }
                    D.push(E), E = [], G.push(D), D = [];
                }
            }
        }
        function v(f) {
            f.UTF8Encoding = !0;
            var c = f.features;
            return c ? (c.forEach(function(p) {
                var g = p.geometry.encodeOffsets = [], q = p.geometry.coordinates;
                "Polygon" === p.geometry.type ? q.forEach(function(b, B) {
                    q[B] = u(b, g[B] = []);
                }) : "MultiPolygon" === p.geometry.type && q.forEach(function(b, B) {
                    g[B] = [], b.forEach(function(C, D) {
                        q[B][D] = u(C, g[B][D] = []);
                    });
                });
            }), f) : void 0;
        }
        function u(q, p) {
            var C, B, F = "", E = t(q[0][0]), D = t(q[0][1]);
            for (p[0] = E, p[1] = D, C = 0; C < q.length; C++) {
                B = q[C], F += s(B[0], E), F += s(B[1], D), E = t(B[0]), D = t(B[1]);
            }
            return F;
        }
        function t(b) {
            return Math.ceil(1024 * b);
        }
        function s(f, c) {
            return f = t(f), f -= c, 8232 == 64 + (f << 1 ^ f >> 15) && f--, f = f << 1 ^ f >> 15, 
            String.fromCharCode(f + 64);
        }
        function r(K, J, I) {
            var B, g, f, H = new y(), G = H.features, F = K[0], E = F.districtList, D = F.citycode, C = 0;
            if (D.length) {
                for (B = 0, g = E.length; g > B; B++) {
                    C++, j.search(E[B].name, function(p, q) {
                        function c(N, M) {
                            var T, S, R, Q, P, O;
                            for (T = new x(), S = [], R = [], Q = 0, P = N.length; P > Q; Q++) {
                                if (O = N[Q], O.citycode === M) {
                                    return T.id = O.adcode, T.properties.name = O.name, T.properties.childNum = O.boundaries.length, 
                                    T.properties.childNum > 1 && (T.geometry.type = "MultiPolygon"), S[0] = O.center.lng, 
                                    S[1] = O.center.lat, T.properties.cp = S, S = [], w(O, R), T.geometry.coordinates = R, 
                                    R = [], T;
                                }
                            }
                        }
                        C--;
                        var b = q.districtList, L = c(b, m);
                        L && G.push(L), 0 === C && (J && (H = v(H)), I(H), j.setSubdistrict(1));
                    });
                }
            } else {
                for (B = 0, g = E.length; g > B; B++) {
                    f = E[B].name, C++, j.search(f, function(q, c) {
                        function M(O) {
                            var N, T, S, R, Q, P;
                            for (N = new x(), T = [], S = [], R = 0, Q = O.length; Q > R; R++) {
                                return P = O[R], N.id = P.adcode, N.properties.name = P.name, N.properties.childNum = P.boundaries.length, 
                                N.properties.childNum > 1 && (N.geometry.type = "MultiPolygon"), T[0] = P.center.lng, 
                                T[1] = P.center.lat, N.properties.cp = T, T = [], w(P, S), N.geometry.coordinates = S, 
                                S = [], N;
                            }
                        }
                        C--;
                        var L = c.districtList, p = M(L);
                        G.push(p), 0 === C && (H = v(H), I(H), j.setSubdistrict(1));
                    });
                }
            }
        }
        function h(H, G, F) {
            function E(I, p) {
                var O, N, M, L, K, J;
                for (O = new x(), N = [], M = [], L = 0, K = I.length; K > L; L++) {
                    if (J = I[L], J.citycode == p) {
                        return O.id = J.adcode, O.properties.name = J.name, O.properties.childNum = J.boundaries.length, 
                        O.properties.childNum > 1 && (O.geometry.type = "MultiPolygon"), N[0] = J.center.lng, 
                        N[1] = J.center.lat, O.properties.cp = N, N = [], w(J, M), O.geometry.coordinates = M, 
                        O;
                    }
                }
            }
            function D(I) {
                var p = new x(), K = [], J = [];
                return p.id = I.adcode, p.properties.name = I.name, p.properties.childNum = I.boundaries.length, 
                p.properties.childNum > 1 && (p.geometry.type = "MultiPolygon"), K[0] = I.center.lng, 
                K[1] = I.center.lat, p.properties.cp = K, K = [], w(I, J), p.geometry.coordinates = J, 
                p;
            }
            var C, B = new y(), q = B.features, g = H[0], f = (g.citycode, g.level);
            C = "district" === f ? E(H, m) : D(g), q.push(C), G && (B = v(B)), F(B), j.setSubdistrict(1);
        }
        function e(c) {
            echarts.registerMap("mapArea", c), $("#" + a.getDom().id).contextmenu(function() {
                return !1;
            }), a.clear(), a.setOption({
                color: [ "#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42" ],
                backgroundColor: "#333",
                textStyle: {
                    color: "#eee",
                    fontFamily: "Microsoft YaHei",
                    fontSize: 12,
                    fontStyle: "normal",
                    fontWeight: "normal"
                },
                title: {
                    text: $(".panel select:eq(-2) option:selected").text(),
                    subtext: "注：点击下钻，右击跳出（目前只支持到县市级）",
                    textStyle: {
                        color: "#fff"
                    }
                },
                geo: {
                    map: "mapArea",
                    roam: !0,
                    selectedMode: "single",
                    itemStyle: {
                        normal: {
                            borderColor: "rgba(100,149,237,1)",
                            borderWidth: 1.5,
                            areaColor: "#1b1b1b"
                        }
                    }
                }
            }), a.on("geoselectchanged", function(b) {
                /*$(".panel select:last-child option").each(function() {
                    return $(this).text() == b.batch[0].name ? ($(this).attr("selected", !0), void loadJSON()) : void 0;
                });*/
            }), a.getZr().on("mousedown", function(b) {
                switch (b.event.which) {
                  case 3:
                    $(".panel select").length > 2 && ($(".panel select:last-child").remove(), $(".panel select:last-child").remove(), 
                    loadJSON());
                }
            }), a.hideLoading();
        }
        switch (n) {
          case "district":
          case "biz_area":
            h(z.districtList, !0, e);
            break;

          default:
            r(z.districtList, !0, e);
            var d = $("<select></select>");
            switch (d.change(function() {
                $(this).nextAll().remove(), $(this).val() || $(this).remove(), loadJSON();
            }), d.appendTo($(".panel")), n) {
              case "country":
                d.append($('<option value="">--  所有省(行政区,直辖市)  --</option>'));
                break;

              case "province":
                d.append($('<option value="">--  所有城市  --</option>'));
                break;

              case "city":
                d.append($('<option value="">--  所有区县  --</option>'));
            }
            z.districtList[0].districtList.forEach(function(b) {
                d.append($('<option value="' + b.level + (b.citycode ? "|" + b.citycode : "") + '">' + b.name + "</option>"));
            });
        }
    });
}

$("body").append($('<div class="panel" style="position: absolute;background-color: #fff;border: solid 1px silver;box-shadow: 3px 4px 3px 0px silver;right: 10px;top: 10px;padding: 5px 10px;font-size: 12px;border-radius: 4px">请选择区域：<select><option selected="selected" value="country">中国</option></select></div>')), 
loadJSON();