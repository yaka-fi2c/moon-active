import React from 'react';
import { observer, inject } from 'mobx-react';
import todaysRate from './todaysRate.css'

@inject('ratesStore')
@observer
export default class TodaysRate extends React.Component {
  render() {
    const ratesStore = this.props.ratesStore;
    return (
      <div className="daily-rates-wrapper">
        <div className="daily-rates-header">
          <h2>Todays rate's</h2>
          <span>1 {ratesStore.baseConversionCoin.key} =</span>
        </div>
        <ul>
          {this.props.ratesStore.todaysRate.map((rate, ind) => (
            <li className="rate-list-item" key={ind}><span>{rate.key}</span><span>{rate.value.toFixed(4)}</span></li>
          ))}
        </ul>
      </div>
    )
  }
}
