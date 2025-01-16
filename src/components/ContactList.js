import React from "react";
import avatar from "../assets/avatar.png"; 

const ContactList = ({ contacts }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact, index) => (
        <div key={index} className="contact-item">
          <img src={avatar} alt="Avatar" className="avatar" />
          <div className="contact-details">
            <p>{contact.name}</p>
            <p>{contact.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
