import { Outlet, ScrollRestoration } from "react-router-dom"
import { Header } from "../../components/header/header"
import sharedStyles from "../../styles/shared.module.css"
import styles from "./root.module.css"
import cn from "classnames"
import Footer from "../../components/footer"
import Loader from "../../components/loader/loader"
import { useSelector } from "react-redux"
import { selectIsLoading } from "../../store/app/selectors"

const Root = () => {
  const isLoading = useSelector(selectIsLoading)
  return (
    <>
      <Header />
      <main className={cn(sharedStyles.container, styles.main)}>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
      <Loader isLoading={isLoading} />
    </>
  )
}

export default Root
