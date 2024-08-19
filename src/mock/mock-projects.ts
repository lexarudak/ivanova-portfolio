import { FILTERS } from "../shared/constants"

export const MOCK_PROJECTS = [
  {
    id: "1",
    title: "Astana",
    year: "2021",
    filters: [FILTERS.architect],
    image: "/public/works/1.jpeg",
  },
  {
    id: "2",
    title: "Shchorsa 4B",
    year: "2020",
    filters: [FILTERS.design],
    image: "/public/works/2.jpeg",
  },
  {
    id: "3",
    title: "Hill House",
    year: "2020",
    filters: [FILTERS.architect, FILTERS.design],
    image: "/public/works/3.jpeg",
  },
]
