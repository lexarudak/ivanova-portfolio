import { BLOCK_TYPE, FILTERS } from "../../../shared/constants"
import { Project } from "../../../shared/types"

export const GH: Project = {
  id: "green-harbor",
  title: "Green harbor",
  year: "2018",
  image: "/gh/1gh.jpg",
  filters: [FILTERS.architect],
  location: "Minsk, Belarus",
  team: {
    name: "Teltsov & Partners",
    link: "https://teltsov.by/",
  },
  participation: [
    "Schematic Design",
    "Floor Plan (as part of team)",
    "Design Development",
  ],
  blocks: [
    {
      id: "1",
      blockType: BLOCK_TYPE.halfImageRightContain,
      images: ["/gh/6gh.jpg"],
      text: [
        "The Green Harbor residential complex located in the suburbs of Minsk is a project that showcases my skills as an architect. The complex comprises 4 different types of houses that were designed to provide comfort and functionality for a wide range of residents. Despite the unique challenges posed by working with small areas and prefabricated structures, I was able to overcome them through careful planning and creative design scenarios",
      ],
    },
    {
      id: "2",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/gh/1gh.jpg"],
    },

    {
      id: "3",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/gh/2gh.jpg"],
    },

    {
      id: "4",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/gh/4gh.jpg"],
    },
    {
      id: "5",
      blockType: BLOCK_TYPE.halfImageRightContain,
      images: ["/gh/5gh.jpg"],
      text: [
        "During this project, I gained valuable insights and knowledge, including the importance of considering different perspectives in the early design phase. This has expanded my point of view as an architect and will be invaluable in all my future work",
      ],
    },
    {
      id: "6",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/gh/3gh.jpg"],
    },
    {
      id: "7",
      blockType: BLOCK_TYPE.halfImageRightContain,
      images: ["/gh/4.jpg"],
      text: [
        "The TYPE 5 project, created for the same client and area as the Green Harbor complex, posed a unique challenge: designing a large, ready-made house that would appeal to diverse buyers in Belarus. With no specific buyer in mind, the design had to be versatile and attractive to a broad audience. We focused on an adaptable layout that allows future owners to personalize the space without altering its main structure",
      ],
    },
    {
      id: "8",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/gh/3.jpg"],
    },
    {
      id: "9",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/gh/2.jpg"],
    },
    {
      id: "10",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "The modular approach includes flexible floor plans and multi-purpose spaces, enabling easy reconfiguration for various needs—whether that’s adding a home office, a playroom, or even a private gym. The reinforced concrete frame and expanded-clay concrete block walls ensure durability, while high ceilings and large glass surfaces create a bright, inviting atmosphere that blends with the natural surroundings",
        "TYPE 5 demonstrates my ability to design functional, universally appealing homes that can evolve with their owners, offering a compelling solution for Belarus’s emerging market in modular housing",
      ],
    },

    {
      id: "11",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/gh/1.jpg", "/gh/6.jpg"],
    },
    {
      id: "12",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "You can view the Green Harbor residential complex project built by A100 on their official website",
      ],
      options: {
        align: "center",
        fontStyle: "italic",
        link: {
          text: "A100 on their official website",
          href: "https://a-100development.by/proekty/zhilaya-nedvizhimost/zhiloy-kompleks-zelenaya-gavan/",
        },
      },
    },
  ],
}
