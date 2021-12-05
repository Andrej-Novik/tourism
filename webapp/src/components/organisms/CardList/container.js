import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getObjectsFromBD,
  //setObjectsIntoBD,
  setStateObjects,
  setSortObjects,
  setLikedObjects,
} from "../../../useCases/actions/objects";
import CardList from "./component";
// import json from "../../../content.json";

const CardListContainer = () => {
  const dispatch = useDispatch();
  //const setObjects = () => {
  //	for (let i = 0; i <= json.length - 1; i++) {
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
  //;

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

  const setLiked = (obj) => {
    let cards = JSON.parse(localStorage.getItem("liked")) || [];
    console.log(cards);
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
      }
    } else {
      cards.push(obj);
      localStorage.setItem("liked", JSON.stringify(cards));
    }
  };

  return (
    <div>
      <CardList
        objects={objects}
        isError={isError}
        isLoader={isLoader}
        sortUp={sortUp}
        sortDown={sortDown}
        setLiked={setLiked}
      />
      {/*<button onClick={setObjects}>SET</button>*/}
    </div>
  );
};

export const container = CardListContainer;
