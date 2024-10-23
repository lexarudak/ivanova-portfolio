import { BLOCK_TYPE, FILTERS } from "../../../shared/constants"
import { Project } from "../../../shared/types"

export const BA: Project = {
  id: "8",
  title: "Barbershop",
  year: "2019",
  image: "/public/ba/1ba.jpg",
  filters: [FILTERS.design],
  location: "Minsk, Belarus",
  participation: [
    "Pre-Design",
    "Floor Plan (as part of team)",
    "Design Development",
    "Construction Administration (as part of team)",
  ],
  team: {
    name: "Teltsov & Partners",
    link: "http://projectshop.by/en/",
  },
  blocks: [
    {
      id: "1",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/public/ba/10ba.jpg"],
      text: [
        "This men's salon design project was a passion-driven endeavor aimed at creating a space that would stand out from the typical barbershop. Inspired by primitive times, the design focused on creating a unique atmosphere reminiscent of a cave, while maintaining modern functionality",
      ],
    },
    {
      id: "2",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/public/ba/2ba.jpg"],
    },
    {
      id: "2",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/public/ba/5ba.jpg"],
    },

    {
      id: "1",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/public/ba/11ba.jpg"],
    },
    {
      id: "1",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/public/ba/8ba.jpg", "/public/ba/7ba.jpg"],
    },
    {
      id: "3",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "From large-format stone installations to artificial animal skins, each element was carefully selected to enhance the barbershop’s distinct vibe",
        "The project required close collaboration with the client and performers to ensure that every detail aligned with the vision of creating a visually striking, purpose-driven space",
      ],
    },
    {
      id: "1",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/public/ba/4ba.jpg"],
      text: [
        "The walls were adorned with murals depicting rough stone, evoking a natural, primal feel. A fireplace added warmth and a striking contrast to the technological metal structures that serve a functional purpose in the salon",
      ],
    },

    {
      id: "1",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/public/ba/3ba.jpg", "/public/ba/9ba.jpg"],
    },

    {
      id: "1",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/public/ba/6ba.jpg"],
      text: [
        "The final result is a barbershop that is both functional and atmospheric, offering a unique experience for clients. Balancing the raw, natural elements with modern practicality was a challenge, but the outcome successfully reflects the creative vision",
      ],
    },
  ],
}
