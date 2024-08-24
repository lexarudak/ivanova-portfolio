import { FC } from "react"
import styles from "./experience-item.module.css"
import { ExperienceData } from "../../../shared/types"

const ExperienceItem: FC<ExperienceData> = ({
  title,
  location,
  period,
  position,
  time,
  workType,
  achievements,
}) => {
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
        <div className={styles.achievements}>
          <p className={styles.title}>Achievements</p>
          {achievements.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default ExperienceItem