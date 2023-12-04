'use client'
import { useEffect, useState } from 'react';
import css from './BurgerMenu.module.css';

export default function BurgerMenu (props) {
    const [backdrop, setBackdrop ] = useState(css.menuHidden);
    const [menuOpen, setMenuOpen] = useState("false");

    const menuHandler = (event) => {
        
        if (backdrop === css.menuHidden) {
            setBackdrop(css.backdrop);
            setMenuOpen("true");
        } else {
            setBackdrop(css.menuHidden);
            setMenuOpen("false");
        }
    }

    useEffect(()=>{

        const escapeWatcher = (event) => {
            if (event.code === "Escape") {
              menuHandler();
            }
        };

        if (menuOpen) {
            window.addEventListener("keyup", escapeWatcher);
          }
    
        return () => {
            window.removeEventListener("keyup", escapeWatcher);
          };


    },[menuOpen, menuHandler])

    return (<>
        <button className={css.burgerBox} onClick={menuHandler}>
            <span className={css.burgerIcon}></span>
            <span className={css.burgerIcon}></span>
            <span className={css.burgerIcon}></span>
        </button>
        <div className={backdrop} onClick={menuHandler}>
            <div className={css.menuBox}>
                <button className={css.menuBtnClose} onClick={menuHandler} ><span>close</span></button>
                <ul className={css.menuList}>
                    <li className={css.menuListItem}>
                        <a href="#sectionmain" className={css.menuLink}>Main</a>
                    </li>
                    <li className={css.menuListItem}>
                        <a href="#sectionabout" className={css.menuLink}>About</a>
                    </li>
                    <li className={css.menuListItem}>
                        <a href="#sectionservice" className={css.menuLink}>Service</a>
                    </li>
                    <li className={css.menuListItem}>
                        <a href="#sectioncases" className={css.menuLink}>Cases</a>
                    </li>
                    <li className={css.menuListItem}>
                        <a href="#sectionfaq" className={css.menuLink}>FAQ</a>
                    </li>
                    <li className={css.menuListItem}>
                        <a href="#sectioncustomers" className={css.menuLink}>Customers</a>
                    </li>
                    <li className={css.menuListItem}>
                        <a href="#sectioncontactus" className={css.menuLink}>Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </>);
}
