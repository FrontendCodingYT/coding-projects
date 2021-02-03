import "./List.css";

import Contact from "../contact/Contact";
import { Contact as ContactModel } from "../../models/Contact";

interface Props {
  contacts: ContactModel[];
  onClick: Function;
}

export default function List({ contacts, onClick }: Props) {
  return (
    <div className="list-section">
      {contacts.map((c) => {
        return <Contact onClick={onClick} key={c.name} contact={c} />;
      })}
    </div>
  );
}
