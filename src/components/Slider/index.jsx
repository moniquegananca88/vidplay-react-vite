import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import Card from '../Card'
import { Container } from './style'

function Slider({ info, title, type }) {
  const moviesWithImages = info.filter(
    (item) => item.poster_path || item.profile_path
  )

  return (
    <Container>
      <h2>{title}</h2>

   <Swiper
  modules={[Navigation]}
  navigation
  grabCursor
  spaceBetween={20}
  breakpoints={{
    0: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 3,
      centeredSlides: false,
    },
    1400: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  }}
>
        {moviesWithImages.map((item) => (
          <SwiperSlide key={item.id}>
            <Card
              item={item}
              type={type}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default Slider