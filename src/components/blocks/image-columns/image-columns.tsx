import { FC } from "react"
import styles from "./image-columns.module.css"
import { Block } from "../../../shared/types"

const ImageColumns: FC<Block> = ({ images, id }) => {
  if (!images?.length) {
    return null
  }

  return (
    <div key={id} className={styles.container}>
      {images.map((src, ind) => (
        <img className={styles.img} src={src} alt={`Image ${id}`} key={ind} />
      ))}
    </div>
  )
}

export default ImageColumns
