import React from "react";
import userAvatar from "../images/user-avatar2.png";

const ContactCard = (props) => {
    console.log('props card', props);
    const { id, name, email } = props.contact;
    return (
        <div class="item">
            <div class="right floated content">
                <i className="trash alternate outline icon" style={{ color: "red", marginTop: "7px" }}></i>
            </div>
            <img class="ui avatar image" src={userAvatar} alt
            />
            <div class="content">
                <div className="header">
                    {name}
                </div>
                {email}
            </div>
        </div>
    );
}

export default ContactCard;