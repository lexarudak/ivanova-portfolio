import { useLoaderData } from "react-router-dom"
import styles from "./contacts-page.module.css"
import { Contacts } from "../../shared/types"

const ContactsPage = () => {
  const { contacts } = useLoaderData() as Contacts

  if (!contacts?.length) {
    return (
      <p>
        <span className={styles.title}>Telegram</span>
        <span className={styles.value}>@DaryaIvanov</span>
      </p>
    )
  }

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
