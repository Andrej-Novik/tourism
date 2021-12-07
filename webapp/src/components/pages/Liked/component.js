import Card from "../../molecules/Card";
import style from "./style.module.scss";

const Liked = ({ liked, likedData, setLiked }) => {
  return (
    <div className={style.wrapper}>
      {liked.length ? (
        <div className={style.container}>
          {liked.map((card) => {
            return (
              <Card
                key={card.img}
                img={card.img}
                title={card.title}
                country={card.country}
                rate={card.rate}
                id={card.id}
                likedData={likedData}
                setLiked={setLiked}
              />
            );
          })}
        </div>
      ) : (
        <div className={style.container}>
          <h3>Нет добавленных объктов</h3>
        </div>
      )}
    </div>
  );
};

export default Liked;
