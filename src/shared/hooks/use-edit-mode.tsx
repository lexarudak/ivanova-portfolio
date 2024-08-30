import { useEffect } from "react"
import { selectIsEditMode } from "../../store/app/selectors"
import { useDispatch, useSelector } from "react-redux"
import { setIsEditMode } from "../../store/app"
import { LS_KEY } from "../constants"

const useEditMode = (): [boolean, () => void] => {
  const isEditMode = useSelector(selectIsEditMode)
  const dispatch = useDispatch()

  const toggleIsEditMode = () => {
    const newValue = !isEditMode

    dispatch(setIsEditMode(newValue))
    localStorage.setItem(LS_KEY.isEditMode, newValue ? "edit" : "")
  }

  useEffect(() => {
    const editMode = localStorage.getItem(LS_KEY.isEditMode)
    dispatch(setIsEditMode(Boolean(editMode)))
  }, [dispatch])

  return [isEditMode, toggleIsEditMode]
}

export default useEditMode
