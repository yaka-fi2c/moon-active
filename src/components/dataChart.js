import React from 'react';
import { AreaChart } from 'react-charts-d3';
import dataChart from './dataChart.css';

export default class DataChart extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="chart-wrapper">
                <h2>{this.props.baseCoin} VS {this.props.targetCoin}</h2>
                <AreaChart data={this.props.rates} />
            </div>
        )
    }
}
