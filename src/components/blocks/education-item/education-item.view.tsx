import { FC } from "react"
import styles from "./education-item.module.css"
import { useSelector } from "react-redux"
import { selectEducationById } from "../../../store/about/selectors"

type Props = {
  id: string
}

export const EducationItemView: FC<Props> = ({ id }) => {
  const experience = useSelector(selectEducationById(id))

  if (!experience) {
    return null
  }

  const { title, location, period, position } = experience

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.position}>{position}</p>
        <p className={styles.desc}>{period}</p>
        <p className={styles.desc}>{location}</p>
      </div>
    </div>
  )
}
