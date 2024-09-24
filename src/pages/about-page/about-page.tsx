import { useLoaderData } from "react-router-dom"
import AboutInfo from "../../components/blocks/about-info"
import ProfessionalExperience from "../../components/blocks/professional-experience"
import FilterIconBlock from "../../components/filter-icon-block"
import { BLOCK_ID, FILTERS } from "../../shared/constants"
import styles from "./about-page.module.css"
import { About } from "../../shared/types"
import { useDispatch } from "react-redux"
import EditWrapper from "../../components/edit-wrapper/edit-wrapper"
import { setAboutData } from "../../store/about"
import { AboutForm, AboutView } from "../../components/about"
import { useEffect } from "react"
import { SkillsForm, SkillsView } from "../../components/skills"
import Education from "../../components/blocks/education"

const AboutPage = () => {
  const aboutData = useLoaderData() as About
  const { title, image } = aboutData
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setAboutData(aboutData))
  }, [aboutData, dispatch])

  return (
    <section className={styles.page}>
      <h1 className={styles.title}>{title}</h1>
      <FilterIconBlock
        filters={[FILTERS.architect, FILTERS.design]}
        className={styles.filters}
      />

      <img src={image} alt={title} className={styles.img} />

      <AboutInfo />

      <EditWrapper
        className={styles.skills}
        id={BLOCK_ID.skills}
        view={<SkillsView />}
        form={<SkillsForm />}
      />

      <ProfessionalExperience />

      <EditWrapper
        className={styles.about}
        id={BLOCK_ID.about}
        view={<AboutView />}
        form={<AboutForm />}
      />

      <Education />
    </section>
  )
}

export default AboutPage
