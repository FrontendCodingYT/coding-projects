import React, { useState } from "react";

import "./Landing.css";
import Searchbar from "../searchbar/Searchbar";
import Button from "../button/Button";

export default function Landing() {
  const [searchValue, setSearchValue] = useState("");

  function onSearchValueChange(newValue: string) {
    setSearchValue(newValue);
  }

  return (
    <div>
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
      <div className="content-container"></div>
    </div>
  );
}
