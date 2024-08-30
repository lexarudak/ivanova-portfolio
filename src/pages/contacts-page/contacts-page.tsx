import { useLoaderData } from "react-router-dom"
import styles from "./contacts-page.module.css"
import { ContactsData } from "../../shared/types"
import EditWrapper from "../../components/edit-wrapper/edit-wrapper"
import ContactsView from "../../components/contacts/contacts.view"
import ContactsForm from "../../components/contacts/contacts.form"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setContacts, setIsEdit } from "../../store/contacts"
import { selectIsContactsEdit } from "../../store/contacts/selectors"

const ContactsPage = () => {
  const contacts = useLoaderData() as ContactsData
  const dispatch = useDispatch()
  const isBlockEdit = useSelector(selectIsContactsEdit)

  useEffect(() => {
    if (contacts) {
      dispatch(setContacts(contacts))
    }
  }, [contacts, dispatch])

  const setIsBlockEdit = (isEdit: boolean) => dispatch(setIsEdit(isEdit))

  return (
    <section className={styles.page}>
      <EditWrapper
        className={styles.container}
        isBlockEdit={isBlockEdit}
        setIsBlockEdit={setIsBlockEdit}
        view={<ContactsView />}
        form={<ContactsForm />}
      />
    </section>
  )
}

export default ContactsPage
