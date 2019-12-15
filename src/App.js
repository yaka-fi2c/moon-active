import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodaysRate from './containers/TodaysRates/TodaysRate';
import DetailsTabs from './containers/DetailsTabs/DetailsTabs';
import { Grid, Button } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import "typeface-roboto";
import Converter from './containers/Converter/Converter';
import HistoricalRates from './containers/HistoricalRates/HistoricalRates';

@inject('ratesStore')
@observer
class App extends React.Component {
  componentDidMount() {
    this.props.ratesStore.todaysRatesData();
  }

  tabsLabel = ["Currency converter", "Historical Rates"];

  tabComponents = [
    <Converter />,
    <HistoricalRates />
  ]

  render() {
    return (
      <div className="App">
        <Header />
        <div className="content-wrapper">
          <Grid
            container
            justify="space-around"
          >
            <Grid
              item
              xs={12}
              sm={6}>
              <DetailsTabs tabsLabel={this.tabsLabel}>
                {activeTab => {
                  return this.tabComponents[activeTab];
                }}
              </DetailsTabs>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
            >
              <TodaysRate />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
