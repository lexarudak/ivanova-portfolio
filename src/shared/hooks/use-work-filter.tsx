import { useLocation } from "react-router-dom"
import { SEARCH_PARAMS } from "../constants"

const useWorkFilter = () => {
  const { search } = useLocation()
  const queryParams = new URLSearchParams(search)
  const activeFilter = queryParams.get(SEARCH_PARAMS.filter)
  return activeFilter
}

export default useWorkFilter
