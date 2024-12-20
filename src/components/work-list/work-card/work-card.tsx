import { FC } from "react"
import { WorkCardData } from "../../../shared/types"
import styles from "./work-card.module.css"
import { Link } from "react-router-dom"
import FilterIconBlock from "../../filter-icon-block"

const WorkCard: FC<WorkCardData> = ({ id, image, title, filters, year }) => {
  return (
    <Link className={styles.card} to={id}>
      <div className={styles.imgContainer}>
        <img src={image} alt={title} className={styles.img} />
      </div>

      <FilterIconBlock filters={filters} withoutLinks />
      <p className={styles.year}>{year}</p>
      <p className={styles.title}>{title}</p>
    </Link>
  )
}

export default WorkCard
