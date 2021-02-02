import { useState } from "react";
import "./Chatbox.css";

import MessageIcon from "@material-ui/icons/Message";
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SearchIcon from "@material-ui/icons/Search";

export default function Chatbox() {
  const [navigationOpen, setNavigationOpen] = useState(false);

  return (
    <div className={`chatbox ${(navigationOpen) ? 'chatbox-navigation-open' : 'chatbox-navigation-closed'}`}>
      <div className="navigation">
        <img className="profile-picture" src="assets/images/Frontend_Coding.png"/>
        <div className="actions">
          <MessageIcon/>
          <MoreVertIcon/>
        </div>
      </div>
      <div className="search">
        <label htmlFor="searchbar">
          <SearchIcon/>
        </label>
        <input id="searchbar" placeholder="Search contacts"/>
      </div>
      <div className="list"></div>
      <div className="details"></div>
      <div className="chat"></div>
      <div className="message"></div>
    </div>
  );
}
