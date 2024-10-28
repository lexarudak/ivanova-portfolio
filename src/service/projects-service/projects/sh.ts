import { BLOCK_TYPE, FILTERS } from "../../../shared/constants"

export const SH = {
  id: "shchorsa",
  title: "Shchorsa",
  year: "2020",
  image: "/works/shch-prev.webp",
  filters: [FILTERS.design],
  location: "Minsk, Belarus",
  participation: ["3D Interior Concept", "Floor Plans", "Design Drawings"],
  team: {
    name: "Personal project",
    link: "#",
  },
  blocks: [
    {
      id: "1",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/sh/sh1.jpg"],
      text: [
        "In this project, I served as both customer and designer for my own apartment, striving to make the most of a small area. I utilized the high ceiling of 3.3 meters to create a multi-level space, with key changes such as relocating the bathroom door from the entrance to the living room, combining the balcony door and window, and incorporating my love for second-tier spaces by placing the bed at a height of 2 meters.",
      ],
    },
    {
      id: "2",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/sh/sh6.jpg"],
    },
    {
      id: "3",
      blockType: BLOCK_TYPE.halfImageRightContain,
      images: ["/sh/sh7.jpg"],
      text: [
        "The top plan shows how the apartment’s design avoids clutter. The elevated bed stays out of view, creating a cozy “nest.”",
      ],
    },
    {
      id: "4",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/sh/sh5.jpg"],
    },
    {
      id: "5",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "Originally rendered as blue, the central table was updated to white during the real apartment development, now serving as a versatile centerpiece for work, dining, and hosting.",
        "Deep blue hues expand the space, pushing walls and even part of the ceiling outward, creating a calm yet expansive feel.",
      ],
    },
    {
      id: "6",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/sh/sh11.webp", "/sh/sh12.webp"],
    },
    {
      id: "7",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/sh/sh2.jpg", "/sh/sh13.webp"],
    },
    {
      id: "8",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "When entering the apartment, the podium greets you with soft light from the closed curtains. The white wall doubles as a screen for the projector, and when not in use, it serves as a clean, blank surface.",
        "The entrance hall lights up when the bathroom is in use, with the brick glass wall creating a dynamic atmosphere shift.",
      ],
    },

    {
      id: "9",
      blockType: BLOCK_TYPE.halfImageRightContain,
      images: ["/sh/sh4.jpg"],
      text: [
        "The sectional view illustrates how each level serves multiple purposes, maximizing the space.",
      ],
    },

    {
      id: "10",
      blockType: BLOCK_TYPE.halfImage,
      images: ["/sh/sh10.webp"],
      text: [
        "The bathroom was designed to feel wide without being clinical, using microcement for walls and floors.",
      ],
    },
    {
      id: "12",
      blockType: BLOCK_TYPE.halfImage,
      images: ["/sh/sh9.webp"],
      text: [""],
    },
  ],
}
