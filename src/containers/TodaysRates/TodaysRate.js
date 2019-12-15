import React from 'react';
import { observer, inject } from 'mobx-react';
import Icon from "../../components/IconComponent/icon"
import './todaysRate.css'

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
          {ratesStore.todaysRateCalc.map((rate, ind) => (
            <li
              className="rate-list-item"
              key={ind}>
              <div>
                <Icon icon={rate.key} />
                <span>{rate.key}</span>
              </div>
              <span>{(Math.floor(10000 * rate.value) / 10000).toFixed(4)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
