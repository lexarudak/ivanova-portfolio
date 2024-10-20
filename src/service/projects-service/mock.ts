import { FILTERS } from "../../shared/constants"
import { WorkCardData } from "../../shared/types"

export const MOCKED_WORK_CARDS: WorkCardData[] = [
  {
    id: "1",
    title: "Striker",
    year: "2024",
    image: "/public/works/striker-prev.webp",
    filters: [FILTERS.design],
  },
  {
    id: "2",
    title: "Batagai",
    year: "2021",
    image: "/public/works/batagai-prev.webp",
    filters: [FILTERS.architect],
  },
  {
    id: "3",
    title: "Shchorsa",
    year: "2020",
    image: "/public/works/shch-prev.webp",
    filters: [FILTERS.design],
  },
  {
    id: "4",
    title: "OK Hill",
    year: "2020",
    image: "/public/works/hill-prev.webp",
    filters: [FILTERS.design, FILTERS.architect],
  },
  {
    id: "5",
    title: "Lebiaji",
    year: "2019",
    image: "/public/works/leb-prev.webp",
    filters: [FILTERS.design],
  },
  {
    id: "6",
    title: "Aidyn",
    year: "2020",
    image: "/public/works/aidyn-prev.webp",
    filters: [FILTERS.architect],
  },
  {
    id: "7",
    title: "Nebesnaya",
    year: "2020",
    image: "/public/works/neb-prev.webp",
    filters: [FILTERS.design],
  },
  {
    id: "8",
    title: "Barbershop",
    year: "2019",
    image: "/public/works/berber-prev.webp",
    filters: [FILTERS.design],
  },
  {
    id: "9",
    title: "Green harbor",
    year: "2018",
    image: "/public/works/green-prev.webp",
    filters: [FILTERS.design, FILTERS.architect],
  },
]

export const MOCKED_ALL_PROJECTS = {
  projects: MOCKED_WORK_CARDS,
  order: "1,2,3,4,5,6,7,8,9",
}
