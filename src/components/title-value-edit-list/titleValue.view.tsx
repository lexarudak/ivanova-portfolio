import styles from "./titleValue.module.css"
import { FC } from "react"
import { TitleValueData } from "../../shared/types"
import classNames from "classnames"

type Props = {
  initItems: TitleValueData
  className?: string
}

export const TitleValueView: FC<Props> = ({ initItems, className }) => {
  return (
    <ul className={classNames(className, styles.list)}>
      {initItems.map(({ title, value }, idx) => (
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
  )
}
