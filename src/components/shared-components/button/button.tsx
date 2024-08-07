import { ButtonHTMLAttributes, FC } from "react"
import styles from "./button.module.css"
import classNames from "classnames"
import { ButtonVariant } from "./constants"

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant
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
    <button {...rest} className={classNames(className, styles[variant], mode)}>
      {children}
    </button>
  )
}

export default Button
