import React from 'react';
import { observer, inject } from "mobx-react";
import AmountInput from '../../components/AmountInput/AmountInput';
import CurrencySelect from '../../components/CurrencySelect/CurrencySelect';
import ConversionDetails from '../../components/ConversionDeatails/ConversionDetails';
import './converter.css'

@inject('ratesStore')
@observer
export default class Converter extends React.Component {
  handleCange = e => this.props.ratesStore.setSourceAmount(e.target.value);

  onSelectBaseChange = e => {
    this.props.ratesStore.setBaseCurrency(e.target.value);
    this.props.ratesStore.historicalRates();
    this.props.ratesStore.isIlsIncluded();
  };

  onSelectTargetChange = e => {
    this.props.ratesStore.setTargetCurrency(e.target.value);
    this.props.ratesStore.historicalRates();
    this.props.ratesStore.isIlsIncluded();
  };

  render() {
    const ratesStore = this.props.ratesStore;
    return (
      <div>
        <div className="converter-wrapper">
          <div className="from">
            <AmountInput
              onChange={this.handleCange}
              value={(Math.floor(ratesStore.sourceAmount * 20) / 20).toFixed(2)}
              disabled={false} />
            <CurrencySelect
              value={ratesStore.baseConversionCoin.key || "USD"}
              currencies={ratesStore.currencies}
              onChange={this.onSelectBaseChange}
              label={"Please select base currency"}
            />
          </div>
          <div className="to">
            <AmountInput
              onChange={this.handleCange}
              value={(Math.floor(ratesStore.calculatedAmount * 20) / 20).toFixed(2)}
              disabled={true} />
            <CurrencySelect
              value={ratesStore.targetConversionCoin.key || "ILS"}
              currencies={ratesStore.currencies}
              onChange={this.onSelectTargetChange}
              label={"Please select target currency"}
            />
          </div>
        </div>
        <div className="conversion-details">
          <ConversionDetails
            baseCoin={ratesStore.baseConversionCoin.key}
            targetCoin={ratesStore.targetConversionCoin.key}
            results={(Math.floor(10000 * ratesStore.calculatedAmount) / 10000).toFixed(4)}
            timeStamp={ratesStore.timeStamp}
            sourceAmount={ratesStore.sourceAmount}/>
        </div>
      </div>
    )
  }
}