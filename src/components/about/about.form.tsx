import { useDispatch, useSelector } from "react-redux"
import styles from "./about.module.css"
import { selectAbout } from "../../store/about/selectors"
import { setAbout } from "../../store/about"
import { ChangeEvent, useState } from "react"
import EditButton from "../shared-components/edit-button"

import { aboutService } from "../../service/about-service/about-service"
import { EDIT_BUTTON_VARIANT } from "../../shared/constants"
import useSubmit from "../../shared/hooks/use-submit"

export const AboutForm = () => {
  const text = useSelector(selectAbout)
  const dispatch = useDispatch()
  const [value, setValue] = useState(text)

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setValue(e.target.value)

  const submit = useSubmit(async () => {
    const { about } = await aboutService().setAbout(value)
    dispatch(setAbout(about))
  })

  return (
    <div className={styles.about}>
      <p className={styles.title}>About</p>
      <textarea value={value} onChange={onChange} className={styles.text} />
      <EditButton
        variant={EDIT_BUTTON_VARIANT.save}
        onClick={submit}
        className={styles.save}
        disabled={text === value}
      />
    </div>
  )
}
