import { nanoid } from 'nanoid';
import css from './ContactList.module.css';


export default function ContactList ({contacts}) {
    return (
      <ul className={css.list_contacts}>
        {contacts.map((contact) => (
            <li key={nanoid()} className={css.item_contact}>{contact.name}: {contact.number}</li>
          ))}
      </ul>
    )
}


