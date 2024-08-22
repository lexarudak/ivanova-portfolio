import { FC } from "react"
import styles from "./text-columns.module.css"
import { Block } from "../../../shared/types"
import Description, { TEXT_ALIGN } from "../../shared-components/description"

const TextColumns: FC<Block> = ({ text, id }) => (
  <Description
    key={id}
    text={text}
    className={styles.container}
    textAlign={TEXT_ALIGN.left}
  />
)

export default TextColumns
