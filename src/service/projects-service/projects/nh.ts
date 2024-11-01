import { BLOCK_TYPE, FILTERS } from "../../../shared/constants"
import { Project } from "../../../shared/types"

export const NH: Project = {
  id: "now-house",
  title: "NOW House",
  year: "2023",
  image: "/nh/13nh.png",
  filters: [FILTERS.architect, FILTERS.design],
  location: "Everywhere",
  participation: [
    "3D Schemes and Details",
    "Floor Plans",
    "Technical Drawings and Blueprints",
    "Project Documentation",
  ],
  team: {
    name: "Level 80",
    link: "https://level80.pro/en/",
  },
  blocks: [
    {
      id: "1",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/nh/9nh.jpg"],
      text: [
        "As the technical architect for the NOW Modular project, I was responsible for developing 3D schemes, layouts, detailed blueprints, and all essential documentation to guide both the construction team and the client. This project stands out due to its flexible design, where the house can either be sold as a ready-made unit or as a blueprint for self-construction",
      ],
    },
    {
      id: "11",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/nh/7nh.jpg"],
    },

    {
      id: "3",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/nh/6nh.jpg"],
    },
    {
      id: "4",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "The concept of NOW Modular revolves around creating cozy, compact living spaces using modular blocks. The design embraces simplicity and local materials, making it adaptable to different terrains and climates.",
      ],
    },
    {
      id: "5",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/nh/11nh.jpg"],
    },
    {
      id: "6",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/nh/2nh.jpg"],
    },

    {
      id: "8",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/nh/12nh.jpg"],
    },
    {
      id: "20",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/nh/10nh.jpg"],
    },
    {
      id: "21",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/nh/1nh.jpg"],
    },
    {
      id: "10",
      blockType: BLOCK_TYPE.halfImageRightContain,
      images: ["/nh/3nh.jpg"],
      text: [
        "The attention to detail required when working with smaller areas is something I thrive on, ensuring the space works perfectly both aesthetically and functionally",
      ],
    },

    {
      id: "12",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/nh/5nh.jpg"],
    },
    {
      id: "13",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/nh/4nh.jpg"],
      text: [
        "For me, working on this project was particularly rewarding. I love tiny houses for their coziness and the unique challenge of optimizing small spaces. Every square meter matters, and as someone who enjoys being deeply involved in all aspects of a design, this was an ideal project",
      ],
    },
  ],
}
