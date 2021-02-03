import { useState } from "react";
import "./Chatbox.css";
import contacts from "../../data/contacts.json";

import Details from "../details/Details";
import Navigation from "../navigation/Navigation";
import Search from "../search/Search";
import List from "../list/List";
import Chat from "../chat/Chat";
import MessageInput from "../messageInput/MessageInput";
import { Contact as ContactModel } from "../../models/Contact";

export default function Chatbox() {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [searchValue, setSearchValue] = useState("")

  function toggleNavigation() {
    setNavigationOpen(!navigationOpen);
  }

  function onClickOnContact(contact: ContactModel) {
    setSelectedContact(contact);
  }
  
  function updateSearchValue(value: string) {
    setSearchValue(value);
  }

  function getFilteredContacts(contacts: ContactModel[]) {
    const filteredContacts = contacts.filter(c => {
      if(c.name.toLocaleUpperCase().includes(searchValue.toLocaleUpperCase())) {
        return true;
      } else {
        return false;
      }
    })
    return filteredContacts;
  }

  return (
    <div className={`chatbox ${(navigationOpen) ? 'chatbox-navigation-open' : 'chatbox-navigation-closed'}`}>
      <Navigation navigationOpen={navigationOpen} toggleNavigation={toggleNavigation}/>
      <Search updateSearchValue={updateSearchValue} searchValue={searchValue}/>
      <List onClick={onClickOnContact} contacts={getFilteredContacts(contacts)}/>
      <Details contact={selectedContact}/>
      <Chat messages={selectedContact.messages}/>
      <MessageInput/>
    </div>
  );
}
