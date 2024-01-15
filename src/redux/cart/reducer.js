import { SET_CART, ADD_TO_CART, DELETE_FROM_CART } from "./actions";

import { saveStateToLocalStorage } from "../../components/utils/localStorageHelper";
import { CART_LS_KEY } from "../../components/constants";
const initialValue = {
  cards: [],
  count: 0,
  
};

const cartReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_CART: {
      const cards = action.payload;
      let count = 0;
      
      cards.forEach((card) => {
        count += card.count;
       
      });

      return { ...state, cards, count};
    }
    case ADD_TO_CART: {
      let newCards = [...state.cards];
      let newCount = state.count;
     
      const card = action.payload;
      const index = newCards.findIndex((el) => el.id === card.id);
      if (index !== -1) {
        newCards[index].count++;
        newCount++;
        

        saveStateToLocalStorage(CART_LS_KEY, newCards);
        return {
          ...state,
          cards: newCards,
          count: newCount,
         
        };
      } else {
        card.count = 1;
        newCount++;
       
        newCards.push(card);
        saveStateToLocalStorage(CART_LS_KEY, newCards);
        return {
          ...state,
          cards: newCards,
          count: newCount,
        
        };
      }
    }

    case DELETE_FROM_CART: {
      const newCards = [...state.cards];
      let newCount = state.count;
     
      const card = action.payload;
      const index = newCards.findIndex((el) => el.id === card.id);
      newCards.splice(index, 1);
      
      newCount -= card.count;
      saveStateToLocalStorage(CART_LS_KEY, newCards);
      return {
        ...state,
        cards: newCards,
        count: newCount,
        
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
