import { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../atoms/Loader";
import row from "../../../assets/icons/rowToLeft.svg";
import style from "./style.module.scss";

const ObjectInfo = ({
  id,
  img,
  name,
  country,
  text,
  rate,
  isError,
  isLoader,
  submit,
}) => {
  let [isOpen, changeIsOpen] = useState(false);
  let [error, changeError] = useState(false);
  let [newRate, changeNewRate] = useState(rate);

  const changeStatus = () => {
    changeIsOpen(!isOpen);
  };

  const sub = (event) => {
    event.preventDefault();
    if (newRate >= 1 && newRate <= 5) {
      submit(id, newRate);
      changeNewRate("");
    } else changeError(true);
  };

  let temp = [];
  if (rate) {
    for (let i = 0; i < rate; i++) {
      temp.push(i);
    }
  }

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <Link to={"/catalog"} className={style.link}>
          <img src={row} />
          <div>Назад в каталог</div>
        </Link>
        {isError ? (
          <div className={style.error}>TOURISM OBJECTS NOT FAUND</div>
        ) : isLoader ? (
          <Loader />
        ) : (
          <div>
            <div className={style.object}>
              <div className={style.image}>
                <img src={img} />
              </div>
              <div className={style.info}>
                <div className={style.country}>{country}</div>
                <div className={style.title}>{name}</div>
                <div className={style.rate}>
                  <p>Моя оценка:</p>
                  {temp.map((i) => {
                    return (
                      <img
                        key={i}
                        src="https://emojigraph.org/media/google/star_2b50.png"
                        alt="img"
                      />
                    );
                  })}
                </div>
                <div onClick={changeStatus} className={style.change}>
                  Изменить оценку
                </div>
                {isOpen && (
                  <form onSubmit={sub} className={style.form}>
                    <input
                      type="number"
                      value={newRate}
                      onChange={(e) => {
                        changeNewRate(e.target.value);
                        changeError(false);
                      }}
                    />
                    <button disabled={error}>Изменить</button>
                    {error && <p>error value</p>}
                  </form>
                )}
              </div>
            </div>
            <p className={style.text}>{text}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ObjectInfo;
