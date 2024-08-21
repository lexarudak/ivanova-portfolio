import { FC } from "react"
import styles from "./carousel.module.css"
import { Block } from "../../../shared/types"

const Carousel: FC<Block> = () => {
  return <div className={styles.carousel}>Carousel</div>
}

export default Carousel
