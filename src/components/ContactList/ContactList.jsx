import Contact from '../Contact/Contact';
import css from '../ContactList/ContactList.module.css';

export default function ContactList({ contacts, onContactDelete }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} onDelete={onContactDelete} />
          </li>
        );
      })}
    </ul>
  );
}
