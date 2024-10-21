import { FC } from "react"
import styles from "./image-columns-contain.module.css"
import { Block } from "../../../shared/types"

const ImageColumnsContain: FC<Block> = ({ images, id }) => {
  if (!images?.length) {
    return null
  }

  return (
    <div key={id} className={styles.container}>
      {images.map((src, ind) => (
        // <div className={styles.imgWrapper}>
        <div
          className={styles.img}
          style={{
            backgroundImage: `url(${src})`,
          }}
          key={ind}
        />
        // </div>
      ))}
    </div>
  )
}

export default ImageColumnsContain
