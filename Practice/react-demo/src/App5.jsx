/**
 * TODO: Contact list application
 */
import { useState } from "react";
import ContactForm from "./components/contact-app/ContactForm";
import Table from "./components/contact-app/Table";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const getContact = (contact) => {
    setContacts([contact, ...contacts]);
  };

  return (
    <div>
      <h1>Contact App</h1>
      <ContactForm getContact={getContact} />
      <br />
      <Table contacts={contacts} />
    </div>
  );
};

export default App;
