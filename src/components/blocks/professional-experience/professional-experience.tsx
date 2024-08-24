import { FC } from "react"
import { ExperienceData } from "../../../shared/types"
import ExperienceItem from "../experience-item"

type Props = {
  experience: ExperienceData[]
}

const ProfessionalExperience: FC<Props> = ({ experience }) => {
  return (
    <div>
      {experience.map((data, idx) => (
        <ExperienceItem key={idx} {...data} />
      ))}
    </div>
  )
}

export default ProfessionalExperience
