import styles from "./skills.module.css"
import { selectSkills } from "../../../store/about/selectors"
import { useDispatch, useSelector } from "react-redux"
import { ChangeEvent, useState } from "react"
import { SkillsData } from "../../../shared/types"
import EditButton from "../../shared-components/edit-button"
import { EDIT_BUTTON_VARIANT } from "../../../shared/constants"
import { aboutService } from "../../../service/about-service/about-service"
import { setSkills } from "../../../store/about"
import { cleanObjectArrays } from "../../../shared/helpers"
import useSubmit from "../../../shared/hooks/use-submit"
import { isEqual } from "lodash"

export const SkillsForm = () => {
  const dispatch = useDispatch()
  const initSkills = useSelector(selectSkills)
  const [currentSkills, setCurrentSkills] = useState(initSkills)
  const data = Object.entries(currentSkills) as [keyof SkillsData, string[]][]

  const onChange =
    (list: string[], idx: number, title: keyof SkillsData) =>
    (e: ChangeEvent<HTMLInputElement>) =>
      setCurrentSkills(prev => {
        const newList = [...list]
        newList[idx] = e.target.value
        return { ...prev, [title]: newList }
      })

  const onClick = (title: keyof SkillsData) => () =>
    setCurrentSkills({
      ...currentSkills,
      [title]: [...currentSkills[title], ""],
    })

  const submit = useSubmit(async () => {
    const { skills } = await aboutService().setSkills(
      cleanObjectArrays(currentSkills),
    )
    dispatch(setSkills(skills))
  })

  return (
    <>
      <div className={styles.container}>
        <h2>SKILLS</h2>
        <div className={styles.listContainer}>
          {data.map(([title, list]) => (
            <div key={title} className={styles.block}>
              <p className={styles.title}>{title}</p>

              <ul className={styles.list}>
                {list.map((skill, idx) => (
                  <li key={idx} className={styles.item}>
                    <input
                      value={skill}
                      onChange={onChange(list, idx, title)}
                    />
                  </li>
                ))}
              </ul>

              <EditButton
                variant={EDIT_BUTTON_VARIANT.plus}
                onClick={onClick(title)}
                className={styles.plus}
              />
            </div>
          ))}
        </div>

        <EditButton
          variant={EDIT_BUTTON_VARIANT.save}
          onClick={submit}
          className={styles.save}
          disabled={isEqual(currentSkills, initSkills)}
        />
      </div>
    </>
  )
}
