import React, { CSSProperties } from 'react';

import './NavigationSection.css';

import twitchLogo from "../../../assets/images/twitch_logo.png";
import Link from '../../link/Link';
import IconButton from '../../iconButton/IconButton';

const linkStyle: CSSProperties = {
    margin: "0px 20px"
}

export default function NavigationSection() {
    return <div id="navigation-section">
        <a className="logo" href="/"><img alt="Twitch logo" src={twitchLogo}/></a>
        <Link style={linkStyle} label="Browse"/>
        <IconButton/>
    </div>
}