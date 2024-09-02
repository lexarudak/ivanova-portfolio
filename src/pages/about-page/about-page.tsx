import { useLoaderData } from "react-router-dom"
import AboutInfo from "../../components/blocks/about-info"
import Education from "../../components/blocks/education"
import ProfessionalExperience from "../../components/blocks/professional-experience"
import FilterIconBlock from "../../components/filter-icon-block"
import { ABOUT_BLOCK_ID, FILTERS } from "../../shared/constants"
import styles from "./about-page.module.css"
import { About } from "../../shared/types"
import { useDispatch, useSelector } from "react-redux"
import { selectAboutEditBlockId } from "../../store/about/selectors"
import EditWrapper from "../../components/edit-wrapper/edit-wrapper"
import { setAboutData, setEditBlockId } from "../../store/about"
import { AboutForm, AboutView } from "../../components/about"
import { useEffect } from "react"
import { SkillsForm, SkillsView } from "../../components/skills"

const AboutPage = () => {
  const aboutData = useLoaderData() as About
  const { title, languages, location, image, education } = aboutData

  const editBlockId = useSelector(selectAboutEditBlockId)
  const dispatch = useDispatch()

  const setEditId = (id: ABOUT_BLOCK_ID) => (isEdit: boolean) =>
    dispatch(setEditBlockId(isEdit ? id : null))

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

      <AboutInfo {...{ languages, location }} />

      <EditWrapper
        className={styles.skills}
        isBlockEdit={editBlockId === ABOUT_BLOCK_ID.skills}
        setIsBlockEdit={setEditId(ABOUT_BLOCK_ID.skills)}
        view={<SkillsView />}
        form={<SkillsForm />}
      />

      <ProfessionalExperience />

      <EditWrapper
        className={styles.about}
        isBlockEdit={editBlockId === ABOUT_BLOCK_ID.about}
        setIsBlockEdit={setEditId(ABOUT_BLOCK_ID.about)}
        view={<AboutView />}
        form={<AboutForm />}
      />

      <Education education={education} />
    </section>
  )
}

export default AboutPage
