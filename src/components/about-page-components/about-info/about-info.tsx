import styles from "./about-info.module.css"
import TitleValueEditList from "../../title-value-edit-list/title-value-edit-list"
import { TitleValueData } from "../../../shared/types"
import EditWrapper from "../../edit-wrapper/edit-wrapper"
import LocationView from "./location/location.view"
import { BLOCK_ID } from "../../../shared/constants"
import LocationForm from "./location/location.form"
import { useDispatch, useSelector } from "react-redux"
import { selectAboutLanguages } from "../../../store/about/selectors"
import useSubmit from "../../../shared/hooks/use-submit"
import { aboutService } from "../../../service/about-service/about-service"
import { setLanguages } from "../../../store/about"
import { removeEmptyItems } from "../../../shared/helpers"

const LangLabel = () => <span className={styles.title}>{"Languages"}</span>

const AboutInfo = () => {
  const langs = useSelector(selectAboutLanguages)
  const dispatch = useDispatch()

  const submit = useSubmit(async (langs: TitleValueData) => {
    const { languages } = await aboutService().updateLanguages(
      removeEmptyItems(langs),
    )
    dispatch(setLanguages(languages))
  })

  return (
    <div className={styles.container}>
      <EditWrapper
        view={<LocationView />}
        form={<LocationForm />}
        id={BLOCK_ID.aboutLocation}
      />
      <div className={styles.block}>
        <TitleValueEditList
          placeholders={["English", "C1"]}
          className={styles.editBlock}
          label={<LangLabel />}
          initItems={langs}
          onSubmit={submit}
          blockId={BLOCK_ID.langs}
        />
      </div>
    </div>
  )
}

export default AboutInfo
