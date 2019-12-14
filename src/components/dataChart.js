import React from 'react';
import { Bar, Line, Pie, Area } from 'react-chartjs-2';
import { AreaChart } from 'react-charts-d3';
import dataChart from './dataChart.css';
export default class DataChart extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const axisConfig = {
            showXAxis: true,
            showXAxisLabel: true,
            xLabel: 'Time period',
            xLabelPosition: 'right',
            showYAxis: true,
            showYAxisLabel: true,
            yLabel: 'Coin rate',
            yLabelPosition: 'top',
        }
        return (
            <div className="chart-wrapper">
                <h2>{this.props.baseCoin} VS {this.props.targetCoin}</h2>
                {/* <AreaChart height={300}
                    axisConfig={axisConfig}
                    data={this.props.rates}
                    noDataMessage={"Unavle to fetch rates, try again"}
                /> */}
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
