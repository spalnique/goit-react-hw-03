import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

export default function App() {
  const checkStorage = JSON.parse(localStorage.getItem('contact-list'));
  const initialContacts = checkStorage
    ? JSON.parse(localStorage.getItem('contact-list'))
    : [];

  const initialValues = {
    username: '',
    phone: '',
  };

  const [allContacts, setContacts] = useState(initialContacts);
  const [filterInput, setFilterInput] = useState('');

  const handleSubmit = (values, actions) => {
    setContacts(prevContacts => {
      return [...prevContacts, { id: nanoid(), ...values }];
    });
    actions.resetForm();
  };

  const handleDelete = id => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== id);
    });
  };

  const filteredContacts = allContacts.filter(contact =>
    contact.username.toLowerCase().includes(filterInput.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem('contact-list', JSON.stringify(allContacts));
  }, [allContacts]);

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm initialValues={initialValues} onSubmit={handleSubmit} />
      <SearchBox value={filterInput} onFilter={setFilterInput} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </>
  );
}
