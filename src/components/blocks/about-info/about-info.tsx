import styles from "./about-info.module.css"
import { getExperience } from "../../../shared/helpers"
import TitleValueEditList from "../../title-value-edit-list/title-value-edit-list"
import { TitleValueData } from "../../../shared/types"
import EditWrapper from "../../edit-wrapper/edit-wrapper"
import LocationView from "./location/location.view"
import { BLOCK_ID } from "../../../shared/constants"
import LocationForm from "./location/location.form"

const AboutInfo = () => {
  return (
    <div className={styles.container}>
      <EditWrapper
        view={<LocationView />}
        form={<LocationForm />}
        id={BLOCK_ID.aboutLocation}
      />
      <div className={styles.block}>
        <span className={styles.title}>{"Languages"}</span>
        {/* <TitleValueEditList
          initItems={[]}
          onSubmit={function (items: TitleValueData): Promise<void> {
            throw new Error("Function not implemented.")
          }}
          blockId={""}
        /> */}
      </div>
    </div>
  )
}

export default AboutInfo
