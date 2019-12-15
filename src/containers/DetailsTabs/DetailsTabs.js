import React from 'react';

import { Box, Tabs, Tab } from '@material-ui/core';
import './detailsTabs.css';


export default function DetailsTabs(props) {
    const [activeTab, setActiveTab] = React.useState(0);

    const handleChange = (event, tabIndex) => {
        setActiveTab(tabIndex);
    };

    const renderTabsLabel = labels => labels.map((label, index) => <Tab key={index} label={label}></Tab>)

    return (
        <Box  border={1}>
            <Tabs
                value={activeTab}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="tabs"
            >
                {renderTabsLabel(props.tabsLabel)}
            </Tabs>
            <Box
                width={600}
                p={2}>
                {props.children(activeTab)}
            </Box>
        </Box>
    );
}