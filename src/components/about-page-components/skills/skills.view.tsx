import styles from "./skills.module.css"
import { useSelector } from "react-redux"
import { selectSkills } from "../../../store/about/selectors"
import classNames from "classnames"

export const SkillsView = () => {
  const skills = useSelector(selectSkills)
  const data = Object.entries(skills)

  return (
    <div className={classNames(styles.container, styles.view)}>
      <h2>SKILLS</h2>
      <div className={styles.listContainer}>
        {data.map(([title, list]) => (
          <div key={title} className={styles.block}>
            <p className={styles.title}>{title}</p>
            <ul className={styles.list}>
              {list.map((skill, idx) => (
                <li key={idx} className={styles.item}>
                  <p>{skill}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
