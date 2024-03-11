import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  }

  // fetch data from local storage on page refresh
  useEffect(() => {
    const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log("retrievedContacts", retrievedContacts);
    if (retrievedContacts) {
      setContacts(retrievedContacts);
    }
  }, [])

  // Adding contacts to local storage for permanent storage
  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts])



  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App ;
