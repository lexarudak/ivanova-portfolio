import { useLoaderData } from "react-router-dom"
import styles from "./contacts-page.module.css"
import { ContactsData } from "../../shared/types"
import EditWrapper from "../../components/edit-wrapper/edit-wrapper"
import ContactsView from "../../components/contacts/contacts.view"
import ContactsForm from "../../components/contacts/contacts.form"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setContacts } from "../../store/contacts"
import { BLOCK_ID } from "../../shared/constants"

const ContactsPage = () => {
  const contacts = useLoaderData() as ContactsData
  const dispatch = useDispatch()

  useEffect(() => {
    if (contacts) {
      dispatch(setContacts(contacts))
    }
  }, [contacts, dispatch])

  return (
    <section className={styles.page}>
      <EditWrapper
        className={styles.container}
        view={<ContactsView />}
        form={<ContactsForm />}
        id={BLOCK_ID.contacts}
      />
    </section>
  )
}

export default ContactsPage
