import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
	const LOCAL_STORAGE_KEY = "contacts";
	const [contacts, setContacts] = useState([]);

	const addContactHandler = (contact) => {
		setContacts([...contacts, { id: crypto.randomUUID(), ...contact }]);
	}

	const removeContactHandler = (id) => {
		// remove the contact with id from contacts
		const newContactList = contacts.filter((contact) => {
			return contact.id !== id;
		});
		console.log("🚀 ~ file: App.js:22 ~ newContactList ~ newContactList:", newContactList)
		setContacts(newContactList);
	}

	// fetch data from local storage on page refresh
	useEffect(() => {
		const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		console.log("retrievedContacts", retrievedContacts);
		if (retrievedContacts) {
			console.log("SETTING retrievedContacts", retrievedContacts);
			setContacts(retrievedContacts);
		}
	}, [])


	// Adding contacts to local storage for permanent storage
	useEffect(() => {
		// if (contacts.length > 0) {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
		// }
	}, [contacts])



	return (
		<div className='ui container'>
			<Header />
			<Routes>
				<Route index path="/" element={<ContactList />} />
				<Route path="/add" element={<AddContact />} />
				{/* <AddContact addContactHandler={addContactHandler} /> */}
				{/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
			</Routes>
		</div>
	);
}

export default App;
