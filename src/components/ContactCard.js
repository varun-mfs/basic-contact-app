import React from "react";
import userAvatar from "../images/user-avatar2.png";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;

    const deleteHandler = () => {
        props.deleteHandler(id);
    }

    return (
        <div className="item">
            <div className="right floated content">
                <i className="trash alternate outline icon"
                    style={{ color: "red", marginTop: "7px", cursor: 'pointer' }}
                    onClick={deleteHandler}
                ></i>
            </div>
            <img className="ui avatar image" src={userAvatar} alt="user-avatar"
            />
            <div className="content">
                <Link
                    to={`contact/${id}`}
                    state={{ contact: props.contact }}
                >
                    <div className="header">
                        {name}
                    </div>
                    {email}
                </Link>
            </div>
        </div>
    );
}

export default ContactCard;