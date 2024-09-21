import { useEffect, useState } from "react"
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
import { DragEndEvent, DragStartEvent } from "@dnd-kit/core"
import { arrayMove } from "@dnd-kit/sortable"
import { setEditBlockId, setIsLoading } from "../../../store/app"
import { aboutService } from "../../../service/about-service/about-service"
import { isEqual } from "lodash"
import { selectEditBlockId } from "../../../store/app/selectors"

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
    if (!editBlockId.includes("new")) {
      dispatch(clearExperience())
    }
  }, [dispatch, editBlockId])

  const addExperience = () => {
    const id = `${v4()}-new`
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

  return { addExperience, getRemoveCallback }
}

export const useWorkExperienceOrder = () => {
  const dispatch = useDispatch()
  const savedExperienceOrder = useSelector(selectExperienceOrder)
  const [currentOrder, setCurrentOrder] = useState(savedExperienceOrder)
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    setCurrentOrder(savedExperienceOrder)
  }, [savedExperienceOrder])

  const handleDragStart = ({ active: { id } }: DragStartEvent) => {
    setActiveId(String(id))
  }

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveId(null)
    const { active, over } = event

    if (over && active.id !== over.id) {
      setCurrentOrder(prev => {
        const oldIndex = prev.indexOf(String(active.id))
        const newIndex = prev.indexOf(String(over.id))

        return arrayMove(prev, oldIndex, newIndex)
      })
    }
  }

  const isOrderChanged = !isEqual(savedExperienceOrder, currentOrder)

  const saveOrder = async () => {
    try {
      dispatch(setIsLoading(true))
      const { order } = await aboutService().saveExperienceOrder(currentOrder)
      dispatch(setExperienceOrder(order))
    } finally {
      dispatch(setIsLoading(false))
    }
  }

  return {
    isOrderChanged,
    activeId,
    handleDragStart,
    handleDragEnd,
    saveOrder,
    currentOrder,
  }
}
