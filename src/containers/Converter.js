import React from 'react';
import { observer, inject } from "mobx-react";
import AmountInput from '../components/amountInput';
import CurrencySelect from '../components/CurrencySelect';
import ConversionDetails from '../components/conversionDetails';
import converter from './converter.css'

@inject('ratesStore')
@observer
export default class Converter extends React.Component {
  handleCange = e => this.props.ratesStore.setSourceAmount(e.target.value);
  onSelectBaseChange = e => this.props.ratesStore.setBaseCurrency(e.target.value);
  onSelectTargetChange = e => this.props.ratesStore.setTargetCurrency(e.target.value);

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
              value={ratesStore.baseConversionCoin.key}
              currencies={ratesStore.currencies}
              onChange={this.onSelectBaseChange}
            />
          </div>
          <div className="to">
            <AmountInput
              onChange={this.handleCange}
              value={parseFloat(ratesStore.sourceAmount * ratesStore.targetConversionCoin.value).toFixed(2)}
              disabled={true} />
            <CurrencySelect
              value={ratesStore.targetConversionCoin.key}
              currencies={ratesStore.currencies}
              onChange={this.onSelectTargetChange}
            />
          </div>
        </div>
        <div className="conversion-details">
          <ConversionDetails
            baseCoin={ratesStore.baseCoin}
            results={parseFloat(ratesStore.sourceAmount * ratesStore.targetConversionCoin.value).toFixed(4)}
            timeStamp={ratesStore.timeStamp} />
        </div>
      </div>
    )
  }
}