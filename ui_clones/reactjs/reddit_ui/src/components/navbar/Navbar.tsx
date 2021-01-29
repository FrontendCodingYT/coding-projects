import React from 'react';

import './Navbar.css';
import Logo from './logo/Logo';
import Searchbar from './searchbar/Searchbar';
import Actions from './actions/Actions';

export default function Navbar() {
    return <div className="navbar">
        <Logo/>
        <Searchbar/>
        <Actions/>
    </div>
}