import { useDispatch, useSelector } from "react-redux"
import {
  selectAboutEditBlockId,
  selectExperience,
} from "../../../store/about/selectors"
import EditWrapper from "../../edit-wrapper/edit-wrapper"
import { ABOUT_BLOCK_ID } from "../../../shared/constants"
import {
  clearExperience,
  setEditBlockId,
  setExperience,
} from "../../../store/about"
import styles from "./professional-experience.module.css"
import { ExperienceItemForm } from "../experience-item/experience-item.form"
import { ExperienceItemView } from "../experience-item"
import { selectIsEditMode } from "../../../store/app/selectors"

import { v4 } from "uuid"
import { useEffect } from "react"
import { WorkExperienceData } from "../../../shared/types"

const defaultExperience: WorkExperienceData = {
  id: "",
  title: "",
  location: "",
  position: "",
  period: "",
  workType: "",
  time: "",
  achievements: [],
  isSaved: false,
}

const ProfessionalExperience = () => {
  const experience = useSelector(selectExperience)
  const editBlockId = useSelector(selectAboutEditBlockId)
  const isEditMode = useSelector(selectIsEditMode)
  const dispatch = useDispatch()
  const setEditId = (id: string) => (isEdit: boolean) =>
    dispatch(setEditBlockId(isEdit ? id : null))

  const addExperience = () => {
    const id = v4()
    dispatch(setExperience({ ...defaultExperience, id }))
    setEditId(`${ABOUT_BLOCK_ID.experience}-${id}`)(true)
  }

  useEffect(() => {
    if (!editBlockId) {
      dispatch(clearExperience())
    }
  }, [dispatch, editBlockId])

  return (
    <>
      {isEditMode && (
        <button
          className={styles.add}
          disabled={!!editBlockId}
          onClick={addExperience}
        >
          Add Experience
        </button>
      )}
      {experience.map(data => {
        const removeInfo = {
          text: "Do you really want to remove this Work Experience?",
          remove: () => {
            console.log(data.id)
          },
        }

        return (
          <EditWrapper
            key={data.id}
            className={styles.item}
            isBlockEdit={
              editBlockId === `${ABOUT_BLOCK_ID.experience}-${data.id}`
            }
            setIsBlockEdit={setEditId(
              `${ABOUT_BLOCK_ID.experience}-${data.id}`,
            )}
            removeInfo={removeInfo}
            form={<ExperienceItemForm initialValues={data} />}
            view={<ExperienceItemView experience={data} />}
          />
        )
      })}
    </>
  )
}

export default ProfessionalExperience
