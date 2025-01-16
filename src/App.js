import React, { useState, useEffect } from "react";
import "./App.css";
import AddContactForm from "./components/AddContactForm";
import ContactList from "./components/ContactList";
import DeleteContacts from "./components/DeleteContacts";

function App() {
  const [view, setView] = useState("add"); 
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(savedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, phone) => {
    const newContact = { name, phone };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <nav>
        <button onClick={() => setView("add")}>
          <img src="/contact_new_icon_180793.png" alt="Add" />
          Add
        </button>
        <button onClick={() => setView("list")}>
          <img src="/contactlist_theuser_802.png" alt="ContactList" />
          Contact list
        </button>
        <button onClick={() => setView("delete")}>
          <img src="/window_deleted_10155.png" alt="delete" />
          Delete
        </button>
      </nav>
      <main>
  {(() => {
    if (view === "add") {
      return <AddContactForm onAddContact={addContact} />;
    } else if (view === "list") {
      return <ContactList contacts={contacts} />;
    } else if (view === "delete") {
      return <DeleteContacts contacts={contacts} onDeleteContact={deleteContact} />;
    }
  })()}
</main>

    </div>
  );
}

export default App;
