import { FC } from "react"
import InfoBlock from "../info-block"

type Props = {
  year: string
  location: string
  participation: string[]
}

const ProjectInfo: FC<Props> = ({ year, location, participation }) => {
  const props = {
    items: [
      {
        title: "Year:",
        value: year,
      },
      {
        title: "Location:",
        value: location,
      },
    ],
    list: {
      title: "Participation:",
      values: participation,
    },
  }

  return <InfoBlock {...props} />
}

export default ProjectInfo
