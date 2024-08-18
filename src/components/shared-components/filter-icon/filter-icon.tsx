import classNames from "classnames"
import { FILTERS } from "../../../shared/constants"
import styles from "./filter-icon.module.css"
import { FC } from "react"

type Props = {
  color: FILTERS
}

const FilterIcon: FC<Props> = ({ color }) => {
  return <div className={classNames(styles.icon, styles[color])} />
}

export default FilterIcon
