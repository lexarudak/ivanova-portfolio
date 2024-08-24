import { FC } from "react"
import { ExperienceData } from "../../../shared/types"
import ExperienceItem from "../experience-item"

type Props = {
  education: ExperienceData[]
}

const Education: FC<Props> = ({ education }) => {
  return (
    <div>
      {education.map((data, idx) => (
        <ExperienceItem key={idx} {...data} />
      ))}
    </div>
  )
}

export default Education
