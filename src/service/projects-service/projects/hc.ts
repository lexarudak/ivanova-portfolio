import { BLOCK_TYPE, FILTERS } from "../../../shared/constants"
import { Project } from "../../../shared/types"

export const HC: Project = {
  id: "house-concept",
  title: "House concept",
  year: "2023",
  image: "/hc/9hc.jpg",
  filters: [FILTERS.architect, FILTERS.design],
  location: "Middle Asia",
  participation: [
    "Layouts Creation",
    "Functionality Research",
    "Exterior Design",
    "Interior Flow and Space Optimization (part of team)",
  ],
  team: {
    name: "Level 80",
    link: "https://level80.pro/",
  },
  blocks: [
    {
      id: "1",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/hc/3hc.jpg"],
      text: [
        "In this project, my primary role was to develop the sketch layout, focusing on how different areas would function together. This included balancing the size and flow of spaces to ensure that while the house had substantial volume, it still felt pleasant and livable, without becoming too spacious or impersonal. I also had to ensure that, even though it was a sketch, the design was structurally sound and could be built in reality",
      ],
    },
    {
      id: "2",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/hc/11hc.jpg"],
    },
    {
      id: "3",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/hc/1hc.jpg"],
    },
    {
      id: "4",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "The floor plans illustrate how we separated the family and service areas. The goal was to create privacy for the family, while making the home easy to move around for staff without crossing paths unnecessarily",
        " Despite the house's size, the layout ensures it still feels comfortable and livable",
      ],
    },
    {
      id: "5",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/hc/14hc.jpg"],
    },
    {
      id: "6",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "The most challenging aspect was managing the vast amount of space and ensuring that every area was thoughtfully laid out. The goal was to make the home functional and cohesive while maintaining the luxury and comfort expected of a house this size",
        "I’m particularly proud of the staircase and elevator core, which were clad in ornamental railings. I love how it contrasts with the minimalistic design of the house, adding a unique texture that ties the interior to the exterior while maintaining the modern aesthetic",
      ],
    },
    {
      id: "7",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/hc/6hc.jpg"],
      text: [
        "This project reflects my personal design philosophy, especially my love for minimalism. However, I also strive to grow in other design directions, incorporating native and ethnic elements into my work to add depth and warmth. I believe this balance between minimalism and cultural richness is what makes this project stand out",
      ],
    },
    {
      id: "8",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "To ensure privacy without sacrificing openness, we created different privacy zones for various groups of residents and visitors—family, guests, tutors, and staff. We worked through several scenarios to understand how people would move through the house, ensuring that paths wouldn’t cross unless intended. This way, the house offers both open spaces and secluded areas without feeling disjointed",
        "These exterior shots show the modern facade, designed to be both welcoming and warm. We used contrasting volumes—the lower section with richer textures and the upper with lighter, minimal elements. The large glass windows connect the house with the landscape, while blinds ensure privacy and shade when needed. This balance between openness and functionality was key",
      ],
    },
    {
      id: "9",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/hc/12hc.jpg"],
    },

    {
      id: "10",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/hc/8hc.jpg"],
      text: [
        "Given more time or resources, I wouldn’t change much in this project. I’m someone who prefers to move forward rather than reworking past designs. I enjoy taking feedback and applying it to new challenges rather than revisiting previous work",
      ],
    },

    {
      id: "11",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "Inside, we focused on minimalism, blending the indoors with the outdoors. The ornamental railing around the staircase and elevator core adds a textured contrast to the otherwise clean design. The open-plan layout keeps things functional and luxurious, while maintaining a balance between private and communal spaces",
      ],
    },
    {
      id: "12",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/hc/7hc.jpg", "/hc/2hc.jpg"],
    },
  ],
}
