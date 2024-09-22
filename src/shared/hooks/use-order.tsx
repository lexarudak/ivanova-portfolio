import { DragEndEvent, DragStartEvent } from "@dnd-kit/core"
import { arrayMove } from "@dnd-kit/sortable"
import { isEqual } from "lodash"
import { useEffect, useState } from "react"

const useOrder = (savedOrder: string[]) => {
  const [currentOrder, setCurrentOrder] = useState(savedOrder)
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    setCurrentOrder(savedOrder)
  }, [savedOrder])

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

  const isOrderChanged = !isEqual(savedOrder, currentOrder)

  return {
    isOrderChanged,
    activeId,
    handleDragStart,
    handleDragEnd,
    currentOrder,
  }
}

export default useOrder
