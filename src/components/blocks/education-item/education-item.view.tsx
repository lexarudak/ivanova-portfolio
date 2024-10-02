import { FC } from "react"
import styles from "./education-item.module.css"
import { useSelector } from "react-redux"
import { selectEducationById } from "../../../store/about/selectors"
import classNames from "classnames"

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
        <p className={classNames(styles.last, styles.light)}>{title}</p>
        <p className={classNames(styles.bold, styles.last)}>{position}</p>
        <p className={styles.light}>{period}</p>
        <p className={styles.light}>{location}</p>
      </div>
    </div>
  )
}
