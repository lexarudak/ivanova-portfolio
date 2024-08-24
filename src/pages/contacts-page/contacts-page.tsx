import { MOCK_CONTACTS } from "../../mock/mock-contacts"
import styles from "./contacts-page.module.css"

const ContactsPage = () => {
  const { contacts } = MOCK_CONTACTS
  return (
    <section className={styles.page}>
      <ul className={styles.list}>
        {contacts.map(({ title, value }, idx) => (
          <li key={idx}>
            <span className={styles.title}>{title}</span>
            <span className={styles.value}>{value}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ContactsPage
