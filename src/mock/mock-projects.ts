import { BLOCK_TYPE, FILTERS } from "../shared/constants"

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
        blockType: BLOCK_TYPE.carousel,
        text: ["Small text just for test"],
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
        blockType: BLOCK_TYPE.carousel,
        text: [
          "Construction Administration (as part of team)",
          "Construction Administration (as part of team),Construction Administration (as part of team), Construction Administration (as part of team), Construction Administration (as part of team), Construction Administration (as part of team),Construction Administration (as part of team) Construction Administration (as part of team) ",
          "Construction Administration (as part of team), Construction Administration (as part of team), Construction Administration (as part of team)",
        ],
        images: [
          "/public/works/2.jpeg",
          "/public/works/3.jpeg",
          "/public/works/1.jpeg",
        ],
      },
    ],
  },
]
