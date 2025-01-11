import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.length > 0 ? (
        contacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            name={name}
            number={number}
            onDelete={() => onDeleteContact(id)}
          />
        ))
      ) : (
        <p className={styles.noContacts}>Contacts not found!</p>
      )}
    </ul>
  );
};

export default ContactList;