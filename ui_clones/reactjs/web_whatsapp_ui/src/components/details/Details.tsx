import "./Details.css";

import { Contact as ContactModel } from "../../models/Contact";

import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";

interface Props {
  contact: ContactModel;
}

export default function Details({ contact }: Props) {
  function getLastSeen(last_seen: string) {
    const date = new Date(last_seen);

    let suffix = "";

    let hours = date.getHours();

    if (hours > 12) {
      suffix = "PM";
      hours -= 12;
    } else {
      suffix = "AM";
    }

    return `last seen ${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()} at ${hours}:${date.getMinutes()} ${suffix}`;
  }
  return (
    <div className="details-section">
      <div className="user">
        <img
          alt="profile"
          className="profile-picture"
          src={contact.profile_image}
        />
        <div className="details">
          <span className="name">{contact.name}</span>
          <span className="last-seen">{getLastSeen(contact.last_seen)}</span>
        </div>
      </div>
      <div className="actions">
        <AttachFileIcon className="icon-clickable" />
        <MoreVertIcon className="icon-clickable" />
      </div>
    </div>
  );
}
