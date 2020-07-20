import React from "react";
import SearchIcon from "@material-ui/icons/Search";

import "./Searchbar.css";

interface Props {
  searchValue: string;
  onSearchValueChange: Function;
}

export default function Searchbar({ searchValue, onSearchValueChange }: Props) {
  return (
    <div className="searchbar-container">
      <input
        onChange={(e) => {
          onSearchValueChange(e.target.value);
        }}
        id="searchbar"
      />
      {searchValue === "" && (
        <div
          onClick={(e) => {
            document.getElementById("searchbar")?.focus();
          }}
          className="searchbar-placeholder"
        >
          <SearchIcon id="searchbar-placeholder-icon" />
          <span>Search</span>
        </div>
      )}
    </div>
  );
}
