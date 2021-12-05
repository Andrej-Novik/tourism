import {
  SET_STATE_OBJECTS,
  CHANGE_OBJECT_LOADER,
  ERROR_OBJECT_USERS,
  SET_CURRENT_OBJECT,
  CHANGE_RATE,
  SET_SORT_OBJECTS,
  IS_SEARCH,
  SEARCH_OBJECTS
} from "../actionTypes/objects";

export const initialState = {
  objects: [],
	currentObject: {
		img: "",
		name: "",
		country: "",
		text: "",
		rate: "",
		id: ""

	},
  isSearch: false,
  searchObject: [],
  isError: false,
  isLoader: false,
  sortBy: 'up'
};

const objects = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE_OBJECTS: {
      return {
        ...state,
        objects: action.payload,
      };
    }
    case SET_SORT_OBJECTS: {
      return {
        ...state,
        sortBy: action.payload,
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
    case CHANGE_RATE: {
      console.log(action.rate, action.id);
      let rate = action.rate;
      return {
        ...state,
        currentObject: {...state.currentObject, rate }
          
        
      };
    }
    case IS_SEARCH: {
      return {
        ...state,
        isSearch: action.payload,
      };
    }
    case SEARCH_OBJECTS: {
      return {
        ...state,
        searchObject: action.payload,
      };
    }
    default:
      return state;
  }
};

export default objects;
