import { BLOCK_TYPE, FILTERS } from "../../../shared/constants"
import { Project } from "../../../shared/types"

export const NR: Project = {
  id: "nina",
  title: "Nina's room",
  year: "2018",
  image: "/cr/37.jpg",
  filters: [FILTERS.design],
  location: "Minsk, Belarus",
  participation: [
    "3D Interior Design",
    "Design Drawings",
    "Construction Drawings (as part of team)",
    "Construction Administration (as part of team)",
  ],
  team: {
    name: "Teltsov & Partners",
    link: "https://teltsov.by/",
  },
  blocks: [
    {
      id: "1",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/cr/12.jpg"],
      text: [
        "Designing Nina's room was similar to designing Kate's room, with a focus on maintaining the established principle of space organization",
      ],
    },
    {
      id: "2",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/cr/11.jpg"],
    },

    {
      id: "3",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/cr/13.jpg"],
    },

    {
      id: "4",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/cr/22.jpg", "/cr/15.jpg"],
    },

    {
      id: "5",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/cr/36.jpg"],
    },
    {
      id: "6",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/cr/37.jpg"],
    },
    {
      id: "7",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/cr/38.jpg"],
    },
    {
      id: "8",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "This interior stood out to me as it had a strong, well-defined image of a little girl's room filled with 'unicorns' It was a reminder that finding the right solution for each customer is possible by taking into account their undefined wishes and being mindful of the emotional aspect of the space. The room also required attention to detail in creating complex furniture structures and providing ongoing support throughout the implementation process",
      ],
    },
    {
      id: "9",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/cr/21.jpg", "/cr/16.jpg"],
    },
  ],
}
