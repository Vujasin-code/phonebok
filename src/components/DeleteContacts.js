import React from "react";

function DeleteContacts({ contacts, onDeleteContact }) {
  return (
    <div className="delete-contacts">
      <h2>Delete Contact</h2>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              {contact.name} - {contact.phone}
              <button
                className="delete-btn"
                onClick={() => onDeleteContact(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No users to delete.</p>
      )}
    </div>
  );
}

export default DeleteContacts;
