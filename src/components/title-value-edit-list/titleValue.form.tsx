import { FC, useState } from "react"
import styles from "./titleValue.module.css"
import { v4 } from "uuid"
import EditButton from "../shared-components/edit-button"
import { EDIT_BUTTON_VARIANT } from "../../shared/constants"
import { TitleValueData, TitleValueItem } from "../../shared/types"
import classNames from "classnames"

type Props = {
  initItems: TitleValueData
  onSubmit: (items: TitleValueData) => Promise<void>
  className?: string
}

export const TitleValueForm: FC<Props> = ({
  initItems,
  onSubmit,
  className,
}) => {
  const [items, setItems] = useState<TitleValueData>(initItems)

  const onChange = ({ id, title, value }: TitleValueItem) => {
    setItems(prev => {
      return prev.map(item => (item.id === id ? { id, title, value } : item))
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
    <ul className={classNames(className, styles.list)}>
      {items.map(({ title, value, id }) => (
        <li key={id} className={styles.li}>
          <input
            datatype="title"
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
            datatype="value"
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

      <EditButton
        variant={EDIT_BUTTON_VARIANT.plus}
        onClick={addField}
        className={styles.plus}
      />

      <EditButton
        className={styles.save}
        variant={EDIT_BUTTON_VARIANT.save}
        type="button"
        onClick={() => onSubmit(items)}
      />
    </ul>
  )
}
