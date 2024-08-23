import { Outlet, ScrollRestoration } from "react-router-dom"
import { Header } from "../../components/header/header"
import sharedStyles from "../../styles/shared.module.css"
import styles from "./root.module.css"
import cn from "classnames"

const Root = () => {
  return (
    <>
      <Header />
      <main className={cn(sharedStyles.container, styles.main)}>
        <Outlet />
      </main>
      <footer />
      <ScrollRestoration />
    </>
  )
}

export default Root
