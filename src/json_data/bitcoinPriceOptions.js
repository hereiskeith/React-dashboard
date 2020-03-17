import * as bitcoinData from './trade';
import Highcharts from 'highcharts';

export const bitcoinPrice = {
  chart: {
    type: 'area',
    height: 280,
    scrollablePlotArea: {
      minWidth: 300,
      scrollPositionX: 0,
      // minHeight: windowHeight * 0.3,
    },
    style: {
      fontFamily: '\'Source Sans Pro\', sans-serif',
      fontSize: '1em',
    }
  },
  time: {
    timezoneOffset: 5 * 60
  },
  title: {
    text: 'Bitcoin Price',
    align: 'left',
    style: {
      fontSize: '1em',
      fontWeight: 600
    },
    margin: 40,
  },
  subtitle: {
    text: 'Source: https://www.mercadobitcoin.net/api/BTC/trades',
    widthAdjust: 100,
    align: 'left',
    style: {
      color: '#AAA',
      fontSize: '0.875em'
    }
  },
  xAxis: {
    type: 'datetime',
    tickInterval: 1000,
  },
  yAxis: {
    title: {
      text:''
    },
    labels: {
      align: 'right',
      x: -5,
      formatter: function() {
        return `$${this.value/1000}K`;
      }
    },
    type: 'linear',
    tickInterval: 500,
    min: 37000,
    gridLineColor: '#F4F7F9'
  },
  legend: {
    align: 'left',
    itemStyle: {
      fontSize: '0.875em'
    }
  },
  plotOptions: {
    series: {
      allowPointSelect: true
    },
    line: {
      dataLabels: {
        enabled: true
      }
    }
  },
  series: [{
    name: 'Buy',
    color: '#A3A0FB',
    type: 'area',
    fillColor: {
      linearGradient: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 1
      },
      stops: [
        [0, Highcharts.color('#A3A0FB').setOpacity(0.3).get('rgba')],
        [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
      ]
    },
    data: bitcoinData.bitcoinPriceWithTypeBuy
  },{
    name: 'Sell',
    color: '#7FE2FF',
    type: 'area',
    fillColor: {
      linearGradient: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 1
      },
      stops: [
        [0, Highcharts.color('#7FE2EF').setOpacity(0.5).get('rgba')],
        [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
      ]
    },
    data: bitcoinData.bitcoinPriceWithTypeSell
  }]
};
