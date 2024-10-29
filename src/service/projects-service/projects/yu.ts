import { BLOCK_TYPE, FILTERS } from "../../../shared/constants"
import { Project } from "../../../shared/types"

export const YU: Project = {
  id: "yuzufovo",
  title: "Yuzufovo",
  year: "2019",
  image: "/yu/4.jpg",
  filters: [FILTERS.architect],
  location: "Minsk, Belarus",
  participation: [
    "Revit 3D Schemes",
    "Floor Plans",
    "Technical Design Drawings",
  ],
  team: {
    name: "Teltsov & Partners",
    link: "https://teltsov.by/",
  },
  blocks: [
    {
      id: "1",
      blockType: BLOCK_TYPE.halfImageRightContain,
      images: ["/yu/2.jpg"],
      text: [
        "2019 YUZUFOVO steps back from strict minimalism, embracing a warmer, more inviting aesthetic. The design balances openness and privacy, with a front facade that welcomes guests without revealing the full scope of the interior",
      ],
    },
    {
      id: "2",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "The home uses the natural two-and-a-half-meter slope to create a unique two-story illusion: from the front, it appears as a single story, while the river-facing side opens to two levels. The first floor includes primary living areas, while the lower level holds private leisure spaces like a home gym and theater",
        "In this project, I served as the technical backbone, taking the conceptual ideas and translating them into buildable forms in Revit. I developed 3D schemes that conveyed the design’s complexity in an intuitive, approachable way. Revit made it easy to shape and clarify even intricate forms, ensuring the team could work efficiently with the documentation",
      ],
    },
    {
      id: "3",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/yu/6.jpg"],
    },
    {
      id: "6",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/yu/3.jpg"],
    },

    {
      id: "4",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/yu/8.jpg"],
    },
    {
      id: "5",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "Integrated with the site’s slope to create a multi-level experience that blends with the natural environment",
        "Clear 3D Revit schemes and construction documents, making complex shapes easy to understand for the building team",
      ],
    },
    {
      id: "7",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/yu/1.jpg"],
    },
    {
      id: "8",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/yu/5.jpg"],
    },
    {
      id: "9",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/yu/7.jpg"],
      text: [
        "A cozy, non-minimalist design that draws people in while keeping private areas discreet",
      ],
    },
  ],
}
