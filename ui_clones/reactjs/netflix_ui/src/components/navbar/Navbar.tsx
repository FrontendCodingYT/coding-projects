import React from "react";

import "./Navbar.css";

import SearchIcon from "@material-ui/icons/Search";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

interface Props {
  only_logo: boolean;
  profile_url?: string;
}

export default function Navbar({ only_logo, profile_url }: Props) {
  if (only_logo) {
    return (<div className="navbar-container">
      <img className="logo" src="assets/images/netflix.svg" />
    </div>);
  } else {
    return (
      <div className="navbar-container">
        <img className="logo" src="assets/images/netflix.svg" />
        <button className="button-tertiary button-tertiary-active">Home</button>
        <button className="button-tertiary">Series</button>
        <button className="button-tertiary">Films</button>
        <button className="button-tertiary">Latest</button>
        <button className="button-tertiary">My List</button>

        <div className="spacer"></div>

        <SearchIcon />
        <CardGiftcardIcon />
        <NotificationsIcon />
        {profile_url && <img className="profile-image" src={profile_url} />}
        <ArrowDropDownIcon />
      </div>
    );
  }
}
