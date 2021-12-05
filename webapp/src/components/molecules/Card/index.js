import { Link } from "react-router-dom";
import style from "./style.module.scss";

const Card = ({ img, title, country, rate, text, id, setLiked }) => {
  let temp = [];
  if (rate) {
    for (let i = 0; i < rate; i++) {
      temp.push(i);
    }
  }

  const set = () => {
    setLiked({ img, title, country, text, rate, id });
  };

  return (
    <div className={style.wrapper}>
      <div className={style.cross}>
        <span></span>
      </div>
      <div className={style.like} onClick={set}>
        <img src="http://s1.iconbird.com/ico/2013/9/452/w512h4961380477090star.png" />
      </div>
      <Link to={`/object/${id}`} className={style.card}>
        <div className={style.image}>
          <img src={img} alt="" />
        </div>
        <div className={style.info}>
          <div className={style.country}>{country}</div>
          <div className={style.title}>{title}</div>
          <div className={style.rate}>
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
          <div className={style.more}>Узнать больше</div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
