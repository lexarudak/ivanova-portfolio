import styles from "./header.module.css"
import cn from "classnames"
import Nav from "../nav/nav"
import LandingLogo from "../landing-logo/landing-logo"
import useHomePage from "../../shared/hooks/use-home-page"

export const Header = () => {
  const { isHomePage } = useHomePage()

  return (
    <>
      <header
        className={cn(styles.header, { [styles.fullScreen]: isHomePage })}
      >
        <LandingLogo isActive={isHomePage} />
        <Nav />
      </header>
      <div className={styles.headerPlaceholder} />
    </>
  )
}
