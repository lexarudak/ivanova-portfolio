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
    <article
      className={classNames(className, styles.container, styles[textAlign])}
    >
      {text.map((message, id) => (
        <p
          className={styles.p}
          key={id}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      ))}
    </article>
  )
}

export default Description
