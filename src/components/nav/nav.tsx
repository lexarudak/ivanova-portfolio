import { Link } from "react-router-dom"
import { PAGES } from "../../router/constants"
import styles from "./nav.module.css"
import cn from "classnames"
import sharedStyles from "../../styles/shared.module.css"
import classNames from "classnames"
import useHomePage from "../../shared/hooks/use-home-page"

const navList = [
  { name: "Works", link: PAGES.works },
  { name: "About", link: PAGES.about },
  { name: "Contacts", link: PAGES.contacts },
]

const Nav = () => {
  const { isHomePage, currentPage } = useHomePage()

  return (
    <nav className={cn(styles.nav, sharedStyles.container)}>
      <ul className={cn(styles.list)}>
        <Link
          to={PAGES.home}
          className={classNames({ [styles.hide]: isHomePage }, styles.home)}
        />

        {navList.map(({ name, link }) => (
          <Link
            to={link}
            key={name}
            className={classNames(styles.link, {
              [styles.active]: link === currentPage,
            })}
          >
            {name}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default Nav