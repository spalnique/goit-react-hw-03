import css from '../Contact/Contact.module.css';

export default function Contact({
  contact: { id, username, phone },
  onDelete,
}) {
  return (
    <div className={css.contactContainer}>
      <ul className={css.contactInfo}>
        <li>{username}</li>
        <li>{phone}</li>
      </ul>
      <button
        className={css.contactRemoveButton}
        type="button"
        onClick={() => onDelete(id)}>
        delete
      </button>
    </div>
  );
}
