import { useSelector } from "react-redux"
import styles from "./about.module.css"
import { selectAbout } from "../../store/about/selectors"

export const AboutView = () => {
  const text = useSelector(selectAbout)

  return (
    <div className={styles.about}>
      <p className={styles.title}>About</p>
      <div className={styles.text}>{text}</div>
    </div>
  )
}
