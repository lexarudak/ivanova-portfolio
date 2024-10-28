import { Project, WorkCardData } from "../../shared/types"
import { AI } from "./projects/ai"
import { BA } from "./projects/ba"
import { BT } from "./projects/bt"
import { VR } from "./projects/vr"
import { GH } from "./projects/gh"
import { HC } from "./projects/hc"
import { LE } from "./projects/le"
import { ML } from "./projects/ml"
import { NE } from "./projects/ne"
import { NH } from "./projects/nh"
import { OK } from "./projects/ok"
import { SC } from "./projects/sc"
import { SH } from "./projects/sh"
import { ST } from "./projects/st"
import { ZK } from "./projects/zk"
import { ZS } from "./projects/zs"
import { KR } from "./projects/kr"
import { NR } from "./projects/nr"
import { TM } from "./projects/tm"

export const PROJECTS: Project[] = [
  ST,
  BT,
  SH,
  OK,
  LE,
  AI,
  NE,
  BA,
  GH,
  HC,
  NH,
  SC,
  VR,
  ZK,
  ZS,
  ML,
  KR,
  NR,
  TM,
]

const order = [
  "striker",
  "school",
  "now-house",
  "house-concept",
  "batagai",
  "shchorsa",
  "ok-hill",
  "lebiaji",
  "aidyn",
  "nebesnaya",
  "barbershop",
  "tempo",
  "green-harbor",
  "vera",
  "kate",
  "nina",
  "konstantin",
  "sergei",
  "motorland",
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
  order: order.toString(),
}
