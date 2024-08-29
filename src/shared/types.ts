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
  title: string
  location: string
  position: string
  period: string

  time?: string
  workType?: string
  achievements?: string[]
}

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
  info: {
    location: string
    languages: string[]
  }
  skills: SkillsData
  experience: {
    title: string
    location: string
    position: string
    time: string
    workType: string
    period: string
    achievements: string[]
  }[]
  about: string
  education: {
    title: string
    location: string
    position: string
    period: string
  }[]
}

export type ContactsData = { title: string; value: string }[]

export type SkillsData = {
  advanced: string[]
  intermediate: string[]
  novice: string[]
}
