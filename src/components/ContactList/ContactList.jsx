import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul className={css.list}>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={css.item}>
                    <span className={css.name}>{name}</span>
                    <span className={css.number}>{number}</span>
                    <button onClick={() => onDelete(id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;