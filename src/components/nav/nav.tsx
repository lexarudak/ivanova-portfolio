import { Link, useNavigate } from "react-router-dom"
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
  const navigate = useNavigate()

  return (
    <nav className={cn(styles.nav, sharedStyles.container)}>
      <Link
        to={PAGES.home}
        className={classNames({ [styles.hide]: isHomePage }, styles.home)}
      />

      <ul
        className={cn(styles.list, {
          [styles.center]: isHomePage,
        })}
      >
        {navList.map(({ name, link }) => (
          <button
            onClick={() => navigate(link)}
            key={name}
            disabled={link === currentPage}
            className={classNames(sharedStyles.link, {
              [sharedStyles.active]: currentPage.includes(link),
            })}
          >
            {name}
          </button>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
