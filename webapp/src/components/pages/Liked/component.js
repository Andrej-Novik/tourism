import Card from "../../molecules/Card";
import style from "./style.module.scss";

const Liked = ({ liked }) => {
  return (
    <div className={style.wrapper}>
      {liked.length ? (
        <div className={style.container}>
          {liked.map((card) => {
            return (
              <Card
                key={card.name}
                img={card.img}
                title={card.title}
                country={card.country}
                rate={card.rate}
                id={card.id}
              />
            );
          })}{" "}
        </div>
      ) : (
        <div className={style.container}>Нет добавленных объктов</div>
      )}
    </div>
  );
};

export default Liked;
