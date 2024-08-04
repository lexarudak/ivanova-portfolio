import { Outlet } from "react-router-dom"
import { Header } from "../../components/header/header"

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default Root
