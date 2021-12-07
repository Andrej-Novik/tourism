import Search from './component';
import { useDispatch } from 'react-redux';
import {
  setSearchObjectsFromBD
} from '../../../useCases/actions/objects';
const SearchContainer = () => {
  const dispatch = useDispatch();
  const onSubmit = (name) => {
    if (name) {
      dispatch(setSearchObjectsFromBD(name));
    }
  };

  return <Search onSubmit={onSubmit} />;
};

export const container = SearchContainer;
