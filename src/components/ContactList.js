import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    const inputSearchElement = useRef("");
    console.log("🚀 ~ file: ContactList.js:6 ~ ContactList ~ props:", props)

    const deleteHandler = (id) => {
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard
                contact={contact}
                key={contact.id}
                deleteHandler={deleteHandler}
            />
        );
    })

    const getSearchTerm = () => {
        // console.log("🚀 ~ file: ContactList.js:24 ~ getSearchTerm ~ inputSearchElement:", inputSearchElement.current.value)
        const seachedTerm = inputSearchElement.current.value.trim();
        // TODO: why this check causing issue in searchbar (for first char)
        if (seachedTerm.length > 0) {
            props.searchHandler(seachedTerm);
        }


    }

    return (
        <div className="main">
            <h2>Contact List
                <Link to="/add">
                    <button className="ui button blue right floated">Add Contact</button>
                </Link>
            </h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input
                        type="text"
                        placeholder="Search Contacts"
                        className="prompt"
                        value={props.searchQuery}
                        onChange={getSearchTerm}
                        ref={inputSearchElement}
                    />
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui celled list">
                {renderContactList}
            </div>
        </div>
    )
}

export default ContactList;