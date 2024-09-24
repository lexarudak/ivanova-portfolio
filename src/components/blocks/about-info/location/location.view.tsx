import { useSelector } from "react-redux"
import styles from "../about-info.module.css"
import { selectAboutLocation } from "../../../../store/about/selectors"
import { getExperience } from "../../../../shared/helpers"

const LocationView = () => {
  const location = useSelector(selectAboutLocation)
  return (
    <div className={styles.info}>
      <p>
        <span className={styles.title}>{"Experience"}</span>
        <span>{getExperience()}</span>
      </p>
      <p>
        <span className={styles.title}>{"Location"}</span>
        <span>{location}</span>
      </p>
    </div>
  )
}

export default LocationView
