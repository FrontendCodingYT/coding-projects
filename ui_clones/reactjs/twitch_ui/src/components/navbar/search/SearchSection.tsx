import React from 'react';
import Search from "@material-ui/icons/Search";

import './SearchSection.css';

export default function SearchSection() {
    return <div id="search-section">
        <input className="search-bar" placeholder="Search"></input>
        <button className="search-button"><Search/></button>
    </div>
}