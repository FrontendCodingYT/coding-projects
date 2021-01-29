import React from 'react';
import AccountSection from './account/AccountSection';

import './Navbar.css';
import NavigationSection from './navigation/NavigationSection';
import SearchSection from './search/SearchSection';

export default function Navbar() {
    return <nav id="navbar">
        <NavigationSection/>
        <SearchSection/>
        <AccountSection/>
    </nav>
}