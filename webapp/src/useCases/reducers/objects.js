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
} from "../actionTypes/objects";

export const initialState = {
  objects: [],
  likedObjects: JSON.parse(localStorage.getItem("liked")) || [],
	currentObject: {
		img: "",
		name: "",
		country: "",
		text: "",
		rate: "",
		id: ""

	},
  objectsLength: 10,
  currentPage: 1,
  paginationPage: 1,
  isSearch: false,
  searchObject: [],
  isError: false,
  isLoader: false,
  sortBy: "up",
};

const objects = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE_OBJECTS: {
      return {
        ...state,
        objects: action.payload,
      };
    }
    case SET_LIKED_OBJECTS: {
      return {
        ...state,
        likedObjects: JSON.parse(localStorage.getItem("liked")) || [],
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
      let rate = action.rate;
      return {
        ...state,
        currentObject: { ...state.currentObject, rate },
      };
    }
    case DELETE_OBJECT: {
      return {
        ...state,
        objects: state.objects.filter((i) => i.id !== action.id),
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
    case GET_OBJECTS_LENGTH: {
      return {
        ...state,
        objectsLength: action.payload
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload
      }
    }
    case SET_PAGINATION_PAGE: {
      return {
        ...state,
        paginationPage: action.payload
      }
    }

    default:
      return state;
  }
};

export default objects;
