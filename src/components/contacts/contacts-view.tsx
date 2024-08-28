import styles from "./contacts.module.css"
import { useSelector } from "react-redux"
import { selectContacts } from "../../store/contacts/selectors"

const ContactsView = () => {
  const contacts = useSelector(selectContacts)

  return (
    <ul>
      {contacts.map(({ title, value }, idx) => (
        <li key={idx} className={styles.li}>
          <span className={styles.title}>{title}</span>
          <span className={styles.value}>{value}</span>
        </li>
      ))}
    </ul>
  )
}

export default ContactsView
