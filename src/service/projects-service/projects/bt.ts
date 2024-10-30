import { BLOCK_TYPE, FILTERS } from "../../../shared/constants"

export const BT = {
  id: "residential-complex",
  title: "Residential Complex",
  year: "2021",
  image: "/bt/bt5.jpg",
  filters: [FILTERS.architect],
  location: "Earth",
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
}
