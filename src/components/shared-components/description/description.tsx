import { FC } from "react"
import styles from "./description.module.css"
import classNames from "classnames"
import { TEXT_ALIGN } from "./constants"

type Props = {
  text?: string[]
  className?: string
  textAlign?: TEXT_ALIGN
}

const Description: FC<Props> = ({
  text,
  className,
  textAlign = TEXT_ALIGN.center,
}) => {
  if (!text?.length) {
    return null
  }

  return (
    <div className={classNames(styles.container, styles[textAlign], className)}>
      {text.map((message, id) => (
        <p key={id}>{message}</p>
      ))}
    </div>
  )
}

export default Description
