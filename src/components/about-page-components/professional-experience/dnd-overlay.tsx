import {
  defaultDropAnimationSideEffects,
  DragOverlay,
  DropAnimation,
} from "@dnd-kit/core"
import { ExperienceItemView } from "./experience-item"
import EditWrapper from "../../edit-wrapper/edit-wrapper"
import classNames from "classnames"
import { FC } from "react"
import styles from "./professional-experience.module.css"

const dropAnimationConfig: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: "0.4",
      },
    },
  }),
}

type Props = {
  activeId: string | null
}

const ProfessionalExpOverlay: FC<Props> = ({ activeId }) => (
  <DragOverlay dropAnimation={dropAnimationConfig}>
    {activeId && (
      <EditWrapper
        id={activeId}
        className={classNames(styles.item, styles.overlay)}
        removeInfo={{ text: "", remove: async () => undefined }}
        form={null}
        view={<ExperienceItemView id={activeId} />}
      />
    )}
  </DragOverlay>
)

export default ProfessionalExpOverlay
