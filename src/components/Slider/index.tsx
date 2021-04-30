import styles from './styles.module.scss'
import Slick, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export function Slider() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  }

  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <Slick {...settings}>
          <div>
            <img src="/image-slider.png" alt="imagem teste" />
            <h2>Marcenas mattis egestas</h2>
            <p>
              Erdum et malesuada fames ac ante ileum primmer in faucibus
              uspendisse porta.
            </p>
          </div>
          <div>
            <img src="/image-slider.png" alt="imagem teste" />
            <h2>Marcenas mattis egestas</h2>
            <p>
              Erdum et malesuada fames ac ante ileum primmer in faucibus
              uspendisse porta.
            </p>
          </div>
          <div>
            <img src="/image-slider.png" alt="imagem teste" />
            <h2>Marcenas mattis egestas</h2>
            <p>
              Erdum et malesuada fames ac ante ileum primmer in faucibus
              uspendisse porta.
            </p>
          </div>
        </Slick>
      </div>
    </div>
  )
}
