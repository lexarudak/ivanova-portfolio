import { FC, useState } from "react"
import styles from "./contacts.module.css"
import { ContactsData } from "../../shared/types"
import { v4 } from "uuid"
import EditButton from "../shared-components/edit-button"
import { EDIT_BUTTON_VARIANT } from "../shared-components/button/constants"

type Item = {
  title: string
  value: string
  id: string
}

const ContactsForm: FC<ContactsData> = ({ contacts }) => {
  const [items, setItems] = useState<Item[]>(
    contacts.map(val => ({ ...val, id: v4() })),
  )

  const submit = () => console.log(items)

  const onChange = ({ id, title, value }: Item) => {
    setItems(prev => {
      const idx = prev.findIndex(value => value.id === id)
      const newArr = [...prev]
      newArr[idx].title = title
      newArr[idx].value = value

      return newArr
    })
  }
  return (
    <form className={styles.form}>
      {items.map(({ title, value, id }) => (
        <div key={id}>
          <input
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
        </div>
      ))}
      <EditButton
        className={styles.save}
        variant={EDIT_BUTTON_VARIANT.save}
        type="button"
        onClick={submit}
      />
    </form>
  )
}

export default ContactsForm
