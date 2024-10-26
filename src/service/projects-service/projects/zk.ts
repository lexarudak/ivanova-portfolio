import { BLOCK_TYPE, FILTERS } from "../../../shared/constants"

export const ZK = {
  id: "14",
  title: "Zatsen, Konstantin",
  year: "2017",
  image: "/zk/8.jpg",
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
        "Detail drawings development is critical in a project, requiring precision and attention to detail. I created the Construction Documents, ensuring accuracy with the Schematic Concept. I combined my experience, knowledge and adapted graphic design to best suit the project. 3D circuits were used to clarify complex elements and ensure accurate representation of the sequence of execution and final result",
      ],
    },
    {
      id: "2",
      blockType: BLOCK_TYPE.textColumns,
      images: ["/zk/7.jpg"],
      text: ["TBD"],
      options: {
        align: "center",
      },
    },
  ],
}
