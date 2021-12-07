import {
  SET_STATE_OBJECTS,
  CHANGE_OBJECT_LOADER,
  ERROR_OBJECT_USERS,
  SET_CURRENT_OBJECT,
  CHANGE_RATE,
  SET_SORT_OBJECTS,
	SET_LIKED_OBJECTS,
	DELETE_OBJECT,
  IS_SEARCH,
  SEARCH_OBJECTS,
  GET_OBJECTS_LENGTH,
  SET_CURRENT_PAGE,
  SET_PAGINATION_PAGE
} from '../actionTypes/objects';
import Repository from '../../repository';

export const setStateObjects = (objects) => {
  return { type: SET_STATE_OBJECTS, payload: objects };
};
export const setLikedObjects = () => {
  return { type: SET_LIKED_OBJECTS };
};
export const setSortObjects = (objects) => {
  return { type: SET_SORT_OBJECTS, payload: objects };
};
export function objectsLoading(value) {
  return { type: CHANGE_OBJECT_LOADER, value };
}
export function loadingError(value) {
  return { type: ERROR_OBJECT_USERS, value };
}
export const setCurrentObject = (object) => {
  return { type: SET_CURRENT_OBJECT, payload: object };
};
export const changeRate = (id, rate) => {
  return { type: CHANGE_RATE, id, rate };
};
export const removeObject = (id) => {
  return { type: DELETE_OBJECT, id };
};

export const deleteObjectFromBD = (id) => async (dispatch) => {
  dispatch(objectsLoading(true));
  const { value, error } = await Repository.APIObjects.deleteObject(id);
  if (error || !value) {
    dispatch(loadingError(true));
  } else {
    dispatch(removeObject(id));
  }
  dispatch(objectsLoading(false));
};

export const getObjectsFromBD = () => async (dispatch) => {
  dispatch(objectsLoading(true));
  const { value, error } = await Repository.APIObjects.getObjects();
  if (!value || error) {
    dispatch(loadingError(true));
  }
  dispatch(setStateObjects(value.sort((a, b) => (a.rate > b.rate ? -1 : 1))));
  dispatch(objectsLoading(false));
};

export const getObjectFromBD = (id) => async (dispatch) => {
  dispatch(objectsLoading(true));
  const { value, error } = await Repository.APIObjects.getObject(id);
  if (!value || error) {
    dispatch(loadingError(true));
  }
  dispatch(setCurrentObject(value));
  dispatch(objectsLoading(false));
};

export const setObjectsIntoBD =
  (img, name, country, text, rate) => async (dispatch) => {
    dispatch(objectsLoading(true));
    const { value, error } = await Repository.APIObjects.createObject(
      img,
      name,
      country,
      text,
      rate
    );
    if (!value || error) {
      dispatch(loadingError(true));
    }
    dispatch(setStateObjects(value));
    dispatch(objectsLoading(false));
  };

export const updateRate = (id, rate) => async (dispatch) => {
  dispatch(objectsLoading(true));
  const { value, error } = await Repository.APIObjects.updateObject(id, rate);
  if (error || !value) {
    dispatch(loadingError(true));
  } else {
    dispatch(changeRate(id, rate));
  }
  dispatch(objectsLoading(false));
};

export const setSearchObjects = (data) => ({
  type: SEARCH_OBJECTS,
  payload: data,
});
export const isSearch = (bool) => ({ type: IS_SEARCH, payload: bool });
export const setSearchObjectsFromBD =
  (name = '') =>
  async (dispatch) => {
    dispatch(isSearch(true));
    dispatch(objectsLoading(true));
    const { value, error } = await Repository.APIObjects.searchObject(name);
    error || !value
      ? dispatch(setSearchObjects([]))
      : dispatch(setSearchObjects([value]));
    dispatch(objectsLoading(false));
  };

export const setObjectsLength = (length) => ({
  type: GET_OBJECTS_LENGTH,
  payload: length,
});
export const setCurrentPage = (number) => ({
  type: SET_CURRENT_PAGE,
  payload: number,
});
export const setPaginationPage = (number) => ({
  type: SET_PAGINATION_PAGE,
  payload: number
})
