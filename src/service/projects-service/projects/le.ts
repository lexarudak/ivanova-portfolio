import { BLOCK_TYPE, FILTERS } from "../../../shared/constants"

export const LE = {
  id: "lebiaji",
  title: "Lebiaji",
  year: "2019",
  image: "/le/4le.jpg",
  filters: [FILTERS.design],
  location: "Minsk, Belarus",
  participation: [
    "3D Interior Concept",
    "Floor Plans",
    "Design Drawings",
    "Construction Drawings (as part of team)",
  ],
  team: {
    name: "Teltsov & Partners",
    link: "https://teltsov.by/",
  },
  blocks: [
    {
      id: "1",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/le/9le.jpg"],
      text: [
        "The Lebiajy project was a complete renovation of an apartment in Minsk, Belarus, with the goal of creating an open, well-lit space. One of the key challenges was to integrate the entrance into the common area while ensuring ample natural light throughout. The design used similar-form windows and functional decor elements to achieve this, resulting in a modern and cohesive living environment",
      ],
    },
    {
      id: "2",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/le/1le.jpg"],
    },
    {
      id: "3",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/le/8le.jpg"],
    },
    {
      id: "4",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/le/7le.jpg"],
    },
    {
      id: "5",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/le/2le.jpg"],
    },
    {
      id: "6",
      blockType: BLOCK_TYPE.halfImage,
      images: ["/le/10le.jpg"],
      text: [
        "The redesign focused on maximizing natural light through strategic placement of windows and open-plan spaces",
      ],
    },
    {
      id: "7",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "Every element was designed for both aesthetic and functional purposes, including wooden surfaces that added warmth and texture to the atmosphere",
        "The space was redefined to improve flow, with transitions between the living area, kitchen, and entrance made seamless",
      ],
    },
    {
      id: "8",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/le/5le.jpg"],
    },
    {
      id: "9",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/le/16le.jpg"],
    },
    {
      id: "10",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/le/17le.jpg"],
    },
    {
      id: "11",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/le/12le.jpg", "/le/18le.jpg"],
    },
    {
      id: "12",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/le/11le.jpg", "/le/19le.JPG"],
    },
    {
      id: "13",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "From a personal standpoint, this project highlights my ability to balance form and function. My design achieved a modern, warm atmosphere while incorporating functional elements that enhance the living experience. This project stands out in my portfolio as an example of simple, elegant design combined with effective use of natural light",
      ],
    },
  ],
}
