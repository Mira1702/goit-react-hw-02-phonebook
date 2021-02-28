import React from 'react';

const ContactItem = ({ id, name, number, onRemove }) => {
    return (
        <li key={id}>
            {name}: {number} <button onClick={() => onRemove(id)}>delete</button>
        </li>
    )     
}

const Contacts = ({ contacts, onRemove }) => {
    // if (contacts.length === 0) return null
    return (
        <ul >
            {contacts.map(contact =>
                <ContactItem {...contact} onRemove={onRemove}/>)}
        </ul>
    )
}


export default Contacts;


