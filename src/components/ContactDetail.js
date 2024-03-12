import React from 'react'
import userAvatar from '../images/user-avatar.png'
import { useLocation } from "react-router-dom";

const ContactDetail = (props) => {
    console.log("props in ContactDetail", props)
    const location = useLocation();
    const { id, name, email } = location.state.contact;
    // console.log("props in ContactDetail location", location);
    return (
        <div className='main'>
            <h2>Contact Detail</h2>
            <div className='ui card centered'>
                <div className='image'>
                    <img src={userAvatar} alt="user-avatar" />
                </div>
                <div className='content'>
                    <div className='header'>{name}</div>
                    <div className='description'>{email}</div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetail