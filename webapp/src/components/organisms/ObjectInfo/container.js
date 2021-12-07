import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getObjectFromBD, updateRate } from "../../../useCases/actions/objects";
import ObjectInfo from "./component";
import { useLocation } from "react-router-dom";

const ObjectInfoContainer = () => {
  const dispatch = useDispatch();
  const id = useLocation().pathname.slice(8);

  useEffect(() => {
    dispatch(getObjectFromBD(id));
  }, []);

  const currentObject = useSelector((state) => state.objects.currentObject);
  const isError = useSelector((state) => state.objects.isError);
  const isLoader = useSelector((state) => state.objects.isLoader);

  const submit = (id, newRate) => {
    dispatch(updateRate(id, newRate));
  };

  return (
    <ObjectInfo
      img={currentObject.img}
      name={currentObject.name}
      country={currentObject.country}
      text={currentObject.text}
      rate={currentObject.rate}
      isError={isError}
      isLoader={isLoader}
      id={currentObject.id}
      submit={submit}
    />
  );
};

export const container = ObjectInfoContainer;
