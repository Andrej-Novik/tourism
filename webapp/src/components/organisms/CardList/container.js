import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getObjectsFromBD,
  setObjectsIntoBD,
} from "../../../useCases/actions/objects";
import CardList from "./component";
import json from "../../../content.json";

const CardListContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getObjectsFromBD());
  }, []);

  const isError = useSelector((state) => state.objects.isError);
  const isLoader = useSelector((state) => state.objects.isLoader);
  const objects = useSelector((state) => state.objects.objects);
	console.log(json)


  const setObjects = () => {
		for (let i = 0; i <= json.length - 1; i++) {
      dispatch(
        setObjectsIntoBD(
          json[i].img,
          json[i].name,
          json[i].country,
          json[i].text,
          json[i].rate
        )
      );
    }
  };

  return (
    <div>
      <CardList objects={objects} isError={isError} isLoader={isLoader} />
      <button onClick={setObjects}>SET</button>
    </div>
  );
};

export const container = CardListContainer;
