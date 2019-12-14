import React from 'react';
import { observer, inject } from "mobx-react";
import DataChart from '../components/dataChart';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function DisabledTabs() {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Paper square>
      <Tabs
        value={value}
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
  );
}

@inject('ratesStore')
@observer
export default class HistoricalRates extends React.Component {
  render() {

    const handleChange = (event, newValue) => {
      console.log(event, newValue)
    };
    const ratesStore = this.props.ratesStore;

    const data = [
      {
        key: 'Last Month', values: [...ratesStore.ratesHistoryValues]
      }
    ];

    return (
      <div>
        <DisabledTabs />
        <DataChart
          rates={data}
          baseCoin={ratesStore.baseConversionCoin.key}
          targetCoin={ratesStore.targetConversionCoin.key}
        />
      </div>
    )
  }
}
