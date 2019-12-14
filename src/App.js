import React from 'react';
import './App.css';
import Header from './components/Header';
import TodaysRate from './containers/TodaysRate';
import DetailsTabs from './containers/DetailsTabs';
import { inject, observer } from 'mobx-react';
import { getHistoricalRates } from './services/backendService';

@inject('ratesStore')
@observer
class App extends React.Component {
  componentDidMount() {
    this.props.ratesStore.todaysRatesData();
  }
  render() {
    const ratesStore = this.props.ratesStore;
    return (
      <div className="App">
        <Header />
        <div className="content-wrapper">
          <DetailsTabs />
          <TodaysRate />
        </div>
      </div>
    );
  }
}

export default App;
