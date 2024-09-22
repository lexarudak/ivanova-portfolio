import { FC } from "react"
import styles from "./experience-item.module.css"
import { WorkExperienceData } from "../../../shared/types"
import EditButton from "../../shared-components/edit-button"
import { EDIT_BUTTON_VARIANT, NEW_ITEM_KEY } from "../../../shared/constants"
import { setEditBlockId, setIsLoading } from "../../../store/app"
import { useDispatch, useSelector } from "react-redux"
import { aboutService } from "../../../service/about-service/about-service"
import { setExperience, setExperienceOrder } from "../../../store/about"
import { Field, Form, Formik } from "formik"
import { workExperienceSchema } from "./shema"
import classNames from "classnames"
import {
  selectExperienceById,
  selectExperienceOrder,
} from "../../../store/about/selectors"

type Props = {
  id: string
}

export const ExperienceItemForm: FC<Props> = ({ id }) => {
  const dispatch = useDispatch()
  const savedExperienceOrder = useSelector(selectExperienceOrder)
  const initialValues = useSelector(selectExperienceById(id))

  if (!initialValues) {
    return null
  }

  const submit = async (values: WorkExperienceData) => {
    try {
      dispatch(setIsLoading(true))
      const experience = await aboutService().updateExperience({
        ...values,
        id: id.replace(/-new-work$/, ""),
        achievements: values.achievements.filter(Boolean),
      })
      if (id.includes(NEW_ITEM_KEY.experience)) {
        dispatch(setExperienceOrder([experience.id, ...savedExperienceOrder]))
      }
      dispatch(setExperience(experience))
      dispatch(setEditBlockId(""))
    } finally {
      dispatch(setIsLoading(false))
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submit}
      validationSchema={workExperienceSchema}
      enableReinitialize
      validateOnBlur
    >
      {({ values: { achievements }, setFieldValue, errors, touched }) => {
        const addAchievement = () =>
          setFieldValue("achievements", [...achievements, ""])

        const errorStyle = (name: keyof WorkExperienceData) => ({
          [styles.error]: errors[name] && touched[name],
        })

        return (
          <Form>
            <div className={styles.container}>
              <div className={styles.info}>
                <Field
                  name={"title"}
                  className={classNames(styles.title, errorStyle("title"))}
                  placeholder="Company (Required)"
                />
                <Field
                  className={classNames(
                    styles.position,
                    errorStyle("position"),
                  )}
                  name={"position"}
                  placeholder="Position (Architect)"
                />
                <Field
                  className={classNames(errorStyle("time"))}
                  name={"time"}
                  placeholder="Employment Status (full time)"
                />
                <Field
                  name={"workType"}
                  className={classNames(styles.type, errorStyle("workType"))}
                  placeholder="Work Location (remote / office)"
                />
                <Field
                  className={classNames(styles.desc, errorStyle("period"))}
                  name={"period"}
                  placeholder="Period (November 2013 - April 2020)"
                />
                <Field
                  className={classNames(styles.desc, errorStyle("location"))}
                  name={"location"}
                  placeholder="Location (Minsk, Belarus)"
                />
                <EditButton
                  variant={EDIT_BUTTON_VARIANT.save}
                  className={styles.save}
                  type="submit"
                />
              </div>

              <ul className={styles.achievements}>
                <li className={styles.title}>Achievements</li>
                {achievements.map((_, idx) => (
                  <Field
                    as={"textarea"}
                    placeholder="Empty fields will be removed"
                    key={idx}
                    className={styles.desc}
                    name={`achievements.${idx}`}
                  />
                ))}
                <EditButton
                  variant={EDIT_BUTTON_VARIANT.plus}
                  className={styles.add}
                  onClick={addAchievement}
                  type="button"
                />
              </ul>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
