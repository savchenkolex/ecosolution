import Image from 'next/image';
import css from './Main.module.css';
import arrrowRight from '../../public/arrow-right.svg';

export default function Main (props) {

    return (<>
        <div className={css.mainSection}>
            <div className="container">
            <div className={css.mainBox}></div>
              <h1 className={css.mainHeader}>RENEWABLE ENERGY For any task</h1>
              <div className={css.mainBoxText}>
                <p className={css.mainDescription}>Development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass</p>
                <a href='#cases' className={css.learnMoreBtn} >
                    <span>Learn more</span>
                    <Image 
                    src={arrrowRight}
                    alt='Learn more button'
                    width={16}
                    height={16}
                    />
                </a>
              </div>   
            </div>
        </div>
    </>)
}