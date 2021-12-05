import Card from '../../molecules/Card';
import Loader from '../../atoms/Loader';
import Search from '../Search/';
import style from './style.module.scss';
import { useEffect } from 'react';
import row from '../../../assets/icons/rowToLeft.svg';

/* {isError ? (
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
        )} */

const CardList = ({
  objects,
  isError,
  isLoader,
  sortUp,
  sortDown,
  isSearch,
  searchObject,
  backToCatalog,
}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <Search />
        <div className={style.block}>
          <h2 className={style.title}>Каталог</h2>
          <div className={style.btns}>
            <span>Сортировать по:</span>
            <button onClick={() => sortUp(objects)}>возр</button>
            <button onClick={() => sortDown(objects)}>убыв</button>
          </div>
        </div>
        <>
          {!isSearch ? (
            objects.length ? (
              <>
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
              </>
            ) : null
          ) : searchObject.length ? (
            <>
              <div className={style.list}>
                {searchObject.map((card) => {
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
                <button
                  to={'/catalog'}
                  className={style.link}
                  onClick={() => backToCatalog()}
                >
                  <div>
                    <img src={row} />
                    <div>Назад в каталог</div>
                  </div>
                </button>
              </div>
            </>
          ) : (
            <>
              {!searchObject.length && isLoader ? (
                <Loader />
              ) : (
                <p data-failed-search-text>
                  Такой достопримечательности нет в нашем приложении. Проверьте данные, которые вы ввели или попробуйте ещё раз.
                </p>
              )}
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default CardList;
