import React, { useEffect, useState } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import EditContact from './EditContact';


function App() {
	const [contacts, setContacts] = useState([]);
	const LOCAL_STORAGE_KEY = "contacts";

	const updateContactsToLocalStorage = (contacts) => {
		console.log("first")
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
	}

	const addContactHandler = (contact) => {
		const updatedContacts = [...contacts, { id: crypto.randomUUID(), ...contact }];
		setContacts(updatedContacts);
		updateContactsToLocalStorage(updatedContacts);
	}

	const editContactHandler = (contact) => {
		console.log("editContactHandler contact", contact)
		console.log("editContactHandler typeof contact", typeof contact)
		const updatedContacts = contacts.map((object) => {
			return (object.id === contact.id) ? contact : object;
		});
		setContacts(updatedContacts);
		updateContactsToLocalStorage(updatedContacts);
	}

	const removeContactHandler = (id) => {
		// remove the contact with id from contacts
		const newContactList = contacts.filter((contact) => {
			return contact.id !== id;
		});
		setContacts(newContactList);
		updateContactsToLocalStorage(newContactList);
	}

	// fetch data from local storage on page refresh
	useEffect(() => {
		const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if (retrievedContacts) {
			console.log("SETTING retrievedContacts", retrievedContacts);
			setContacts(retrievedContacts);
			updateContactsToLocalStorage(retrievedContacts);
		}
	}, [])

	return (
		<div className='ui container'>
			<Header />
			<Routes>
				<Route index path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler} />} />
				<Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
				<Route path="/edit" element={<EditContact editContactHandler={editContactHandler} />} />
				<Route path="/contact/:id" element={<ContactDetail />} />
			</Routes>
		</div>
	);
}

export default App;
