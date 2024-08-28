import { useDispatch, useSelector } from "react-redux"
import styles from "./lock.module.css"
import { selectIsEditMode } from "../../store/app/selectors"
import { setIsEditMode } from "../../store/app"

const Lock = () => {
  const isEditMode = useSelector(selectIsEditMode)
  const dispatch = useDispatch()

  const iconSrc = isEditMode ? "/lock-open.svg" : "/lock.svg"

  const onClick = () => dispatch(setIsEditMode(!isEditMode))

  return (
    <button onClick={onClick} className={styles.btn}>
      <img src={iconSrc} alt="lock" className={styles.img} />
    </button>
  )
}

export default Lock
