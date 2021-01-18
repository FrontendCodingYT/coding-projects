import React from 'react';
import IconButton, { TooltipDirection } from '../iconButton/IconButton';

import './Sidebar.css';

import ArrowBack from "@material-ui/icons/ArrowBack"

import users from "../../data/users.json"
import User from '../user/User';
import Button from '../button/Button';

export default function Sidebar() {
    return <div id="sidebar">
        <div className="top-section"><span>Recommended Channels</span><IconButton tooltip="Collapse" tooltipDirection={TooltipDirection.RIGHT} Icon={ArrowBack}/></div>
        <div className="users-section">
            {users.map(u => {
                return <User key={u.username} user={u}/>
            })}
        </div>
        <div className="twitch-message-section">
            <p className="title">Join the <span>Twitch</span> community!</p>
            <p className="description">Discover the best live streams anywhere.</p>
            <Button label="Sign up"/>
        </div>
    </div>
}