import React from 'react';
import { observer, inject } from "mobx-react";

@inject('ratesStore')
@observer
export default class HistoricalRates extends React.Component {
  render() {
    const ratesStore = this.props.ratesStore;
    return (
      <div>
        <p>{ratesStore.historicalRates}</p>
      </div>
    )
  }
}