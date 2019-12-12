import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import currencySelect from './currencySelect.css';

export default class CurrencySelect extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="select-wrapper">
                    <TextField
                        id="filled-select-currency"
                        select
                        label="Select"
                        helperText="Please select your currency"
                        variant="outlined"
                        onChange={this.props.onChange}
                        value={this.props.value}
                        fullWidth
                    >
                        {this.props.currencies.map((option, ind) => (
                            <MenuItem key={ind} value={option.key}>
                                {option.key}
                            </MenuItem>
                        ))}
                    </TextField>
            </div>
        )
    }
}