import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import contactsData from "../contacts.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : contactsData;
  });

  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    const isDuplicate = contacts.some(
      (contact) =>
        contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isDuplicate) {
      toast.error(`${newContact.name} is already in contacts!`);
      return;
    }

    setContacts((prevContacts) => [...prevContacts, newContact]);
    toast.success(`${newContact.name} added successfully!`);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
    toast.info("Contact deleted.");
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = (e) => setFilter(e.target.value);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox filter={filter} onFilterChange={handleFilterChange} />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
      <ToastContainer />
    </div>
  );
};

export default App;