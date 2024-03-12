import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


const AddContact = (props) => {

    const [state, setState] = useState({
        name: "",
        email: ""
    });
    const navigate = useNavigate();

    const add = (e) => {
        e.preventDefault(); // prevents page refresh
        if (state.name === "" || state.email === "") {
            alert('All fields are mandatory');
            return;
        }
        // call the parent function to save the state to contacts
        props.addContactHandler(state);
        // clear the fields
        setState({ name: "", email: "" });
        // Go to contact list page
        navigate("/")
    }
    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={add}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Enter name"
                        value={state.name}
                        onChange={(e) => { setState({ name: e.target.value }) }} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter email"
                        value={state.email}
                        onChange={(e) => { setState({ email: e.target.value }) }} />
                </div>
                <button className="ui button blue">Add Contact</button>
            </form>
        </div>
    )
}

export default AddContact;
