import React from "react";
import "./Navbar.css";

import Searchbar from "../searchbar/Searchbar";
import Button from "../button/Button";

interface Props {
  searchValue: string;
  onSearchValueChange: Function;
}

export default function Navbar({ searchValue, onSearchValueChange }: Props) {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo-section hoverable">Instagram</div>
        <div className="searchbar-section">
          <Searchbar searchValue={searchValue} onSearchValueChange={onSearchValueChange} />
        </div>
        <div className="actions-section">
          <Button label="Login In" primary />
          <Button label="Sign Up" />
        </div>
      </div>
    </div>
  );
}
