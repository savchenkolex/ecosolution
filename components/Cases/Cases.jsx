'use client'
import css from "./Cases.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination} from 'swiper/modules';
import "swiper/css";

export default function Cases(props) {
  return (
    <>
      <div id="cases">
        <div className="container">
          <h2 className="section-header">Successful cases of our company</h2>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </>
  );
}
