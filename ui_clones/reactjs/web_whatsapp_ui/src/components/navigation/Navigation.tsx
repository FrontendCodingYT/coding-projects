import "./Navigation.css";

import MessageIcon from "@material-ui/icons/Message";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

interface Props {
  navigationOpen: boolean;
  toggleNavigation: Function;
}

export default function Navigation({navigationOpen, toggleNavigation}: Props) {
  if(navigationOpen) {
    return (
      <div className="navigation-section">
        <ArrowBackIcon onClick={(e) => toggleNavigation()} className="back icon-clickable"/>
        <span className="new-chat">New chat</span>
      </div>
    );
  } else {
    return (
      <div className="navigation-section">
        <img
          alt="profile"
          className="profile-picture"
          src="assets/images/Frontend_Coding.png"
        />
        <div className="actions">
          <MessageIcon className="icon-clickable" onClick={(e) => toggleNavigation()} />
          <MoreVertIcon className="icon-clickable" />
        </div>
      </div>
    );
  }
}
