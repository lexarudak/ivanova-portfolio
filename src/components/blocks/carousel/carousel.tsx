import { FC } from "react"
import styles from "./carousel.module.css"
import { Block } from "../../../shared/types"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

const Carousel: FC<Block> = ({ images, text, id }) => {
  const [emblaRef] = useEmblaCarousel({}, [Autoplay()])

  if (!images) {
    return null
  }

  return (
    <div className={styles.block} key={id}>
      <div className={styles.carousel} ref={emblaRef}>
        <div className={styles.container}>
          {images.map((src, ind) => (
            <img
              className={styles.slide}
              key={ind}
              src={src}
              alt={`Carousel image ${ind}`}
            />
          ))}
        </div>
      </div>
      {!!text?.length && (
        <div className={styles.textContainer}>
          {text.map(message => (
            <p>{message}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default Carousel
