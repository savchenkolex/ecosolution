'use client'
import css from "./Cases.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination} from 'swiper/modules';
import "swiper/css";
import Image from "next/image";
import arrow from "../../assets/icons/arrow.svg";
import SlideImage1 from '../../assets/images/cases/slide-1.webp';
import SlideImage2 from '../../assets/images/cases/slide-2.webp';
import SlideImage3 from '../../assets/images/cases/slide-3.webp';
import SlideImage4 from '../../assets/images/cases/slide-4.webp';
import SlideImage5 from '../../assets/images/cases/slide-5.webp';

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
              src={SlideImage1}
              width={320}
              height={168}
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
              src={SlideImage2}
              width={320}
              height={168}
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
              src={SlideImage3}
              width={320}
              height={168}
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
              src={SlideImage4}
              width={320}
              height={168}
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
              src={SlideImage5}
              width={320}
              height={168}
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
