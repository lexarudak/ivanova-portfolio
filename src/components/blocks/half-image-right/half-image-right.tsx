import { FC } from "react"
import styles from "./half-image-right.module.css"
import { Block } from "../../../shared/types"
import HalfImage from "../half-image/half-image"

const HalfImageRight: FC<Block> = props => (
  <HalfImage {...props} className={styles.rightView} />
)

export default HalfImageRight
