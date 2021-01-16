import React from 'react';

import './AccountSection.css';

import IconButton from '../../iconButton/IconButton';
import Inbox from "@material-ui/icons/Inbox";
import PersonOutline from "@material-ui/icons/PersonOutline"
import Button from '../../button/Button';


export default function AccountSection() {
    return <div id="account-section">
        <IconButton number={60} tooltip="New Prime Loot" Icon={Inbox}/>
        <Button/>
        <Button/>
        <IconButton Icon={PersonOutline}/>
    </div>
}