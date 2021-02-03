import "./Search.css";

import SearchIcon from "@material-ui/icons/Search";

interface Props {
  updateSearchValue: Function;
  searchValue: string;
}

export default function Search({updateSearchValue, searchValue}: Props) {
  function onSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateSearchValue(e.target.value);
  }

  return (
    <div className="search-section">
      <label htmlFor="searchbar">
        <SearchIcon />
      </label>
      <input id="searchbar" placeholder="Search contacts" value={searchValue} onChange={(e) => {onSearchChange(e)}} />
    </div>
  );
}
