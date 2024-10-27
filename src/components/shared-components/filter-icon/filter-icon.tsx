import classNames from "classnames"
import { FILTERS } from "../../../shared/constants"
import styles from "./filter-icon.module.css"
import { FC } from "react"
import { Link } from "react-router-dom"

type Props = {
  color: FILTERS
  withoutLinks?: true
}

const FilterIcon: FC<Props> = ({ color, withoutLinks }) => {
  if (withoutLinks) {
    return <div className={classNames(styles.icon, styles[color])} />
  }

  const href = `/works?filter=${color}`

  return <Link to={href} className={classNames(styles.icon, styles[color])} />
}

export default FilterIcon
