import { useSelector } from "react-redux"
import styles from "../about-info.module.css"
import { selectAboutLocation } from "../../../../store/about/selectors"
import { getExperience } from "../../../../shared/helpers"
import classNames from "classnames"

const LocationView = () => {
  const location = useSelector(selectAboutLocation)
  return (
    <div className={classNames(styles.info, styles.infoView)}>
      <p>
        <span className={styles.title}>{"Experience"}</span>
        <span className={styles.value}>{getExperience()}</span>
      </p>
      <p>
        <span className={styles.title}>{"Location"}</span>
        <span className={styles.value}>{location || "-"}</span>
      </p>
    </div>
  )
}

export default LocationView
