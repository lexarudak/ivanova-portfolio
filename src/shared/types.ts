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
