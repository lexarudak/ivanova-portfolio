import { FC } from "react"
import styles from "./info-block.module.css"

type Props = {
  items: { title: string; value: string }[]
  list: { title: string; values: string[] }
  lang?: boolean
}

const InfoBlock: FC<Props> = ({ items, list, lang }) => {
  const [firstItem, secondItem] = items
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p>
          <span className={styles.title}>{firstItem.title}</span>
          <span>{firstItem.value}</span>
        </p>
        <p>
          <span className={styles.title}>{secondItem.title}</span>
          <span>{secondItem.value}</span>
        </p>
      </div>
      <div className={styles.block}>
        <span className={styles.title}>{list.title}</span>
        <ul className={styles.list}>
          {list.values.map((text, id) => {
            if (lang) {
              const arr = text.split(" ")
              const lastWord = arr.pop()

              return (
                <li key={id} className={styles.lang}>
                  <span className={styles.lang}>{arr.join(" ")}</span>{" "}
                  <span>{lastWord}</span>
                </li>
              )
            }

            return <li key={id}>{text}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default InfoBlock
