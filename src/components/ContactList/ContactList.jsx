import React from 'react';
import { nanoid } from 'nanoid';
import { ContactItem, Contacts, DeleteButton } from './ContactList.styled';
import { PropTypes } from 'prop-types';

export const ContactList = ({ options, onDeleteContact }) => {
  return (
    <Contacts>
      {options.map(({ id, name, number }) => (
        <ContactItem key={nanoid()}>
          {name}: {number}
          <DeleteButton onClick={() => onDeleteContact(id)}>
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </Contacts>
  );
};

ContactList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
