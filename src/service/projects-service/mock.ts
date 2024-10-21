import { BLOCK_TYPE, FILTERS } from "../../shared/constants"
import { Project, WorkCardData } from "../../shared/types"

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Striker",
    year: "2024",
    image: "/st/st1.webp",
    filters: [FILTERS.design],
    location: "Warsaw, Poland",
    team: {
      name: "L80",
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
  },
  {
    id: "2",
    title: "Batagai",
    year: "2021",
    image: "/bt/bt5.jpg",
    filters: [FILTERS.architect],
    location: "Middle Asia",
    participation: [
      "Preliminary Site Plan",
      "Preliminary Floor Plans",
      "Preliminary 3D Exterior Concept",
    ],
    team: {
      name: "Level 80",
      link: "https://level80.pro/",
    },
    blocks: [
      {
        id: "1",
        blockType: BLOCK_TYPE.halfImage,
        images: ["/bt/bt1.jpg"],
        text: [
          "This modern district development in the city center offers a new level of urban living. Comprised of residential complexes, each consisting of 4-5 multistory buildings of varying heights, the area was designed to provide a modern and upscale aesthetic while ensuring cost-effectiveness. This was achieved by raising the level of detail closer to the viewer, reducing construction costs and enhancing the overall visual appeal of the development. ",
        ],
      },

      {
        id: "4",
        blockType: BLOCK_TYPE.imageColumns,
        images: ["/bt/bt4.jpg"],
      },
      {
        id: "3",
        blockType: BLOCK_TYPE.imageColumns,
        images: ["/bt/bt7.jpg", "/bt/bt8.jpg"],
      },
      {
        id: "5",
        blockType: BLOCK_TYPE.imageColumns,
        images: ["/bt/bt2.jpg"],
      },
      {
        id: "2",
        blockType: BLOCK_TYPE.halfImageRight,
        images: ["/bt/bt6.jpg"],
        text: [
          "As part of the architect team, I found the experience of conceptualizing and executing this residential development to be a valuable learning opportunity. From designing each building to delivering the project to the client, I was able to demonstrate my ability to work as part of a team and showcase my skills in designing modern residential developments.",
        ],
      },
      {
        id: "6",
        blockType: BLOCK_TYPE.imageColumns,
        images: ["/bt/bt3.jpg", "/bt/bt5.jpg"],
      },
    ],
  },
  {
    id: "3",
    title: "Shchorsa",
    year: "2020",
    image: "/works/shch-prev.webp",
    filters: [FILTERS.design],
    location: "",
    participation: [],
    blocks: [],
    team: {
      name: "",
      link: "",
    },
  },
  {
    id: "4",
    title: "OK Hill",
    year: "2020",
    image: "/works/hill-prev.webp",
    filters: [FILTERS.design, FILTERS.architect],
    location: "",
    participation: [],
    blocks: [],
    team: {
      name: "",
      link: "",
    },
  },
  {
    id: "5",
    title: "Lebiaji",
    year: "2019",
    image: "/works/leb-prev.webp",
    filters: [FILTERS.design],
    location: "",
    participation: [],
    blocks: [],
    team: {
      name: "",
      link: "",
    },
  },
  {
    id: "6",
    title: "Aidyn",
    year: "2020",
    image: "/works/aidyn-prev.webp",
    filters: [FILTERS.architect],
    location: "",
    participation: [],
    blocks: [],
    team: {
      name: "",
      link: "",
    },
  },
  {
    id: "7",
    title: "Nebesnaya",
    year: "2020",
    image: "/works/neb-prev.webp",
    filters: [FILTERS.design],
    location: "",
    participation: [],
    blocks: [],
    team: {
      name: "",
      link: "",
    },
  },
  {
    id: "8",
    title: "Barbershop",
    year: "2019",
    image: "/works/berber-prev.webp",
    filters: [FILTERS.design],
    location: "",
    participation: [],
    blocks: [],
    team: {
      name: "",
      link: "",
    },
  },
  {
    id: "9",
    title: "Green harbor",
    year: "2018",
    image: "/works/green-prev.webp",
    filters: [FILTERS.design, FILTERS.architect],
    location: "",
    participation: [],
    blocks: [],
    team: {
      name: "",
      link: "",
    },
  },
]

export const MOCKED_WORK_CARDS: WorkCardData[] = PROJECTS.map(
  ({ id, title, year, image, filters }) => ({
    id,
    title,
    year,
    image,
    filters,
  }),
)

export const MOCKED_ALL_PROJECTS = {
  projects: MOCKED_WORK_CARDS,
  order: "1,2,3,4,5,6,7,8,9",
}
