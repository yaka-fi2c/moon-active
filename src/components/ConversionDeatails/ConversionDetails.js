import React from 'react';
import './conversionDetails.css';

export default class ConversionDetails extends React.Component {
    render() {

        return (
            <div className="details-wrapper">
                <p>Your rate:</p>
                <h2>1 {this.props.baseCoin} = {this.props.targetCoin} {this.props.results}</h2>
                <p>Last updated: {this.props.timeStamp}</p>
            </div>
        )
    }
}