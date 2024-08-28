import { useLoaderData } from "react-router-dom"
import styles from "./contacts-page.module.css"
import { ContactsData } from "../../shared/types"
import EditWrapper from "../../components/edit-wrapper/edit-wrapper"
import ContactsView from "../../components/contacts/contacts-view"
import ContactsForm from "../../components/contacts/contacts-form"

const ContactsPage = () => {
  const { contacts } = useLoaderData() as ContactsData

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
      <EditWrapper
        className={styles.container}
        view={<ContactsView contacts={contacts} />}
        form={<ContactsForm contacts={contacts} />}
      />
    </section>
  )
}

export default ContactsPage
