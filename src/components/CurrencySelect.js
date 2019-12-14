import React from 'react';
import { TextField, MenuItem, ListItemIcon } from '@material-ui/core';
import currencySelect from './currencySelect.css';
import flags from "../flags/flags.css"
import Icon from './icon';

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
                    helperText={this.props.label}
                    variant="outlined"
                    onChange={this.props.onChange}
                    value={this.props.value}
                    fullWidth
                >
                    {this.props.currencies.map((option, ind) => (
                        <MenuItem key={ind} value={option.key}>
                            {option.key}
                            <ListItemIcon>
                                <Icon className="flag" icon={option.key} />
                            </ListItemIcon>
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        )
    }
}