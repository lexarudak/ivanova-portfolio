import { FC } from "react"
import styles from "./experience-item.module.css"
import { useSelector } from "react-redux"
import { selectExperienceById } from "../../../store/about/selectors"

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
        <p className={styles.title}>{title}</p>
        <p className={styles.position}>{position}</p>
        <p>{time}</p>
        <p className={styles.type}>{workType}</p>
        <p className={styles.desc}>{period}</p>
        <p className={styles.desc}>{location}</p>
      </div>
      {!!achievements?.length && (
        <ul className={styles.achievements}>
          <li className={styles.title}>Achievements</li>
          {achievements.map((text, idx) => (
            <li key={idx}>{text}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
