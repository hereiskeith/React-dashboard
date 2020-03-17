import React from 'react';
import './styles-table.scss';
import { bitcoin } from '../../../json_data/trade';

const Head = () => {
  return Object.keys(bitcoin[0]).map((each, index) => {
    return (
      <th className='head-element' key={`thead-${index}`}>{each.toUpperCase()}</th>
    )
  })
};

const TableData = () => {
  return bitcoin.map(each => {
    const formattedDate = new Date(each.date).toString();
    const reFormattedDate = formattedDate.slice(0, formattedDate.indexOf('G')-1) + '.'
      + new Date(each.date).getMilliseconds();
    return (
      <tr key={each.tid}>
        <td className='body-row-element'>{each.tid}</td>
        <td className='body-row-element'>{reFormattedDate}</td>
        <td className='body-row-element'>{each.type}</td>
        <td className='body-row-element'>{each.price.toFixed(3)}</td>
        <td className='body-row-element'>{each.amount.toFixed(3)}</td>
      </tr>
    )
  })
};

const Table = props => {
  return (
    <div className={'bitcoin-table-wrapper ' + props.className}>
      <h4 className={'bitcoin-table-title'}>Referrer</h4>
      <table className='bitcoin-table'>
        <thead>
          <tr>
            <Head />
          </tr>
        </thead>
        <tbody>
          <TableData />
        </tbody>
      </table>
    </div>

  )
};

export default Table;