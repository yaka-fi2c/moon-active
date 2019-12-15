import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default class Header extends React.Component {
    render() {
        return (
            <AppBar position="static" style={{alignItems: "center"}}>
                <Toolbar>
                    <Typography varient="h1">
                        Exchange Rate Application by Yakir Fitousi.
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

