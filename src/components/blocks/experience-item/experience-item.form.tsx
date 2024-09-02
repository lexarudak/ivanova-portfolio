import { FC } from "react"
import styles from "./experience-item.module.css"
import { WorkExperienceData } from "../../../shared/types"
import EditButton from "../../shared-components/edit-button"
import { EDIT_BUTTON_VARIANT } from "../../../shared/constants"
import { setIsLoading } from "../../../store/app"
import { useDispatch } from "react-redux"
import { aboutService } from "../../../service/about-service/about-service"
import { setEditBlockId, setExperience } from "../../../store/about"
import { Field, Form, Formik } from "formik"
import { workExperienceSchema } from "./shema"
import classNames from "classnames"

type Props = {
  initialValues: WorkExperienceData
}

export const ExperienceItemForm: FC<Props> = ({ initialValues }) => {
  const dispatch = useDispatch()

  const submit = async (values: WorkExperienceData) => {
    dispatch(setIsLoading(true))

    const experience = await aboutService().updateExperience({
      ...values,
      achievements: values.achievements.filter(val => !!val),
    })

    dispatch(setExperience(experience))
    dispatch(setEditBlockId(null))
    dispatch(setIsLoading(false))
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submit}
      validationSchema={workExperienceSchema}
      enableReinitialize
      validateOnBlur
    >
      {({
        values: { achievements },
        submitForm,
        setFieldValue,
        errors,
        touched,
      }) => {
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
                  onClick={submitForm}
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
