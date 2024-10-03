import {
  defaultDropAnimationSideEffects,
  DragOverlay,
  DropAnimation,
} from "@dnd-kit/core"
import EditWrapper from "../../edit-wrapper/edit-wrapper"
import classNames from "classnames"
import { FC } from "react"
import styles from "./education.module.css"
import { EducationItemView } from "./education-item"

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

const EducationOverlay: FC<Props> = ({ activeId }) => (
  <DragOverlay dropAnimation={dropAnimationConfig}>
    {activeId && (
      <EditWrapper
        id={activeId}
        className={classNames(styles.item, styles.overlay)}
        removeInfo={{ text: "", remove: async () => undefined }}
        form={null}
        view={<EducationItemView id={activeId} />}
      />
    )}
  </DragOverlay>
)

export default EducationOverlay
