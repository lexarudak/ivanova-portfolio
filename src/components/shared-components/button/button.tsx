import { ButtonHTMLAttributes, FC } from "react"
import styles from "./button.module.css"
import classNames from "classnames"
import { BUTTON_VARIANT } from "../../../shared/constants"

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: BUTTON_VARIANT
  isActive?: boolean
}

const Button: FC<Props> = ({
  variant,
  isActive,
  className,
  children,
  ...rest
}) => {
  const mode = {
    [styles.active]: isActive,
  }

  return (
    <button
      {...rest}
      className={classNames(className, styles[variant], mode, styles.btn)}
    >
      {children}
    </button>
  )
}

export default Button
