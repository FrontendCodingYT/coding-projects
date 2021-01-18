import React from 'react';
import IconButton, { TooltipDirection } from '../iconButton/IconButton';

import './Sidebar.css';

import ArrowBack from "@material-ui/icons/ArrowBack"

export default function Sidebar() {
    return <div id="sidebar">
        <div className="top-section"><span>Recommended Channels</span><IconButton tooltip="Collapse" tooltipDirection={TooltipDirection.RIGHT} Icon={ArrowBack}/></div>
        <div className="users-section"></div>
        <div className="twitch-message-section"></div>
    </div>
}