import { useSelector } from "react-redux"
import EditWrapper from "../../edit-wrapper/edit-wrapper"
import styles from "./professional-experience.module.css"
import { ExperienceItemForm } from "../experience-item/experience-item.form"
import { ExperienceItemView } from "../experience-item"
import { selectIsEditMode } from "../../../store/app/selectors"
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import classNames from "classnames"
import ProfessionalExpOverlay from "./dnd-overlay"
import { messages } from "./messages"
import { useWorkExperienceOrder, useWorkExperienceUpdate } from "./hooks"
import EditButton from "../../shared-components/edit-button"
import { EDIT_BUTTON_VARIANT } from "../../../shared/constants"

const ProfessionalExperience = () => {
  const isEditMode = useSelector(selectIsEditMode)
  const sensors = useSensors(useSensor(PointerSensor))
  const { addExperience, getRemoveCallback } = useWorkExperienceUpdate()
  const {
    handleDragEnd,
    handleDragStart,
    activeId,
    isOrderChanged,
    saveOrder,
    currentOrder,
  } = useWorkExperienceOrder()

  return (
    <>
      {isEditMode && (
        <button className={styles.add} onClick={addExperience}>
          {messages.add}
        </button>
      )}

      <div
        className={classNames({
          [styles.changed]: isOrderChanged,
          [styles.container]: true,
        })}
      >
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
        >
          <SortableContext
            items={currentOrder}
            strategy={verticalListSortingStrategy}
          >
            {currentOrder.map(id => (
              <EditWrapper
                key={id}
                id={id}
                className={styles.item}
                removeInfo={{
                  text: messages.removeText,
                  remove: getRemoveCallback(id),
                }}
                form={<ExperienceItemForm id={id} />}
                view={<ExperienceItemView id={id} />}
              />
            ))}
          </SortableContext>

          <ProfessionalExpOverlay activeId={activeId} />
        </DndContext>
      </div>
      {isOrderChanged && (
        <EditButton
          variant={EDIT_BUTTON_VARIANT.save}
          onClick={saveOrder}
          className={styles.saveOrder}
        />
      )}
    </>
  )
}

export default ProfessionalExperience
