import React, { Component } from "react";

class AddContact extends Component {
    state = {
        name: "",
        email: ""
    };

    add = (e) => {
        e.preventDefault(); // prevents page refresh
        if (this.state.name === "" || this.state.email === "") {
            alert('All fields are mandatory');
            return;
        }
        // call the parent function to save the state to contacts
        this.props.addContactHandler(this.state);
        // clear the fields
        this.setState({name: "", email: ""});
        
    }

    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Enter name"
                        value={this.state.name} 
                        onChange={(e) => {this.setState({name: e.target.value})}}/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Enter email"
                        value={this.state.email}
                        onChange={(e)=> {this.setState({email: e.target.value})}}/>
                    </div>
                    <button className="ui button blue">Add Contact</button>
                </form>
            </div>
        )
    }
}

export default AddContact;