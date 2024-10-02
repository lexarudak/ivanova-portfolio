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
import { useWorkExperienceUpdate } from "./hooks"
import EditButton from "../../shared-components/edit-button"
import { EDIT_BUTTON_VARIANT } from "../../../shared/constants"
import useOrder from "../../../shared/hooks/use-order"
import { selectExperienceOrder } from "../../../store/about/selectors"

const ProfessionalExperience = () => {
  const isEditMode = useSelector(selectIsEditMode)
  const sensors = useSensors(useSensor(PointerSensor))
  const savedOrder = useSelector(selectExperienceOrder)
  const { addExperience, getRemoveCallback, saveOrder } =
    useWorkExperienceUpdate()
  const {
    handleDragEnd,
    handleDragStart,
    activeId,
    isOrderChanged,
    currentOrder,
  } = useOrder(savedOrder)

  return (
    <>
      <h2 className={classNames({ [styles.editMode]: isEditMode })}>
        EXPERIENCE
      </h2>
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

      <EditButton
        variant={EDIT_BUTTON_VARIANT.save}
        onClick={() => saveOrder(currentOrder)}
        className={classNames({
          [styles.saveOrder]: true,
          [styles.hide]: !isOrderChanged,
        })}
      />
    </>
  )
}

export default ProfessionalExperience
