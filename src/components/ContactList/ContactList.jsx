import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import {MdHighlightOff } from "react-icons/md";

export default function ContactList ({contacts, onDelete}) {
    return (
      <ul className={css.list_contacts}>
        {contacts.map((contact) => (
            <li id={contact.id} key={nanoid()} className={css.item_contact}>
                <p>{contact.name}: {contact.number}</p>
                {/* <button onClick={() => onDelete(contact.id)} className={css.btn_delete}><MdDelete className={css.delete_icon}/></button> */}
                <MdHighlightOff className={css.delete_icon} onClick={() => onDelete(contact.id)} /> 
            </li>
          ))}
      </ul>
    )
}


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
