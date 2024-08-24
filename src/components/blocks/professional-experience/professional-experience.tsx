import { FC } from "react"
import styles from "./professional-experience.module.css"
import { ExperienceData } from "../../../shared/types"
import ExperienceItem from "../experience-item"

type Props = {
  experience: ExperienceData[]
}

const ProfessionalExperience: FC<Props> = ({ experience }) => {
  return (
    <div className={styles.container}>
      {experience.map((data, idx) => (
        <ExperienceItem key={idx} {...data} />
      ))}
    </div>
  )
}

export default ProfessionalExperience
