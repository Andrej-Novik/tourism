import {
  SET_STATE_OBJECTS,
  CHANGE_OBJECT_LOADER,
  ERROR_OBJECT_USERS,
  SET_CURRENT_OBJECT
} from "../actionTypes/objects";

export const initialState = {
  objects: [],
  currentObject: [{}],
  isError: false,
  isLoader: false,
};

const objects = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE_OBJECTS: {
      return {
        ...state,
        objects: action.payload,
      };
    }
    case CHANGE_OBJECT_LOADER: {
      return {
        ...state,
        isLoader: action.value,
      };
    }
    case ERROR_OBJECT_USERS: {
      return {
        ...state,
        isError: action.value,
      };
    }
    case SET_CURRENT_OBJECT: {
      return {
        ...state, 
        currentObject: action.payload
      }
    }
    default:
      return state;
  }
};

export default objects;
