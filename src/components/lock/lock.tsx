import styles from "./lock.module.css"
import useEditMode from "../../shared/hooks/use-edit-mode"

const Lock = () => {
  const [isEditMode, onClick] = useEditMode()
  const iconSrc = isEditMode ? "/lock-open.svg" : "/lock.svg"

  return (
    <button onClick={onClick} className={styles.btn}>
      <img src={iconSrc} alt="lock" className={styles.img} />
    </button>
  )
}

export default Lock
