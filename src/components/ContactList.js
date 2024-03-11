import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log('props', props);

    const deleteHandler = (id) => {
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} key={contact.id} deleteHandler={deleteHandler}/>
        );
    })
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default ContactList;