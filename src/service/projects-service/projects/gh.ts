import { BLOCK_TYPE, FILTERS } from "../../../shared/constants"
import { Project } from "../../../shared/types"

export const GH: Project = {
  id: "9",
  title: "Green harbor",
  year: "2018",
  image: "/gh/1gh.jpg",
  filters: [FILTERS.architect],
  location: "Minsk, Belarus",
  team: {
    name: "Teltsov & Partners",
    link: "http://projectshop.by/en/",
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
      id: "5",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/gh/1gh.jpg"],
    },

    {
      id: "2",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/gh/2gh.jpg"],
    },

    {
      id: "4",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/gh/4gh.jpg"],
    },
    {
      id: "7",
      blockType: BLOCK_TYPE.halfImageRightContain,
      images: ["/gh/5gh.jpg"],
      text: [
        "During this project, I gained valuable insights and knowledge, including the importance of considering different perspectives in the early design phase. This has expanded my point of view as an architect and will be invaluable in all my future work",
      ],
    },
    {
      id: "3",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/gh/3gh.jpg"],
    },
    {
      id: "6",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "You can view the Green Harbor residential complex project built by <a href='https://a-100development.by/proekty/zhilaya-nedvizhimost/zhiloy-kompleks-zelenaya-gavan/' target='_blanc'>A100 on their official website</a>",
      ],
      options: { align: "center", fontStyle: "italic" },
    },
  ],
}
