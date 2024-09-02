import { FC } from "react"
import { ExperienceData } from "../../../shared/types"
import { ExperienceItemView } from "../experience-item"

type Props = {
  education: ExperienceData[]
}

const Education: FC<Props> = ({ education }) => {
  return (
    <div>
      {education.map((data, idx) => (
        <ExperienceItemView key={idx} {...data} />
      ))}
    </div>
  )
}

export default Education
