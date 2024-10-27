import { useSelector } from "react-redux"
import { BLOCK_ID } from "../../../shared/constants"
import EditWrapper from "../../edit-wrapper/edit-wrapper"
import styles from "./about-image.module.css"
import { selectAboutImage } from "../../../store/about/selectors"
import ImageForm from "../../image-form/image-form"
import { xToString, yToString } from "../../../shared/helpers"

const AboutImage = () => {
  const defaultImageSrc = "/ivanova.png"
  const { src, x, y } = useSelector(selectAboutImage)
  const imageSrc = src || defaultImageSrc

  const imageStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundPositionX: xToString(x),
    backgroundPositionY: yToString(y),
  }

  return (
    <EditWrapper
      id={BLOCK_ID.aboutImage}
      view={<div style={imageStyle} className={styles.img} />}
      form={
        <ImageForm
          src={imageSrc}
          initPosition={{ x, y }}
          imgStyle={styles.img}
        />
      }
    />
  )
}

export default AboutImage
