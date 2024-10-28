import { BLOCK_TYPE, FILTERS } from "../../../shared/constants"
import { Project } from "../../../shared/types"

export const KR: Project = {
  id: "kate",
  title: "Kate's rooms",
  year: "2018",
  image: "/cr/35.jpg",
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
      id: "15",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/cr/33.jpg"],
      text: [
        "Kate's room is a custom designed living space that serves as a home-within-a-home for the kid. The majority of items in the room have been carefully crafted to not only provide a comfortable sleeping and study area but also a place for living",
      ],
    },

    {
      id: "16",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/cr/25.jpg"],
    },
    {
      id: "17",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/cr/26.jpg", "/cr/32.jpg"],
    },
    {
      id: "14",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/cr/27.jpg"],
    },
    {
      id: "18",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/cr/34.jpg", "/cr/31.jpg"],
    },
    {
      id: "19",
      blockType: BLOCK_TYPE.halfImageRightContain,
      images: ["/cr/30.jpg"],
      text: [
        "This project marked a new beginning for me as an architect, fulfilling a childhood dream and providing the opportunity to showcase my vision of space in the world of exceptional design",
      ],
    },
    {
      id: "20",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/cr/20.jpg", "/cr/24.jpg"],
    },
  ],
}
