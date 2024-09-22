import { useLoaderData } from "react-router-dom"
import styles from "./contacts-page.module.css"
import { TitleValueData } from "../../shared/types"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setContacts } from "../../store/contacts"
import ContactsList from "../../components/contacts-list"

const ContactsPage = () => {
  const contacts = useLoaderData() as TitleValueData
  const dispatch = useDispatch()

  useEffect(() => {
    if (contacts) {
      dispatch(setContacts(contacts))
    }
  }, [contacts, dispatch])

  return (
    <section className={styles.page}>
      <ContactsList className={styles.container} />
    </section>
  )
}

export default ContactsPage
