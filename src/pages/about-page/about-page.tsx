import { useLoaderData } from "react-router-dom"
import AboutInfo from "../../components/blocks/about-info"
import Education from "../../components/blocks/education"
import ProfessionalExperience from "../../components/blocks/professional-experience"
import Skills from "../../components/blocks/skills"
import FilterIconBlock from "../../components/filter-icon-block"
import { FILTERS } from "../../shared/constants"
import styles from "./about-page.module.css"
import { About } from "../../shared/types"

const AboutPage = () => {
  const { title, info, image, skills, experience, about, education } =
    useLoaderData() as About

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

      <div className={styles.about}>
        <p className={styles.desc}>About</p>
        <p>{about}</p>
      </div>

      <Education education={education} />
    </section>
  )
}

export default AboutPage
