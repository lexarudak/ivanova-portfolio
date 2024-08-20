import { FILTERS } from "../shared/constants"

export const MOCK_PROJECTS = [
  {
    id: "1",
    title: "Batagai",
    filters: [FILTERS.architect],
    image: "/public/works/1.jpeg",
    info: {
      year: "2021",
      location: "Astana, Kazakhstan",
      participation: [
        "Preliminary Site Plan",
        "Preliminary Floor Plans",
        "Preliminary 3D Exterior Concept",
      ],
    },
  },
  {
    id: "2",
    title: "Shchorsa 4B",
    filters: [FILTERS.design],
    image: "/public/works/2.jpeg",
    info: {
      year: "2020",
      location: "Minsk, Belarus",
      participation: [
        "3D Interior Design",
        "Set of Construction Documents",
        "Construction Administration",
      ],
    },
  },
  {
    id: "3",
    title: "Hill House",
    filters: [FILTERS.architect, FILTERS.design],
    image: "/public/works/3.jpeg",
    info: {
      year: "2020",
      location: "Minsk, Belarus",
      participation: [
        "Interior Design (as part of team)",
        "Construction Drawings",
        "Construction Administration (as part of team)",
      ],
    },
  },
]
