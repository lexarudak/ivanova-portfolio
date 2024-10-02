import { useSelector } from "react-redux"
import EditWrapper from "../../edit-wrapper/edit-wrapper"
import styles from "./education.module.css"
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
import { messages } from "./messages"
import { useEducationUpdate } from "./hooks"
import EditButton from "../../shared-components/edit-button"
import { EDIT_BUTTON_VARIANT } from "../../../shared/constants"
import useOrder from "../../../shared/hooks/use-order"
import { selectEducationOrder } from "../../../store/about/selectors"
import { EducationItemForm, EducationItemView } from "../education-item"
import EducationOverlay from "./dnd-overlay"

const Education = () => {
  const isEditMode = useSelector(selectIsEditMode)
  const sensors = useSensors(useSensor(PointerSensor))
  const savedOrder = useSelector(selectEducationOrder)
  const { addEducation, getRemoveCallback, saveOrder } = useEducationUpdate()
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
        EDUCATION
      </h2>
      {isEditMode && (
        <button className={styles.add} onClick={addEducation}>
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
                form={<EducationItemForm id={id} />}
                view={<EducationItemView id={id} />}
              />
            ))}
          </SortableContext>

          <EducationOverlay activeId={activeId} />
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

export default Education
