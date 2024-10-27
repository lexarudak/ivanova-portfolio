import { FC, ReactNode } from "react"
import { TitleValueData } from "../../shared/types"
import EditWrapper from "../edit-wrapper/edit-wrapper"
import { TitleValueForm } from "./titleValue.form"
import { TitleValueView } from "./titleValue.view"

type Props = {
  initItems: TitleValueData
  onSubmit: (items: TitleValueData) => Promise<void>
  blockId: string
  className?: string
  label?: ReactNode
  placeholders?: [string, string]
}

const TitleValueEditList: FC<Props> = ({
  initItems,
  onSubmit,
  blockId,
  className,
  label,
  placeholders,
}) => {
  return (
    <EditWrapper
      view={
        <TitleValueView
          initItems={initItems}
          className={className}
          label={label}
        />
      }
      form={
        <TitleValueForm
          label={label}
          initItems={initItems}
          onSubmit={onSubmit}
          className={className}
          placeholders={placeholders}
        />
      }
      id={blockId}
    />
  )
}

export default TitleValueEditList
