import { v4 } from "uuid"
import { TitleValueData } from "./types"

type ObjectWithArrays<T extends string> = {
  [key in T]: string[]
}

export function cleanObjectArrays<T extends string>(obj: ObjectWithArrays<T>) {
  const newObj = {} as ObjectWithArrays<T>

  for (const key in obj) {
    newObj[key] = obj[key].filter(val => !!val)
  }

  return newObj
}

export const getExperience = () => {
  const now = new Date()
  const then = new Date(2013, 0, 1)
  const differenceInMilliseconds = now.getTime() - then.getTime()

  const differenceInYears = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25),
  )

  const currentYear = now.getFullYear()

  return `${differenceInYears}+ years (2013 - ${currentYear})`
}

export const removeEmptyItems = (items: TitleValueData) =>
  items.filter(({ value, title }) => value.trim() || title.trim())

export const createNewTitleValueItem = (title = "", value = "") => ({
  id: v4(),
  title,
  value,
})

export const xToString = (x: number) => {
  switch (x) {
    case -1:
      return "left"
    case 1:
      return "right"
    default:
      return "center"
  }
}

export const yToString = (y: number) => {
  switch (y) {
    case -1:
      return "top"
    case 1:
      return "bottom"
    default:
      return "center"
  }
}
