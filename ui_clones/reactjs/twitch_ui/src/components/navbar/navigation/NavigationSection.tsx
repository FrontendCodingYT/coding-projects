import React, { CSSProperties } from 'react';

import './NavigationSection.css';

import twitchLogo from "../../../assets/images/twitch_logo.png";
import Link from '../../link/Link';

const linkStyle: CSSProperties = {
    margin: "0px 20px"
}

export default function NavigationSection() {
    return <div id="navigation-section">
        <a className="logo" href="/"><img src={twitchLogo}/></a>
        <Link style={linkStyle} label="Browse"/>
        <Link style={linkStyle} label="Esports"/>
        <Link style={linkStyle} label="Music"/>
    </div>
}