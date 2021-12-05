import { Link, useLocation } from "react-router-dom";
import style from "./styles.module.scss";

const Header = () => {
  const catalogStyle =
    useLocation().pathname === "/catalog"
      ? style.catalog + " " + style.forCardList
      : style.catalog;
  return (
    <header className={style.header}>
      <div className={style.container}>
        <Link to={"/"}>
          <div className={style.logo}>TRAVEL</div>
        </Link>
        <Link to={"/liked"}>
          <div className={style.logo}>LIKED</div>
        </Link>
        <Link to={"/catalog"}>
          <div className={catalogStyle}>
            <span></span>
            <span>Каталог</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
