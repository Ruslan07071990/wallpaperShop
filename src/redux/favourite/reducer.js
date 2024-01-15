import { SET_FAVOURITE, CHANGE_FAVOURITE } from "./actions";
import { saveStateToLocalStorage } from "../../components/utils/localStorageHelper";

import { FAV_LS_KEY } from "../../components/constants";
const initialValue = {
  cards: [],
};

const favouriteReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_FAVOURITE: {
      return { ...state, cards: action.payload };
    }

    case CHANGE_FAVOURITE: {
      const newCards = [...state.cards];
      const card = action.payload;

      const index = newCards.findIndex((el) => el.id === card.id);
      if (index !== -1) {
        newCards.splice(index, 1);
      } else {
        newCards.push(card);
      }
      saveStateToLocalStorage(FAV_LS_KEY, newCards);

      return { ...state, cards: newCards };
    }

    default:
      return state;
  }
};

export default favouriteReducer;
