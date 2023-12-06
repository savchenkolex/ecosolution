
import css from './BurgerMenu.module.css';

export default function BurgerMenu (props) {
    

    return (<>
        <button className={css.burgerBox} onClick={props.menuHandler}>
            <span className={css.burgerIcon}></span>
            <span className={css.burgerIcon}></span>
            <span className={css.burgerIcon}></span>
        </button>
    </>);
}
