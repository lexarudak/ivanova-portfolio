import { FC } from "react"
import { TitleValueData } from "../../shared/types"
import EditWrapper from "../edit-wrapper/edit-wrapper"
import { TitleValueForm } from "./titleValue.form"
import { TitleValueView } from "./titleValue.view"

type Props = {
  initItems: TitleValueData
  onSubmit: (items: TitleValueData) => Promise<void>
  blockId: string
  className?: string
}

const TitleValueEditList: FC<Props> = ({
  initItems,
  onSubmit,
  blockId,
  className,
}) => {
  return (
    <EditWrapper
      view={<TitleValueView initItems={initItems} className={className} />}
      form={
        <TitleValueForm
          initItems={initItems}
          onSubmit={onSubmit}
          className={className}
        />
      }
      id={blockId}
    />
  )
}

export default TitleValueEditList
