import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectExperienceOrder } from "../../../store/about/selectors"
import {
  clearExperience,
  deleteExperience,
  setExperience,
  setExperienceOrder,
} from "../../../store/about"
import { v4 } from "uuid"
import { WorkExperienceData } from "../../../shared/types"
import { setEditBlockId, setIsLoading } from "../../../store/app"
import { aboutService } from "../../../service/about-service/about-service"
import { selectEditBlockId } from "../../../store/app/selectors"
import { NEW_ITEM_KEY } from "../../../shared/constants"

const defaultExperience: WorkExperienceData = {
  id: "",
  title: "",
  location: "",
  position: "",
  period: "",
  workType: "",
  time: "",
  achievements: [],
  isSaved: false,
}

export const useWorkExperienceUpdate = () => {
  const editBlockId = useSelector(selectEditBlockId)
  const savedExperienceOrder = useSelector(selectExperienceOrder)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!editBlockId.includes(NEW_ITEM_KEY.experience)) {
      dispatch(clearExperience())
    }
  }, [dispatch, editBlockId])

  const addExperience = () => {
    const id = `${v4()}${NEW_ITEM_KEY.experience}`
    dispatch(setExperience({ ...defaultExperience, id }))
    dispatch(setExperienceOrder([id, ...savedExperienceOrder]))
    dispatch(setEditBlockId(id))
  }

  const getRemoveCallback = (dataId: string) => async () => {
    try {
      dispatch(setIsLoading(true))
      const data = await aboutService().deleteExperience(dataId)
      dispatch(deleteExperience(data))
    } finally {
      dispatch(setIsLoading(false))
    }
  }

  const saveOrder = async (currentOrder: string[]) => {
    try {
      dispatch(setIsLoading(true))
      const { order } = await aboutService().saveExperienceOrder(currentOrder)
      dispatch(setExperienceOrder(order))
    } finally {
      dispatch(setIsLoading(false))
    }
  }

  return { addExperience, getRemoveCallback, saveOrder }
}
