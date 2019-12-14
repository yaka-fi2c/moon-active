import React from 'react';
import './App.css';
import Header from './components/Header';
import TodaysRate from './containers/TodaysRate';
import DetailsTabs from './containers/DetailsTabs';
import Grid from '@material-ui/core/Grid';
import { inject, observer } from 'mobx-react';

@inject('ratesStore')
@observer
class App extends React.Component {
  componentDidMount() {
    this.props.ratesStore.todaysRatesData();
  }
  render() {
    // const ratesStore = this.props.ratesStore;
    return (
      <div className="App">
        <Header />
        <div className="content-wrapper">
          <Grid container justify="space-around">
            <Grid item xs={12} sm={6}>
              <DetailsTabs />
            </Grid>
            <Grid item xs={12} sm={4} >
              <TodaysRate />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
