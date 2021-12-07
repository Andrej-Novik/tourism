import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getObjectsFromBD,
  //setObjectsIntoBD,
  setStateObjects,
  setSortObjects,
  setLikedObjects,
	deleteObjectFromBD,
	setSearchObjects,
	isSearch as IsSearch
} from "../../../useCases/actions/objects";
import CardList from './component';
// import json from "../../../content.json";

const CardListContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getObjectsFromBD());
  }, []);

  const sortBy = useSelector((state) => state.objects.sortBy);

  useEffect(() => {
    dispatch(setSortObjects());
  }, [sortBy]);

  const objects = useSelector((state) => state.objects.objects);
  const isError = useSelector((state) => state.objects.isError);
  const isLoader = useSelector((state) => state.objects.isLoader);
  let likedData = useSelector((state) => state.objects.likedObjects);

  const searchObject = useSelector((state) => state.objects.searchObject);
  const isSearch = useSelector((state) => state.objects.isSearch);

  const sortUp = (object) => {
    const obj = object.sort((a, b) => (a.rate > b.rate ? 1 : -1));
    dispatch(setStateObjects(obj));
    dispatch(setSortObjects("up"));
  };

  const sortDown = (object) => {
    const obj = object.sort((a, b) => (a.rate > b.rate ? -1 : 1));
    dispatch(setStateObjects(obj));
    dispatch(setSortObjects("down"));
  };

  const deleteObg = (id) => {
    dispatch(deleteObjectFromBD(id));
  };

  const setLiked = (obj) => {
    let cards = JSON.parse(localStorage.getItem("liked")) || [];
    if (obj.isLiked) {
      cards = cards.filter((i) => i.title !== obj.title);
      localStorage.setItem("liked", JSON.stringify(cards));
      dispatch(setLikedObjects());
    } else {
      if (cards.length) {
        let is = false;
        cards.forEach((i) => {
          if (obj.id === i.id) {
            is = true;
          }
        });
        if (!is) {
          cards.push(obj);
          localStorage.setItem("liked", JSON.stringify(cards));
          dispatch(setLikedObjects());
        }
      } else {
        cards.push(obj);
        localStorage.setItem("liked", JSON.stringify(cards));
        dispatch(setLikedObjects());
      }
    }
  };
  const backToCatalog = () => {
    dispatch(IsSearch(false))
    dispatch(setSearchObjects([]))
  }
  //const setObjects = () => {
  //  for (let i = 0; i <= json.length - 1; i++) {
  //    dispatch(
  //      setObjectsIntoBD(
  //        json[i].img,
  //        json[i].name,
  //        json[i].country,
  //        json[i].text,
  //        json[i].rate
  //      )
  //    );
  //  }
  //};
  return (
    <div>
      <CardList
        objects={objects}
        isError={isError}
        isLoader={isLoader}
        likedData={likedData}
        sortUp={sortUp}
        sortDown={sortDown}
        setLiked={setLiked}
        deleteObg={deleteObg}
        searchObject={searchObject}
        isSearch={isSearch}
        backToCatalog={backToCatalog}
      />
      {/*<button onClick={setObjects}>SET</button>*/}
    </div>
  );
};

export const container = CardListContainer;
