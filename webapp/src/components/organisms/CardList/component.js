import Card from '../../molecules/Card';
import Loader from '../../atoms/Loader';
import Search from '../Search/';
import style from './style.module.scss';
import row from '../../../assets/icons/rowToLeft.svg';
import Pagination from '../../molecules/Pagination/';
import Toggle from '../../molecules/Toggle';

const CardList = ({
  objects,
  isLoader,
  sortUp,
  sortDown,
  isSearch,
  searchObject,
	backToCatalog,
	likedData,
	setLiked,
	deleteObg,
  objectsLength,
  currentPage,
  onChangePage
}) => {

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <Search />
        <Toggle sortUp={sortUp} sortDown={sortDown} objects={objects}/>
        <>
          {!isSearch ? (
            objects.length ? (
              <>
                <div className={style.list}>
                  {objects.slice((currentPage - 1) * 10, 10 * currentPage).map((card) => {
                    return (
                      <Card
                        key={card.name}
                        img={card.img}
                        title={card.name}
                        country={card.country}
                        rate={card.rate}
												id={card.id}
												likedData={likedData}
												setLiked={setLiked}
												deleteObg={deleteObg}
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
											setLiked={setLiked}
											likedData={likedData}
											deleteObg={deleteObg}
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
                  Такой достопримечательности нет в нашем приложении. Проверьте
                  данные, которые вы ввели или попробуйте ещё раз.
                </p>
              )}
            </>
          )}
        </>
        <Pagination objectsLength={objectsLength} onChangePage={onChangePage} currentPage={currentPage}/>
      </div>
    </div>
  );
};

export default CardList;
