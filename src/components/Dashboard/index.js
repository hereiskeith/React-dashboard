import React from 'react';
import './styles.scss';
import HighchartsComponent from './components/HighchartsComponent';
import { bitcoinPrice } from '../../json_data/bitcoinPriceOptions';
import { bitcoinTradingVolumePerTime } from '../../json_data/bitcoinTradingVolumePerTimeOptions';
import { bitcoinTotalVolumeOfTrade } from '../../json_data/bitcoinTotalTradingVolumeOptions';
import * as bitcoinData from '../../json_data/trade';
import MixedWithHighcharts from './components/MixedWithHighcharts';
import { bitcoinTurnoverPerSecondWithBuy } from '../../json_data/bitcoinTurnoverPerSecondWithBuy';
import { bitcoinTurnoverPerSecondWithSell } from '../../json_data/bitcoinTurnoverPerSecondWithSell';
import { bitcoinTurnoverPerSecondNet } from '../../json_data/bitcoinTurnoverPerSecondNet';
import Table from './components/Table';

const Dashboard = props => {

  let turnoverBuy = bitcoinData.bitcoinTurnoverPerSecondWithTypeBuy;
  let turnoverSell = bitcoinData.bitcoinTurnoverPerSecondWithTypeSell;
  let turnoverNet = bitcoinData.bitcoinTurnoverPerSecondNet;

  // Following are variables for texts of the 'bitcoin-turnover-per-second' charts
  let mostRecentTurnoverBuy = `$${((turnoverBuy[turnoverBuy.length-1][1])/1000).toFixed(2)}K`;
  let mostRecentPercentageBuy =
    `${(((turnoverBuy[turnoverBuy.length-1][1]/turnoverBuy[turnoverBuy.length-2][1])-1)*100).toFixed(2)}%`;

  let mostRecentTurnoverSell = `$${((turnoverSell[turnoverSell.length-1][1])/1000).toFixed(2)}K`;
  let mostRecentPercentageSell = `${((turnoverSell[turnoverSell.length-1][1]/
    turnoverSell[turnoverSell.length-2][1]-1)*100).toFixed(2)}%`;

  let mostRecentTurnoverNet = `$${((turnoverNet[turnoverNet.length-1][1])/1000).toFixed(2)}K`;
  let mostRecentPercentageNet = `${((turnoverNet[turnoverNet.length-1][1] - turnoverNet[turnoverNet.length-2][1])/
    (Math.abs(turnoverNet[turnoverNet.length-2][1]))*100).toFixed(2)}%`;


  return (
    <div className='dashboard-wrapper'>
      <div className='dashboard-overview'>Overview</div>

      <MixedWithHighcharts
        className='bitcoin-turnover-per-second-buy'
        options={bitcoinTurnoverPerSecondWithBuy}
        title='Recent Turnover/s (Buy)'
        number={mostRecentTurnoverBuy}
        subNumber={mostRecentPercentageBuy}/>

      <MixedWithHighcharts
        className='bitcoin-turnover-per-second-sell'
        options={bitcoinTurnoverPerSecondWithSell}
        title='Recent Turnover/s (Sell)'
        number={mostRecentTurnoverSell}
        subNumber={mostRecentPercentageSell}/>

      <MixedWithHighcharts
        className='bitcoin-turnover-per-second-net'
        options={bitcoinTurnoverPerSecondNet}
        title='Recent Turnover/s (Net)'
        number={mostRecentTurnoverNet}
        subNumber={mostRecentPercentageNet}/>

      <HighchartsComponent
        className='bitcoin-price'
        options={bitcoinPrice} />

      <HighchartsComponent
        className='bitcoin-trading-volume'
        options={bitcoinTradingVolumePerTime} />

      <Table className='bitcoin-referer-table'/>

      <HighchartsComponent
        className='bitcoin-total-trading-volume'
        options={bitcoinTotalVolumeOfTrade} />
    </div>
  )
};

export default Dashboard;