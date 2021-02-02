import "./Details.css";

import { Contact as ContactModel } from "../../models/Contact";

import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";

interface Props {
  contact: ContactModel;
}

export default function Details({contact}: Props) {
  return (
    <div className="details-section">
      <div className="user">
        <img alt="profile" className="profile-picture" src={contact.profile_image} />
        <div className="details">
          <span className="name">{contact.name}</span>
          <span className="last-seen">Time</span>
        </div>
      </div>
      <div className="actions">
        <AttachFileIcon />
        <MoreVertIcon />
      </div>
    </div>
  );
}
