import { useNavigate } from "react-router-dom"
import { FILTERS, SEARCH_PARAMS } from "../constants"
import { PAGES } from "../../router/constants"

const useFilterNavigate = () => {
  const basicNavigate = useNavigate()

  const navigate = (filter?: FILTERS) => {
    if (filter) {
      basicNavigate(`${PAGES.works}?${SEARCH_PARAMS.filter}=${filter}`)
      return
    }
    basicNavigate(PAGES.works)
  }

  return navigate
}

export default useFilterNavigate
