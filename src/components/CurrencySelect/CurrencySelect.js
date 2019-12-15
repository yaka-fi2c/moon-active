import React from 'react';
import { TextField, MenuItem, ListItemIcon } from '@material-ui/core';
import Icon from '../IconComponent/icon';
import './currencySelect.css';

export default class CurrencySelect extends React.Component {
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
                                <Icon icon={option.key} />
                            </ListItemIcon>
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        )
    }
}