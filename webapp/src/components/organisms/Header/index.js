import { Link, useLocation } from "react-router-dom";
import style from "./styles.module.scss";

const Header = () => {
  const catalogStyle =
    useLocation().pathname === "/catalog"
      ? style.catalog + " " + style.forCardList
      : style.catalog;
  const likedStyle =
    useLocation().pathname === "/liked"
      ? style.liked + " " + style.forCardList
      : style.liked;
  return (
    <header className={style.header}>
      <div className={style.container}>
        <Link to={"/"}>
          <div className={style.logo}>TRAVEL</div>
        </Link>
        <div className={style.links}>
          <Link to={"/liked"} className={likedStyle}>
            <div className={style.logo}>Избранное</div>
          </Link>
          <Link to={"/catalog"}>
            <div className={catalogStyle}>
              <span></span>
              <span>Каталог</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
