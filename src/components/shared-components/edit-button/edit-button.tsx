import classNames from "classnames"
import styles from "./edit-button.module.css"
import { ButtonHTMLAttributes, FC } from "react"
import { EDIT_BUTTON_VARIANT } from "../../../shared/constants"

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: EDIT_BUTTON_VARIANT
}

const scrList = {
  [EDIT_BUTTON_VARIANT.edit]: "/edit.svg",
  [EDIT_BUTTON_VARIANT.cancel]: "/x-circle.svg",
  [EDIT_BUTTON_VARIANT.delete]: "/backspace.svg",
  [EDIT_BUTTON_VARIANT.save]: "/save.svg",
  [EDIT_BUTTON_VARIANT.plus]: "/plus.svg",
}

const EditButton: FC<Props> = ({ variant, className, ...rest }) => {
  return (
    <button className={classNames(className, styles.btn)} {...rest}>
      <img src={scrList[variant]} alt="edit button" className={styles.img} />
    </button>
  )
}

export default EditButton
