import { useSelector } from "react-redux"
import { BLOCK_ID } from "../../../shared/constants"
import EditWrapper from "../../edit-wrapper/edit-wrapper"
import styles from "./about-image.module.css"
import { selectAboutImage } from "../../../store/about/selectors"

const alt = "about image"

const AboutImage = () => {
  const image = useSelector(selectAboutImage)

  return (
    <EditWrapper
      id={BLOCK_ID.aboutImage}
      view={<img src={image} alt={alt} className={styles.img} />}
      form={<img src={image} alt={alt} className={styles.img} />}
    />
  )
}

export default AboutImage
