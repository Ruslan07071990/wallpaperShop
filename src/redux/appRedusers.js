import {combineReducers} from "redux";
import cardsReducer from  './cards/reducer';
import cartReducer from "./cart/reducer";
import favouriteReducer from "./favourite/reducer";
import modalReducer from './modal/reducer'
import formBuyChecReducer from "./form/reducer";
const appReduser = combineReducers({
    cards: cardsReducer,
    cart:cartReducer,
    favourite: favouriteReducer,
    modal:modalReducer,
    form : formBuyChecReducer,
});


export default appReduser