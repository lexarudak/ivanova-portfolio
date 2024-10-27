import { FC } from "react"
import styles from "./project-info.module.css"

type Props = {
  year: string
  location: string
  participation: string[]
  team: {
    name: string
    link: string
  }
}

const ProjectInfo: FC<Props> = ({ year, location, participation, team }) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p>
          <span className={styles.title}>Year</span>
          <span>{year}</span>
        </p>
        <p>
          <span className={styles.title}>Location</span>
          <span>{location}</span>
        </p>
        <p>
          <span className={styles.title}>Team</span>
          <a href={team.link} target="_blank">
            {team.name}
          </a>
        </p>
      </div>
      <div className={styles.block}>
        <span className={styles.title}>Participation</span>
        <ul className={styles.list}>
          {participation.map((text, id) => (
            <li key={id}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProjectInfo
