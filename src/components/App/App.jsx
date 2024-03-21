import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import css from '../App/App.module.css';

export default function App() {
  const getContacts = () => {
    return JSON.parse(localStorage.getItem('contact-list'))
      ? JSON.parse(localStorage.getItem('contact-list'))
      : [];
  };

  const initialValues = {
    username: '',
    phone: '',
  };

  const [allContacts, setContacts] = useState(getContacts);
  const [filterInput, setFilterInput] = useState('');

  const handleDelete = id => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== id);
    });
  };

  const handleAdd = values =>
    setContacts(prevContacts => {
      return [...prevContacts, { id: nanoid(), ...values }];
    });

  const filteredContacts = allContacts.filter(contact =>
    contact.username.toLowerCase().includes(filterInput.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem('contact-list', JSON.stringify(allContacts));
  }, [allContacts]);

  return (
    <div className={css.mainContainer}>
      <h2>Phonebook</h2>
      <ContactForm initialValues={initialValues} onContactAdd={handleAdd} />
      <SearchBox value={filterInput} onFilter={setFilterInput} />
      <ContactList contacts={filteredContacts} onContactDelete={handleDelete} />
    </div>
  );
}
