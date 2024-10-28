import { BLOCK_TYPE, FILTERS } from "../../../shared/constants"
import { Project } from "../../../shared/types"

export const VR: Project = {
  id: "vera",
  title: "Vera's room",
  year: "2018",
  image: "/cr/8.jpg",
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
      images: ["/cr/2.jpg"],
      text: [
        "Vera’s room represents a mature, almost self-contained suite within the family home, catering to her unique needs as the oldest daughter",
      ],
    },

    {
      id: "6",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/cr/9.jpg"],
      text: [
        "This space includes a private bathroom and is designed as a personal retreat, encouraging creativity and independence. ",
      ],
    },
    {
      id: "4",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/cr/1.jpg"],
    },

    {
      id: "3",
      blockType: BLOCK_TYPE.halfImageRightContain,
      images: ["/cr/5.jpg"],
      text: [
        "The layout and aesthetics reflect an appreciation for individuality, with custom features that accommodate her growing desire for privacy and self-expression. Natural materials, personalized lighting, and carefully chosen textures combine to create an inspiring atmosphere, balancing functionality with artistic freedom. This room stands as a testament to fostering a child’s evolving identity within a cohesive family environment",
      ],
    },

    {
      id: "5",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/cr/6.jpg", "/cr/7.jpg"],
    },
    {
      id: "2",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/cr/8.jpg"],
    },
  ],
}
