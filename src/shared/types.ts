import { BLOCK_TYPE, FILTERS } from "./constants"

export type WorkCardData = {
  id: string
  title: string
  year: string
  image: string
  filters: Array<FILTERS>
}

export type Block = {
  id: string
  text?: string[]
  images?: string[]
}

export type ExperienceData = {
  id: string
  title: string
  location: string
  position: string
  period: string

  time?: string
  workType?: string
  achievements?: string[]
  isSaved: boolean
}

export type WorkExperienceData = Required<ExperienceData>

export type Project = {
  id: string
  title: string
  filters: FILTERS[]
  image: string
  info: {
    year: string
    location: string
    participation: string[]
  }
  blocks: (Block & { blockType: BLOCK_TYPE })[]
}

export type About = {
  title: string
  image: string
  location: string
  languages: string[]
  skills: SkillsData
  experience: WorkExperienceData[]
  about: string
  education: ExperienceData[]
  experienceOrder: string | null
  educationOrder: string | null
}

export type ContactsData = { title: string; value: string }[]

export type SkillsData = {
  advanced: string[]
  intermediate: string[]
  novice: string[]
}
