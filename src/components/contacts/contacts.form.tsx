import { useState } from "react"
import styles from "./contacts.module.css"
import { v4 } from "uuid"
import EditButton from "../shared-components/edit-button"
import { EDIT_BUTTON_VARIANT } from "../shared-components/button/constants"
import { useDispatch, useSelector } from "react-redux"
import { setIsLoading } from "../../store/app"
import { contactsService } from "../../service/contacts-service/contacts-service"
import { selectContacts } from "../../store/contacts/selectors"
import { setContacts, setIsEdit } from "../../store/contacts"

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

  const submit = async () => {
    dispatch(setIsLoading(true))

    try {
      const contacts = await contactsService().postContacts(items)
      dispatch(setContacts(contacts))
      dispatch(setIsEdit(false))
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

  const removeField = (id: string) => {
    setItems(prev => [...prev.filter(item => item.id !== id)])
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
          <EditButton
            variant={EDIT_BUTTON_VARIANT.delete}
            onClick={() => removeField(id)}
          />
        </li>
      ))}
      {items.length < MAX_FIELDS && (
        <button className={styles.addButton} onClick={addField}>
          +
        </button>
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
