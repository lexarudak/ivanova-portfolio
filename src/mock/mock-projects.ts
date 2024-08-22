import { BLOCK_TYPE, FILTERS } from "../shared/constants"
import { MOCK_TEXT } from "./mock-text"

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
    blocks: [
      {
        id: "1",
        blockType: BLOCK_TYPE.carousel,
        text: [MOCK_TEXT.small],
        images: [
          "/public/works/1.jpeg",
          "/public/works/2.jpeg",
          "/public/works/3.jpeg",
        ],
      },
    ],
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
    blocks: [
      {
        id: "1",
        blockType: BLOCK_TYPE.carousel,
        text: [],
        images: [
          "/public/works/2.jpeg",
          "/public/works/3.jpeg",
          "/public/works/1.jpeg",
        ],
      },
    ],
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
    blocks: [
      {
        id: "1",
        blockType: BLOCK_TYPE.carousel,
        text: [MOCK_TEXT.small, MOCK_TEXT.large, MOCK_TEXT.medium],
        images: [
          "/public/works/2.jpeg",
          "/public/works/3.jpeg",
          "/public/works/1.jpeg",
        ],
      },
    ],
  },
]
