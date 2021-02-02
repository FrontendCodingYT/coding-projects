import "./Search.css";

import SearchIcon from "@material-ui/icons/Search";

export default function Search() {
  return (
    <div className="search-section">
      <label htmlFor="searchbar">
        <SearchIcon />
      </label>
      <input id="searchbar" placeholder="Search contacts" />
    </div>
  );
}
