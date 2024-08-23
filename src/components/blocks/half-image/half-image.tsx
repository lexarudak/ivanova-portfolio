import { FC } from "react"
import styles from "./half-image.module.css"
import { Block } from "../../../shared/types"
import classNames from "classnames"

type Props = Block & { className?: string }

const HalfImage: FC<Props> = ({ images, text, id, className }) => {
  if (!images?.length || !text?.length) {
    return null
  }
  return (
    <div className={classNames(className, styles.container)} key={id}>
      <img className={styles.img} src={images[0]} alt="Image with text" />
      <p className={styles.text}>{text[0]}</p>
    </div>
  )
}

export default HalfImage
