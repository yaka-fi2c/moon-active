import React from 'react';
import Converter from './Converter';
import HistoricalRates from './HistoricalRates';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";

import detailsTabs from './detailsTabs.css';



export default function DetailsTabs() {
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BrowserRouter>
            <div className="tabs-wrapper">
                <Paper square>
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        aria-label="tabs"
                    >
                        <Tab component={Link} to="/converter" label="Currency converter" />
                        <Tab component={Link} to="/historical-rates" label="Historical rates" />
                    </Tabs>
                </Paper>
                <Switch>
                    <Route path="/converter" component={Converter} />
                    <Route path="/historical-rates" component={HistoricalRates} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}