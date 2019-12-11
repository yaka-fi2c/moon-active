import React from 'react';
import { TextField } from '@material-ui/core';
import "./amountInput.css";

export default class AmountInput extends React.Component {
    render() {
        return (
            <div>
                <div className="input-wrapper">
                    <TextField id="outlined-basic" label="from" variant="outlined" />
                </div>
            </div>
        )
    }
}