import classNames from "classnames"
import styles from "./remove-popup.module.css"
import { FC } from "react"

type Props = {
  text: string
  remove: () => void
  cancel: () => void
}

const RemovePopup: FC<Props> = ({ text, remove, cancel }) => {
  return (
    <div
      className={classNames({
        [styles.container]: true,
        [styles.show]: !!text,
      })}
    >
      <div className={styles.info}>
        <h1>{text}</h1>
        <div className={styles.buttons}>
          <button onClick={cancel} className={styles.btn}>
            Cancel
          </button>
          <button
            onClick={remove}
            className={classNames(styles.btn, styles.remove)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default RemovePopup
