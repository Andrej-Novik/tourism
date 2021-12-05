import {
  SET_STATE_OBJECTS,
  CHANGE_OBJECT_LOADER,
  ERROR_OBJECT_USERS,
} from "../actionTypes/objects";
import Repository from "../../repository";

export const setStateObjects = (objects) => {
  return { type: SET_STATE_OBJECTS, payload: objects };
};
export function objectsLoading(value) {
  return { type: CHANGE_OBJECT_LOADER, value };
}
export function loadingError(value) {
  return { type: ERROR_OBJECT_USERS, value };
}

export const getObjectsFromBD = () => async (dispatch) => {
  dispatch(objectsLoading(true));
  const { value, error } = await Repository.APIObjects.getObjects();
  if (!value || error) {
    dispatch(loadingError(true));
  }
  dispatch(setStateObjects(value));
  dispatch(objectsLoading(false));
};
export const setObjectsIntoBD = (img, name, country, text, rate) => async (dispatch) => {
  dispatch(objectsLoading(true));
  const { value, error } = await Repository.APIObjects.createObject(img, name, country, text, rate);
  if (!value || error) {
    dispatch(loadingError(true));
  }
  dispatch(setStateObjects(value));
  dispatch(objectsLoading(false));
};
