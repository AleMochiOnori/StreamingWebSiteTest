import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import './CarouselSlider.css';
import type { TvShow } from '../MainComponent';



interface Props {
  shows: TvShow[];
}

const CarouselSlider: React.FC<Props> = ({ shows }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isEnd, setIsEnd] = React.useState(false);
  return (
   <div className="swiper-wrapper-container">
  {/* ✅ Freccia SINISTRA */}
  <div
    className="swiper-button-prev custom-prev"
    //style={{ visibility: activeIndex > 0 ? 'visible' : 'hidden' }}
  />

  <Swiper
    modules={[Navigation, Pagination, Scrollbar]}
    slidesPerView={5}
    navigation={{
      prevEl: '.custom-prev',
      nextEl: '.custom-next',
    }}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    loop={true}
    speed={500}
    onSlideChange={(swiper) => {
      setActiveIndex(swiper.activeIndex);
      setIsEnd(swiper.isEnd);
    }}
    
  >
    {shows.map((show) => (
      <SwiperSlide key={show.id}>
        <div className="slide-card">
          
          <img
            src={`https://image.tmdb.org/t/p/w300${show.poster_path}`}
            alt={show.name}
          />
          <h4>{show.name}</h4>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* ✅ Freccia DESTRA */}
  <div
    className="swiper-button-next custom-next"
    //style={{ visibility: isEnd ? 'hidden' : 'visible' }}
  />
</div>

  );
};

export default CarouselSlider;
