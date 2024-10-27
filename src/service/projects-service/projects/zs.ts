import { BLOCK_TYPE, FILTERS } from "../../../shared/constants"
import { Project } from "../../../shared/types"

export const ZS: Project = {
  id: "15",
  title: "Zatsen, Sergei",
  year: "2016",
  image: "/zs/12.jpg",
  filters: [FILTERS.architect],
  location: "Minsk, Belarus",
  participation: [
    "Pre-design",
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
      images: ["/zs/1.jpg"],
      text: [
        "The Zatsen-Sergei project was a valuable opportunity for me as an architect. I took full responsibility for the design and construction process, facing complex and unfamiliar structures such as intricate stained glass systems and challenging engineering for metal cantilever structures and monolithic designs. Through my role in Construction Administration, I applied my problem-solving skills and managed various aspects of the construction process, which helped me develop my stress tolerance and project management abilities. The completed building showcases my design skills and serves as a valuable learning experience for future projects",
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
  ],
}
