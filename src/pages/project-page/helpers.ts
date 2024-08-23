import { PAGES } from "../../router/constants"
import { FILTERS } from "../../shared/constants"

export const createCrumps = (filters: FILTERS[], title: string, id: string) => {
  const links: {
    to: string
    title: string
  }[] = [{ to: PAGES.works, title: "Works" }]

  switch (filters.join("")) {
    case FILTERS.architect:
      links.push({ to: PAGES.architectWorks, title: "Architect" })
      break

    case FILTERS.design:
      links.push({ to: PAGES.designWorks, title: "Design" })
      break

    default:
      links.push({ to: PAGES.works, title: "All" })
      break
  }

  links.push({ to: `${PAGES.works}/${id}`, title })

  return links
}
