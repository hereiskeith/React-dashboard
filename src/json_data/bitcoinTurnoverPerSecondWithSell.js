import * as bitcoinData from './trade';

const windowHeight = window.screen.availHeight;

export const bitcoinTurnoverPerSecondWithSell = {
  chart: {
    type: 'column',
    width: 100,
    height: windowHeight * 0.12,
    scrollablePlotArea: {
      minWidth: 70,
      scrollPositionX: 0,
      scrollPositionY: 0,
    },
  },
  time: {
    timezoneOffset: 5 * 60
  },
  title: {
    text: '',
    align: 'left',
    margin: 10,
  },
  xAxis: {
    visible: false,
    type: 'datetime',
    padding: 0.02
  },
  yAxis: {
    visible: false,
    title: {
      text:''
    },
    type: 'linear',
    tickInterval: 1,
    min: 0,
    gridLineColor: '#FFEFEF'
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    series: {
      pointPlacement:'between',
      // maxPointWidth: 20,
      groupPadding: 0,
      pointPadding: 0,
      borderWidth: 0
    },
    line: {
      dataLabels: {
        enabled: true
      }
    }
  },
  series: [{
    name: 'Buy',
    color: '#7FE2FF',
    data: bitcoinData.bitcoinTurnoverPerSecondWithTypeSell
  }]
};
