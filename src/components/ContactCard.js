import React from "react";
import userAvatar from "../images/user-avatar2.png";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;

    const deleteHandler = () => {
        let confirm = window.confirm("Do you want to delete contact?");
        if (confirm) {
            props.deleteHandler(id);
        }
    }

    return (
        <div className="item">
            <img className="ui avatar image" src={userAvatar} alt="user-avatar"
            />
            <div className="content">
                <Link
                    to={`/contact/${id}`}
                    state={{ contact: props.contact }}
                >
                    <div className="header">
                        {name}
                    </div>
                    {email}
                </Link>
            </div>
            <div className="right floated content">
                <Link
                    to={`/edit`}
                    state={{ contact: props.contact }}
                >
                    <i className="edit alternate outline icon" title="edit"
                        style={{ color: "blue", marginTop: "7px", cursor: 'pointer', marginRight: '15px' }}
                    ></i>
                </Link>
                <i className="trash alternate outline icon" title="delete"
                    style={{ color: "red", marginTop: "7px", cursor: 'pointer' }}
                    onClick={deleteHandler}
                ></i>
            </div>
        </div>
    );
}

export default ContactCard;