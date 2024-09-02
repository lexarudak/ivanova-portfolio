import { FC, ReactNode, useState } from "react"
import styles from "./edit-wrapper.module.css"
import { useSelector } from "react-redux"
import { selectIsEditMode } from "../../store/app/selectors"
import EditButton from "../shared-components/edit-button"

import classNames from "classnames"
import { EDIT_BUTTON_VARIANT } from "../../shared/constants"
import { createPortal } from "react-dom"
import RemovePopup from "../remove-popup"

type RemoveInfo = {
  text: string
  remove: () => Promise<void>
}

type Props = {
  view: ReactNode
  form: ReactNode
  isBlockEdit: boolean
  setIsBlockEdit: (isEdit: boolean) => void
  className?: string
  removeInfo?: RemoveInfo
}

const EditWrapper: FC<Props> = ({
  view,
  form,
  className,
  isBlockEdit,
  setIsBlockEdit,
  removeInfo,
}) => {
  const isEditMode = useSelector(selectIsEditMode)
  const [removeItem, setRemoveItem] = useState<RemoveInfo | null>(null)

  const onRemoveClick = () => removeInfo && setRemoveItem(removeInfo)
  const onCancel = () => setRemoveItem(null)

  const onRemove = async () => {
    await removeItem?.remove()
    setRemoveItem(null)
  }

  if (isBlockEdit) {
    return (
      <div className={classNames(className, styles.container)}>
        <div className={styles.editButtons}>
          <EditButton
            variant={EDIT_BUTTON_VARIANT.cancel}
            onClick={() => setIsBlockEdit(false)}
          />
        </div>
        {form}
      </div>
    )
  }

  return (
    <div className={classNames(className, styles.container)}>
      {isEditMode && (
        <div className={styles.editButtons}>
          <EditButton
            variant={EDIT_BUTTON_VARIANT.edit}
            onClick={() => setIsBlockEdit(true)}
          />
          {removeInfo && (
            <EditButton
              variant={EDIT_BUTTON_VARIANT.delete}
              onClick={onRemoveClick}
            />
          )}
        </div>
      )}
      {view}
      {removeItem &&
        createPortal(
          <RemovePopup
            text={removeItem.text}
            remove={onRemove}
            cancel={onCancel}
          />,
          document.body,
        )}
    </div>
  )
}

export default EditWrapper
