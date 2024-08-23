import { FILTERS } from "../shared/constants"
import { WorkCardData } from "../shared/types"

export const MOCK_WORKS: Array<WorkCardData> = [
  {
    id: "1",
    title: "Batagai",
    year: "2021",
    image: "/public/works/1.jpeg",
    filters: [FILTERS.architect],
  },
  {
    id: "2",
    title: "Shchorsa 4B",
    year: "2020",
    image: "/public/works/2.jpeg",
    filters: [FILTERS.design],
  },
  {
    id: "3",
    title: "Hill House",
    year: "2020",
    image: "/public/works/3.jpeg",
    filters: [FILTERS.architect, FILTERS.design],
  },
  {
    id: "4",
    title: "Project 4",
    year: "2024",
    image: "/public/works/1.jpeg",
    filters: [FILTERS.architect],
  },
  {
    id: "5",
    title: "Project 5",
    year: "2024",
    image: "/public/works/2.jpeg",
    filters: [FILTERS.design],
  },
  {
    id: "6",
    title: "Project 6",
    year: "2024",
    image: "/public/works/3.jpeg",
    filters: [FILTERS.architect, FILTERS.design],
  },
  {
    id: "7",
    title: "Project 7",
    year: "2024",
    image: "/public/works/1.jpeg",
    filters: [FILTERS.architect],
  },
  {
    id: "8",
    title: "Project 8",
    year: "2024",
    image: "/public/works/2.jpeg",
    filters: [FILTERS.design],
  },
  {
    id: "9",
    title: "Project 9",
    year: "2024",
    image: "/public/works/3.jpeg",
    filters: [FILTERS.architect, FILTERS.design],
  },
]
