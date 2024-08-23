import { FC } from "react"
import styles from "./project-info.module.css"

type Props = {
  year: string
  location: string
  participation: string[]
}

const ProjectInfo: FC<Props> = ({ year, location, participation }) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p>
          <span className={styles.title}>Year:</span>
          <span>{year}</span>
        </p>
        <p>
          <span className={styles.title}>Location:</span>
          <span>{location}</span>
        </p>
      </div>
      <div className={styles.participation}>
        <span className={styles.title}>Participation:</span>
        <ul>
          {participation.map((text, id) => (
            <li key={id}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProjectInfo
