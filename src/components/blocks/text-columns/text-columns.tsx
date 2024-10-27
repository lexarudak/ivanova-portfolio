import { FC } from "react"
import styles from "./text-columns.module.css"
import { Block } from "../../../shared/types"
import Description, { TEXT_ALIGN } from "../../shared-components/description"
import classNames from "classnames"

const TextColumns: FC<Block> = ({ text, id, options }) => {
  const align = options?.align || ""
  const fontStyle = options?.fontStyle || ""
  return (
    <Description
      key={id}
      text={text}
      link={options?.link}
      className={classNames(styles.container, {
        [styles[align]]: align,
        [styles[fontStyle]]: fontStyle,
      })}
      textAlign={TEXT_ALIGN.left}
    />
  )
}

export default TextColumns
