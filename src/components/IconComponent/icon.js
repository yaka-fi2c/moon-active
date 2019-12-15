import React from 'react';
import '../../assets/flags/flags.css'

export default class Icon extends React.Component {
    render() {
        return (
            <div className={'flag ' + this.props.icon}><span className={'flag-text ' + this.props.icon}></span></div>
        );
    }
}