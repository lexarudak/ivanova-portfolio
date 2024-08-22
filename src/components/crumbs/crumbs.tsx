import { FC, ReactNode } from "react"
import styles from "./crumbs.module.css"
import { Link } from "react-router-dom"
import classNames from "classnames"

type Props = {
  links: {
    to: string
    title: string
  }[]
  className?: string
}

const Crumbs: FC<Props> = ({ links, className }) => {
  return (
    <nav className={classNames(styles.nav, className)}>
      {links.reduce((acc, { to, title }, ind) => {
        if (ind) {
          acc.push("/")
        }

        acc.push(
          <Link className={styles.link} to={to} key={ind}>
            {title}
          </Link>,
        )

        return acc
      }, [] as Array<ReactNode>)}
    </nav>
  )
}

export default Crumbs
