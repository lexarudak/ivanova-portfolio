import { FC } from "react"
import { WorkCardData } from "../../../shared/types"
import styles from "./work-card.module.css"
import { Link } from "react-router-dom"
import FilterIcon from "../../shared-components/filter-icon/filter-icon"

const WorkCard: FC<WorkCardData> = ({ id, image, title, filters, year }) => {
  return (
    <Link className={styles.card} to={id}>
      <img src={image} alt={title} className={styles.img} />

      <div className={styles.filters}>
        {filters.map(filter => (
          <FilterIcon color={filter} />
        ))}
      </div>

      <p className={styles.year}>{year}</p>
      <p className={styles.title}>{title}</p>
    </Link>
  )
}

export default WorkCard
