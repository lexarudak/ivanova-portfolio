import { useDispatch, useSelector } from "react-redux"
import styles from "./about.module.css"
import { selectAbout } from "../../store/about/selectors"
import { setAbout } from "../../store/about"
import { ChangeEvent, useState } from "react"
import EditButton from "../shared-components/edit-button"

import { aboutService } from "../../service/about-service/about-service"
import { setEditBlockId, setIsLoading } from "../../store/app"
import { EDIT_BUTTON_VARIANT } from "../../shared/constants"

export const AboutForm = () => {
  const text = useSelector(selectAbout)
  const dispatch = useDispatch()
  const [value, setValue] = useState(text)

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setValue(e.target.value)

  const submit = async () => {
    try {
      dispatch(setIsLoading(true))
      const { about } = await aboutService().setAbout(value)
      dispatch(setAbout(about))
      dispatch(setEditBlockId(""))
    } finally {
      dispatch(setIsLoading(false))
    }
  }

  return (
    <div className={styles.about}>
      <p className={styles.title}>About</p>
      <textarea value={value} onChange={onChange} className={styles.text} />
      <EditButton
        variant={EDIT_BUTTON_VARIANT.save}
        onClick={submit}
        className={styles.save}
      />
    </div>
  )
}
