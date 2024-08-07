import { FC } from "react"
import styles from "./landing-logo.module.css"
import classNames from "classnames"
import Button, { ButtonVariant } from "../shared-components/button"
import { FILTERS } from "../../shared/constants"
import useFilterNavigate from "../../shared/hooks/use-filter-navigate"

type Props = {
  isActive: boolean
}

const LandingLogo: FC<Props> = ({ isActive }) => {
  const navigate = useFilterNavigate()

  return (
    <div className={classNames({ [styles.active]: isActive }, styles.logo)}>
      <h1 className={styles.title}>
        <p className={styles.word}>DARYA</p>
        <p className={styles.word}>
          <span className={styles.wordPart}>IVA</span>
          <span className={styles.wordPart}>N</span>
          <span className={styles.wordPart}>OVA</span>
        </p>
      </h1>
      <div className={styles.blocks}>
        <Button
          variant={ButtonVariant.main}
          isActive
          onClick={() => navigate(FILTERS.architect)}
        >
          ARCHITECT
        </Button>
        <Button
          variant={ButtonVariant.main}
          isActive
          className={styles.secondButton}
          onClick={() => navigate(FILTERS.design)}
        >
          DESIGNER
        </Button>
      </div>
    </div>
  )
}

export default LandingLogo
