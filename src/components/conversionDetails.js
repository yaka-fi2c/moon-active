import React from 'react';
import conversionDetails from './conversionDetails.css';

export default class ConversionDetails extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className="details-wrapper">
                <p>Your rate:</p>
                <h2>{this.props.baseCoin} 1</h2>
                <p>Last updated</p>
            </div>
        )
    }
}