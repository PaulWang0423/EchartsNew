  var datas = {
      value: 4,
      title: "完成进度",
      type: 1,
      radiusType: 1
  };

  var fontColor = "#1e87f0";
  var seriesName = "";
  let noramlSize = 12;
  let state = "";
  let center = ["50%", "70%"];
  let wqradius,
      nqradius,
      kdradius;

  wqradius = "100%";
  nqradius = "90%";
  kdradius = "90%";

  let wqColor = "rgba(80, 152, 237,0.9)";
  let nqColor = [
      [datas.value / 5, "#1e87f0"],
      [1, "#e6e6e6"]
  ]

  option = {
      title: {
          show: true,
          x: "center",
          bottom: "2%",
          text: datas.title,
          textStyle: {
              fontWeight: "700",
              fontSize: 16,
              color: fontColor
          }
      },
      tooltip: {
          show: false
      },
      series: [{
              name: "刻度文字",
              type: "gauge",
              radius: kdradius,
              center: center,
              startAngle: 180,
              endAngle: 0,
              z: 7,
              splitNumber: 5,
              min: 0,
              max: 5,
              axisTick: {
                  show: true,
                  lineStyle: {
                      color: "#ffffff",
                      width: 1
                  },
                  length: 8,
                  splitNumber: 6
              },
              splitLine: {
                  show: false
              },
              axisLine: {
                  lineStyle: {
                      width: 25,
                      opacity: 0
                  }
              },
              axisLabel: {
                  fontSize: noramlSize,
                  color: fontColor,
                  formatter: function(v) {
                      var str = '';
                      switch (v) {
                          case 0:
                              str = '0%';
                              break;
                          case 1:
                              str = '30%';
                              break;

                          case 2:
                              str = '60%';
                              break;

                          case 3:
                              str = '90%';
                              break;

                          case 4:
                              str = '100%';
                              break;

                          case 5:
                              str = '竣工';
                              break;
                      }
                      return str;
                  },
              },
              pointer: {
                  show: false
              },
              detail: {
                  show: false
              }
          },
          {
              name: "指针",
              type: "gauge",
              z: 9,
              radius: "70%",
              startAngle: 180,
              endAngle: 0,
              center: center,
              axisLine: {
                  lineStyle: {
                      width: 0
                  }
              },
              axisTick: {
                  show: false
              },
              splitLine: {
                  show: false
              },
              axisLabel: {
                  show: false
              },
              min: 0,
              max: 5,
              pointer: {
                  show: true,
                  width: 10,
                  length: "60%"
              },
              itemStyle: {
                  normal: {
                      color: wqColor
                  }
              },
              detail: {
                  show: true,
                  offsetCenter: [0, "40%"],
                  formatter: function(v) {
                      var str = '';
                      switch (v) {
                          case 0:
                              str = '0%';
                              break;
                          case 1:
                              str = '30%';
                              break;

                          case 2:
                              str = '60%';
                              break;

                          case 3:
                              str = '90%';
                              break;

                          case 4:
                              str = '100%';
                              break;

                          case 5:
                              str = '竣工';
                              break;
                      }
                      return [
                          "{value|" + (str) + "} ",
                          "{company|" + state + "}"
                      ].join("\n");
                  },
                  rich: {
                      value: {
                          fontSize: 25,
                          lineHeight: 10,
                          color: "#1e87f0",
                          fontWeight: "700"
                      },
                      company: {
                          fontSize: 16,
                          lineHeight: 20,
                          color: "#1e87f0"
                      }
                  }
              },
              data: [datas.value]
          },
          {
              name: "内层盘",
              type: "gauge",
              z: 6,
              radius: nqradius,
              startAngle: 180,
              endAngle: 0,
              center: center,
              axisLine: {
                  lineStyle: {
                      color: nqColor,
                      width: 25,
                      opacity: 0.9
                  }
              },
              splitNumber: 5,
              min: 0,
              max: 5,
              axisTick: {
                  show: false
              },

              axisLabel: {
                  show: false
              },
              pointer: {
                  show: false
              },

              detail: {
                  show: 0
              }
          }
      ]
  };