import React from 'react';

import './NavigationSection.css';

import twitchLogo from "../../../assets/images/twitch_logo.png";

export default function NavigationSection() {
    return <div id="navigation-section">
        <a href="/"><img className="logo" src={twitchLogo}/></a>
    </div>
}