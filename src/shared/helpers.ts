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
