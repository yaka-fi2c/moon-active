import React from 'react';
import flags from '../flags/flags.css'

export default class Icon extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <div className={'flag ' + this.props.icon}><span className={'flag-text ' + this.props.icon}></span></div>
        );
    }
}