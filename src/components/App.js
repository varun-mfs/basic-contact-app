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
	const [searchQuery, setSearchQuery] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const LOCAL_STORAGE_KEY = "contacts";

	const updateContactsToLocalStorage = (contacts) => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
	}

	const addContactHandler = (contact) => {
		const updatedContacts = [...contacts, { id: crypto.randomUUID(), ...contact }];
		setContacts(updatedContacts);
		updateContactsToLocalStorage(updatedContacts);
	}

	const editContactHandler = (contact) => {
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

	// to search the contact
	const searchHandler = (searchTerm) => {
		console.log("🚀 ~ file: App.js:45 ~ searchHandler ~ searchTerm:", searchTerm);
		setSearchQuery(searchTerm);
		if (searchTerm !== '') {
			const newContactList = contacts.filter((contact) => {
				return Object.values(contact)
					.join(" ")
					.toLowerCase()
					.includes(searchTerm.toLowerCase());
			})
			setSearchResults(newContactList)
		} else {
			setSearchResults(contacts)
		}
	}

	// fetch data from local storage on page refresh
	useEffect(() => {
		const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
		if (retrievedContacts) {
			setContacts(retrievedContacts);
			updateContactsToLocalStorage(retrievedContacts);
		}
	}, [])

	return (
		<div className='ui container'>
			<Header />
			<Routes>
				<Route index path="/" element={
					<ContactList contacts={searchQuery.length < 1 ? contacts : searchResults}
						getContactId={removeContactHandler}
						searchQuery={searchQuery}
						searchHandler={searchHandler}
					/>
				} />
				<Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
				<Route path="/edit" element={<EditContact editContactHandler={editContactHandler} />} />
				<Route path="/contact/:id" element={<ContactDetail />} />
			</Routes>
		</div>
	);
}

export default App;
