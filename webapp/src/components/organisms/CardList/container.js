import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  getObjectsFromBD,
  setObjectsIntoBD,
  setStateObjects,
  setSortObjects,
  setSearchObjects,
  setObjectsLength,
  setPaginationPage,
  setCurrentPage,
  isSearch as IsSearch,
} from '../../../useCases/actions/objects';
import CardList from './component';
// import json from "../../../content.json";

const CardListContainer = () => {
  const dispatch = useDispatch();
  const objects = useSelector((state) => state.objects.objects);
  const objectsLength = useSelector((state) => state.objects.objectsLength);
  const currentPage = useSelector((state) => state.objects.currentPage);
  const sortBy = useSelector((state) => state.objects.sortBy);
  const isError = useSelector((state) => state.objects.isError);
  const isLoader = useSelector((state) => state.objects.isLoader);
  const searchObject = useSelector((state) => state.objects.searchObject);
  const isSearch = useSelector((state) => state.objects.isSearch);

  const sortUp = (object) => {
    const obj = object.sort((a, b) => (a.rate > b.rate ? 1 : -1));
    dispatch(setStateObjects(obj));
    dispatch(setSortObjects('up'));
  };
  const sortDown = (object) => {
    const obj = object.sort((a, b) => (a.rate > b.rate ? -1 : 1));
    dispatch(setStateObjects(obj));
    dispatch(setSortObjects('down'));
  };
  const backToCatalog = () => {
    dispatch(IsSearch(false));
    dispatch(setSearchObjects([]));
  };
  const onChangePage = (number, side = null) => {
    if (number && !side) {
      dispatch(setCurrentPage(number));
    }
    if (!number && side === 'prev') {
      if (currentPage >= 2) {
        dispatch(setCurrentPage(currentPage - 1));
      }
    }
    if (!number && side === 'next') {
      if (currentPage < Math.ceil(objectsLength / 10)) {
        dispatch(setCurrentPage(currentPage + 1));
      }
    }
    if (!number && side === 'end') {
      if (currentPage + 2 > Math.ceil(objectsLength / 10)) {
        dispatch(setCurrentPage(Math.ceil(objectsLength / 10)))
      } else {
        dispatch(setCurrentPage(currentPage + 2))
      }
    }
  };
  // const onChangePage = (number, side = null) => {
  //   if (number && !side) {
  //     dispatch(getPersons(showCards, +showCards * (+number - 1)));
  //     getPaginationPage(number);
  //     getPaginationCard(number * showCards - (showCards - 1));
  //   }
  //   if (!number && side === 'prev') {
  //     if (currentPage >= 2) {
  //       dispatch(
  //         getPersons(showCards, showCards * (currentPage - 1) - showCards)
  //       );
  //       getPaginationPage(currentPage - 1);
  //       getPaginationCard((currentPage - 1) * showCards - (showCards - 1));
  //     }
  //   }
  //   if (!number && side === 'next') {
  //     if (currentPage < totalPages) {
  //       dispatch(
  //         getPersons(showCards, showCards * (currentPage + 1) - showCards)
  //       );
  //       getPaginationPage(currentPage + 1);
  //       getPaginationCard((currentPage + 1) * showCards - (showCards - 1));
  //     }
  //   }
  //   if (!number && side === 'end') {
  //     if (currentPage + 3 > totalPages) {
  //       dispatch(getPersons(showCards, showCards * totalPages - showCards));
  //       getPaginationPage(totalPages);
  //       getPaginationCard(totalPages * showCards - (showCards - 1));
  //     } else {
  //       dispatch(
  //         getPersons(showCards, showCards * (currentPage + 3) - showCards)
  //       );
  //       getPaginationPage(currentPage + 3);
  //       getPaginationCard((currentPage + 3) * showCards - (showCards - 1));
  //     }
  //   }
  // };

  useEffect(() => {
    dispatch(getObjectsFromBD());
  }, []);

  useEffect(() => {
    dispatch(setSortObjects());
  }, [sortBy]);

  useEffect(() => {
    dispatch(setObjectsLength(objects.length));
  }, [objects, objectsLength]);

  return (
    <div>
      <CardList
        objects={objects}
        isError={isError}
        isLoader={isLoader}
        sortUp={sortUp}
        sortDown={sortDown}
        searchObject={searchObject}
        isSearch={isSearch}
        backToCatalog={backToCatalog}
        objectsLength={objectsLength}
        currentPage={currentPage}
        onChangePage={onChangePage}
        // showObjects={showObjects}
      />
      {/*<button onClick={setObjects}>SET</button>*/}
    </div>
  );
};

export const container = CardListContainer;
