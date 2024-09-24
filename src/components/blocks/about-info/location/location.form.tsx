import { useDispatch, useSelector } from "react-redux"
import styles from "../about-info.module.css"
import { selectAboutLocation } from "../../../../store/about/selectors"
import { useState } from "react"
import { getExperience } from "../../../../shared/helpers"
import EditButton from "../../../shared-components/edit-button"
import { EDIT_BUTTON_VARIANT } from "../../../../shared/constants"
import useSubmit from "../../../../shared/hooks/use-submit"
import { aboutService } from "../../../../service/about-service/about-service"
import { setLocation } from "../../../../store/about"

const LocationForm = () => {
  const dispatch = useDispatch()
  const location = useSelector(selectAboutLocation)
  const [value, setValue] = useState(location)

  const submit = useSubmit(async () => {
    const { location } = await aboutService().updateLocation(value)
    dispatch(setLocation(location))
  })

  return (
    <div className={styles.info}>
      <p>
        <span className={styles.title}>{"Experience"}</span>
        <span>{getExperience()}</span>
      </p>
      <p>
        <span className={styles.title}>{"Location"}</span>
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Almaty, Kazakhstan"
        />
      </p>
      {}
      <EditButton
        variant={EDIT_BUTTON_VARIANT.save}
        onClick={submit}
        disabled={value === location}
      />
    </div>
  )
}

export default LocationForm
