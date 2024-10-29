import { BLOCK_TYPE, FILTERS } from "../../../shared/constants"
import { Project } from "../../../shared/types"

export const DE: Project = {
  id: "dechkee",
  title: "Dechkee",
  year: "2018",
  image: "/de/14.jpg",
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
      blockType: BLOCK_TYPE.halfImageRightContain,
      images: ["/de/1.jpg"],
      text: [
        "The design of this private house was a showcase of how architecture can respond to its location. The pronounced relief of the site was expertly incorporated into the design through the use of intricate metal and cantilever structures",
      ],
    },
    {
      id: "2",
      blockType: BLOCK_TYPE.textColumns,
      text: ["Photos taken from the Teltsov architects website"],
      options: {
        align: "center",
        fontStyle: "italic",
        link: {
          text: "Teltsov architects website",
          href: "https://teltsov.by/architecture/zhiloj-dom-tovarishha-a-k",
        },
      },
    },
    {
      id: "3",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/de/15.jpg"],
    },
    {
      id: "4",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/de/16.jpg"],
    },
    {
      id: "5",
      blockType: BLOCK_TYPE.halfImageRightContain,
      images: ["/de/3.jpg"],
      text: [
        "The result was a harmonious balance between the large volumes of the building and its dynamic forms, characterized by clean lines on the exterior",
      ],
    },
    {
      id: "6",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/de/2.jpg"],
    },
    {
      id: "7",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "Each element of the design was meticulously developed to meet the specific requirements of the site, resulting in a property that not only looks beautiful but also functions exceptionally well ",
        "It demonstrates my commitment to creating properties that meet both aesthetic and functional goals, making it a valuable addition to my portfolio",
      ],
    },
    {
      id: "8",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/de/11.jpg"],
    },
    {
      id: "9",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/de/12.jpg"],
    },
    {
      id: "10",
      blockType: BLOCK_TYPE.halfImageRightContain,
      images: ["/de/7.jpg"],
      text: [
        "This project highlights my understanding of design and my ability to work with complex structures",
      ],
    },
    {
      id: "11",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/de/4.jpg", "/de/8.jpg"],
    },
  ],
}
