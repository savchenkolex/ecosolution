"use client";
import css from "./Cases.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import arrow from "../../assets/icons/arrow-right.svg";
import SlideImage1 from "../../assets/images/cases/slide-1.webp";
import SlideImage2 from "../../assets/images/cases/slide-2.webp";
import SlideImage3 from "../../assets/images/cases/slide-3.webp";
import SlideImage4 from "../../assets/images/cases/slide-4.webp";
import SlideImage5 from "../../assets/images/cases/slide-5.webp";

export default function Cases(props) {
  return (
    <>
      <div id="sectioncases" className={css.sectionCases}>
        <div className="container">
          <h2 className="section-header">Successful cases of our company</h2>
          <div className={css.controllBox}>
            <p>
              <span>01</span>/<span>05</span>
            </p>
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
                width={321}
                height={168}
              />
              <div className={css.slideInfo}>
              <div className={css.slideTitle}>
                <h3>
                  Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”
                </h3>
                <a className={css.slideButton}>
                  <Image
                    src={arrow}
                    alt="button with arrow 45deg to top"
                    width={28}
                    height={28}
                  />
                </a>
              </div>
              <div className={css.slideDescription}>
                <p>Wind Power for auto field irrigation</p>
                <p>July 2023</p>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={css.slideItem}>
              <Image
                className={css.slideImage}
                src={SlideImage2}
                width={321}
                height={168}
              />
              <div className={css.slideInfo}>
              <div className={css.slideTitle}>
                <h3>
                Zhytomyr city Private Enterprise “Bosch”
                </h3>
                <a className={css.slideButton}>
                  <Image
                    src={arrow}
                    alt="button with arrow 45deg to top"
                    width={28}
                    height={28}
                  />
                </a>
              </div>
              <div className={css.slideDescription}>
                <p>Solar Panels for industrial use</p>
                <p>November 2023</p>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={css.slideItem}>
              <Image
                className={css.slideImage}
                src={SlideImage3}
                width={321}
                height={168}
              />
              <div className={css.slideInfo}>
              <div className={css.slideTitle}>
                <h3>
                Rivne city Private Enterprise “Biotech”
                </h3>
                <a className={css.slideButton}>
                  <Image
                    src={arrow}
                    alt="button with arrow 45deg to top"
                    width={28}
                    height={28}
                  />
                </a>
              </div>
              <div className={css.slideDescription}>
                <p>Thermal modules</p>
                <p>October 2023</p>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={css.slideItem}>
              <Image
                className={css.slideImage}
                src={SlideImage4}
                width={321}
                height={168}
              />
              <div className={css.slideInfo}>
              <div className={css.slideTitle}>
                <h3>
                Kherson city Private Enterprise “HealthyFarm”
                </h3>
                <a className={css.slideButton}>
                  <Image
                    src={arrow}
                    alt="button with arrow 45deg to top"
                    width={28}
                    height={28}
                  />
                </a>
              </div>
              <div className={css.slideDescription}>
                <p>Wind power</p>
                <p>September 2021</p>
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={css.slideItem}>
              <Image
                className={css.slideImage}
                src={SlideImage5}
                width={321}
                height={168}
              />
              <div className={css.slideInfo}>
              <div className={css.slideTitle}>
                <h3>
                Zaporizhia city Private Enterprise “Biotech”
                </h3>
                <a className={css.slideButton}>
                  <Image
                    src={arrow}
                    alt="button with arrow 45deg to top"
                    width={28}
                    height={28}
                  />
                </a>
              </div>
              <div className={css.slideDescription}>
                <p>Mini nuclear stations</p>
                <p>May 2021</p>
              </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
