import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectContacts } from "../../store/contacts/selectors"
import { TitleValueData } from "../../shared/types"
import { setEditBlockId, setIsLoading } from "../../store/app"
import { contactsService } from "../../service/contacts-service/contacts-service"
import { setContacts } from "../../store/contacts"
import TitleValueEditList from "../title-value-edit-list/title-value-edit-list"
import { BLOCK_ID } from "../../shared/constants"

type Props = {
  className?: string
}

const ContactsList: FC<Props> = ({ className }) => {
  const initValues = useSelector(selectContacts)
  const dispatch = useDispatch()
  const removeEmptyItems = (items: TitleValueData) =>
    items.filter(({ value, title }) => value || title)

  const submit = async (items: TitleValueData) => {
    try {
      dispatch(setIsLoading(true))
      const contacts = await contactsService().postContacts(
        removeEmptyItems(items),
      )
      dispatch(setContacts(contacts))
      dispatch(setEditBlockId(""))
    } finally {
      dispatch(setIsLoading(false))
    }
  }
  return (
    <div className={className}>
      <TitleValueEditList
        initItems={initValues}
        onSubmit={submit}
        blockId={BLOCK_ID.contacts}
      />
    </div>
  )
}

export default ContactsList
