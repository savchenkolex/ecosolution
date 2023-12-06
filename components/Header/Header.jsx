import BurgerMenu from "../BurgerMenu/BurgerMenu";
import css from "./Header.module.css";
import Image from "next/image";

import Logo from "../../public/logo_ecosolution.svg";

export default function Header ({menuHandler}) {
    
    return (<>
    <div className={css.headerSection}>
        <div className="container"  >
            <div className={css.headerbox}>
                <a href="/ecosolution" className={css.logoLink}>
                    <Image  className={css.logo} 
                            src={Logo} 
                            alt="Logo ecosolution" 
                            width={269} 
                            height={40} />
                </a>
                <div className={css.burgerBox} >
                <BurgerMenu menuHandler={menuHandler} />
                    <a className={css.getintouch} href="#">
                        <span>Get in touch</span>
                        <span className={css.gdot}></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </>);
}