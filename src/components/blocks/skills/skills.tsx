import { FC } from "react"
import styles from "./skills.module.css"

type Props = {
  skills: { title: string; list: string[] }[]
}

const Skills: FC<Props> = ({ skills }) => {
  return (
    <div className={styles.container}>
      {skills.map(({ title, list }) => (
        <div key={title} className={styles.block}>
          <p className={styles.title}>{title}</p>
          <ul className={styles.list}>
            {list.map(skill => (
              <li key={skill} className={styles.list}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Skills
