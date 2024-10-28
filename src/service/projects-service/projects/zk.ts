import { BLOCK_TYPE, FILTERS } from "../../../shared/constants"

export const ZK = {
  id: "konstantin",
  title: "Konstantin",
  year: "2017",
  image: "/zk/2.jpg",
  filters: [FILTERS.architect],
  location: "Minsk, Belarus",
  participation: [
    "Pre-Design",
    "Floor Plans (as part of team)",
    "Design Drawings",
    "Construction Drawings",
    "Construction Administration (as part of team)",
  ],
  team: {
    name: "Teltsov & Partners",
    link: "https://teltsov.by/",
  },
  blocks: [
    {
      id: "1",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/zk/7.jpg"],
      text: [
        "Detail drawings development is critical in a project, requiring precision and attention to detail. I created the Construction Documents, ensuring accuracy with the Schematic Concept",
      ],
    },
    {
      id: "2",
      blockType: BLOCK_TYPE.textColumns,
      images: ["/zk/7.jpg"],
      text: ["Photos taken from the Teltsov architects website"],
      options: {
        align: "center",
        fontStyle: "italic",
        link: {
          text: "Teltsov architects website",
          href: "https://teltsov.by/architecture/zhiloi-dom-tovarischa-k?page=5",
        },
      },
    },
    {
      id: "3",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/zk/12.jpg"],
    },
    {
      id: "4",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/zk/11.jpg"],
    },
    {
      id: "5",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/zk/15.jpg"],
    },
    {
      id: "6",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/zk/16.jpg"],
    },
    {
      id: "7",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/zk/14.jpg"],
    },

    {
      id: "8",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/zk/8.jpg"],
      text: [
        "I combined my experience, knowledge and adapted graphic design to best suit the project",
      ],
    },

    {
      id: "9",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/zk/17.jpg", "/zk/5.jpg"],
    },

    {
      id: "10",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/zk/10.jpg"],
      text: [
        "3D circuits were used to clarify complex elements and ensure accurate representation of the sequence of execution and final result",
      ],
    },
    {
      id: "11",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/zk/4.jpg"],
      text: [
        "I combined my experience, knowledge and adapted graphic design to best suit the project",
      ],
    },
  ],
}
