import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getObjectsFromBD,
  setObjectsIntoBD,
  searchObject,
} from "../../../useCases/actions/objects";
import CardList from "./component";
//import json from "../../../content.json";

const CardListContainer = () => {
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getObjectsFromBD());
	}, []);

	const submit = (name) => {
    dispatch(searchObject(name))
  };
	
  const isError = useSelector((state) => state.objects.isError);
  const isLoader = useSelector((state) => state.objects.isLoader);
	const objects = useSelector((state) => state.objects.objects);
	const serarchingObject = useSelector((state) => state.objects.serarchingObject);

  return (
    <div>
      <CardList
        objects={objects}
        isError={isError}
				isLoader={isLoader}
				serarchingObject={serarchingObject}
        submit={submit}
      />
      {/*<button onClick={setObjects}>SET</button>*/}
    </div>
  );
};

export const container = CardListContainer;
