import styles from "./header.module.css"
import cn from "classnames"
import Nav from "../nav/nav"
import useHomePage from "../../hooks/use-home-page"

export const Header = () => {
  const { isHomePage } = useHomePage()

  return (
    <header className={cn(styles.header, { [styles.fullScreen]: isHomePage })}>
      <Nav />
    </header>
  )
}
