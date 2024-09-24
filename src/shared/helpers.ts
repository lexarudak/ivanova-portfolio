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
