import { FC } from "react"
import styles from "./description.module.css"
import classNames from "classnames"
import { TEXT_ALIGN } from "./constants"
import { TextLink } from "../../../shared/types"

type Props = {
  text?: string[]
  className?: string
  textAlign?: TEXT_ALIGN
  link?: TextLink
}

const Description: FC<Props> = ({
  text,
  className,
  textAlign = TEXT_ALIGN.center,
  link,
}) => {
  if (!text?.length) {
    return null
  }

  let updatedText = text

  if (link) {
    const { text, href, internal } = link
    updatedText = updatedText.map(message => {
      return message.replace(
        text,
        `<a href=${href} target={${internal ? "_self" : "_blank"}}>${text}</a>`,
      )
    })
  }

  return (
    <article
      className={classNames(className, styles.container, styles[textAlign])}
    >
      {updatedText.map((message, id) => (
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
