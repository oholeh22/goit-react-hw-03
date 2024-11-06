import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
    return (
        <div className={css.container}>
        <ul className={css.list}>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={css.item}>
                <div className={css.contactInfo}>
                    <span className={css.name}>{name}</span>
                    <span className={css.number}>{number}</span>
                </div>
                <button className={css.btn} onClick={() => onDelete(id)}>Delete</button>
            </li>
            ))}
        </ul>
        
        </div>
    );
};

export default ContactList;