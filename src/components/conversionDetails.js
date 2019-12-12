import React from 'react';
import conversionDetails from './conversionDetails.css';

export default class ConversionDetails extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className="details-wrapper">
                <p>Your rate: {this.props.results}</p>
                <h2>1 {this.props.baseCoin}</h2>
                <p>Last updated: {this.props.timeStamp}</p>
            </div>
        )
    }
}