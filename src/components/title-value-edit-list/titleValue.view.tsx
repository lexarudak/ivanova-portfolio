import styles from "./titleValue.module.css"
import { FC, ReactNode } from "react"
import { TitleValueData } from "../../shared/types"
import classNames from "classnames"
import { createNewTitleValueItem } from "../../shared/helpers"

type Props = {
  initItems: TitleValueData
  className?: string
  label?: ReactNode
}

export const TitleValueView: FC<Props> = ({ initItems, className, label }) => {
  const items = initItems.length ? initItems : [createNewTitleValueItem("-")]

  return (
    <div className={classNames(styles.container, styles.viewContainer)}>
      {label}
      <ul className={classNames(className, styles.list)}>
        {items.map(({ title, value }, idx) => (
          <li key={idx} className={styles.li}>
            <span datatype="title" className={styles.title}>
              {title}
            </span>
            <span datatype="values" className={styles.value}>
              {value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
