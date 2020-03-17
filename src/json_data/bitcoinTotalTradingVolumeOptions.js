import * as bitcoinData from './trade';

const {bitcoinTotalTradingVolumeWithTypeSell, bitcoinTotalTradingVolumeWithTypeBuy } = bitcoinData;

export const bitcoinTotalVolumeOfTrade = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
    height: 280,
    scrollablePlotArea: {
      minWidth: 150,
      scrollPositionX: 0,
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
    text: 'Total Trading Volume',
    align: 'left',
    widthAdjust: 100,
    style: {
      fontSize: '1em',
      fontWeight: 600
    },
  },
  subtitle: {
    text: '<span style="display: block">Net: <span style="color: red">-'
      + (bitcoinTotalTradingVolumeWithTypeSell - bitcoinTotalTradingVolumeWithTypeBuy).toFixed(2)
      + '</span></span>',
    align: 'left',
    style: {fontSize: '0.875em'}
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',

  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      size: '50%',
      startAngle: 90,
      allowPointSelect: true,
      cursor: 'pointer',
      colors: ['#A3A0FB', '#7FE2FF'],
      dataLabels: {
        alignTo: 'connector',
        enabled: true,
        format: '{point.percentage:.1f} %',
        distance: 20,
        style: {
          fontSize: '0.875em'
        }
      },
      showInLegend: true
    }
  },
  legend: {
    layout: 'horizontal',
    align: 'center',
    itemDistance: 10,
    margin: 10,
    labelFormatter: function () {
      const label = this.name + '<br /> ' + '<span style="color: #AAA">' + (this.y).toFixed(2) + '</span>';
      return label;
    },
    itemStyle: {
      fontSize: '0.875em'
    }
  },
  series: [{
    name: 'Volume of Trade',
    colorByPoint: true,
    data: [{
      name: 'Buy',
      y: bitcoinTotalTradingVolumeWithTypeBuy,
      sliced: true,
      selected: true
    }, {
      name: 'Sell',
      y: bitcoinTotalTradingVolumeWithTypeSell
    }]
  }]
};
