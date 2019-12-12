import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import "./amountInput.css";

export default class AmountInput extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className="input-wrapper">
                <TextField type="number"
                    step="0.1"
                    onChange={this.props.onChange}
                    value={this.props.value}
                    disabled={this.props.disabled}
                    id="outlined-basic"
                    name="outlined-basic"
                    variant="outlined" 
                    fullWidth
                    />
            </div>
        )
    }
}