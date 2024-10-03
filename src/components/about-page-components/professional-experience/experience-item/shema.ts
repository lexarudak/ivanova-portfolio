import * as yup from "yup"

export const workExperienceSchema = yup.object().shape({
  id: yup.string().trim().required(),
  title: yup.string().trim().required(),
  location: yup.string().trim().required(),
  position: yup.string().trim().required(),
  period: yup.string().trim().required(),
  workType: yup.string().trim().required(),
  time: yup.string().trim().required(),
  achievements: yup.array().of(yup.string()),
  isSaved: yup.boolean(),
})
