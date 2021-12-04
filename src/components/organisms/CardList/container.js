import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getObjectsFromBD } from "../../../useCases/actions/objects";
import CardList from "./component";

const CardListContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getObjectsFromBD());
  }, []);

  const isError = useSelector((state) => state.objects.isError);
  const isLoader = useSelector((state) => state.objects.isLoader);
  const objects = useSelector((state) => state.objects.objects);

  return <CardList objects={objects} isError={isError} isLoader={isLoader} />;
};

export const container = CardListContainer;
