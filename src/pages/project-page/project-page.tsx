import { useParams } from "react-router-dom"
import styles from "./project-page.module.css"
import Crumbs from "../../components/crumbs"
import { createCrumps } from "./helpers"
import FilterIconBlock from "../../components/filter-icon-block"
import ProjectInfo from "../../components/blocks/project-info"
import { BLOCK_TYPE } from "../../shared/constants"
import Carousel from "../../components/blocks/carousel"
import TextColumns from "../../components/blocks/text-columns"
import imageColumns from "../../components/blocks/image-columns"
import HalfImage from "../../components/blocks/half-image"
import HalfImageRight from "../../components/blocks/half-image-right"
import PageWrapper from "../../components/page-wrapper/page-wrapper"
import { fetchProject } from "../../store/projects/actions"
import { useSelector } from "react-redux"
import { selectAllProject } from "../../store/projects/selectors"
import { useMemo } from "react"

const blockList = {
  [BLOCK_TYPE.carousel]: Carousel,
  [BLOCK_TYPE.textColumns]: TextColumns,
  [BLOCK_TYPE.imageColumns]: imageColumns,
  [BLOCK_TYPE.halfImage]: HalfImage,
  [BLOCK_TYPE.halfImageRight]: HalfImageRight,
}

const ProjectPage = () => {
  const { projectId } = useParams()
  const { title, filters, id, image, location, participation, year, blocks } =
    useSelector(selectAllProject)

  const thunk = useMemo(
    () => fetchProject.bind(null, projectId || ""),
    [projectId],
  )

  return (
    <PageWrapper asyncThunk={thunk}>
      <section className={styles.page}>
        <Crumbs links={createCrumps(filters, title, id)} />
        <h1 className={styles.title}>{title}</h1>
        <FilterIconBlock filters={filters} className={styles.filters} />
        <img src={image} alt={title} className={styles.img} />

        <ProjectInfo {...{ location, participation, year }} />

        {blocks.map(({ blockType, ...rest }) =>
          blockList[blockType]({ ...rest }),
        )}
      </section>
    </PageWrapper>
  )
}

export default ProjectPage
