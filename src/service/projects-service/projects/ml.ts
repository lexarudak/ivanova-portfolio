import { BLOCK_TYPE, FILTERS } from "../../../shared/constants"

export const ML = {
  id: "16",
  title: "MotorLAND",
  year: "2014",
  image: "/le/4le.jpg",
  filters: [FILTERS.architect],
  location: "Minsk, Belarus",
  participation: ["Design Drawings"],
  team: {
    name: "Teltsov & Partners",
    link: "https://teltsov.by/",
  },
  blocks: [
    {
      id: "1",
      blockType: BLOCK_TYPE.halfImageRight,
      images: ["/le/9le.jpg"],
      text: [
        "The Lebiajy project was a complete renovation of an apartment in Minsk, Belarus, with the goal of creating an open, well-lit space. One of the key challenges was to integrate the entrance into the common area while ensuring ample natural light throughout. The design used similar-form windows and functional decor elements to achieve this, resulting in a modern and cohesive living environment",
      ],
    },
  ],
}
