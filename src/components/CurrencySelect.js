import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';

export default class CurrencySelect extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div>
                    <TextField
                        id="filled-select-currency"
                        select
                        label="Select"
                        helperText="Please select your currency"
                        variant="outlined"
                        onChange={this.props.onChange}
                        value={this.props.value}
                    >
                        {this.props.currencies.map((option, ind) => (
                            <MenuItem key={ind} value={option.key}>
                                {option.key}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
            </div>
        )
    }
}