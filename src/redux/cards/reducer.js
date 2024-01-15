import { SET_CARD} from "./actions";


const initialValue = {
    cards: []   
}

const cardsReducer = (state = initialValue, action) => {
    switch (action.type) {
        case (SET_CARD): {
            return { ...state, cards: action.payload }
        }
       
        default: return state;
    }
}

export default cardsReducer;