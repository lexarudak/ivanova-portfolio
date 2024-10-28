import { BLOCK_TYPE, FILTERS } from "../../../shared/constants"

export const ST = {
  id: "striker",
  title: "Striker",
  year: "2024",
  image: "/st/st1.webp",
  filters: [FILTERS.design],
  location: "Warsaw, Poland",
  team: {
    name: "Level 80",
    link: "https://level80.pro/",
  },
  participation: [
    "3D Interior Concept",
    "Floor Plans",
    "Design Drawings",
    "Construction Drawings (as part of team)",
  ],
  blocks: [
    {
      id: "1",
      blockType: BLOCK_TYPE.halfImage,
      images: ["/st/st4.webp"],
      text: [
        // eslint-disable-next-line quotes
        'Light-Filled Corridors: We added transparent walls to previously dark corridors, allowing sunlight to filter in and eliminating the gloomy "dead ends." This also enables flexible zoning, where spaces can be opened or closed as needed.',
      ],
    },
    {
      id: "2",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/st/st2.webp"],
    },
    {
      id: "3",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "Innovative Design Features: A standout design element is the lightbox wall divider in the living room, which serves as both an aesthetic feature and a functional unit housing the refrigerator, microwave, and extra storage for the kitchen.",
      ],
    },
    {
      id: "4",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/st/st3.webp"],
    },
    {
      id: "5",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "Open-Plan Living Room: We transformed the previously closed-off living space by tearing down walls and allowing light to flow throughout. The room now feels expansive, with seamless access to other areas.",
        "Relocated Kitchen: The kitchen was moved to the far end of the apartment, creating a cozy, functional space that includes a large dining table perfect for hosting. The new kitchen features hidden storage, blending practicality with a clean design.",
      ],
    },
    {
      id: "6",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/st/st5.webp"],
    },

    {
      id: "7",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/st/st8.webp", "/st/st6.webp"],
    },
    {
      id: "8",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "Multi-Use Bedroom: The master bedroom now includes a work area, ensuring flexibility. There’s also a separate cabinet that serves as an additional workspace or guest room when needed.",
      ],
    },
    {
      id: "9",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/st/st7.webp"],
      text: [
        "This apartment renovation creates a spacious, light-filled, and open environment, perfectly tailored for a couple with a focus on modern living and future flexibility.",
      ],
    },

    {
      id: "10",
      blockType: BLOCK_TYPE.halfImage,
      images: ["/st/st10.webp"],
      text: [
        "Enhanced Bathroom: We combined the original two bathrooms into a single, spacious one that includes a luxurious walk-in shower. A separate storage area houses the washing machine, keeping the bathroom clutter-free. ",
      ],
    },
    {
      id: "12",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/st/st11.webp", "/st/st12.webp"],
    },
    {
      id: "11",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "To overcome the challenges of a dark, fragmented layout, we completely remained the apartment by removing walls and creating an open, light-filled living space. The new design maximizes natural light, functionality, and flexibility, making it ideal for a young couple, with future-proofing for family expansion.",
        "The central cube with white glass trim was a key element in the design, serving both aesthetic and functional purposes. It functioned as a marker board, providing a space for the owner to jot down notes and read them at any time. Through this project, I was able to showcase my design skills and understanding of the balance between functionality and aesthetics in interior design.",
      ],
    },
  ],
}
