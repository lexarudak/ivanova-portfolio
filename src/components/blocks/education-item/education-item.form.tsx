import { FC } from "react"
import styles from "./education-item.module.css"
import { ExperienceData } from "../../../shared/types"
import EditButton from "../../shared-components/edit-button"
import { EDIT_BUTTON_VARIANT, NEW_ITEM_KEY } from "../../../shared/constants"
import { setEditBlockId, setIsLoading } from "../../../store/app"
import { useDispatch, useSelector } from "react-redux"
import { aboutService } from "../../../service/about-service/about-service"
import { setEducation, setEducationOrder } from "../../../store/about"
import { Field, Form, Formik } from "formik"
import { EducationSchema } from "./shema"
import classNames from "classnames"
import {
  selectEducationById,
  selectEducationOrder,
} from "../../../store/about/selectors"

type Props = {
  id: string
}

export const EducationItemForm: FC<Props> = ({ id }) => {
  const dispatch = useDispatch()
  const savedOrder = useSelector(selectEducationOrder)
  const initialValues = useSelector(selectEducationById(id))

  if (!initialValues) {
    return null
  }

  const submit = async (values: ExperienceData) => {
    try {
      dispatch(setIsLoading(true))
      const education = await aboutService().updateEducation({
        ...values,
        id: id.replace(/-new-education$/, ""),
      })
      if (id.includes(NEW_ITEM_KEY.education)) {
        dispatch(setEducationOrder([education.id, ...savedOrder]))
      }
      dispatch(setEducation(education))
      dispatch(setEditBlockId(""))
    } finally {
      dispatch(setIsLoading(false))
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submit}
      validationSchema={EducationSchema}
      enableReinitialize
      validateOnBlur
    >
      {({ errors, touched }) => {
        const errorStyle = (name: keyof ExperienceData) => ({
          [styles.error]: errors[name] && touched[name],
        })

        return (
          <Form>
            <div className={styles.container}>
              <div className={styles.info}>
                <Field
                  name={"title"}
                  className={classNames(styles.title, errorStyle("title"))}
                  placeholder="University (Belorussian National Technical University)"
                />
                <Field
                  className={classNames(
                    styles.position,
                    errorStyle("position"),
                  )}
                  name={"position"}
                  placeholder="Specialty (Bachelor of Architecture)"
                />
                <Field
                  className={classNames(styles.desc, errorStyle("period"))}
                  name={"period"}
                  placeholder="Period (September 2008 - June 2014)"
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
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
