import { BLOCK_TYPE, FILTERS } from "../../../shared/constants"
import { Project } from "../../../shared/types"

export const NH: Project = {
  id: "11",
  title: "NOW House",
  year: "2023",
  image: "/public/nh/13nh.png",
  filters: [FILTERS.design],
  location: "Minsk, Belarus",
  participation: [
    "3D Schemes and Details",
    "Floor Plans",
    "Technical Drawings and Blueprints",
    "Project Documentation",
  ],
  team: {
    name: "Level 80",
    link: "https://level80.pro/",
  },
  blocks: [
    {
      id: "1",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/public/nh/9nh.jpg"],
      text: [
        "As the technical architect for the NOW Modular project, I was responsible for developing 3D schemes, layouts, detailed blueprints, and all essential documentation to guide both the construction team and the client. This project stands out due to its flexible design, where the house can either be sold as a ready-made unit or as a blueprint for self-construction",
      ],
    },
    {
      id: "2",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/public/nh/1nh.jpg"],
    },
  ],
}
