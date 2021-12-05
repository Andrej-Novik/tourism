import { Link } from 'react-router-dom';
import style from './style.module.scss';

const Card = ({ img, title, country, rate, id }) => {
  let temp = [];
  if (rate) {
    for (let i = 0; i < rate; i++) {
      temp.push(i);
    }
  }

  return (
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
  );
};

export default Card;
