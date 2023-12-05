import Image from "next/image";
import css from "./Main.module.css";
import arrrowRight from "../../assets/icons/arrow-right.svg";

export default function Main(props) {
  return (
    <>
      <div id="sectionmain" className={css.mainSection}>
        <div className="container">
          <div className={css.mainBox}>
            <h1 className={css.mainHeader}>RENEWABLE ENERGY For any task</h1>
            <div className={css.mainBoxText}>
              <p className="regular-text">
                Development and implementation of renewable non-polluting energy
                sources, generating power generation using energy wind, sun,
                water, biomass
              </p>
              <a href="#cases" className={css.learnMoreBtn}>
                <span>Learn more</span>
                <Image className={css.learnMoreArrowRight}
                  src={arrrowRight}
                  alt="Learn more button"
                  width={16}
                  height={16}
                />
              </a>
            </div>
            <div className={css.topContacts}>
              <a
                href="https://maps.app.goo.gl/w3Ac5a6uH968eTiT7"
                target="_blank"
              >
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </a>
              <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
              <p>ecosolution © 2023</p>
            </div>
            <div className={css.heroImage}></div>
          </div>
        </div>
      </div>
    </>
  );
}
