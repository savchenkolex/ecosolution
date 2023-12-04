import Image from 'next/image';
import css from './Footer.module.css';
import LogoImg from '../../public/logo_ecosolution.svg';

export default function Footer (props) {

    return (<>
        <div>
            <div className="container">
              <div className={css.footerBox}>
                    <div className={css.footerLeft} >
                        <a href="/ecosolution" className={css.logoBox}>
                            <Image
                                src={LogoImg} 
                                alt='Logo Ecosolution'
                                width={269}
                                height={40}
                                />
                        </a>
                        <p className={css.footerAdressBox}>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
                    </div>
                    <div className={css.footerContacts}>
                        <div className={css.socialMedia}>
                            <a href="facebook.com">
                                іконка фейсбука
                            </a>
                            <a href="instagram.com">іконка інстаграма</a>
                        </div>
                        <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
                    </div>
                    <div className={css.footerRight}>
                        <button className={css.goTopBtn} >стрілка вверх</button>
                        <p className={css.copyright} >ecosolution © 2023</p>
                    </div>
              </div>
            </div>
        </div>
        </>);
}