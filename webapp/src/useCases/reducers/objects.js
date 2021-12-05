import {
  SET_STATE_OBJECTS,
  CHANGE_OBJECT_LOADER,
  ERROR_OBJECT_USERS,
  SET_CURRENT_OBJECT,
  CHANGE_RATE,
  SET_SEARCHING_OBJECT,
} from "../actionTypes/objects";

export const initialState = {
  objects: [],
  serarchingObject: undefined ,
  currentObject: {
    img: "",
    name: "",
    country: "",
    text: "",
    rate: "",
    id: "",
  },
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
        currentObject: action.payload,
      };
    }
    case SET_SEARCHING_OBJECT: {
      return {
        ...state,
        serarchingObject: action.object,
      };
    }
    case CHANGE_RATE: {
      console.log(action.rate, action.id);
      let rate = action.rate;
      return {
        ...state,
        currentObject: { ...state.currentObject, rate },
      };
    }
    default:
      return state;
  }
};

export default objects;
