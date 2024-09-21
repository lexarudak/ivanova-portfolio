import { useState } from "react"
import styles from "./contacts.module.css"
import { v4 } from "uuid"
import EditButton from "../shared-components/edit-button"
import { useDispatch, useSelector } from "react-redux"
import { setEditBlockId, setIsLoading } from "../../store/app"
import { contactsService } from "../../service/contacts-service/contacts-service"
import { selectContacts } from "../../store/contacts/selectors"
import { setContacts } from "../../store/contacts"
import { EDIT_BUTTON_VARIANT } from "../../shared/constants"

const MAX_FIELDS = 15

type Item = {
  title: string
  value: string
  id: string
}

const ContactsForm = () => {
  const contacts = useSelector(selectContacts)
  const dispatch = useDispatch()

  const [items, setItems] = useState<Item[]>(
    contacts.map(val => ({ ...val, id: v4() })),
  )

  const removeEmptyItems = (items: Item[]) =>
    items.filter(({ value, title }) => value || title)

  const submit = async () => {
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

  const onChange = ({ id, title, value }: Item) => {
    setItems(prev => {
      const idx = prev.findIndex(value => value.id === id)
      const newArr = [...prev]
      newArr[idx].title = title
      newArr[idx].value = value

      return newArr
    })
  }

  const addField = () => {
    const newField = {
      id: v4(),
      title: "",
      value: "",
    }

    setItems(prev => [...prev, newField])
  }

  return (
    <ul className={styles.list}>
      {items.map(({ title, value, id }) => (
        <li key={id} className={styles.li}>
          <input
            className={styles.title}
            type="text"
            value={title}
            onChange={e => {
              onChange({
                id,
                title: e.target.value,
                value,
              })
            }}
          />
          <input
            className={styles.value}
            type="text"
            value={value}
            onChange={e => {
              onChange({
                id,
                title,
                value: e.target.value,
              })
            }}
          />
        </li>
      ))}
      {items.length < MAX_FIELDS && (
        <EditButton
          variant={EDIT_BUTTON_VARIANT.plus}
          onClick={addField}
          className={styles.plus}
        />
      )}
      <EditButton
        className={styles.save}
        variant={EDIT_BUTTON_VARIANT.save}
        type="button"
        onClick={submit}
      />
    </ul>
  )
}

export default ContactsForm
