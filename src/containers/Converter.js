import React from 'react';
import { observer, inject } from "mobx-react";
import AmountInput from '../components/amountInput';

@inject('ratesStore')
@observer
export default class Converter extends React.Component {
  render() {
    const ratesStore = this.props.ratesStore;
    return (
      <div>
        <AmountInput />
      </div>
    )
  }
}