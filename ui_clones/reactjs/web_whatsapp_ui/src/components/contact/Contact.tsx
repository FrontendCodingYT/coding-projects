import "./Contact.css";

import { Contact as ContactModel } from "../../models/Contact";

interface Props {
  contact: ContactModel;
}

export default function Contact({ contact }: Props) {
  return (
    <div className="contact">
      <img className="profile-picture" src={contact.profile_image} />
      <div className="details">
        <span className="name">{contact.name}</span>
        <span className="status">{contact.status}</span>
      </div>
    </div>
  );
}
