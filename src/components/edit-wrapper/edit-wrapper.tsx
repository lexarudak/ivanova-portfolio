import { FC, ReactNode, useState } from "react"
import styles from "./edit-wrapper.module.css"
import { useDispatch, useSelector } from "react-redux"
import { selectEditBlockId, selectIsEditMode } from "../../store/app/selectors"
import EditButton from "../shared-components/edit-button"

import classNames from "classnames"
import { EDIT_BUTTON_VARIANT } from "../../shared/constants"
import { createPortal } from "react-dom"
import RemovePopup from "../remove-popup"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { setEditBlockId } from "../../store/app"

type RemoveInfo = {
  text: string
  remove: () => Promise<void>
}

type Props = {
  view: ReactNode
  form: ReactNode
  className?: string
  removeInfo?: RemoveInfo
  id: string
}

const EditWrapper: FC<Props> = ({ view, form, className, removeInfo, id }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const dispatch = useDispatch()
  const editBlockId = useSelector(selectEditBlockId)
  const isEditMode = useSelector(selectIsEditMode)
  const [removeItem, setRemoveItem] = useState<RemoveInfo | null>(null)
  const isBlockEdit = editBlockId === id

  const onRemoveClick = () => removeInfo && setRemoveItem(removeInfo)
  const onCancel = () => setRemoveItem(null)

  const isEditHandler = (isEdit: boolean) => () =>
    dispatch(setEditBlockId(isEdit ? id : ""))

  const onRemove = async () => {
    await removeItem?.remove()
    setRemoveItem(null)
  }

  if (isBlockEdit) {
    return (
      <div
        className={classNames(className, styles.container, {
          [styles.edit]: isEditMode,
        })}
      >
        <div className={styles.editButtons}>
          <EditButton
            variant={EDIT_BUTTON_VARIANT.cancel}
            onClick={isEditHandler(false)}
          />
        </div>
        {form}
      </div>
    )
  }

  return (
    <>
      <div ref={setNodeRef} style={style} {...attributes}>
        <div
          className={classNames(className, styles.container, {
            [styles.edit]: isEditMode,
            [styles.isDragging]: isDragging,
          })}
        >
          {isEditMode && (
            <div className={styles.editButtons}>
              <EditButton
                variant={EDIT_BUTTON_VARIANT.edit}
                onClick={isEditHandler(true)}
              />
              {removeInfo && !editBlockId && (
                <>
                  <EditButton
                    variant={EDIT_BUTTON_VARIANT.delete}
                    onClick={onRemoveClick}
                  />
                  {!editBlockId && (
                    <div className={styles.dndHandler} {...listeners} />
                  )}
                </>
              )}
            </div>
          )}
          {view}
        </div>
      </div>

      {removeItem &&
        createPortal(
          <RemovePopup
            text={removeItem.text}
            remove={onRemove}
            cancel={onCancel}
          />,
          document.body,
        )}
    </>
  )
}

export default EditWrapper
