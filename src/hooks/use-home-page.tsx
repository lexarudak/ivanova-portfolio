import { useLocation } from "react-router-dom"
import { PAGES } from "../router/constants"

const useHomePage = () => {
  const { pathname } = useLocation()
  const isHomePage = pathname === PAGES.home

  return {
    isHomePage,
  }
}

export default useHomePage
