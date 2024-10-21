import { FC } from "react"
import styles from "./image-position-picker.module.css"
import classNames from "classnames"
import { isEqual } from "lodash"

const getCurrentPosition = (idx: number) => ({
  x: (idx % 3) - 1,
  y: Math.floor(idx / 3) - 1,
})

type Props = {
  position: { x: number; y: number }
  setPosition: (position: { x: number; y: number }) => void
}

const ImagePositionPicker: FC<Props> = ({ position, setPosition }) => {
  return (
    <div className={styles.container}>
      {new Array(9).fill(null).map((_, idx) => {
        const currentPosition = getCurrentPosition(idx)
        const onClick = () => setPosition(currentPosition)

        return (
          <button
            key={idx}
            onClick={onClick}
            className={classNames({
              [styles.btn]: true,
              [styles.isActive]: isEqual(currentPosition, position),
            })}
          />
        )
      })}
    </div>
  )
}

export default ImagePositionPicker
