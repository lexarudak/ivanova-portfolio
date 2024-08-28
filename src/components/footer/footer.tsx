import { Link } from "react-router-dom"
import styles from "./footer.module.css"
import { PAGES } from "../../router/constants"
import useHomePage from "../../shared/hooks/use-home-page"
import sharedStyles from "../../styles/shared.module.css"
import Lock from "../lock"

const Footer = () => {
  const { isHomePage, currentPage } = useHomePage()
  const isContactsPage = currentPage == PAGES.contacts

  if (isHomePage) {
    return null
  }

  return (
    <footer className={styles.footer}>
      <Link
        className={sharedStyles.link}
        to={isContactsPage ? PAGES.works : PAGES.contacts}
      >
        {isContactsPage ? "To my projects" : "Contact me"}
      </Link>
      <Lock />
    </footer>
  )
}

export default Footer
