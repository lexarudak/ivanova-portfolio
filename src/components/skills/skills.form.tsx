import styles from "./skills.module.css"
import { selectSkills } from "../../store/about/selectors"
import { useSelector } from "react-redux"

export const SkillsForm = () => {
  const skills = useSelector(selectSkills)

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
