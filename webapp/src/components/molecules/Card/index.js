import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./style.module.scss";

const Card = ({
  img,
  title,
  country,
  rate,
  text,
  id,
  setLiked,
  likedData,
  deleteObg,
}) => {
  const isLikedPage = useLocation().pathname === "/liked";
  let [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    likedData.forEach((i) => {
      if (i.id === id) {
        setIsLiked(true);
      }
    });
  });

  const set = () => {
    if (isLiked) {
      setIsLiked(false);
      setLiked({ title, isLiked });
    } else {
      setLiked({ img, title, country, text, rate, id });
      setIsLiked(true);
    }
  };

  const del = () => {
    deleteObg(id);
    setLiked({ title, isLiked });
  };

  let temp = [];
  if (rate) {
    for (let i = 0; i < rate; i++) {
      temp.push(i);
    }
  }

  return (
    <div className={style.wrapper}>
      {!isLikedPage && (
        <div className={style.cross} onClick={del}>
          <span></span>
        </div>
      )}
      <div className={!isLikedPage ? style.like : style.likeTop} onClick={set}>
        {!isLiked ? (
          <img src="http://s1.iconbird.com/ico/2013/9/452/w512h4961380477090star.png" />
        ) : (
          <img src="https://pngicon.ru/file/uploads/izbrannoye.png" />
        )}
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
