import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectEducationOrder } from "../../../store/about/selectors"
import {
  clearEducation,
  deleteEducation,
  setEducation,
  setEducationOrder,
} from "../../../store/about"
import { v4 } from "uuid"
import { ExperienceData } from "../../../shared/types"
import { setEditBlockId, setIsLoading } from "../../../store/app"
import { aboutService } from "../../../service/about-service/about-service"
import { selectEditBlockId } from "../../../store/app/selectors"
import { NEW_ITEM_KEY } from "../../../shared/constants"

const defaultExperience: ExperienceData = {
  id: "",
  title: "",
  location: "",
  period: "",
  isSaved: false,
  position: "",
}

export const useEducationUpdate = () => {
  const editBlockId = useSelector(selectEditBlockId)
  const savedEducationOrder = useSelector(selectEducationOrder)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!editBlockId.includes(NEW_ITEM_KEY.education)) {
      dispatch(clearEducation())
    }
  }, [dispatch, editBlockId])

  const addEducation = () => {
    const id = `${v4()}${NEW_ITEM_KEY.education}`
    dispatch(setEducation({ ...defaultExperience, id }))
    dispatch(setEducationOrder([id, ...savedEducationOrder]))
    dispatch(setEditBlockId(id))
  }

  const getRemoveCallback = (id: string) => async () => {
    try {
      dispatch(setIsLoading(true))
      const data = await aboutService().deleteEducation(id)
      dispatch(deleteEducation(data))
    } finally {
      dispatch(setIsLoading(false))
    }
  }

  const saveOrder = async (currentOrder: string[]) => {
    try {
      dispatch(setIsLoading(true))
      const { order } = await aboutService().saveEducationOrder(currentOrder)
      dispatch(setEducationOrder(order))
    } finally {
      dispatch(setIsLoading(false))
    }
  }

  return { addEducation, getRemoveCallback, saveOrder }
}
