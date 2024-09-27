import { useDispatch, useSelector } from "react-redux"
import { selectContacts } from "../../store/contacts/selectors"
import { TitleValueData } from "../../shared/types"
import { contactsService } from "../../service/contacts-service/contacts-service"
import { setContacts } from "../../store/contacts"
import TitleValueEditList from "../title-value-edit-list/title-value-edit-list"
import { BLOCK_ID } from "../../shared/constants"
import useSubmit from "../../shared/hooks/use-submit"
import { removeEmptyItems } from "../../shared/helpers"
import styles from "./contacts-list.module.css"

const ContactsList = () => {
  const initValues = useSelector(selectContacts)
  const dispatch = useDispatch()

  const submit = useSubmit(async (items: TitleValueData) => {
    const contacts = await contactsService().postContacts(
      removeEmptyItems(items),
    )
    dispatch(setContacts(contacts))
  })
  return (
    <TitleValueEditList
      className={styles.list}
      placeholders={["telegram", "@example"]}
      initItems={initValues}
      onSubmit={submit}
      blockId={BLOCK_ID.contacts}
    />
  )
}

export default ContactsList
