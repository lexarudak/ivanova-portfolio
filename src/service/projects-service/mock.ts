import { Project, WorkCardData } from "../../shared/types"
import { AI } from "./projects/ai"
import { BA } from "./projects/ba"
import { BT } from "./projects/bt"
import { GH } from "./projects/gh"
import { HC } from "./projects/hc"
import { LE } from "./projects/le"
import { NE } from "./projects/ne"
import { NH } from "./projects/nh"
import { OK } from "./projects/ok"
import { SH } from "./projects/sh"
import { ST } from "./projects/st"

export const PROJECTS: Project[] = [ST, BT, SH, OK, LE, AI, NE, BA, GH, HC, NH]

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
  order: "1,11,10,2,3,4,5,6,7,8,9",
}
