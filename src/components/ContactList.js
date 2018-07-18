import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.css';

const ContactList = ({ contacts, filterText }) => {
  const filteredContacts = contacts.filter(contact => contact.name.indexOf(filterText) !== -1);

  return(
    <div className="contactList">
      <ul>
        {filteredContacts.map(
          (contact) => <li key={contact.email} onClick={() => alert('Will You develop this section?')}>
            <img src={contact.thumbnail} role="presentation" alt={contact.name} />
            <div className="contactData">
              <strong>{contact.name}</strong><br/><small>{contact.email}</small>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filterText: PropTypes.string.isRequired
}

export default ContactList;
