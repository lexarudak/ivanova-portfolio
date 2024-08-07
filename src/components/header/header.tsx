import styles from "./header.module.css"
import cn from "classnames"
import Nav from "../nav/nav"
import useHomePage from "../../hooks/use-home-page"
import LandingLogo from "../landing-logo/landing-logo"

export const Header = () => {
  const { isHomePage } = useHomePage()

  return (
    <header className={cn(styles.header, { [styles.fullScreen]: isHomePage })}>
      <LandingLogo isActive={isHomePage} />
      <Nav />
    </header>
  )
}
