import { BLOCK_TYPE, FILTERS } from "../../../shared/constants"
import { Project } from "../../../shared/types"

export const AI: Project = {
  id: "big-house",
  title: "Big House",
  year: "2020",
  image: "/ai/4ai.jpg",
  filters: [FILTERS.architect],
  location: "Earth",
  participation: [
    "Schematic Design",
    "Preliminary Exterior 3D Concept",
    "Preliminary Floor Plans",
  ],
  team: {
    name: "Level 80",
    link: "https://level80.pro/en/",
  },
  blocks: [
    {
      id: "1",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/ai/2ai.jpg"],
      text: [
        "This project involved the design of a large private house, focusing on both the floor plans and exterior. It was an exciting challenge, as it was my first experience designing a house of this scale, particularly one that needed to incorporate traditional cultural elements",
      ],
    },
    {
      id: "2",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/ai/3ai.jpg"],
    },
    {
      id: "3",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/ai/5ai.jpg"],
    },
    {
      id: "6",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "The exterior features clean lines and bold forms, making a striking visual impact while blending harmoniously with the landscape",
        "This project allowed me to deepen my understanding of how architecture can reflect different cultures, all while improving my skills in exterior design",
      ],
    },
    {
      id: "4",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/ai/6ai.jpg"],
    },
    {
      id: "5",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/ai/1ai.jpg"],
    },
    {
      id: "7",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "From my perspective, this project was an exciting opportunity to work with a gigantic array of shapes. Designing the house felt like a creative playground, especially with the challenge of making it appear unreal-ly light despite its size. The use of console levers and contrasting colors added a unique dynamic, giving the house a modern, floating quality that plays with visual balance",
      ],
    },
  ],
}
