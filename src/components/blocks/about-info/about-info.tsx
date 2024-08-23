import { FC } from "react"
import InfoBlock from "../info-block"

type Props = {
  location: string
  languages: string[]
}

const getExperience = () => {
  const now = new Date()
  const then = new Date(2013, 0, 1)
  const differenceInMilliseconds = now.getTime() - then.getTime()

  const differenceInYears =
    differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)

  const currentYear = now.getFullYear()

  return `${differenceInYears}+ years (2013 - ${currentYear})`
}

const AboutInfo: FC<Props> = ({ location, languages }) => {
  const props = {
    items: [
      {
        title: "Experience:",
        value: getExperience(),
      },
      {
        title: "Location:",
        value: location,
      },
    ],
    list: {
      title: "Languages:",
      values: languages,
    },
  }

  return <InfoBlock {...props} />
}

export default AboutInfo
