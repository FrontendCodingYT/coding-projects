import "./List.css";

import Contact from "../contact/Contact";
import { Contact as ContactModel } from "../../models/Contact";

interface Props {
  contacts: ContactModel[];
}

export default function List({ contacts }: Props) {
  return (
    <div className="list-section">
      {contacts.map((c) => {
        return <Contact key={c.name} contact={c} />;
      })}
    </div>
  );
}
