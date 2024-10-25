import { BLOCK_TYPE, FILTERS } from "../../../shared/constants"
import { Project } from "../../../shared/types"

export const OK: Project = {
  id: "4",
  title: "OK Hill",
  year: "2020",
  image: "/ok/out1.webp",
  filters: [FILTERS.design],
  location: "Belarus",
  participation: [
    "Interior Design (as part of team)",
    "Construction Drawings ",
    "Design Drawings",
    "Construction Administration (as part of team)",
  ],
  team: {
    name: "Level 80",
    link: "https://level80.pro/",
  },
  blocks: [
    {
      id: "1",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/ok/ok9.jpg"],
      text: [
        "In this project, I joined mid-progress and was initially tasked with transferring the model from ArchiCAD to Revit. As the project developed, my responsibilities expanded to include interior design, construction documentation, and overseeing construction administration",
      ],
    },
    {
      id: "2",
      blockType: BLOCK_TYPE.textColumns,
      options: {
        align: "center",
        fontStyle: "italic",
      },
      text: [
        "Photos taken from the <a target='_blanc' href='https://level80.pro/en/projects/ok-hill-house/'>LEVEL80 architects website</a>",
      ],
    },
    {
      id: "3",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/ok/ok1.jpg", "/ok/ok10.jpg"],
    },
    {
      id: "10",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/ok/out2.webp"],
    },
    {
      id: "4",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/ok/ok2.jpg"],
    },
    {
      id: "5",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/ok/ok4.jpg"],
      text: [
        "The design features a strong connection between the indoors and the surrounding environment, with large windows that bring in natural light and views",
      ],
    },
    {
      id: "9",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/ok/ok7.webp"],
    },
    {
      id: "7",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/ok/ok8.jpg"],
      text: [
        "The interior design highlights minimalism, with wooden surfaces and a muted color palette creating a calm, inviting atmosphere",
      ],
    },
    {
      id: "8",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/ok/ok5.jpg"],
    },

    {
      id: "9",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/ok/ok6.jpg"],
    },
    {
      id: "6",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/ok/ok3.jpg"],
      text: [
        "My successful completion of the project tasks, from interior design to construction administration, led to my full-time hiring by the company. The project was developed as part of LEVEL80 | architects",
      ],
    },
  ],
}
