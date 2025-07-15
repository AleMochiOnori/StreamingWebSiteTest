import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import './CarouselSlider.css';

interface CarouselSliderItem {
  id : number;
  name: string;
  image: string;
}
interface Props {
  items: CarouselSliderItem[];
  carouselName : string;
}

const CarouselSlider: React.FC<Props> = ({ items , carouselName }) => {
  

{/* DA FINIRE MODIFICA POST PER SCHERMI GRANDI E PICCOLI
  const [sliderVariable , setSliderVariable] = useState(5);
  useEffect(() => {
    let width = window.innerWidth
    if (width < 1400) {
      setSliderVariable(2)
    }
  } , [window.innerWidth])

*/}
  return (
   <div className="carousel-wrapper">
  <div className="swiper-wrapper-container">
    <Swiper
      className="carousel-component"
      modules={[Navigation, Pagination, Scrollbar]}
      slidesPerView={5 /*sliderVariable*/}
      navigation={{
        prevEl: `.custom-prev-${carouselName}`,
        nextEl: `.custom-next-${carouselName}`,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      speed={500}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="slide-card">
            <img
              src={`https://image.tmdb.org/t/p/w300${item.image}`}
              alt={item.name}
            />
            <h4>{item.name}</h4>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  <div className={`swiper-button-prev custom-prev-${carouselName}`} />
  <div className={`swiper-button-next custom-next-${carouselName}`} />
</div>


  );
};

export default CarouselSlider;
