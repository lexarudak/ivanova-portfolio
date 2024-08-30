import { useDispatch, useSelector } from "react-redux"
import styles from "./about.module.css"
import { selectAbout } from "../../store/about/selectors"
import { setAbout, setEditBlockId } from "../../store/about"
import { ChangeEvent, useState } from "react"
import EditButton from "../shared-components/edit-button"
import { EDIT_BUTTON_VARIANT } from "../shared-components/button/constants"
import { aboutService } from "../../service/about-service/about-service"
import { setIsLoading } from "../../store/app"

export const AboutForm = () => {
  const text = useSelector(selectAbout)
  const dispatch = useDispatch()
  const [value, setValue] = useState(text)

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setValue(e.target.value)

  const submit = async () => {
    try {
      const { about } = await aboutService().setAbout(value)
      dispatch(setAbout(about))
      dispatch(setEditBlockId(null))
      dispatch(setIsLoading(true))
    } finally {
      dispatch(setIsLoading(false))
    }
  }

  return (
    <div className={styles.about}>
      <p className={styles.title}>About</p>
      <textarea value={value} onChange={onChange} className={styles.text} />
      <EditButton variant={EDIT_BUTTON_VARIANT.save} onClick={submit} />
    </div>
  )
}
