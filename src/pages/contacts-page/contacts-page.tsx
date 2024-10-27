import styles from "./contacts-page.module.css"
import ContactsList from "../../components/contacts-list"
import PageWrapper from "../../components/page-wrapper/page-wrapper"
import { fetchContacts } from "../../store/contacts/actions"

const ContactsPage = () => {
  return (
    <PageWrapper asyncThunk={fetchContacts}>
      <section className={styles.page}>
        <div className={styles.container}>
          <ContactsList />
        </div>
      </section>
    </PageWrapper>
  )
}

export default ContactsPage
