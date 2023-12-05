import Image from "next/image";
import css from "./Footer.module.css";
import LogoImg from "../../public/logo_ecosolution.svg";
import facebookIco from "../../assets/icons/facebook.svg";
import InstagramIco from "../../assets/icons/instagram.svg";

export default function Footer(props) {
  return (
    <>
      <div>
        <div className="container">
          <div className={css.footerBox}>
            <div className={css.footerLeft}>
              <a href="/ecosolution" className={css.logoBox}>
                <Image
                  src={LogoImg}
                  alt="Logo Ecosolution"
                  width={269}
                  height={40}
                />
              </a>
              <p className={css.footerAdressBox}>
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </p>
            </div>
            <div className={css.footerContacts}>
              <div className={css.socialMedia}>
                <a href="http://facebook.com">
                  <svg
                    className={css.facebookIco}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <title>facebook</title>
                    <path d="M18.667 12.4v3.867h3.467c0.267 0 0.4 0.267 0.4 0.533l-0.533 2.533c0 0.133-0.267 0.267-0.4 0.267h-2.933v9.733h-4v-9.6h-2.267c-0.267 0-0.4-0.133-0.4-0.4v-2.533c0-0.267 0.133-0.4 0.4-0.4h2.267v-4.4c0-2.267 1.733-4 4-4h3.6c0.267 0 0.4 0.133 0.4 0.4v3.2c0 0.267-0.133 0.4-0.4 0.4h-3.2c-0.267 0-0.4 0.133-0.4 0.4z"></path>
                    <path d="M12 1.667c-3.467 0-6.113 0.696-7.875 2.458s-2.458 4.408-2.458 7.875v8c0 3.467 0.696 6.113 2.458 7.875s4.408 2.458 7.875 2.458h8c3.467 0 6.113-0.696 7.875-2.458s2.458-4.408 2.458-7.875v-8c0-3.467-0.696-6.113-2.458-7.875s-4.408-2.458-7.875-2.458zM12 3.667h8c3.2 0 5.22 0.637 6.458 1.875s1.875 3.258 1.875 6.458v8c0 3.2-0.637 5.22-1.875 6.458s-3.258 1.875-6.458 1.875h-8c-3.2 0-5.22-0.637-6.458-1.875s-1.875-3.258-1.875-6.458v-8c0-3.2 0.637-5.22 1.875-6.458s3.258-1.875 6.458-1.875z"></path>
                  </svg>
                </a>
                <a href="https://instagram.com">
                  <svg
                    className={css.InstagramIco}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <title>instagram</title>
                    <path d="M12 1.667c-3.467 0-6.113 0.696-7.875 2.458s-2.458 4.408-2.458 7.875v8c0 3.467 0.696 6.113 2.458 7.875s4.408 2.458 7.875 2.458h8c3.467 0 6.113-0.696 7.875-2.458s2.458-4.408 2.458-7.875v-8c0-3.467-0.696-6.113-2.458-7.875s-4.408-2.458-7.875-2.458zM12 3.667h8c3.2 0 5.22 0.637 6.458 1.875s1.875 3.258 1.875 6.458v8c0 3.2-0.637 5.22-1.875 6.458s-3.258 1.875-6.458 1.875h-8c-3.2 0-5.22-0.637-6.458-1.875s-1.875-3.258-1.875-6.458v-8c0-3.2 0.637-5.22 1.875-6.458s3.258-1.875 6.458-1.875z"></path>
                    <path d="M16 10.333c-3.118 0-5.667 2.549-5.667 5.667s2.549 5.667 5.667 5.667c3.118 0 5.667-2.549 5.667-5.667s-2.549-5.667-5.667-5.667zM16 12.333c2.037 0 3.667 1.63 3.667 3.667s-1.63 3.667-3.667 3.667c-2.037 0-3.667-1.63-3.667-3.667s1.63-3.667 3.667-3.667z"></path>
                    <path d="M23.516 8c-0.736 0-1.333 0.597-1.333 1.333v0c0 0.736 0.597 1.333 1.333 1.333v0h0.016c0.736 0 1.333-0.597 1.333-1.333v0c0-0.736-0.597-1.333-1.333-1.333v0z"></path>
                  </svg>
                </a>
              </div>
              <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
            </div>
            <div className={css.footerRight}>
              <button className={css.goTopBtn}>
                <svg
                  className={css.buttonArrowToTop}
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <title>arrow-right</title>
                  <path d="M18.769 7.434c-0.121 0.121-0.195 0.287-0.195 0.471s0.075 0.351 0.195 0.471l7.622 7.622-7.622 7.622c-0.121 0.121-0.195 0.287-0.195 0.471s0.075 0.351 0.195 0.471v0c0.121 0.121 0.287 0.195 0.471 0.195s0.351-0.075 0.471-0.195l8.094-8.092c0.121-0.121 0.195-0.287 0.195-0.471s-0.075-0.351-0.195-0.471l-8.094-8.094c-0.121-0.121-0.287-0.195-0.471-0.195s-0.351 0.075-0.471 0.195v0z"></path>
                  <path d="M4.668 15.332c-0.368 0-0.667 0.298-0.667 0.667v0c0 0.368 0.298 0.667 0.667 0.667v0h22.439c0.368 0 0.667-0.298 0.667-0.667v0c0-0.368-0.298-0.667-0.667-0.667v0z"></path>
                </svg>
              </button>
              <p className={css.copyright}>ecosolution © 2023</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
