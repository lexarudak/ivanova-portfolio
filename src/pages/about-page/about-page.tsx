import AboutInfo from "../../components/blocks/about-info"
import ProfessionalExperience from "../../components/blocks/professional-experience"
import Skills from "../../components/blocks/skills"
import FilterIconBlock from "../../components/filter-icon-block"
import { MOCK_ABOUT } from "../../mock/mock-about"
import { FILTERS } from "../../shared/constants"
import styles from "./about-page.module.css"

const AboutPage = () => {
  const title = "Darya Ivanova"
  const { info, image, skills, experience } = MOCK_ABOUT
  return (
    <section className={styles.page}>
      <h1 className={styles.title}>{title}</h1>
      <FilterIconBlock
        filters={[FILTERS.architect, FILTERS.design]}
        className={styles.filters}
      />
      <img src={image} alt={title} className={styles.img} />
      <AboutInfo {...info} />
      <Skills skills={skills} />
      <ProfessionalExperience experience={experience} />
    </section>
  )
}

export default AboutPage
