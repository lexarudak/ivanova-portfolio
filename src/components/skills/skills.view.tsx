import styles from "./skills.module.css"
import { useSelector } from "react-redux"
import { selectSkills } from "../../store/about/selectors"

export const SkillsView = () => {
  const skills = useSelector(selectSkills)
  const data = Object.entries(skills)

  return (
    <div className={styles.container}>
      {data.map(([title, list]) => (
        <div key={title} className={styles.block}>
          <p className={styles.title}>{title}</p>
          <ul className={styles.list}>
            {list.map((skill, idx) => (
              <li key={idx} className={styles.item}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
