import { FILTERS } from "./constants"

export type WorkCardData = {
  id: string
  title: string
  year: string
  image: string
  filters: Array<FILTERS>
}
