import { FC } from "react"
import styles from "./experience-item.module.css"
import { useSelector } from "react-redux"
import { selectExperienceById } from "../../../../store/about/selectors"
import classNames from "classnames"

type Props = {
  id: string
}

export const ExperienceItemView: FC<Props> = ({ id }) => {
  const experience = useSelector(selectExperienceById(id))

  if (!experience) {
    return null
  }

  const { title, location, period, position, time, workType, achievements } =
    experience

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={classNames(styles.last, styles.light)}>{title}</p>
        <p className={styles.bold}>{position}</p>
        <p>{time}</p>
        <p className={styles.last}>{workType}</p>
        <p className={styles.light}>{period}</p>
        <p className={styles.light}>{location}</p>
      </div>
      {!!achievements?.length && (
        <ul className={styles.achievements}>
          <li className={classNames(styles.last, styles.hide)}>Achievements</li>
          {achievements.map((text, idx) => (
            <li key={idx}>{text}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
