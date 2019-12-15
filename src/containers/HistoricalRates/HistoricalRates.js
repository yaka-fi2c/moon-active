import React from 'react';
import { observer, inject } from "mobx-react";
import DataChart from '../../components/DataChart/dataChart';
import {Paper, Tabs, Tab} from '@material-ui/core';
 
@inject('ratesStore')
@observer
export default class HistoricalRates extends React.Component {
  componentWillMount() {
    this.props.ratesStore.historicalRates();
  }
  render() {
    const ratesStore = this.props.ratesStore;
    const handleChange = (event, value) => {
      ratesStore.setHistoryTabValue(value)
      switch (value) {
        case 0:
          ratesStore.setPeriod(30);
          break;
        case 1:
          ratesStore.setPeriod(90);
          break;
        case 2:
          ratesStore.setPeriod(180);
          break;
        case 3:
          ratesStore.setPeriod(365);
          break
        default:
          ratesStore.setPeriod(30);
      }
    };

    const dataCha = {
      labels: ratesStore.ratesHistoryValues.map(el => el.x),
      datasets: [
        {
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 2,
          pointHitRadius: 10,
          label: 'rate was:',
          data: ratesStore.ratesHistoryValues.map(el => el.y)
        }
      ]
    }

    return (
      <div>
        <Paper square>
          <Tabs
            value={ratesStore.historyTab}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Last month" />
            <Tab label="Last 3 months" />
            <Tab label="Last 6 month" />
            <Tab label="Last 12 month" />
          </Tabs>
        </Paper>
        <DataChart
          rates={dataCha}
          baseCoin={ratesStore.baseConversionCoin.key}
          targetCoin={ratesStore.targetConversionCoin.key}
        />
      </div >
    )
  }
}
