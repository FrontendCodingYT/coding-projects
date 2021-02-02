import "./Navigation.css";

import MessageIcon from "@material-ui/icons/Message";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export default function Navigation() {
  return (
    <div className="navigation-section">
      <img
        alt="profile"
        className="profile-picture"
        src="assets/images/Frontend_Coding.png"
      />
      <div className="actions">
        <MessageIcon />
        <MoreVertIcon />
      </div>
    </div>
  );
}
