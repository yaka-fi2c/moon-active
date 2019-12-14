import React from 'react';
import header from './header.css'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <header>
                <h1>
                    Exchange Rate Application by Yakir Fitousi.
                </h1>
            </header>
        );
    }
}

