import AboutInfo from "../../components/about-page-components/about-info"
import ProfessionalExperience from "../../components/about-page-components/professional-experience"
import FilterIconBlock from "../../components/filter-icon-block"
import { BLOCK_ID, FILTERS } from "../../shared/constants"
import styles from "./about-page.module.css"
import EditWrapper from "../../components/edit-wrapper/edit-wrapper"
import {
  AboutForm,
  AboutView,
} from "../../components/about-page-components/about"
import {
  SkillsForm,
  SkillsView,
} from "../../components/about-page-components/skills"
import Education from "../../components/about-page-components/education"
import AboutImage from "../../components/about-page-components/about-image/about-image"
import PageWrapper from "../../components/page-wrapper/page-wrapper"
import { fetchPageInfo } from "../../store/about/actions"

const AboutPage = () => {
  return (
    <PageWrapper asyncThunk={fetchPageInfo}>
      <section>
        <h1 className={styles.title}>Darya Ivanova</h1>
        <FilterIconBlock
          filters={[FILTERS.architect, FILTERS.design]}
          className={styles.filters}
        />

        <AboutImage />

        <AboutInfo />

        <EditWrapper
          className={styles.about}
          id={BLOCK_ID.about}
          view={<AboutView />}
          form={<AboutForm />}
        />

        <EditWrapper
          id={BLOCK_ID.skills}
          view={<SkillsView />}
          form={<SkillsForm />}
        />

        <ProfessionalExperience />

        <Education />
      </section>
    </PageWrapper>
  )
}

export default AboutPage
