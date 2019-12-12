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
  onSelectChange = e => this.props.ratesStore.setBaseCoin(e.target.value);

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
            <CurrencySelect value={ratesStore.baseConverterCoin} currencies={ratesStore.currencies} onChange={this.onSelectChange} />
          </div>
          <div className="to">
            <AmountInput
              onChange={this.handleCange}
              value={parseFloat(ratesStore.sourceAmount).toFixed(2)}
              disabled={true} />
            <CurrencySelect value={ratesStore.baseConverterCoin} currencies={ratesStore.currencies} onChange={this.onSelectChange} />
          </div>
        </div>
        <div className="conversion-details">
          <ConversionDetails />
        </div>
      </div>
    )
  }
}