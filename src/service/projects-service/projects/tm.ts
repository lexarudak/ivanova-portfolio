import { BLOCK_TYPE, FILTERS } from "../../../shared/constants"
import { Project } from "../../../shared/types"

export const TM: Project = {
  id: "tempo",
  title: "Tempo",
  year: "2019",
  image: "/tm/5.jpg",
  filters: [FILTERS.design],
  location: "Minsk, Belarus",
  participation: [
    "3D Interior Concept",
    "Floor Plans",
    "Design Drawings",
    "Construction Drawings (as part of team)",
    "Material Selection",
  ],
  team: {
    name: "Teltsov & Partners",
    link: "https://teltsov.by/",
  },
  blocks: [
    {
      id: "1",
      blockType: BLOCK_TYPE.halfImageRightContain,
      images: ["/tm/4.jpg"],
      text: [
        "As a team, we took on the challenge of transforming Tempo, an outdated pizzeria, into a vibrant, cozy space that would resonate with customers and drive business",
      ],
    },
    {
      id: "1",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/tm/2.jpg"],
      text: [
        "As a team, we took on the challenge of transforming Tempo, an outdated pizzeria, into a vibrant, cozy space that would resonate with customers and drive business. Our goal was clear: create an inviting, functional setting that maximized seating capacity without compromising comfort. We also wanted to position the bar as a central, welcoming feature that would draw guests in and set the tone for their experience",
      ],
    },
    {
      id: "1",
      blockType: BLOCK_TYPE.halfImageRightContain,
      images: ["/tm/1.jpg"],
      text: [
        "Our goal was clear: create an inviting, functional setting that maximized seating capacity without compromising comfort. We also wanted to position the bar as a central, welcoming feature that would draw guests in and set the tone for their experience",
      ],
    },
    {
      id: "1",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/tm/3.jpg"],
      text: [
        "Our goal was clear: create an inviting, functional setting that maximized seating capacity without compromising comfort. We also wanted to position the bar as a central, welcoming feature that would draw guests in and set the tone for their experience",
      ],
    },
    {
      id: "1",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "Our team’s vision was to create an atmosphere that felt both open and intimate. We aimed to make each seat feel like a private corner within the lively energy of a bustling restaurant. To achieve this, we chose a mix of reclaimed materials, rich textures, and bold colors, tying it all together with warm, intentional lighting designed to enhance the cozy ambiance",
        "By placing the bar at the heart of the layout, we established a focal point that greets patrons the moment they enter. This central bar serves as both a gathering point and a visual introduction to the pizzeria’s character, enhancing the overall flow and atmosphere",
      ],
    },
    {
      id: "1",
      blockType: BLOCK_TYPE.imageColumns,
      images: ["/tm/7.jpg"],
      text: [
        "Our goal was clear: create an inviting, functional setting that maximized seating capacity without compromising comfort. We also wanted to position the bar as a central, welcoming feature that would draw guests in and set the tone for their experience",
      ],
    },
    {
      id: "1",
      blockType: BLOCK_TYPE.halfImageRightContain,
      images: ["/tm/5.jpg"],
      text: [
        "Our goal was clear: create an inviting, functional setting that maximized seating capacity without compromising comfort. We also wanted to position the bar as a central, welcoming feature that would draw guests in and set the tone for their experience",
      ],
    },
    {
      id: "1",
      blockType: BLOCK_TYPE.imageColumnsContain,
      images: ["/tm/6.jpg"],
      text: [
        "Our goal was clear: create an inviting, functional setting that maximized seating capacity without compromising comfort. We also wanted to position the bar as a central, welcoming feature that would draw guests in and set the tone for their experience",
      ],
    },
    {
      id: "1",
      blockType: BLOCK_TYPE.textColumns,
      text: [
        "The redesign exceeded expectations, leading to a 30% increase in sales post-renovation—a clear sign of customer satisfaction and comfort. According to the owner, the new design now attracts more patrons who are eager to stay longer and enjoy the ambiance. Knowing that our work had a direct, positive impact on the business was incredibly rewarding for the entire team",
        "As my first restaurant project, Tempo allowed me to deepen my understanding of how design shapes a customer’s experience. I learned that successful restaurant design isn’t just about aesthetics—it’s about creating an atmosphere that balances ambiance with functionality. This project sharpened my ability to create spaces that are not only profitable but also memorable, aligning the client’s business goals with my vision for meaningful, welcoming design",
      ],
    },
  ],
}
