import BurgerMenu from "../BurgerMenu/BurgerMenu";
import css from "./Header.module.css";

export default function Header (props) {

    return (<>
        <div className="container"  >
            <p>This is the header</p>
            <BurgerMenu />
        </div>
    </>);
}