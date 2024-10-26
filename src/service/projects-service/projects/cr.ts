import { BLOCK_TYPE, FILTERS } from "../../../shared/constants"
import { Project } from "../../../shared/types"

export const CR: Project = {
  id: "13",
  title: "Children's rooms",
  year: "2018",
  image: "/cr/8.jpg",
  filters: [FILTERS.design],
  location: "Minsk, Belarus",
  participation: [
    "3D Interior Design",
    "Design Drawings",
    "Construction Drawings (as part of team)",
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
      images: ["/cr/7.jpg"],
      text: [
        "Design project of three rooms for three girls of different ages and different characters",
      ],
    },
    {
      id: "32",
      blockType: BLOCK_TYPE.textColumns,
      text: ["Vera's room"],
      options: {
        align: "center",
        fontStyle: "italic",
      },
    },
    {
      id: "2",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/cr/8.jpg"],
    },
    {
      id: "6",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/cr/9.jpg"],
      text: [
        "Vera’s room represents a mature, almost self-contained suite within the family home, catering to her unique needs as the oldest daughter. This space includes a private bathroom and is designed as a personal retreat, encouraging creativity and independence. ",
      ],
    },
    {
      id: "4",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/cr/1.jpg"],
    },

    {
      id: "3",
      blockType: BLOCK_TYPE.halfImageRightContain,
      images: ["/cr/5.jpg"],
      text: [
        "The layout and aesthetics reflect an appreciation for individuality, with custom features that accommodate her growing desire for privacy and self-expression. Natural materials, personalized lighting, and carefully chosen textures combine to create an inspiring atmosphere, balancing functionality with artistic freedom. This room stands as a testament to fostering a child’s evolving identity within a cohesive family environment",
      ],
    },

    {
      id: "5",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/cr/6.jpg", "/cr/10.jpg"],
    },
    {
      id: "31",
      blockType: BLOCK_TYPE.textColumns,
      text: ["Nina's room"],
      options: {
        align: "center",
        fontStyle: "italic",
      },
    },
    {
      id: "7",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/cr/11.jpg"],
    },
    {
      id: "8",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/cr/12.jpg"],
      text: [
        "Designing Nina's room was similar to designing Kate's room, with a focus on maintaining the established principle of space organization",
      ],
    },
    {
      id: "9",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/cr/13.jpg"],
    },

    {
      id: "10",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/cr/15.jpg"],
    },
    {
      id: "11",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "This interior stood out to me as it had a strong, well-defined image of a little girl's room filled with 'unicorns' It was a reminder that finding the right solution for each customer is possible by taking into account their undefined wishes and being mindful of the emotional aspect of the space. The room also required attention to detail in creating complex furniture structures and providing ongoing support throughout the implementation process",
      ],
    },
    {
      id: "12",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/cr/21.jpg", "/cr/16.jpg"],
    },
    {
      id: "13",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/cr/22.jpg"],
    },
    {
      id: "33",
      blockType: BLOCK_TYPE.textColumns,
      text: ["Kate's room"],
      options: {
        align: "center",
        fontStyle: "italic",
      },
    },
    {
      id: "14",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/cr/27.jpg"],
    },
    {
      id: "15",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/cr/33.jpg"],
      text: [
        "Kate's room is a custom designed living space that serves as a home-within-a-home for the kid. The majority of items in the room have been carefully crafted to not only provide a comfortable sleeping and study area but also a place for living",
      ],
    },
    {
      id: "16",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/cr/25.jpg"],
    },
    {
      id: "17",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/cr/26.jpg", "/cr/32.jpg"],
    },
    {
      id: "18",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/cr/29.jpg", "/cr/31.jpg"],
    },
    {
      id: "19",
      blockType: BLOCK_TYPE.halfImageRightContain,
      images: ["/cr/30.jpg"],
      text: [
        "This project marked a new beginning for me as an architect, fulfilling a childhood dream and providing the opportunity to showcase my vision of space in the world of exceptional design",
      ],
    },
    {
      id: "20",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/cr/20.jpg", "/cr/24.jpg"],
    },
  ],
}
