import { BLOCK_TYPE, FILTERS } from "../../../shared/constants"
import { Project } from "../../../shared/types"

export const NE: Project = {
  id: "7",
  title: "Nebesnaya",
  year: "2020",
  image: "/ne/9ne.jpg",
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
    link: "http://projectshop.by/en/",
  },
  blocks: [
    {
      id: "1",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/ne/ne2.jpg"],
      text: [
        "This apartment interior design project was a thrilling experience for me. I had a great time creating the floor plan and interior layout to meet the customer's needs and preferences. The different zones and rooms were arranged in an efficient manner to maximize the use of space and create a visually stunning open space",
      ],
    },
    {
      id: "2",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/ne/12ne.jpg"],
    },
    {
      id: "7",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/ne/ne4.jpg"],
    },
    {
      id: "3",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/ne/11ne.jpg", "/ne/8ne.jpg"],
    },
    {
      id: "5",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/ne/ne5.jpg", "/ne/10ne.jpg"],
    },

    {
      id: "4",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/ne/ne1.jpg"],
      text: [
        "The central cube with white glass trim was a key element in the design, serving both aesthetic and functional purposes. It functioned as a marker board, providing a space for the owner to jot down notes and read them at any time. Through this project, I was able to showcase my design skills and understanding of the balance between functionality and aesthetics in interior design",
      ],
    },
  ],
}
