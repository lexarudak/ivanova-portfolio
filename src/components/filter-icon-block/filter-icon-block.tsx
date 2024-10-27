import { FC } from "react"
import { FILTERS } from "../../shared/constants"
import FilterIcon from "../shared-components/filter-icon"
import styles from "./filter-icon-block.module.css"
import classNames from "classnames"

type Props = {
  filters: FILTERS[]
  withoutLinks?: true
  className?: string
}

const FilterIconBlock: FC<Props> = ({ filters, className, withoutLinks }) => {
  return (
    <div className={classNames(styles.filters, className)}>
      {filters.map(filter => (
        <FilterIcon color={filter} key={filter} withoutLinks={withoutLinks} />
      ))}
    </div>
  )
}

export default FilterIconBlock
