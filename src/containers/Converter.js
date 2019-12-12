import React from 'react';
import { observer, inject } from "mobx-react";
import AmountInput from '../components/amountInput';
import CurrencySelect from '../components/CurrencySelect';
import ConversionDetails from '../components/conversionDetails';
import converter from './converter.css'

@inject('ratesStore')
@observer
export default class Converter extends React.Component {
  handleCange = e => { this.props.ratesStore.setSourceAmount(e.target.value); console.log(e.target.value) };
  onSelectFromChange = e => this.props.ratesStore.setBaseCoin(e.target.value);
  onSelectToChange = e => console.log(this.props.ratesStore.currencies);

  render() {
    const ratesStore = this.props.ratesStore;
    return (
      <div>
        <div className="converter-wrapper">
          <div className="from">
            <AmountInput
              onChange={this.handleCange}
              value={parseFloat(ratesStore.sourceAmount).toFixed(2)}
              disabled={false} />
            <CurrencySelect
              value={ratesStore.baseCoinValue.key}
              currencies={ratesStore.currencies}
              onChange={this.onSelectFromChange}
            />
          </div>
          <div className="to">
            <AmountInput
              onChange={this.handleCange}
              value={parseFloat(ratesStore.sourceAmount * ratesStore.targetCoinValue.value).toFixed(2)}
              disabled={true} />
            <CurrencySelect
              value={ratesStore.targetCoinValue.key}
              currencies={ratesStore.currencies}
              onChange={this.onSelectToChange}
            />
          </div>
        </div>
        <div className="conversion-details">
          <ConversionDetails
          baseCoin = {ratesStore.baseCoin}
            results={parseFloat(ratesStore.sourceAmount * ratesStore.targetCoinValue.value).toFixed(4)}
            timeStamp={ratesStore.timeStamp} />
        </div>
      </div>
    )
  }
}