import { useSelector, useDispatch } from 'react-redux'; 
import styles from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { deleteContact, selectContacts } from '../../redux/contactsSlice'; 

const ContactList = () => {
  const contacts = useSelector(selectContacts); 
  const dispatch = useDispatch(); 

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id)); 
  };

  return (
    <ul className={styles.list}>
      {contacts.length > 0 ? (
        contacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            id={id} 
            name={name}
            number={number}
            onDelete={() => handleDeleteContact(id)} 
          />
        ))
      ) : (
        <p className={styles.noContacts}>Contacts not found!</p>
      )}
    </ul>
  );
};

export default ContactList;
