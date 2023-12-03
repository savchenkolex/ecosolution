import css from './BurgerMenu.module.css';

export default function BurgerMenu (props) {

    return (<>
        <div className={css.burgerBox}>
            <span className={css.burgerIcon}></span>
            <span className={css.burgerIcon}></span>
            <span className={css.burgerIcon}></span>
        </div>
    </>);
}
