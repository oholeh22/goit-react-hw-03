import { useState, useEffect } from 'react';
import ContactList from './ContactList/ContactList';
import Contact from "./Contact/Contact"
import SearchBox from './SearchBox/SeacrhBox';
import ContactForm from './ContactForm/ContactForm';

function App() {
    const initialContacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  
    const [contacts, setContacts] = useState(() => {
      try {
        const storedContacts = localStorage.getItem('contacts');
        return storedContacts ? JSON.parse(storedContacts) : initialContacts;
      } catch (error) {
        console.error('Error loading contacts from localStorage:', error);
        return initialContacts; 
      }
    });

    const [filter, setFilter] = useState('');

    useEffect(() => {
        try {
            if (contacts.length > 0) {
                localStorage.setItem('contacts', JSON.stringify(contacts));
            }
        } catch (error) {
            console.error('Error saving contacts to localStorage:', error);
        }
    }, [contacts]);
    const handleFilterChange = (value) => {
        setFilter(value);
    };

    const handleAddContact = (newContact) => {
        setContacts((prevContacts) => [...prevContacts, newContact]);
    };

    const handleDeleteContact = (id) => {
        setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== id));
    };

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={handleAddContact} />
            <SearchBox filter={filter} onFilterChange={handleFilterChange} />
            <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
        </div>
    );
}

export default App;
