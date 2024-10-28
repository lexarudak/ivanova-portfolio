import { BLOCK_TYPE, FILTERS } from "../../../shared/constants"
import { Project } from "../../../shared/types"

export const SC: Project = {
  id: "school",
  title: "School",
  year: "2024",
  image: "/sc/7.jpg",
  filters: [FILTERS.design],
  location: "Russia",
  participation: [
    "3D Interior Concept Development",
    "Zoning & Material Specifications",
    "Furniture Customization & Color Schemes",
    "Design Drawings & Floor Plans",
  ],
  team: {
    name: "Level 80",
    link: "https://level80.pro/",
  },
  blocks: [
    {
      id: "1",
      blockType: BLOCK_TYPE.halfImageRightContain,
      images: ["/sc/3.jpg"],
      text: [
        "The project entailed developing a comprehensive design for a modern school interior that caters to various student age groups while maintaining functionality and aesthetic appeal. The focus was on creating an environment conducive to learning and creativity, using minimalistic, cost-effective solutions with strategic accents",
      ],
    },
    {
      id: "2",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/sc/14.jpg"],
    },
    {
      id: "3",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "The overarching design principle was to create distinct zones for different functions while maintaining visual unity",
        "Every room was designed with a specific purpose, from classrooms to public spaces and recreational areas. Each space serves its intended function while ensuring comfort and visual appeal",
      ],
    },

    {
      id: "4",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/sc/1.jpg"],
    },
    {
      id: "5",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/sc/2ref.jpg"],
    },
    {
      id: "6",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "White and gray tones were used for a clean, neutral base across most areas, promoting focus and calmness",
        "Bold colors such as yellow, blue, green, and red were applied strategically in specific zones like teacher spaces, entrance areas, and around interactive spaces to stimulate engagement without overwhelming the students",
      ],
    },
    {
      id: "7",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/sc/12.jpg"],
    },
    {
      id: "8",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/sc/9.jpg"],
    },
    {
      id: "9",
      blockType: BLOCK_TYPE.halfImageRightContain,
      images: ["/sc/8.jpg"],
      text: [
        "Seating in public areas was custom-made to include step-like seating arrangements, imitating natural elements such as trees, to foster creative play and relaxation",
      ],
    },

    {
      id: "10",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/sc/13.jpg"],
    },
    {
      id: "11",
      blockType: BLOCK_TYPE.halfImageRightContain,
      images: ["/sc/6.jpg"],
      text: [
        "A large, multifunctional space designed to accommodate school performances, lectures, and meetings. Step-like seating was applied for amphitheater-style presentations",
      ],
    },
    {
      id: "12",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/sc/7.jpg"],
    },
    {
      id: "13",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "By using cost-effective materials and focusing on a minimalistic design approach, the project remained within budget without compromising quality or creativity",
        "Homogeneous linoleum for floors and simple tiles for specialized spaces (such as the arts and metalworking rooms) to ensure durability and easy maintenance",
      ],
    },

    {
      id: "14",
      blockType: BLOCK_TYPE.halfImageRightContain,
      images: ["/sc/10.jpg"],
      text: [
        "Managing the collaboration between remote team members posed challenges in communication and workflow. However, the team adapted by setting clear guidelines and emphasizing the importance of early-stage agreements on key principles (geometry, structure, etc.) before delving into finer details like colors and patterns",
      ],
    },
    {
      id: "15",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "Accent colors were strategically applied to walls and furniture to maintain a cohesive design with the rest of the building while preserving the functionality of the hall",
        "Bright, creative colors were applied in varying intensities, allowing for dynamic and inspiring spaces. For example, shades of purple and bright orange were used to enhance creativity",
      ],
    },

    {
      id: "16",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/sc/1ref.jpg", "/sc/3ref.jpg"],
    },

    {
      id: "17",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/sc/4ref.jpg", "/sc/5ref.jpg"],
    },
    {
      id: "18",
      blockType: BLOCK_TYPE.textColumns,

      text: [
        "The planning and design solutions were supported by references generated using AI",
      ],
      options: {
        align: "center",
        fontStyle: "italic",
      },
    },
    {
      id: "19",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/sc/7ref.jpg"],
      text: [
        "This project was an opportunity to push the boundaries of what a modern school environment could be, balancing functionality, aesthetics, and cost-efficiency. The final design emphasizes simplicity and creativity, promoting a positive and engaging atmosphere for students. Through careful color planning, strategic zoning, and the use of durable materials, this school design offers a blend of modern educational spaces with a forward-thinking approach to the future of learning environments",
      ],
    },
  ],
}
