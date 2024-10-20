import { FILTERS } from "../../shared/constants"
import { WorkCardData } from "../../shared/types"

export const MOCKED_WORK_CARDS: WorkCardData[] = [
  {
    id: "1",
    title: "Striker",
    year: "2024",
    image: "/works/striker-prev.webp",
    filters: [FILTERS.design],
  },
  {
    id: "2",
    title: "Batagai",
    year: "2021",
    image: "/works/batagai-prev.webp",
    filters: [FILTERS.architect],
  },
  {
    id: "3",
    title: "Shchorsa",
    year: "2020",
    image: "/works/shch-prev.webp",
    filters: [FILTERS.design],
  },
  {
    id: "4",
    title: "OK Hill",
    year: "2020",
    image: "/works/hill-prev.webp",
    filters: [FILTERS.design, FILTERS.architect],
  },
  {
    id: "5",
    title: "Lebiaji",
    year: "2019",
    image: "/works/leb-prev.webp",
    filters: [FILTERS.design],
  },
  {
    id: "6",
    title: "Aidyn",
    year: "2020",
    image: "/works/aidyn-prev.webp",
    filters: [FILTERS.architect],
  },
  {
    id: "7",
    title: "Nebesnaya",
    year: "2020",
    image: "/works/neb-prev.webp",
    filters: [FILTERS.design],
  },
  {
    id: "8",
    title: "Barbershop",
    year: "2019",
    image: "/works/berber-prev.webp",
    filters: [FILTERS.design],
  },
  {
    id: "9",
    title: "Green harbor",
    year: "2018",
    image: "/works/green-prev.webp",
    filters: [FILTERS.design, FILTERS.architect],
  },
]

export const MOCKED_ALL_PROJECTS = {
  projects: MOCKED_WORK_CARDS,
  order: "1,2,3,4,5,6,7,8,9",
}
