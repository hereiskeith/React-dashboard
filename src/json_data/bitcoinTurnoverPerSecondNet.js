import * as bitcoinData from "./trade";

const windowHeight = window.screen.availHeight;

export const bitcoinTurnoverPerSecondNet = {
  chart: {
    type: "column",
    width: 100,
    height: windowHeight * 0.12,
    scrollablePlotArea: {
      minWidth: 70,
      scrollPositionX: 0,
      scrollPositionY: 0,
    },
  },
  time: {
    timezoneOffset: 5 * 60,
  },
  title: {
    text: "",
    align: "left",
    margin: 10,
  },
  xAxis: {
    visible: false,
    type: "datetime",
  },
  yAxis: {
    visible: false,
    gridLineColor: "#FFEFEF",
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    series: {
      pointPlacement: "between",
      minPointLength: 5,
      groupPadding: 0,
      pointPadding: 0,
      borderWidth: 0,
    },
    line: {
      dataLabels: {
        enabled: true,
      },
    },
  },
  series: [
    {
      name: "Buy",
      color: "#85E9B7",
      negativeColor: "#FC8D8D",
      data: bitcoinData.bitcoinTurnoverPerSecondNet,
    },
  ],
};
