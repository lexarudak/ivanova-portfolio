import { Link } from "react-router-dom"
import { PAGES } from "../../router/constants"
import styles from "./nav.module.css"
import useHomePage from "../../hooks/use-home-page"
import cn from "classnames"
import sharedStyles from "../../styles/shared.module.css"

const navList = [
  { name: "Works", link: PAGES.works },
  { name: "Skills", link: PAGES.skills },
  { name: "Contacts", link: PAGES.contacts },
]

const Nav = () => {
  const { isHomePage } = useHomePage()

  return (
    <nav className={cn(styles.nav, sharedStyles.container)}>
      <ul className={styles.list}>
        <Link
          to={PAGES.home}
          className={cn(styles.home, { [styles.hide]: isHomePage })}
        >
          Home
        </Link>
        {navList.map(({ name, link }) => (
          <Link to={link} className={styles.link}>
            {name}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
