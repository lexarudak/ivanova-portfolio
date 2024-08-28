import { FC } from "react"
import styles from "./loader.module.css"
import classNames from "classnames"

type Props = {
  isLoading: boolean
}

const Loader: FC<Props> = ({ isLoading }) => {
  return (
    <div className={classNames(styles.loader, { [styles.show]: isLoading })}>
      Loading...
    </div>
  )
}

export default Loader
