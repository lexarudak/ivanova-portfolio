import { FC } from "react"
import styles from "./contacts.module.css"
import { ContactsData } from "../../shared/types"

const ContactsView: FC<ContactsData> = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ title, value }, idx) => (
        <li key={idx}>
          <span className={styles.title}>{title}</span>
          <span className={styles.value}>{value}</span>
        </li>
      ))}
    </ul>
  )
}

export default ContactsView
