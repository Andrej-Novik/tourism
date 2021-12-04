import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getObjectFromBD } from '../../../useCases/actions/objects';
import ObjectInfo from './component';
import { useLocation } from 'react-router-dom';

const ObjectInfoContainer = () => {
  const dispatch = useDispatch();
  const id = useLocation().pathname.slice(8);
  const currentObject = useSelector((state) => state.objects.currentObject);

  useEffect(() => {
    console.log('work');
    dispatch(getObjectFromBD(id));
  }, []);

  const isError = useSelector((state) => state.objects.isError);
  const isLoader = useSelector((state) => state.objects.isLoader);
  console.log(id);

  return (
    <ObjectInfo
      img={currentObject.img}
      name={currentObject.name}
      country={currentObject.country}
      text={currentObject.text}
      rate={currentObject.rate}
    />
  );
};

export const container = ObjectInfoContainer;
