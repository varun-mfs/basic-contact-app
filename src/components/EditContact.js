import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';


const EditContact = (props) => {
    const location = useLocation();
    console.log("first inside EditContact", location.state.contact)
    const { id, name, email } = location.state.contact;
    console.log("id, name, email", id, name, email)
    const [state, setState] = useState({
        id,
        name,
        email
    });
    console.log("🚀 ~ file: EditContact.js:15 ~ EditContact ~ state:", state)

    const navigate = useNavigate();

    const update = (e) => {
        e.preventDefault(); // prevents page refresh
        if (!state.name || !state.email || !state.id) {
            alert('All fields are mandatory');
            return;
        }
        // call the parent function to save the state to contacts
        props.editContactHandler(state);
        // clear the fields
        // setState({ name: "", email: "" });
        // Go to contact list page
        navigate("/")
    }

    return (
        <div className="ui main">
            <h2>Edit Contact</h2>
            <form className="ui form" onSubmit={update}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Enter name"
                        value={state.name}
                        onChange={(e) => { setState({ ...state, name: e.target.value }) }} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter email"
                        value={state.email}
                        onChange={(e) => { setState((prevState) => ({ ...prevState, email: e.target.value })) }} />
                </div>
                <button className="ui button blue">Update Contact</button>
            </form>
        </div>
    )
}

export default EditContact;
