import {
  SET_STATE_OBJECTS,
  CHANGE_OBJECT_LOADER,
  ERROR_OBJECT_USERS,
} from "../actionTypes/objects";

export const initialState = {
  objects: [
    {
      img: "https://bestmaps.ru/files/content_images/20130904120023.jpg",
      name: "Египетские пирамиды",
      country: "Египет",
      text: "Египетские пирамиды, расположенные недалеко от города Каир, где плодородная долина Нила граничит с раскаленными песками Ливийской пустыни, представляют собой величайшие архитектурные памятники античности. Эти гигантские каменные строения не перестают удивлять своей внушающей благоговение монументальностью. Имеющие правильную пирамидальную форму, они служили гробницами для могущественных фараонов Древнего Египта. Почему этим сооружениям придана именно форма многогранника? Как появилась традиция хоронить умерших правителей в таких грандиозных склепах? И под силу ли было людям строительство пирамид – может, за них это сделали таинственные пришельцы с других планет или боги? Однозначных ответов на эти вопросы нет до сих пор. Впечатляет и количество этих памятников, которых на сегодняшний день известно свыше ста. Причем, как считают египтологи, таких некрополей может быть больше, просто не все из них еще открыты.",
      rate: 3,
    },
  ],
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
    default:
      return state;
  }
};

export default objects;
