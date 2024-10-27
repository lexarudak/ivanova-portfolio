import classNames from "classnames"
import { ChangeEventHandler, FC, useState } from "react"
import { useDispatch } from "react-redux"
import { aboutService } from "../../service/about-service/about-service"
import { EDIT_BUTTON_VARIANT } from "../../shared/constants"
import useSubmit from "../../shared/hooks/use-submit"
import { setAboutImage } from "../../store/about"
import EditButton from "../shared-components/edit-button"
import styles from "./image-form.module.css"
import ImagePositionPicker from "./image-position-picker/image-position-picker"
import { xToString, yToString } from "../../shared/helpers"

type Props = {
  src: string
  className?: string
  imgStyle?: string
  initPosition?: { x: number; y: number }
  initZoom?: number
}

const ImageForm: FC<Props> = ({
  src,
  imgStyle,
  className,
  initPosition = { x: 0, y: 0 },
}) => {
  const dispatch = useDispatch()
  const [file, setFile] = useState<File | null>(null)
  const [image, setImage] = useState(src)
  const [position, setPosition] = useState(initPosition)
  const [zoom] = useState(1)

  const submit = useSubmit(async () => {
    if (file) {
      /* empty */
    } else {
      const { image: newImg } = await aboutService().updateImage({
        src: image,
        ...position,
        zoom,
      })

      dispatch(setAboutImage(newImg))
    }
  })

  const onFileAdd: ChangeEventHandler<HTMLInputElement> = e => {
    const file = e.target.files?.[0] || null
    setFile(file)
    if (file) {
      setImage(URL.createObjectURL(file))
    }
  }

  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundPositionX: xToString(position.x),
    backgroundPositionY: yToString(position.y),
  }

  return (
    <div className={classNames(className, styles.container)}>
      <div style={imageStyle} className={classNames(imgStyle, styles.img)}>
        <ImagePositionPicker position={position} setPosition={setPosition} />
      </div>
      <input type="file" multiple={false} onChange={onFileAdd} />

      <EditButton
        variant={EDIT_BUTTON_VARIANT.save}
        className={styles.save}
        onClick={submit}
      />
    </div>
  )
}

export default ImageForm
