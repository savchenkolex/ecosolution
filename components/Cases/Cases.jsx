'use client'
import css from "./Cases.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination} from 'swiper/modules';
import "swiper/css";
import Image from "next/image";
import arrow from "../../assets/icons/arrow.svg";

export default function Cases(props) {
  return (
    <>
      <div id="sectioncases" className={css.sectionCases}>
        <div className="container">
          <h2 className="section-header">
            Successful cases of our company
          </h2>
          <div className={css.controllBox}>
            <p><span>01</span>/<span>05</span></p>
            <div className={css.buttonBox}>
            <button className={css.leftBtn}>
                <Image  
                src={arrow}
                alt="left button with arrow"
                className={css.leftArrow}
                />
            </button>
            <button className={css.rightBtn}>
                <Image  
                src={arrow}
                alt="right button with arrow"
                className={css.rightArrow}
                />
            </button>
            </div>
          </div>
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
