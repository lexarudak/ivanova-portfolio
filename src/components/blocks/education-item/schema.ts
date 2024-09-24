import * as yup from "yup"

export const EducationSchema = yup.object().shape({
  id: yup.string().trim().required(),
  title: yup.string().trim().required(),
  location: yup.string().trim().required(),
  position: yup.string().trim().required(),
  period: yup.string().trim().required(),
  isSaved: yup.boolean(),
})
