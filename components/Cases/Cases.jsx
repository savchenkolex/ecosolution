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
            // spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className={css.slideItem}>
              <Image 
              className={css.slideImage}

              />
              <div className={css.slideTitle}>
              <h3>Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”</h3>
              <button className={css.slideButton} ></button>
              </div>
              <div className={css.slideInfo}>
                <p>Wind Power for auto field irrigation</p>
                <p>July 2023</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={css.slideItem}>
            <Image 
              className={css.slideImage}

              />
              <div className={css.slideTitle}>
              <h3>Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”</h3>
              <button className={css.slideButton} ></button>
              </div>
              <div className={css.slideInfo}>
                <p>Wind Power for auto field irrigation</p>
                <p>July 2023</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={css.slideItem}>
            <Image 
              className={css.slideImage}

              />
              <div className={css.slideTitle}>
              <h3>Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”</h3>
              <button className={css.slideButton} ></button>
              </div>
              <div className={css.slideInfo}>
                <p>Wind Power for auto field irrigation</p>
                <p>July 2023</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={css.slideItem}>
            <Image 
              className={css.slideImage}

              />
              <div className={css.slideTitle}>
              <h3>Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”</h3>
              <button className={css.slideButton} ></button>
              </div>
              <div className={css.slideInfo}>
                <p>Wind Power for auto field irrigation</p>
                <p>July 2023</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={css.slideItem}>
            <Image 
              className={css.slideImage}

              />
              <div className={css.slideTitle}>
              <h3>Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”</h3>
              <button className={css.slideButton} ></button>
              </div>
              <div className={css.slideInfo}>
                <p>Wind Power for auto field irrigation</p>
                <p>July 2023</p>
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </>
  );
}
