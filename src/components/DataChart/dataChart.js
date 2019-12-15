import React from 'react';
import {  Line } from 'react-chartjs-2';
import './dataChart.css';
export default class DataChart extends React.Component {

    render() {
        return (
            <div className="chart-wrapper">
                <h2>{this.props.baseCoin} VS {this.props.targetCoin}</h2>
                <div>
                    <Line
                        width={600}
                        height={300}
                        data={this.props.rates}
                    />
                </div>
            </div>
        )
    }
}
