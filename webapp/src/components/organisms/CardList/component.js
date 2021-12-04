import Card from "../../molecules/Card";
import Loader from "../../atoms/Loader";
import style from "./style.module.scss";

const CardList = ({ objects, isError, isLoader }) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Каталог</h2>
      {isError ? (
        <div className={style.error}>TOURISM OBJECTS NOT FAUND</div>
      ) : isLoader ? (
        <Loader />
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
  );
};

export default CardList;
