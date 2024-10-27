import { FC } from "react"
import styles from "./half-image-right-contain.module.css"
import { Block } from "../../../shared/types"
import HalfImage from "../half-image/half-image"

const HalfImageRightContain: FC<Block> = props => (
  <HalfImage {...props} className={styles.rightView} key={props.id} />
)

export default HalfImageRightContain
