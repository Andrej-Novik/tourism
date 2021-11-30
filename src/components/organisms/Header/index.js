import { Link } from "react-router-dom";
import style from "./styles.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <Link to={"/"}>
          <div className={style.logo}>LOGO</div>
        </Link>
        <Link to={"/catalog"}>
          <div className={style.catalog}>
            <span></span>
            <span>Каталог</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
