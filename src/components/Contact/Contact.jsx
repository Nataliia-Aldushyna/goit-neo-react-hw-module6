import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Contact = ({ name, number, onDelete }) => {
  return (
    <li className={styles.contactItem}>
      <div className={styles.avatar}>
        <FontAwesomeIcon icon={faUserCircle} className={styles.avatarIcon} />
      </div>
      <div className={styles.contactInfo}>
        <p className={styles.name}>{name}</p>
        <div className={styles.numberWrapper}>
          <FontAwesomeIcon icon={faPhone} className={styles.phoneIcon} />
          <p className={styles.number}>{number}</p>
        </div>
      </div>
      <button className={styles.button} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;