"use client";

import css from "./BackdropMenu.module.css";

export default function BackdropMenu({ backdrop, menuHandler }) {
  return (
    <>
      <div className={backdrop} onClick={menuHandler}>
        <div className={css.menuBox}>
          <button className={css.menuBtnClose} onClick={menuHandler}>
            <span>close</span>
          </button>
          <ul className={css.menuList}>
            <li className={css.menuListItem}>
              <a href="#sectionmain" className={css.menuLink}>
                Main
              </a>
            </li>
            <li className={css.menuListItem}>
              <a href="#sectionabout" className={css.menuLink}>
                About
              </a>
            </li>
            <li className={css.menuListItem}>
              <a href="#sectioncases" className={css.menuLink}>
                Cases
              </a>
            </li>
            <li className={css.menuListItem}>
              <a href="#sectionfaq" className={css.menuLink}>
                FAQ
              </a>
            </li>
            <li className={css.menuListItem}>
              <a href="#sectioncontactus" className={css.menuLink}>
                Contact Us
              </a>
            </li>
          </ul>
          <div className={css.socialMedia}>
            <a href="http://facebook.com" className={css.socialMediaLink}>
              <svg
                
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
            <a href="https://instagram.com" className={css.socialMediaLink}>
              <svg
                
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
        </div>
      </div>
    </>
  );
}
