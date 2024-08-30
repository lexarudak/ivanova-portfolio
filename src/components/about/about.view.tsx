import { useSelector } from "react-redux"
import styles from "./about.module.css"
import { selectAbout } from "../../store/about/selectors"

export const AboutView = () => {
  const text = useSelector(selectAbout)

  return (
    <div className={styles.about}>
      <p className={styles.title}>About</p>
      <p className={styles.text}>{text}</p>
    </div>
  )
}
