import { FC, ReactNode, useState } from "react"
import styles from "./edit-wrapper.module.css"
import { useSelector } from "react-redux"
import { selectIsEditMode } from "../../store/app/selectors"
import EditButton from "../shared-components/edit-button"
import { EDIT_BUTTON_VARIANT } from "../shared-components/button/constants"
import classNames from "classnames"

type Props = {
  view: ReactNode
  form: ReactNode
  className?: string
}

const EditWrapper: FC<Props> = ({ view, form, className }) => {
  const isEditMode = useSelector(selectIsEditMode)
  const [isBlockEdit, setIsBlockEdit] = useState(false)

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
        </div>
      )}
      {view}
    </div>
  )
}

export default EditWrapper
