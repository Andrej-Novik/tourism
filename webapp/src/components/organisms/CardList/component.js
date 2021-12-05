import Card from "../../molecules/Card";
import Loader from "../../atoms/Loader";
import style from "./style.module.scss";
import search from "../../../assets/icons/search.svg";
import { useState } from "react";

const CardList = ({ objects, isError, isLoader, serarchingObject, submit }) => {
  let [name, setName] = useState("");

  const sub = (event) => {
    event.preventDefault();
    submit(name);
    setName("");
  };

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <form className={style.form} onSubmit={sub}>
          <div className={style.search} onClick={sub}>
            <img src={search} />
            <span>Найти</span>
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </form>
        <h2 className={style.title}>Каталог</h2>
        {isError ? (
          <div className={style.error}>TOURISM OBJECTS NOT FAUND</div>
        ) : isLoader ? (
          <Loader />
        ) : serarchingObject ? (
          <Card
            img={serarchingObject.img}
            title={serarchingObject.name}
            country={serarchingObject.country}
            rate={serarchingObject.rate}
            id={serarchingObject.id}
          />
        ) : (
          <div className={style.list}>
            {objects.map((card) => {
              return (
                <Card
                  key={card.name}
                  img={card.img}
                  title={card.name}
                  country={card.country}
                  rate={card.rate}
                  id={card.id}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardList;
