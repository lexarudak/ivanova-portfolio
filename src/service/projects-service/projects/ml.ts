import { BLOCK_TYPE, FILTERS } from "../../../shared/constants"
import { Project } from "../../../shared/types"

export const ML: Project = {
  id: "16",
  title: "MotorLAND",
  year: "2014",
  image: "/ml/2.jpg",
  filters: [FILTERS.architect],
  location: "Minsk, Belarus",
  participation: ["Design Drawings"],
  team: {
    name: "Teltsov & Partners",
    link: "https://teltsov.by/",
  },
  blocks: [
    {
      id: "1",
      blockType: BLOCK_TYPE.halfImageRightContain,
      images: ["/ml/4.jpg"],
      text: [
        "The reconstruction project was a defining moment in my career as an architect. As a newcomer to the field, I was challenged to create construction drawings for a large building complex with an area of 12,000 square meters. Despite the obstacles, I saw it as a chance to sharpen my skills and deepen my understanding of the design and",
      ],
    },
    {
      id: "2",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/ml/3.jpg"],
    },
    {
      id: "3",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/ml/2.jpg"],
    },
    {
      id: "4",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/ml/1.jpg"],
    },
    {
      id: "5",
      blockType: BLOCK_TYPE.halfImageRightContain,
      images: ["/ml/5.jpg"],
      text: [
        "I started by using Revit, but eventually switched to AutoCad, providing me with a unique opportunity to work with both digital and manual graphics. Through careful attention to detail and meticulous drawing of each design element, I developed a deep appreciation for the art and science of architecture",
      ],
    },
  ],
}
