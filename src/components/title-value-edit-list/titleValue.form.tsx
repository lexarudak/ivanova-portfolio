import { FC, ReactNode, useState } from "react"
import styles from "./titleValue.module.css"
import EditButton from "../shared-components/edit-button"
import { EDIT_BUTTON_VARIANT } from "../../shared/constants"
import { TitleValueData, TitleValueItem } from "../../shared/types"
import classNames from "classnames"
import { isEqual } from "lodash"
import { createNewTitleValueItem } from "../../shared/helpers"

const emptyItem = createNewTitleValueItem()

type Props = {
  initItems: TitleValueData
  onSubmit: (items: TitleValueData) => Promise<void>
  className?: string
  label?: ReactNode
  placeholders?: [string, string]
}

export const TitleValueForm: FC<Props> = ({
  initItems,
  onSubmit,
  className,
  label,
  placeholders = [],
}) => {
  const defaultItems = initItems.length ? initItems : [emptyItem]
  const [items, setItems] = useState<TitleValueData>(defaultItems)
  const [titlePlaceholder, valuePlaceholder] = placeholders

  const onChange = ({ id, title, value }: TitleValueItem) => {
    setItems(prev => {
      return prev.map(item => (item.id === id ? { id, title, value } : item))
    })
  }

  const addField = () => {
    setItems(prev => [...prev, createNewTitleValueItem()])
  }

  return (
    <div className={styles.container}>
      {label}
      <ul className={classNames(className, styles.list)}>
        {items.map(({ title, value, id }) => (
          <li key={id} className={styles.li}>
            <input
              placeholder={titlePlaceholder}
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
              placeholder={valuePlaceholder}
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
          disabled={isEqual(defaultItems, items)}
        />
      </ul>
    </div>
  )
}
