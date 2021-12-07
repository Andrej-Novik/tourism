import Card from '../../molecules/Card';
import Loader from '../../atoms/Loader';
import style from './style.module.scss';
import { useEffect } from 'react';

const CardList = ({ objects, isError, isLoader,sortUp, sortDown, setLiked, likedData }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.block}>
          <h2 className={style.title}>Каталог</h2>
          <div className={style.btns}>
            <span>Сортировать по:</span>
            <button onClick={() => sortUp(objects)}>возр</button>
            <button onClick={() => sortDown(objects)}>убыв</button>
          </div>
        </div>
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
									text={card.text}
									setLiked={setLiked}
									likedData={likedData}
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
