import { FC } from "react"
import styles from "./skills.module.css"
import { SkillsData } from "../../../shared/types"

type Props = {
  skills: SkillsData
}

const Skills: FC<Props> = ({ skills }) => {
  const data = Object.entries(skills)
  return (
    <div className={styles.container}>
      {data.map(([title, list]) => (
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
