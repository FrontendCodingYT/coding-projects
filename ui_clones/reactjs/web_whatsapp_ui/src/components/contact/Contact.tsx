import "./Contact.css";

import { Contact as ContactModel } from "../../models/Contact";

interface Props {
  contact: ContactModel;
  onClick: Function;
}

export default function Contact({ contact, onClick }: Props) {
  return (
    <div onClick={(e) => onClick(contact)} className="contact">
      <img alt="profile" className="profile-picture" src={contact.profile_image} />
      <div className="details">
        <span className="name">{contact.name}</span>
        <span className="status">{contact.status}</span>
      </div>
    </div>
  );
}
