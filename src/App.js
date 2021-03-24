import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => setFilter(e.currentTarget.value);

  const formSubmitHandler = (name, number) => {
    const isUnicContact = !!contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isUnicContact) {
      alert(`${name} is alredy in contacts.`);
      return;
    }

    const newContact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    setContacts([...contacts, newContact]);
  };

  const getVisibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = (contactId) => {
    const deleteCon = contacts.filter((contact) => contact.id !== contactId);
    setContacts([...deleteCon]);
  };

  useEffect(() => {
    const webContacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(webContacts);
    if (parsedContacts) {
      setContacts([...parsedContacts]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter handleFilterChange={handleFilterChange} filter={filter} />
      <ContactList
        visibleContacts={getVisibleContacts}
        deleteContact={deleteContact}
      />
    </>
  );
};

export default App;
